const initialState = {
  text: 'Hello'
};

export default function test(state = initialState, action) {
  switch (action.type) {
    case 'APP_LOAD':
      return { ...state, loaded: true }
    case 'CHANGE_TEXT':
        return {
            text: state.text == 'Hello' ? 'hello' : '啊'
        }
    case 'BUTTON_CLICK':
        return {
            text: 'you just click button'
        }
    case 'GET_DATA':
        return {
          text: 'get data success',
          data: action.data
        }
    default:
      return state;
  }
}
