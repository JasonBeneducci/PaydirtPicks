import React from 'react'
import NflTeamInfo from './NflTeamInfo'

class SlateImage extends React.Component {
    // state = {
    //     decided: false
    // }

    readyToCheck = () => {
        this.setState({
            decided: !this.state.decided
        })
    }

    render () {
        return (
            this.props.winner ? 
            <img className="leaderboards-slate-pick-correct" alt="" src={NflTeamInfo[this.props.team]["img_path"]}></img> :
            <img className="leaderboards-slate-pick-incorrect" alt="" src={NflTeamInfo[this.props.team]["img_path"]}></img>
        )
    }
}

export default SlateImage