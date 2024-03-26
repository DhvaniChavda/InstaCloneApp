import {configureStore} from '@reduxjs/toolkit';
import commonReducer from 'src/redux/reducer/commonReducer';

export const store = configureStore({
  reducer: {
    common: commonReducer,
  },
});
export default store;
