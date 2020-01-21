import {handleActions} from 'redux-actions';

const TAB_INVISIBLE = 'TAB_INVISIBLE';
const TAB_VISIBLE = 'TAB_VISIBLE';

export const hideTab = () => ({type: TAB_INVISIBLE});
export const viewTab = () => ({type: TAB_VISIBLE});

const initialState = {
  tabBarVisible: true,
};

export default handleActions(
  {
    [TAB_INVISIBLE]: (state, action) => {
      return {
        ...state,
        tabBarVisible: false,
      };
    },
    [TAB_VISIBLE]: (state, action) => {
      return {
        ...state,
        tabBarVisible: true,
      };
    },
  },
  initialState,
);
