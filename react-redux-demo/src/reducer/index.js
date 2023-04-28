
const initState = {
  count: 0
}

export const reducer = (state = initState, action) => {
  console.log('reducer', state, action);
  switch(action.type) {
    case 'add_action':
      return {
        count: state.count + 1
      }
    default:
      return state;
  }
  // return state;
  // switch(action.type) {
  //   case 'action_type':
  //     return Object.assign({}, state, action);
  //   default:
  //     return state;
  // }
}