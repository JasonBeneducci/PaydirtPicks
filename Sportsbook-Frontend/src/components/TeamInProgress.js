import React from 'react'
import PickedTeamLogo from './PickedTeamLogo'
import Jackpot from './Jackpot'
import UnpickedGame from './UnpickedGame'
import {connect} from 'react-redux'

class TeamInProgress extends React.Component {
    render () {
        console.log("TIP PROPS", this.props)
        
        let logosArray = this.props.logos.map(logo => <PickedTeamLogo clickHandler={this.props.clickHandler} logo={logo}/>)
        let gamesLeftArray = []
        let gamesLeft = 7 - logosArray.length
        let i=0
            for (i=0; i < gamesLeft; i++) {
                gamesLeftArray.push("")
            }
        let placeholderGames = gamesLeftArray.map(game => <UnpickedGame game={game} />)
        
        return (
            <div className="team-in-progress-bar">
                <Jackpot value={this.props.jackpot}/>
                <div className="logos-array">
                    {logosArray}
                    {placeholderGames}
                    <button className="submit-picks-button" onClick={(event)=> this.props.submitHandler(event)}>SUBMIT PICKS</button>
                </div>
                <Jackpot value={this.props.jackpot} />
            </div>
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