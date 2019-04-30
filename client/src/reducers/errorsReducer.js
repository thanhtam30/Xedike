import * as Types from '../actions/types'
const initialState={};
export default (state=initialState,action)=>{
    switch (action.type) {
        case Types.GET_ERRORS:
            
            return action.payload
    
        default:
            return state
    }
}