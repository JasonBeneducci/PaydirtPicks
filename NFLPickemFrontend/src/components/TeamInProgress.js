import React from 'react'
import PickedTeamLogo from './PickedTeamLogo'
import Jackpot from './Jackpot'
import UnpickedGame from './UnpickedGame'

import {connect} from 'react-redux'

class TeamInProgress extends React.Component {

    render () {
        let logosArray = this.props.logos.map(logo => !logo ? <UnpickedGame key={Math.random()} /> : <PickedTeamLogo key={logo} clickHandler={this.props.clickHandler} logo={logo}/>)
        return (
            <>
            <div className="team-in-progress-bar">
                <Jackpot value={this.props.jackpot}/>
                <div className="logos-array">
                    {logosArray}
                    <button className="submit-picks-button" onClick={(event)=> this.props.submitHandler(event)}>SUBMIT PICKS</button>
                </div>
                <Jackpot value={this.props.jackpot} />
            </div>
            </>
        )
    }
}
const msp = (state) => {
    return {
        jackpot: state.jackpot
    }
}

// const mdp = (dispatch) => {
//     return {
//         incrementJackpot: () => dispatch({type: 'INCREASE_JACKPOT'})
//     }
// }

export default connect(msp) (TeamInProgress)

// export default TeamInProgress