import React, { Component } from 'react';
import classnames from 'classnames';
import {connect} from 'react-redux';
import {SignupUser} from '../../actions/userAction'
class Register extends Component {
    constructor(props) {
        super(props);
        this.state={
            email:'',
            password:'',
            fullName:'',
            phone:'',
            DOB:'',  
            errors: {}
        }
    
    }
    onChange = e => {
        this.setState({ [e.target.name]: e.target.value });
      };
    onSubmit=e=>{
        e.preventDefault();
        const newUser={
            email:this.state.email,
            password:this.state.password,
            fullName:this.state.fullName,
            phone:this.state.phone,
            DOB:this.state.DOB
        }
        
        this.props.SignupUser(newUser,this.props.history)
        
        
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
        return (
            <div className='SignUp'>
                <div className='container'>
                    <div className='col-md-8 m-auto'>
                    <h1>Sign Up</h1>
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
                                  <label>Email:</label>
                                </div>
                                <div className='col-md-8'>
                                    <input type='text'  
                                        name='email' onChange={this.onChange}
                                        value={this.state.email} 
                                        className={classnames("form-control", {
                                        'is-invalid': errors.email ||errors.nouser
                                    })}
                                    />
                                     {errors.email && (<div className='invalid-feedback'>{errors.email}</div>)}
                                     {errors.nouser && (<div className='invalid-feedback'>{errors.nouser}</div>)}
                                </div>
                            </div>
                            <br/>
                            <div className='row'>
                                <div className='col-md-4'>
                                  <label>Ngày sinh:</label>
                                </div>
                                <div className='col-md-8'>
                                    <input type='date'  
                                        name='DOB' onChange={this.onChange}
                                        value={this.state.DOB} 
                                       className='form-control'
                                    />
                                </div>
                            </div>
                            <br/>
                            <div className='row'>
                                <div className='col-md-4'>
                                  <label>PassWord:</label>
                                </div>
                                <div className='col-md-8'>
                                    <input type='password'
                                        name='password' onChange={this.onChange}
                                        value={this.state.password} 
                                        className={classnames("form-control", {
                                        'is-invalid': errors.password
                                    })}
                                    />
                                    {errors.password && (<div className='invalid-feedback'>{errors.password}</div>)}
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
                                        'is-invalid': errors.phone ||errors.nouser
                                    })}
                                    />
                                       {errors.phone && (<div className='invalid-feedback'>{errors.phone}</div>)}
                                       {errors.nouser && (<div className='invalid-feedback'>{errors.nouser}</div>)}
                                </div>
                            </div>
                            <br/>
                          
                            <br/>
                            <button type="submit" className="btn btn-primary btn-lg btn-block">Sign UP</button>

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
export default connect(mapStateToProps,{SignupUser})(Register);