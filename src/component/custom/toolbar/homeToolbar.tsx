import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {APP_IMAGES} from 'src/assets/images';
import {COLOR, FONTS, SIZES} from 'src/theme';
import {STRING} from 'src/utils';

export default ({}: any) => {
  return (
    <>
      <View style={styles.vRowContainer}>
        {/* <Text style={styles.tInsta}>{STRING.intro.instagram}</Text> */}
        <View style={styles.vImgContainer}>
          <Image source={APP_IMAGES.ic_home_logo} style={styles.iLogo} />
        </View>

        <TouchableOpacity activeOpacity={0.6}>
          <Image source={APP_IMAGES.ic_like} style={styles.iLike} />
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.6}>
          <Image source={APP_IMAGES.ic_chat} style={styles.iLike} />
        </TouchableOpacity>
      </View>
    </>
  );
};
const styles = StyleSheet.create({
  vMainContainer: {
    backgroundColor: 'pink',
  },
  vImgContainer: {
    flex: 1,
  },
  vRowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: SIZES.smartScale(5),
    paddingHorizontal: SIZES.smartWidthScale(20),
    borderBottomWidth: SIZES.countPixelRatio(1),
    borderBottomColor: COLOR.borderColor,
  },
  iLogo: {
    height: SIZES.countPixelRatio(60),
    width: SIZES.countPixelRatio(150),
    resizeMode: 'contain',
  },

  iLike: {
    height: SIZES.countPixelRatio(30),
    width: SIZES.countPixelRatio(30),
    resizeMode: 'contain',
    marginLeft: SIZES.countPixelRatio(20),
  },
  tInsta: {
    fontSize: SIZES.countPixelRatio(40),
    color: COLOR.black,
    flex: 1,
    fontFamily: FONTS.BILLABONG,
  },
});
