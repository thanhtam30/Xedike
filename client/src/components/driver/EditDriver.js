import React, { Component } from 'react';
import classnames from 'classnames';
import {connect} from 'react-redux'
import {geteditDriver,posteditdriver} from '../../actions/driverAction'
import isEmpty from 'is-empty';
import DayPickerInput from 'react-day-picker/DayPickerInput';
import 'react-day-picker/lib/style.css';

import MomentLocaleUtils, {
  formatDate,
  parseDate,
} from 'react-day-picker/moment';

import 'moment/locale/it';

class EditDriver extends Component {
    constructor(props) {
        super(props);
        this.state={
            fullName:'',
            email:'',
            phone:'',
            address:'',
            DOB:'',
            IDcardnumber:'',
            driverImage:'',
            Leveltimeidentitycard:'',
            Issuedbyidentitycard:'',
            driverlicensenumber:'',
            Driverslicense:'',
            Driverslicensetime:'',
            License:'',
            experience:'',
            errors:{}
        }
    }
   
    onChange=e=>{
       
              this.setState({ [e.target.name]: e.target.value });
        
    }
    onSubmit=e=>{
        e.preventDefault();
     
        const {fullName,email,phone,address,DOB,IDcardnumber,Leveltimeidentitycard,driverImage
            ,Issuedbyidentitycard,driverlicensenumber,Driverslicense,Driverslicensetime,
            License,experience}=this.state;
            let formData = new FormData();

            formData.append('fullName', fullName);
            formData.append('email', email);
            formData.append('phone', phone);
            formData.append('address', address);
            formData.append('DOB', DOB);
            formData.append('IDcardnumber', IDcardnumber);
            formData.append('driverImage', driverImage);
            formData.append('Leveltimeidentitycard', Leveltimeidentitycard);
            formData.append('Issuedbyidentitycard', Issuedbyidentitycard);
            formData.append('driverlicensenumber', driverlicensenumber)
            formData.append('Driverslicense', Driverslicense);
            formData.append('Driverslicensetime', Driverslicensetime);
            formData.append('License', License);
            formData.append('experience', experience);
          
          this.props.posteditdriver(this.props.match.params.id,formData, this.props.history);
    }
    componentDidMount(){
        if (this.props.match.params.id) {
            this.props.geteditDriver(this.props.match.params.id);
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
            driver.Leveltimeidentitycard = !isEmpty(driver.Leveltimeidentitycard) ? driver.Leveltimeidentitycard : '';
            driver.Issuedbyidentitycard = !isEmpty(driver.Issuedbyidentitycard) ? driver.Issuedbyidentitycard : '';
            driver.driverlicensenumber = !isEmpty(driver.driverlicensenumber) ? driver.driverlicensenumber : '';
            driver.Driverslicense = !isEmpty(driver.Driverslicense) ? driver.Driverslicense : '';
            driver.Driverslicensetime = !isEmpty(driver.Driverslicensetime) ? driver.Driverslicensetime : '';
            driver.License = !isEmpty(driver.License) ? driver.License : '';
            driver.experience = !isEmpty(driver.experience) ? driver.experience : '';
            this.setState({
                fullName:driver.fullName,
                email:driver.email,
                phone:driver.phone,
                address:driver.address,
                DOB:driver.DOB,
                driverImage:driver.driverImage,
                IDcardnumber:driver.IDcardnumber,
                Leveltimeidentitycard:driver.Leveltimeidentitycard,
                Issuedbyidentitycard:driver.Issuedbyidentitycard,
                driverlicensenumber:driver.driverlicensenumber,
                Driverslicense:driver.Driverslicense,
                Driverslicensetime:driver.Driverslicensetime,
                License:driver.License,
                experience:driver.experience
            })
        }
      }
      handleImageChange(e) {
        e.preventDefault();
    
        let reader = new FileReader();
        let file = e.target.files[0];
    
        reader.onloadend = () => {
          this.setState({
            driverImage: file,
            driverImage: reader.result
          });
        }
    
        reader.readAsDataURL(file)
      }
    render() {
        const { errors } = this.state;
        
        let {driverImage} = this.state;
        let $imagePreview = null;
        if (driverImage) {
          $imagePreview = (<img src={driverImage} width='200px' height='200px'/>);
        } else {
          $imagePreview = (<div className="previewText">Please select an Image for Preview</div>);
        }
        
        
        
        return (
            
            <div className='Driver'>
            <div className='container'>
                <div className='col-md-10 m-auto'>
                <h4 className="modal-title">
                 EDIT DRIVER
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
                                    onChange={(e)=>this.handleImageChange(e)}
                                   
                                   className='form-control'
                                />
                                
                            </div>
                        </div>
                        
                        <br/>
                        <div className='row'>
                            <div className='col-md-4'>Image</div>
                            <div className='col-md-8'> 
                           
                            {$imagePreview}
                            
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
                           
                            <DayPickerInput value={this.state.DOB} name='DOB' onChange={this.onChange}
        formatDate={formatDate}
        parseDate={parseDate}
        placeholder={`${formatDate(new Date())}`}
      />
                              
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
                        <div className='row'>
                            <div className='col-md-4'>
                              <label>Level time identitycard:</label>
                            </div>
                            <div className='col-md-8'>
                                <input type='date' 
                                    name='Leveltimeidentitycard' onChange={this.onChange}
                                    value={this.state.Leveltimeidentitycard} 
                                    className={classnames("form-control", {
                                    'is-invalid': errors.Leveltimeidentitycard 
                                })}
                                />
                                   {errors.Leveltimeidentitycard && (<div className='invalid-feedback'>{errors.Leveltimeidentitycard}</div>)}
                                   
                            </div>
                        </div>
                        <br/>
                        <div className='row'>
                            <div className='col-md-4'>
                              <label>Place of issuance of identity card</label>
                            </div>
                            <div className='col-md-8'>
                                <input type='text' 
                                    name='Issuedbyidentitycard' onChange={this.onChange}
                                    value={this.state.Issuedbyidentitycard} 
                                    className={classnames("form-control", {
                                    'is-invalid': errors.Issuedbyidentitycard 
                                })}
                                />
                                   {errors.Issuedbyidentitycard && (<div className='invalid-feedback'>{errors.Issuedbyidentitycard}</div>)}
                                   
                            </div>
                        </div>
                        <br/>
                        <div className='row'>
                            <div className='col-md-4'>
                              <label>Driver's license number</label>
                            </div>
                            <div className='col-md-8'>
                                <input type='text' 
                                    name='driverlicensenumber' onChange={this.onChange}
                                    value={this.state.driverlicensenumber} 
                                    className={classnames("form-control", {
                                    'is-invalid': errors.driverlicensenumber 
                                })}
                                />
                                   {errors.driverlicensenumber && (<div className='invalid-feedback'>{errors.driverlicensenumber}</div>)}
                                   
                            </div>
                        </div>
                        <br/>
                        <div className='row'>
                            <div className='col-md-4'>
                              <label>Driving license</label>
                            </div>
                            <div className='col-md-8'>
                                <input type='text' 
                                    name='Driverslicense' onChange={this.onChange}
                                    value={this.state.Driverslicense} 
                                    className={classnames("form-control", {
                                    'is-invalid': errors.Driverslicense 
                                })}
                                />
                                   {errors.Driverslicense && (<div className='invalid-feedback'>{errors.Driverslicense}</div>)}
                                   
                            </div>
                        </div>
                        <br/>
                        <div className='row'>
                            <div className='col-md-4'>
                              <label>Driver licensing time</label>
                            </div>
                            <div className='col-md-8'>
                                <input type='date' 
                                    name='Driverslicensetime' onChange={this.onChange}
                                    value={this.state.Driverslicensetime} 
                                    className={classnames("form-control", {
                                     'is-invalid': errors.Driverslicensetime 
                                })}
                                />
                                   {errors.Driverslicensetime && (<div className='invalid-feedback'>{errors.Driverslicensetime}</div>)}
                                   
                            </div>
                            
                        </div>
                        <br/>
                        <div className='row'>
                            <div className='col-md-4'>
                              <label>License</label>
                            </div>
                            <div className='col-md-8'>
                                <input type='text' 
                                    name='License' onChange={this.onChange}
                                    value={this.state.License} 
                                    className={classnames("form-control", {
                                    'is-invalid': errors.License 
                                })}
                                />
                                   {errors.License && (<div className='invalid-feedback'>{errors.License}</div>)}
                                   
                            </div>
                            
                        </div>
                        <br/>
                        <div className='row'>
                            <div className='col-md-4'>
                              <label>experience</label>
                            </div>
                            <div className='col-md-8'>
                                <input type='text' 
                                    name='experience' onChange={this.onChange}
                                    value={this.state.experience} 
                                    className={classnames("form-control", {
                                    'is-invalid': errors.experience 
                                })}
                                />
                                   {errors.experience && (<div className='invalid-feedback'>{errors.experience}</div>)}
                                   
                            </div>
                            
                        </div>
                        <br/>
                 
                <button type="submit" className="btn btn-danger">SAVE</button>

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
export default connect(mapStateToProps,{geteditDriver,posteditdriver})(EditDriver);