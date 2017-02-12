import React from 'react'
import Constants from '../../utils/localConstants'

const ModalPresenter = ({
  modal,
  showModalHandler,
  confirmedHandler,
  cancelWidth
}) => {
  const backdropStyle = {
    left: '0',
    top: '0',
    height: '100vh',
    width: '100vw',
    backgroundColor: 'rgba(0,0,0, 0.5)'
  }
  const type = modal.type === Constants.delete ? modal.type : 'submit'
  return (
    <div>
      {!modal.isConfirmed &&
        <div>
          <div onClick={() => showModalHandler()} className="click-outside" style={backdropStyle}></div>
          <div className="specialistPopup">
            <span>{modal.message}</span>
            <span id="subMessage">{modal.subMessage}</span>
            <div>
              <input id="specialistYes" type={type} value={modal.okValue} onClick={() => confirmedHandler()}/>
              <button id="specialistCancel" onClick={ () => showModalHandler() }>Cancel</button>
            </div>
          </div>
        </div>
      }
      {modal.isConfirmed &&
        <div>
          <div className="click-outside" style={backdropStyle}></div>
          <div className="popuptext" id="savePopup">
            <span>{modal.message}</span>
            <input type="submit" value="Okay" onClick={ () => showModalHandler(true) } />
          </div>
        </div>
      }
    </div>
  )
}


export default ModalPresenter;
