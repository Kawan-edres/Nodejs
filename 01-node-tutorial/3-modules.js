//Every file in node is a module 
//moduel === encapsulated code 

const {john,peter}=require('./4-names'); //wargtnaway objectaka la names file 
const sayHi=require('./5-utils');
const data= require('./6-alternative-falvor');
require('./7-mind-gernade'); //this funciton will be invoked immediatly
sayHi('kawan');
sayHi(john);
sayHi(peter);
