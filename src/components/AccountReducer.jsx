const intialState = {
    accounts: []
}

const AccountReducer = (state = intialState, action ) => {
    switch (action.type) {
        case "ADD_ACCOUNT":
            return {...state.accounts, accounts:[...state.accounts, action.payload]}

            case "EDIT_ACCOUNT":

            const updatedAccounts = state.accounts.map (
                    
                    (each_account)=> {
                  
                          if (each_account.id === action.id) {
                              return {...each_account, ...action.updatedAccount}
                          } else {
                              return each_account
                          }  

                        
                          
                    }
                    
                )    
                    console.log(updatedAccounts)
                   return {...state, accounts: updatedAccounts}
             

                  
                   case "DELETE_ACCOUNT":
                    console.log(action.payload)
                    let notDeletedAccounts = state.accounts.filter(
                        (each_item_in_array)=> {
                            return each_item_in_array.id !== action.payload
                        })
            
                        return {accounts: notDeletedAccounts}

        default: 
        return state
    }
}


export default AccountReducer