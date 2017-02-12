import React, { PropTypes } from 'react';
import FontAwesome from 'react-fontawesome';
import { browserHistory } from 'react-router';
import Constants from '../../utils/localConstants.js'



const ManagerDetailPresenter = ({
  nameChangeHandler,
  emailChangeHandler,
  phoneChangeHandler,
  profile,
  title,
  showDeleteButton,
  specialistData,
  singleSpecialistViewType,
  showModalHandler,
  showEdit,
  editHandler,
  emptyFieldError
}) => {
  return (
    <div className="content-wrapper" style={{ minHeight: '279px' }}>
      <section className="content-header" style={{padding: '20px 40px'}}>
        <div className="row">
          <div className="col-lg-12" style={{paddingLeft: '0'}}>
            <div className="tabs-profile">
              <div className="col-lg-6-info-tab" style={{padding: '24px 0 0 40px'}}>
                <h3>{title}</h3>
              </div>
              <div className="col-lg-6-info-tab text-right" style={{padding: '24px 40px 0 0'}}>
                {showEdit &&
                  <button onClick={() => editHandler()} className="clientEdit"><span>Edit</span></button>
                }
              </div>
              <div className="tab-profile">
                <div className="col-lg-12-info-tab ">
                  <hr style={{marginRight: '0', marginLeft: '-15px'}}/><br />
                </div>
                <div className="col-lg-7" style={{paddingLeft: '0'}}>
                  <div id="form">
                    <form>
                      <span>Name</span>
                      <input type="text" id="name" placeholder="" readOnly={showEdit} onChange={
                        (sender) => {nameChangeHandler(sender.target.value);
                      }}
                      value={profile.name}/>
                      <span>Email</span>
                      <input type="text" id="email" placeholder="" readOnly={showEdit} onChange={
                        (sender) => {emailChangeHandler(sender.target.value);
                      }}
                      value={profile.email}/>
                      <span>Phone</span>
                      <input style={{marginBottom: '0'}} type="text" id="phone" placeholder="" readOnly={showEdit} onChange={
                        (sender) => {phoneChangeHandler(sender.target.value);
                      }}
                      value={profile.phone}/>
                    </form>
                    {!showEdit &&
                      <div className="col-lg-12-info-tab" style={{height: '64px', paddingLeft: '0', marginTop: '16px'}}>
                        <div className="errorText">
                          <span id="notification" style={{ visibility: emptyFieldError }}>One or more fields are empty, please fill in and save again</span>
                        </div>
                        <div className="col-lg-6-info-tab text-right" style={{paddingLeft: '0', paddingRight: '9px'}}>
                          <input type="submit" value="SAVE" style={{marginTop: '0', width: '160px'}} onClick={() => showModalHandler()} />
                        </div>
                        <div className="col-lg-6-info-tab text-left"style={{paddingLeft: '9px', paddingRight: '0'}}>
                          <input style={{userSelect: 'none', marginTop: '0', width: '160px'}} className='tests' type="cancel" value="Cancel" onClick={() => editHandler()} />
                        </div>
                      </div>
                    }
                    {(!showEdit && showDeleteButton) &&
                        <input type="delete" value="Delete Manager" onClick={() => showModalHandler(true)} />
                    }
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="space-foot" style={{height: '50vh'}}/>
    </div>
  );
};

ManagerDetailPresenter.displayName = 'ManagerDetailPresenter';

ManagerDetailPresenter.propTypes = {
  profile: PropTypes.object,
  nameChangeHandler: PropTypes.func,
  emailChangeHandler: PropTypes.func,
  phoneChangeHandler: PropTypes.func,
};

export default ManagerDetailPresenter;
