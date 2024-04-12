import React from 'react';
import {
  FlatList,
  Image,
  ScrollView,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import styles from './style';
import SafeAreaView from 'react-native-safe-area-view';
import {COLOR, SIZES} from 'src/theme';
import {PostToolbar} from 'src/component/custom/toolbar';
import {DUMMYSTRING, STRING} from 'src/utils';
import {goBack} from 'src/navigation/RootNavigation';
import {APP_IMAGES} from 'src/assets/images';
import {SettingItem} from 'src/component/custom/item';

interface ISettingProps {
  route?: any;
}

const Setting = ({route}: ISettingProps) => {
  const onBackPress = () => {
    goBack();
  };
  const renderSearchContainer = () => {
    return (
      <TouchableOpacity style={styles.vSearchContainer} activeOpacity={0.8}>
        <Image source={APP_IMAGES.ic_search} style={styles.iSearch} />
        <Text style={styles.tSearch}>{STRING.setting.search}</Text>
      </TouchableOpacity>
    );
  };
  const renderTextRowContainer = () => {
    return (
      <View style={styles.vTextRowContainer}>
        <Text style={styles.tYourAcc}>{STRING.setting.your_account}</Text>
        <Text style={styles.tMeta}>{STRING.setting.meta}</Text>
      </View>
    );
  };
  const renderImgContainer = () => {
    return (
      <>
        <TouchableOpacity
          style={styles.vTextImgRowContainer}
          activeOpacity={0.6}>
          <Image source={APP_IMAGES.ic_profile} style={styles.iSearch} />
          <View
            style={{
              flex: 1,
              marginHorizontal: SIZES.countPixelRatio(20),
            }}>
            <Text style={[styles.tAccCenter, {color: COLOR.black}]}>
              {STRING.setting.account_center}
            </Text>
            <Text style={styles.tSecurity}>{STRING.setting.security_info}</Text>
          </View>
          <Image source={APP_IMAGES.ic_next_arrow} style={styles.iNextArrow} />
        </TouchableOpacity>
        <Text style={styles.tDummy}>{STRING.setting.dummy_info}</Text>
        <View style={styles.vSeprator} />
      </>
    );
  };

  const renderListContainer = (title: string, data: any) => {
    return (
      <>
        <Text style={styles.tTitle}>{title}</Text>
        <FlatList
          data={data}
          renderItem={renderDataItem}
          showsVerticalScrollIndicator={false}
          bounces={false}
        />
        <View style={styles.vSeprator} />
      </>
    );
  };
  const renderDataItem = ({item, index}: {item: any; index: number}) => {
    return <SettingItem item={item} index={index} />;
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
      <PostToolbar
        title={STRING.setting.setting_ativity}
        onBackPress={onBackPress}
        isPostClickFromGrid={true}
      />
      <View style={styles.vMainContainer}>
        <ScrollView style={{flex: 1}} showsVerticalScrollIndicator={false}>
          {renderSearchContainer()}
          {renderTextRowContainer()}
          {renderImgContainer()}
          {renderListContainer(STRING.setting.how_to_use, DUMMYSTRING.data1)}
          {renderListContainer(
            STRING.setting.who_can_see_your_ac,
            DUMMYSTRING.data2,
          )}
          {renderListContainer(STRING.setting.how_other, DUMMYSTRING.data3)}
          {renderListContainer(STRING.setting.what_you_see, DUMMYSTRING.data4)}
          {renderListContainer(STRING.setting.your_app, DUMMYSTRING.data5)}
          {renderListContainer(
            STRING.setting.for_proffesional,
            DUMMYSTRING.data6,
          )}
          {renderListContainer(STRING.setting.your_order, DUMMYSTRING.data7)}
          {renderListContainer(STRING.setting.more_info, DUMMYSTRING.data8)}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};
export default Setting;
