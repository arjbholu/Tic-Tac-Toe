import Board from '../components/Board'
import { connect } from 'react-redux'
import { changeState } from '../actions'

const mapStateToProps = state => {
  return {
    arr: state.board.arr
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onClick: (index) => dispatch(changeState(index))
  }
}

const BoardState = connect(
  mapStateToProps,
  mapDispatchToProps
)(Board)

export default BoardState;
