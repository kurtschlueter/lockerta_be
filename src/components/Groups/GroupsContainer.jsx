import React, { Component } from 'react';
import { connect } from 'react-redux';
import GroupsPresenter from './GroupsPresenter.jsx';

class GroupsContainer extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 'information' };
  }
  render() {
    return (
      <GroupsPresenter />
    );
  }
}

GroupsContainer.contextTypes = {
  store: React.PropTypes.object
};

GroupsContainer.propTypes = {
};

const mapStateToProps = (state) => ({
});

const mapDispatchToProps = (dispatch) => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(GroupsContainer);
