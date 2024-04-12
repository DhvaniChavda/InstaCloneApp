import React, {useEffect, useRef, useState} from 'react';
import {
  FlatList,
  Image,
  Platform,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import SafeAreaView from 'react-native-safe-area-view';
import styles from './style';
import {COLOR, SIZES} from 'src/theme';
import {ReelsToolbar} from 'src/component/custom/toolbar';
import Video from 'react-native-video';
import {DUMMYSTRING, METHOD} from 'src/utils';

import {APP_IMAGES} from 'src/assets/images';
import {ReelsItem} from 'src/component/custom/item';
import FastImage from 'react-native-fast-image';
interface IVideoDetailProps {
  route?: any;
}
const VideoDetailScreen = ({route}: IVideoDetailProps) => {
  const [videoList, setVideoList] = useState(
    DUMMYSTRING.profileData.videoReels,
  );
  const flatListRef = useRef(null);
  const [currentVideoIndex, setCurrentVideoIndex] = React.useState(0);

  const onLikeClick = (index: number) => {
    console.log('on like click>>>>>', index);
    videoList[index].isSelected = !videoList[index].isSelected;
    setVideoList([...videoList]);
  };
  const renderVideoListItem = ({item, index}: {item: any; index: number}) => {
    return (
      <ReelsItem
        item={item}
        index={index}
        onLikeClick={onLikeClick}
        currentVideoIndex={currentVideoIndex}
      />
    );
  };
  const handleScroll = (event: any) => {
    const offsetY = event.nativeEvent.contentOffset.y;
    const currentIndex = Math.floor(offsetY / SIZES.HEIGHT - 170); // Assuming each video reel has a height of 300
    setCurrentVideoIndex(currentIndex);
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
      <ReelsToolbar isFromReels={false} />
      <View style={styles.vMainContainer}>
        <FlatList
          ref={flatListRef}
          data={videoList}
          renderItem={renderVideoListItem}
          keyExtractor={item => item.id.toString()}
          onScroll={handleScroll}
          scrollEventThrottle={10}
        />
        {/* {renderVideoContainer()}
        {renderMediaControls()} */}
      </View>
    </SafeAreaView>
  );
};
export default VideoDetailScreen;
