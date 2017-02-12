import React from 'react';


const CampaignsTabPresenter = ({

}) => {
  return (
    <div className="tab-content campaigns">
      <div className="col-lg-12">
        <div className="col-lg-9 col-md-9" />
        <div className="col-lg-3 col-md-3">
          <i className="fa fa-search icons-search" aria-hidden="true" />
          <input type="text" className="custom-search-input" data-search-on-list="search" placeholder="Search" />
          <div className="dropdown">
            <input className="dropdown-toggle" type="text" />
            <i className="fa fa-sliders camp dropdown-text" aria-hidden="true" />
            <ul className="dropdown-content">
              <div id="form">
                <form>
                  <li><span>Filter by</span>
                    <div className="select" tabIndex="1">
                      <input className="selectopt" name="test" type="radio" id="opt8" checked />
                      <label htmlFor="opt8" className="option">Analytics</label>
                      <input className="selectopt" name="test" type="radio" id="opt9" />
                      <label htmlFor="opt9" className="option">...</label>
                    </div>
                  </li>
                </form>
              </div>
            </ul>
          </div>
        </div>
      </div>
      <table className="campaign order-table">
        <thead>
          <tr>
            <th><b>Campaign</b></th>
            <th><b>Analytics Aliases</b></th>
            <th><b>Marchex Aliases</b></th>
          </tr>
        </thead>
        <tbody>
        <tr>
          <td>Brand <i className="fa fa-caret-down" aria-hidden="true" /></td>
          <th>Branded Bradning Brand Camapaign BandAds brand Branding branded Bradning brand
            <div className="dropdown2">
              <input className="dropdown-toggle2" type="text" />
              <i className="fa fa-plus-circle dropdown-text2" aria-hidden="true" />
              <form className="dropdown-content2">
                <input type="text" className="txt-add" placeholder="" />
                <input type="submit" value="Save" />
              </form>
            </div>
          </th>
          <th>Branded Bradning Brand Camapaign BandAds brand Branding branded Bradning brand
            <div className="dropdown2">
              <input className="dropdown-toggle2" type="text" />
              <i className="fa fa-plus-circle dropdown-text2" aria-hidden="true" />
              <form className="dropdown-content2">
                <input type="text" className="txt-add" placeholder="" />
                <input type="submit" value="Save" />
              </form>
            </div>
          </th>
        </tr>
        <tr>
          <td>Brand <i className="fa fa-caret-down" aria-hidden="true" /></td>
          <th>Branded Bradning Brand Camapaign BandAds brand Branding branded Bradning brand
            <div className="dropdown2">
              <input className="dropdown-toggle2" type="text" />
              <i className="fa fa-plus-circle dropdown-text2" aria-hidden="true" />
              <form className="dropdown-content2">
                <input type="text" className="txt-add" placeholder="" />
                <input type="submit" value="Save" />
              </form>
            </div>
          </th>
          <th>Branded Bradning Brand Camapaign BandAds brand Branding branded Bradning brand
            <div className="dropdown2">
              <input className="dropdown-toggle2" type="text" />
              <i className="fa fa-plus-circle dropdown-text2" aria-hidden="true" />
              <form className="dropdown-content2">
                <input type="text" className="txt-add" placeholder="" />
                <input type="submit" value="Save" />
              </form>
            </div>
          </th>
        </tr>
        <tr>
          <td>Brand <i className="fa fa-caret-down" aria-hidden="true" /></td>
          <th>Branded Bradning Brand Camapaign BandAds brand Branding branded Bradning brand
            <div className="dropdown2">
              <input className="dropdown-toggle2" type="text" />
              <i className="fa fa-plus-circle dropdown-text2" aria-hidden="true" />
              <form className="dropdown-content2">
                <input type="text" className="txt-add" placeholder="" />
                <input type="submit" value="Save" />
              </form>
            </div>
          </th>
          <th>Branded Bradning Brand Camapaign BandAds brand Branding branded Bradning brand
            <div className="dropdown2">
              <input className="dropdown-toggle2" type="text" />
              <i className="fa fa-plus-circle dropdown-text2" aria-hidden="true" />
              <form className="dropdown-content2">
                <input type="text" className="txt-add" placeholder="" />
                <input type="submit" value="Save" />
              </form>
            </div>
          </th>
        </tr>
        <tr>
          <td>Brand <i className="fa fa-caret-down" aria-hidden="true" /></td>
          <th>Branded Bradning Brand Camapaign BandAds brand Branding branded Bradning brand
            <div className="dropdown2">
              <input className="dropdown-toggle2" type="text" />
              <i className="fa fa-plus-circle dropdown-text2" aria-hidden="true" />
              <form className="dropdown-content2">
                <input type="text" className="txt-add" placeholder="" />
                <input type="submit" value="Save" />
              </form>
            </div>
          </th>
          <th>Branded Bradning Brand Camapaign BandAds brand Branding branded Bradning brand
            <div className="dropdown2">
              <input className="dropdown-toggle2" type="text" />
              <i className="fa fa-plus-circle dropdown-text2" aria-hidden="true" />
              <form className="dropdown-content2">
                <input type="text" className="txt-add" placeholder="" />
                <input type="submit" value="Save" />
              </form>
            </div>
          </th>
        </tr>
        <tr>
          <td>Brand <i className="fa fa-caret-down" aria-hidden="true" /></td>
          <th>Branded Bradning Brand Camapaign BandAds brand Branding branded Bradning brand
            <div className="dropdown2">
              <input className="dropdown-toggle2" type="text" />
              <i className="fa fa-plus-circle dropdown-text2" aria-hidden="true" />
              <form className="dropdown-content2">
                <input type="text" className="txt-add" placeholder="" />
                <input type="submit" value="Save" />
              </form>
            </div>
          </th>
          <th>Branded Bradning Brand Camapaign BandAds brand Branding branded Bradning brand
            <div className="dropdown2">
              <input className="dropdown-toggle2" type="text" />
              <i className="fa fa-plus-circle dropdown-text2" aria-hidden="true" />
              <form className="dropdown-content2">
                <input type="text" className="txt-add" placeholder="" />
                <input type="submit" value="Save" />
              </form>
            </div>
          </th>
        </tr>
        </tbody>
      </table>
      <div className="clearfix" />
    </div>
  );
};

export default CampaignsTabPresenter;
