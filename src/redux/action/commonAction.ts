import {UPDATE_CURRENT_TAB} from 'src/redux/types';

export const updateCurrentTab = (value: number) => {
  return {type: UPDATE_CURRENT_TAB, payload: value};
};
