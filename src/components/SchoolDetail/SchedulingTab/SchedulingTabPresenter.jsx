import React from 'react';


const SchedulingTabPresenter = ({
  dateHandler,
  startDate,
  endDate,
  clientInfoSave
}) => {
  return (
    <div className="tab-content">
      <h3>Report Scheduling</h3>
      <hr /><br />
      <div className="col-lg-6">
        <div id="form">
          <form>
            <span>Start Date</span>
            <input name='startDate' type="date" value={startDate} onChange={dateHandler}/>
            {/* <!-- <input type="month" name="mes" value=""> --> */}
            <span>Frequency</span>
              <div className="select" tabIndex="1">
                <input className="selectopt" name="test" type="radio" id="opt1" checked/>
                <label htmlFor="opt1" className="option">Daily</label>
                <input className="selectopt" name="test" type="radio" id="opt2" />
                <label htmlFor="opt2" className="option">Weekly</label>
                <input className="selectopt" name="test" type="radio" id="opt3" />
                <label htmlFor="opt3" className="option">Monthly</label>
              </div>
          </form>
        </div>
      </div>
      <div className="col-lg-6">
        <div id="form">
          <form>
            <span>End Date</span>
            <input name='endDate' type="date" value={endDate} />
            {/* <!-- <input type="month" name="mes" value=""> --> */}
            <span>Template</span>
            <div className="select" tabIndex="1">
              <input className="selectopt" name="test" type="radio" id="opt4" checked />
              <label htmlFor="opt4" className="option">Standard SEO</label>
              <input className="selectopt" name="test" type="radio" id="opt5" />
              <label htmlFor="opt5" className="option">...</label>
            </div>
          </form>
        </div>
      </div>
      <div className="col-lg-12">
        <div id="form">
          <form className="send-email">
            <br />
            <div className="col-lg-8">
              <span>Send To</span>
              <input type="text" value="mail@domain.com" />
            </div>
            <div className="col-md-4">
              {/* <button className="btn-add add_field_button"><i style={{ fontFamily: 'Roboto' }} className="fa fa-plus">Add More</i></button> */}
              <button className="btn-add add_field_button"><i className="fa fa-plus"></i>Add More</button>
            </div>
            <div className="input_fields_wrap">
              {/* <!-- go here --> */}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SchedulingTabPresenter;
