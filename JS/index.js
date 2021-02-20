/*
Day of the week (d) = ( ( (CC/4) -2*CC-1) + ((5*YY/4) ) + ((26*(MM+1)/10)) + DD ) mod 7

 where;

 CC - is the century digits. For example 1989 has CC = 19

 YY - is the Year digits (1989 has YY = 89)

 MM -  is the Month

 DD - is the Day of the month 

 mod - is the modulus function ( % )*/
 
 /*day =(((CC/4) - 2*CC -1) + ((5*YY/4)) + ((26*(MM+1/10)) + DD) mod 7 */


 function getDay (){
    var cc = (document.getElementById("Id1").value);
    var yy = (document.getElementById("Id2").value);
    var mm = (document.getElementById("Id3").value);
    var dd = (document.getElementById("Id4").value);
    
    var todayDate = new Date ()
    var today_day = today_day.getDate ();
    var today_month = today_day.getMonth ();
    var today_year = today_day.getYear ();

    var day = (((cc/4) - 2*cc-1) + ((5*yy/4)) + ((26*(mm + 1) /10)) + dd ) % 7

   if (female){
      Sunday = "Akosua"
      Monday = "Adwoa"
      Tuesday = "Abenaa"
      Wednesday ="Akua"
      Thursday = "Yaa"
      Friday = "Afua"
      Saturday = "Ama"
   } else {
      Sunday = "Kwasi"
      Monday = "Kwadwo"
      Tuesday = "Kwabena"
      Wednesday = "Kwaku"
      Thursday = "Yaw"
      Friday = "Koh"
      Saturday = "Kwame"
   }
function calcDay{
   //Enter Elements//
   var day = null,
    var cc = (document.getElementById("Id1").value);
    var yy = (document.getElementById("Id2").value);
    var mm = (document.getElementById("Id3").value);
    var dd = (document.getElementById("Id4").value);
    results= (document.getElementById("dayoftheweek"))

   day = (((cc/4) - 2*cc-1) + ((5*yy/4)) + ((26*(mm + 1) /10)) + dd ) % 7

   if (female && Sunday){
      results = "Akosua"
   } else if (male && Sunday) {
      results = "Kwasi"
   } 
   if (Female && Monday){
      results = "Adwoa"
   } else if (male && Monday){
      results = "Kwadwo"
   }

   if (Female && Tuesday){
      results = "Abenaa"
   } else if (male && Tuesday){
      results = "Kwabena"
   }

   if(Female && Wednesday){
      results ="Akua"
   } else if (Male && Wednesday){
      results = "Kwaku"
   }

   if (Female && Thursday){
      results= "Yaa"
   } else if (Male && Thursday){
      results ="Yaw"
   }

   if(Female && Friday){
      results = "Afua"
   } else if (Male && Friday){
      results ="Koh"
   }
   if(Female && Saturday){
      results = "Ama"
   } else if (Male && Saturday) {
      results = "Kwame"
   }
