import React, { Component } from 'react';
import Spinner from '../../common/Spinner'
import {Link} from 'react-router-dom';
import {connect} from 'react-redux'
import {getDriver,ISADDTASK} from '../../actions/driverAction'
import DriverItem from './DriverItem';
class ListDriver extends Component {
    componentDidMount() {
        this.props.getDriver();
      }
    render() {
        const {drivers,loading}=this.props.driver
        
        
        let listDriver;
        if(drivers===0 ||loading){
            listDriver=<Spinner/>
        }else{
            listDriver= <DriverItem drivers={drivers}/>
        }
        return (
            <div>
                <Link  className="btn my-3 btn btn-danger " to='/AddDriver' type='button'
            
            >
                <i className="fa fa-pencil-square-o" />
                ADD NEW DRIVER
            </Link>
                {listDriver}
                    
            </div>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        driver: state.driver
        
    }
}
export default connect(mapStateToProps,{getDriver})(ListDriver);