import React, { Component } from 'react';
import { connect } from 'react-redux';
import TestPresenter from './TestPresenter.jsx';
import * as testActions from '../../actions/testActions';

class TestContainer extends Component {
  constructor(props) {
    super(props);
    this.state = { input: 'local state input' };
    this.inputHandler = this.inputHandler .bind(this);
    this.saveToReducer = this.saveToReducer .bind(this);
  }

  inputHandler(e) {
    this.setState({ input: e.target.value });
  }
  saveToReducer() {
    const { store } = this.context;
    store.dispatch(testActions.dispatchTest(this.state.input));
  }

  render() {
    return (
      <TestPresenter inputHandler={this.inputHandler} save={this.saveToReducer} />
    );
  }
}

TestContainer.contextTypes = {
  store: React.PropTypes.object
};

TestContainer.propTypes = {
};

const mapStateToProps = (state) => ({
  test: state.test.testString
});

const mapDispatchToProps = (dispatch) => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(TestContainer);
