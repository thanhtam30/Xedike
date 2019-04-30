import React, { Component } from 'react';
import {deleteDriver,UpdateIsAddNewTask} from '../../actions/driverAction'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
class DriverItem extends Component {
    onDeleteClick(id){
       this.props.deleteDriver(id); 
    }
  
  render() {
    let driveritem =  this.props && this.props.drivers.length > 0 ?this.props.drivers.map((exp,index) => (   
       <tr key={index}>
              <td>{index+1}</td>
          <td>{exp.fullName}</td>
         
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
          
             <Link to={`/EditDriver/${exp._id}`} 
             className="btn btn-danger"
             >Edit</Link>
           
           
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
      {driveritem}
      </tbody>
      </table>
      
      
      </div>
     
      
    );
  }
}


export default connect(null,{deleteDriver})(DriverItem);
