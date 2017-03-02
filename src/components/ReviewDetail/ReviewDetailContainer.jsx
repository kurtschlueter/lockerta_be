import React, { Component } from 'react';
import { connect } from 'react-redux';

import ReviewDetailPresenter from './ReviewDetailPresenter.jsx';

const tabs = require(`../../assets/resources/${process.env.RESOURCES}/revTabs.jsx`).tabs;

import * as reviewActions from './../../actions/reviewActions.js';
import * as selectors from './../../reducers/reducers.js';

class ReviewDetailContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      review: {},
      activeTab: null,
      basicTabs: {}
    };
    this.tabSelect = this.tabSelect.bind(this);
    this.updateSchool = this.updateSchool.bind(this);
  }

  componentWillMount() {

    if (this.props.detailViewNew == false) {
      this.props.fetchReview(this.props.review.id);
    }
  }

  componentWillReceiveProps(nextProps) {
    console.log('componentWillReceiveProps', nextProps)
    console.log('tabs', tabs)
    if (this.props !== nextProps) {
      if (nextProps.review) {
        this.setState({
          review: nextProps.review,
          activeTab: 0,
          basicTabs: {
            metadata: tabs.map(tab => {
              const compProps = {
                review: nextProps.review,
                updateSchool: tab.tabID === 'information' ? this.updateSchool : null
              };
              tab.component = tab.generateComponent(compProps);
              return tab;
            })
          }
        });
      }
    }
  }

  tabSelect(activeTabIndex) {
    this.setState({ activeTab: activeTabIndex });
  }

  updateSchool(updatedSchool) {
    // console.log('updated school', updatedSchool)
    Object.assign(this.review, updatedSchool);
  }

  render() {
    console.log('in render state', this.state)
    console.log('in render props', this.props)
    if (this.state.basicTabs && this.state.activeTab !== null) {
      let activeTabComponent = this.state.basicTabs.metadata[this.state.activeTab].component;
      // console.log('activeTabComponent', activeTabComponent)
      return (
        <ReviewDetailPresenter
          activeTab={this.state.activeTab}
          tabsList={this.state.basicTabs.metadata}
          activeTabComponent={activeTabComponent}
          tabSelect={this.tabSelect}
        />
      );
    } else {
      return (<div />);
    }
  }
}

ReviewDetailContainer.contextTypes = {
  store: React.PropTypes.object
};

const mapStateToProps = (state, ownProps) => ({
  review: selectors.setReview(state),
  detailViewNew: state.schools.detailViewNew
});

const mapDispatchToProps = (dispatch) => ({
  fetchReview: (id) => {
    console.log('idididididid', id)
    return dispatch(reviewActions.fetchReview(id));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(ReviewDetailContainer);
