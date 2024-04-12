import React, {useEffect, useState} from 'react';
import {
  FlatList,
  Image,
  ScrollView,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import SafeAreaView from 'react-native-safe-area-view';
import styles from './style';
import {COLOR, SIZES} from 'src/theme';
import {ProfileToolbar} from 'src/component/custom/toolbar';
import {CONSTANT, DUMMYSTRING, ENUM, METHOD, STRING} from 'src/utils';
import {APP_IMAGES} from 'src/assets/images';
import {StoryHighlightItem} from 'src/component/custom/item';
import GridPost from 'src/screens/tabs/profile/gridPost';
import Video from 'src/screens/tabs/profile/video';
import TaggedPost from 'src/screens/tabs/profile/taggedPost';
import {goBack, navigate} from 'src/navigation/RootNavigation';
import {Routes} from 'src/navigation/route';

const ProfileScreen = () => {
  const [profileData, setProfileData] = useState(DUMMYSTRING.profileData);
  const [activeTab, setActiveTab] = useState<number>(ENUM.profile.gridPost);
  const [gridPostList, setGridPostList] = useState<any>(
    profileData.postGridData,
  );
  const [taggedPostList, setTaggedPostList] = useState<any>(
    profileData.taggedData,
  );
  const [videoList, setVideoList] = useState<any>(profileData.videoReels);
  useEffect(() => {
    METHOD.savePref(CONSTANT.PREF_USER_PROFILE_DATA, profileData);
  }, []);
  const onPostGridClick = () => {
    setActiveTab(ENUM.profile.gridPost);
  };
  const onVideoClick = () => {
    setActiveTab(ENUM.profile.video);
  };

  const onTaggedPostClick = () => {
    setActiveTab(ENUM.profile.taggedPost);
  };
  const onPostClick = () => {
    console.log('onPostClick call>>>>>>>');

    navigate(Routes.PostDetails, {
      data: gridPostList,
      isPostClickFromGrid: true,
    });
  };
  const onTagClick = () => {
    console.log('onPostClick call>>>>>>>');

    navigate(Routes.PostDetails, {
      data: taggedPostList,
      isPostClickFromGrid: false,
    });
  };
  const onSettingPress = () => {
    navigate(Routes.Setting);
  };
  const renderFollwerContainer = () => {
    return (
      <View style={styles.vTopRowContainer}>
        <TouchableOpacity activeOpacity={0.8} style={styles.toProfile}>
          <Image
            source={{uri: profileData.profile_image}}
            style={styles.iProfile}
          />
          <View style={styles.vPlus}>
            <Image source={APP_IMAGES.ic_plus} style={styles.iPlus} />
          </View>
        </TouchableOpacity>

        <View style={styles.vFollwers}>
          <Text style={styles.tPostsNumber}>
            {profileData.total_post}
            {'\n'}
            <Text style={styles.tPosts}>{STRING.profile.posts}</Text>
          </Text>
          <Text style={styles.tPostsNumber}>
            {profileData.total_followers}
            {'\n'}
            <Text style={styles.tPosts}>{STRING.profile.follwers}</Text>
          </Text>
          <Text style={styles.tPostsNumber}>
            {profileData.total_following}
            {'\n'}
            <Text style={styles.tPosts}>{STRING.profile.following}</Text>
          </Text>
        </View>
      </View>
    );
  };
  const renderBioContainer = () => {
    return (
      <View style={styles.vUserBio}>
        <Text style={styles.tName}>{profileData.name}</Text>
        <Text style={styles.tUserBio}>{profileData.user_bio}</Text>
      </View>
    );
  };
  const renderButtonContainer = () => {
    return (
      <View style={styles.vButtonContainer}>
        <TouchableOpacity
          activeOpacity={0.8}
          style={[
            styles.toEditProfile,
            {flex: 1, marginRight: SIZES.countPixelRatio(15)},
          ]}>
          <Text style={styles.tEdit}>{STRING.profile.edit_profile}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.8}
          style={[
            styles.toEditProfile,
            {flex: 1, marginRight: SIZES.countPixelRatio(15)},
          ]}>
          <Text style={styles.tEdit}>{STRING.profile.share_profile}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.toEditProfile} activeOpacity={0.8}>
          <Image source={APP_IMAGES.ic_black_profile} style={styles.iUser} />
        </TouchableOpacity>
      </View>
    );
  };
  const renderHighlightItem = ({item, index}: {item: any; index: number}) => {
    return <StoryHighlightItem item={item} index={index} len={index + 1} />;
  };
  const renderHighlightContainer = () => {
    return (
      <FlatList
        data={profileData.highlights}
        renderItem={renderHighlightItem}
        keyExtractor={(item, index) => index.toString()}
        horizontal
        showsHorizontalScrollIndicator={false}
        bounces={false}
        contentContainerStyle={{
          paddingVertical: SIZES.countPixelRatio(20),
          paddingHorizontal: SIZES.countPixelRatio(20),
          columnGap: SIZES.countPixelRatio(20),
        }}
      />
    );
  };
  const renderPostHeader = () => {
    return (
      <TouchableOpacity
        style={{flex: 1}}
        activeOpacity={0.8}
        onPress={onPostGridClick}>
        <View style={styles.toPost}>
          <Image
            source={APP_IMAGES.ic_grid_post}
            style={[
              styles.iGridPost,
              {
                height: SIZES.smartScale(40),
                width: SIZES.smartWidthScale(40),
                resizeMode: 'contain',
                tintColor:
                  activeTab == ENUM.profile.gridPost
                    ? COLOR.black
                    : COLOR.tintGrayColor,
              },
            ]}
          />
        </View>
        <View
          style={activeTab == ENUM.profile.gridPost ? styles.vLine : null}
        />
      </TouchableOpacity>
    );
  };
  const renderVideoHeader = () => {
    return (
      <TouchableOpacity
        style={{
          flex: 1,
        }}
        activeOpacity={0.8}
        onPress={onVideoClick}>
        <View style={styles.toPost}>
          <Image
            source={APP_IMAGES.ic_reels}
            style={[
              styles.iGridPost,
              {
                tintColor:
                  activeTab == ENUM.profile.video
                    ? COLOR.black
                    : COLOR.tintGrayColor,
              },
            ]}
          />
        </View>
        <View style={activeTab == ENUM.profile.video ? styles.vLine : null} />
      </TouchableOpacity>
    );
  };
  const rendertaggedPostHeader = () => {
    return (
      <TouchableOpacity
        style={{flex: 1}}
        activeOpacity={0.8}
        onPress={onTaggedPostClick}>
        <View style={styles.toPost}>
          <Image
            source={APP_IMAGES.ic_tagged_post}
            style={[
              styles.iGridPost,
              {
                tintColor:
                  activeTab == ENUM.profile.taggedPost
                    ? COLOR.black
                    : COLOR.tintGrayColor,
              },
            ]}
          />
        </View>
        <View
          style={activeTab == ENUM.profile.taggedPost ? styles.vLine : null}
        />
      </TouchableOpacity>
    );
  };
  const renderListContainer = () => {
    switch (activeTab) {
      case ENUM.profile.gridPost:
        return <GridPost data={gridPostList} onPostClick={onPostClick} />;
      case ENUM.profile.video:
        return <Video data={videoList} />;
      case ENUM.profile.taggedPost:
        return <TaggedPost data={taggedPostList} onTagClick={onTagClick} />;
    }
  };
  return (
    <SafeAreaView
      style={styles.SaContainer}
      forceInset={{top: 'always', bottom: 'never'}}>
      <StatusBar
        backgroundColor={COLOR.black}
        barStyle={'light-content'}
        translucent
      />

      <View style={styles.vMainContainer}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={{backgroundColor: COLOR.white}}
          bounces={false}>
          <ProfileToolbar
            user_id={profileData.user_id}
            onSettingPress={onSettingPress}
          />
          {renderFollwerContainer()}
          {renderBioContainer()}
          {renderButtonContainer()}
          {renderHighlightContainer()}
          <View style={styles.vTab}>
            {renderPostHeader()}
            {renderVideoHeader()}
            {rendertaggedPostHeader()}
          </View>
          {renderListContainer()}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};
export default ProfileScreen;
