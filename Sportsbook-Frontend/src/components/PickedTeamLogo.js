import React from 'react'

const PickedTeamLogo = (props) => {
    return (
        <>
            <img onClick={(event) => props.clickHandler(event.target.src)} className= 'picked-team-logo' src={props.logo} alt=""></img>
        </>
    )
}

export default PickedTeamLogo