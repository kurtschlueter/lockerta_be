import React, { PropTypes } from 'react';
import Grid from 'tc-reactui/components/Grid/Grid.jsx';
var FontAwesome = require('react-fontawesome');

const resourceConstants = require(`../../assets/resources/${process.env.RESOURCES}/constants.js`);
const resourceConstantsLockerta = require(`../../assets/resources/lockerta/constants.js`);

const SchoolListPresenter = ({
  schools,
  importCSVHandler,
  rowClickListener,
  searchTerm,
  handleSearchChange
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
      {(schools.length !== 0) ? (
        <div>
          <section style={sectionStyle}>
            <Grid
              metadata={resourceConstantsLockerta.schoolListMetaData}
              data={resourceConstantsLockerta.mappedSchools(schools)}
              rowClickListener={rowClickListener}
            />
          </section>
        </div>

      ) : (
        <div>
          <div id="csv-container">
            <h2>It looks like you do not have any schools added.</h2>
            <h4>Once you add a school they will appear here.</h4>
          </div>
        </div>
      )}
    </div>
  );
};

SchoolListPresenter.contextTypes = {
  store: React.PropTypes.object
};

export default SchoolListPresenter;
