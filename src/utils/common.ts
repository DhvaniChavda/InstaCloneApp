import React, {useCallback} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import moment from 'moment';
import {ToastAndroid} from 'react-native';
export default {
  savePref: (key: string, value: any) => {
    AsyncStorage.setItem(key, JSON.stringify(value), err => {});
  },
  getPref: (key: string) => {
    return new Promise((resolve, reject) => {
      AsyncStorage.getItem(key, (err, result) => {
        if (result) {
          resolve(JSON.parse(result));
        } else {
          reject(false);
        }
      });
    });
  },
  convertDateMMMMDDYYYY: (date: string) => {
    return moment(date, 'YYYY-MM-DD').format('MMMM DD, YYYY');
  },
  showToast(msg: any) {
    if (msg) {
      ToastAndroid.show(msg, ToastAndroid.LONG);
    }
  },
};
