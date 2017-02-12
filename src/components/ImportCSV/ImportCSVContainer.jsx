import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as selectors from './../../reducers/reducers.js';
import * as clientActions from '../../actions/clientActions.js';
import * as profileActions from '../../actions/profileActions.js';
import Constants from '../../utils/localConstants';

import ImportCSVPresenter from './ImportCSVPresenter.jsx';


class ImportCSVContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      file: null,
      className: '',
      showDropZone: false,
      showUploadButton: false,
      errors: [],
      base64: null,
      csvSuccess: {},
      showCsvSuccess: false
    };
    this.fileChangeHandler = this.fileChangeHandler.bind(this);
    this.dropHandler = this.dropHandler.bind(this);
    this.dragEnter = this.dragEnter.bind(this);
    this.dragLeave = this.dragLeave.bind(this);
    this.dragOver = this.dragOver.bind(this);
    this.ignoreDrop = this.ignoreDrop.bind(this);
    this.removeFile = this.removeFile.bind(this);
    this.uploadFiles = this.uploadFiles.bind(this);
    this.readBase64 = this.readBase64.bind(this);
    this.okHandler = this.okHandler.bind(this);
    this.dropZoneRefHandler = this.dropZoneRefHandler.bind(this);
  }
  componentWillMount() {
    this.props.fetchProfile();
  }
  componentDidMount() {
    window.addEventListener('drop', this.ignoreDrop);
    window.addEventListener('dragover', this.dragOver);
  }
  componentWillUpdate(nextProps, nextState) {
    if ((this.state.showDropZone && !nextState.showDropZone) && this.dropZone) {
      this.removeListeners();
    }
    if (nextState.file && !this.state.file) this.readBase64(nextState.file);
  }
  componentDidUpdate(prevProps, prevState) {
    if (!prevState.showDropZone && this.state.showDropZone) this.addListeners();
    if ((prevProps !== this.props) && this.props.csvError) {
      this.setState({ errors: ['Oops error uploading CSV, incorrect CSV format'] });
    }
    if ((prevProps !== this.props) && this.props.csvSuccess) {
      this.setState({ csvSuccess: this.props.csvSuccess.details, showCsvSuccess: true });
    }
  }
  componentWillUnmount() {
    if (this.dropZone) this.removeListeners();
    window.removeEventListener('drop', this.ignoreDrop);
    window.removeEventListener('dragover', this.dragOver);
  }
  addListeners() {
    this.dropZone.addEventListener('mouseup', this.dragLeave);
    this.dropZone.addEventListener('dragenter', this.dragEnter);
    this.dropZone.addEventListener('dragover', this.dragOver);
    this.dropZone.addEventListener('dragleave', this.dragLeave);
    this.dropZone.addEventListener('drop', this.dropHandler);
  }
  removeListeners() {
    this.dropZone.removeEventListener('mouseup', this.dragLeave);
    this.dropZone.removeEventListener('dragenter', this.dragEnter);
    this.dropZone.removeEventListener('dragover', this.dragOver);
    this.dropZone.removeEventListener('dragleave', this.dragLeave);
    this.dropZone.removeEventListener('drop', this.dropHandler);
  }
  dropZoneRefHandler(dropZone) {
    this.dropZone = dropZone;
  }
  dragEnter(e) {
    this.setState({ className: 'drop-zone-show' });
    e.stopPropagation();
    e.preventDefault();
    return false;
  }
  dragOver(e) {
    this.setState({ showDropZone: true, errors: [] });
    e.preventDefault();
    e.stopPropagation();
    return false;
  }
  dragLeave(e) {
    this.setState({ className: '' });
    e.stopPropagation();
    e.preventDefault();
    return false;
  }
  ignoreDrop(e) {
    this.setState({ showDropZone: false });
    e.preventDefault();
    e.stopPropagation();
    return false;
  }

  fileChangeHandler(e) {
    if (e.target.files[0].type !== 'text/csv') {
      this.setState({ errors: [Constants.fileTypeErrorMessage] });
    } else {
      this.setState({ file: e.target.files[0] });
    }
  }
  removeFile() {
    this.setState({ file: null, errors: [] });
  }
  okHandler() {
    this.props.fetchClients();
  }
  dropHandler(e) {
    e.preventDefault();

    const files = [];
    for (let key in e.dataTransfer.files) {
      if (typeof (e.dataTransfer.files[key]) === 'object') files.push(e.dataTransfer.files[key]);
    }

    if (files.find(file => file.type !== 'text/csv')) this.setState({ errors: [Constants.fileTypeErrorMessage] });

    const csvFiles = files.filter(file => file.type === 'text/csv');
    if (csvFiles.length > 1) this.setState({ errors: [...this.state.errors, Constants.fileCountErrorMessage]});
    this.setState({
      file: csvFiles[0],
      className: '',
      showDropZone: false
    });
    return false;
  }
  uploadFiles() {
    this.setState({ errors: [] });
    this.props.uploadCSV(this.prepareJSON());
  }
  prepareJSON() {
    return JSON.stringify({
      uploadedBy: this.props.id,
      fileName: this.state.file.name,
      timestamp: new Date(),
      base64: this.state.base64
    })
  }
  readBase64(file) {
    const reader = new FileReader();
    reader.readAsBinaryString(file);
    reader.onload = (readereEvent) => {
      this.setState({ base64: btoa(readereEvent.target.result) });
    };
    reader.onerror = (error) => {
      this.setState({ errors: [error] });
    };
  }
  render() {
    return (
      <ImportCSVPresenter
        fileChangeHandler={this.fileChangeHandler}
        file={this.state.file}
        className={this.state.className}
        showDropZone={this.state.showDropZone}
        showUploadButton={this.state.showUploadButton}
        removeFile={this.removeFile}
        uploadFiles={this.uploadFiles}
        errors={this.state.errors}
        csvSuccess={this.state.csvSuccess}
        showCsvSuccess={this.state.showCsvSuccess}
        okHandler={this.okHandler}
        dropZoneRefHandler={this.dropZoneRefHandler}
      />
    );
  }
}

const mapStateToProps = (state) => ({
  id: state.profile.profile.id,
  csvError: selectors.csvError(state),
  csvSuccess: selectors.csvSuccess(state)
})

const mapDispatchToProps = (dispatch) => ({
  uploadCSV: (files) => {
    return dispatch(clientActions.requestUploadCSV(files))
  },
  fetchProfile: () => {
    return dispatch(profileActions.fetchProfile())
  },
  fetchClients: () => {
    return dispatch(clientActions.fetchClients())
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(ImportCSVContainer);
