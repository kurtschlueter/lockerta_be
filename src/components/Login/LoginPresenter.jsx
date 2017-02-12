import React, { PropTypes } from 'react';

const LoginPresenter = ({
  loginHandler,
  username,
  password,
  error,
  usernameChangeHandler,
  passwordChangeHandler,
  handleKeyPress,
  handlerFormError,
  handleFocus
}) => {
  const logo = require('./../../assets/resources/' + process.env.RESOURCES + '/logo.png');
  return (
    <div
      className="login-body"
      onKeyPress={(sender) => {
        handleKeyPress(sender, null);
      }}
    >
      <div id="login">
        <form name="form-login">
          <div className="image">
            <img src={logo} width="192px" height="" alt="logo" />
          </div>
          { error
            ?
              <p className="loginError">Username or Password are either incorrect or don't match, please try again.</p>
            :
            null
          }
          <div className="block1">
            <div className="name"><p>Username</p></div>
            <input
              type="text"
              id="user"
              required
              placeholder=""
              onChange={(sender) => {
                usernameChangeHandler(sender.target.value);
              }}
              onKeyPress={(sender) => {
                handleKeyPress(sender, 'user');
              }}
              onClick={() => {
                handlerFormError();
              }}
              value={username}
              autoFocus={true}
            />
          </div>
          <div className="block2">
            <div className="passw"><p>Password</p></div>
            <input
              type="password"
              id="pass"
              required
              placeholder=""
              onChange={(sender) => {
                passwordChangeHandler(sender.target.value);
              }}
              value={password}
              onKeyPress={(sender) => {
                handleKeyPress(sender, 'password');
              }}
              onClick={() => {
                handlerFormError();
              }}
            />
          </div>
          <div style={{padding: '15px', height: '50px'}}>
          {/* Forgot password goes here */}
            <p className="forgot"><a href=""></a></p>
          </div>
          </form>
          <div id="submit">
            <input
              id="loginButton"
              type="button"
              value="Log In"
              ref={handleFocus}
              onClick={() => (loginHandler())}
            />
          </div>
      </div>
    </div>
  );
};

LoginPresenter.displayName = 'LoginPresenter';

LoginPresenter.propTypes = {
  loginHandler: PropTypes.func,
  username: PropTypes.string,
  password: PropTypes.string,
  error: PropTypes.bool,
  usernameChangeHandler: PropTypes.func,
  passwordChangeHandler: PropTypes.func,
  handleKeyPress: PropTypes.func,
  handlerFormError: PropTypes.func,
  handleFocus: PropTypes.func
};

export default LoginPresenter;
