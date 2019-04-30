import * as Types from '../actions/types'
const inittialState={
    cars:[],
    loading:false
}
export default (state=inittialState,action)=>{
    switch (action.type) {
        case Types.ADD_CAR:
           return {
               ...state,
               cars:[action.payload,...state.cars]
           }
         case Types.GET_CAR:
         return {
             ...state,
            cars: action.payload,
            loading:false
         }  
         case Types.DELETE_CAR:
         return {
          ...state,
          cars: state.cars.filter(car => car._id !== action.payload)
        };
      
        case Types.LOADING_CAR:
        return{
            ...state,
            loading:true
        }
        
        default:
           return state;
    }
}