import React from 'react'
import LeaderboardSlate from '../components/LeaderboardSlate'
import SearchLeaderboard from '../components/SearchLeaderboard'
class LeaderboardsContainer extends React.Component {
    
    state = {
        allSlates: [],
        filteredSlates: [],
        winners: []
    }

    componentDidMount() {
        this.fetchSlates()
        this.fetchWinners()
    }

    fetchSlates = () => {
        fetch('http://localhost:3000/api/v1/slates')
        .then(resp => resp.json())
        .then(data => this.setState({
            allSlates: data,
            filteredSlates: data
        }))
    }

    fetchWinners = () => {
        fetch("http://localhost:3000/api/v1/games/keys")
        .then(resp => resp.json())
        .then(winners => this.setState({
            winners: winners[0]
        }))
    }

    searchHandler = (term) => {
        let filteredArray = this.state.allSlates.filter(slate => slate.username.includes(term))
        if (term === "") {
            this.setState({
                filteredSlates: this.state.allSlates
            })
        } else {
            this.setState({
                filteredSlates: filteredArray
            })
        }
    }

    render () {
        let slatesArray = this.state.filteredSlates.map(slate => <LeaderboardSlate 
            key={slate.id} 
            username={slate.username} 
            slate={[slate.team1, slate.team2, slate.team3, slate.team4, slate.team5, slate.team6, slate.team7]}
            winners={this.state.winners} />)
        return (
            <div className="leaderboards-container">
                <SearchLeaderboard searchHandler={this.searchHandler}/>
                <div className="leaderboards-title">All Players Picks</div>
                {slatesArray}
            </div>
        )
    }
}

export default LeaderboardsContainer










// state = {
    // players: [
    //     { username: "Jason", earnings: 550, wins: 17, winner: true }, 
    //     { username: "Jared", earnings: 0, wins: 4 },
    //     { username: "Joe", earnings: 0, wins: 0 }, 
    //     { username: "Vern", earnings: 0, wins: 1 },
    //     { username: "Jessica", earnings: 550, wins: 9, winner: true },
    //     { username: "Bonnie", earnings: 0, wins: 6 }
    // ]
// }

    // componentDidMount() {
    //     fetch("http://localhost:3000/api/v1/slates")
    //         .then(resp => resp.json())
    //         .then(data => console.log(data))
    // }


//     render () {
//         let winningPlayers = this.state.players.filter(player => player.winner)
//         let winningPlayersArray = winningPlayers.map(player => 
//             <tr>
//                 <td className="leaderboard-entry-winner">{player.username}</td>
//                 <td className="leaderboard-entry-winner">$ {player.earnings}</td>
//                 <td className="leaderboard-entry-winner">{player.wins}</td>
//             </tr>
//         )
//         let losingPlayers = this.state.players.filter(player => !player.winner)
//         let losingPlayersArray = losingPlayers.map(player =>
//             <tr>
//                 <td className="leaderboard-entry">{player.username}</td>
//                 <td className="leaderboard-entry">$ {player.earnings}</td>
//                 <td className="leaderboard-entry">{player.wins}</td>
//             </tr>
//         )

//         return (
//             <table className="leaderboard-table">
//                 <th className="leaderboard-header">Username</th>
//                 <th className="leaderboard-header">Total Earnings</th>
//                 <th className="leaderboard-header">Number of Wins</th>
//                {winningPlayersArray} 
//                {losingPlayersArray}
//             </table>
//         )
//     }
// }