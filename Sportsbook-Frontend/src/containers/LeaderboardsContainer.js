import React from 'react'

class LeaderboardsContainer extends React.Component {
    state ={
        players: [
            { username: "Jason", earnings: 550, wins: 17, winner: true }, 
            { username: "Jared", earnings: 0, wins: 4 },
            { username: "Joe", earnings: 0, wins: 0 }, 
            { username: "Vern", earnings: 0, wins: 1 },
            { username: "Jessica", earnings: 550, wins: 9, winner: true },
            { username: "Bonnie", earnings: 0, wins: 6 }
        ]

    }

    render () {
        let winningPlayers = this.state.players.filter(player => player.winner)
        let winningPlayersArray = winningPlayers.map(player => 
            <tr>
                <td className="leaderboard-entry-winner">{player.username}</td>
                <td className="leaderboard-entry-winner">$ {player.earnings}</td>
                <td className="leaderboard-entry-winner">{player.wins}</td>
            </tr>
        )
        let losingPlayers = this.state.players.filter(player => !player.winner)
        let losingPlayersArray = losingPlayers.map(player =>
            <tr>
                <td className="leaderboard-entry">{player.username}</td>
                <td className="leaderboard-entry">$ {player.earnings}</td>
                <td className="leaderboard-entry">{player.wins}</td>
            </tr>
        )

        return (
            <table className="leaderboard-table">
                <th className="leaderboard-header">Username</th>
                <th className="leaderboard-header">Total Earnings</th>
                <th className="leaderboard-header">Number of Wins</th>
               {winningPlayersArray} 
               {losingPlayersArray}
            </table>
        )
    }
}

export default LeaderboardsContainer