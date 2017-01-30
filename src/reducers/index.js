// import {combineReducers} from 'redux';
// import {routerReducer} from 'react-router-redux';
// import app from './app';
// import test from './test';

// const rootReducer = combineReducers({
//     app,
//     test,
//     routing: routerReducer
// });

// export default rootReducer;


const initialState = {
  text: 'Hello'
};

export const changeText = (state = initialState, action) => {
  switch (action.type) {
    case 'CHANGE_TEXT':
      return {
          text: state.text == 'Hello' ? 'hello' : '啊'
      }
    case 'BUTTON_CLICK': 
      return {
      	text: 'you just click button'
      }
    default: 
      return state;
  }
}

export const getData = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_DATA':
      return {
          text: 'get data success',
          data: action.data
      }
    default: 
      return state;
  }
}