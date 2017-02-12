import React from 'react';
import FontAwesome from 'react-fontawesome';
import { browserHistory } from 'react-router';

import Form from './../../tcReactUI/Form.jsx';

console.log(process.env.RESOURCES);

const resourceConstants = require(`./../../../assets/resources/${process.env.RESOURCES}/constants.js`);

const InformationTabPresenter = ({
  changeHandler,
  profile,
  agencies,
  managers,
  specialists,
  states,
  readOnlyOption,
  saveCancelOption,
  editOption,
  deleteOption,
  buttonClicked,
}) => {

  const clientTypeOptions = [
    { key: 'Standard Retainer', text: 'Standard Retainer' },
    { key: 'Digital Retainer', text: 'Digital Retainer' },
    { key: 'PPC Only', text: 'PPC Only' },
    { key: 'SEO Only', text: 'SEO Only' }
  ];
  const values = [
    {
      id: 'name',
      value: profile.name,
      readOnly: readOnlyOption,
      onChange: value => changeHandler('name', value)
    },
    {
      id: 'managerId',
      value: profile.managerName,
      value: profile.managerId ? selectedAccManager(profile.managerId) : '',
      readOnly: readOnlyOption,
      options: managers.map(m => ({ key: m.id, text: m.name })),
      onChange: managerId => changeHandler('manager', managers.find(m => m.id === managerId))
    },
    {
      id: 'agencyId',
      value: profile.agencyName,
      readOnly: readOnlyOption,
      options: agencies.map(m => ({ key: m.id, text: m.name })),
      onChange: agencyId => changeHandler('agency', agencies.find(m => m.id === agencyId))
    },
    {
      id: 'specialistId',
      value: profile.specialistName,
      readOnly: readOnlyOption,
      options: specialists.map(m => ({ key: m.id, text: m.name })),
      onChange: specialistId => changeHandler('specialist', specialists.find(m => m.id === specialistId))
    },
    {
      id: 'type',
      value: profile.type,
      readOnly: readOnlyOption,
      options: clientTypeOptions,
    },
    {
      id: 'state',
      value: profile.state,
      readOnly: readOnlyOption,
      options: states.map(s => ({ key: s.name, text: s.name })),
      onChange: state => changeHandler('state', state)
    }
  ];

  console.dir(profile);

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

InformationTabPresenter.propTypes = {
  agencies: React.PropTypes.array,
  managers: React.PropTypes.array,
  specialists:  React.PropTypes.array,
  states: React.PropTypes.array,
  profile: React.PropTypes.object,
  readOnlyOption: React.PropTypes.bool,
  changeHandler: React.PropTypes.func,
  buttonClicked: React.PropTypes.func,
  clientTypeClicked: React.PropTypes.func,
  saveCancelOption: React.PropTypes.bool,
  editOption: React.PropTypes.bool,
  deleteOption: React.PropTypes.bool,
  clientTypeOption: React.PropTypes.bool,
  managerOption: React.PropTypes.bool,
  stateOption: React.PropTypes.bool,
  managerClicked: React.PropTypes.func,
  stateClicked: React.PropTypes.func
};

export default InformationTabPresenter;
