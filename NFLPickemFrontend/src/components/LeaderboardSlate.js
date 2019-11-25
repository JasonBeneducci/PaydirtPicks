import React from 'react'
import SlateImage from './SlateImage'

class LeaderboardSlate extends React.Component {

    render () {
        let winnersArray = Object.values(this.props.winners)
        let slateImagesArray = this.props.slate.map(team => winnersArray.includes(team) ? <SlateImage key={team} team={team} winner /> : <SlateImage key={team} team={team}/>)
        console.log(slateImagesArray)
        return (
            <>
            <div className="leaderboards-slate">
            <div className="leaderboards-player-name">{this.props.username}</div>
                {slateImagesArray}
            </div>
            </> 
        )

    }
}
export default LeaderboardSlate


