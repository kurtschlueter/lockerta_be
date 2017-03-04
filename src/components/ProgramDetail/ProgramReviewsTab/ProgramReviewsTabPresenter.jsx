import React, { PropTypes } from 'react';
import TextInput from './../../tcReactUI/TextInput.jsx';
import Grid from 'tc-reactui/components/Grid/Grid.jsx';
var FontAwesome = require('react-fontawesome');

const resourceConstants = require(`../../../assets/resources/${process.env.RESOURCES}/constants.js`);
const resourceConstantsLockerta = require(`../../../assets/resources/lockerta/constants.js`);

const ProgramReviewsTabPresenter = ({
  programs,
  importCSVHandler,
  rowClickListener,
  searchTerm,
  handleSearchChange,
  searchHandler,
}) => {
  const sectionStyle = {
    position: 'absolute',
    padding: '20px 40px',
    overflowY: 'auto',
    top: '0',
    bottom: '150px',
    width: '100%',
    marginTop: '40px',
  };

  return (
    <div className="content-wrapper programreviews">
      {(programs.length !== 0) ? (

        <div>
          <input className="searchbox" type="Text" placeholder="Search" onChange={(e) => handleSearchChange(e)} value={searchTerm} onKeyDown={(e) => searchHandler(e)} /><FontAwesome name='search' />
          <section style={sectionStyle}>
            <Grid
              metadata={resourceConstantsLockerta.programListMetaData}
              data={resourceConstantsLockerta.mappedPrograms(programs)}
              rowClickListener={rowClickListener}
            />
          </section>
        </div>

      ) : (
        <div>
          <div id="csv-container">
            <h2>It looks like you do not have any programs added.</h2>
            <h4>Once you add a school they will appear here.</h4>
            <div id="csv-button-container">
              <button onClick={() => importCSVHandler()} id="add-client" style={{ marginRight: '20px' }}>Import CSV</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

ProgramReviewsTabPresenter.contextTypes = {
  store: React.PropTypes.object
};

export default ProgramReviewsTabPresenter;

