import React from 'react'

const GameInfo = (props) => {
    // Takes the props passed down and displays the title for every game that a user has to pick. Team Names, Team records and time
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

export default GameInfo

