import React from 'react';
import {
  Image,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {APP_IMAGES} from 'src/assets/images';
import {COLOR, FONTS, SIZES} from 'src/theme';

interface IStoriesProps {
  item: any;
  index: number;
  onPostClick?: () => void;
}
export default ({item, index, onPostClick}: IStoriesProps) => {
  console.log('grid itemssssss>>>>>>', item.gridImages.length);

  return (
    <TouchableOpacity activeOpacity={0.6} onPress={onPostClick}>
      <ImageBackground
        source={{uri: item.gridImages[0]}}
        style={styles.iGridImg}>
        {item.gridImages.length > 1 ? (
          <Image source={APP_IMAGES.ic_carasoul} style={styles.icarasoul} />
        ) : null}
      </ImageBackground>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  iGridImg: {
    height: SIZES.smartScale(125),
    width: SIZES.smartWidthScale(125),
    resizeMode: 'cover',
  },
  icarasoul: {
    height: SIZES.countPixelRatio(30),
    width: SIZES.countPixelRatio(30),
    resizeMode: 'contain',
    position: 'absolute',
    right: 0,
    margin: SIZES.countPixelRatio(10),
    tintColor: COLOR.white,
  },
});
