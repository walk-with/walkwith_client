import {handleActions} from 'redux-actions';

const url = '';

const LOGIN_PENDING = 'LOGIN_PENDING';
const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
const LOGIN_FAILURE = 'LOGIN_FAILURE';

function LoginAPI(email, pw) {
  return fetch('http://20b94a0a.ngrok.io/users/login', {
    body: JSON.stringify({
      email: email,
      password: pw,
    }),
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json',
    },
    method: 'POST',
  });
}

export function requestLogin(email, pw) {
  return function action(dispatch) {
    dispatch({type: LOGIN_PENDING});
    return LoginAPI(email, pw)
      .then(res => res.json())
      .then(result => {
        console.log('a', result);
        dispatch({type: LOGIN_SUCCESS, payload: result.token});
      })
      .catch(error => {
        console.log('c', error);
        dispatch({type: LOGIN_FAILURE, payload: error});
      });
  };
}

const initialState = {
  pending: false,
  error: false,
  token: null,
};

export default handleActions(
  {
    [LOGIN_PENDING]: (state, action) => {
      return {
        ...state,
        pending: true,
      };
    },
    [LOGIN_SUCCESS]: (state, action) => {
      console.log('n', action.payload);
      return {
        ...state,
        pending: false,
        token: action.payload,
      };
    },
    [LOGIN_FAILURE]: (state, action) => {
      return {
        ...state,
        pending: false,
        token: action.payload,
      };
    },
  },
  initialState,
);
