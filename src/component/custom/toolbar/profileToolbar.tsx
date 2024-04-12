import React, {useState} from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {APP_IMAGES} from 'src/assets/images';
import {COLOR, FONTS, SIZES} from 'src/theme';
import {DUMMYSTRING} from 'src/utils';
interface iProfileToolBar {
  user_id: any;
  onSettingPress: () => void;
}
export default ({user_id, onSettingPress}: iProfileToolBar) => {
  return (
    <View style={styles.vMain}>
      <TouchableOpacity style={styles.toRowCotanier} activeOpacity={0.6}>
        <Image source={APP_IMAGES.ic_smile} style={styles.iSmile} />
        <Text style={styles.tUserId}>{user_id}</Text>
        <Image source={APP_IMAGES.ic_downArrow} style={[styles.iSmile]} />
      </TouchableOpacity>

      <View style={styles.vMoreContainer}>
        <TouchableOpacity activeOpacity={0.6}>
          <Image source={APP_IMAGES.ic_post} style={styles.iPost} />
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.6} onPress={onSettingPress}>
          <Image
            source={APP_IMAGES.ic_more}
            style={[styles.iPost, {marginLeft: SIZES.countPixelRatio(15)}]}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  vMain: {
    flexDirection: 'row',
    padding: SIZES.countPixelRatio(20),
    alignItems: 'center',
  },
  toRowCotanier: {flexDirection: 'row', alignItems: 'center'},
  vMoreContainer: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'flex-end',
  },
  iSmile: {
    height: SIZES.countPixelRatio(22),
    width: SIZES.countPixelRatio(22),
    resizeMode: 'contain',
  },
  iPost: {
    height: SIZES.countPixelRatio(40),
    width: SIZES.countPixelRatio(40),
    resizeMode: 'contain',
  },
  tUserId: {
    fontSize: SIZES.countPixelRatio(22),
    color: COLOR.black,
    fontFamily: FONTS.ROBOTO_MEDIUM,
    marginHorizontal: SIZES.countPixelRatio(10),
  },
});
