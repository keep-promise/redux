
const initState = {
  value: '默认值'
}

export const reducer = (state = initState, action) => {
  console.log('reducer', state, action);
  switch(action.type) {
    case 'action_type':
      return Object.assign({}, state, action);
    default:
      return state;
  }
}