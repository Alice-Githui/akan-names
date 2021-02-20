/*
Day of the week (d) = ( ( (CC/4) -2*CC-1) + ((5*YY/4) ) + ((26*(MM+1)/10)) + DD ) mod 7

 where;

 CC - is the century digits. For example 1989 has CC = 19

 YY - is the Year digits (1989 has YY = 89)

 MM -  is the Month

 DD - is the Day of the month 

 mod - is the modulus function ( % )*/
 
 /*day =(((CC/4) - 2*CC -1) + ((5*YY/4)) + ((26*(MM+1/10)) + DD) mod 7 */


 var day = ['Sun','Mon' , 'Tue' , 'Wed' , 'Thu' , 'Fri' , 'Sat']
 var male = ['Kwasi' , 'Kwadwo', 'Kwabena', 'Kwaku', 'Yaw', 'Koh', 'Kwame']
 var female = ['Akosua' , 'Adwoa', 'Abenaa', 'Akua', 'Yaa', 'Afua', 'Ama']

//function
 function getData(){
    event.preventDefault();
    var date = (document.getElementById("birthday").value)
    let male =(document.getElementById("Male").value)
    let female =(document.getElementById("Female").value)

//Day picker
let fdate = new Date(date).toDateString();
 var mdate = fdate.split('') [0];
document.getElementById("result").innerHTML =mdate;

   if 