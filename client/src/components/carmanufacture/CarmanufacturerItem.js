import React, { Component } from 'react';
import {deleteCarmanufature} from '../../actions/carmanufactureAction'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
class CarmanufacturerItem extends Component {
    onDeleteClick(id){
       this.props.deleteCarmanufature(id)
        
    }
  
  render() {
    let carmanufateritem =  this.props && this.props.carmanufature.length > 0 ?this.props.carmanufature.map((exp,index) => (
       <tr key={index}>
       
          <td>{exp.name}</td>
          <td>{exp.email}</td>
          <td>
            <button
              onClick={this.onDeleteClick.bind(this, exp._id)}
              className="btn btn-danger"
            >
              Delete
            </button>
          </td>
          <td>
            <button
              className="btn btn-danger"
            >
             <Link to={`/EditCarmanufacturer/${exp._id}`} 
             
             >Edit</Link>
           
            </button>
          </td>
        </tr>
      )):<tr/>
  
    
    return (
     <div>
       <table className="table" >
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">First</th>
          <th scope="col">Last</th>
          <th scope="col">Handle</th>
        </tr>
      </thead>
      <tbody>
      {carmanufateritem}
      </tbody>
      </table>
      
      
      </div>
     
      
    );
  }
}


export default connect(null,{deleteCarmanufature})(CarmanufacturerItem);
