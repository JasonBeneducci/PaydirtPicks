import React from 'react'
import BetTitle from './BetTitle'

class Game extends React.Component{
    state = {
        homeSelected: false,
        awaySelected: false
    }

    clickHandler = (event) => {
    this.handleDuplicates(event)
        if (event.target.id === "homeMoneyline") {
            this.setState({
                homeSelected: !this.state.homeSelected
            })
        } else if (event.target.id === "awayMoneyline") {
            this.setState({
                awaySelected: !this.state.awaySelected
            })
        }
    }

    handleDuplicates = (event) => {
        if(event.target.id === "homeMoneyline") {
            this.setState({
                awaySelected: false
            })
        } else if (event.target.id === "awayMoneyline") {
            this.setState({
                homeSelected: false
            })
        }
    }

    render () {
        return (
            <div className="game-container">
                <BetTitle />
                <div id="homeMoneyline" onClick={(event) => this.clickHandler(event)} className={this.state.homeSelected ? "game-item-moneyline-selected" : "game-item-moneyline" }>
                    Home Team:
                    (-100)
                </div>
                <div className="game-item-info">
                    Game Info Goes in this box
                </div>
                <div id="awayMoneyline" onClick={(event) => this.clickHandler(event)} className={this.state.awaySelected ? "game-item-moneyline-selected" : "game-item-moneyline"}>
                    Away Team:
                    (+300)
                </div>
            </div>

        )
    }
}

export default Game