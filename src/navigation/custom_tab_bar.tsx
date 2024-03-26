import {useState} from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {navigate} from 'src/navigation/RootNavigation';
import {updateCurrentTab} from 'src/redux/action/commonAction';
import {COLOR, SIZES} from 'src/theme';
import {STRING} from 'src/utils';

const CustomTabBar = (props: any) => {
  const dispatch = useDispatch();
  const currentTab = useSelector(
    (state: any) => state.commonReducer.currentTab,
  );
  const handleFocusOnIcon = (item: any, index: number) => {
    navigate(item.route);
    dispatch(updateCurrentTab(index));
  };
  console.log('current tab====>', currentTab);

  return (
    <View style={styles.vBottomContainer}>
      <View style={styles.vRowContainer}>
        {STRING.bottomTabData.map((item: any, index: number) => {
          return (
            <TouchableOpacity
              activeOpacity={0.4}
              style={styles.toTabContainer}
              onPress={() => {
                handleFocusOnIcon(item, index);
              }}>
              <Image
                source={currentTab == index ? item.checked_icon : item.icon}
                style={[styles.iIcon]}
              />
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
};
export default CustomTabBar;

const styles = StyleSheet.create({
  vBottomContainer: {
    height: SIZES.smartScale(60),
    backgroundColor: COLOR.white,
    borderTopWidth: SIZES.countPixelRatio(2),
    borderTopColor: COLOR.borderColor,
    paddingHorizontal: SIZES.countPixelRatio(20),
  },
  vRowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: SIZES.smartScale(60),
  },
  toTabContainer: {
    // backgroundColor: 'yellow',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  iIcon: {
    height: SIZES.countPixelRatio(30),
    width: SIZES.countPixelRatio(30),
    resizeMode: 'contain',
  },
});
