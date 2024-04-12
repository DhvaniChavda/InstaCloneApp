import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {APP_IMAGES} from 'src/assets/images';
import {COLOR, FONTS, SIZES} from 'src/theme';
import {STRING} from 'src/utils';

interface IStoriesProps {
  item: any;
  index: number;
}
export default ({item, index}: IStoriesProps) => {
  return (
    <TouchableOpacity style={styles.vMainContainer} activeOpacity={0.8}>
      <Image source={item.image} style={styles.iMainImg} />
      <Text style={styles.tTitle}>{item.title}</Text>
      <Image source={APP_IMAGES.ic_next_arrow} style={styles.iNext} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  vMainContainer: {
    flexDirection: 'row',
    paddingVertical: SIZES.countPixelRatio(20),
    marginBottom: SIZES.countPixelRatio(15),
    alignItems: 'center',
  },
  iNext: {
    height: SIZES.countPixelRatio(28),
    width: SIZES.countPixelRatio(28),
    resizeMode: 'contain',
  },
  iMainImg: {
    height: SIZES.countPixelRatio(30),
    width: SIZES.countPixelRatio(30),
    resizeMode: 'contain',
  },
  tTitle: {
    fontSize: SIZES.countPixelRatio(20),
    color: COLOR.darkGray,
    fontFamily: FONTS.SANS_REGULAR,
    flex: 1,
    marginHorizontal: SIZES.countPixelRatio(15),
  },
});
