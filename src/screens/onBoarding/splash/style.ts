import {StyleSheet} from 'react-native';
import {COLOR, SIZES} from 'src/theme';

const styles = StyleSheet.create({
  SaContainer: {
    flex: 1,
  },
  vContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLOR.white,
    paddingBottom: SIZES.countPixelRatio(50),
  },
  iLogo: {
    height: SIZES.countPixelRatio(80),
    width: SIZES.countPixelRatio(80),
    resizeMode: 'contain',
    flex: 1,
  },
  tFrom: {
    fontSize: SIZES.countPixelRatio(18),
    color: COLOR.darkGray,
  },
  tMeta: {
    fontSize: SIZES.countPixelRatio(28),
    color: COLOR.pinkishOrange,
  },
});
export default styles;
