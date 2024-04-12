import React, {useState} from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {APP_IMAGES} from 'src/assets/images';
import {COLOR, FONTS, SIZES} from 'src/theme';
import {DUMMYSTRING} from 'src/utils';
interface iReelsToolBar {
  isFromReels: boolean;
}
export default ({isFromReels}: iReelsToolBar) => {
  return (
    <View style={styles.vMain}>
      {isFromReels ? (
        <>
          <Text style={styles.tReel}>Reels</Text>
          <Image source={APP_IMAGES.ic_smile} style={styles.iCamera} />
        </>
      ) : (
        <TouchableOpacity>
          <Image source={APP_IMAGES.ic_back} style={styles.iCamera} />
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  vMain: {
    flexDirection: 'row',
    padding: SIZES.countPixelRatio(20),
    alignItems: 'center',
    backgroundColor:COLOR.black,
    justifyContent: 'space-between',
  },
  iCamera: {
    height: SIZES.countPixelRatio(25),
    width: SIZES.countPixelRatio(25),
    resizeMode: 'contain',
    tintColor:COLOR.white
  },
  tReel: {
    fontSize: SIZES.countPixelRatio(22),
    color: COLOR.black,
    fontFamily: FONTS.ROBOTO_BOLD,
  },
});
