import {Dimensions, Platform} from 'react-native';
const {height: HEIGHT, width: WIDTH} = Dimensions.get('window');
const isIphone = Platform.OS === 'ios';
const isAndroid = Platform.OS === 'android';
const widthPer = WIDTH / 100;
const heightPer = HEIGHT / 100;
const deviceType = WIDTH < 480 ? 'phone' : 'tablet';
const iPhoneX = Platform.OS === 'ios' && (HEIGHT === 812 || HEIGHT === 896);
const ratioCount = Math.sqrt(HEIGHT * HEIGHT + WIDTH * WIDTH) / 1000;

/**
 * Get size with scale factor
 * TODO: will use this for scale sizes for different phones and screen resolutions
 *
 * @param {number} size - original size
 */
export default {
  countPixelRatio: (size: number) => size * ratioCount,
  responsiveHeight: (size: number) => size * heightPer,
  responsiveWidth: (size: number) => size * widthPer,
  smartScale: (value: number) => {
    const tempHeight =
      Platform.OS === 'ios' ? (iPhoneX ? HEIGHT - 78 : HEIGHT) : HEIGHT - 24;
    if (deviceType == 'phone') {
      return (value * tempHeight) / 667;
    }
    return (value * tempHeight) / 667;
  },
  smartWidthScale: (value: number) => {
    const tempWidth = WIDTH;
    if (deviceType == 'phone') {
      return (value * tempWidth) / 375;
    }
    return (value * tempWidth) / 375;
  },
  WIDTH,
  HEIGHT,
  isIphone,
  isAndroid,
};
