import React from 'react';
import {
  ScrollView,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import SafeAreaView from 'react-native-safe-area-view';
import styles from './style';
import {COLOR} from 'src/theme';
import {IntroToolbar} from 'src/component/custom/toolbar';
import {STRING} from 'src/utils';

const Intro = () => {
  const renderButtonContainer = () => {
    return (
      <TouchableOpacity style={styles.toButton} activeOpacity={0.8}>
        <Text style={styles.tLetStart}>{STRING.intro.letStart}</Text>
      </TouchableOpacity>
    );
  };
  const renderDescContainer = () => {
    return (
      <Text style={styles.tDesc}>
        <Text style={styles.tInsta}>{STRING.intro.instagram} </Text>
        {STRING.intro.description}
      </Text>
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
      <IntroToolbar />
      <View style={styles.vMainContainer}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={styles.vScrollView}>
          {renderDescContainer()}
        </ScrollView>
        {renderButtonContainer()}
      </View>
    </SafeAreaView>
  );
};
export default Intro;
