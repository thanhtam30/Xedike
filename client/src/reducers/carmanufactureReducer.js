import * as Types from '../actions/types'
const inittialState={
    carmanufature:[],
    loading:false
}
export default (state=inittialState,action)=>{
    switch (action.type) {
        case Types.ADD_CARMANUFACTURER:
           return {
               ...state,
               carmanufature:[action.payload,...state.carmanufature]
           }
         case Types.GET_CARMANUFACTURER:
         return {
             ...state,
            carmanufature: action.payload,
            loading:false
         }  
         case Types.DELETE_CARMANUFACTURER:
         return {
          ...state,
          carmanufature: state.carmanufature.filter(carmanufature => carmanufature._id !== action.payload)
        };
      
        case Types.LOADING_CARMANUFACTURER:
        return{
            ...state,
            loading:true
        }
        
        default:
           return state;
    }
}