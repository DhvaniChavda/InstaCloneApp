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
  saContainer: {
    flex: 1,
    backgroundColor: COLOR.whiteFourteen,
  },
  vContainer: {
    flex: 1,
    margin: SIZES.smartWidthScale(20),
    backgroundColor: COLOR.whiteFourteen,
    // paddingBottom: SIZES.countPixelRatio(80),
    marginVertical: SIZES.countPixelRatio(40),
  },
  toButton: {
    backgroundColor: COLOR.black,
    paddingVertical: SIZES.countPixelRatio(20),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: SIZES.countPixelRatio(10),
  },
  tText: {
    color: COLOR.black,
    fontSize: SIZES.countPixelRatio(20),
    textAlign: 'center',
  },
  toDate: {
    backgroundColor: 'black',
    paddingVertical: 25,
    alignItems: 'center',
    borderRadius: 10,
    marginVertical: 30,
  },
  tDate: {
    color: 'white',
    fontSize: 20,
  },
  masonryHeader: {
    position: 'absolute',
    zIndex: 10,
    flexDirection: 'row',
    padding: 5,
    alignItems: 'center',
    backgroundColor: 'rgba(150,150,150,0.4)',
  },
  userPic: {
    height: 20,
    width: 20,
    borderRadius: 10,
    marginRight: 10,
  },
  userName: {
    fontSize: 15,
    color: '#fafafa',
    fontWeight: 'bold',
  },
  item: {
    backgroundColor: '#f9c2ff',
    borderRadius: 8,
    padding: 8,
    marginBottom: 8,
    // width: SIZES.WIDTH / 2 - 16,
  },
  todoItem: {
    backgroundColor: '#f9c2ff',
    borderRadius: 8,
    padding: 8,
    marginBottom: 8,
    width: SIZES.WIDTH / 2 - 16,
  },
  image: {
    // width: '100%',
    // aspectRatio: 16 / 9,
  },
});
export default styles;
