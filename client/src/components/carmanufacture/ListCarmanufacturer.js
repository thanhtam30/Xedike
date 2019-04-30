import React, { Component } from 'react';
import Spinner from '../../common/Spinner'
import {Link} from 'react-router-dom';
import {connect} from 'react-redux'
import {listCarmanufature} from '../../actions/carmanufactureAction'
import CarmanufacturerItem from './CarmanufacturerItem';
class ListDriver extends Component {
    componentDidMount() {
        this.props.listCarmanufature();
      }
    render() {
        const {carmanufature,loading}=this.props.carmanufature
        
        
        let Listcarmanufature;
        if(carmanufature===0 ||loading){
            Listcarmanufature=<Spinner/>
        }else{
            Listcarmanufature= <CarmanufacturerItem carmanufature={carmanufature}/>
        }
        return (
            <div>
                <Link  className="btn my-3 btn btn-danger " to='/AddCarmanufacturer' type='button'
             
            >
                <i className="fa fa-pencil-square-o" />
                ADD NEW CAR MANUFATURE
            </Link>
                {Listcarmanufature}
                    
            </div>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        carmanufature: state.carmanufature
        
    }
}
export default connect(mapStateToProps,{listCarmanufature})(ListDriver);