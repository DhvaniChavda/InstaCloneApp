import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {APP_IMAGES} from 'src/assets/images';
import {COLOR, FONTS, SIZES} from 'src/theme';
import {STRING} from 'src/utils';

interface IStoryHighlightProps {
  item: any;
  index: number;
  len: any;
}
export default ({item, index, len}: IStoryHighlightProps) => {
  console.log('item lenghthhh>>>', len, index);

  return (
    <View style={styles.vMainContainer}>
      <View style={styles.vCoverContainer}>
        <Image source={{uri: item.cover_photo}} style={styles.iCoverPhoto} />
      </View>
      <Text style={styles.tName}>{item.name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  vMainContainer: {
    // backgroundColor: 'red',
    alignItems: 'center',
  },
  vCoverContainer: {
    borderRadius: SIZES.countPixelRatio(50),
    overflow: 'hidden',
    borderWidth: SIZES.countPixelRatio(4),
    borderColor: COLOR.lightGray,
    marginBottom: SIZES.smartScale(7),
  },
  iCoverPhoto: {
    height: SIZES.countPixelRatio(100),
    width: SIZES.countPixelRatio(100),
    resizeMode: 'cover',
    borderRadius: SIZES.countPixelRatio(50),
    borderWidth: SIZES.countPixelRatio(3),
    borderColor: COLOR.white,
  },
  tName: {
    fontSize: SIZES.countPixelRatio(18),
    color: COLOR.black,
    fontFamily: FONTS.ROBOTO_REGULAR,
  },
});
