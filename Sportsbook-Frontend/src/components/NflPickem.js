import React from 'react'
import PickemGame from './PickemGame'
import TeamInProgress from './TeamInProgress'

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

    clickHandler = (logo) => {
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

    render () {
        return (
            <>
               <img className="nfl-games-logo" src="https://www.stickpng.com/assets/images/5895deb9cba9841eabab6099.png" alt="" />
               <div className="pickem-container">
                    {this.state.logos.length > 0 ? <TeamInProgress clickHandler={this.removeATeam} logos={this.state.logos} /> : null}
                        <PickemGame makeAPick={this.clickHandler} homeLogo={"http://loodibee.com/wp-content/uploads/nfl-houston-texans-team-logo-2-768x768.png"} awayLogo={"http://loodibee.com/wp-content/uploads/nfl-arizona-cardinals-team-logo-2-768x768.png"} homeName={"Houston Texans"} awayName={"Arizona Cardinals"} />
                        <PickemGame makeAPick={this.clickHandler} homeLogo={"http://loodibee.com/wp-content/uploads/nfl-indianapolis-colts-team-logo-2-768x768.png"} awayLogo={"http://loodibee.com/wp-content/uploads/nfl-jacksonville-jaguars-team-logo-2-768x768.png"} homeName={"Indianapolis Colts"} awayName={"Jacksonville Jaguars"} />
                        <PickemGame makeAPick={this.clickHandler} homeLogo={"http://loodibee.com/wp-content/uploads/nfl-kansas-city-chiefs-team-logo-2-768x768.png"} awayLogo={"http://loodibee.com/wp-content/uploads/nfl-green-bay-packers-team-logo-2-768x768.png"} homeName={"Kansas City Chiefs"} awayName={"Green Bay Packers"}/>
                        <PickemGame makeAPick={this.clickHandler} homeLogo={"http://loodibee.com/wp-content/uploads/nfl-atlanta-falcons-team-logo-2-768x768.png"} awayLogo={"http://loodibee.com/wp-content/uploads/nfl-baltimore-ravens-team-logo-2-768x768.png"} homeName={"Atlanta Falcons"} awayName={"Baltimore Ravens"}/>
                        <PickemGame makeAPick={this.clickHandler} homeLogo={"http://loodibee.com/wp-content/uploads/nfl-buffalo-bills-team-logo-2-768x768.png"} awayLogo={"http://loodibee.com/wp-content/uploads/nfl-chicago-bears-team-logo-2-768x768.png"} homeName={"Buffalo Bills"} awayName={"Chicago Bears"}/>
               </div>
                    <form>
                        <input type="text" placeholder="Type Your Name" value={this.state.name} onChange={(event) => this.changeHandler(event)} />
                        <input type="submit"/>
                    </form>
            </>
    )
}
}
export default NflPickem