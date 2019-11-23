import React from 'react'

const BetTitle = (props) => {
    return (
        <>
            <div className="pickem-game-info">
                {props.awayName} at {props.homeName}
                <div className="break"></div>
                <div className="game-time">
                    {props.time}
                </div>
            </div>
        </>
    )
}

export default BetTitle

