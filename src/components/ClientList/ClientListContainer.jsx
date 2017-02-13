import React, { Component } from 'react';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';

import ClientListPresenter from './ClientListPresenter.jsx';
import ImportCSVContainer from '../ImportCSV/ImportCSVContainer.jsx';

import * as clientActions from './../../actions/clientActions.js';
import * as navbarActions from './../../actions/navbarActions.js';
import * as selectors from './../../reducers/reducers.js';

const resourceConstants = require(`../../assets/resources/${process.env.RESOURCES}/constants.js`);

class ClientListContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasClients: null,
      showNewClientDropdown: false,
      showImportCSV: false,
      filteredClients: [],
      schools: [
        {
          id: 1,
          logo: 'http://portfolio.hbune.com/wp-content/uploads/2014/02/depaul-01.png', 
          name: 'DePaul University',
          nickname: 'Blue Demons',
          website: 'sthatd.edu',
          state: 'IL',
          city: 'Chicago',
          population: 40000,
          male_population: 20000,
          female_population: 20000,
        },
        {
          id: 2,
          logo: 'http://news.berkeley.edu/wp-content/uploads/2013/05/ucseal410.png', 
          name: 'University of California at Berkeley',
          nickname: 'Golden Bears',
          website: 'sthatd.edu',
          state: 'CA',
          city: 'Berkeley',
          population: 40000,
          male_population: 20000,
          female_population: 20000,
        },
        {
          id: 3,
          logo: 'http://www.crimsonhoops.com/_/img/UI/dock_icon_06.png', 
          name: 'University of Alabam at Tuskagooska',
          nickname: 'Crimson Tide',
          website: 'sthatd.edu',
          state: 'AL',
          city: 'Tuskagooska',
          population: 40000,
          male_population: 20000,
          female_population: 20000,
        }
      ]
    };
    this.newClientDropdownHandler = this.newClientDropdownHandler.bind(this);
    this.importCSVHandler = this.importCSVHandler.bind(this);
    this.rowClickListener = this.rowClickListener.bind(this);
  }

  componentWillMount() {
    this.props.fetchClients();
    this.props.showNewClientButton();
  }

  componentWillReceiveProps(nextProps) {
    if (this.props !== nextProps) {
      this.setState({
        hasClients: nextProps.hasClients,
        showImportCSV: nextProps.showImportCSV,
        filteredClients: nextProps.clients.filter(client => client.isActive)
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
  rowClickListener(client) {
    this.props.setClient(this.state.filteredClients.filter(c => c.id === client.id));
    this.props.hideNewClientButton();
    browserHistory.push(`/clientDetail/${client.id}`);
  }

  render() {
// debugger
    console.log('resourceConstants.schoolListMetaData', resourceConstants.schoolListMetaData)
    console.log('resourceConstants.mappedSchools(this.state.filteredClients)', resourceConstants.mappedSchools(this.state.filteredClients))

    if (this.state.hasClients === null) {
      return <div>Loading</div>;
    }
    if (this.state.showImportCSV) {
      return <ImportCSVContainer />;
    }
    return (
      <ClientListPresenter
        clients={this.state.filteredClients}
        schools={this.state.schools}
        importCSVHandler={this.importCSVHandler}
        rowClickListener={this.rowClickListener}
      />
    );
  }
}

ClientListContainer.contextTypes = {
  store: React.PropTypes.object
};

ClientListContainer.propTypes = {
  fetchClients: React.PropTypes.func,
  setClient: React.PropTypes.func,
  hideNewClientButton: React.PropTypes.func,
  showNewClientButton: React.PropTypes.func,
};

const mapStateToProps = state => ({
  clients: selectors.getClients(state),
  hasClients: state.clients.hasClients,
  showImportCSV: state.clients.showImportCSV
});

const mapDispatchToProps = dispatch => ({
  fetchClients: () => dispatch(clientActions.fetchClients()),
  setClient: client => dispatch(clientActions.setClient(client)),
  showNewClientButton: () => dispatch(navbarActions.showNewClientButton()),
  hideNewClientButton: () => dispatch(navbarActions.hideNewClientButton())
});

export default connect(mapStateToProps, mapDispatchToProps)(ClientListContainer);
