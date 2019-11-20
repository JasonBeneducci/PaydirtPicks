import React from 'react'
import PickedTeamLogo from './PickedTeamLogo'
import Jackpot from './Jackpot'
import UnpickedGame from './UnpickedGame'

import {connect} from 'react-redux'

class TeamInProgress extends React.Component {

    state = {
        name:""
    }

    changeHandler = (event) => {
        this.setState({
            name: event.target.value
        })
    }

    render () {
        let logosArray = this.props.logos.map(logo => !logo ? <UnpickedGame key={Math.random()} /> : <PickedTeamLogo key={logo} clickHandler={this.props.clickHandler} logo={logo}/>)
        return (
            <>
            <div className="team-in-progress-bar">
                <Jackpot value={this.props.jackpot}/>
                <div className="logos-array">
                    {logosArray}
                    <form onSubmit={(event) => this.props.submitHandler(event)}>
                        <input className="name-input" onChange={this.changeHandler} placeholder="Type Your Name" type="text" name="name" value={this.state.name}></input>
                        <input type="submit" className="submit-picks-button"></input>
                    </form>
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