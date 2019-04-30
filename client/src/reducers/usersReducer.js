import isEmpty from 'is-empty';
import * as Types from '../actions/types';
const initialState={
    isAuthenticated:false,
    user:{},
    loading:false
}
export default (state=initialState,action)=>{
    switch (action.type) {
      case Types.SET_CURRENT_USER:
      return{
          ...state,
          isAuthenticated:!isEmpty(action.payload),
          user:action.payload
      }
   
        case Types.USER_LOADING:
        return{
            ...state,
            loading:true
        }    
    
        default:
            return state
    }
}