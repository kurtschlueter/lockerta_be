import React, { Component } from 'react';
import { connect } from 'react-redux';

import ClientDetailPresenter from './ClientDetailPresenter.jsx';

const tabs = require(`../../assets/resources/${process.env.RESOURCES}/tabs.jsx`).tabs;

import * as clientActions from './../../actions/clientActions.js';
import * as selectors from './../../reducers/reducers.js';

class ClientDetailContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      client: {},
      activeTab: null,
      basicTabs: {}
    };
    this.tabSelect = this.tabSelect.bind(this);
    this.updateClient = this.updateClient.bind(this);
  }

  componentWillMount() {
    this.props.fetchClient(this.props.clientId);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props !== nextProps) {
      if (nextProps.client) {
        this.setState({
          client: nextProps.client,
          activeTab: 0,
          basicTabs: {
            metadata: tabs.map(tab => {
              const compProps = {
                client: nextProps.client,
                updateClient: tab.tabID === 'information' ? this.updateClient : null
              };
              tab.component = tab.generateComponent(compProps);
              return tab;
            })
          }
        });
      }
    }
  }

  tabSelect(activeTabIndex) {
    this.setState({ activeTab: activeTabIndex });
  }

  updateClient(updatedClient) {
    Object.assign(this.client, updatedClient);
  }

  render() {
    if (this.state.basicTabs && this.state.activeTab !== null) {
      let activeTabComponent = this.state.basicTabs.metadata[this.state.activeTab].component;
      return (
        <ClientDetailPresenter
          activeTab={this.state.activeTab}
          tabsList={this.state.basicTabs.metadata}
          activeTabComponent={activeTabComponent}
          tabSelect={this.tabSelect}
        />
      );
    } else {
      return (<div />);
    }
  }
}

ClientDetailContainer.contextTypes = {
  store: React.PropTypes.object
};

const mapStateToProps = (state, ownProps) => ({
  client: selectors.setClient(state),
  clientId: ownProps.params.clientId
});

const mapDispatchToProps = (dispatch) => ({
  fetchClient: (id) => {
    return dispatch(clientActions.fetchClient(id));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(ClientDetailContainer);
