import React, { Component } from 'react';
import classnames from 'classnames';
import {connect} from 'react-redux';
import {addCar} from '../../actions/carAction'
import {getDriver} from '../../actions/driverAction'



class AddCar extends Component {
    constructor(props) {
        super(props);
        this.state={
            numberofSeats:'',
            manufaturingYear:'',        
            producer:'',
            licenseplate:'',  
            errors: {},
            driver:''
        }
    
    }
    componentDidMount() {
        this.props.getDriver();
      }
    onChange = e => {
        
       console.log(e.target.name)
       console.log(e.target.value)
               this.setState({ [e.target.name]: e.target.value });
          
          
      };
    onSubmit=e=>{
        e.preventDefault();
        const {numberofSeats,manufaturingYear,producer,licenseplate,driver}=this.state;
        // let formData = new FormData();

        // // formData.append('numberofSeats', numberofSeats);
        // formData.append('manufaturingYear', manufaturingYear);
        // //formData.append('carImage', carImage);
        // formData.append('producer', producer);
        // formData.append('licenseplate', licenseplate);
        // formData.append('driver', driver);
        // console.log(formData);
        const newCar={numberofSeats,manufaturingYear,producer,licenseplate,driver}
        console.log(newCar)
        this.props.addCar(newCar, this.props.history)
    }
    componentWillReceiveProps(nextProps) {
        if (nextProps.errors) {
          this.setState({
            errors: nextProps.errors
          });
        }
      }
    render() {
        const {errors}=this.state
        const {drivers}=this.props.driver
        const options=  this.props && this.props.driver.drivers.length > 0 ?this.props.driver.drivers.map((exp,index) => {
            console.log(exp)
            return <option value={exp._id} key={index}>{exp.fullName} + {index}</option>
        }):<option/>
      
          
        
        
        
        return (
            <div className='Add Car'>
                <div className='container'>
           
               
                    <div className='col-md-8 m-auto'>
                    <h1>ADD CAR</h1>
                    <br/>
                    <form noValidate onSubmit={this.onSubmit}>
                   
                   
                            <br/>
                            <div className='row'>
                                <div className='col-md-4'>
                                  <label>Driver</label>
                                </div>
                                <div className='col-md-8'>
                         <select 
                                value={this.state.driver }
                                 onChange={this.onChange}
                                 className='form-control'
                                 name="driver"
                                 >
                                 <option value=''>Ban cam chon tai xe</option>
                                 {options}
                            
                                 </select>                                
                                       
                                 
                                </div>
                            </div>
                            <br/>
                            <div className='row'>
                                <div className='col-md-4'>
                                  <label>Number of Seats:</label>
                                </div>
                                <div className='col-md-8'>
                                { <select value={this.state.numberofSeats} onChange={this.onChange} className='form-control' >
                                     <option value="">Chọn loại xe</option>
                                    <option value="16">16 chỗ</option>
                                    <option value="32">32 chỗ</option>
                                    <option value="49">49 chỗ</option>
                                    <option value="50">50 chỗ</option>
                                </select>  }
                                        
                                </div>
                            </div>
                            <br/>
                            <div className='row'>
                                <div className='col-md-4'>
                                  <label>manufaturingYear:</label>
                                </div>
                                <div className='col-md-8'>
                                    <input type='text'  
                                        name='manufaturingYear' onChange={this.onChange}
                                        value={this.state.manufaturingYear} 
                                        className={classnames("form-control", {
                                        'is-invalid': ''
                                    })}
                                    />
                               {/* {errors.manufaturingYear && (<div className='invalid-feedback'>{errors.manufaturingYear}</div>)} */}
                                    
                                </div>
                            </div>
                            <br/>
                           
                            <div className='row'>
                                <div className='col-md-4'>
                                  <label>Producer:</label>
                                </div>
                                <div className='col-md-8'>
                                    <input type='text'
                                        name='producer' onChange={this.onChange}
                                        value={this.state.producer} 
                                        className={classnames("form-control", {
                                        'is-invalid': ''
                                    })}
                                    />
                                
                                </div>
                            </div>
                            <br/>
                            <div className='row'>
                                <div className='col-md-4'>
                                  <label>Licenseplate:</label>
                                </div>
                                <div className='col-md-8'>
                                    <input type='text' 
                                        name='licenseplate' onChange={this.onChange}
                                        value={this.state.licenseplate} 
                                        className={classnames("form-control", {
                                        'is-invalid': ''
                                    })}
                                    />
                                       
                                </div>
                            </div>
                            <br/>
                          
                            <br/>
                            <button type="submit" className="btn btn-primary btn-lg btn-block">SAVE</button>

                    </form>
                           
                           
                           
                    </div>
                </div>
            </div>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        errors: state.errors,
        driver:state.driver
    }
}
export default connect(mapStateToProps,{addCar,getDriver})(AddCar);