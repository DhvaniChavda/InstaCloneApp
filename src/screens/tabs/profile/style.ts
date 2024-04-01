import {StyleSheet} from 'react-native';
import {COLOR, FONTS, SIZES} from 'src/theme';

const styles = StyleSheet.create({
  SaContainer: {
    flex: 1,
    backgroundColor: COLOR.white,
  },
  vMainContainer: {
    flex: 1,
    // backgroundColor: 'lightgreen',
    // marginHorizontal: SIZES.countPixelRatio(20),
  },
  iProfile: {
    height: SIZES.countPixelRatio(100),
    width: SIZES.countPixelRatio(100),
    borderRadius: SIZES.countPixelRatio(50),
    resizeMode: 'cover',
  },
  vTopRowContainer: {
    flexDirection: 'row',
    marginHorizontal: SIZES.countPixelRatio(20),
  },
  vPlus: {
    backgroundColor: COLOR.blue,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: SIZES.countPixelRatio(50),
    position: 'absolute',
    bottom: 0,
    right: 0,
    borderWidth: SIZES.countPixelRatio(3),
    borderColor: COLOR.white,
  },
  iPlus: {
    height: SIZES.countPixelRatio(30),
    width: SIZES.countPixelRatio(30),
    resizeMode: 'contain',
  },
  vFollwers: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  toProfile: {
    marginRight: SIZES.smartWidthScale(50),
  },
  tPostsNumber: {
    fontSize: SIZES.countPixelRatio(26),
    fontFamily: FONTS.ROBOTO_BOLD,
    color: COLOR.black,
    textAlign: 'center',
  },

  tPosts: {
    fontSize: SIZES.countPixelRatio(18),
    fontFamily: FONTS.ROBOTO_REGULAR,
    color: COLOR.black,
    textAlign: 'center',
  },
  tName: {
    fontSize: SIZES.countPixelRatio(20),
    fontFamily: FONTS.SANS_MEDIUM,
    color: COLOR.black,
  },
  tUserBio: {
    fontSize: SIZES.countPixelRatio(18),
    fontFamily: FONTS.SANS_REGULAR,
    color: COLOR.black,
  },
  vUserBio: {
    paddingVertical: SIZES.countPixelRatio(15),
    marginHorizontal: SIZES.countPixelRatio(20),
  },
  vButtonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: SIZES.countPixelRatio(20),
  },
  toEditProfile: {
    backgroundColor: COLOR.borderColor,
    alignItems: 'center',
    justifyContent: 'center',
    padding: SIZES.smartScale(7),
    borderRadius: SIZES.countPixelRatio(10),
  },
  tEdit: {
    fontSize: SIZES.countPixelRatio(19),
    fontFamily: FONTS.ROBOTO_MEDIUM,
    color: COLOR.black,
  },
  iUser: {
    height: SIZES.countPixelRatio(24),
    width: SIZES.countPixelRatio(24),
    resizeMode: 'contain',
  },
  vFlatlist: {
    marginVertical: SIZES.smartScale(25),
  },
  vTab: {
    flexDirection: 'row',
    // backgroundColor: 'red',
    paddingTop: SIZES.countPixelRatio(25),
    // marginBottom: SIZES.countPixelRatio(25),
  },
  iGridPost: {
    height: SIZES.smartScale(30),
    width: SIZES.smartWidthScale(30),
    resizeMode: 'contain',
    marginBottom: SIZES.countPixelRatio(10),
  },
  toPost: {
    flex: 1,
    alignItems: 'center',
  },
  vLine: {
    backgroundColor: COLOR.black,
    height: SIZES.smartScale(3),
    // marginTop: SIZES.countPixelRatio(20),
  },
});
export default styles;
