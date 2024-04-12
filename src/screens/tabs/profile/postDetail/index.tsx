import React, {useState} from 'react';
import {FlatList, StatusBar, Text, View} from 'react-native';
import styles from './style';
import SafeAreaView from 'react-native-safe-area-view';
import {COLOR, SIZES} from 'src/theme';
import ProfileToolbar from 'src/component/custom/toolbar/profileToolbar';
import {PostToolbar} from 'src/component/custom/toolbar';
import {STRING} from 'src/utils';
import {goBack} from 'src/navigation/RootNavigation';
import {PostDetailItem} from 'src/component/custom/item';
import {ModalMoreSheet} from 'src/component/custom/modal';

interface IPostDetailProps {
  route?: any;
}

const PostDetails = ({route}: IPostDetailProps) => {
  console.log('PostDetails>>>>>>>>', route.params);

  const [postList, setPostList] = useState(route.params.data);
  const [isMoreModalOpen, setIsMoreModalOpen] = useState<boolean>(false);
  const onBackPress = () => {
    goBack();
  };
 

  const onCloseMoreModal = () => {
    setIsMoreModalOpen(false);
  };
  const onLikeClick = (index: number) => {
    console.log('on like click>>>>>', index);
    postList[index].isSelected = !postList[index].isSelected;
    setPostList([...postList]);
  };
  const onMoreClick = (index: number) => {
    console.log('onMoreClick>>>>>', index);
    setIsMoreModalOpen(true);
  };
  const onProfileClick = () => {
    goBack();
  };
  const renderPostItem = ({item, index}: {item: any; index: number}) => {
    return (
      <PostDetailItem
        item={item}
        index={index}
        isPostClickFromGrid={route.params.isPostClickFromGrid}
        onLikeClick={onLikeClick}
        onMoreClick={onMoreClick}
        onProfileClick={onProfileClick}
      />
    );
  };
  const renderListContainer = () => {
    return (
      <FlatList
        data={postList}
        renderItem={renderPostItem}
        contentContainerStyle={{paddingBottom: SIZES.countPixelRatio(80)}}
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
      <PostToolbar
        title={
          route.params.isPostClickFromGrid
            ? STRING.profile.posts
            : STRING.profile.tagged
        }
        isPostClickFromGrid={route.params.isPostClickFromGrid}
        onBackPress={onBackPress}
        
      />
      <View style={styles.vMainContainer}>{renderListContainer()}</View>
      {isMoreModalOpen && (
        <ModalMoreSheet
          isModalOpen={isMoreModalOpen}
          onCloseListener={onCloseMoreModal}
          isPostClickFromGrid={route.params.isPostClickFromGrid}
        />
      )}
    </SafeAreaView>
  );
};

export default PostDetails;
