import React, {useEffect} from 'react';
import {Image, StatusBar, Text, View} from 'react-native';
import SafeAreaView from 'react-native-safe-area-view';
import {APP_IMAGES} from 'src/assets/images';
import {navigate} from 'src/navigation/RootNavigation';
import {Routes} from 'src/navigation/route';
import styles from 'src/screens/onBoarding/splash/style';
import {COLOR, FONTS} from 'src/theme';
import {STRING} from 'src/utils';

const Splash = () => {
  useEffect(() => {
    setTimeout(() => {
      navigate(Routes.Intro);
    }, 2000);
  }, []);
  return (
    <SafeAreaView
      style={styles.SaContainer}
      forceInset={{top: 'never', bottom: 'never'}}>
      <StatusBar
        backgroundColor={COLOR.white}
        barStyle={'dark-content'}
        translucent
      />
      <View style={styles.vContainer}>
        <Image source={APP_IMAGES.ic_logo} style={styles.iLogo} />
        <Text style={styles.tFrom}>{STRING.spalsh.from}</Text>
        <Text style={styles.tMeta}>{STRING.spalsh.meta}</Text>
      </View>
    </SafeAreaView>
  );
};
export default Splash;
