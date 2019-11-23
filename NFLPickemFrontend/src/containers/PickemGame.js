import React from 'react'
import BetTitle from '../components/BetTitle'
import NflTeamInfo from '../components/NflTeamInfo'
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
        // console.log("NFL TEAMS", NflTeamInfo[this.props.homeLogo]["img_path"])
        // use NflTeamInfo Game hash to dynamically access values on the keys by team_abbreviation
        return (
            <div className="game-container">
                
                <div>
                    <BetTitle homeName={this.props.homeName} awayName={this.props.awayName} time={this.props.time} />
                </div>

                <div className="matchup-card">
                    <img id="awayTeam" onClick={(event) => this.clickHandler(event, this.props.id)} alt="" src={NflTeamInfo[this.props.awayLogo]["img_path"]} className={this.state.awaySelected ? "away-team-logo-selected" : "away-team-logo"}></img>
                    <img id="homeTeam" onClick={(event) => this.clickHandler(event, this.props.id)} alt="" src={NflTeamInfo[this.props.homeLogo]["img_path"]} className={this.state.homeSelected ? "home-team-logo-selected" : "home-team-logo"}></img>
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