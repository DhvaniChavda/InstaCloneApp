import React from 'react';
import {
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {APP_IMAGES} from 'src/assets/images';
import {COLOR, FONTS, SIZES} from 'src/theme';

interface IVideoProps {
  item: any;
  index: number;
  onVideoClick: () => void;
}
export default ({item, index, onVideoClick}: IVideoProps) => {
  console.log('IVideoProps itemssssss>>>>>>', item);

  return (
    <TouchableOpacity activeOpacity={0.6} onPress={onVideoClick}>
      <ImageBackground source={{uri: item.thumbnail}} style={styles.iGridImg}>
        <View style={styles.vRowContainer}>
          <Image source={APP_IMAGES.ic_video} style={styles.icarasoul} />
          <Text style={styles.tLikeNum}>{item.likes}</Text>
        </View>
      </ImageBackground>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  iGridImg: {
    height: SIZES.smartScale(250),
    width: SIZES.smartWidthScale(125),
    resizeMode: 'contain',
  },
  icarasoul: {
    height: SIZES.countPixelRatio(25),
    width: SIZES.countPixelRatio(25),
    resizeMode: 'contain',
    tintColor: COLOR.white,
  },
  vRowContainer: {
    flexDirection: 'row',
    position: 'absolute',
    bottom: 0,
    margin: SIZES.countPixelRatio(15),
    alignItems: 'center',
  },
  tLikeNum: {
    fontSize: SIZES.countPixelRatio(20),
    color: COLOR.white,
    fontFamily: FONTS.ROBOTO_REGULAR,
    marginLeft: SIZES.countPixelRatio(10),
  },
});
