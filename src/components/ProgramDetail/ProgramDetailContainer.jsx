import React, { Component } from 'react';
import { connect } from 'react-redux';

import ProgramDetailPresenter from './ProgramDetailPresenter.jsx';

const tabs = require(`../../assets/resources/${process.env.RESOURCES}/progTabs.jsx`).tabs;

import * as programActions from './../../actions/programActions.js';
import * as selectors from './../../reducers/reducers.js';

class ProgramDetailContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      program: {},
      activeTab: null,
      basicTabs: {}
    };
    this.tabSelect = this.tabSelect.bind(this);
    this.updateProgram = this.updateProgram.bind(this);
  }

  componentWillMount() {

    if (this.props.detailViewNew == false) {
      this.props.fetchProgram(this.props.program.id);
    }
  }

  componentWillReceiveProps(nextProps) {
    console.log('componentWillReceiveProps', nextProps)
    console.log('tabs', tabs)
    if (this.props !== nextProps) {
      if (nextProps.program) {
        this.setState({
          program: nextProps.program,
          activeTab: 0,
          basicTabs: {
            metadata: tabs.map(tab => {
              const compProps = {
                program: nextProps.program,
                updateProgram: tab.tabID === 'information' ? this.updateProgram : null
              };
              tab.component = tab.generateComponent(compProps);
              return tab;
            })
          }
        });
      }
    }
  }

  tabSelect(activeTabIndex) {
    this.setState({ activeTab: activeTabIndex });
  }

  updateProgram(updatedProgram) {
    // console.log('updated school', updatedProgram)
    Object.assign(this.program, updatedProgram);
  }

  render() {
    console.log('in render state', this.state)
    console.log('in render props', this.props)
    if (this.state.basicTabs && this.state.activeTab !== null) {
      let activeTabComponent = this.state.basicTabs.metadata[this.state.activeTab].component;
      // console.log('activeTabComponent', activeTabComponent)
      return (
        <ProgramDetailPresenter
          activeTab={this.state.activeTab}
          tabsList={this.state.basicTabs.metadata}
          activeTabComponent={activeTabComponent}
          tabSelect={this.tabSelect}
        />
      );
    } else {
      return (<div />);
    }
  }
}

ProgramDetailContainer.contextTypes = {
  store: React.PropTypes.object
};

const mapStateToProps = (state, ownProps) => ({
  program: selectors.setProgram(state),
  detailViewNew: state.schools.detailViewNew
});

const mapDispatchToProps = (dispatch) => ({
  fetchProgram: (id) => {
    return dispatch(programActions.fetchProgram(id));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(ProgramDetailContainer);
