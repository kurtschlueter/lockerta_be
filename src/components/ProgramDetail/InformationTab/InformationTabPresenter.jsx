import React from 'react';
import FontAwesome from 'react-fontawesome';
import { browserHistory } from 'react-router';


import Form from './../../tcReactUI/Form.jsx';

console.log(process.env.RESOURCES);

const resourceConstants = require(`./../../../assets/resources/${process.env.RESOURCES}/constants.js`);

const InformationTabPresenter = ({
  changeHandler,
  profile,
  school,
  managers,
  states,
  readOnlyOption,
  saveCancelOption,
  editOption,
  deleteOption,
  buttonClicked,
  newProgram,
  imageLoaderCallback
}) => {
  if (!newProgram) {
    var values = [
          {
            id: 'sport',
            value: profile.sport,
            readOnly: readOnlyOption,
            onChange: value => changeHandler('sport', value)
          },
          {
            id: 'division',
            value: profile.division,
            readOnly: readOnlyOption,
            onChange: value => changeHandler('division', value)
          },
          {
            id: 'conference',
            value: profile.conference,
            readOnly: readOnlyOption,
            onChange: value => changeHandler('conference', value)
          },
          {
            id: 'gear',
            value: profile.gear,
            readOnly: readOnlyOption,
            onChange: value => changeHandler('gear', value)
          },
          {
            id: 'last_season_record',
            value: profile.last_season_record,
            readOnly: readOnlyOption,
            onChange: value => changeHandler('last_season_record', value)
          },
          {
            id: 'national_titles',
            value: profile.national_titles,
            readOnly: readOnlyOption,
            onChange: value => changeHandler('national_titles', parseInt(value))
          },
          {
            id: 'conference_titles',
            value: profile.conference_titles,
            readOnly: readOnlyOption,
            onChange: value => changeHandler('conference_titles', parseInt(value))
          },
          {
            id: 'projected_openings',
            value: profile.projected_openings,
            readOnly: readOnlyOption,
            onChange: value => changeHandler('projected_openings', parseInt(value))
          },
          {
            id: 'coach_fname',
            value: profile.coach_fname,
            readOnly: readOnlyOption,
            onChange: value => changeHandler('coach_fname', value)
          },
          {
            id: 'coach_lname',
            value: profile.coach_lname,
            readOnly: readOnlyOption,
            onChange: value => changeHandler('coach_lname', value)
          },
          {
            id: 'coach_last_record',
            value: profile.coach_last_record,
            readOnly: readOnlyOption,
            onChange: value => changeHandler('coach_last_record', value)
          },
          {
            id: 'coach_school_record',
            value: profile.coach_school_record,
            readOnly: readOnlyOption,
            onChange: value => changeHandler('coach_school_record', value)
          },
          {
            id: 'coach_alma_mater',
            value: profile.coach_alma_mater,
            readOnly: readOnlyOption,
            onChange: value => changeHandler('coach_alma_mater', value)
          },
          {
            id: 'coach_year_started',
            value: profile.coach_year_started,
            readOnly: readOnlyOption,
            onChange: value => changeHandler('coach_year_started', parseInt(value))
          },
          {
            id: 'coach_win_percent',
            value: profile.coach_win_percent,
            readOnly: readOnlyOption,
            onChange: value => changeHandler('coach_win_percent', parseInt(value))
          },
          {
            id: 'coach_seasons_w_team',
            value: profile.coach_seasons_w_team,
            readOnly: readOnlyOption,
            onChange: value => changeHandler('coach_seasons_w_team', parseInt(value))
          },
          {
            id: 'coach_ncaa_appearances',
            value: profile.coach_ncaa_appearances,
            readOnly: readOnlyOption,
            onChange: value => changeHandler('coach_ncaa_appearances', parseInt(value))
          },
          {
            id: 'coach_conf_championships',
            value: profile.coach_conf_championships,
            readOnly: readOnlyOption,
            onChange: value => changeHandler('coach_conf_championships', parseInt(value))
          },
          {
            id: 'facilities_arena_name',
            value: profile.facilities_arena_name,
            readOnly: readOnlyOption,
            onChange: value => changeHandler('facilities_arena_name', value)
          },
          {
            id: 'facilities_arena_built',
            value: profile.facilities_arena_built,
            readOnly: readOnlyOption,
            onChange: value => changeHandler('facilities_arena_built', parseInt(value))
          },
          {
            id: 'facilities_capacity',
            value: profile.facilities_capacity,
            readOnly: readOnlyOption,
            onChange: value => changeHandler('facilities_capacity', parseInt(value))
          },
          {
            id: 'facilities_home_attendance',
            value: profile.facilities_home_attendance,
            readOnly: readOnlyOption,
            onChange: value => changeHandler('facilities_home_attendance', parseInt(value))
          },
          {
            id: 'education_cost',
            value: profile.education_cost,
            readOnly: readOnlyOption,
            onChange: value => changeHandler('education_cost', parseInt(value))
          },
          {
            id: 'education_enrollment',
            value: profile.education_enrollment,
            readOnly: readOnlyOption,
            onChange: value => changeHandler('education_enrollment', parseInt(value))
          },
          {
            id: 'education_graduation_rate',
            value: profile.education_graduation_rate,
            readOnly: readOnlyOption,
            onChange: value => changeHandler('education_graduation_rate', parseInt(value))
          },
          {
            id: 'name',
            value: profile.name,
            readOnly: true,
            onChange: value => changeHandler('name', value)
          },
    ];
  } else {
    var values = [
           {
             id: 'sport',
             value: null,
             readOnly: readOnlyOption,
             onChange: value => changeHandler('sport', value)
           },
           {
             id: 'division',
             value: null,
             readOnly: readOnlyOption,
             onChange: value => changeHandler('division', value)
           },
           {
             id: 'conference',
             value: null,
             readOnly: readOnlyOption,
             onChange: value => changeHandler('conference', value)
           },
           {
             id: 'gear',
             value: null,
             readOnly: readOnlyOption,
             onChange: value => changeHandler('gear', value)
           },
           {
             id: 'last_season_record',
             value: null,
             readOnly: readOnlyOption,
             onChange: value => changeHandler('last_season_record', value)
           },
           {
             id: 'national_titles',
             value: null,
             readOnly: readOnlyOption,
             onChange: value => changeHandler('national_titles', parseInt(value))
           },
           {
             id: 'conference_titles',
             value: null,
             readOnly: readOnlyOption,
             onChange: value => changeHandler('conference_titles', parseInt(value))
           },
           {
             id: 'projected_openings',
             value: null,
             readOnly: readOnlyOption,
             onChange: value => changeHandler('projected_openings', parseInt(value))
           },
           {
             id: 'coach_fname',
             value: null,
             readOnly: readOnlyOption,
             onChange: value => changeHandler('coach_fname', value)
           },
           {
             id: 'coach_lname',
             value: null,
             readOnly: readOnlyOption,
             onChange: value => changeHandler('coach_lname', value)
           },
           {
             id: 'coach_last_record',
             value: null,
             readOnly: readOnlyOption,
             onChange: value => changeHandler('coach_last_record', value)
           },
           {
             id: 'coach_school_record',
             value: null,
             readOnly: readOnlyOption,
             onChange: value => changeHandler('coach_school_record', value)
           },
           {
             id: 'coach_alma_mater',
             value: null,
             readOnly: readOnlyOption,
             onChange: value => changeHandler('coach_alma_mater', value)
           },
           {
             id: 'coach_year_started',
             value: null,
             readOnly: readOnlyOption,
             onChange: value => changeHandler('coach_year_started', parseInt(value))
           },
           {
             id: 'coach_win_percent',
             value: null,
             readOnly: readOnlyOption,
             onChange: value => changeHandler('coach_win_percent', parseInt(value))
           },
           {
             id: 'coach_seasons_w_team',
             value: null,
             readOnly: readOnlyOption,
             onChange: value => changeHandler('coach_seasons_w_team', parseInt(value))
           },
           {
             id: 'coach_ncaa_appearances',
             value: null,
             readOnly: readOnlyOption,
             onChange: value => changeHandler('coach_ncaa_appearances', parseInt(value))
           },
           {
             id: 'coach_conf_championships',
             value: null,
             readOnly: readOnlyOption,
             onChange: value => changeHandler('coach_conf_championships', parseInt(value))
           },
           {
             id: 'facilities_arena_name',
             value: null,
             readOnly: readOnlyOption,
             onChange: value => changeHandler('facilities_arena_name', value)
           },
           {
             id: 'facilities_arena_built',
             value: null,
             readOnly: readOnlyOption,
             onChange: value => changeHandler('facilities_arena_built', parseInt(value))
           },
           {
             id: 'facilities_capacity',
             value: null,
             readOnly: readOnlyOption,
             onChange: value => changeHandler('facilities_capacity', parseInt(value))
           },
           {
             id: 'facilities_home_attendance',
             value: null,
             readOnly: readOnlyOption,
             onChange: value => changeHandler('facilities_home_attendance', parseInt(value))
           },
           {
             id: 'education_cost',
             value: null,
             readOnly: readOnlyOption,
             onChange: value => changeHandler('education_cost', parseInt(value))
           },
           {
             id: 'education_enrollment',
             value: null,
             readOnly: readOnlyOption,
             onChange: value => changeHandler('education_enrollment', parseInt(value))
           },
           {
             id: 'education_graduation_rate',
             value: null,
             readOnly: readOnlyOption,
             onChange: value => changeHandler('education_graduation_rate', parseInt(value))
           },
           {
             id: 'name',
             value: school.name,
             readOnly: true,
             onChange: value => changeHandler('name', value)
           },
    ];
  }

  return (
    <div className="tab-content-info-tab">
      <div className="col-lg-6-info-tab">
        <h3>Program Detail</h3>
      </div>
      <div className="col-lg-6-info-tab text-right" style={{ paddingRight: '26px' }}>
        {(editOption) &&
          <button onClick={() => buttonClicked('editButton')} className="clientEdit"><span>Edit</span></button>
        }
      </div>
      <div className="col-lg-12-info-tab ">
        <hr /><br />
      </div>
      <Form elements={resourceConstants.programDetailInformationTabElements} values={values} />
      {(saveCancelOption) &&
        <div>
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
          <input type="delete" value="Delete Program" onClick={() => buttonClicked('deleteButton')} />
        </div>
      }
    </div>
  );
};

InformationTabPresenter.displayName = 'InformationTabPresenter';

export default InformationTabPresenter;
