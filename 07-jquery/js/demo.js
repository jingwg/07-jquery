'use strict';

/* Testing code can go here */




/* EXERCISE */

//Using jQuery methods, add a musical note symbol ♫ (entity &#9835) to both the beginning and end of every paragraph in the song section.
//change content
$('#song p').prepend('♫').append('♫');

//Using a jQuery method, add a `<div>` around every line in the song. 
//This <div> should have a class of "out" if the line rhymes with with "out", 
//and a class of "ain" if the line rhymes with "rain".
//   HINT: This is tricky! Look carefully at the jQuery examples and String methods
//				 You'll need to use an if statement
//wrap is used around everyline
//determine ain or put by using .wrap(function)
$('#song p').wrap(function(){
    //how to decide which class? if  
    //select the text
    var p = $(this).text();
    if(p.endsWith('ain.')){
        var whichClass = "ain";
    }else{
        var whichClass = 'out';
    }
    return '<dic class=' + whichClass +'></div>';
});

//Using a jQuery method, remove the lines from the song that contain the word "sing"
//  HINT: Again, look carefully at the jQuery examples!


