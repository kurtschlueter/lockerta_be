import React, { Component } from 'react';
import { connect } from 'react-redux';
import ManagerDetailPresenter from './ManagerDetailPresenter.jsx';
import { browserHistory } from 'react-router';
import * as profileActions from './../../actions/profileActions.js';
import * as managerActions from './../../actions/managerActions.js';
import * as modalActions from './../../actions/modalActions.js';
import * as selectors from './../../reducers/reducers.js';
import Constants from '../../utils/localConstants.js';

class ManagerDetailContainer extends Component {
  constructor(props){
    super(props);
    this.state = {
      profile: {
        id: '',
        name:'',
        email:'',
        phone:''
      },
      type: '',
      showDeleteButton: false,
      isConfirmed: false,
      success: null,
      done: false,
      showEdit: true,
      invalid: false,
      emptyFieldError: 'hidden'
    };
    this.nameChangeHandler = this.nameChangeHandler.bind(this);
    this.emailChangeHandler = this.emailChangeHandler.bind(this);
    this.phoneChangeHandler = this.phoneChangeHandler.bind(this);
    this.showModalHandler = this.showModalHandler.bind(this);
    this.editHandler = this.editHandler.bind(this);
  }

  componentWillMount() {
    if (!this.props.specialistData) {
      this.props.fetchProfile();
    } else {
      this.setState({
        profile: this.props.specialistData,
        title: 'Account Manager Detail',
        showDeleteButton: this.props.showDeleteButton,
        showEdit: this.props.showDeleteButton ? true : false
      });
    }
  }

  componentWillReceiveProps(nextProps) {
    if(this.props !== nextProps) {
      if (nextProps.isConfirmed && !this.props.isConfirmed) {
        switch (this.state.type) {
          case Constants.create:
            this.props.addManagerHandler(this.updateManager(this.state.profile))
            break;
          case Constants.delete:
            this.props.deleteManagerHandler(this.updateManager(this.state.profile))
          default:
            break;
        }
      }
      if (nextProps.success !== this.props.success) {
        this.setState({ success: nextProps.success })
      }
      if (nextProps.done !== this.props.done) this.setState({done: nextProps.done})
      if (!nextProps.specialistData) {
        this.setState({
          profile: nextProps.profile,
          title: 'Profile',
        })
      }
      if (nextProps.isSaved) {
        this.props.fetchProfile();
        this.props.showModal({message: Constants.saveSuccessMessage, isConfirmed: true})
      }
    }
  }
  componentWillUpdate(nextProps, nextState) {
    if (nextState.success !== null) {
      this.setState({success: null})
      switch (nextState.success) {
        case Constants.create:
          this.props.showModal({message: Constants.createSuccessMessage, isConfirmed: true})
          break;
        case Constants.save:
          this.props.showModal({message: Constants.saveSuccessMessage, isConfirmed: true})
          break;
        case Constants.delete:
          this.props.showModal({message: Constants.deleteSuccessMessage, isConfirmed: true})
          break;
        default:
          break;
      }

    }
    if (nextState.done) {
      this.props.fetchAccountManagers()
    }
  }

  editHandler() {
    this.setState({ showEdit: !this.state.showEdit })
  }

  nameChangeHandler(name) {
    this.setState ({
      profile: {
        id: this.state.profile.id,
        name: name,
        email: this.state.profile.email,
        phone: this.state.profile.phone
      }
    });
  }

  emailChangeHandler(email) {
    this.setState ({
      profile: {
        id: this.state.profile.id,
        name: this.state.profile.name,
        email: email,
        phone: this.state.profile.phone
      }
    });
  }

  phoneChangeHandler(phone) {
    this.setState ({
      profile: {
        id: this.state.profile.id,
        name: this.state.profile.name,
        email: this.state.profile.email,
        phone: phone
      }
    });
  }

  showModalHandler(deleteManager) {
    if (this.state.profile.name === '' || this.state.profile.email === '' || this.state.profile.phone === '') {
      this.setState({ invalid: true, emptyFieldError: 'visible' })
      return
    }
    this.setState({ invalid: false, emptyFieldError: 'hidden' })
    if (this.props.specialistData) {
      if (deleteManager) {
        this.props.showModal({
          message: Constants.deleteManagerMessage,
          subMessage: Constants.deleteSubMessage,
          isConfirmed: false,
          type: Constants.delete,
          okValue: 'Yes, delete profile'
        })
        this.setState({ type: Constants.delete })
      } else {
        if (this.state.showDeleteButton) {
          this.props.saveManagerHandler(this.updateManager(this.state.profile))
        } else {
          this.props.showModal({
            message: Constants.createManagerMessage,
            subMessage: null,
            isConfirmed: false,
            type: Constants.create,
            okValue: 'Yes'
          })
          this.setState({ type: Constants.create })

        }
      }
    } else if (!this.props.specialistData) {
      this.props.saveProfileHandler(this.state.profile)
    }
  }

  updateManager(manager) {
    return {
      id: this.props.specialistData.id,
      name: manager.name,
      email: manager.email,
      phone: manager.phone
    }
  }

  render(){
    return (
      <ManagerDetailPresenter
        nameChangeHandler={this.nameChangeHandler}
        emailChangeHandler={this.emailChangeHandler}
        phoneChangeHandler={this.phoneChangeHandler}
        profile={this.state.profile}
        title={this.state.title}
        showDeleteButton={this.state.showDeleteButton}
        specialistData={this.props.specialistData}
        singleSpecialistViewType={this.props.singleSpecialistViewType}
        showModalHandler={this.showModalHandler}
        showEdit={this.state.showEdit}
        editHandler={this.editHandler}
        emptyFieldError={this.state.emptyFieldError}
      />
    )
  }
}

ManagerDetailContainer.propTypes = {
  profile: React.PropTypes.object,
  resetManagers: React.PropTypes.func,
  fetchProfile: React.PropTypes.func,
  saveProfileHandler: React.PropTypes.func,
  saveManagerHandler: React.PropTypes.func,
  addManagerHandler: React.PropTypes.func,
  fetchAccountManagers: React.PropTypes.func,
  specialistData: React.PropTypes.object,
  isSaved: React.PropTypes.bool,
};

const mapStateToProps = (state) => ({
  profile: selectors.getProfile(state),
  isSaved: state.profile.isSaved,
  isConfirmed: state.modal.isConfirmed,
  success: state.managers.success,
  done: state.modal.done
});

const mapDispatchToProps = (dispatch) => ({
  fetchProfile: () => {
    return dispatch(profileActions.fetchProfile())
  },
  saveProfileHandler: (profile) => {
    return dispatch(profileActions.requestUpdateProfile(profile))
  },
  saveManagerHandler: (manager) => {
    return dispatch(managerActions.requestPutAccountManager(manager))
  },
  addManagerHandler: (manager) => {
    return dispatch(managerActions.requestPostAccountManager(manager))
  },
  deleteManagerHandler: (manager) => {
    return dispatch(managerActions.requestDeleteAccountManager(manager))
  },
  fetchAccountManagers: (pagingProps) => {
    return dispatch(managerActions.fetchAccountManagers({limit: Constants.pagingLimit, offset: 0}))
  },
  showModal: (modalMessage) => {
    return dispatch(modalActions.showModal(modalMessage))
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(ManagerDetailContainer);
