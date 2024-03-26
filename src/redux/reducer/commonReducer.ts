import {UPDATE_CURRENT_TAB} from 'src/redux/types';

interface commonState {
  currentTab: number;
}

const initialState: commonState = {
  currentTab: 0,
};

type Action = {
  type: string;
  payload?: any;
};

const commonReducer = (
  state: commonState = initialState,
  action: Action,
): commonState => {
  switch (action.type) {
    case UPDATE_CURRENT_TAB:
      return {...state, currentTab: action.payload};
    default:
      return state;
  }
};
export default commonReducer;
