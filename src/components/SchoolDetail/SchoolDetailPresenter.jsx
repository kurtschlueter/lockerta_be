import React from 'react';
import { browserHistory, Link } from 'react-router';
import Tabs from 'tc-reactui/components/Tabs/Tabs.jsx'
import InformationTabContainer from './InformationTab/InformationTabContainer.jsx';

const SchoolDetailPresenter = ({
  activeTab,
  tabsList,
  tabSelect,
  activeTabComponent
}) => {

  return (
    <div>
      <div className="content-wrapper">
        {/* <header className="main-header">
          <nav className="navbar">
            <Link to='/clientList'><span>Back</span></Link>
          </nav>
        </header> */}
        <section className="main-container-k">
          <div className="row">
            <div className="col-lg-12">
              <Tabs
                metadata={tabsList}
                tabClicked={tabSelect}
              />
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div>{activeTabComponent}</div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default SchoolDetailPresenter;
