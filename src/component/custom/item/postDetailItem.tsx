import React from 'react';
import {
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {APP_IMAGES} from 'src/assets/images';
import {COLOR, FONTS, SIZES} from 'src/theme';
import {METHOD, STRING} from 'src/utils';

interface IPostDetailProps {
  item: any;
  index: number;
  isPostClickFromGrid: boolean;
  onLikeClick: (index: number) => void;
  onMoreClick: (index: number) => void;
  onProfileClick: () => void;
}
export default ({
  item,
  index,
  isPostClickFromGrid,
  onLikeClick,
  onMoreClick,
  onProfileClick,
}: IPostDetailProps) => {
  console.log('IPostDetailPropsIPostDetailProps>>>>>', item);
  const renderProfileContainer = () => {
    return (
      <View style={styles.vTopRowContainer}>
        <TouchableOpacity
          activeOpacity={0.6}
          style={{flexDirection: 'row', flex: 1}}
          onPress={onProfileClick}>
          <Image
            source={{uri: item.userData.profile_image}}
            style={styles.iProfile}
          />
          <View>
            <Text style={styles.tUserId}>{item.userData.user_id}</Text>
            {item.location && (
              <Text style={styles.tLocation}>{item.location}</Text>
            )}
          </View>
        </TouchableOpacity>
        {!isPostClickFromGrid && (
          <TouchableOpacity activeOpacity={0.6} style={styles.toFollow}>
            <Text style={styles.tFollow}>{STRING.profile.follow}</Text>
          </TouchableOpacity>
        )}
        <TouchableOpacity
          activeOpacity={0.6}
          onPress={() => onMoreClick(index)}>
          <Image source={APP_IMAGES.ic_more_vertical} style={styles.iMore} />
        </TouchableOpacity>
      </View>
    );
  };

  const renderLikedContainer = () => {
    return (
      <View style={styles.vLikeRowContainer}>
        <TouchableOpacity
          activeOpacity={0.6}
          onPress={() => onLikeClick(index)}>
          <Image
            source={
              item.isSelected ? APP_IMAGES.ic_like_feel : APP_IMAGES.ic_like
            }
            style={[
              styles.iLike,
              {
                tintColor: item.isSelected ? COLOR.red : COLOR.black,
                marginRight: SIZES.smartWidthScale(20),
              },
            ]}
          />
        </TouchableOpacity>
        {item.iscomment_on && (
          <TouchableOpacity activeOpacity={0.6}>
            <Image
              source={APP_IMAGES.ic_comment}
              style={[styles.iLike, {marginRight: SIZES.smartWidthScale(20)}]}
            />
          </TouchableOpacity>
        )}
        <TouchableOpacity activeOpacity={0.6}>
          <Image
            source={APP_IMAGES.ic_share_posts}
            style={[styles.iLike, {marginRight: SIZES.smartWidthScale(20)}]}
          />
        </TouchableOpacity>
        <View style={{flex: 1}} />
        <TouchableOpacity activeOpacity={0.6}>
          <Image source={APP_IMAGES.ic_save} style={styles.iLike} />
        </TouchableOpacity>
      </View>
    );
  };
  const renderDescContainer = () => {
    return (
      <View style={styles.vDescContainer}>
        {isPostClickFromGrid ? (
          <Text style={styles.tLikeBy}>
            {STRING.profile.liked_by}
            <Text style={styles.tLikeByOther}>{item.liked_by}</Text>
          </Text>
        ) : (
          <Text style={styles.tLikeByOther}>
            {STRING.profile.likes(item.total_likes)}
          </Text>
        )}
        <Text
          style={[styles.tLikeByOther, {marginVertical: SIZES.smartScale(5)}]}>
          {item.userData.user_id}
          <Text style={styles.tLikeBy}> {item.caption}</Text>
        </Text>
        {item.iscomment_on ? (
          <Text>
            {STRING.profile.view_all_comments(item.comments.total_comments)}
          </Text>
        ) : (
          <Text style={[styles.tLikeBy, {color: COLOR.tintGrayColor}]}>
            {STRING.profile.comment_are_off}{' '}
            <Text style={[styles.tLikeBy, {color: COLOR.navy_blue}]}>
              {STRING.profile.review_control}
            </Text>
          </Text>
        )}
        <Text
          style={[
            styles.tLikeBy,
            {color: COLOR.tintGrayColor, fontSize: SIZES.countPixelRatio(16)},
          ]}>
          {METHOD.convertDateMMMMDDYYYY(item.updated_at)}
        </Text>
      </View>
    );
  };
  return (
    <View style={styles.vMainContainer}>
      {renderProfileContainer()}

      <Image source={APP_IMAGES.ic_profile1} style={styles.iPost} />
      {renderLikedContainer()}
      {renderDescContainer()}
    </View>
  );
};

const styles = StyleSheet.create({
  vMainContainer: {
    flex: 1,
    // backgroundColor: 'lightblue',
    marginBottom: SIZES.smartScale(30),
  },
  vTopRowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    // justifyContent: 'center',
    marginHorizontal: SIZES.countPixelRatio(20),
    marginBottom: SIZES.countPixelRatio(15),
  },
  iProfile: {
    height: SIZES.countPixelRatio(40),
    width: SIZES.countPixelRatio(40),
    resizeMode: 'cover',
    borderRadius: SIZES.countPixelRatio(20),
    marginRight: SIZES.countPixelRatio(20),
  },
  iMore: {
    height: SIZES.countPixelRatio(34),
    width: SIZES.countPixelRatio(34),
    resizeMode: 'contain',
  },
  tUserId: {
    fontSize: SIZES.countPixelRatio(18),
    fontFamily: FONTS.ROBOTO_MEDIUM,
    // flex: 1,
    color: COLOR.black,
  },
  tLocation: {
    fontSize: SIZES.countPixelRatio(16),
    fontFamily: FONTS.ROBOTO_REGULAR,
    // flex: 1,
    color: COLOR.black,
  },
  iPost: {
    resizeMode: 'contain',
    // marginBottom: SIZES.countPixelRatio(10),
  },
  vLikeRowContainer: {
    flexDirection: 'row',
    // backgroundColor: 'lightgreen',
    marginHorizontal: SIZES.countPixelRatio(20),
    paddingVertical: SIZES.countPixelRatio(15),
  },
  iLike: {
    height: SIZES.countPixelRatio(26),
    width: SIZES.countPixelRatio(26),
    resizeMode: 'contain',

    // marginRight: SIZES.smartWidthScale(20),
  },
  vDescContainer: {
    marginHorizontal: SIZES.countPixelRatio(20),
  },
  tLikeBy: {
    fontSize: SIZES.countPixelRatio(20),
    fontFamily: FONTS.SANS_REGULAR,
    color: COLOR.black,
  },
  tLikeByOther: {
    fontSize: SIZES.countPixelRatio(20),
    fontFamily: FONTS.SANS_SEMIBOLD,
    color: COLOR.black,
  },
  toFollow: {
    backgroundColor: COLOR.lightGray,
    padding: SIZES.countPixelRatio(10),
    borderRadius: SIZES.countPixelRatio(10),
    marginRight: SIZES.smartWidthScale(15),
  },
  tFollow: {
    fontFamily: FONTS.SANS_MEDIUM,
    color: COLOR.black,
  },
});
