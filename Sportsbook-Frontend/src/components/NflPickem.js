import React from 'react'
import PickemGame from './PickemGame'
import TeamInProgress from './TeamInProgress'
import {connect} from 'react-redux'

class NflPickem extends React.Component {
    state = {
        name: "",
        logos: []
    }

    changeHandler = (event) => {
        this.setState({
            name: event.target.value,
        })
    }

    clickHandler = (logo, gameId) => {
        // console.log(gameId)

        if (this.state.logos.length <= 7 && !this.state.logos.includes(logo)) {
            this.setState({
                logos: [...this.state.logos, logo]
            })
        } else if (this.state.logos.includes(logo)) {
            alert("You have already made that selection! If you would like to change your selection. Remove your previous pick and add a new one.")
        } else if (this.state.logos.length === 7) {
            alert("You have already picked all of the games!")
        }

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
        console.log("PICKEM PROPS", this.props)
        return (
            <>
               <img className="nfl-games-logo" src="https://www.stickpng.com/assets/images/5895deb9cba9841eabab6099.png" alt="" />
               
               <div className="pickem-container">
                    
                    <TeamInProgress clickHandler={this.removeATeam} logos={this.state.logos} submitHandler={this.submitHandler} />
                    
                    <PickemGame id="1" makeAPick={this.clickHandler} homeLogo={"http://loodibee.com/wp-content/uploads/nfl-houston-texans-team-logo-2-768x768.png"} awayLogo={"http://loodibee.com/wp-content/uploads/nfl-arizona-cardinals-team-logo-2-768x768.png"} homeName={"Houston Texans"} awayName={"Arizona Cardinals"} />
                    <PickemGame id="2" makeAPick={this.clickHandler} homeLogo={"http://loodibee.com/wp-content/uploads/nfl-indianapolis-colts-team-logo-2-768x768.png"} awayLogo={"http://loodibee.com/wp-content/uploads/nfl-jacksonville-jaguars-team-logo-2-768x768.png"} homeName={"Indianapolis Colts"} awayName={"Jacksonville Jaguars"} />
                    <PickemGame id="3" makeAPick={this.clickHandler} homeLogo={"http://loodibee.com/wp-content/uploads/nfl-kansas-city-chiefs-team-logo-2-768x768.png"} awayLogo={"http://loodibee.com/wp-content/uploads/nfl-green-bay-packers-team-logo-2-768x768.png"} homeName={"Kansas City Chiefs"} awayName={"Green Bay Packers"}/>
                    <PickemGame id="4" makeAPick={this.clickHandler} homeLogo={"http://loodibee.com/wp-content/uploads/nfl-atlanta-falcons-team-logo-2-768x768.png"} awayLogo={"http://loodibee.com/wp-content/uploads/nfl-baltimore-ravens-team-logo-2-768x768.png"} homeName={"Atlanta Falcons"} awayName={"Baltimore Ravens"}/>
                    <PickemGame id="5" makeAPick={this.clickHandler} homeLogo={"http://loodibee.com/wp-content/uploads/nfl-buffalo-bills-team-logo-2-768x768.png"} awayLogo={"http://loodibee.com/wp-content/uploads/nfl-chicago-bears-team-logo-2-768x768.png"} homeName={"Buffalo Bills"} awayName={"Chicago Bears"}/>
               
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

export default connect(null,mdp) (NflPickem)

// export default NflPickem