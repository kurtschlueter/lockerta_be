import React, { PropTypes } from 'react';
import Grid from 'tc-reactui/components/Grid/Grid.jsx';
var FontAwesome = require('react-fontawesome');

const resourceConstants = require(`../../assets/resources/${process.env.RESOURCES}/constants.js`);
const resourceConstantsLockerta = require(`../../assets/resources/lockerta/constants.js`);

const ProgramListPresenter = ({
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
    <div className="content-wrapper">
      <input className="searchbox" type="Text" placeholder="Search" onChange={(e) => handleSearchChange(e)} value={searchTerm} /><FontAwesome name='search' />
      {(programs.length !== 0) ? (

        <div>
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
            <h4>Once you add a program they will appear here.</h4>
          </div>
        </div>
      )}
    </div>
  );
};

ProgramListPresenter.contextTypes = {
  store: React.PropTypes.object
};

export default ProgramListPresenter;
