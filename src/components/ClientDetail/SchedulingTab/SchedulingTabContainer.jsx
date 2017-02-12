import React, { Component } from 'react';
import { connect } from 'react-redux';
import SchedulingTabPresenter from './SchedulingTabPresenter.jsx';

class SchedulingTabContainer extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      startDate: '',
      endDate: ''
    };
  this.dateHandler = this.dateHandler.bind(this);
  }

  dateHandler(e) {
    if (e.target.name === 'startDate') {
      this.setState({startDate: e.target.value})
    } else {
      this.setState({endDate: e.target.value})
    }
  }

  render() {
    return (
      <SchedulingTabPresenter 
        dateHandler={this.startDateHandler}
        startDate={this.state.startDate}
        endDate={this.state.endDate}
      />
    );
  }
}

SchedulingTabContainer.contextTypes = {
  store: React.PropTypes.object
};

SchedulingTabContainer.propTypes = {
};

const mapStateToProps = (state) => ({
});

const mapDispatchToProps = (dispatch) => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(SchedulingTabContainer);
