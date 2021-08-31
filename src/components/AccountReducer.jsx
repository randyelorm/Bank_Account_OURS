const intialState = {
    accounts: []
}

const AccountReducer = (state = intialState, action ) => {
    switch (action.type) {
        case "ADD_ACCOUNT":
            return {...state.accounts, accounts:[...state.accounts, action.payload]}
        
        default: 
        return state
    }
}


export default AccountReducer