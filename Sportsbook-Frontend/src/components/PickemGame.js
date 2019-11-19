import React from 'react'
import BetTitle from './BetTitle'
// import {connect} from 'react-redux'

class PickemGame extends React.Component {
    state = {
        selectedTeam: "",
        homeSelected: false,
        awaySelected: false
    }
    

    clickHandler = (event, id) => {
        // Call on handleDuplicates to run a conditional toggle the state of which logo is 'selected'
        this.handleDuplicates(event)

        // Call on makeAPick from props to add a given pick to the TeamInProgress sticky bar
        this.props.makeAPick(event.target.src, this.props.id)
    

        if (event.target.id === "homeTeam") {
            this.setState({
                homeSelected: !this.state.homeSelected
            })
        } else if (event.target.id === "awayTeam") {
            this.setState({
                awaySelected: !this.state.awaySelected
            })
        }


    }

    handleDuplicates = (event) => {
        
        if (event.target.id === "homeTeam") {
            this.setState({
                awaySelected: false
            })
        } else if (event.target.id === "awayTeam") {
            this.setState({
                homeSelected: false
            })
        }

    }

    render() {
        return (
            <div className="game-container">
                
                <div>
                    <BetTitle homeName={this.props.homeName} awayName={this.props.awayName} time={this.props.time} />
                </div>

                <div className="matchup-card">
                    <img id="homeTeam" onClick={(event) => this.clickHandler(event, this.props.id)} alt="" src={this.props.homeLogo} className={this.state.homeSelected ? "home-team-logo-selected" : "home-team-logo"}></img>
                    <img id="awayTeam" onClick={(event) => this.clickHandler(event, this.props.id)} alt="" src={this.props.awayLogo} className={this.state.awaySelected ? "away-team-logo-selected" : "away-team-logo"}></img>
                </div>

            </div>
        )
    }
}

// const msp = (state) => {
//     return {

//     }
// }

// const mdp = (dispatch) => {
//     return {

//     }
// }

// export default connect(null, mdp) (PickemGame)

export default PickemGame