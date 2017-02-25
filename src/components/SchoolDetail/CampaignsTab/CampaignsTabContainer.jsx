import React, { Component } from 'react';
import { connect } from 'react-redux';
import CampaignsTabPresenter from './CampaignsTabPresenter.jsx';

class CampaignsTabContainer extends Component {
  constructor(props) {
    super(props);
    this.state = { test: 'local state input' };
  }

  render() {
    return (
      <CampaignsTabPresenter />
    );
  }
}

CampaignsTabContainer.contextTypes = {
  store: React.PropTypes.object
};

CampaignsTabContainer.propTypes = {
};

const mapStateToProps = (state) => ({
});

const mapDispatchToProps = (dispatch) => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(CampaignsTabContainer);
