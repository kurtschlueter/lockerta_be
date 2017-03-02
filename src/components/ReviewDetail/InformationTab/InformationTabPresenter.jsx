import React from 'react';
import FontAwesome from 'react-fontawesome';
import { browserHistory } from 'react-router';
import ImageUploader from '../ImageUploader/ImageUploader.jsx';


import Form from './../../tcReactUI/Form.jsx';

console.log(process.env.RESOURCES);

const resourceConstants = require(`./../../../assets/resources/${process.env.RESOURCES}/constants.js`);

const InformationTabPresenter = ({
  changeHandler,
  profile,
  managers,
  states,
  readOnlyOption,
  saveCancelOption,
  editOption,
  deleteOption,
  buttonClicked,
  newReview,
  imageLoaderCallback
}) => {
  if (!newReview) {
    var values = [
          {
            id: 'name',
            value: profile.name,
            readOnly: readOnlyOption,
            onChange: value => changeHandler('name', value)
          },
          {
            id: 'nickname',
            value: profile.nickname,
            readOnly: readOnlyOption,
            onChange: value => changeHandler('nickname', value)
          },
          {
            id: 'website',
            value: profile.website,
            readOnly: readOnlyOption,
            onChange: value => changeHandler('website', value)
          },
          {
            id: 'population',
            value: profile.population,
            readOnly: readOnlyOption,
            onChange: value => changeHandler('population', parseInt(value))
          },
          {
            id: 'male_population',
            value: profile.male_population,
            readOnly: readOnlyOption,
            onChange: value => changeHandler('male_population', parseInt(value))
          },
          {
            id: 'female_population',
            value: profile.female_population,
            readOnly: readOnlyOption,
            onChange: value => changeHandler('female_population', parseInt(value))
          },
          {
            id: 'city',
            value: profile.city,
            readOnly: readOnlyOption,
            onChange: value => changeHandler('city', value)
          },
          {
            id: 'state',
            value: profile.state,
            readOnly: readOnlyOption,
            options: states.map(s => ({ key: s.name, text: s.name })),
            onChange: state => changeHandler('state', state)
          }, 
          {
            id: 'logo',
            value: profile.logo,
            readOnly: readOnlyOption,
            onChange: value => changeHandler('logo', value)
          }
    ];
  } else {
    var values = [
          {
            id: 'name',
            value: null,
            readOnly: readOnlyOption,
            onChange: value => changeHandler('name', value)
          },
          {
            id: 'nickname',
            value: null,
            readOnly: readOnlyOption,
            onChange: value => changeHandler('nickname', value)
          },
          {
            id: 'website',
            value: null,
            readOnly: readOnlyOption,
            onChange: value => changeHandler('website', value)
          },
          {
            id: 'population',
            value: null,
            readOnly: readOnlyOption,
            onChange: value => changeHandler('population', parseInt(value))
          },
          {
            id: 'male_population',
            value: null,
            readOnly: readOnlyOption,
            onChange: value => changeHandler('male_population', parseInt(value))
          },
          {
            id: 'female_population',
            value: null,
            readOnly: readOnlyOption,
            onChange: value => changeHandler('female_population', parseInt(value))
          },
          {
            id: 'city',
            value: null,
            readOnly: readOnlyOption,
            onChange: value => changeHandler('city', value)
          },
          {
            id: 'state',
            value: null,
            readOnly: readOnlyOption,
            options: states.map(s => ({ key: s.name, text: s.name })),
            onChange: state => changeHandler('state', state)
          },
          {
            id: 'logo',
            value: null,
            readOnly: readOnlyOption,
            onChange: value => changeHandler('logo', value)
          }
    ];
  }

  return (
    <div className="tab-content-info-tab">
      <div className="col-lg-6-info-tab">
        <h3>Client Detail</h3>
      </div>
      <div className="col-lg-6-info-tab text-right" style={{ paddingRight: '26px' }}>
        {(editOption) &&
          <button onClick={() => buttonClicked('editButton')} className="clientEdit"><span>Edit</span></button>
        }
      </div>
      <div className="col-lg-12-info-tab ">
        <hr /><br />
      </div>
      <Form elements={resourceConstants.clientDetailInformationTabElements} values={values} />
      {(saveCancelOption) &&
        <div>
        <ImageUploader
          imageLoaderCallback={imageLoaderCallback}
        />
        <div className="col-lg-12-info-tab">
          <br />
          <div className="errorText">
            <span id="notification">One or more fields are empty, please fill in and save again</span>
          </div>
          <br />
          <div className="col-lg-6-info-tab text-right">
            <input type="submit" value="SAVE" onClick={() => buttonClicked('saveButton')} />
          </div>
          <div className="col-lg-6-info-tab text-left">
            <input className="tests" type="cancel" value="Cancel" onClick={() => buttonClicked('cancelButton')} />
          </div>
        </div>
        </div>
      }
      {(deleteOption) &&
        <div className="col-lg-12-info-tab">
          <input type="delete" value="Delete Client" onClick={() => buttonClicked('deleteButton')} />
        </div>
      }
    </div>
  );
};

InformationTabPresenter.displayName = 'InformationTabPresenter';

export default InformationTabPresenter;
