import React from 'react'
import SlateImage from './SlateImage'

class SlateOfPicks extends React.Component {

    render () {
        // code is responsible for creating an array of winner abbreviations
        let winnersArray = Object.values(this.props.winners)
        // Allows for a slate image to have a key of winner or no key at all for selections that are correct or incorrect
        let slateImagesArray = this.props.slate.map(team => winnersArray.includes(team) ? <SlateImage key={team} team={team} winner /> : <SlateImage key={team} team={team}/>)
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
export default SlateOfPicks


