import React from 'react'
import PickemGame from './PickemGame'
import TeamInProgress from './TeamInProgress'
import {connect} from 'react-redux'

class NflPickem extends React.Component {
    state = {
        name: "",
        logos: [null, null, null, null, null, null, null],
        games: []
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
        console.log("logo:", logo)
        console.log("id:", id)
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
        let logos = this.state.logos
        if(logos.length === 7) {
            alert("Your picks have been successfully submitted")
        } else {
            alert("You have not made enough picks. Please complete your picks and submit again.")
        }
        // let startIndex = console.log("start:",(logos[1].match("nfl").index))
        // let endIndex = console.log("end:", (logos[1].match("-team").index))
        // let team = logos[1]
        // let splitTeam = team.split()
        // let teamName = splitTeam[0].slice(startIndex, endIndex)
        // console.log(teamName)
    }

    render () {
        // take all the games and slice to get the first 7
        let gamesArray = this.state.games.slice(0,7)
        // map over the 7 games in the array and make a pickem game component for each one
        let gamesToDisplay = gamesArray.map(game => <PickemGame key={game.id} id={game.id - 1} makeAPick={this.clickHandler} homeLogo={"http://loodibee.com/wp-content/uploads/nfl-houston-texans-team-logo-2-768x768.png"} awayLogo={"http://loodibee.com/wp-content/uploads/nfl-houston-texans-team-logo-2-768x768.png"} homeName={game.home_team} awayName={game.away_team} time={game.time}/>)
        
        return (
            <>
               <img className="nfl-games-logo" src="https://www.stickpng.com/assets/images/5895deb9cba9841eabab6099.png" alt="" />
               
               <div className="pickem-container">
                    <TeamInProgress clickHandler={this.removeATeam} logos={this.state.logos} submitHandler={this.submitHandler} />
                    {gamesToDisplay}
               </div>
                    
                <form>
                    <input type="text" placeholder="Type Your Name" value={this.state.name} onChange={(event) => this.changeHandler(event)} />
                    <input type="submit"/>
                </form>
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

// export default NflPickem