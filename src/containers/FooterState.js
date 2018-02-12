import { connect } from 'react-redux'
import Footer from '../components/Footer'
import { reset } from '../actions';

const mapStateToProps = state => {
    return {
        completed: state.board.completed,
        winner: state.board.winner
    }
}

const mapStateToDispatch = dispatch => {
    return {
        reset: () => dispatch(reset())
    }
}

const FooterState = connect(
    mapStateToProps,
    mapStateToDispatch
)(Footer)

export default FooterState