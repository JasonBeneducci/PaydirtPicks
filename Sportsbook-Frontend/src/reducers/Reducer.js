function Reducer (state= {
    pickedTeams: [],
    jackpot: 0
}, action) {
    switch(action.type){
        // case "ADD_TEAM":
        //     return {
        //         ...state,
        //         // pickedTeams: [...state.pickedTeams, action.team]
        //         pickedTeams: [...state.pickedTeams, "another team"]
        //     }
        case "INCREASE_JACKPOT":
            return {
                ...state,
                jackpot: state.jackpot + 1
            }
        default:
            return state
    }
}

export default Reducer