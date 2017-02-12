import React, { Component } from 'react';
import { connect } from 'react-redux';
import LoginPresenter from './LoginPresenter.jsx';
import { requestLogin, usernameChange, passwordChange, resetForm } from '../../actions/loginActions';
import { browserHistory } from 'react-router';

class LoginContainer extends Component {
  constructor(props) {
    super(props);
    this.state = { username: '', password: '' };
    this.usernameChangeHandler = this.usernameChangeHandler.bind(this);
    this.passwordChangeHandler = this.passwordChangeHandler.bind(this);
    this.loginHandler = this.loginHandler.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.redirectHandler = this.redirectHandler.bind(this);
    this.focusHandler = this.focusHandler.bind(this);
  }

  componentDidUpdate() {
    if (!this.props.loginError) {
      document.getElementById("login").style.height='240px'; 
      return false;
    }
    document.getElementById("login").style.height='260px'; 
    this.input.focus();
  }


  usernameChangeHandler(userName) {
    this.setState({ username: userName });
    this.props.usernameHandler(userName);
  }

  passwordChangeHandler(userPassword) {
    this.setState({ password: userPassword });
    this.props.passwordHandler(userPassword);
  }

  handleKeyPress(target, field) {
    if (target.charCode === 13) {
      this.loginHandler();
    }
  }

  loginHandler() {
    const creds = {
      username: this.props.username,
      password: this.props.password
    };
    this.props.dispatchLoginHandler(creds);
  }

  redirectHandler() {
    browserHistory.push('/');
  }

  focusHandler(c) {
    this.input = c;
  }

  render() {
    if (this.props.isAuthenticated) {
      this.redirectHandler();
    }
    return (
      <LoginPresenter
        usernameChangeHandler={this.usernameChangeHandler}
        passwordChangeHandler={this.passwordChangeHandler}
        loginHandler={this.loginHandler}
        username={this.props.username}
        password={this.props.password}
        error={this.props.loginError}
        handleKeyPress={this.handleKeyPress}
        handlerFormError={this.props.resetForm}
        handleFocus={this.focusHandler}
      />
    );
  }
}

const mapDispatchToProps = dispatch => ({
  dispatchLoginHandler: creds => dispatch(requestLogin(creds)),
  usernameHandler: (username) => {
    dispatch(usernameChange(username));
  },
  passwordHandler: (password) => {
    dispatch(passwordChange(password));
  },
  resetForm: () => {
    dispatch(resetForm());
  }
});

const mapStateToProps = state => ({
  isAuthenticated: state.loginState.isAuthenticated,
  loginError: state.loginState.loginError,
  password: state.loginState.password,
  username: state.loginState.username
});

LoginContainer.propTypes = {
  dispatchLoginHandler: React.PropTypes.func,
  isAuthenticated: React.PropTypes.bool,
  loginError: React.PropTypes.bool,
  usernameHandler: React.PropTypes.func,
  passwordHandler: React.PropTypes.func,
  username: React.PropTypes.string,
  password: React.PropTypes.string,
  resetForm: React.PropTypes.func
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);
