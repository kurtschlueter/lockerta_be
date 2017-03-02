import React, { Component } from 'react';
import { connect } from 'react-redux';
import ActivityTabPresenter from './ActivityTabPresenter.jsx';

class ActivityTabContainer extends Component {
  constructor(props) {
    super(props);
    this.state = { popUpStatus: 'true' };
    this.filterPopUpHandler = this.filterPopUpHandler.bind(this);
  }
  filterPopUpHandler() {
    this.setState({ popUpStatus: !this.state.popUpStatus });
  }

  render() {
    return (
      <ActivityTabPresenter
        filterPopUpHandler={this.filterPopUpHandler}
        popUpStatus={this.state.popUpStatus}
      />
    );
  }
}

ActivityTabContainer.contextTypes = {
  store: React.PropTypes.object
};

ActivityTabContainer.propTypes = {
};

const mapStateToProps = (state) => ({
});

const mapDispatchToProps = (dispatch) => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(ActivityTabContainer);
