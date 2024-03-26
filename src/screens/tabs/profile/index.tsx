import React from 'react';
import {StatusBar, Text, View} from 'react-native';
import SafeAreaView from 'react-native-safe-area-view';
import styles from './style';
import {COLOR} from 'src/theme';

const ProfileScreen = () => {
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
        <Text>ProfileScreen</Text>
      </View>
    </SafeAreaView>
  );
};
export default ProfileScreen;
