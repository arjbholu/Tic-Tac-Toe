const board = (state = {}, action) => {
  switch (action.type) {
    case 'CHANGE':
      console.log(action.index)
      if (state.id === 9)
        return state
      if(state.id % 2) {
        return {
          ...state,
          arr: [
            ...state.arr.slice(0, action.index),
            'X',
            ...state.arr.slice(action.index+1)
          ],
          id: state.id+1
        };
      }
      return {
        ...state,
        arr: [
          ...state.arr.slice(0, action.index),
          'O',
          ...state.arr.slice(action.index+1)
        ],
        id: state.id+1
      };
    default:
      return state
  }
}

export default board;
