import React from 'react'
import PickemGame from '../containers/PickemGame'
import TeamInProgress from '../containers/TeamInProgress'
import {connect} from 'react-redux'

class NflPickem extends React.Component {
    state = {
        name: "",
        logos: [null, null, null, null, null, null, null],
        teamNames: [null, null, null, null, null, null, null],
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
        let newTeams = [...this.state.teamNames]
        
        newLogos[id] = logo
        let string = logo.split('').slice(35, 38).join('')
        let abbreviation = string.split('.').join('')
        newTeams[id] = abbreviation
        this.setState({
            logos: newLogos,
            teamNames: newTeams
        })
    }

    removeATeam = (image) => {
        let filteredImages = this.state.logos.filter(logo => logo !== image )
        this.setState({
            logos: filteredImages
        })
    }

    submitHandler = (event) => {
        event.preventDefault()
        let data = event.target.name.value
        // use .filter() to return an array of null picks left
        let checkedArray = this.state.logos.filter(logo => logo === null)
        // see if that array has any elements
        if(checkedArray.length === 0) {
            // if no elements that means no nulls so submit picks to Rails backend and increment Jackpot
            fetch('http://localhost:3000/api/v1/slates/new', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "accepts": "application/json"
                },
                body: JSON.stringify({
                    username: data,
                    teams: this.state.teamNames
                })
            })
            alert("Your picks have been successfully submitted")
            this.props.incrementJackpot()
        } else {
            // otherwise prompt user to make more picks
            alert("You have not made enough picks. Please complete your picks and submit again.")
        }
    }

    render () {
        console.log(this.state.games)
        // take all the games and slice to get the first 7
        let gamesArray = this.state.games.slice(0,7)
            // map over the 7 games in the array and make a pickem game component for each one
            let gamesToDisplay = gamesArray.map(game => <PickemGame key={game.id} id={game.id-1} makeAPick={this.clickHandler} homeLogo={game.home_team_abbr} awayLogo={game.away_team_abbr} homeName={game.home_team} awayName={game.away_team} time={game.time}/>)
        
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
        incrementJackpot: () => dispatch({ type: 'INCREASE_JACKPOT' }),
    }
}

export default connect(null, mdp) (NflPickem)

