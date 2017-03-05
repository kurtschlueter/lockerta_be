import React, { PropTypes } from 'react';
import Grid from 'tc-reactui/components/Grid/Grid.jsx';
var FontAwesome = require('react-fontawesome');

const resourceConstants = require(`../../assets/resources/${process.env.RESOURCES}/constants.js`);
const resourceConstantsLockerta = require(`../../assets/resources/lockerta/constants.js`);

const ReviewListPresenter = ({
  reviews,
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
      <input className="searchbox" type="Text" placeholder="Search" onChange={(e) => handleSearchChange(e)} value={searchTerm} onKeyDown={(e) => searchHandler(e)} /><FontAwesome name='search' />
      {(reviews.length !== 0) ? (

        <div>
          <section style={sectionStyle}>
            <Grid
              metadata={resourceConstantsLockerta.reviewListMetaData}
              data={resourceConstantsLockerta.mappedReviews(reviews)}
              rowClickListener={rowClickListener}
            />
          </section>
        </div>

      ) : (
        <div>
          <div id="csv-container">
            <h2>It looks like you do not have any reviews added.</h2>
            <h4>Once you add a review they will appear here.</h4>
          </div>
        </div>
      )}
    </div>
  );
};

ReviewListPresenter.contextTypes = {
  store: React.PropTypes.object
};

export default ReviewListPresenter;
