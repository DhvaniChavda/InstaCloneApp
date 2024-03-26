import React from 'react';
import {Text, View} from 'react-native';
import {Provider} from 'react-redux';
import {applyMiddleware, compose, createStore} from 'redux';
import {thunk} from 'redux-thunk';
import App from 'src/app';
import appReducer from 'src/redux/reducer';

const store = createStore(
  appReducer,
  undefined,
  compose(applyMiddleware(thunk)),
);

const Setup = () => {
  return (
    <Provider store={store}>
      <View style={{flex: 1}}>
        <App />
      </View>
    </Provider>
  );
};
export default Setup;
