import {StyleSheet} from 'react-native';
import {COLOR, FONTS, SIZES} from 'src/theme';

const styles = StyleSheet.create({
  SaContainer: {
    flex: 1,
  },
  vMainContainer: {
    flex: 1,
    backgroundColor: COLOR.black,
  },
  backgroundVideo: {
    height: SIZES.HEIGHT,
    width: '100%',
    // backgroundColor: COLOR.black,
  },
  iLike: {
    height: SIZES.countPixelRatio(25),
    width: SIZES.countPixelRatio(25),
    resizeMode: 'contain',
  },
  reelContainer: {
    marginBottom: 20,
  },
  video: {
    width: '100%',
    height: SIZES.HEIGHT - 170,
  },
  userInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
    marginLeft: 10,
  },
  profileImage: {
    width: 30,
    height: 30,
    borderRadius: 15,
    marginRight: 10,
  },
  likesContainer: {
    marginTop: 5,
    marginLeft: 10,
  },
  overlay: {
    position: 'absolute',
    // top: 0,
    // left: 0,
    right: 0,
    bottom: 0,
    // justifyContent: 'center',
    // alignItems: 'center',
  },
  overlayButton: {
    padding: 8,
    borderRadius: 20,
  },
  iconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 20,
    marginVertical: 5,
  },
  iconText: {
    color: COLOR.black,
    fontSize: 20,
  },
  icon: {
    width: 24,
    height: 24,
    // tintColor: '#fff',
    marginRight: 5,
  },
  vSeprator: {
    height: 2,
    backgroundColor: COLOR.white,
  },
  tUserID: {
    fontSize: SIZES.countPixelRatio(20),
    fontFamily: FONTS.ROBOTO_REGULAR,
    color: COLOR.black,
  },
});
export default styles;
