import React from 'react';


const ActivityTabPresenter = ({
  filterPopUpHandler,
  popUpStatus
}) => {
  const style = {
    filterPopUp: {
      display: popUpStatus === true ? '' : 'none'
    }
  };
  return (
    <div className="tab-content">
      <div className="col-lg-12">
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Time</th>
              <th>Description</th>
              <th>Status</th>
              <th onClick={() => { filterPopUpHandler(); }}><a href="#" onClick={filterPopUpHandler} /><i className="fa fa-sliders admin-text" aria-hidden="true" /></th>
            </tr>
          </thead>
          <div className="cog-first" style={style.filterPopUp}>
            <div className="menu">
              <div className="arrow"></div> {/* should this ending div be here or on line 31 */}
              <div id="form">
                <form>
                  <span href="#">Start Date</span>
                  <input type="date" value="" />
                  <span href="#">End Date</span>
                  <input type="date" value="" />
                </form>
              </div>
            </div>
          </div>
          <tbody>
            <tr>
              <th>September 2, 2015</th>
              <td>12:00 pm EST</td>
              <td>Daily Report</td>
              <td>Success</td>
              <td />
            </tr>
            <tr className="err">
              <th>September 1, 2015</th>
              <td>12:00 pm EST</td>
              <td>Daily Report <i className="fa fa-caret-down" aria-hidden="true" /></td>
              <td>Error</td>
              <td />
            </tr>
            <tr>
              <th>September 2, 2015</th>
              <td>12:00 pm EST</td>
              <td>Daily Report</td>
              <td>Success</td>
              <td />
            </tr>
            <tr>
              <th>August 30, 2015</th>
              <td>12:00 pm EST</td>
              <td>Daily Report</td>
              <td>Success</td>
              <td />
            </tr>
            <tr>
              <th>August 26, 2015</th>
              <td>12:00 pm EST</td>
              <td>Daily Report</td>
              <td>Success</td>
              <td />
            </tr>
            <tr>
              <th>August 13, 2015</th>
              <td>12:00 pm EST</td>
              <td>Daily Report</td>
              <td>Success</td>
              <td />
            </tr>
            <tr>
              <th>August 2, 2015</th>
              <td>12:00 pm EST</td>
              <td>Daily Report</td>
              <td>Success</td>
              <td />
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ActivityTabPresenter;
