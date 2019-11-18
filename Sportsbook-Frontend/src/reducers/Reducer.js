function Reducer (state= {
    pickedTeams: []
}, action) {
    switch(action.type){
        case "ADD_TEAM":
            return {
                ...state,
                // pickedTeams: [...state.pickedTeams, action.team]
                pickedTeams: [...state.pickedTeams, "another team"]
            }
        default:
            return state
    }
}

export default Reducer