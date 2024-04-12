import {StyleSheet} from 'react-native';
import {SIZES} from 'src/theme';

const containerBackgroundColor = 'rgba(45, 59, 62, 0.4)';
const playButtonBorderColor = 'rgba(255,255,255,0.5)';
const white = '#fff';

export default StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: 'tansparent',
    bottom: 0,
    // flex: 1,
    justifyContent: 'center',
    left: 0,
    // paddingHorizontal: 20,
    // paddingVertical: 13,
    position: 'absolute',
    right: 0,
    top: 0,
  },
  controlsRow: {
    alignItems: 'center',
    alignSelf: 'stretch',
    flex: 1,
    justifyContent: 'center',
  },
  fullScreenContainer: {
    alignItems: 'center',
    alignSelf: 'stretch',
    justifyContent: 'center',
    paddingLeft: 20,
  },
  playButton: {
    // alignItems: 'center',
    // height: 150,
    // justifyContent: 'center',
    // width: 150,
    // backgroundColor: 'red',
    // flex: 1,
    alignItems: 'center',
    backgroundColor: 'tansparent',
    bottom: 0,
    // flex: 1,
    justifyContent: 'center',
    left: 0,
    paddingHorizontal: 20,
    paddingVertical: 13,
    position: 'absolute',
    right: 0,
    top: 0,
  },
  playIcon: {
    height: 30,
    resizeMode: 'contain',
    width: 30,
  },
  progressColumnContainer: {
    flex: 1,
    // backgroundColor: 'grey',
    position: 'absolute',
    bottom: 0,
    right: 0,
    left: 0,
  },
  progressContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginBottom: -25,
  },
  progressSlider: {
    alignSelf: 'stretch',
  },
  replayIcon: {
    height: 20,
    resizeMode: 'stretch',
    width: 25,
  },
  thumb: {
    backgroundColor: white,
    borderRadius: 50,
    borderWidth: 0,
    height: 0,
    width: 0,
  },
  timeRow: {
    alignSelf: 'stretch',
  },
  timerLabel: {
    color: white,
    fontSize: 12,
  },
  timerLabelsContainer: {
    alignSelf: 'stretch',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: -7,
  },
  toolbar: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'flex-end',
  },
  toolbarRow: {
    alignItems: 'flex-start',
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  track: {
    borderRadius: 1,
    height: 5,
    backgroundColor: white,
  },
  iLike: {
    height: SIZES.countPixelRatio(25),
    width: SIZES.countPixelRatio(25),
    resizeMode: 'contain',
  },
  vLike: {
    position: 'absolute',
    bottom: 60,
    right: 0,
  },
  toLike: {
    height: SIZES.smartScale(50),
    width: SIZES.smartWidthScale(50),
    // backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
