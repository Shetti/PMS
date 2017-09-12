import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Dashboard from '../Dashboard/Dashboard';
import {Router, Route} from 'react-router';


class IndexPage extends Component{


    render() {
        return (
            <html lang="en">
                <head>
                <meta name="viewport" content="width=device-width" />
                <title>{this.props.title}</title>
                <link rel="stylesheet" href="/CSS/bundle.css" />
                
                </head>
                <body>
                    <div id="root" dangerouslySetInnerHTML={{ __html: this.props.body }} />
                    <div class="abc">
                        Hi - IndexPage - From Client.
                    </div>
                    <script src="/Scripts/vendor.js" />
                    <script src="/Scripts/bundle.js"></script>  
                </body>
            </html>
        );
    }
}


export default IndexPage;