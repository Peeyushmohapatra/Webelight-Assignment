export const reducer = (state={repoArr:[]},action) => {
    if(action.type === "github_repositories"){
        return {
            ...state,
            repoArr:action.payload
        }
    }
    return state
}