import {createAction, handleActions} from 'redux-actions';

const SET_TITLE = 'SET_TITLE';
const SET_LOCATION = 'SET_LOCATION';
const SET_DATE = 'SET_DATE';
const SET_TIME = 'SET_TIME';
const SET_CONTENTS = 'SET_CONTENTS';
const SET_TAG = 'SET_TAG';
const SET_PETS = 'SET_PETS';

export const setTitle = createAction(SET_TITLE, title => title);
export const setLocation = createAction(
  SET_LOCATION,
  (Longitude, Latitude) => ({Longitude: Longitude, Latitude: Latitude}),
);
export const setDate = createAction(SET_DATE, date => date);
export const setTime = createAction(SET_TIME, (startTime, endTime) => ({
  time: [startTime, endTime],
}));
export const setContents = createAction(SET_CONTENTS, contents => contents);
export const setTag = createAction(SET_TAG, tag => tag);
export const setPets = createAction(SET_PETS, pets => pets);

const initialState = {
  title: '',
  Longitude: '',
  Latitude: '',
  date: '',
  time: ['', ''],
  contents: '',
  tag: [],
  pets: [],
};

export default handleActions(
  {
    [SET_TITLE]: (state, action) => {
      return {
        ...state,
        title: action.payload.title,
      };
    },
    [SET_LOCATION]: (state, action) => {
      return {
        ...state,
        Longitude: action.payload.longitude,
        Latitude: action.payload.latitude,
      };
    },
    [SET_DATE]: (state, action) => {
      return {
        ...state,
        date: action.payload.date,
      };
    },
    [SET_TIME]: (state, action) => {
      return {
        ...state,
        time: action.payload.time,
      };
    },
    [SET_CONTENTS]: (state, action) => {
      return {
        ...state,
        contents: action.payload.contents,
      };
    },
    [SET_TAG]: (state, action) => {
      const tagArr = state.tag.concat(action.payload);
      return {
        ...state,
        tag: tagArr,
      };
    },
    [SET_PETS]: (state, action) => {
      return {
        ...state,
        pets: action.payload.pets,
      };
    },
  },
  initialState,
);
