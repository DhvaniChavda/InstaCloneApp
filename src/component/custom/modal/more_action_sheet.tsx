import React from 'react';
import {View, Text, StyleSheet, Image, FlatList} from 'react-native';
import ModalBox from '../../library/modalBox';
import {COLOR, FONTS, SIZES} from 'src/theme';
import {APP_IMAGES} from 'src/assets/images';
import {STRING} from 'src/utils';
import {MoreTabItem} from 'src/component/custom/item';

interface IProps {
  isModalOpen: Boolean;
  onCloseListener: () => void;
  isPostClickFromGrid: boolean;
}

export default ({
  isModalOpen,
  onCloseListener,
  isPostClickFromGrid,
}: IProps): JSX.Element => {
  const renderMoreTabItem = ({item, index}: {item: any; index: number}) => {
    return <MoreTabItem item={item} index={index} />;
  };
  return (
    <ModalBox
      isOpen={isModalOpen}
      onClosed={onCloseListener}
      position="bottom"
      entry="bottom"
      style={styles.modalContainer}
      //   swipeToClose={false}
      coverScreen={true}
      backButtonClose={true}>
      <View style={styles.vTopRowContainer}>
        <View style={styles.vImgContainer}>
          <Image source={APP_IMAGES.ic_save} style={styles.iSave} />
        </View>
        <View style={styles.vImgContainer}>
          <Image source={APP_IMAGES.ic_smile} style={styles.iSave} />
        </View>
      </View>
      <View style={styles.vSeprator} />
      <View style={styles.vTextContainer}>
        <Image source={APP_IMAGES.ic_share_posts} style={styles.iPost} />
        <View>
          <Text style={styles.tMovingThing}>
            {STRING.profile.moving_things}
          </Text>
          <Text style={styles.tShare}>{STRING.profile.where_to_share}</Text>
        </View>
      </View>
      <View style={styles.vSeprator} />
      <FlatList
        data={
          isPostClickFromGrid ? STRING.moreTabList : STRING.moreTabTaggedList
        }
        renderItem={renderMoreTabItem}
      />
    </ModalBox>
  );
};
const styles = StyleSheet.create({
  modalContainer: {
    height: undefined,
    backgroundColor: COLOR.white,
    borderTopRightRadius: SIZES.countPixelRatio(20),
    borderTopLeftRadius: SIZES.countPixelRatio(20),
    paddingVertical: SIZES.countPixelRatio(20),
  },
  vTopRowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  iSave: {
    height: SIZES.countPixelRatio(40),
    width: SIZES.countPixelRatio(40),
    resizeMode: 'contain',
  },
  vImgContainer: {
    borderWidth: SIZES.countPixelRatio(3),
    padding: SIZES.countPixelRatio(20),
    borderRadius: SIZES.countPixelRatio(40),
    borderColor: COLOR.black,
  },
  tShare: {
    fontSize: SIZES.countPixelRatio(18),
    color: COLOR.blue,
    fontFamily: FONTS.SANS_SEMIBOLD,
  },
  vSeprator: {
    height: 1,
    backgroundColor: COLOR.black,
    marginVertical: SIZES.countPixelRatio(10),
    opacity: 0.2,
  },
  iPost: {
    height: SIZES.countPixelRatio(25),
    width: SIZES.countPixelRatio(25),
    resizeMode: 'contain',
    marginRight: SIZES.countPixelRatio(20),
  },
  tMovingThing: {
    fontSize: SIZES.countPixelRatio(18),
    color: COLOR.black,
    fontFamily: FONTS.SANS_REGULAR,
  },
  vTextContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: SIZES.countPixelRatio(20),
  },
});
