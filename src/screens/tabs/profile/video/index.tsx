import React from 'react';
import {FlatList, RefreshControl, Text, View} from 'react-native';
import styles from './style';
import {SIZES} from 'src/theme';
import {VideoPostItem} from 'src/component/custom/item';
import {navigate} from 'src/navigation/RootNavigation';
import {Routes} from 'src/navigation/route';

interface IVideoProps {
  data?: any;
}

export default ({data}: IVideoProps) => {
  const onVideoClick = () => {
    console.log('call onVideoClick==>');
    navigate(Routes.VideoDetailScreen);
  };
  const renderVideoPostItem = ({item, index}: {item: any; index: number}) => {
    return (
      <VideoPostItem item={item} index={index} onVideoClick={onVideoClick} />
    );
  };
  return (
    <View style={styles.vContainer}>
      <FlatList
        data={data}
        renderItem={renderVideoPostItem}
        numColumns={3}
        columnWrapperStyle={{columnGap: SIZES.countPixelRatio(5)}}
        contentContainerStyle={{rowGap: SIZES.countPixelRatio(5)}}
      />
    </View>
  );
};
