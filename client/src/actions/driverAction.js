import * as Types from './types'
import axios from 'axios'
export const adddriver=(driverdata,history)=>dispatch=>{
    
    axios
      .post('/api/driver/registerdriver', driverdata)
      
        .then(res => history.push('/Driver'))
      
      .catch(err =>
        dispatch({
          type: Types.GET_ERRORS,
          payload: err.response.data
        })
      );
}
export const getDriver = () => dispatch => {
  
  axios
    .get('/api/driver/alldriver')
    .then(res =>
      dispatch({
        type: Types.GET_DRIVER,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: Types.GET_DRIVER,
        payload: {}
      })
    );
};
export const deleteDriver = id=>dispatch => {
  if(window.confirm('Are tou source')){
    axios.delete(`/api/driver/${id}`).then(res=>{
      dispatch({
          type:Types.DELETE_DRIVER,
          payload:id
      })
   })
   .catch(err=>dispatch({
     type:Types.GET_ERRORS,
     payload:err.response.data
   }))
  }  
 };
 //get edit by handle
export const geteditDriver = id => dispatch => {
  
  axios
    .get(`/api/driver/editdriver/${id}`)
    .then(res =>
      dispatch({
        type: Types.GET_DRIVER,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: Types.GET_DRIVER,
        payload: null
      })
    );
};

// Create driver
export const posteditdriver = (id,driverdata, history) => dispatch => {
  axios
    .post(`/api/driver/editdriver/${id}`,driverdata)
    .then(res => history.push('/Driver'))
    .catch(err =>
      dispatch({
        type: Types.GET_ERRORS,
        payload:err.response.data
      })
    );
};
