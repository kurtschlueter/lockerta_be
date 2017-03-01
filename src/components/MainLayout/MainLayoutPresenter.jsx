import React, { Component } from 'react';
import { browserHistory, Link } from 'react-router';
import { connect } from 'react-redux';
import { requestLogout } from '../../actions/loginActions';
import * as managerActions from '../../actions/managerActions';
import * as clientActions from '../../actions/clientActions';
import ModalContainer from '../Modal/ModalContainer.jsx';
import NavbarContainer from '../Navbar/NavbarContainer.jsx';

const userType = require(`../../assets/resources/${process.env.RESOURCES}/strings.js`).userType;
const userTitle = require(`../../assets/resources/${process.env.RESOURCES}/strings.js`).userTitle;

// TODO -  This tabs should come from the flavors configuration
const menuItems =
  [
    { title: 'SCHOOLS', path: '/schoolList' },
    {
      title: userTitle,
      path: `/${userType}`
    },
    { title: 'REVIEWS', path: '/reviewList'}
  ];

class MainLayout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      hover: false,
      activeTab: localStorage.getItem('index') || 0
    };
    this.handleDropDown = this.handleDropDown.bind(this);
    this.onMouseEnterDropdown = this.onMouseEnterDropdown.bind(this);
    this.activeTab = this.activeTab.bind(this);
    this.onMouseLeaveDropdown = this.onMouseLeaveDropdown.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
  }

  componentDidUpdate() {
    if (this.state.open && document.getElementById('profile')) {
      document.getElementById('profile').addEventListener('mouseover', this.onMouseEnterDropdown);
      document.getElementById('profile').addEventListener('mouseout', this.onMouseLeaveDropdown);
    }
  }

  componentWillUnmount() {
    localStorage.setItem('index', 0);
  }

  onMouseEnterDropdown() {
    this.setState({ hover: true });
  }

  onMouseLeaveDropdown() {
    this.setState({ hover: false });
  }

  activeTab(tabIndex) {
    localStorage.setItem('index', tabIndex);
    this.setState({ activeTab: tabIndex });
  }

  handleDropDown(param) {
    if (param === 'dropdownMenu') {
      this.setState({ open: !this.state.open });
    } else {
      this.setState({ open: false, hover: false });
    }
  }

  handleLogout() {
    this.props.logoutHandler();
    browserHistory.push('/login');
  }

  render() {
    const logo = require(`./../../assets/resources/${process.env.RESOURCES}/logo.png`);
    const name = localStorage.getItem('name') ? localStorage.getItem('name') : '';
    return (
      <div className="intro">
        <ModalContainer />
        <img src={logo} width="200" height="60" alt="" style={{ marginLeft: '-8px' }} />
        <p id="welcome" onClick={()=>(this.handleDropDown('dropdownMenu'))} style={{ cursor: 'pointer' }}>{` Welcome ${name} `}
          <i className="fa fa-caret-down" id="dropdownMenuArrow" aria-hidden="true" />
        </p>
        {
          this.state.open
          ?
          <div>
            <div onClick={() => this.handleDropDown()} className="click-outside" style={{ left: '0', top: '0' }}></div>
            <div id={!this.state.hover ? 'dropdownMenu' : 'dropdownMenuHover'}>
              <ul>
                <Link to="/managerDetail">
                  <li href="#" id="profile" onClick={() => (this.handleDropDown(''))} className="profile">
                  <i className="icon-profile" aria-hidden="true" style={{ padding: '0px 20px 0px 0px' }}></i>Profile</li>
                </Link>
                  <li href="#" id="logout" onClick={() => this.handleLogout()} className="logout"><i className="icon-logout" aria-hidden="true" style={{ padding: '0px 20px 0px 0px' }} />Logout</li>
              </ul>
            </div>
          </div>
          :
          null
        }
        <NavbarContainer />
        <div className="wrapper" style={{ minHeight: '100vh' }}>
          <div className="main-sidebar">
            <section className="sidebar">
              <ul className="sidebar-menu">
                {
                  menuItems.map((menuItem, index) =>
                    <li key={index}>
                      <Link
                        style={{ backgroundColor: index === Number(localStorage.getItem('index')) ? '#253D46' : '#0D2832' }}
                        to={menuItem.path}
                        id={menuItem.title}
                        onClick={() => this.activeTab(index)}
                      >{menuItem.title}
                      </Link>
                    </li>
                  )
                }
              </ul>
            </section>
          </div>
          <div>{this.props.children}</div>
        </div>
      </div>
    );
  }
}

MainLayout.contextTypes = {
  store: React.PropTypes.object
};

MainLayout.propTypes = {
  children: React.PropTypes.object.isRequired,
  logoutHandler: React.PropTypes.func,
  name: React.PropTypes.string
};

const mapStateProps = state => ({
  name: state.loginState.name
});

const mapDispatchToProps = dispatch => ({
  logoutHandler: () => {
    dispatch(requestLogout());
  },
  hideNewManagerView: () => {
    dispatch(managerActions.hideNewManagerView());
  },
  hideImportCSV: () => {
    dispatch(clientActions.hideImportCSV());
  }
});

export default connect(mapStateProps, mapDispatchToProps)(MainLayout);
