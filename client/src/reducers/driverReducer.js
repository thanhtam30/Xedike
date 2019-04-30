import * as Types from '../actions/types'
const inittialState={
    drivers:[],
    loading:false
}
export default (state=inittialState,action)=>{
    switch (action.type) {
        case Types.ADD_DRIVER:
            
           return {
               ...state,
               drivers:[action.payload,...state.drivers]
           }
         case Types.GET_DRIVER:
         return {
             ...state,
            drivers: action.payload,
            loading:false
         }  
         case Types.DELETE_DRIVER:
         return {
          ...state,
          drivers: state.drivers.filter(driver => driver._id !== action.payload)
        };
      
        case Types.LOADING_DRIVER:
        return{
            ...state,
            loading:true
        }
        
        default:
           return state;
    }
}