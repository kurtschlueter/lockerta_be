import React, { Component } from 'react';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';

import SchoolListPresenter from './SchoolListPresenter.jsx';
import ImportCSVContainer from '../ImportCSV/ImportCSVContainer.jsx';

import * as clientActions from './../../actions/clientActions.js';
import * as navbarActions from './../../actions/navbarActions.js';
import * as selectors from './../../reducers/reducers.js';

const resourceConstants = require(`../../assets/resources/${process.env.RESOURCES}/constants.js`);

class SchoolListContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasClients: null,
      showNewClientDropdown: false,
      showImportCSV: false,
      filteredSchools: [],
    };
    this.newClientDropdownHandler = this.newClientDropdownHandler.bind(this);
    this.importCSVHandler = this.importCSVHandler.bind(this);
    this.rowClickListener = this.rowClickListener.bind(this);
  }

  componentWillMount() {
    this.props.fetchSchools();
    this.props.showNewClientButton();
  }

  componentWillReceiveProps(nextProps) {
    console.log('nextProps', nextProps)
    if (this.props !== nextProps) {
      this.setState({
        hasClients: nextProps.hasClients,
        showImportCSV: nextProps.showImportCSV,
        filteredSchools: nextProps.schools
        // filteredSchools: nextProps.schools.filter(school => !school.is_deleted)
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

  render() {
    if (this.state.hasClients === null) {
      return <div>Loading</div>;
    }
    if (this.state.showImportCSV) {
      return <ImportCSVContainer />;
    }
    return (
      <SchoolListPresenter
        schools={this.state.filteredSchools}
        importCSVHandler={this.importCSVHandler}
        rowClickListener={this.rowClickListener}
      />
    );
  }
}

SchoolListContainer.contextTypes = {
  store: React.PropTypes.object
};

const mapStateToProps = state => ({
  schools: selectors.getSchools(state),
  hasClients: state.schools.hasClients,
  showImportCSV: state.schools.showImportCSV
});

const mapDispatchToProps = dispatch => ({
  fetchSchools: () => dispatch(clientActions.fetchSchools()),
  setSchool: school => dispatch(clientActions.setSchool(school)),
  setDetailView: bool => dispatch(clientActions.setDetailView(bool)),
  showNewClientButton: () => dispatch(navbarActions.showNewClientButton()),
  hideNewClientButton: () => dispatch(navbarActions.hideNewClientButton())
});

export default connect(mapStateToProps, mapDispatchToProps)(SchoolListContainer);
