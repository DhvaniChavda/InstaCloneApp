import React from 'react';
import {FlatList, RefreshControl, Text, View} from 'react-native';
import styles from './style';
import {SIZES} from 'src/theme';
import {VideoPostItem} from 'src/component/custom/item';

interface IVideoProps {
  data?: any;
}

export default ({data}: IVideoProps) => {
  const renderVideoPostItem = ({item, index}: {item: any; index: number}) => {
    return <VideoPostItem item={item} index={index} />;
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
