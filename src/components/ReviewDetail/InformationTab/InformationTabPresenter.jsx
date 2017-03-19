import React from 'react';
import FontAwesome from 'react-fontawesome';
import { browserHistory } from 'react-router';


import Form from './../../tcReactUI/Form.jsx';

console.log(process.env.RESOURCES);

const resourceConstants = require(`./../../../assets/resources/${process.env.RESOURCES}/constants.js`);

const InformationTabPresenter = ({
  changeHandler,
  profile,
  managers,
  states,
  program,
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
            readOnly: true,
            onChange: value => changeHandler('name', value)
          },
          {
            id: 'sport',
            value: profile.sport,
            readOnly: true,
            onChange: value => changeHandler('sport', value)
          },
          {
            id: 'athlete_fname',
            value: profile.athlete_fname,
            readOnly: readOnlyOption,
            onChange: value => changeHandler('athlete_fname', value)
          },
          {
            id: 'athlete_lname',
            value: profile.athlete_lname,
            readOnly: readOnlyOption,
            onChange: value => changeHandler('athlete_lname', value)
          },
          {
            id: 'athlete_jersey_no',
            value: profile.athlete_jersey_no,
            readOnly: readOnlyOption,
            onChange: value => changeHandler('athlete_jersey_no', parseInt(value))
          },
          {
            id: 'athlete_email',
            value: profile.athlete_email,
            readOnly: readOnlyOption,
            onChange: value => changeHandler('athlete_email', value)
          },
          {
            id: 'best_teammate',
            value: profile.best_teammate,
            readOnly: readOnlyOption,
            onChange: value => changeHandler('best_teammate', value)
          },
          {
            id: 'best_conf_player',
            value: profile.best_conf_player,
            readOnly: readOnlyOption,
            onChange: value => changeHandler('best_conf_player', value)
          },
          {
            id: 'team_rival',
            value: profile.team_rival,
            readOnly: readOnlyOption,
            onChange: value => changeHandler('team_rival', value)
          },
          {
            id: 'toughest_arena',
            value: profile.toughest_arena,
            readOnly: readOnlyOption,
            onChange: value => changeHandler('toughest_arena', value)
          },
          {
            id: 'head_coach_name',
            value: profile.head_coach_name,
            readOnly: readOnlyOption,
            onChange: value => changeHandler('head_coach_name', value)
          },
          {
            id: 'play_for_coach_again',
            value: profile.play_for_coach_again,
            readOnly: readOnlyOption,
            onChange: value => changeHandler('play_for_coach_again', value)
          },
          {
            id: 'graduate',
            value: profile.graduate,
            readOnly: readOnlyOption,
            onChange: value => changeHandler('graduate', value)
          },
          {
            id: 'comments',
            value: profile.comments,
            readOnly: readOnlyOption,
            onChange: value => changeHandler('comments', value)
          },
          {
            id: 'recruiting_rating',
            value: profile.recruiting_rating,
            readOnly: readOnlyOption,
            onChange: value => changeHandler('recruiting_rating', parseInt(value))
          },
          {
            id: 'relationships_rating',
            value: profile.relationships_rating,
            readOnly: readOnlyOption,
            onChange: value => changeHandler('relationships_rating', parseInt(value))
          },
          {
            id: 'development_rating',
            value: profile.development_rating,
            readOnly: readOnlyOption,
            onChange: value => changeHandler('development_rating', parseInt(value))
          },
          {
            id: 'knowledge_sport_rating',
            value: profile.knowledge_sport_rating,
            readOnly: readOnlyOption,
            onChange: value => changeHandler('knowledge_sport_rating', parseInt(value))
          },
          {
            id: 'program_tradition_rating',
            value: profile.program_tradition_rating,
            readOnly: readOnlyOption,
            onChange: value => changeHandler('program_tradition_rating', parseInt(value))
          },
          {
            id: 'arena_rating',
            value: profile.arena_rating,
            readOnly: readOnlyOption,
            onChange: value => changeHandler('arena_rating', parseInt(value))
          },
          {
            id: 'home_crowds_rating',
            value: profile.home_crowds_rating,
            readOnly: readOnlyOption,
            onChange: value => changeHandler('home_crowds_rating', parseInt(value))
          },
          {
            id: 'weight_room_rating',
            value: profile.weight_room_rating,
            readOnly: readOnlyOption,
            onChange: value => changeHandler('weight_room_rating', parseInt(value))
          },
          {
            id: 'locker_room_rating',
            value: profile.locker_room_rating,
            readOnly: readOnlyOption,
            onChange: value => changeHandler('locker_room_rating', parseInt(value))
          },
          {
            id: 'training_room_rating',
            value: profile.training_room_rating,
            readOnly: readOnlyOption,
            onChange: value => changeHandler('training_room_rating', parseInt(value))
          },
          {
            id: 'class_difficulty_rating',
            value: profile.class_difficulty_rating,
            readOnly: readOnlyOption,
            onChange: value => changeHandler('class_difficulty_rating', parseInt(value))
          },
          {
            id: 'academic_rep_rating',
            value: profile.academic_rep_rating,
            readOnly: readOnlyOption,
            onChange: value => changeHandler('academic_rep_rating', parseInt(value))
          },
          {
            id: 'tutors_rating',
            value: profile.tutors_rating,
            readOnly: readOnlyOption,
            onChange: value => changeHandler('tutors_rating', parseInt(value))
          },
          {
            id: 'weather_rating',
            value: profile.weather_rating,
            readOnly: readOnlyOption,
            onChange: value => changeHandler('weather_rating', parseInt(value))
          },
          {
            id: 'nightlife_rating',
            value: profile.nightlife_rating,
            readOnly: readOnlyOption,
            onChange: value => changeHandler('nightlife_rating', parseInt(value))
          },
          {
            id: 'fan_rating',
            value: profile.fan_rating,
            readOnly: readOnlyOption,
            onChange: value => changeHandler('fan_rating', parseInt(value))
          },
    ];
  } else {
    var values = [
            {
              id: 'name',
              value: program.name,
              readOnly: true
            },
            {
              id: 'sport',
              value: program.sport,
              readOnly: true
            },
           {
             id: 'athlete_fname',
             value: null,
             readOnly: readOnlyOption,
             onChange: value => changeHandler('athlete_fname', value)
           },
           {
             id: 'athlete_lname',
             value: null,
             readOnly: readOnlyOption,
             onChange: value => changeHandler('athlete_lname', value)
           },
           {
             id: 'athlete_jersey_no',
             value: null,
             readOnly: readOnlyOption,
             onChange: value => changeHandler('athlete_jersey_no', parseInt(value))
           },
           {
             id: 'athlete_email',
             value: null,
             readOnly: readOnlyOption,
             onChange: value => changeHandler('athlete_email', value)
           },
           {
             id: 'best_teammate',
             value: null,
             readOnly: readOnlyOption,
             onChange: value => changeHandler('best_teammate', value)
           },
           {
             id: 'best_conf_player',
             value: null,
             readOnly: readOnlyOption,
             onChange: value => changeHandler('best_conf_player', value)
           },
           {
             id: 'team_rival',
             value: null,
             readOnly: readOnlyOption,
             onChange: value => changeHandler('team_rival', value)
           },
           {
             id: 'toughest_arena',
             value: null,
             readOnly: readOnlyOption,
             onChange: value => changeHandler('toughest_arena', value)
           },
           {
             id: 'head_coach_name',
             value: null,
             readOnly: readOnlyOption,
             onChange: value => changeHandler('head_coach_name', value)
           },
           {
             id: 'play_for_coach_again',
             value: null,
             readOnly: readOnlyOption,
             onChange: value => changeHandler('play_for_coach_again', value)
           },
           {
             id: 'graduate',
             value: null,
             readOnly: readOnlyOption,
             onChange: value => changeHandler('graduate', value)
           },
           {
             id: 'comments',
             value: null,
             readOnly: readOnlyOption,
             onChange: value => changeHandler('comments', value)
           },
           {
             id: 'recruiting_rating',
             value: null,
             readOnly: readOnlyOption,
             onChange: value => changeHandler('recruiting_rating', parseInt(value))
           },
           {
             id: 'relationships_rating',
             value: null,
             readOnly: readOnlyOption,
             onChange: value => changeHandler('relationships_rating', parseInt(value))
           },
           {
             id: 'development_rating',
             value: null,
             readOnly: readOnlyOption,
             onChange: value => changeHandler('development_rating', parseInt(value))
           },
           {
             id: 'knowledge_sport_rating',
             value: null,
             readOnly: readOnlyOption,
             onChange: value => changeHandler('knowledge_sport_rating', parseInt(value))
           },
           {
             id: 'program_tradition_rating',
             value: null,
             readOnly: readOnlyOption,
             onChange: value => changeHandler('program_tradition_rating', parseInt(value))
           },
           {
             id: 'arena_rating',
             value: null,
             readOnly: readOnlyOption,
             onChange: value => changeHandler('arena_rating', parseInt(value))
           },
           {
             id: 'home_crowds_rating',
             value: null,
             readOnly: readOnlyOption,
             onChange: value => changeHandler('home_crowds_rating', parseInt(value))
           },
           {
             id: 'weight_room_rating',
             value: null,
             readOnly: readOnlyOption,
             onChange: value => changeHandler('weight_room_rating', parseInt(value))
           },
           {
             id: 'locker_room_rating',
             value: null,
             readOnly: readOnlyOption,
             onChange: value => changeHandler('locker_room_rating', parseInt(value))
           },
           {
             id: 'training_room_rating',
             value: null,
             readOnly: readOnlyOption,
             onChange: value => changeHandler('training_room_rating', parseInt(value))
           },
           {
             id: 'class_difficulty_rating',
             value: null,
             readOnly: readOnlyOption,
             onChange: value => changeHandler('class_difficulty_rating', parseInt(value))
           },
           {
             id: 'academic_rep_rating',
             value: null,
             readOnly: readOnlyOption,
             onChange: value => changeHandler('academic_rep_rating', parseInt(value))
           },
           {
             id: 'tutors_rating',
             value: null,
             readOnly: readOnlyOption,
             onChange: value => changeHandler('tutors_rating', parseInt(value))
           },
           {
             id: 'weather_rating',
             value: null,
             readOnly: readOnlyOption,
             onChange: value => changeHandler('weather_rating', parseInt(value))
           },
           {
             id: 'nightlife_rating',
             value: null,
             readOnly: readOnlyOption,
             onChange: value => changeHandler('nightlife_rating', parseInt(value))
           },
           {
             id: 'fan_rating',
             value: null,
             readOnly: readOnlyOption,
             onChange: value => changeHandler('fan_rating', parseInt(value))
           },
    ];
  }

  return (
    <div className="tab-content-info-tab">
      <div className="col-lg-6-info-tab">
        <h3>Review Detail</h3>
      </div>
      <div className="col-lg-6-info-tab text-right" style={{ paddingRight: '26px' }}>
        {(editOption) &&
          <button onClick={() => buttonClicked('editButton')} className="clientEdit"><span>Edit</span></button>
        }
      </div>
      <div className="col-lg-12-info-tab ">
        <hr /><br />
      </div>
      <Form elements={resourceConstants.reviewDetailInformationTabElements} values={values} />
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
          <input type="delete" value="Delete Review" onClick={() => buttonClicked('deleteButton')} />
        </div>
      }
    </div>
  );
};

InformationTabPresenter.displayName = 'InformationTabPresenter';

export default InformationTabPresenter;
