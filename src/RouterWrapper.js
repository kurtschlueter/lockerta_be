import React from 'react';
import { Route } from 'react-router';
import TestContainer from './components/Test/TestContainer.jsx';
import ClientDetailContainer from './components/ClientDetail/ClientDetailContainer.jsx';
import MainLayout from './components/MainLayout/MainLayoutPresenter.jsx';
import ClientListContainer from './components/ClientList/ClientListContainer.jsx';
import LoginContainer from './components/Login/LoginContainer.jsx';
import ManagersContainer from './components/Managers/ManagersContainer.jsx';
import GroupsContainer from './components/Groups/GroupsContainer.jsx';
import ManagerDetailContainer from './components/Managers/ManagerDetailContainer.jsx';

export default (store) => {
  const requireLogin = (nextState, replace) => {
    const storeState = store.getState().loginState;
    if (!storeState.isAuthenticated) {
      replace({
        pathname: '/login',
        state: { nextPathname: nextState.location.pathname }
      });
    }
  };

  return (
    <Route>
      <Route path="/login" component={LoginContainer} />
        <Route component={MainLayout} onEnter={requireLogin}>
          <Route path="/" component={ClientListContainer} />
          <Route path="clientDetail/:clientId" component={ClientDetailContainer} />
          <Route path="clientList" component={ClientListContainer} />
          <Route path="login" component={LoginContainer} />
          <Route path="test" component={TestContainer} />
          <Route path="managers" component={ManagersContainer} />
          <Route path="specialists" component={ManagersContainer} />
          <Route path="groups" component={GroupsContainer} />
          <Route path="managerDetail" component={ManagerDetailContainer} />
      </Route>
    </Route>
  );
};
