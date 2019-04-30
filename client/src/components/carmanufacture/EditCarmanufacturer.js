import React, { Component } from 'react';
import classnames from 'classnames';
import {connect} from 'react-redux'
import {geteditCarmanufature,posteditCarmanufature} from '../../actions/carmanufactureAction';
import isEmpty from 'is-empty';
class EditCarmanufacturer extends Component {
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
    componentDidMount(){
      if (this.props.match.params.id) {
          this.props.geteditCarmanufature(this.props.match.params.id);
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
        
        this.props.posteditCarmanufature(this.props.match.params.id,formData, this.props.history);
        
    }
    componentWillReceiveProps(nextProps) {
        if (nextProps.errors) {
          this.setState({
            errors: nextProps.errors
          });
        }
        if(nextProps.carmanufature.carmanufature){
          const carmanufature=nextProps.carmanufature.carmanufature;
          carmanufature.name = !isEmpty(carmanufature.name) ? carmanufature.name : '';
          carmanufature.email = !isEmpty(carmanufature.email) ? carmanufature.email : '';
          carmanufature.phone = !isEmpty(carmanufature.phone) ? carmanufature.phone : '';
          carmanufature.address = !isEmpty(carmanufature.address) ? carmanufature.address : '';
          carmanufature.logo = !isEmpty(carmanufature.logo) ? carmanufature.logo : '';
       
          this.setState({
              name:carmanufature.name,
              email:carmanufature.email,
              phone:carmanufature.phone,
              address:carmanufature.address,
           
              logo:carmanufature.logo,
            
          })
      }
      }
    render() {
        const {errors}=this.state;
        let {logo} = this.state;
        let $imagePreview = null;
        if (logo) {
          $imagePreview = (<img src={`./upload/Carmanufacturer/${logo}`}  width='200px' height='200px'/>);
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
                                    'is-invalid': errors.name
                                })}
                                />
                                   {errors.name && (<div className='invalid-feedback'>{errors.name}</div>)}
                            </div>
                        </div>
                        <br/>
                        <div className='row'>
                            <div className='col-md-4'>
                              <label>Upload Logo:</label>
                            </div>
                            <div className='col-md-8'>
                                <input type='file'
                                    name='driverImage' 
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
        errors: state.errors,
        carmanufature:state.carmanufature
    }
}
export default connect(mapStateToProps,{geteditCarmanufature,posteditCarmanufature})(EditCarmanufacturer);