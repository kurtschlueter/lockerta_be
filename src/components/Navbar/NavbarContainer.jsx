import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, browserHistory } from 'react-router';
import NavbarPresenter from './NavbarPresenter.jsx';
import * as managerActions from '../../actions/managerActions';
import * as navbarActions from './../../actions/navbarActions.js';
import * as clientActions from '../../actions/clientActions';

class NavbarContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      showNewSchoolButton: false,
      showNewManagerButton: false,
    }
    this.newSchoolClickHandler = this.newSchoolClickHandler.bind(this);
  }


  componentDidUpdate(){
  }

  componentWillReceiveProps(nextProps) {
    if (this.props !== nextProps) {
      this.setState({
        showNewManagerButton: nextProps.showNewManagerButton,
        showNewSchoolButton: nextProps.showNewClientButton
      });
    }
  }

  newSchoolClickHandler() {
    this.props.hideNewClientButton();
    this.props.setDetailView(true);
    browserHistory.push(`/schoolDetail/`);
  }

  render () {
    return (
      <NavbarPresenter
        newSchoolClickHandler={this.newSchoolClickHandler}
        showNewSchoolButton={this.state.showNewSchoolButton}
        showNewManagerButton={this.state.showNewManagerButton}
        showNewManagerView={this.props.showNewManagerView}
      />
    )
  }
}

const mapStateToProps = (state) => ({
  showNewClientButton: state.navbar.showNewClientButton,
  showNewManagerButton: state.navbar.showNewManagerButton,
  detailViewNew: state.schools.detailViewNew
})
const mapDispatchToProps = (dispatch) => ({
  showNewManagerView: () => {
    return dispatch(managerActions.showNewManagerView())
  },
  showImportCSV: () => {
    return dispatch(clientActions.showImportCSV())
  },
  hideNewClientButton: () => dispatch(navbarActions.hideNewClientButton()),
  setSchool: school => dispatch(clientActions.setSchool(school)),
  setDetailView: bool => dispatch(clientActions.setDetailView(bool)),
})

export default connect(mapStateToProps, mapDispatchToProps)(NavbarContainer);
