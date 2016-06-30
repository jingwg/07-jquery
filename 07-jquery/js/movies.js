'use strict';

/* code goes here */
$('form').submit(function(event) {
   
   /* do whatever we want with the form's data */
  var  url = 
$.get('')
   //don't submit as usual!
   event.preventDefault();    //current standard
   return false;              //older browsers
});