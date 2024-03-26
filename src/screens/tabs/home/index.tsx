import React, {useState} from 'react';
import {FlatList, ScrollView, StatusBar, Text, View} from 'react-native';
import SafeAreaView from 'react-native-safe-area-view';
import styles from './style';
import {COLOR} from 'src/theme';
import HomeToolbar from 'src/component/custom/toolbar/homeToolbar';
import {DUMMYSTRING} from 'src/utils';
import {StorieItem} from 'src/component/custom/item';

const HomeScreen = () => {
  const [storyData, setStoryData] = useState<Array<object>>(
    DUMMYSTRING.storiesData,
  );
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
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};
export default HomeScreen;
