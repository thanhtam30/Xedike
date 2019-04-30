import React, { Component } from 'react';
import {connect} from 'react-redux'
import {listCar} from '../../actions/carAction';
import CarItem from './CarItem'
class ListDriver extends Component {
    componentDidMount(){
        this.props.listCar();
    }
    render() {
        const {cars}=this.props.car
        let ListCar=<CarItem cars={cars}/>
        
        return (
            <div>
                {ListCar}
            </div>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        car: state.car
    }
}
export default connect(mapStateToProps,{listCar})(ListDriver);