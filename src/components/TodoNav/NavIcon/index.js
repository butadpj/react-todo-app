import React from 'react';
import { getIcon } from '../../../utils';
import ReactDOM from 'react-dom';

const NavIcon = (props) => {
  return ReactDOM.createPortal(
    <img 
      onClick={props.handleClick}
      className="nav__icon"
      alt="nav-icon" 
      src={`${props.showNav ? getIcon('right') : getIcon('left')}`}
    />,
    document.getElementById('root')
  )
}

export default NavIcon