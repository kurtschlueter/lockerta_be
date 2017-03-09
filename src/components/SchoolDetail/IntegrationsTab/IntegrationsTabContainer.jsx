import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import IntegrationsTabPresenter from './IntegrationsTabPresenter.jsx';
import * as integrationActions from './../../../actions/integrationActions.js';
import * as selectors from './../../../reducers/reducers.js';
import * as modalActions from './../../../actions/modalActions.js';
import Constants from './../../../utils/localConstants'
import { browserHistory } from 'react-router';


import * as programActions from './../../../actions/programActions.js';
import * as reviewActions from './../../../actions/reviewActions.js';
import * as clientActions from './../../../actions/clientActions.js';
import * as navbarActions from './../../../actions/navbarActions.js';

const resourceConstants = require(`../../../assets/resources/${process.env.RESOURCES}/constants.js`);

class IntegrationsTabContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasClients: null,
      showNewClientDropdown: false,
      showImportCSV: false,
      filteredSchoolPrograms: [],
      searchTerm: "",
    };
    this.newClientDropdownHandler = this.newClientDropdownHandler.bind(this);
    this.importCSVHandler = this.importCSVHandler.bind(this);
    this.rowClickListener = this.rowClickListener.bind(this);
    this.handleSearchChange = this.handleSearchChange.bind(this);
  }

  componentWillMount() {
    console.log('school programs tab will mount props', this.props)
    console.log('school programs tabl will mount state', this.state)
    this.props.fetchSchoolPrograms(this.props.school.id);
    this.props.showNewProgramButton();
  }

  componentWillReceiveProps(nextProps) {
    console.log('nextProps', nextProps)
    if (this.props !== nextProps) {
      this.setState({
        hasClients: nextProps.hasClients,
        showImportCSV: nextProps.showImportCSV,
        // filteredSchools: nextProps.schools
        filteredSchoolPrograms: nextProps.schoolprograms.filter(program => !program.is_deleted)
      });
    }
  }

  componentWillUpdate(nextProps, nextState) {
    if (nextState.showImportCSV) this.props.hideNewClientButton();
    if (this.state.showImportCSV && !nextState.showImportCSV) this.props.showNewProgramButton();
  }

  importCSVHandler() {
    this.setState({ showImportCSV: true });
  }
  newClientDropdownHandler() {
    this.setState({ showNewClientDropdown: !this.state.showNewClientDropdown });
  }
  rowClickListener(program) {
    // console.log('yassssss', school)
    // console.log('filtered school', this.state.filteredSchools)
    localStorage.setItem('index', 1)
    this.props.setProgram(this.state.filteredSchoolPrograms.filter(s => s.id === program.id));
    this.props.setDetailView(false);
    // console.log('after setschool in row click listener', this.props)
    this.props.hideNewClientButton();
    browserHistory.push(`/programDetail/${program.id}`);
  }

  handleSearchChange(e) {
    console.log("handle search change")
    this.setState({
      searchTerm: e.target.value,
    }, this.triggerSearch)
  }

  triggerSearch(){
    if (this.state.searchTerm !== "") {
      console.log(this.state.searchTerm);
      this.props.searchSchoolPrograms(this.props.school.id, this.state.searchTerm)
    } else {
      this.props.fetchSchoolPrograms(this.props.school.id)
    }
  }

  render() {
    if (this.state.hasClients === null) {
      return <div>Loading</div>;
    }
    return (
      <IntegrationsTabPresenter
        schoolprograms={this.state.filteredSchoolPrograms}
        importCSVHandler={this.importCSVHandler}
        rowClickListener={this.rowClickListener}
        searchTerm={this.searchTerm}
        handleSearchChange={this.handleSearchChange}
      />
    );
  }
}

IntegrationsTabContainer.contextTypes = {
  store: React.PropTypes.object
};

const mapStateToProps = state => ({
  programs: selectors.getPrograms(state),
  schoolprograms: selectors.getSchoolPrograms(state),
  schools: selectors.getSchools(state),
  hasClients: state.schools.hasClients,
  showImportCSV: state.schools.showImportCSV
});

const mapDispatchToProps = dispatch => ({
  fetchSchoolPrograms: (id) => dispatch(clientActions.fetchSchoolPrograms(id)),
  setProgram: review => dispatch(programActions.setProgram(review)),
  setReview: review => dispatch(reviewActions.setReview(review)),
  setSchool: school => dispatch(clientActions.setSchool(school)),
  setDetailView: bool => dispatch(clientActions.setDetailView(bool)),
  showNewProgramButton: () => dispatch(navbarActions.showNewProgramButton()),
  hideNewClientButton: () => dispatch(navbarActions.hideNewClientButton()),
  searchSchoolPrograms: (id, query) => dispatch(clientActions.searchSchoolPrograms(id, query))
});

export default connect(mapStateToProps, mapDispatchToProps)(IntegrationsTabContainer);
