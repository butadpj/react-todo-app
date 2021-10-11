import React from 'react';
import { getIcon } from '../../../utils/getIcon';
import ReactDOM from 'react-dom';

const NavIcon = (props) => {
  return ReactDOM.createPortal(
    <img 
      onClick={props.handleClick}
      className="nav__icon"
      alt="nav-icon" 
      src={`${props.showNav ? getIcon('double-right') : getIcon('double-left')}`}
    />,
    document.getElementById('root')
  )
}

export default NavIcon