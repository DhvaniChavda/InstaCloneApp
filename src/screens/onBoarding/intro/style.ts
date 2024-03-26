import {StyleSheet} from 'react-native';
import {COLOR, FONTS, SIZES} from 'src/theme';

const styles = StyleSheet.create({
  SaContainer: {
    flex: 1,
    backgroundColor: COLOR.white,
  },
  vMainContainer: {
    flex: 1,
    backgroundColor: COLOR.white,
  },
  vScrollView: {
    marginHorizontal: SIZES.countPixelRatio(20),
    paddingBottom: SIZES.countPixelRatio(20),
  },
  tDesc: {
    fontSize: SIZES.countPixelRatio(18),
    color: COLOR.black,
    fontFamily: FONTS.SANS_MEDIUM,
  },
  tInsta: {
    fontSize: SIZES.countPixelRatio(50),
    color: COLOR.black,
    fontFamily: FONTS.BILLABONG,
  },
  toButton: {
    backgroundColor: COLOR.black,
    paddingVertical: SIZES.countPixelRatio(30),
    alignItems: 'center',
  },
  tLetStart: {
    fontSize: SIZES.countPixelRatio(20),
    color: COLOR.white,
    fontFamily: FONTS.ROBOTO_MEDIUM,
  },
});
export default styles;
