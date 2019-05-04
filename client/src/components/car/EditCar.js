import React, { Component } from 'react';
import classnames from 'classnames';
import {connect} from 'react-redux'
import {geteditCar,posteditCar} from '../../actions/carAction'
import isEmpty from 'is-empty';
import {getDriver} from '../../actions/driverAction'



class EditDriver extends Component {
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
   
    onChange=e=>{
       
              this.setState({ [e.target.name]: e.target.value });
        
    }
    onSubmit=e=>{
        e.preventDefault();
     
        const {numberofSeats,manufaturingYear,producer,licenseplate,driver}=this.state;
            const EditCar=({
                numberofSeats,manufaturingYear,producer,licenseplate,driver

            })
          this.props.posteditCar(this.props.match.params.id, EditCar,this.props.history);
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
        if(nextProps.car.cars){
            const car=nextProps.car.cars;
          console.log(car);
          
            car.driver = !isEmpty(car.driver) ? car.driver : '';
            car.numberofSeats = !isEmpty(car.numberofSeats) ? car.numberofSeats : '';
            car.manufaturingYear = !isEmpty(car.manufaturingYear) ? car.manufaturingYear : '';
            car.producer = !isEmpty(car.producer) ? car.producer : '';
            car.licenseplate = !isEmpty(car.licenseplate) ? car.licenseplate : '';
            this.setState({
                numberofSeats:car.numberofSeats,
                driver:car.driver,
                manufaturingYear:car.manufaturingYear,
                producer:car.producer,
                licenseplate:car.licenseplate
               
            })
        }
      }
     
    render() {
        const { errors } = this.state;
        const {drivers}=this.props.driver
        const {cars}=this.props.car
        const options=  this.props && this.props.driver.drivers.length > 0 ?this.props.driver.drivers.map((exp,index) => {
            console.log(exp)
            return <option value={exp._id} key={index}  >{exp.fullName} + {index}</option>
        }):<option/>
        return (
            
            <div className='Add Car'>
            <div className='container'>
       
           
                <div className='col-md-8 m-auto'>
                <h1>EDIT CAR</h1>
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
                            <select value={this.state.numberofSeats} onChange={this.onChange} className='form-control' >
                                 <option value="">Chọn loại xe</option>
                                <option value="16">16 chỗ</option>
                                <option value="32">32 chỗ</option>
                                <option value="49">49 chỗ</option>
                                <option value="50">50 chỗ</option>
                            </select>  
                                     
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
        driver:state.driver,
        car:state.car
    }
}
export default connect(mapStateToProps,{geteditCar,posteditCar,getDriver})(EditDriver);