
//simple number loop
var i = 10;
while (i>0){
	i--;
	console.log(i)
}

//car dealership
var cars = ["prius", "gti", "accord", "fit", "outback"];
var i = 0;
var text = "";

while (cars[i]){
	text += cars[i] +" ";
	i++;
}
console.log(text);

//use a while loop to print out any even number from 1 to 20
var i = 0;
while (i<=20){
	if (i % 2 == 0){
		console.log(i);
	}
	i++;
}