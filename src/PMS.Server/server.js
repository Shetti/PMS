import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom/server';
import express from 'express';
import IndexPage from '../PMS.Web/Pages/Index/IndexPage';
import {getCSSUrl} from '../PMS.Utility/Utility';
import { Router, RouterContext , match } from 'react-router';
import routes from '../PMS.Web/Route/routes'
const http = require('http');
var server = express();
import path from 'path';

var port = process.env.PORT || 6001;

server.listen(port,err => {

  if(err){
    return console.log('Something bad happened', err)
  }
  else{
        console.log('Application started and listening on port: ', port);
  }
});
 
 server.use(express.static(path.join(__dirname, '/PMSWeb')));

server.use(express.static(path.join(__dirname, 'PMSWeb/CSS'), {
                setHeaders: function(res, path){
                                res.set('Content-Type', 'text/css');
                }
}));


 server.get('*', async (req,res) => {
   console.log("********************* PROCESSING REQUEST *************************");
   res.set('Content-Type', 'text/html');
   res.setHeader('Access-Control-Allow-Origin', '*');
   debugger;
   try{
      // var data = {
      //   "title":"Portfolio Management"
      // };
      //  const serverHTML = ReactDOM.renderToStaticMarkup(<IndexPage {...data}/>);
      //  res.status(200).send('<!doctype html>\n' + serverHTML);

       match({routes, location: req.url}, (error, redirectlocation, renderprops) => {
       if (error) {
         this.throw(error.message, 500);
         console.log(error.message);
       }
       
       else if(redirectlocation) {
         this.redirect(redirectlocation.pathname + redirectlocation.search);
       }
       
       else if (renderprops) {

          const data = {
              body: '',
              "title":"portfolio management",
              entry: '/Scripts/bundle.js'
          };

       data.body = ReactDOM.renderToString(<RouterContext {...renderprops} />);
       const serverhtml = ReactDOM.renderToStaticMarkup(<IndexPage {...data}/>);
       res.status(200).send('<!doctype html>\n' + serverhtml);
       }
       
       else {
                console.log(`Not found: ${req.path}`)
                res.status(404).send('Not found');
       }
     });


   }
   catch(e){
     console.log(e.message);
     console.log(e.stack);
     console.log(e);
   }
 });

const cssUrl = getCSSUrl();
const data = {
  css: cssUrl
};