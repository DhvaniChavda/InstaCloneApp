import {StyleSheet} from 'react-native';
import {COLOR, FONTS, SIZES} from 'src/theme';

const styles = StyleSheet.create({
  SaContainer: {
    flex: 1,
  },
  vMainContainer: {
    flex: 1,
    marginHorizontal: SIZES.countPixelRatio(20),
  },
  vSearchContainer: {
    backgroundColor: COLOR.lightGray,
    flexDirection: 'row',
    paddingVertical: SIZES.countPixelRatio(20),
    paddingHorizontal: SIZES.countPixelRatio(15),
    borderRadius: SIZES.countPixelRatio(15),
  },
  iSearch: {
    height: SIZES.countPixelRatio(30),
    width: SIZES.countPixelRatio(30),
    resizeMode: 'contain',
  },
  iNextArrow: {
    height: SIZES.countPixelRatio(27),
    width: SIZES.countPixelRatio(27),
    resizeMode: 'contain',
  },
  tSearch: {
    fontSize: SIZES.countPixelRatio(18),
    color: COLOR.black,
    fontFamily: FONTS.ROBOTO_REGULAR,
    marginHorizontal: SIZES.countPixelRatio(15),
  },
  vTextRowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: SIZES.countPixelRatio(20),
    alignItems: 'center',
  },
  vTextImgRowContainer: {
    flexDirection: 'row',
    paddingVertical: SIZES.countPixelRatio(20),
    alignItems: 'center',
  },
  tYourAcc: {
    fontSize: SIZES.countPixelRatio(18),
    color: COLOR.blue,
    fontFamily: FONTS.ROBOTO_MEDIUM,
  },
  tAccCenter: {
    fontSize: SIZES.countPixelRatio(24),
    color: COLOR.black,
    fontFamily: FONTS.ROBOTO_REGULAR,
  },
  tMeta: {
    fontSize: SIZES.countPixelRatio(24),
    color: COLOR.black,
    fontFamily: FONTS.ROBOTO_BOLD,
  },
  tSecurity: {
    fontSize: SIZES.countPixelRatio(16),
    color: COLOR.black,
    fontFamily: FONTS.SANS_REGULAR,
  },
  tDummy: {
    fontSize: SIZES.countPixelRatio(18),
    color: COLOR.black,
    fontFamily: FONTS.SANS_REGULAR,
  },
  vSeprator: {
    height: SIZES.smartScale(6),
    backgroundColor: COLOR.lightGray,
    marginVertical: SIZES.countPixelRatio(20),
    opacity: 0.4,
  },
  tTitle: {
    fontSize: SIZES.countPixelRatio(22),
    color: COLOR.black,
    fontFamily: FONTS.ROBOTO_MEDIUM,
    marginBottom: SIZES.countPixelRatio(10),
  },
});
export default styles;
