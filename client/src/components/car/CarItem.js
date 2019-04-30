import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {deleteCar} from '../../actions/carAction'
class CarItem extends Component {
  onDeleteClick(id){
    this.props.deleteCar(id); 
 }
 
  render() {
    
       
       
       const  car =  this.props && this.props.cars.length > 0 ?this.props.cars.map((car,index) => (   
          
          <tr key={index}>
                   <td>{index+1}</td>
               <td>{car.producer}</td>
               
               <td>
               <button
              onClick={this.onDeleteClick.bind(this, car._id)}
              className="btn btn-danger"
            >
              Delete
            </button>
               </td>
               <td>
                
                  <Link to={`/EditCar/${car._id}` } className="btn btn-danger" 
                  
                  >Edit</Link>
                
                
               </td>
             </tr>
           )):<tr/>
         
           
           
        return (
            <div>
            <Link  className="btn my-3 btn btn-danger " to='/AddCar' type='button'
            
            >
                <i className="fa fa-pencil-square-o" />
                ADD NEW CAR
            </Link>
            <table className="table" >
           <thead>
             <tr>
               <th scope="col">STT</th>
               <th scope="col">numberofSeats</th>
               <th scope="col">producer</th>
               <th scope="col"></th>
             </tr>
           </thead>
           <tbody>
           {car}
           </tbody>
           </table>
           
           
           </div>
        );
    }
}

export default connect(null,{deleteCar})(CarItem);