import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import IntegrationsTabPresenter from './IntegrationsTabPresenter.jsx';
import * as integrationActions from './../../../actions/integrationActions.js';
import * as selectors from './../../../reducers/reducers.js';
import * as modalActions from './../../../actions/modalActions.js';
import Constants from './../../../utils/localConstants'

class IntegrationsTabContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      display: {},
      integrations: [],
      clientIntegrations: [],
      newKeys: [],
      sourceFieldIdEdited: '',
      integrationsWithWarning: [],
      saving: false,
      emptyErrors: [],
      warnings: [],
      clientIntegrationValues: {}
    };
    this.openHandler = this.openHandler.bind(this);
    this.saveHandler = this.saveHandler.bind(this);
    this.cancelHandler = this.cancelHandler.bind(this);
    this.changeHandler = this.changeHandler.bind(this);
    this.updateClientIntegrationsFromProps = this.updateClientIntegrationsFromProps.bind(this);
    this.notificationHandler = this.notificationHandler.bind(this);
  }

  componentWillMount() {
    this.props.fetchClientIntegrations(this.props.client);
    this.props.fetchIntegrations();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.done && !this.props.done) this.props.fetchClientIntegrations(this.props.client);
    if (nextProps.clientIntegrations !== null) this.updateClientIntegrationsFromProps(nextProps);
    const displayState = {};
    nextProps.integrations.forEach(integration => Object.defineProperty(displayState, integration.id, { value: false, writable: true }));
    this.setState({ display: displayState, integrations: nextProps.integrations });
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props.isSaved && this.state.saving) {
      this.props.showModal({ message: Constants.saveSuccessMessage, isConfirmed: true });
      this.setState({ saving: false });
    }
  }

  componentWillUnmount() {
    this.setState({ displayWarning: [] });
  }
  
  changeHandler(value, sourceFieldId) {
    const newValue = {};
    newValue[sourceFieldId] = value;
    const newState = Object.assign({}, this.state.clientIntegrationValues, newValue);
    this.setState({ clientIntegrationValues: newState, sourceFieldIdEdited: sourceFieldId });
  }

  openHandler(id) {
    const updatedDisplay = this.state.display;
    updatedDisplay[id] = !this.state.display[id];
    this.setState({ display: updatedDisplay, sourceFieldIdEdited: '' });
  }

  notificationHandler(id, display) {
    display
        ? this.setState({ emptyErrors: [...this.state.emptyErrors, id] })
        : this.setState({ emptyErrors: this.state.emptyErrors.filter(error => error !== id) })
  }

  saveHandler(id) {
    const keys = this.state.integrations.find(integration => integration.id === id).keys.map(key => key.id);
    let hasValue = true;
    keys.forEach((key) => {
      const value = this.state.clientIntegrationValues[key];
      hasValue = (value !== '');
    });
    if (hasValue === false) {
      this.notificationHandler(id, true);
    } else {
      keys.forEach((key) => {
        const integration = this.state.clientIntegrations.find(clientIntegration => clientIntegration.sourceFieldId === key);
        integration.value = this.state.clientIntegrationValues[integration.sourceFieldId];
        if (this.state.newKeys.length >= 1) {
          this.state.newKeys.find(aKey => aKey === key)
            ? this.props.addIntegrations(integration)
            : this.props.saveIntegrations(integration)
        } else {
          this.props.saveIntegrations(integration);
        }
      });
      this.setState({ warnings: this.state.warnings.filter(warning => warning !== id), saving: true });
      this.notificationHandler(id, false);
    }
  }

  cancelHandler() {
    this.updateClientIntegrationsFromProps(this.props);
  }

  updateClientIntegrationsFromProps(param) {
    const sourceFieldIds = param.clientIntegrations.map(clientIntegration => clientIntegration.sourceFieldId);
    const newKeys = [];
    const warnings = [];
    const completeSourceFieldIds = param.integrations.map(integration => {
      return integration.keys.map((key) => {
        if (sourceFieldIds.indexOf(key.id) === -1) {
          newKeys.push(key.id);
          warnings.push(integration.id);
          return {
            clientId: this.props.client.id,
            sourceFieldId: key.id,
            sourceId: integration.id,
            value: ''
          };
        }
        return param.clientIntegrations.filter(clientIntegration => clientIntegration.sourceFieldId === key.id)[0];
      });
    }).reduce((clientIntegrationState, completeSourceFieldId) =>
      [...clientIntegrationState, ...completeSourceFieldId], []);

    this.setState({
      newKeys,
      warnings,
      clientIntegrations: completeSourceFieldIds,
      clientIntegrationValues: completeSourceFieldIds.reduce((previous, clientIntegration) => {
        previous[clientIntegration.sourceFieldId] = clientIntegration.value;
        return previous
      }, {})
    });
  }

  render() {
    if (!this.state.integrations) return;
    return (
      <IntegrationsTabPresenter
        changeHandler={this.changeHandler}
        openHandler={this.openHandler}
        saveHandler={this.saveHandler}
        cancelHandler={this.cancelHandler}
        integrations={this.state.integrations}
        clientIntegrations={this.state.clientIntegrations}
        clientIntegrationValues={this.state.clientIntegrationValues}
        display={this.state.display}
        emptyErrors={this.state.emptyErrors}
        warnings={this.state.warnings}
      />
    );
  }
}

IntegrationsTabContainer.propTypes = {
  fetchIntegrations: PropTypes.func,
  fetchClientIntegrations: PropTypes.func,
  saveIntegrations: PropTypes.func,
  addIntegrations: PropTypes.func,
  showModal: PropTypes.func,
  client: PropTypes.objectOf,
  isSaved: PropTypes.bool,
  done: PropTypes.bool
};


const mapStateToProps = state => ({
  integrations: selectors.getIntegrations(state),
  clientIntegrations: selectors.getClientIntegrations(state),
  isSaved: state.integrations.showSuccessPopup,
  done: state.modal.done
});

const mapDispatchToProps = dispatch => ({
  fetchIntegrations: () => dispatch(integrationActions.fetchIntegrations()),
  fetchClientIntegrations: option => dispatch(integrationActions.fetchClientIntegrations(option)),
  saveIntegrations: clientIntegrations => dispatch(integrationActions.requestPutIntegrations(clientIntegrations)),
  addIntegrations: clientIntegrations => dispatch(integrationActions.requestPostIntegrations(clientIntegrations)),
  showModal: modalMessage => dispatch(modalActions.showModal(modalMessage)),
});

export default connect(mapStateToProps, mapDispatchToProps)(IntegrationsTabContainer);
