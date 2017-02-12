import React from 'react';

const ImportCSVPresenter = ({
  fileChangeHandler,
  dropHandler,
  className,
  showDropZone,
  showUploadButton,
  file,
  removeFile,
  uploadFiles,
  showError,
  errors,
  csvSuccess,
  showCsvSuccess,
  okHandler,
  dropZoneRefHandler
}) => {
  return (
    <div className="content-wrapper" style={{ paddingTop: '50px' }}>
      {!showCsvSuccess &&
        <div id="import-csv-container">
          <h3>Import CSV</h3>
          <div id="csv-drop" onDrop={dropHandler}>
            {errors.length !== 0 &&
              <div id="upload-error">
                {errors.map((error, i) =>
                  <span key={i} style={{ height: '20px', lineHeight: '20px' }}>{error}</span>
                )}
              </div>
            }
            {showDropZone &&
              <div id="drop-zone" ref={el => dropZoneRefHandler(el)} className={className}></div>
            }
            <span className="ignore-drag">Drag and drop your CSV files here</span>
            <span className="icon-csv ignore-drag"></span>
            <span className="ignore-drag">or</span>
            <label className="ignore-drag" id="csv-local-file" htmlFor="import-csv">Select a file from your computer</label>
            <input type="file" name="csv" id="import-csv" onChange={fileChangeHandler}/>
            {file &&
              <span key={file.name} className="file">
                {file.name}
                <span className="fa fa-times" id="close" onClick={() => removeFile()}></span>
              </span>
            }
          </div>
          {file &&
            <button className="button" onClick={() => uploadFiles()}>Upload</button>
          }
        </div>
      }
      {showCsvSuccess &&
        <div id="upload-success">
          <div id="success-banner">
            <div style={{width: '100%', display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginBottom: '5px'}}>
              <span className="fa fa-check-circle"></span><span>&nbsp;Successful upload!</span>
            </div>
            <p>{csvSuccess.numberOfLines} Clients have been processed.</p>
          </div>
          <div id="upload-list-container">
            <div className="upload-list" style={{left: '-4px', borderBottomLeftRadius: '5px'}}>
              <span className="upload-list-title">{csvSuccess.numberOfInserts}&nbsp;New Clients Added</span>
              <div className="upload-scroll">
                {csvSuccess.insertList.map((newClient, i) => <span key={i} className="client-upload-list">{newClient[0]}</span>)}
              </div>
            </div>
            <div className="upload-list" style={{right: '-4px', borderBottomRightRadius: '5px'}}>
              <span className="upload-list-title">{csvSuccess.numberOfUpdates}&nbsp;Clients Updated</span>
              <div className="upload-scroll">
                {csvSuccess.updatedList.map((updatedClient, i) => <span key={i} className="client-upload-list">{updatedClient[0]}</span>)}
              </div>
            </div>
          </div>
          <button className="button" id="ok-button" onClick={() => okHandler()}>Ok</button>
        </div>
      }
    </div>
  )
}

export default ImportCSVPresenter;
