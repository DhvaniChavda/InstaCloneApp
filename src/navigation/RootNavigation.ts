import {CommonActions, NavigationContainerRef, StackActions} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import React from 'react';
export type TNavigation = NativeStackNavigationProp<any, any>;
export const navigationRef: React.RefObject<
  NavigationContainerRef<TNavigation>
> = React.createRef();
export const navigate = (name: string, params?: object) => {
  navigationRef?.current?.dispatch(
    CommonActions.navigate({
      name,
      params,
    }),
  );
};

export const replace = (name: string, params?: object) => {
  navigationRef?.current?.dispatch(StackActions.replace(name, params));
};
export const goBack = () => {
  navigationRef?.current?.dispatch(CommonActions.goBack());
};
export const reset = (state: any) => {
  navigationRef?.current?.dispatch(CommonActions.reset(state));
};
