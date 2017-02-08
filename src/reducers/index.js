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
  	value: 0
};

export const changeText = (state = initialState, action) => {
  switch (action.type) {
    case 'CHANGE_TEXT':
      return {
          value: state.value
      }
    case 'BUTTON_CLICK': 
      return {
      	value: '1'
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