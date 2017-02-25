import React from 'react';

const NavbarPresenter = ({
  showNewSchoolButton,
  newSchoolClickHandler,

  showNewManagerButton,
  showNewManagerView,
}) => {
  const style = {
    position: 'absolute',
    width: '100%'
  };
  return (
    <header className="main-header" style={{ marginLeft: '12.7%' }}>
      <nav className="navbar" style={style}>
        {showNewManagerButton &&
          <div className="navbarinfo" id="new-client" style={{ width: '160px', padding: '3px 14px 0 6px' }} onClick={() => showNewManagerView()}><a><i className="fa fa-plus" aria-hidden="true" /><span> &nbsp;New Manager</span></a></div>
        }
        {showNewSchoolButton &&
          <div className="navbarinfo" onClick={() => newSchoolClickHandler()}>
            <a href="#">
              <i className="fa fa-plus" aria-hidden="true" /><span> &nbsp;New School</span>
            </a>
          </div>
        }
      </nav>
    </header>
  );
};

export default NavbarPresenter;
