import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import ProgramReviewsTabPresenter from './ProgramReviewsTabPresenter.jsx';
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

class ProgramReviewsTabContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasClients: null,
      showNewClientDropdown: false,
      showImportCSV: false,
      filteredProgramReviews: [],
      searchTerm: "",
    };
    this.newClientDropdownHandler = this.newClientDropdownHandler.bind(this);
    this.importCSVHandler = this.importCSVHandler.bind(this);
    this.rowClickListener = this.rowClickListener.bind(this);
    this.searchHandler = this.searchHandler.bind(this);
    this.handleSearchChange = this.handleSearchChange.bind(this);
  }

  componentWillMount() {
    console.log('program reviews tab will mount props', this.props)
    console.log('program reviews tabl will mount state', this.state)
    this.props.fetchProgramReviews(this.props.program.id);
    this.props.showNewReviewButton();
  }

  componentWillReceiveProps(nextProps) {
    console.log('nextProps', nextProps)
    if (this.props !== nextProps) {
      this.setState({
        hasClients: nextProps.hasClients,
        showImportCSV: nextProps.showImportCSV,
        // filteredSchools: nextProps.schools
        filteredProgramReviews: nextProps.programreviews.filter(review => !review.is_deleted)
      });
    }
  }

  componentWillUpdate(nextProps, nextState) {
    if (nextState.showImportCSV) this.props.hideNewProgramButton();
    if (this.state.showImportCSV && !nextState.showImportCSV) this.props.showNewReviewButton();
  }

  importCSVHandler() {
    this.setState({ showImportCSV: true });
  }
  newClientDropdownHandler() {
    this.setState({ showNewClientDropdown: !this.state.showNewClientDropdown });
  }
  rowClickListener(review) {
    // console.log('yassssss', school)
    // console.log('filtered school', this.state.filteredSchools)
    localStorage.setItem('index', 2)
    this.props.setReview(this.state.filteredProgramReviews.filter(s => s.id === review.id));
    this.props.setDetailView(false);
    // console.log('after setschool in row click listener', this.props)
    this.props.hideNewProgramButton();
    browserHistory.push(`/reviewDetail/${review.id}`);
  }

  searchHandler(e) {
    if (this.state.searchTerm !== "") {
      this.props.searchProgramReviews(this.props.program.id, this.state.searchTerm)
    } else {
      this.props.fetchProgramReviews(this.props.program.id)
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
      <ProgramReviewsTabPresenter
        programreviews={this.state.filteredProgramReviews}
        importCSVHandler={this.importCSVHandler}
        rowClickListener={this.rowClickListener}
        searchHandler={this.searchHandler}
        searchTerm={this.searchTerm}
        handleSearchChange={this.handleSearchChange}
      />
    );
  }
}

ProgramReviewsTabContainer.contextTypes = {
  store: React.PropTypes.object
};

const mapStateToProps = state => ({
  programs: selectors.getPrograms(state),
  programreviews: selectors.getProgramReviews(state),
  schools: selectors.getSchools(state),
  hasClients: state.schools.hasClients,
  showImportCSV: state.schools.showImportCSV
});

const mapDispatchToProps = dispatch => ({
  fetchProgramReviews: (id) => dispatch(programActions.fetchProgramReviews(id)),
  setProgram: review => dispatch(programActions.setProgram(review)),
  setReview: review => dispatch(reviewActions.setReview(review)),
  setDetailView: bool => dispatch(clientActions.setDetailView(bool)),
  showNewReviewButton: () => dispatch(navbarActions.showNewReviewButton()),
  hideNewProgramButton: () => dispatch(navbarActions.hideNewProgramButton()),
  searchProgramReviews: (id, query) => dispatch(programActions.searchProgramReviews(id, query))
});

export default connect(mapStateToProps, mapDispatchToProps)(ProgramReviewsTabContainer);
