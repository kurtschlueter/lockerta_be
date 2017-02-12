import React, { Component } from 'react';
import { connect } from 'react-redux';
import ManagersPresenter from './ManagersPresenter.jsx';
import ManagerDetailContainer from './ManagerDetailContainer.jsx';
import * as managerActions from '../../actions/managerActions';
import * as navbarActions from '../../actions/navbarActions';
import Constants, { userListMetaData } from '../../utils/localConstants.js';

class ManagersContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      pagingIndexForOffset: 0,
      pagingLimit: Constants.pagingLimit,
      singleSpecialistViewType: Constants.newAccountManagerView,
      specialistData: null,
      displaySingleSpecialist: false,
      showDeleteButton: true,
      managers: []
    };
    this.singleSpecialistHandler = this.singleSpecialistHandler.bind(this);
    this.rowClickListener = this.rowClickListener.bind(this);
    this.paging = this.paging.bind(this);
    this.resetManagers = this.resetManagers.bind(this);
  }

  componentWillMount() {
    this.props.showNewManagerButton();
    this.props.fetchAccountManagers({ limit: Constants.pagingLimit, offset: this.state.pagingIndexForOffset * Constants.pagingLimit });
    this.setState({ pagingIndexForOffset: this.state.pagingIndexForOffset + 1 });
  }

  componentWillReceiveProps(nextProps){
    if (this.state.managers !== nextProps.managers) {
      const newManagers = nextProps.managers.map((manager) => {
        return {
          id: { value: manager.id },
          name: { value: manager.name ? manager.name : '', cellDefinition: 'nameRow' },
          email: { value: manager.email ? manager.email : '', cellDefinition: 'emailRow' },
          phone: { value: manager.phone ? manager.phone : '', cellDefinition: 'phoneRow' },
        };
      });
      this.setState({ managers: newManagers });
    }
    if (nextProps.showListView) {
      this.setState({ displaySingleSpecialist: false });
      this.props.showNewManagerButton();
    }
    if (nextProps.showNewManagerView) {
      this.singleSpecialistHandler();
      this.props.hideNewManagerButton();
    }
  }
  resetManagers() {
    this.setState({
      managers: [],
      loading: true,
      pagingIndexForOffset: 0,
    })
  }
  singleSpecialistHandler() {
    this.setState({
      displaySingleSpecialist: !this.state.displaySingleSpecialist,
      singleSpecialistViewType: Constants.newAccountManagerView,
      specialistData: {},
      showDeleteButton: false,
      pagingIndexForOffset: 0
    });
  }

  paging() {
    // if ( this.state.loading === true) {
    //   this.props.fetchAccountManagers({limit: Constants.pagingLimit, offset: this.state.pagingIndexForOffset * Constants.pagingLimit});
    //   if ( this.props.managers.length < Constants.pagingLimit) {
    //     this.setState({loading: false, pagingIndexForOffset: this.state.pagingIndexForOffset + 1});
    //   } else {
    //     this.setState({loading: true, pagingIndexForOffset: this.state.pagingIndexForOffset + 1});
    //   }
    // }
  }

  rowClickListener(rowData) {
    this.props.hideNewManagerButton();
    this.setState({
      displaySingleSpecialist: !this.state.displaySingleSpecialist,
      singleSpecialistViewType: Constants.existingAccountManagerView,
      specialistData: {
        id: rowData.id.value,
        name: rowData.name.value,
        phone: rowData.phone.value,
        email: rowData.email.value
      },
      showDeleteButton: true
    });
  }
  render() {
    if (this.state.displaySingleSpecialist) {
      return (
        <ManagerDetailContainer
          specialistData={this.state.specialistData}
          singleSpecialistHandler={this.singleSpecialistHandler}
          singleSpecialistViewType={this.state.singleSpecialistViewType}
          showDeleteButton={this.state.showDeleteButton}
          pagingProps={{
            limit: Constants.pagingLimit,
            offset: this.state.pagingIndexForOffset * Constants.pagingLimit
          }}
          resetManagers={this.resetManagers}
          deleteHandler={this.props.deleteHandler}
        />
      );
    }
    return (
      <ManagersPresenter
        singleSpecialistHandler={this.singleSpecialistHandler}
        gridData={{
          metadata: userListMetaData,
          data: this.state.managers
        }}
        rowClickListener={this.rowClickListener}
        loading={this.state.loading}
        paging={this.paging}
      />
    );
  }
}

ManagersContainer.contextTypes = {
  store: React.PropTypes.object
};

ManagersContainer.propTypes = {
  hideNewManagerButton: React.PropTypes.func,
  deleteHandler: React.PropTypes.func,
  showNewManagerButton: React.PropTypes.func,
  fetchAccountManagers: React.PropTypes.func
};

const mapStateToProps = (state) => ({
  managers: state.managers.managers,
  showListView: state.managers.showListView,
  showNewManagerView: state.managers.showNewManagerView
});

const mapDispatchToProps = (dispatch) => ({
  fetchAccountManagers: (options) => {
    return dispatch(managerActions.fetchAccountManagers(options))
  },
  showNewManagerButton: () => {
    return dispatch(navbarActions.showNewManagerButton())
  },
  hideNewManagerButton: () => {
    return dispatch(navbarActions.hideNewManagerButton())
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(ManagersContainer);
