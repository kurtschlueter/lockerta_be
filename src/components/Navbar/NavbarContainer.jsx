import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, browserHistory } from 'react-router';
import NavbarPresenter from './NavbarPresenter.jsx';
import * as managerActions from '../../actions/managerActions';
import * as navbarActions from './../../actions/navbarActions.js';
import * as clientActions from '../../actions/clientActions';
import * as reviewActions from '../../actions/reviewActions';
import * as programActions from '../../actions/programActions';

class NavbarContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      showNewSchoolButton: false,
      showNewManagerButton: false,
      showNewReviewButton: false,
      showNewProgramButton: false
    }
    this.newSchoolClickHandler = this.newSchoolClickHandler.bind(this);
    this.newReviewClickHandler = this.newReviewClickHandler.bind(this);
    this.newProgramClickHandler = this.newProgramClickHandler.bind(this);
  }


  componentDidUpdate(){
  }

  componentWillReceiveProps(nextProps) {
    if (this.props !== nextProps) {
      this.setState({
        showNewManagerButton: nextProps.showNewManagerButton,
        showNewSchoolButton: nextProps.showNewClientButton,
        showNewReviewButton: nextProps.showNewReviewButton,
        showNewProgramButton: nextProps.showNewProgramButton
      });
    }
  }

  newSchoolClickHandler() {
    this.props.hideNewClientButton();
    this.props.setDetailView(true);
    browserHistory.push(`/schoolDetail/`);
  }

  newReviewClickHandler() {
    this.props.hideNewReviewButton();
    this.props.setDetailView(true);
    browserHistory.push(`/reviewDetail/`);
  }

  newProgramClickHandler() {
    this.props.hideNewProgramButton();
    this.props.setDetailView(true);
    browserHistory.push(`/programDetail/`);
  }

  render () {
    return (
      <NavbarPresenter
        newSchoolClickHandler={this.newSchoolClickHandler}
        newReviewClickHandler={this.newReviewClickHandler}
        newProgramClickHandler={this.newProgramClickHandler}
        showNewSchoolButton={this.state.showNewSchoolButton}
        showNewManagerButton={this.state.showNewManagerButton}
        showNewManagerView={this.props.showNewManagerView}
        showNewReviewButton={this.props.showNewReviewButton}
        showNewProgramButton={this.props.showNewProgramButton}
      />
    )
  }
}

const mapStateToProps = (state) => ({
  showNewClientButton: state.navbar.showNewClientButton,
  showNewReviewButton: state.navbar.showNewReviewButton,
  showNewProgramButton: state.navbar.showNewProgramButton,
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
  hideNewReviewButton: () => dispatch(navbarActions.hideNewReviewButton()),
  hideNewProgramButton: () => dispatch(navbarActions.hideNewProgramButton()),
  setSchool: school => dispatch(clientActions.setSchool(school)),
  setDetailView: bool => dispatch(clientActions.setDetailView(bool)),
})

export default connect(mapStateToProps, mapDispatchToProps)(NavbarContainer);
