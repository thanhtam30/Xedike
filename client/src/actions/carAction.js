import * as Types from './types'
import axios from 'axios'
export const addCar=(cardata)=>dispatch=>{
    
    axios
      .post('/api/car', cardata)
      .then(res =>
        dispatch({
          type: Types.ADD_CAR,
          payload: res.data
        })
      )
      .catch(err =>
        dispatch({
          type: Types.GET_ERRORS,
          payload: err.response.data
        })
      );
}
///////
export const listCar=()=>dispatch=>{
  axios.get('/api/car').then(res=>dispatch({
      type:Types.GET_CAR,
      payload:res.data
  })).catch(err=>dispatch({
    type:Types.GET_CAR,
    payload:null
  }))
}

///
export const deleteCar = id=>dispatch => {
  if(window.confirm('Are tou source')){
    axios.delete(`/api/car/${id}`).then(res=>{
      dispatch({
          type:Types.DELETE_CAR,
          payload:id
      })
   })
   .catch(err=>dispatch({
     type:Types.GET_ERRORS,
     payload:err.response.data
   }))
  }  
 };

///
 //get edit by car
 export const geteditCar = id => dispatch => {
  
  axios
    .get(`/api/car/editcar/${id}`)
    .then(res =>
      dispatch({
        type: Types.GET_CAR,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: Types.GET_CAR,
        payload: null
      })
    );
};

// UpDate Car
export const posteditCar = (id,cardata, history) => dispatch => {
  axios
    .post(`/api/car/editcar/${id}`,cardata)
    .then(res => history.push('/Car'))
    .catch(err =>
      dispatch({
        type: Types.GET_ERRORS,
        payload:err.response.data
      })
    );
};
///////