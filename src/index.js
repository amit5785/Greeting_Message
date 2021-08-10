import React from 'react';
import ReactDOM from 'react-dom';
import "./index.css";
import Card from "./Card";

var time=new Date();
let x=time.toLocaleTimeString();
var greeting;
var las=x.substring(x.length-2);
var t=x.substring(0,x.indexOf(':'));
let given={};
if(las=="AM")
{
  greeting="Good Morning !!";
  given.color='green';
}
else
{
  if(7>=t || t==12 || 1<=t)
  {
    greeting='Good Afternoon !!!';
    given.color='orange';
  }
  else
  {
    greeting="Good Neight !!!";
    given.color='black';
  }
}
ReactDOM.render(<Card msg={greeting} stylegiven={given}/>,document.getElementById('root'));