export const changeState = (index) => {
  return {
    type: 'CHANGE',
    index
  }
}

export const reset = () => {
  return {
    type: 'RESET'
  }
}
