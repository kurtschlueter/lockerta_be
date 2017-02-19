import React, { PropTypes } from 'react';
import Grid from 'tc-reactui/components/Grid/Grid.jsx';

const resourceConstants = require(`../../assets/resources/${process.env.RESOURCES}/constants.js`);
const resourceConstantsLockerta = require(`../../assets/resources/lockerta/constants.js`);

const ClientListPresenter = ({
  clients,
  schools,
  importCSVHandler,
  rowClickListener
}) => {
  const sectionStyle = {
    position: 'absolute',
    padding: '20px 40px',
    overflowY: 'auto',
    top: '0',
    bottom: '150px',
    width: '100%'
  };

  return (
    <div className="content-wrapper">
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
            <h2>It looks like you do not have any clients added.</h2>
            <h4>Once you add a client they will appear here.</h4>
            <div id="csv-button-container">
              <button onClick={() => importCSVHandler()} id="add-client" style={{ marginRight: '20px' }}>Import CSV</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

ClientListPresenter.contextTypes = {
  store: React.PropTypes.object
};

ClientListPresenter.propTypes = {
  clients: PropTypes.arrayOf,
  importCSVHandler: PropTypes.func,
  rowClickListener: PropTypes.func
};

export default ClientListPresenter;
