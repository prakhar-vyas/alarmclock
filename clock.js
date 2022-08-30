let today = new Date();
let hour = today.getHours();
let minutes = today.getMinutes();
let seconds = today.getSeconds();
let ringtone = document.getElementById("ringtone");
let btn = document.getElementById("btn");
let bool = true;
let ampm;  //used in displaytime function.
let alarm = true;
var img = document.getElementById("imgg");

//DROPDOWN CREATION STARTS
let dropdown = document.querySelectorAll("select");
for (let i = 12; i >= 0; i--) {
      i = i<10 ? "0"+i : i ;
      let option = `<option value="${i}">${i}</option>`;
      dropdown[0].firstElementChild.insertAdjacentHTML("afterend", option);
}

for (let i = 59; i >= 0; i--) {
      i = i<10 ? "0"+i : i ;
      let option = `<option value="${i}">${i}</option>`;
      dropdown[1].firstElementChild.insertAdjacentHTML("afterend", option);
}

for (let i = 2; i > 0; i--) {
      let ampm = i==1 ? "AM": "PM" ;
      let option = `<option value="${ampm}">${ampm}</option>`;
      dropdown[2].firstElementChild.insertAdjacentHTML("afterend", option);
}
// DROPDOWN CREATION ENDS

// TIME DISPLAY STARTS
function displaytime() {
  today = new Date();
  hour = today.getHours();
  minutes = today.getMinutes();
  seconds = today.getSeconds();

  if (minutes < 10) {
       minutes = `0${minutes}`;
  }
  if (seconds < 10) {
    seconds = `0${seconds}`;
  }
  if(hour==24)
  {
    hour = hour - 12;
    ampm = "AM";
    document.getElementById("time").innerText = `${hour}:${minutes}:${seconds} ${ampm}`;
  }
  if(hour==12)
  {
    ampm ="PM";
    document.getElementById("time").innerText = `${hour}:${minutes}:${seconds} ${ampm}`;
  }
  if (hour > 12) {
    hour = hour - 12;
    if (hour < 10) {
      hour = `0${hour}`;
    }
    ampm = "PM";
    document.getElementById("time").innerText = `${hour}:${minutes}:${seconds} ${ampm}`;
  } 
  else {
    ampm = "AM";
    document.getElementById("time").innerText = `${hour}:${minutes}:${seconds} ${ampm}`;
  }
  if(dropdown[0].value==`${hour}` && dropdown[1].value==`${minutes}` && dropdown[2].value===`${ampm}` && seconds==00)
  {
    if(!bool)
    {
      ringtone.play();
      ringtone.loop = true;
      img.classList.add("animate");  //add animation to image
    }
    }
}
setInterval(displaytime, 1000);
//TIME DISPLAY ENDS


//BUTTON FUNCTIONING STARTS
function setalarm()
{ 
     if(bool)
     {
      if(dropdown[0].value=="" || dropdown[1].value=="" || dropdown[2].value=="")
      {
        alert("Please select a valid time to set alarm.")
      }
      else{
        dropdown[0].disabled=true;
        dropdown[1].disabled=true;
        dropdown[2].disabled=true;
        btn.innerText="Clear Alarm";
        alert("Alarm Set Succesfully.");
        document.getElementById("hour").style.cursor="no-drop";
        document.getElementById("minute").style.cursor="no-drop";
        document.getElementById("ampm").style.cursor="no-drop";
       
      }
      bool=false;
     }

     else
     {
      dropdown[0].disabled=false;
      dropdown[1].disabled=false;
      dropdown[2].disabled=false;
      btn.innerText="Set Alarm";
      document.getElementById("hour").style.cursor="pointer";
      document.getElementById("minute").style.cursor="pointer";
      document.getElementById("ampm").style.cursor="pointer";
      img.classList.remove("animate");   //removes animation from image
      ringtone.pause();
      ringtone.loop = false;
      bool=true;
     }
   
}
//BUTTON FUNCTIONING ENDS


