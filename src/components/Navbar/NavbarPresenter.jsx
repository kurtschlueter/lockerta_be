import React from 'react';

const NavbarPresenter = ({
  showNewClientButton,
  showNewClientDropdown,
  showNewManagerButton,
  showNewManagerView,
  newClientDropdownHandler,
  importCSVHandler,
  hover
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
        {showNewClientButton &&
          <div className="navbarinfo" onClick={() => newClientDropdownHandler()} id={!showNewClientDropdown ? 'new-client' : 'new-client-triangle'}>
            <a href="#">
              <i className="fa fa-plus" aria-hidden="true" /><span> &nbsp;New Client</span>
            </a>
          </div>
        }
        {showNewClientDropdown &&
          <div>
            <div id={!hover ? 'dropdownMenu' : 'dropdownMenuHover'} style={{ top: '90px', right: '30px' }}>
              <ul>
                <li className="dropdownItem" id="csv" onClick={() => importCSVHandler()}>
                  <i className="icon-csv" style={{ padding: '0px 20px 0px 0px' }} />Upload CSV
                </li>
              </ul>
            </div>
            <div className="click-outside" onClick={() => newClientDropdownHandler()}></div>
          </div>
        }
      </nav>
    </header>
  );
};

export default NavbarPresenter;
