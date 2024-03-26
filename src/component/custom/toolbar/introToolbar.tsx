import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {COLOR, FONTS, SIZES} from 'src/theme';
import {STRING} from 'src/utils';

export default ({}: any) => {
  return (
    <View style={styles.vMainContainer}>
      <Text style={styles.tTitle}>{STRING.intro.title}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  vMainContainer: {
    backgroundColor: COLOR.white,
    height: SIZES.smartScale(55),
    alignItems: 'center',
    justifyContent: 'center',
  },
  tTitle: {
    color: COLOR.pinkishOrange,
    fontSize: SIZES.countPixelRatio(32),
    fontFamily: FONTS.ROBOTO_MEDIUM,
  },
});
