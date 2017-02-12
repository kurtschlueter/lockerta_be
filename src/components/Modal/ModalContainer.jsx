import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as modalActions from '../../actions/modalActions';
import Constants from '../../utils/localConstants';

import ModalPresenter from './ModalPresenter.jsx'

class ModalContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      modal: null,
      show: false,
    }
    this.showModalHandler = this.showModalHandler.bind(this);
    this.confirmedHandler = this.confirmedHandler.bind(this);
  }
  componentWillReceiveProps(nextProps) {
    if (this.props !== nextProps && nextProps.modal !== null) {
      nextProps.modal.modalMessage !== null ?
      this.setState({ modal: nextProps.modal, show: true}) :
      this.setState({ show: false})
    }
  }
  showModalHandler(done) {
    this.setState({ show: false });
    if (done) this.props.noModal()
  }
  confirmedHandler() {
    this.setState({ show: false })
    this.props.confirmed()
  }

  render() {
    return this.state.show ? (
      <ModalPresenter
        modal={this.state.modal}
        showModalHandler={this.showModalHandler}
        confirmedHandler={this.confirmedHandler}
        cancelWidth={this.state.cancelWidth}
      />
    ) : null
  }
}

const mapStateToProps = (state) => ({
  modal: state.modal.modal
})

const mapDispatchToProps = (dispatch) => ({
  confirmed: () => {
    dispatch(modalActions.confirmed())
  },
  noModal: () => {
    dispatch(modalActions.noModal())
  }
})
export default connect(mapStateToProps, mapDispatchToProps)(ModalContainer);
