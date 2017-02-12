import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, browserHistory } from 'react-router';
import NavbarPresenter from './NavbarPresenter.jsx';
import * as managerActions from '../../actions/managerActions';
import * as clientActions from '../../actions/clientActions';

class NavbarContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      showNewClientDropdown: false,
      showNewClientButton: false,
      showNewManagerButton: false,
      hover: false,
    }
    this.newClientDropdownHandler = this.newClientDropdownHandler.bind(this);
    this.importCSVHandler = this.importCSVHandler.bind(this);
    this.onMouseEnterDropdown = this.onMouseEnterDropdown.bind(this);
    this.onMouseLeaveDropdown = this.onMouseLeaveDropdown.bind(this);
  }

  onMouseEnterDropdown(){
    this.setState({hover: true})
  }

  onMouseLeaveDropdown(){
    this.setState({hover: false})
  }

  componentDidUpdate(){
    if(this.state.showNewClientDropdown && document.getElementById("csv")){
      document.getElementById("csv").addEventListener("mouseover",this.onMouseEnterDropdown);
      document.getElementById("csv").addEventListener("mouseout",this.onMouseLeaveDropdown);
    }
  }

  componentWillReceiveProps(nextProps) {
    if (this.props !== nextProps) {
      this.setState({
        showNewManagerButton: nextProps.showNewManagerButton,
        showNewClientButton: nextProps.showNewClientButton
      });
    }
  }
  newClientDropdownHandler() {
    this.setState({ showNewClientDropdown: !this.state.showNewClientDropdown })
  }
  importCSVHandler() {
    this.newClientDropdownHandler()
    this.props.showImportCSV()
  }
  render () {
    return (
      <NavbarPresenter
        showNewClientDropdown={this.state.showNewClientDropdown}
        newClientDropdownHandler={this.newClientDropdownHandler}
        importCSVHandler={this.importCSVHandler}
        showNewClientButton={this.state.showNewClientButton}
        showNewManagerButton={this.state.showNewManagerButton}
        showNewManagerView={this.props.showNewManagerView}
        hover={this.state.hover}
      />
    )
  }
}

const mapStateToProps = (state) => ({
  showNewClientButton: state.navbar.showNewClientButton,
  showNewManagerButton: state.navbar.showNewManagerButton
})
const mapDispatchToProps = (dispatch) => ({
  showNewManagerView: () => {
    return dispatch(managerActions.showNewManagerView())
  },
  showImportCSV: () => {
    return dispatch(clientActions.showImportCSV())
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(NavbarContainer);
