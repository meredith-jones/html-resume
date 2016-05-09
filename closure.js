//exercise 1

function fancyQuiz(){
	return function(){

var answer1 = "blue",
    answer2 = "no",
    answer3 = "yes";

var userAnswer1 = prompt("what color is the sky?")
if (userAnswer1 === answer1) {

    alert("Correct")
} else {
    alert("Sorry, that was wrong")
}
var userAnswer2 = prompt("Do cows fly?")

if (userAnswer2 === answer2) {
    alert("Correct")
} else {
    alert("Sorry, that was wrong")
}

var userAnswer3 = prompt("Do birds fly?")

if (userAnswer3 === answer3) {
    alert("Correct")
} else {
    alert("Sorry, that was wrong")
}
}
}
var takeQuiz = fancyQuiz();
takeQuiz();


//array of names - Exercise 2

function getNames(){
	var names = ["William", "Cindy", "Maureen", "Brenden"];
	var counter = -1;
		return function(){
			return names[counter += 1]
		};
}
var nextName = getNames();
nextName();
nextName();

//Exercise 3

function box(){
	var data = "you got the data";
		return function(){
			return function(){
				return data;
			}
		}
}
var getData = box();
getData()();



