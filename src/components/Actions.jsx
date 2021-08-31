
export const addAccount =(each_account)=> {
    each_account.id = Math.random().toString()
    return {
        type: "ADD_ACCOUNT",
        payload: each_account
    }

}