import React from 'react'
import {connect} from 'react-redux'

class Jackpot extends React.Component {

    componentDidMount () {
        this.props.fetchJackpot()
    }

    
    render () {
        return (
            <div className="jackpot-container">
                <div className="jackpot-value">
                        Current Jackpot: $ {this.props.jackpot}
                </div>
            </div>
        )
    }
}

function fetchJackpot() {
    return (dispatch) => {
        dispatch({ type: 'START_FETCHING_JACKPOT_REQUEST' })
        fetch('http://localhost:3000/api/v1/slates')
            .then(resp => resp.json())
            .then(slates => dispatch({ type: 'SET_JACKPOT', jackpot: slates.length}))
    }
}


const msp = (state) => {
    return {
        jackpot: state.jackpot
    }
}

const mdp = (dispatch) => {
    return {
        fetchJackpot: () => dispatch(fetchJackpot())
    }
}

export default connect(msp, mdp)(Jackpot)
