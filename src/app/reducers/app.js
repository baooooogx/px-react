const initialState = {
  text: 'Hello'
};
export default function app(state = initialState, action) {
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
    default:
      return state;
  }
}
