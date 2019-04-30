import React, { Component } from 'react';
import {connect} from 'react-redux';

import {getDriver} from '../../actions/driverAction'
class list extends Component {
    componentDidMount() {
        this.props.getDriver();
      }
    render() {

        const {drivers}=this.props.driver
        var reformattedArray = this.props && this.props.driver.drivers.length > 0 ?this.props.driver.drivers.map(obj =>{ 
            var rObj = {};
            rObj[obj._id] = obj.fullName;
            return rObj;
         }):"";
        console.log(reformattedArray);
        
      
        
        return (
    <div></div>
            
        );
    }
}
const mapStateToProps = (state) => {
    return {
        driver:state.driver
    }
}
export default connect(mapStateToProps,{getDriver})(list);