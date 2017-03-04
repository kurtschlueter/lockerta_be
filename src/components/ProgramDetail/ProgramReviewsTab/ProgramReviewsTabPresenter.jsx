import React, { PropTypes } from 'react';
import Grid from 'tc-reactui/components/Grid/Grid.jsx';
var FontAwesome = require('react-fontawesome');

const resourceConstants = require(`../../../assets/resources/${process.env.RESOURCES}/constants.js`);
const resourceConstantsLockerta = require(`../../../assets/resources/lockerta/constants.js`);

const ProgramReviewsTabPresenter = ({
  programreviews,
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
      {(programreviews.length !== 0) ? (

        <div>
          <input className="searchbox" type="Text" placeholder="Search" onChange={(e) => handleSearchChange(e)} value={searchTerm} onKeyDown={(e) => searchHandler(e)} /><FontAwesome name='search' />
          <section style={sectionStyle}>
            <Grid
              metadata={resourceConstantsLockerta.reviewListMetaData}
              data={resourceConstantsLockerta.mappedReviews(programreviews)}
              rowClickListener={rowClickListener}
            />
          </section>
        </div>

      ) : (
        <div>
          <div id="csv-container">
            <h2>There are no reviews for this program</h2>
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

