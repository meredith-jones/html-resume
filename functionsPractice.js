
//Adds the elements in the array. 
function sumArray(array){
	var arrayTotal = 0
	var i = 0;
	if(array.length == 0){
		console.log("Nothing to add here.")
	}
	for(i = 0; i < array.length; i++){
		arrayTotal += array[i];
	}
	return arrayTotal;
}

/*
Write a function that returns a boolean 
indicating whether or not a string is a palindrome. 
*/
function palinChecker(string){
	var backword = string.split('').reverse().join('');
	console.log(backword);
	if (backword == string){
		console.log("You have a palindrome.");
		return true;
	}
	else{
		console.log("Not a palindrome.");
		return false;
	}
}

/*
Takes a string that is a sentence, and returns 
the number of words and average word length. 
*/

function sentenceInfo(sentence){
	var numLetters = sentence.replace(/ /g,"").length;
	var numWords = sentence.split(" ").length;
	var avgWrdLength = numLetters/numWords; 
	console.log("There are "+numWords+" words in this sentence, and the average word length is "+avgWrdLength+" words.")
}




