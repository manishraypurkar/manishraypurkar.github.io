
 var checkbox = document.getElementById("select"); //get the checkbox to a variable

//check storage if dark mode was on or off
if (sessionStorage.getItem("mode") == "dark") {
  darkmode(); //if dark mode was on, run this funtion
} else {
  nodark(); //else run this funtion
}

//if the checkbox state is changed, run a funtion
checkbox.addEventListener("change", function() {
  //check if the checkbox is checked or not
  if (checkbox.checked) {
    darkmode(); //if the checkbox is checked, run this funtion
  } else {
    nodark(); //else run this funtion
  }
});

//function for checkbox when checkbox is checked
	function darkmode() {
	document.getElementById("modename").innerHTML="Light Mode";
//for project tab
	var project=document.getElementsByClassName("content");
	for(var i=0;i<project.length;i++)
	{
	project[i].style.background="#ebebeb";
	project[i].style.color="#292929";
	}
//for contact tab
var contact=document.getElementsByClassName("gform");
	for(var i=0;i<contact.length;i++)
	{
	contact[i].style.background="#ebebeb";
	contact[i].style.color="#292929";
	}

//for education tab
	
	var edutab=document.getElementsByClassName("tab");
	for(var i=0;i<edutab.length;i++)
	{
	edutab[i].style.background="#ebebeb";
	}

	var edutablnk=document.getElementsByClassName("tablinks");
	for(var i=0;i<edutablnk.length;i++)
	{
	edutablnk[i].style.color="#292929";
	}


	var edutabcontent=document.getElementsByClassName("tabcontent");
	for(var i=0;i<edutabcontent.length;i++)
	{
	edutabcontent[i].style.background="#ebebeb";
	edutabcontent[i].style.color="#292929";
	}

	var eduskcer=document.getElementsByClassName("skcer");
	for(var i=0;i<eduskcer.length;i++)
	{
	eduskcer[i].style.background="#ebebeb";
	eduskcer[i].style.color="#292929";
	}
  document.body.classList.add("dark-mode"); //add a class to the body tag
  checkbox.checked = true; //set checkbox to be checked state
	  sessionStorage.setItem("mode", "dark"); //store a name & value to know that dark mode is on
}

//function for checkbox when checkbox is not checked
function nodark() {

	document.getElementById("modename").innerHTML="Dark Mode";	

	//from here projects tab
	var project=document.getElementsByClassName("content");
	for(var i=0;i<project.length;i++)
	{
	project[i].style.background="#292929";
	project[i].style.color="#fff";
	}


	//for contact tab
	var contact=document.getElementsByClassName("gform");
	for(var i=0;i<contact.length;i++)
	{
	contact[i].style.background="#292929";
	contact[i].style.color="#fff";
	}

//for education tab
	
	var edutab=document.getElementsByClassName("tab");
	for(var i=0;i<edutab.length;i++)
	{
	edutab[i].style.background="#292929";
	}

	var edutablnk=document.getElementsByClassName("tablinks");
	for(var i=0;i<edutablnk.length;i++)
	{
	edutablnk[i].style.color="#fff";
	}


	var edutabcontent=document.getElementsByClassName("tabcontent");
	for(var i=0;i<edutabcontent.length;i++)
	{
	edutabcontent[i].style.background="#292929";
	edutabcontent[i].style.color="#fff";
	}

	var eduskcer=document.getElementsByClassName("skcer");
	for(var i=0;i<eduskcer.length;i++)
	{
	eduskcer[i].style.background="#292929";
	eduskcer[i].style.color="#fff";
	}


 document.body.classList.remove("dark-mode"); //remove added class from body tag
  checkbox.checked = false; //set checkbox to be unchecked state
  sessionStorage.setItem("mode", "light"); //store a name & value to know that dark mode is off or light mode is on
}
















function openCity(evt, cityName) {
  // Declare all variables
  var i, tabcontent, tablinks;

  // Get all elements with class="tabcontent" and hide them
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Get all elements with class="tablinks" and remove the class "active"
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}

// submit contact function

function submitClick(){

document.getElementById("submithead").innerHTML="Thanks! We will contact you soon!";
//alert("Thanks! We will contact you soon!");

}




/*function myMap() {
var mapProp= {
  center:new google.maps.LatLng(51.508742,-0.120850),
  zoom:5,
};
var map = new google.maps.Map(document.getElementById("googleMap"),mapProp);
}*/



