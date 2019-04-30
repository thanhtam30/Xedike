import * as Types from './types'
import axios from 'axios'
export const addCarmanufature=(carmanufaturedata,history)=>dispatch=>{
    
    axios
      .post('/api/carmanufature/newcarmanufature', carmanufaturedata)
      .then(res => history.push('/ListCarmanufacturer'))
      .catch(err =>
        dispatch({
          type: Types.GET_ERRORS,
          payload: err.response.data
        })
      );
}
///////
export const listCarmanufature=()=>dispatch=>{
  axios.get('/api/carmanufature/allcarmanufacturer').then(res=>dispatch({
      type:Types.GET_CARMANUFACTURER,
      payload:res.data
  })).catch(err=>dispatch({
    type:Types.GET_CARMANUFACTURER,
    payload:null
  }))
}

///
export const deleteCarmanufature = id=>dispatch => {
  if(window.confirm('Are tou source')){
    axios.delete(`/api/carmanufature/${id}`).then(res=>{
      dispatch({
          type:Types.DELETE_CARMANUFACTURER,
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
 export const geteditCarmanufature = id => dispatch => {
  
  axios
    .get(`/api/carmanufature/editcarmanufature/${id}`)
    .then(res =>
      dispatch({
        type: Types.GET_CARMANUFACTURER,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: Types.GET_CARMANUFACTURER,
        payload: null
      })
    );
};

// UpDate Car
export const posteditCarmanufature = (id,carmanufaturedata, history) => dispatch => {
  axios
    .post(`/api/carmanufature/editcarmanufature/${id}`,carmanufaturedata)
    .then(res => history.push('/ListCarmanufacturer'))
    .catch(err =>
      dispatch({
        type: Types.GET_ERRORS,
        payload:err.response.data
      })
    );
};
///////