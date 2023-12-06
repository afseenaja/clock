// function clock(){
//     const today = new Date();
//     let h = today.getHours();
//     let m = today.getMinutes();
//     let s = today.getSeconds();
//     m = checkTime(m);
//     s = checkTime(s);
//     document.getElementById('digital').innerHTML =  h + ":" + m + ":" + s;
//     setTimeout(startTime, 1000);
// }
// Calling showTime function at every second
setInterval(showTime, 1000);

// Defining showTime funcion
function showTime() {
	// Getting current time and date
	let time = new Date();
	let hour = time.getHours();
	let min = time.getMinutes();
	let sec = time.getSeconds();
	am_pm = "AM";

	// Setting time for 12 Hrs format
	if (hour >= 12) {
		if (hour > 12) hour -= 12;
		am_pm = "PM";
	} else if (hour == 0) {
		hr = 12;
		am_pm = "AM";
	}

	hour =
		hour < 10 ? "0" + hour : hour;
	min = min < 10 ? "0" + min : min;
	sec = sec < 10 ? "0" + sec : sec;

	let currentTime =
		hour +
		":" +
		min +
		":" +
		sec +" "+
		am_pm;

	// Displaying the time
	document.getElementById(
		"clock"
	).innerHTML = currentTime;
}

showTime();

function clock2(){
    // var x=document.getElementById('clock');
    // var y=document.getElementById('analog');
    // var z=document.getElementById('but');
    if((document.getElementById('analog').style.display)=="none"){
        document.getElementById('clock').style.display="none";
        document.getElementById('analog').style.display="block";
        document.getElementById('but').innerHTML="DIGITAL CLOCK";
    }
    else{
            document.getElementById('clock').style.display="block";
            document.getElementById('analog').style.display="none";
            document.getElementById('but').innerHTML="ANALOG CLOCK";
        }
    
}
    
