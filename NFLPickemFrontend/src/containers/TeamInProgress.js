import React from 'react'
import PickedTeamLogo from '../components/PickedTeamLogo'
import Jackpot from '../components/Jackpot'
import UnpickedGame from '../components/UnpickedGame'
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
        let logosArray = this.props.logos.map(logo => !logo ? <UnpickedGame key={Math.random()} /> : <PickedTeamLogo key={logo} logo={logo}/>)
        return (
            <>
            <div className="team-in-progress-bar">
                <Jackpot />
                <div className="logos-array">
                    {logosArray}
                    <form onSubmit={(event) => this.props.submitHandler(event)}>
                        <input className="name-input" onChange={this.changeHandler} placeholder="Type Your Name" type="text" name="name" value={this.state.name}></input>
                        <input type="submit" className="submit-picks-button"></input>
                    </form>
                </div>
                <Jackpot />
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

export default connect(msp) (TeamInProgress)
