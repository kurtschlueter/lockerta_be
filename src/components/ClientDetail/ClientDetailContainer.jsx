import React, { Component } from 'react';
import { connect } from 'react-redux';

import ClientDetailPresenter from './ClientDetailPresenter.jsx';

const tabs = require(`../../assets/resources/${process.env.RESOURCES}/tabs.jsx`).tabs;

import * as clientActions from './../../actions/clientActions.js';
import * as selectors from './../../reducers/reducers.js';

class ClientDetailContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      school: {},
      activeTab: null,
      basicTabs: {}
    };
    this.tabSelect = this.tabSelect.bind(this);
    this.updateSchool = this.updateSchool.bind(this);
  }

  componentWillMount() {
    this.props.fetchSchool(this.props.school.id);
    console.log('component will mount', this.props)
  }

  componentWillReceiveProps(nextProps) {
    console.log('componentWillReceiveProps', nextProps)
    if (this.props !== nextProps) {
      if (nextProps.school) {
        this.setState({
          school: nextProps.school,
          activeTab: 0,
          basicTabs: {
            metadata: tabs.map(tab => {
              const compProps = {
                school: nextProps.school,
                updateSchool: tab.tabID === 'information' ? this.updateSchool : null
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

  updateSchool(updatedSchool) {
    Object.assign(this.school, updatedSchool);
  }

  render() {
    console.log('in render state', this.state)
    console.log('in render props', this.props)
    if (this.state.basicTabs && this.state.activeTab !== null) {
      let activeTabComponent = this.state.basicTabs.metadata[this.state.activeTab].component;
      return (
        <ClientDetailPresenter
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

ClientDetailContainer.contextTypes = {
  store: React.PropTypes.object
};

const mapStateToProps = (state, ownProps) => ({
  school: selectors.setSchool(state),
  schoolId: ownProps.params.schoolId
});

const mapDispatchToProps = (dispatch) => ({
  fetchSchool: (id) => {
    return dispatch(clientActions.fetchSchool(id));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(ClientDetailContainer);
