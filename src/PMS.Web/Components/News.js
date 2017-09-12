import React, {Component} from 'react';
import googleFinance from 'google-finance';
import PropTypes from 'prop-types';
// import Utility from '../../../PMS.Utility/Utility';
import _ from 'lodash';
class News extends React.Component{

constructor(props)
{
    super(props);
}

componentDidMount()
{
    googleFinance.companyNews({symbol: this.props.symbol})
    .then((news)=>{
        if(news!=null)
        {
            this.setState({
                NEWS:news
            });
        }
        
    });
}

// parseNewsCollections(news)
// {
//     if(news!=null)
//     {

//     }
// }

render()
{
    if(this.state!=null)
    {
        var _news = this.state.NEWS;
        return (
            <div>
                {
                    _news.map((item,i) => {
                        return <li key={i}>{item.summary}</li>;
                    })

                }
            </div>
        );    
    }
    else
    {
        return (
            <div>
                Fetching...
            </div>
        );
    }
   
}

}

export default News;
