import React from 'react';
import {StatusBar, Text, View} from 'react-native';
import SafeAreaView from 'react-native-safe-area-view';
import styles from './style';
import {COLOR} from 'src/theme';

const ReelScreen = () => {
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
        <Text>ReelScreen</Text>
      </View>
    </SafeAreaView>
  );
};
export default ReelScreen;
