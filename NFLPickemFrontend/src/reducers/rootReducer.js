// set the initial state argument in reducer to have a jackpot value of 0 and pickedTeams is an empty array
function rootReducer (state= {jackpot: 0, balance: 100, allSlates: []}, action) {
    switch(action.type){
        case "INCREASE_JACKPOT":
            return {
                ...state,
                jackpot: state.jackpot + 1
            }
        case "DECREASE_BALANCE":
            return {
                ...state,
                balance: state.balance - 1
            }
        case "ADD_SLATES":
            return {
                ...state,
                allSlates: action.payload
            }
        case "START_FETCHING_JACKPOT_REQUEST":
            return {
                ...state,
                jackpot: state.jackpot
            }
        case "SET_JACKPOT":
            return {
                ...state,
                jackpot: action.jackpot
            }
        default:
            return state
    }
}

export default rootReducer