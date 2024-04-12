import React from 'react';
import {Image, ImageBackground, StyleSheet, Text, View} from 'react-native';
import {COLOR, FONTS, SIZES} from 'src/theme';

interface IMoreTabProps {
  item: any;
  index: number;
  postLen: number;
}
export default ({item, index, postLen}: IMoreTabProps) => {
  return (
    <ImageBackground source={{uri: item}} style={styles.iPost}>
      {postLen > 1 && (
        <Text style={styles.tNumber}>
          {index + 1}/{postLen}
        </Text>
      )}
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  iPost: {
    resizeMode: 'cover',
    height: SIZES.smartScale(500),
    width: SIZES.WIDTH,
  },
  tNumber: {
    fontSize: SIZES.countPixelRatio(20),
    color: COLOR.black,
    fontFamily: FONTS.ROBOTO_MEDIUM,
    backgroundColor: COLOR.borderColor,
    position: 'absolute',
    right: 20,
    top: 20,
    paddingHorizontal: SIZES.countPixelRatio(10),
    paddingVertical: SIZES.countPixelRatio(5),
    borderRadius: SIZES.countPixelRatio(10),
  },
});
