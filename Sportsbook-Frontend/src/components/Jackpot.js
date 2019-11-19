import React from 'react'

const Jackpot = (props) => {
    return (
        <div className="jackpot-container">
            <div className="jackpot-value">
                    Current Jackpot: $ {props.value}
            </div>
        </div>
    )
}
export default Jackpot