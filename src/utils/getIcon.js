import navLeft from '../icons/nav-icon-left.png';
import navRight from '../icons/nav-icon-right.png';

const getIcon = (icon) => {
  return icon.toLowerCase() === 'left' ? navLeft : navRight
} 

export default getIcon