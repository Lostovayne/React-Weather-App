
import  clouds from "../icons/clouds.png"
import clear from '../icons/clear.png';
import rain from '../icons/Rain.png';



const Icons = (icon) => {
  switch (icon) {
    case 'Thunderstorm':
      icon = '../icons/thunderstorms.png';
      break;
    case 'Drizzle':
      icon = rain;
      console.log('LLOVIZNA');
      break;
    case 'Rain':
      icon = rain;
      console.log('LLUVIA');
      break;
    case 'Snow':
      icon = '../icons/snow.png';
      console.log('NIEVE');
      break;

    case 'Clear':
      icon = clear;
      console.log('LIMPIO');
      break;

    case 'Clouds':
      icon = clouds ;
      console.log('NUBES');
      break;

    case 'Fog':
      icon = '../icons/clouds.png';
      console.log('NUBES');
      break;
    case 'Haze':
      icon = '../icons/clouds.png';
      console.log('BRUMAS');
      break;

    default:
      icon = clear;
      console.log('LIMPIO');
  }
  
  return icon
  
};
export default Icons;
