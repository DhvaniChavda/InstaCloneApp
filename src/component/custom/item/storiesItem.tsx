import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {COLOR, FONTS, SIZES} from 'src/theme';

interface IStoriesProps {
  item: any;
  index: number;
}
export default ({item, index}: IStoriesProps) => {
  const borderColor = item.isViewed == true ? '#ccc' : 'transparent';
  return (
    <View style={styles.vMainContainer}>
      <LinearGradient
        colors={['#f9ce34', '#ee2a7b', '#6228d7']}
        style={[styles.gradient, {borderColor}]}>
        <View style={styles.vBorder}>
          <Image source={{uri: item.profile_image}} style={styles.iProfile} />
        </View>
      </LinearGradient>

      <Text style={styles.tYourstory}>{item.user_id}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  vMainContainer: {
    backgroundColor: 'pink',
    paddingVertical: SIZES.countPixelRatio(10),
    paddingHorizontal: SIZES.countPixelRatio(10),
    alignItems: 'center',
  },
  vBorder: {
    // padding: SIZES.countPixelRatio(5),
    borderWidth: 2,
    borderRadius: SIZES.countPixelRatio(50), // Adjust border radius accordingly
    borderColor: 'transparent',
  },
  iProfile: {
    height: SIZES.countPixelRatio(100),
    width: SIZES.countPixelRatio(100),
    resizeMode: 'cover',
    borderRadius: SIZES.countPixelRatio(50),
  },
  tYourstory: {
    fontSize: SIZES.countPixelRatio(18),
    color: COLOR.black,
    fontFamily: FONTS.ROBOTO_REGULAR,
  },
  gradient: {
    borderRadius: SIZES.countPixelRatio(50),
    borderWidth: 2,
  },
});
