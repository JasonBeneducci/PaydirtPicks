import React from 'react'
import NflTeamInfo from '../components/NflTeamInfo'

const LeaderboardSlate = (props) => {
    console.log(NflTeamInfo[props.slate.team1].img_path)
    console.log(props)
    
    return (
        <>
        <div className="leaderboards-slate">
            <div className="leaderboards-player-name">{props.slate.username}</div>
            <img className="leaderboards-slate-pick" alt="" src={NflTeamInfo[props.slate.team1]["img_path"]}></img>
            <img className="leaderboards-slate-pick" alt="" src={NflTeamInfo[props.slate.team2]["img_path"]}></img>
            <img className="leaderboards-slate-pick" alt="" src={NflTeamInfo[props.slate.team3]["img_path"]}></img>
            <img className="leaderboards-slate-pick" alt="" src={NflTeamInfo[props.slate.team4]["img_path"]}></img>
            <img className="leaderboards-slate-pick" alt="" src={NflTeamInfo[props.slate.team5]["img_path"]}></img>
            <img className="leaderboards-slate-pick" alt="" src={NflTeamInfo[props.slate.team6]["img_path"]}></img>
            <img className="leaderboards-slate-pick" alt="" src={NflTeamInfo[props.slate.team7]["img_path"]}></img>
        </div>
        </>
    )
}
export default LeaderboardSlate