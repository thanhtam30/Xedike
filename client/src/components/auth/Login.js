import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { loginUser } from "../../actions/userAction";
import classnames from "classnames";

class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      errors: {}
    };
  }



 
  componentDidMount() {
    if (this.props.users.isAuthenticated) {
      this.props.history.push('/');
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.users.isAuthenticated) {
      this.props.history.push('/');
    }

    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();

    const userData = {
      email: this.state.email,
      password: this.state.password
    };

    this.props.loginUser(userData);
  };

  render() {
    const { errors } = this.state;

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
                          <label>Email:</label>
                        </div>
                        <div className='col-md-8'>
                            <input type='text'  
                                name='email' onChange={this.onChange}
                                value={this.state.email} 
                                className={classnames("form-control", {
                                'is-invalid': errors.email ||errors.emailnotfound
                            })}
                            />
                             {errors.email && (<div className='invalid-feedback'>{errors.email}</div>)}
                             {errors.emailnotfound && (<div className='invalid-feedback'>{errors.emailnotfound}</div>)}
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
                                'is-invalid': errors.password ||errors.passwordnotfound
                            })}
                            />
                            {errors.password && (<div className='invalid-feedback'>{errors.password}</div>)}
                            {errors.passwordnotfound && (<div className='invalid-feedback'>{errors.passwordnotfound}</div>)}
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

Login.propTypes = {
  loginUser: PropTypes.func.isRequired,
  users: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  users: state.users,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { loginUser }
)(Login);
