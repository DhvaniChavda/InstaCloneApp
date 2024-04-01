import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {COLOR, FONTS, SIZES} from 'src/theme';

interface IMoreTabProps {
  item: any;
  index: number;
}
export default ({item, index}: IMoreTabProps) => {
  return (
    <View style={styles.vMainContainer}>
      <Image source={item.image} style={styles.iSmile} />
      <Text style={styles.tTitle}>{item.title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  vMainContainer: {
    marginHorizontal: SIZES.countPixelRatio(20),
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: SIZES.countPixelRatio(10),
  },
  iSmile: {
    height: SIZES.countPixelRatio(30),
    width: SIZES.countPixelRatio(30),
    resizeMode: 'contain',
    marginRight: SIZES.smartWidthScale(20),
  },
  tTitle: {
    fontSize: SIZES.countPixelRatio(18),
    color: COLOR.black,
    fontFamily: FONTS.SANS_REGULAR,
  },
});
