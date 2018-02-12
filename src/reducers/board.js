const initialState = {
  arr: ['', '', '', '', '', '', '', '', ''],
  id: 0,
  completed: false,
  winner: ''
}

function checkWinner(arr) {
  
  let i, j, winner = '';

  // Calculating the winner if over
  for (i = 0; i < 3; i++) {
    //Calculating row wise
    for (j = 1; j < 3; j++) {
      if (arr[3*i + j] !== arr[3*i + j -1])
        break;
    }
    if (j === 3) {
      winner = arr[3*i]
      break;
    }
    //Calculating column wise
    for (j = 1; j < 3; j++) {
      if (arr[3*j+i] !== arr[3*(j-1)+i])
        break;
    }
    if (j === 3) {
      winner = arr[i]
    }
    //Calculating Diagonal wise
    if (arr[0] === arr[4] && arr[4] === arr[8]) {
      winner = arr[0]
      break;
    }
    if (arr[2] === arr[4] && arr[4] === arr[6]) {
      winner = arr[2]
      break;
    }
  }
  return winner
}

const board = (state = initialState, action) => {
  switch (action.type) {
    case 'CHANGE':
      let id = state.id, 
          index = action.index,
          ele = ['X', 'O'],
          winner = state.winner,
          arr = state.arr
      
      // Checking If element is present or not
      if(winner !== '' || arr[index] === 'X' || arr[index] === 'O')
        return state;

      // Assigning the Value to Array
      arr = [
        ...state.arr.slice(0, index),
        ele[id%2],
        ...state.arr.slice(index+1)
      ]

      // Making the new State
      let newState = {
        ...state,
        arr: arr,
        id: id+1,
        winner: checkWinner(arr)
      }
      return newState;
    case 'RESET':
      return initialState
    default:
      return state
  }
}

export default board;
