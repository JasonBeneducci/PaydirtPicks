// set the initial state argument in reducer to have a jackpot value of 0 and pickedTeams is an empty array
function Reducer (state= {jackpot: 0, allSlates: []}, action) {
    switch(action.type){
        case "INCREASE_JACKPOT":
            return {
                ...state,
                jackpot: state.jackpot + 1
            }
        case "ADD_SLATES":
            return {
                ...state,
                allSlates: action.payload
            }
        default:
            return state
    }
}

export default Reducer