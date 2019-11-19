import React from 'react'

const BetTitle = (props) => {
    let gameMonth = props.time.split('').slice(5,7).join('')
    let gameYear = props.time.split('').slice(0,4).join('')
    let gameDay = props.time.split('').slice(8,10).join('')
    let gameTime = props.time.split('').slice(11,19).join('')

    return (
        <>
            <div className="pickem-game-info">
                {props.homeName} vs {props.awayName} 
            <div className="break"></div>
                {gameMonth + "/" + gameDay + "/" + gameYear}
            <div className="break"></div>
                {gameTime.split('').slice(0, 2).join('') < 12 ? gameTime.split('').slice(1, 2).join('') + ":00 PM" : gameTime.split('').slice(0, 2).join('') - 12 + ":00 PM"}
            </div>
        </>
    )
}

export default BetTitle