import React, { Component } from 'react';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';

import ReviewListPresenter from './ReviewListPresenter.jsx';
import ImportCSVContainer from '../ImportCSV/ImportCSVContainer.jsx';

import * as reviewActions from './../../actions/reviewActions.js';
import * as navbarActions from './../../actions/navbarActions.js';
import * as selectors from './../../reducers/reducers.js';

const resourceConstants = require(`../../assets/resources/${process.env.RESOURCES}/constants.js`);

class ReviewListContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasClients: null,
      showNewClientDropdown: false,
      showImportCSV: false,
      filteredReviews: [],
      searchTerm: "",
    };
    this.newClientDropdownHandler = this.newClientDropdownHandler.bind(this);
    this.importCSVHandler = this.importCSVHandler.bind(this);
    this.rowClickListener = this.rowClickListener.bind(this);
    this.searchHandler = this.searchHandler.bind(this);
    this.handleSearchChange = this.handleSearchChange.bind(this);
  }

  componentWillMount() {
    this.props.fetchReviews();
    this.props.showNewClientButton();
  }

  componentWillReceiveProps(nextProps) {
    console.log('nextProps', nextProps)
    if (this.props !== nextProps) {
      this.setState({
        hasClients: nextProps.hasClients,
        showImportCSV: nextProps.showImportCSV,
        // filteredSchools: nextProps.schools
        filteredReviews: nextProps.reviews.filter(review => !review.is_deleted)
      });
    }
  }

  componentWillUpdate(nextProps, nextState) {
    if (nextState.showImportCSV) this.props.hideNewClientButton();
    if (this.state.showImportCSV && !nextState.showImportCSV) this.props.showNewClientButton();
  }

  importCSVHandler() {
    this.setState({ showImportCSV: true });
  }
  newClientDropdownHandler() {
    this.setState({ showNewClientDropdown: !this.state.showNewClientDropdown });
  }
  rowClickListener(school) {
    // console.log('yassssss', school)
    // console.log('filtered school', this.state.filteredSchools)
    this.props.setSchool(this.state.filteredSchools.filter(s => s.id === school.id));
    this.props.setDetailView(false);
    // console.log('after setschool in row click listener', this.props)
    this.props.hideNewClientButton();
    browserHistory.push(`/schoolDetail/${school.id}`);
  }

  searchHandler(e) {
    console.log("come on")
    if (this.state.searchTerm !== "") {
      console.log(this.state.searchTerm);
      this.props.searchSchools(this.state.searchTerm)
    } else {
      this.props.fetchReviews()
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
      <ReviewListPresenter
        reviews={this.state.filteredReviews}
        importCSVHandler={this.importCSVHandler}
        rowClickListener={this.rowClickListener}
        searchHandler={this.searchHandler}
        searchTerm={this.searchTerm}
        handleSearchChange={this.handleSearchChange}
      />
    );
  }
}

ReviewListContainer.contextTypes = {
  store: React.PropTypes.object
};

const mapStateToProps = state => ({
  reviews: selectors.getReviews(state),
  hasClients: state.schools.hasClients,
  showImportCSV: state.schools.showImportCSV
});

const mapDispatchToProps = dispatch => ({
  fetchReviews: () => dispatch(reviewActions.fetchReviews()),
  setSchool: school => dispatch(reviewActions.setSchool(school)),
  setDetailView: bool => dispatch(reviewActions.setDetailView(bool)),
  showNewClientButton: () => dispatch(navbarActions.showNewClientButton()),
  hideNewClientButton: () => dispatch(navbarActions.hideNewClientButton()),
  searchSchools: query => dispatch(reviewActions.searchSchools(query))
});

export default connect(mapStateToProps, mapDispatchToProps)(ReviewListContainer);
