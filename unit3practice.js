
//Practice Function 1-- take 2 args, push into new array
function complementGiver(names, complement){
	var newArray = [];
	for(var i = 0; i < names.length; i++){
		newArray.push(names[i] + complement);
	}
	console.log(newArray);
}
var pplNames = ["Suzy", "Joe", "Ashley", "King Kong"];
var kindWords = " Is the bomb!"

var morePpl = ["Jack", "Sally", "Andy", "Your mom"];
var words = " rocks my socks."

complementGiver(pplNames, kindWords);
complementGiver(morePpl, words);

//Practice Function 2--counter ref global var
var number = 0
function counter(){
	return number += 1;
}
counter()

