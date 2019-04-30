import React, { Component } from 'react';
import classnames from 'classnames';
import {connect} from 'react-redux'
import {addCarmanufature} from '../../actions/carmanufactureAction';

class AddCarmanufacturer extends Component {
    constructor(props) {
        super(props);
        this.state={
            name:'',
            email:'',
            phone:'',
            address:'',
            logo:'',
            errors:{}
        }
    }
 
    onChange = (e) => {
       
            this.setState({ [e.target.name]: e.target.value });
        
      }
      handleImageChange(e) {
        e.preventDefault();
    
        let reader = new FileReader();
        let file = e.target.files[0];
    
        reader.onloadend = () => {
          this.setState({
            logo: file,
            imagePreviewUrl: reader.result
          });
        }
    
        reader.readAsDataURL(file)
      }
    onSubmit=e=>{
        e.preventDefault();
         const {name,email,phone,address,logo}=this.state;
       let formData = new FormData();

        formData.append('name', name);
        formData.append('email', email);
        formData.append('phone', phone);
        formData.append('address', address);
        formData.append('logo', logo);
       
        console.log(formData);
        
this.props.addCarmanufature(formData, this.props.history)
        
    }
    componentWillReceiveProps(nextProps) {
        if (nextProps.errors) {
          this.setState({
            errors: nextProps.errors
          });
        }
      }
    render() {
        const {errors}=this.state;
        let {imagePreviewUrl} = this.state;
        let $imagePreview = null;
        if (imagePreviewUrl) {
          $imagePreview = (<img src={imagePreviewUrl} width='200px' height='200px'/>);
        } else {
          $imagePreview = (<div className="previewText">Please select an Image for Preview</div>);
        }
        return (
            <div className='Driver'>
            <div className='container'>
                <div className='col-md-10 m-auto'>
                <h1>Carmanufacturer</h1>
                <br/>
                <form noValidate onSubmit={this.onSubmit}>
               
               
                        <br/>
                        <div className='row'>
                            <div className='col-md-4'>
                              <label>Name:</label>
                            </div>
                            <div className='col-md-8'>
                                <input type='text'
                                    name='name' onChange={this.onChange}
                                    value={this.state.name} 
                                    className={classnames("form-control", {
                                    'is-invalid': errors.name ||errors.noname
                                })}
                                />
                                   {errors.name && (<div className='invalid-feedback'>{errors.name}</div>)}
                                   {errors.noname && (<div className='invalid-feedback'>{errors.noname}</div>)}
                            </div>
                        </div>
                        <br/>
                        <div className='row'>
                            <div className='col-md-4'>
                              <label>Upload Logo:</label>
                            </div>
                            <div className='col-md-8'>
                                <input type='file'
                                    name='logo' 
                                    onChange={(e)=>this.handleImageChange(e)}
                                   
                                   className='form-control'
                                />
                                
                            </div>
                           
                        </div>
                        <div className='row'>
                            <div className='col-md-4'>Logo</div>
                            <div className='col-md-8'> 
                           
                            {$imagePreview}
                            
                            </div>
                        </div>
                        <br/>
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
                        <button type="submit" className="btn btn-primary btn-lg btn-block">Save</button>

                </form>
                       
                       
                       
                </div>
            </div>
        </div>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        errors: state.errors
    }
}
export default connect(mapStateToProps,{addCarmanufature})(AddCarmanufacturer);