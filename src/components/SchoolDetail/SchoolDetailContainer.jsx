import React, { Component } from 'react';
import { connect } from 'react-redux';

import SchoolDetailPresenter from './SchoolDetailPresenter.jsx';

const tabs = require(`../../assets/resources/${process.env.RESOURCES}/tabs.jsx`).tabs;

import * as clientActions from './../../actions/clientActions.js';
import * as selectors from './../../reducers/reducers.js';

class SchoolDetailContainer extends Component {
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
    console.log('in componentWillMount SCHOOL DEtAIL', this.props)
    // debugger
    if (this.props.detailViewNew == true && this.props.schoolId) {
      
      this.props.fetchSchool(this.props.schoolId);
      this.props.setDetailView(false);
      // debugger
    } else if (this.props.detailViewNew == false && this.props.schoolId){
      this.props.fetchSchool(this.props.schoolId);

    } else if (this.props.detailViewNew == true && !this.props.schoolId){
      // this.props.fetchSchool(this.props.schoolId);
    }    
  }

  componentWillReceiveProps(nextProps) {
    console.log('componentWillReceiveProps', nextProps)
    if (this.props !== nextProps) {
      // debugger
      console.log("yes in here")
      if (nextProps.school) {
        console.log("yes in here2")
        this.setState({
          school: nextProps.school.school,
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
    // console.log('updated school', updatedSchool)
    Object.assign(this.school, updatedSchool);
  }

  render() {
    console.log('in render state', this.state)
    console.log('in render props', this.props)
    if (this.state.basicTabs && this.state.activeTab !== null) {
      let activeTabComponent = this.state.basicTabs.metadata[this.state.activeTab].component;
      // console.log('activeTabComponent', activeTabComponent)
      return (
        <SchoolDetailPresenter
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

SchoolDetailContainer.contextTypes = {
  store: React.PropTypes.object
};

const mapStateToProps = (state, ownProps) => ({
  school: selectors.setSchool(state),
  schoolId: ownProps.params.schoolId,
  detailViewNew: state.schools.detailViewNew
});

const mapDispatchToProps = (dispatch) => ({
  setDetailView: bool => dispatch(clientActions.setDetailView(bool)),
  fetchSchool: (id) => {
    return dispatch(clientActions.fetchSchool(id));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(SchoolDetailContainer);
