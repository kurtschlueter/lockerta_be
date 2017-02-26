import React, {Component} from 'react';
import {bindAll} from 'lodash';
import $ from '../../../../node_modules/jquery';

class ImageUploader extends Component {

  constructor() {
    super()
    this.state = {
      data_uri: null,
      processing: false
    }

    bindAll(this, 'handleFile', 'handleSubmit');
  }

  handleSubmit(e) {
    e.preventDefault();
    const _this = this;

    this.setState({
      processing: true
    });

    const promise = $.ajax({
      url: 'https://ev5rn7db1a.execute-api.us-east-1.amazonaws.com/Test/images',
      type: "POST",
      data: {
        data_uri: this.state.data_uri,
        filename: this.state.filename,
        filetype: this.state.filetype
      },
      dataType: 'json'
    });

    promise.done(function(data){
    console.log('promise complete!!!')
    console.log(data)
      _this.setState({
        processing: false,
        uploaded_uri: data
      });
    });
  }

  handleFile(e) {
    const reader = new FileReader();
    const file = e.target.files[0];

    reader.onload = (upload) => {
      console.log('uploading!!!')
      this.setState({
        data_uri: upload.target.result,
        filename: file.name,
        filetype: file.type
      });
      this.handleSubmit(e);
    };

    reader.readAsDataURL(file);
  }

  render() {
    let processing;
    let uploaded;

    if (this.state.uploaded_uri) {
      uploaded = (
        <div>
          <h4>Image uploaded!</h4>
          <img className='image-preview' src={this.state.uploaded_uri} />
          <pre className='image-link-box'>{this.state.uploaded_uri}</pre>
        </div>
      );
    }

    if (this.state.processing) {
      processing = "Processing image, hang tight";
    }

    return (
      <div className="upload-image">
        <div>
          <h1>Upload new Logo</h1>
          <form onSubmit={this.handleSubmit} encType="multipart/form-data">
            <input type="file" onChange={this.handleFile} />
            {processing}
          </form>
          {uploaded}
        </div>
      </div>
    );
  }
}

export default ImageUploader;
