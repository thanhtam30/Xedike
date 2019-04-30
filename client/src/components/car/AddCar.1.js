import React, { Component } from 'react';
import classnames from 'classnames';
import {connect} from 'react-redux';
import {addCar} from '../../actions/carAction'
import {getDriver} from '../../actions/driverAction'


class AddCar extends Component {
    constructor(props) {
        super(props);
        this.state={
            // numberofSeats:'16',
            manufaturingYear:'',        
            producer:'',
            licenseplate:'',  
            errors: {},
            DriverId:''
        }
    
    }
    componentDidMount() {
        this.props.getDriver();
      }
    onChange = e => {
        switch (e.target.name) {
            // case 'numberofSeats':
            //   this.setState({ numberofSeats: e.target.value});
              
            //   break;
              case 'DriverId':
              this.setState({ DriverId: e.target.value});
              
              break;
            default:
              this.setState({ [e.target.name]: e.target.value });
          }
      };
    onSubmit=e=>{
        e.preventDefault();
        const {numberofSeats,manufaturingYear,producer,licenseplate,DriverId}=this.state;
        let formData = new FormData();

        // formData.append('numberofSeats', numberofSeats);
        formData.append('manufaturingYear', manufaturingYear);
        //formData.append('carImage', carImage);
        formData.append('producer', producer);
        formData.append('licenseplate', licenseplate);
        formData.append('DriverId', DriverId);
        console.log(formData);
        
        this.props.addCar(formData, this.props.history)
        
      
        
       
       
        
        
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
        const options=  this.props && this.props.driver.drivers.length > 0 ?this.props.driver.drivers.map((exp,index) => (   
            <option value={exp._id} key={index}>{exp.fullName}</option>

           )):<option/>
      
        console.log(options);
        
        
        
        return (
            <div className='SignUp'>
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
                                value={this.state.DriverId}
                                onChange={this.onChange}
                                className='form-control'
                                >
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
                                {/* <select value={this.state.numberofSeats} onChange={this.onChange} className='form-control'>
                                    <option value="16">16 chỗ</option>
                                    <option value="32">32 chỗ</option>
                                    <option value="49">49 chỗ</option>
                                    <option value="50">50 chỗ</option>
                                </select> } */}
                                        {/* {errors.numberofSeats && (<div className='invalid-feedback'>{errors.numberofSeats}</div>)} */}
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