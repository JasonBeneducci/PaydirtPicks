import React from 'react'

const BetTitle = (props) => {
    return (
        <>
            <div className="pickem-game-info">
                {props.awayName}{" "}({props.homeRecord}) at {props.homeName}{" "}({props.awayRecord})
                <div className="break"></div>
                <div className="game-time">
                    {props.time}
                </div>
            </div>
        </>
    )
}

export default BetTitle

