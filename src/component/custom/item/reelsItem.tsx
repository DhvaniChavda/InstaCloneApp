import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import FastImage from 'react-native-fast-image';
import Video from 'react-native-video';
import {APP_IMAGES} from 'src/assets/images';
import MediaControls from 'src/component/library/react-native-media-control/src';
import {COLOR, FONTS, SIZES} from 'src/theme';
import {STRING} from 'src/utils';

interface IReelsProps {
  item: any;
  index: number;
  onLikeClick: (arg: number) => void;
  currentVideoIndex: number;
}
export default ({item, index, currentVideoIndex, onLikeClick}: IReelsProps) => {
  return (
    <View>
      <View style={styles.reelContainer}>
        <Video
          source={{uri: item.video_url}}
          style={styles.video}
          resizeMode="contain"
          repeat={true}
          paused={currentVideoIndex !== item.id - 1}
        />

        <View style={styles.overlay}>
          <TouchableOpacity
            style={styles.iconContainer}
            onPress={() => {
              onLikeClick(index);
            }}>
            <Image
              source={
                item.isSelected ? APP_IMAGES.ic_like_feel : APP_IMAGES.ic_like
              }
              style={[
                styles.icon,
                {
                  tintColor: item.isSelected ? COLOR.red : COLOR.white,
                },
              ]}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconContainer}>
            <Image source={APP_IMAGES.ic_comment} style={styles.icon} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconContainer}>
            <Image source={APP_IMAGES.ic_share_posts} style={styles.icon} />
          </TouchableOpacity>
        </View>

        <View style={styles.userInfo}>
          <FastImage
            source={{uri: item.userData.profile_image}}
            style={styles.profileImage}
          />
          <Text style={styles.tUserID}>{item.userData.user_id}</Text>
        </View>
        <View style={styles.likesContainer}>
          <Text style={styles.tUserID}>{item.likes} likes</Text>
        </View>
      </View>
      <View style={styles.vSeprator} />
    </View>
  );
};

const styles = StyleSheet.create({
  reelContainer: {
    marginBottom: SIZES.countPixelRatio(20),
  },
  video: {
    width: '100%',
    height: SIZES.HEIGHT - 170,
  },
  iconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: SIZES.countPixelRatio(10),
    paddingVertical: SIZES.countPixelRatio(5),
    borderRadius: SIZES.countPixelRatio(20),
    marginVertical: SIZES.countPixelRatio(5),
  },
  iconText: {
    color: COLOR.black,
    fontSize: SIZES.countPixelRatio(20),
  },
  icon: {
    width: SIZES.countPixelRatio(24),
    height: SIZES.countPixelRatio(24),
    tintColor: COLOR.white,
    marginRight: SIZES.countPixelRatio(5),
  },
  userInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: SIZES.countPixelRatio(10),
    marginLeft: SIZES.countPixelRatio(10),
  },
  profileImage: {
    width: SIZES.countPixelRatio(30),
    height: SIZES.countPixelRatio(30),
    borderRadius: SIZES.countPixelRatio(15),
    marginRight: SIZES.countPixelRatio(10),
  },
  likesContainer: {
    marginTop: SIZES.countPixelRatio(5),
    marginLeft: SIZES.countPixelRatio(10),
  },
  tUserID: {
    fontSize: SIZES.countPixelRatio(20),
    fontFamily: FONTS.ROBOTO_REGULAR,
    color: COLOR.white,
  },
  vSeprator: {
    height: 2,
    backgroundColor: COLOR.white,
  },
  overlay: {
    position: 'absolute',
    right: 0,
    bottom: 0,
  },
});
