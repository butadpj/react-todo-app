const getIcon = (icon) => {
  const iconBaseUrl = 'https://img.icons8.com/nolan/32/';
  const suffix = '.png';
  return `${iconBaseUrl}${icon}${suffix}`;
} 

export default getIcon