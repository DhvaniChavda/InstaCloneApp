import React, {useState} from 'react';
import {FlatList, ScrollView, StatusBar, Text, View} from 'react-native';
import SafeAreaView from 'react-native-safe-area-view';
import styles from './style';
import {COLOR} from 'src/theme';
import HomeToolbar from 'src/component/custom/toolbar/homeToolbar';
import {DUMMYSTRING} from 'src/utils';
import {FollowersPostItem, StorieItem} from 'src/component/custom/item';
import {goBack} from 'src/navigation/RootNavigation';
import {ModalMoreSheet} from 'src/component/custom/modal';

const HomeScreen = () => {
  const [storyData, setStoryData] = useState<Array<object>>(
    DUMMYSTRING.storiesData,
  );
  const [postListData, setPostListData] = useState<Array<object>>(
    DUMMYSTRING.followersPostList,
  );
  const [isMoreModalOpen, setIsMoreModalOpen] = useState<boolean>(false);
  const onCloseMoreModal = () => {
    setIsMoreModalOpen(false);
  };
  const onLikeClick = (index: number) => {
    console.log('on like click>>>>>', index);
    postListData[index].isSelected = !postListData[index].isSelected;
    setPostListData([...postListData]);
  };
  const onMoreClick = (index: number) => {
    console.log('onMoreClick>>>>>', index);
    setIsMoreModalOpen(true);
  };
  const onProfileClick = () => {
    goBack();
  };
  const renderStoriesItem = ({item, index}: {item: any; index: number}) => {
    return <StorieItem item={item} index={index} />;
  };
  const renderStoriesContainer = () => {
    return (
      <FlatList
        data={storyData}
        renderItem={renderStoriesItem}
        showsHorizontalScrollIndicator={false}
        bounces={false}
        horizontal
      />
    );
  };
  const renderPostListContainer = () => {
    return (
      <FlatList
        data={postListData}
        renderItem={renderPostItem}
        showsHorizontalScrollIndicator={false}
        bounces={false}
      />
    );
  };
  const renderPostItem = ({item, index}: {item: any; index: number}) => {
    return (
      <FollowersPostItem
        item={item}
        index={index}
        onLikeClick={onLikeClick}
        onMoreClick={onMoreClick}
        onProfileClick={onProfileClick}
      />
    );
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
      <HomeToolbar />
      <View style={styles.vMainContainer}>
        <ScrollView showsVerticalScrollIndicator={false}>
          {renderStoriesContainer()}
          {renderPostListContainer()}
        </ScrollView>
      </View>
      {isMoreModalOpen && (
        <ModalMoreSheet
          isModalOpen={isMoreModalOpen}
          onCloseListener={onCloseMoreModal}
          isPostClickFromGrid={true}
        />
      )}
    </SafeAreaView>
  );
};
export default HomeScreen;
