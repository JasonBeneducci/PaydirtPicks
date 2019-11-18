import React from 'react'
import PickedTeamLogo from './PickedTeamLogo'
import Jackpot from './Jackpot'
import {connect} from 'react-redux'

class TeamInProgress extends React.Component {

    render () {
        let logosArray = this.props.logos.map(logo => <PickedTeamLogo clickHandler={this.props.clickHandler} logo={logo}/>)
        return (
            <div className="team-in-progress-bar">
                <Jackpot />
                <div className="logos-array">
                    {logosArray}
                    <button className="submit-picks-button">SUBMIT PICKS</button>
                </div>
                <Jackpot />
            </div>
        )
    }
}

const msp = (state) => {
    return (
        
    )
}

const mdp = (dispatch) => {
    return (

    )
}

export default connect(msp, mdp) (TeamInProgress)