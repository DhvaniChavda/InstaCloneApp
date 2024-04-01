import React from 'react';
import {FlatList, RefreshControl, Text, View} from 'react-native';
import styles from './style';
import {GridPostItem} from 'src/component/custom/item';
import {SIZES} from 'src/theme';

interface IGridProps {
  data: any;
  onPostClick?: () => void;
}

export default ({data, onPostClick}: IGridProps) => {
  const renderGridPostItem = ({item, index}: {item: any; index: number}) => {
    return <GridPostItem item={item} index={index} onPostClick={onPostClick} />;
  };
  return (
    <View style={styles.vContainer}>
      <FlatList
        data={data}
        renderItem={renderGridPostItem}
        numColumns={3}
        columnWrapperStyle={{columnGap: SIZES.countPixelRatio(5)}}
        contentContainerStyle={{rowGap: SIZES.countPixelRatio(5)}}
      />
    </View>
  );
};
