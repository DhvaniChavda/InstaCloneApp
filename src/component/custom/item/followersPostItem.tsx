import React, {useRef, useState} from 'react';
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {APP_IMAGES} from 'src/assets/images';
import {PostImagesItem} from 'src/component/custom/item';
import {COLOR, FONTS, SIZES} from 'src/theme';
import {METHOD, STRING} from 'src/utils';

interface IFollowerPostProps {
  item: any;
  index: number;
  onLikeClick: (index: number) => void;
  onMoreClick: (index: number) => void;
  onProfileClick: () => void;
}
export default ({
  item,
  index,
  onLikeClick,
  onMoreClick,
  onProfileClick,
}: IFollowerPostProps) => {
  const [postLen, setPostLen] = useState<number>(item.gridImages.length);
  const [activeIndex, setActiveIndex] = useState<number>(0);

  const flatListRef = useRef(null);

  const onViewableItemsChanged = ({viewableItems}: any) => {
    if (viewableItems.length > 0) {
      setActiveIndex(viewableItems[0].index || 0);
    }
  };
  const renderProfileContainer = () => {
    return (
      <View style={styles.vTopRowContainer}>
        <TouchableOpacity
          activeOpacity={0.6}
          style={{flexDirection: 'row', flex: 1}}
          onPress={onProfileClick}>
          <Image source={{uri: item.profile_image}} style={styles.iProfile} />
          <View>
            <Text style={styles.tUserId}>{item.user_id}</Text>
            {item.location && (
              <Text style={styles.tLocation}>{item.location}</Text>
            )}
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          activeOpacity={0.6}
          onPress={() => onMoreClick(index)}>
          <Image source={APP_IMAGES.ic_more_vertical} style={styles.iMore} />
        </TouchableOpacity>
      </View>
    );
  };
  const renderPostListContainer = () => {
    return (
      <FlatList
        ref={flatListRef}
        data={item.gridImages}
        renderItem={renderPostItem}
        horizontal={true}
        pagingEnabled={true}
        bounces={false}
        showsHorizontalScrollIndicator={false}
        onViewableItemsChanged={onViewableItemsChanged}
      />
    );
  };
  const renderPostItem = ({item, index}: {item: any; index: number}) => {
    return <PostImagesItem item={item} index={index} postLen={postLen} />;
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
        {!item.iscomment_on && (
          <View
            style={[styles.iLike, {marginRight: SIZES.smartWidthScale(20)}]}
          />
        )}
        <View style={styles.vDotContainer}>
          {Array.from(Array(postLen).keys()).map(
            (key, index) =>
              postLen > 1 && (
                <View
                  key={index}
                  style={
                    index === activeIndex ? styles.vActiveDot : styles.vDot
                  }
                />
              ),
          )}
        </View>

        <TouchableOpacity activeOpacity={0.6}>
          <Image source={APP_IMAGES.ic_save} style={styles.iLike} />
        </TouchableOpacity>
      </View>
    );
  };
  const renderDescContainer = () => {
    return (
      <View style={styles.vDescContainer}>
        <Text style={styles.tLikeByOther}>
          {STRING.profile.likes(item.total_likes)}
        </Text>

        <Text
          style={[styles.tLikeByOther, {marginVertical: SIZES.smartScale(5)}]}>
          {item.user_id}
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
      {renderPostListContainer()}
      {renderLikedContainer()}
      {renderDescContainer()}
    </View>
  );
};

const styles = StyleSheet.create({
  vMainContainer: {
    flex: 1,
    marginBottom: SIZES.smartScale(30),
  },
  vTopRowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
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
    color: COLOR.black,
  },
  tLocation: {
    fontSize: SIZES.countPixelRatio(16),
    fontFamily: FONTS.ROBOTO_REGULAR,
    color: COLOR.black,
  },
  iPost: {
    resizeMode: 'cover',
    height: SIZES.smartScale(500),
    width: SIZES.WIDTH,
  },
  vLikeRowContainer: {
    flexDirection: 'row',
    marginHorizontal: SIZES.countPixelRatio(20),
    paddingVertical: SIZES.countPixelRatio(15),
  },
  iLike: {
    height: SIZES.countPixelRatio(26),
    width: SIZES.countPixelRatio(26),
    resizeMode: 'contain',
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
  vDotContainer: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'row',
    paddingLeft: SIZES.smartWidthScale(40),
  },
  vDot: {
    height: SIZES.smartScale(5),
    width: SIZES.smartWidthScale(5),
    borderRadius: SIZES.countPixelRatio(5),
    backgroundColor: COLOR.lightGray,
    marginRight: SIZES.smartWidthScale(3),
  },
  vActiveDot: {
    height: SIZES.smartScale(7),
    width: SIZES.smartWidthScale(7),
    borderRadius: SIZES.countPixelRatio(7),
    backgroundColor: COLOR.blue,
    marginRight: SIZES.smartWidthScale(3),
  },
});
