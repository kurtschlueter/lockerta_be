import React, { Component } from 'react';
import { connect } from 'react-redux';
import InformationTabPresenter from './InformationTabPresenter.jsx';
import * as clientDetailFunctions from './../ProgramDetailContainer.jsx';
import { browserHistory } from 'react-router';
import * as clientActions from './../../../actions/clientActions.js';
import * as programActions from './../../../actions/programActions.js';
import * as agencyActions from './../../../actions/agencyActions';
import * as managerActions from './../../../actions/managerActions';
import * as specialistActions from './../../../actions/specialistActions';
import * as modalActions from '../../../actions/modalActions.js';
import Constants from '../../../utils/localConstants.js';


class InformationTabContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      agencies: [],
      managers: [],
      specialists: [],

      // this is the state that holds the last save in case a cancel happens
      holdingClientState: {},

      // These are the view option booleans.
      // Because of these we know what needs to be shown at a specific state
      readOnlyOption: false, // can we edit inside text boxes?
      saveCancelOption: true, // should we show save and cancel buttons?
      deleteOption: false, // should we show delete button?
      editOption: false, // should we show edit option?
      areYouSureChangesPopUpOption: false, // are you sure you want to save popup from new
      areYouSureDeletePopUpOption: false, // are you sure you want to delete popup from new
      managerOption: false, // did manager option get clicked
      stateOption: false,

      putState: false,
      createState: false,
      deleteState: false,
      pagingIndexForOffset: 0, //this is for managers paging. Will probably not need it
    };

    // These are the client profile change handlers.
    // These update the client profile depending on which field was altered.
    this.changeHandler = this.changeHandler.bind(this);

    // These are the onClick functions that set states for view and connect with microservices to get/put/delete data
    this.buttonClicked = this.buttonClicked.bind(this);
    // this.yesButtonClicked = this.yesButtonClicked.bind(this);
    // this.noButtonClicked = this.noButtonClicked.bind(this);
    this.clientTypeClicked = this.clientTypeClicked.bind(this);
    this.managerClicked = this.managerClicked.bind(this);
    this.stateClicked = this.stateClicked.bind(this);
    this.imageLoaderCallback = this.imageLoaderCallback.bind(this);
  }

  componentWillMount() {
    console.log('information tab component will mount state:', this.state)
    console.log('information tab component will mount props:', this.props)

    console.log('information tab container fuck - programs', this.props)
    if (Object.keys(this.props.program).length > 0 && this.props.detailViewNew == false) {

       console.log('information tab container fuck entered for existing program')
      this.setState({
        profile: this.props.program,
        // managers: this.props.managers,
        holdingClientState: this.props.program,
        readOnlyOption: true,
        saveCancelOption: false,
        editOption: true,
        deleteOption: false,
        putState: false,
        deleteState: false,
        createState: false,
        newProgram: false
      });
    } else {
      console.log('information tab container fuck entered for new program')
      this.setState({
        // managers: this.props.managers,
        readOnlyOption: false,
        saveCancelOption: true,
        editOption: false,
        deleteOption: false,
        putState: false,
        deleteState: false,
        createState: true,
        newProgram: true,
        school: this.props.school
      });
    }
  }

  componentWillReceiveProps(nextProps) {
    // debugger
    // if (this.state.agencies !== nextProps.agencies) {
    //   this.setState({
    //     agencies: nextProps.agencies
    //   });
    // }
    // if (this.state.managers !== nextProps.managers) {
    //   this.setState({
    //     managers: nextProps.managers
    //   });
    // }
    // if (this.state.specialists !== nextProps.specialists) {
    //   this.setState({
    //     specialists: nextProps.specialists
    //   });
    // }
    if (!this.props.done && nextProps.done) {
      browserHistory.push('/programList');
    }
    if (!this.props.isConfirmed && nextProps.isConfirmed && this.state.deleteState) {
      console.log('in compoment will receive props')
      const { profile } = this.state;
      // delete profile.products;
      // delete profile.managerName;
      // delete profile.specialistName;
      // delete profile.agencyName;

      this.props.deleteProgramHandler({ ...profile});

    }
    if (!this.props.success && nextProps.success) {
      if (this.state.putState) {
        this.props.showModal({
          message: Constants.saveSuccessMessage,
          isConfirmed: true,
        });
      }
      if (this.state.createState) {
        this.props.showModal({
          message: Constants.createProgramSuccessMessage,
          isConfirmed: true
        });
      }
      if (this.state.deleteState) {
        this.props.showModal({
          message: Constants.deleteProgramSuccessMessage,
          isConfirmed: true,
          type: Constants.delete
        });
      }
    }
  }

  buttonClicked(button) {
    switch (button) {
      case 'saveButton':
      console.log('savvvvveee1')
        const notification = document.getElementById('notification');
        let emptyField = false;
        Object.keys(this.state.profile).forEach(key => {
          if (key !== 'products' && key !== 'id' && key !== 'isActive') {
            if (key === 'managerId' || key === 'specialistId') {
              if (!this.state.profile.managerId && !this.state.profile.specialistId) {
                emptyField = true;
              }
            } else if (this.state.profile[key] === '' || this.state.profile[key] === null) {
              emptyField = true;
            }
          }
        });
        if (emptyField === true) {
          notification.style.visibility = 'visible';
          break;
        } else {
          notification.style.visibility = 'hidden';
          const { profile } = this.state;
          delete profile.products;
          delete profile.managerName;
          delete profile.specialistName;
          delete profile.agencyName;
          if (this.state.putState) {
            this.props.editProgramHandler({ ...profile, is_hidden: 0, is_deleted: 0});
            this.setState({
              readOnlyOption: true,
              saveCancelOption: false,
              deleteOption: false,
              editOption: true
            });
          }
          if (this.state.createState) {
            console.log('yeeessss')
            this.props.addProgramHandler({ ...profile, is_hidden: 0, is_deleted: 0, logo: "https://s-media-cache-ak0.pinimg.com/originals/00/23/70/0023707f1caf3eb3757e751d08f06ac5.gif"});
          }
        }
        break;
      case 'editButton':
        this.setState({
          readOnlyOption: false,
          saveCancelOption: true,
          editOption: false,
          deleteOption: true,
          putState: true,
          deleteState: false,
          createState: false
        });
        break;
      case 'deleteButton':
        this.setState({
          putState: false,
          deleteState: true,
          createState: false
        });
        this.props.showModal({
          message: Constants.deleteProgramMessage,
          isConfirmed: false,
          subMessage: Constants.deleteSubMessage,
          okValue: 'Yes, delete program',
          type: Constants.delete
        });
        break;
      case 'cancelButton':
        if (this.state.putState === true) {
          const propClient = this.props.program;
          this.setState({
            profile: propClient,
            readOnlyOption: true,
            saveCancelOption: false,
            deleteOption: false,
            editOption: true
          });
        } else if (this.state.createState === true) {
          this.setState({
            readOnlyOption: true,
            saveCancelOption: false,
            deleteOption: false,
            editOption: false,
            createState: false,
            areYouSureChangesPopUpOption: false
          });
          browserHistory.push('/programList');
        }
        break;
      default:
        break;
    }
  }

  yesButtonClicked() {
    if (this.state.putState === true) {
      this.setState({
        readOnlyOption: true,
        saveCancelOption: false,
        deleteOption: false,
        editOption: true,
        putState: false,
        areYouSureChangesPopUpOption: false,
        holdingClientState: this.state.profile
      });
    } else if (this.state.createState === true) {
      this.setState({
        readOnlyOption: true,
        saveCancelOption: false,
        deleteOption: false,
        editOption: true,
        createState: false,
        areYouSureChangesPopUpOption: false,
        holdingClientState: this.state.profile
      });
    } else if (this.state.deleteState === true) {
      this.setState({
        readOnlyOption: true,
        saveCancelOption: false,
        deleteOption: false,
        editOption: true,
        deleteState: false,
        areYouSureDeletePopUpOption: false,
        areYouSureChangesPopUpOption: false,
        holdingClientState: this.state.profile
      });
    }
  }

  noButtonClicked() {
    console.log('no')
      this.setState ({
        areYouSureChangesPopUpOption: false,
        areYouSureDeletePopUpOption: false,
      });
  }

  clientTypeClicked() {
      this.setState ({
        managerOption: false,
        stateOption: false,
      });
  }

  managerClicked() {
      this.setState ({
        managerOption: !this.state.managerOption,
        stateOption: false,
      });
  }

  stateClicked() {
      this.setState ({
        managerOption: false,
        stateOption: !this.state.stateOption
      });
  }

  changeHandler(field, param) {
    console.log('change handler field', field)
    console.log('change handler param', param)

    const updatedProfile = Object.assign({}, this.state.profile);

    console.log('updateProfile', updatedProfile)

    if (field === 'manager') {
      updatedProfile.managerId = param.id;
      updatedProfile.managerName = param.name;
      this.setState({ profile: updatedProfile, managerOption: false, stateOption: false });
    } else if (field === 'specialist') {
      updatedProfile.specialistId = param.id;
      updatedProfile.specialistName = param.name;
      this.setState({ profile: updatedProfile, managerOption: false, stateOption: false });
    } else if (field === 'agency') {
      updatedProfile.agencyId = param.id;
      updatedProfile.agencyName = param.name;
      this.setState({ profile: updatedProfile, managerOption: false, stateOption: false });
    } else if (typeof param == 'number' && isNaN(param)) {
      updatedProfile[field] = '';
      this.setState({ profile: updatedProfile, managerOption: false, stateOption: false });
    } else {
      updatedProfile[field] = param;
      updatedProfile['school_id'] = this.state.school.id;
      this.setState({ profile: updatedProfile, managerOption: false, stateOption: false });
    }
  }

  imageLoaderCallback(value) {

    this.changeHandler('logo', value)
  }

  render() {
    return (
      <InformationTabPresenter
        changeHandler={this.changeHandler}
        readOnlyOption={this.state.readOnlyOption}
        saveCancelOption={this.state.saveCancelOption}
        editOption={this.state.editOption}
        deleteOption={this.state.deleteOption}
        areYouSureChangesPopUpOption={this.state.areYouSureChangesPopUpOption}
        areYouSureDeletePopUpOption={this.state.areYouSureDeletePopUpOption}
        managerOption = {this.state.managerOption}
        stateOption = {this.state.stateOption}
        profile={this.state.profile}
        school={this.state.school}
        managers={this.state.managers}
        states={Constants.states}
        selectTestOptions={this.state.selectTestOptions}
        buttonClicked={this.buttonClicked}
        yesButtonClicked={this.yesButtonClicked}
        noButtonClicked={this.noButtonClicked}
        clientTypeClicked={this.clientTypeClicked}
        managerClicked={this.managerClicked}
        stateClicked={this.stateClicked}
        newProgram={this.state.newProgram}
        imageLoaderCallback={this.imageLoaderCallback}
      />
    );
  }
}

InformationTabContainer.contextTypes = {
  store: React.PropTypes.object
};

const mapStateToProps = state => ({
  // agencies: state.agencies.agencies,
  // managers: state.managers.managers,
  // specialists: state.specialists.specialists,
  detailViewNew: state.programs.detailViewNew,
  isConfirmed: state.modal.isConfirmed,
  done: state.modal.done,
  success: state.programs.success
});

const mapDispatchToProps = dispatch => ({
  updateProfile: client => dispatch(clientDetailFunctions.updatedProfile(client)),

  deleteProgramHandler: program => dispatch(programActions.requestDeleteProgram(program)),
  editProgramHandler: program => dispatch(programActions.requestPutProgram(program)),
  addProgramHandler: program => dispatch(programActions.requestPostProgram(program)),

  fetchAgencies: options => dispatch(agencyActions.fetchAgencies(options)),
  fetchAccountManagers: options => dispatch(managerActions.fetchAccountManagers(options)),
  fetchSpecialists: options => dispatch(specialistActions.fetchSpecialists(options)),
  showModal: modalMessage => dispatch(modalActions.showModal(modalMessage)),
});

export default connect(mapStateToProps, mapDispatchToProps)(InformationTabContainer);
