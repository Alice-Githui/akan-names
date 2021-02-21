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
 var mdate = fdate.split('')[0];
document.getElementById("result").innerHTML = mdate;

if(mdate == day[0] && male){
   console.log(male[0]);
} else if (mdate == day[1] && male){
   console.log(male[1])
} else if (mdate == day[2] && male){
   console.log(male[2])
} else if (mdate == day[3] && male){
   console.log(male[3])
} else if (mdate == day[4] && male){
   console.log(male[4])
} else if (mdate == day[5] && male){
   console.log(male[5])
} else if (mdate == day[6] && male){
   console.log(male[6])
} else if (mdate == day[7] && male){
   console.log(male[7])
}

}

/*//Day picker
let fdate = new Date(date).toDateString();
 var mdate = fdate.split('')[0];
document.getElementById("result").innerHTML = mdate;*/

//control flow for female 

if (mdate == day[0] && female){
   console.log(female[0]);
} else if (mdate == day[1] && female){
   console.log(female[1])
} else if (mdate == day[2] && female){
   console.log(female[2])
} else if (mdate == day[3] && female){
   console.log(female[3])
} else if (mdate == day[4] && female){
   console.log(female[4])
} else if (mdate == day[5] && female){
   console.log(female[5])
} else if (mdate == day[6] && female){
   console.log(female[6])
} else if (mdate == day[7] && female){
   console.log(female[7])
}





















