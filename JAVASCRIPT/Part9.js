var fname = prompt("Please enter first name")
var lname = prompt("Please enter last name")
var age = prompt("Please enter age")
var height = prompt("How tall are you in centimeters?");
var pname = prompt("Please enter your pet name")
alert('Thank You for the info')
if(fname[0]==lname[0] && (age > 20 && age < 30) && height>=170 && pname[pname.length-1] == 'y'){
  console.log("You passed spy test")
}
