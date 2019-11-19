import React from 'react'

const Jackpot = (props) => {
    return (
        <div className="jackpot-container">
            <div className="jackpot-value">
                {/* <p className="jackpot-text">Current Jackpot: </p> */}
                    Current Jackpot: {props.value}
            </div>
        </div>
    )
}
export default Jackpot