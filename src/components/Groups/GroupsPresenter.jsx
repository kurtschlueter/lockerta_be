import React from 'react';

const GroupsPresenter = ({

}) => {
  const styles = {
    contentWrapper: {
      minHeight: 279
    }
  }
  return (
    <div className="content-wrapper" style={styles.contentWrapper}>
      <header className="main-header">
        <nav className="navbar">
          {/* <!-- <a href="#"><i class="fa fa-caret-left" aria-hidden="true"></i><span> Client Name</span></a> --> */}
          <div className="navbarinfo"><a><i className="fa fa-plus" aria-hidden="true" /><span>&nbsp;New Group</span></a></div>
          {/* <!-- <div class="navbarinfo">
            <a href="#"><i class="fa fa-search" aria-hidden="true"></i></a>
            <input type="search" placeholder="Search" id="search-client">
          </div> --> */}
        </nav>
      </header>

      <section className="content-header">
        <div className="row">
          <div className="col-lg-12">
            <table id="table-client">
              <thead>
                <tr>
                  <th>Group Name</th>
                  <th>Created</th>
                  <th>Updated</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <th>Group Name</th>
                  <th>August 26, 2015</th>
                  <th>August 26, 2015</th>
                </tr>
                <tr>
                  <th>Group Name</th>
                  <th>August 26, 2015</th>
                  <th>August 26, 2015</th>
                </tr>
                <tr>
                  <th>Group Name</th>
                  <th>August 26, 2015</th>
                  <th>August 26, 2015</th>
                </tr>
                <tr>
                  <th>Group Name</th>
                  <th>August 26, 2015</th>
                  <th>August 26, 2015</th>
                </tr>
              </tbody>
            </table>

            <div className="tabs">
              <input type="radio" name="tabs" id="tabone" className="hidden" checked="checked" />
              <label htmlFor="tabone" className="hidden2" />
              <div className="tab">
                <div className="navgroups">
                  <div className="navleft">
                    <h4>Group Members</h4>
                  </div>
                  <div className="navright">
                    <a><i className="fa fa-plus" aria-hidden="true" /> &nbsp;Add Members</a>
                  </div>
                </div>
                <hr />
                <div className="col-lg-10 col-lg-offset-1 groups">
                  <table>
                    <tbody>
                      <tr>
                        <th>James Sullivan <br /> <span>Account Manager</span></th>
                        <th>James Sullivan <br /> <span>Account Manager</span></th>
                        <th>James Sullivan <br /> <span>Account Manager</span></th>
                      </tr>
                      <tr>
                        <th>James Sullivan <br /> <span>Account Manager</span></th>
                        <th>James Sullivan <br /> <span>Account Manager</span></th>
                        <th>James Sullivan <br /> <span>Account Manager</span></th>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className="clearfix" />

                <div className="navgroups">
                  <div className="navleft">
                    <h4>Permissions</h4>
                  </div>
                  <div className="navright">
                    <a><i className="fa fa-plus" aria-hidden="true" /> &nbsp;Add Permissions</a>
                  </div>
                </div>
                <hr />
                <div className="col-lg-10 col-lg-offset-1 groups">
                  <ul data-search-on-list="list">
                    <div className="col-lg-4">
                      <li className="list-item" data-search-on-list="list-item">
                        <input type="checkbox" id="radio1" />
                        <label htmlFor="radio1">Analytics</label>
                        <input type="checkbox" id="radio2" />
                        <label htmlFor="radio2">Analytics Goals</label>
                        <input type="checkbox" id="radio3" />
                        <label htmlFor="radio3">Aliases</label>
                      </li>
                    </div>
                    <div className="col-lg-4">
                      <li className="list-item" data-search-on-list="list-item">
                        <input type="checkbox" id="radio4" />
                        <label htmlFor="radio4">Permissions</label>
                        <input type="checkbox" id="radio5" />
                        <label htmlFor="radio5">Permissions</label>
                        <input type="checkbox" id="radio6" />
                        <label htmlFor="radio6">Permissions</label>
                      </li>
                    </div>
                    <div className="col-lg-4">
                      <li className="list-item" data-search-on-list="list-item">
                        <input type="checkbox" id="radio7" />
                        <label htmlFor="radio7">Permissions</label>
                        <input type="checkbox" id="radio8" />
                        <label htmlFor="radio8">Permissions</label>
                        <input type="checkbox" id="radio9" />
                        <label htmlFor="radio9">Permissions</label>
                      </li>
                    </div>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="space-foot" />
    </div>
  );
};

export default GroupsPresenter;
