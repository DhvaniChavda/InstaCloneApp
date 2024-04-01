import React, {useState} from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {APP_IMAGES} from 'src/assets/images';
import {COLOR, FONTS, SIZES} from 'src/theme';
import {DUMMYSTRING, STRING} from 'src/utils';
interface iPostToolBar {
  title: string;
  isPostClickFromGrid: boolean;
  onBackPress: () => void;
}
export default ({title, isPostClickFromGrid, onBackPress}: iPostToolBar) => {
  return (
    <View style={styles.vMain}>
      <TouchableOpacity
        style={styles.toImg}
        activeOpacity={0.6}
        onPress={onBackPress}>
        <Image source={APP_IMAGES.ic_back} style={styles.iBack} />
      </TouchableOpacity>
      <Text style={styles.tTitle}>{title}</Text>
      {!isPostClickFromGrid && (
        <Text style={styles.tManage}>{STRING.profile.manage}</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  vMain: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  toImg: {
    height: SIZES.smartScale(60),
    width: SIZES.smartWidthScale(60),
    alignItems: 'center',
    justifyContent: 'center',
  },
  iBack: {
    height: SIZES.countPixelRatio(24),
    width: SIZES.countPixelRatio(24),
    resizeMode: 'contain',
    tintColor: COLOR.black,
  },
  tTitle: {
    fontSize: SIZES.countPixelRatio(30),
    color: COLOR.black,
    fontFamily: FONTS.ROBOTO_BOLD,
    flex: 1,
  },
  tManage: {
    fontSize: SIZES.countPixelRatio(26),
    color: COLOR.blue,
    fontFamily: FONTS.SANS_REGULAR,
    marginRight: SIZES.countPixelRatio(20),
  },
});
