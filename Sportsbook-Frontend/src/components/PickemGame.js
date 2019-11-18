import React from 'react'
import BetTitle from './BetTitle'
// import {connect} from 'react-redux'

class PickemGame extends React.Component {
    state = {
        selectedTeam: "",
        homeSelected: false,
        awaySelected: false
    }
    

    clickHandler = (event) => {
        this.handleDuplicates(event)
        this.props.makeAPick(event.target.src)
        if (event.target.id === "homeTeam") {
            this.setState({
                selectedTeam: event.target.src,
                homeSelected: !this.state.homeSelected
            })
        } else if (event.target.id === "awayTeam") {
            this.setState({
                selectedTeam: event.target.src,
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
                    <BetTitle homeName={this.props.homeName} awayName={this.props.awayName} />
                </div>
                <div className="matchup-card">
                    <img id="homeTeam" alt="" src={this.props.homeLogo} onClick={(event) => this.clickHandler(event)} className={this.state.homeSelected ? "home-team-logo-selected" : "home-team-logo"}></img>
                    <img id="awayTeam" alt="" src={this.props.awayLogo} onClick={(event) => this.clickHandler(event)} className={this.state.awaySelected ? "away-team-logo-selected" : "away-team-logo"}></img>
                </div>
            </div>
        )
    }
}

// const mdp = (dispatch) => {
//     return {
//         addToPickedTeams: () => {
//             dispatch({type: "ADD_TEAM"})
//         }
//     }
// }

export default PickemGame