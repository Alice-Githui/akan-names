let male = ['Kwasi' , 'Kwadwo', 'Kwabena', 'Kwaku', 'Yaw', 'Koh', 'Kwame']
let female = ['Akosua' , 'Adwoa', 'Abenaa', 'Akua', 'Yaa', 'Afua', 'Ama']


//GetDay Function
var d = new Date()
var n = d.getDay()

//function
 function getData(){
    //event.preventDefault();
    var date = document.getElementById('date').value
    var male = document.getElementById('Male').value
    var female = document.getElementById('Female').value

    var d = new Date(date);
    var day = new Array (7);
    day [0] = ("Sunday"),
    day [1] = ("Monday")
    day [2] = ("Tuesday")
    day [3] = ("Wednesday")
    day [4] = ("Thursday")
    day [5] = ("Friday")
    day [6] = ("Saturday")

    var n =day[d.getDay()];
    document.getElementById('result').innerHTML = n;

    if(n == day[0] && male){
      console.log(male[0]);
   } else if (n == day[1] && male){
      console.log(male[1])
   } else if (n == day[2] && male){
      console.log(male[2])
   } else if (n == day[3] && male){
      console.log(male[3])
   } else if (n == day[4] && male){
      console.log(male[4])
   } else if (n == day[5] && male){
      console.log(male[5])
   } else if (n == day[6] && male){
      console.log(male[6])
   } else if (n == day[7] && male){
      console.log(male[7])
   }
   
   }
      
   //control flow for female 
   
   if(n == day[0] && female){
      console.log(female[0]);
   } else if (n == day[1] && female){
      console.log(female[1])
   } else if (n == day[2] && female){
      console.log(female[2])
   } else if (n == day[3] && female){
      console.log(female[3])
   } else if (n == day[4] && female){
      console.log(female[4])
   } else if (n == day[5] && female){
      console.log(female[5])
   } else if (n == day[6] && female){
      console.log(female[6])
   } else if (n == day[7] && female){
      console.log(female[7])
   } 
