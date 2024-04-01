import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {APP_IMAGES} from 'src/assets/images';
import {COLOR, FONTS, SIZES} from 'src/theme';
import {STRING} from 'src/utils';

interface IStoriesProps {
  item: any;
  index: number;
}
export default ({item, index}: IStoriesProps) => {
  return (
    <View style={styles.vMainContainer}>
      {item.is_login_id ? (
        <>
          <View>
            <Image source={{uri: item.profile_image}} style={styles.iProfile} />
            <View style={styles.vPlus}>
              <Image source={APP_IMAGES.ic_plus} style={styles.iPlus} />
            </View>
          </View>
          <Text style={styles.tYourstory}>{STRING.home.your_story}</Text>
        </>
      ) : (
        <>
          <View
            style={[
              styles.vBorder,
              {
                borderColor: item.isStoryViewed
                  ? COLOR.lightGray
                  : COLOR.pinkishOrange,
              },
            ]}>
            <Image
              source={{uri: item.profile_image}}
              style={[
                styles.iProfile,
                {
                  borderWidth: SIZES.countPixelRatio(3),
                  borderColor: COLOR.white,
                },
              ]}
            />
          </View>
          <Text style={styles.tYourstory}>{item.user_id}</Text>
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  vMainContainer: {
    paddingVertical: SIZES.countPixelRatio(10),
    paddingHorizontal: SIZES.countPixelRatio(10),
    alignItems: 'center',
  },
  vBorder: {
    borderRadius: SIZES.countPixelRatio(50),
    overflow: 'hidden',
    borderWidth: SIZES.countPixelRatio(4),
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
  vPlus: {
    backgroundColor: COLOR.blue,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: SIZES.countPixelRatio(50),
    position: 'absolute',
    bottom: 0,
    right: 0,
    borderWidth: SIZES.countPixelRatio(3),
    borderColor: COLOR.white,
  },
  iPlus: {
    height: SIZES.countPixelRatio(30),
    width: SIZES.countPixelRatio(30),
    resizeMode: 'contain',
  },
});
