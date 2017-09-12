import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Utility from '../../../PMS.Utility/Utility';
import _ from 'lodash';
import News from '../../Components/News';

var symbols = {
   symbols: [
    'NSE:KajariaCer',
    'NSE:OrientCem',
    'NSE:UPL',
    'NSE:AuroPharma'
]};


class Dashboard extends Component{

constructor(props){
    super(props);
    
}

componentDidMount()
{
    
}

    render(){
        return (
            <News symbols={symbols} />
        )
    }
}

export default Dashboard;