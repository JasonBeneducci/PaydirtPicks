import React from 'react'

const BetTitle = (props) => {
    return (
        <>
            <div className="pickem-game-info">
                {props.homeName} vs {props.awayName} 
                    <div className="break"></div>
                <h4>November 14, 2019 3:00 pm ET</h4>
            </div>
        </>
    )
}

export default BetTitle