import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Utility from '../../../PMS.Utility/Utility';
import _ from 'lodash';
import News from '../../Components/News';

// var symbols = {
//    symbol: [
//     'NSE:KajariaCer',
//     'NSE:OrientCem',
//     'NSE:UPL',
//     'NSE:AuroPharma'
// ]};

var symbol1 = 'NSE:KajariaCer';
var symbol2 = 'NSE:OrientCem';
var symbol3 = 'NSE:UPL';
var symbol4 = 'NSE:YesBank';


class Dashboard extends Component{

constructor(props){
    super(props);
    
}

componentDidMount()
{
    
}

    render(){
        return (
            <div>
                <News symbol={symbol1} />
                <News symbol={symbol2} />
                <News symbol={symbol3} />
                <News symbol={symbol4} />
            </div>
        )
    }
}

export default Dashboard;
