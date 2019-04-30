import React, { Component } from 'react';
import classnames from 'classnames';
import {connect} from 'react-redux'
import {geteditCar,posteditCar} from '../../actions/carAction'
import isEmpty from 'is-empty';
class EditCar extends Component {
    constructor(props) {
        super(props);
        this.state={
            numberofSeats:'',
            manufaturingYear:'',        
            producer:'',
            licenseplate:'',  
            errors: {},
            DriverId:''
        }
    }
    onChange=e=>{
        switch (e.target.name) {
            case 'numberofSeats':
              this.setState({ numberofSeats: e.target.value});
              
              break;
              case 'DriverId':
              this.setState({ DriverId: e.target.value});
              
              break;
            default:
              this.setState({ [e.target.name]: e.target.value });
          }
    }
    onSubmit=e=>{
        e.preventDefault();
     
          const {fullName,email,phone,address,DOB,IDcardnumber,driverImage}=this.state;
          let formData = new FormData();
  
          formData.append('fullName', fullName);
          formData.append('email', email);
          formData.append('phone', phone);
          formData.append('address', address);
          formData.append('DOB', DOB);
          formData.append('IDcardnumber', IDcardnumber);
          formData.append('driverImage', driverImage);
          
          this.props.postEditCar(this.props.match.params.id,formData, this.props.history);
    }
    componentDidMount(){
        if (this.props.match.params.id) {
            this.props.geteditCar(this.props.match.params.id);
          }
    }
    componentWillReceiveProps(nextProps) {
        if (nextProps.errors) {
            this.setState({ errors: nextProps.errors });
          }
        if(nextProps.driver.drivers){
            const driver=nextProps.driver.drivers;
            driver.fullName = !isEmpty(driver.fullName) ? driver.fullName : '';
            driver.email = !isEmpty(driver.email) ? driver.email : '';
            driver.phone = !isEmpty(driver.phone) ? driver.phone : '';
            driver.address = !isEmpty(driver.address) ? driver.address : '';
            driver.DOB = !isEmpty(driver.DOB) ? driver.DOB : '';
            driver.IDcardnumber = !isEmpty(driver.IDcardnumber) ? driver.IDcardnumber : '';
            this.setState({
                fullName:driver.fullName,
                email:driver.email,
                phone:driver.phone,
                address:driver.address,
                DOB:driver.DOB,
                IDcardnumber:driver.IDcardnumber,
            })
        }
      }
    render() {
        const { errors } = this.state;
      
        
        
        return (
            
            <div className='Driver'>
            <div className='container'>
                <div className='col-md-10 m-auto'>
                <h4 className="modal-title">
                EDIT CAR
                </h4>
                <br/>
                <form noValidate onSubmit={this.onSubmit}>
               
               
                        <br/>
                        <div className='row'>
                            <div className='col-md-4'>
                              <label>FullName:</label>
                            </div>
                            <div className='col-md-8'>
                                <input type='text'
                                    name='fullName' onChange={this.onChange}
                                    value={this.state.fullName} 
                                    className={classnames("form-control", {
                                    'is-invalid': errors.fullName
                                })}
                                />
                                   {errors.fullName && (<div className='invalid-feedback'>{errors.fullName}</div>)}
                            </div>
                        </div>
                        <br/>
                        <div className='row'>
                            <div className='col-md-4'>
                              <label>Image:</label>
                            </div>
                            <div className='col-md-8'>
                                <input type='file'
                                    name='driverImage' 
                                    onChange={this.onChange}
                                   
                                   className='form-control'
                                />
                                
                            </div>
                        </div>
                        
                        <br/>
                        <div className='row'>
                            <div className='col-md-4'>
                              <label>Email:</label>
                            </div>
                            <div className='col-md-8'>
                                <input type='text'  
                                    name='email' onChange={this.onChange}
                                    value={this.state.email} 
                                    className={classnames("form-control", {
                                    'is-invalid': errors.email 
                                })}
                                />
                                 {errors.email && (<div className='invalid-feedback'>{errors.email}</div>)}
                                
                            </div>
                        </div>
                        <br/>
                        <div className='row'>
                            <div className='col-md-4'>
                              <label>birthday:</label>
                            </div>
                            <div className='col-md-8'>
                           
                               <input type='date'  
                                    name='DOB' onChange={this.onChange}
                                   
                                    value={this.state.DOB} 
                                  
                                   className='form-control'
                                ></input>
                              
                            </div>
                        </div>
                        <br/>
                        <div className='row'>
                            <div className='col-md-4'>
                              <label>Address:</label>
                            </div>
                            <div className='col-md-8'>
                                <input type='text'
                                    name='address' onChange={this.onChange}
                                    value={this.state.address} 
                                    className={classnames("form-control", {
                                    'is-invalid': errors.address
                                })}
                                />
                                {errors.address && (<div className='invalid-feedback'>{errors.address}</div>)}
                            </div>
                        </div>
                        <br/>
                        <div className='row'>
                            <div className='col-md-4'>
                              <label>Phone:</label>
                            </div>
                            <div className='col-md-8'>
                                <input type='text' 
                                    name='phone' onChange={this.onChange}
                                    value={this.state.phone} 
                                    className={classnames("form-control", {
                                    'is-invalid': errors.phone 
                                })}
                                />
                                   {errors.phone && (<div className='invalid-feedback'>{errors.phone}</div>)}
                                   
                            </div>
                        </div>
                        <br/>
                        <div className='row'>
                            <div className='col-md-4'>
                              <label>IDcardnumber:</label>
                            </div>
                            <div className='col-md-8'>
                                <input type='text' 
                                    name='IDcardnumber' onChange={this.onChange}
                                    value={this.state.IDcardnumber} 
                                    className={classnames("form-control", {
                                    'is-invalid': errors.IDcardnumber 
                                })}
                                />
                                   {errors.IDcardnumber && (<div className='invalid-feedback'>{errors.IDcardnumber}</div>)}
                                   
                            </div>
                        </div>
                        <br/>
                      
                        <br/>
                 
                <button type="submit" className="btn btn-danger">Sua Task</button>

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
export default connect(mapStateToProps,{geteditCar,posteditCar})(EditCar);