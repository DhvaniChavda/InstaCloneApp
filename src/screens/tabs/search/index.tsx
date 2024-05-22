import React, {useEffect, useState} from 'react';
import {FlatList, Image, StatusBar, Text, View} from 'react-native';
import SafeAreaView from 'react-native-safe-area-view';
import styles from './style';
import {COLOR, SIZES} from 'src/theme';
import {DUMMYSTRING} from 'src/utils';

const SearchScreen = () => {
  const [gridData, setGridData] = useState(DUMMYSTRING.GridViewData);
  const [columns, setColumns] = useState([[], [], []]);
  useEffect(() => {
    const columnWidth = SIZES.WIDTH / 3;

    let currentColumns = [[], [], []];
    let currentHeights = [0, 0, 0];

    gridData.forEach((item: any) => {
      Image.getSize(item.imgURL, (width, height) => {
        const aspectRatio: number = width / height;
        console.log('aspectRatio>>>>>>>>.', aspectRatio);

        const itemHeight: number = columnWidth / aspectRatio;
        console.log('itemHeight>>>>>>>>', itemHeight);

        // Determine which column to add the item to based on current heights
        const columnIndex = currentHeights.indexOf(Math.min(...currentHeights));

        console.log('columnIndex>>>>>>>>', columnIndex);

        // Add the item to the column
        currentColumns[columnIndex].push({
          ...item,
          aspectRatio,
          width: columnWidth,
          height: itemHeight,
        });

        // Update the current height of the column
        currentHeights[columnIndex] += itemHeight;

        // Update the state with the new columns
        setColumns([...currentColumns]);
        console.log('currentColumnscurrentColumns>>>>>>>>', currentColumns);
      });
    });
  }, [gridData]);
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
        <FlatList
          data={[
            {column: columns[0], key: 'left'},
            {column: columns[1], key: 'middle'},
            {column: columns[2], key: 'right'},
          ]}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({item}) => (
            <View style={{flex: 1}}>
              {item.column.map((item, index) => (
                <View
                  key={index}
                  style={{marginBottom: 5, backgroundColor: 'pink'}}>
                  <Image
                    source={{uri: item.imgURL}}
                    style={[
                      styles.image,
                      {
                        height: item.height,
                      },
                    ]}
                  />
                </View>
              ))}
            </View>
          )}
          numColumns={3}
          columnWrapperStyle={{
            justifyContent: 'space-between',
            columnGap: 5,
          }}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </SafeAreaView>
  );
};
export default SearchScreen;
