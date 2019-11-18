import React from 'react'
import Game from '../components/Game'

class GamesList extends React.Component {

    render () {
        return (
            <div className="games-list">
                <Game />
            </div>
        )
    }
}

export default GamesList