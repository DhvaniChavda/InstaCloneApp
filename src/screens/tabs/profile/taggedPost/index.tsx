import React from 'react';
import {FlatList, RefreshControl, Text, View} from 'react-native';
import styles from './style';
import {TaggedPostItem} from 'src/component/custom/item';
import {SIZES} from 'src/theme';

interface ITaggedProps {
  data: any;
  onTagClick: () => void;
}

export default ({data, onTagClick}: ITaggedProps) => {
  const renderTaggedPostItem = ({item, index}: {item: any; index: number}) => {
    return <TaggedPostItem item={item} index={index} onTagClick={onTagClick} />;
  };
  return (
    <View style={styles.vContainer}>
      <FlatList
        data={data}
        renderItem={renderTaggedPostItem}
        numColumns={3}
        columnWrapperStyle={{columnGap: SIZES.countPixelRatio(5)}}
        contentContainerStyle={{rowGap: SIZES.countPixelRatio(5)}}
      />
    </View>
  );
};
