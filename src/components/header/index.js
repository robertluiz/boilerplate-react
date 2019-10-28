import React from 'react';

import { FaSignOutAlt } from 'react-icons/fa';
import { Container } from './styles';
import Logo from '../../assets/logo.png';

export default function header() {
  return (
    <Container>
      <div id="logo-group">
        <span id="logo">
          <img src={Logo} alt="SmartAdmin" />
        </span>
      </div>
      <div className="pull-right">
        <div id="hide-menu" className="btn-header pull-right">
          <span>
            <a href="#/" title="Collapse Menu">
              <i className="fa fa-reorder" />
            </a>
          </span>
        </div>
        <div id="logout" className="btn-header transparent pull-right">
          <span>
            <a
              href="#/login"
              title="Sign Out"
              data-logout-msg="You can improve your security further after logging out by closing this opened browser"
            >
              <FaSignOutAlt />
            </a>
          </span>
        </div>
      </div>
    </Container>
  );
}
