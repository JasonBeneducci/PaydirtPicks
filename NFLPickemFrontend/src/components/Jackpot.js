import React from 'react'
// import connect to allow for using redux for state management
import {connect} from 'react-redux'

class Jackpot extends React.Component {

    componentDidMount () {
        // Upon the jackpot component mounting, the fetchJackpot function should be invoked which is added to props using mdp
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

// create a function that can be added to props and is called within a dispatch()
function fetchJackpot() {
    // thunk middleware allows for this function to return a function that calls the dispatch with a starter action 
    // and then ultimately calls the dispatch again when the promise is resolved.
    return (dispatch) => {
        dispatch({ type: 'START_FETCHING_JACKPOT_REQUEST' })
        fetch('http://localhost:3000/api/v1/slates')
            .then(resp => resp.json())
            // uses the total number of slates to determine the jackpot since each player entry is $1
            .then(slates => dispatch({ type: 'SET_JACKPOT', jackpot: slates.length}))
    }
}


const msp = (state) => {
    // add jackpot from redux store to local props
    return {
        jackpot: state.jackpot
    }
}

const mdp = (dispatch) => {
    // add fetchJackpot function to local props
    return {
        fetchJackpot: () => dispatch(fetchJackpot())
    }
}

export default connect(msp, mdp)(Jackpot)
