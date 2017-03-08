import React, { Component } from 'react';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';

import ProgramListPresenter from './ProgramListPresenter.jsx';
import ImportCSVContainer from '../ImportCSV/ImportCSVContainer.jsx';

import * as programActions from './../../actions/programActions.js';
import * as clientActions from './../../actions/clientActions.js';
import * as navbarActions from './../../actions/navbarActions.js';
import * as selectors from './../../reducers/reducers.js';

const resourceConstants = require(`../../assets/resources/${process.env.RESOURCES}/constants.js`);

class ProgramListContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasClients: null,
      showNewClientDropdown: false,
      showImportCSV: false,
      filteredPrograms: [],
      searchTerm: "",
    };
    this.newClientDropdownHandler = this.newClientDropdownHandler.bind(this);
    this.importCSVHandler = this.importCSVHandler.bind(this);
    this.rowClickListener = this.rowClickListener.bind(this);
    this.searchHandler = this.searchHandler.bind(this);
    this.handleSearchChange = this.handleSearchChange.bind(this);
  }

  componentWillMount() {
    this.props.fetchPrograms();
  }

  componentWillReceiveProps(nextProps) {
    console.log('nextProps', nextProps)
    if (this.props !== nextProps) {
      this.setState({
        hasClients: nextProps.hasClients,
        showImportCSV: nextProps.showImportCSV,
        // filteredSchools: nextProps.schools
        filteredPrograms: nextProps.programs.filter(program => !program.is_deleted)
      });
    }
  }

  componentWillUpdate(nextProps, nextState) {
    if (nextState.showImportCSV) this.props.hideNewProgramButton();
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
    this.props.setProgram(this.state.filteredPrograms.filter(s => s.id === program.id));
    this.props.setDetailView(false);
    // console.log('after setschool in row click listener', this.props)
    this.props.showNewReviewButton();
    browserHistory.push(`/programDetail/${program.id}`);
  }

  searchHandler(e) {
    console.log("come on")
    if (this.state.searchTerm !== "") {
      console.log(this.state.searchTerm);
      this.props.searchPrograms(this.state.searchTerm)
    } else {
      this.props.fetchPrograms()
    }
  }

  handleSearchChange(e) {
    this.setState({
      searchTerm: e.target.value,
    })
  }

  render() {
    if (this.state.hasClients === null) {
      return <div>Loading</div>;
    }
    if (this.state.showImportCSV) {
      return <ImportCSVContainer />;
    }
    return (
      <ProgramListPresenter
        programs={this.state.filteredPrograms}
        importCSVHandler={this.importCSVHandler}
        rowClickListener={this.rowClickListener}
        searchHandler={this.searchHandler}
        searchTerm={this.searchTerm}
        handleSearchChange={this.handleSearchChange}
      />
    );
  }
}

ProgramListContainer.contextTypes = {
  store: React.PropTypes.object
};

const mapStateToProps = state => ({
  programs: selectors.getPrograms(state),
  schools: selectors.getSchools(state),
  hasClients: state.schools.hasClients,
  showImportCSV: state.schools.showImportCSV
});

const mapDispatchToProps = dispatch => ({
  fetchPrograms: () => dispatch(programActions.fetchPrograms()),
  setProgram: review => dispatch(programActions.setProgram(review)),
  setDetailView: bool => dispatch(clientActions.setDetailView(bool)),
  showNewProgramButton: () => dispatch(navbarActions.showNewProgramButton()),
  showNewReviewButton: () => dispatch(navbarActions.showNewReviewButton()),
  hideNewProgramButton: () => dispatch(navbarActions.hideNewProgramButton()),
  searchPrograms: query => dispatch(programActions.searchPrograms(query))
});

export default connect(mapStateToProps, mapDispatchToProps)(ProgramListContainer);
