import React from 'react'
import PickemGame from './PickemGame'
import TeamInProgress from './TeamInProgress'
import {connect} from 'react-redux'

class NflPickem extends React.Component {
    state = {
        name: "",
        logos: [null, null, null, null, null, null, null],
        games: [],
    }

    componentDidMount () {
        fetch('http://localhost:3000/api/v1/games')
        .then(resp => resp.json())
        .then(data => this.setState({
            games: data
        }))
    }

    changeHandler = (event) => {
        this.setState({
            name: event.target.value,
        })
    }

    clickHandler = (logo, id) => {
        let newLogos = [...this.state.logos]
        newLogos[id] = logo
        this.setState({
            logos: newLogos
        })
    }

    removeATeam = (image) => {
        let filteredImages = this.state.logos.filter(logo => logo !== image )
        this.setState({
            logos: filteredImages
        })
    }

    submitHandler = () => {
        this.props.incrementJackpot()
        // use .filter() to return an array of null picks left
        let checkedArray = this.state.logos.filter(logo => logo === null)
        // see if that array has any elements
        if(checkedArray.length === 0) {
            // if no elements that means no nulls so submit picks
            alert("Your picks have been successfully submitted")
        } else {
            // otherwise prompt user to make more picks
            alert("You have not made enough picks. Please complete your picks and submit again.")
        }
    }

    render () {
        // take all the games and slice to get the first 7
        let gamesArray = this.state.games.slice(0,7)
        // map over the 7 games in the array and make a pickem game component for each one
        let gamesToDisplay = gamesArray.map(game => <PickemGame key={game.id} id={game.id - 1} makeAPick={this.clickHandler} homeLogo={game.home_team_abbr} awayLogo={game.away_team_abbr} homeName={game.home_team} awayName={game.away_team} time={game.time}/>)
        
        return (
            <>
               <img className="nfl-games-logo" src="https://www.stickpng.com/assets/images/5895deb9cba9841eabab6099.png" alt="" />
               <div className="pickem-container">
                    <TeamInProgress clickHandler={this.removeATeam} logos={this.state.logos} submitHandler={this.submitHandler} />
                    {gamesToDisplay}
               </div>
            </>
    )
}
}

const mdp = (dispatch) => {
    return {
        incrementJackpot: () => dispatch({ type: 'INCREASE_JACKPOT' })
    }
}

export default connect(null, mdp) (NflPickem)
