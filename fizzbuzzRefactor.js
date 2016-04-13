function fizzBuzz(){
	var input = Math.floor(prompt("Pick a number."));
	while(isNaN(input)){
		input = Math.floor(prompt("That is not a number. Pick a number"));
	}
	for(i = 0; i<= input; i++){
		if (i % 3 ==0 && i % 5 == 0){
			console.log("FizzBuzz");
		}
		else if (i % 3 == 0){
			console.log("Fizz");
		}
		else if (i % 5 == 0){
			console.log("Buzz");
		}
		else{
			console.log(i);
		}
	}
}
