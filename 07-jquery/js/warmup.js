'use strict';

//Add an event listener so that when the mouse enters ('mouseenter')
//the image, it's `src` changes to 'img/surprised.png'
//select img
var img = document.querySelector('img')
//change source setAttribute
img.addEventListener('mouseenter', function (){
    
    img.setAttribute('src','img/surprised.png');
});

//Extra: add an event listener so that when the mouse leaves ('mouseleave')
//the image, it's source changes back to `img/happy.png'


//Add an event listener so that when the 'purple-button' is clicked,
//the 'big' and 'purple' classes are added to the 'instructions'
//paragraph in the header.
//first selcet button
var putpButton = document.querySelector('#purple-button')
putpButton.addEventListener('click', function () {
    document.querySelector('.instructions')
    //modify class use classList
    .classList.add('big','purple');
});

//Add an event listener so that when the 'content-button' is clicked,
//the text inside the <input> element is added as a NEW paragraph to the
//'#content' section
//    TIP: You can get what value is typed into the <input> but accessing
//         the elements '.value' property
//
var contentBtn = document.querySelector('#content-button');
contentBtn.addEventListener('click', function (){
    //get the info user is typing
    var text = document.querySelector('input').value;
    var p = document.createElement('p');
     p.textContent = text;
     console.log(text); 
     document.querySelector('#content').appendChild(p);

});

