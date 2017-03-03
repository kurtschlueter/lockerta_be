import React, { Component } from 'react';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';

import ReviewListPresenter from './ReviewListPresenter.jsx';
import ImportCSVContainer from '../ImportCSV/ImportCSVContainer.jsx';

import * as reviewActions from './../../actions/reviewActions.js';
import * as clientActions from './../../actions/clientActions.js';
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
    this.props.showNewReviewButton();
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
    if (nextState.showImportCSV) this.props.hideNewReviewButton();
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
    this.props.setReview(this.state.filteredReviews.filter(s => s.id === review.id));
    this.props.setDetailView(false);
    // console.log('after setschool in row click listener', this.props)
    this.props.hideNewReviewButton();
    browserHistory.push(`/reviewDetail/${review.id}`);
  }

  searchHandler(e) {
    console.log("come on")
    if (this.state.searchTerm !== "") {
      console.log(this.state.searchTerm);
      this.props.searchReviews(this.state.searchTerm)
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
  schools: selectors.getSchools(state),
  hasClients: state.schools.hasClients,
  showImportCSV: state.schools.showImportCSV
});

const mapDispatchToProps = dispatch => ({
  fetchReviews: () => dispatch(reviewActions.fetchReviews()),
  setReview: review => dispatch(reviewActions.setReview(review)),
  setDetailView: bool => dispatch(clientActions.setDetailView(bool)),
  showNewReviewButton: () => dispatch(navbarActions.showNewReviewButton()),
  hideNewReviewButton: () => dispatch(navbarActions.hideNewReviewButton()),
  searchReviews: query => dispatch(reviewActions.searchReviews(query))
});

export default connect(mapStateToProps, mapDispatchToProps)(ReviewListContainer);
