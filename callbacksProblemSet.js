

//Exercise 1 (+ exercise 2's conditional)

var thatArray = [5, 6, 7, 8, 1, 2, 3, 4];

function modifyArray(arr, callback){
	if(callback){
		var newString = "";
		for(var i = 0; i < arr.length; i++){
			newString += callback(arr, i) + " ";
		}
		return newString;
	}
	else{
		return arr;
	}
}

function makeDance(arr, increment){
	return "and " + arr[increment];
}

function multiplyBy7(arr, increment){
	return arr[increment] * 7;
}
function makeFancyDance(arr, increment){
	if(arr[increment] % 2 == 0){
		return "and-a " + arr[increment]+ ".";
	}
	else{
		return "and " + arr[increment];
	}
}


//Exercise 2, based on code from sample answer
var item = [1, 2, 3, 4, 5];
function add2(arr, increment){
	return arr[increment] + 1 + " | ";
}

function outputName(arr, increment){
	return "hello " + arr[increment] + " | ";
}

function modArray(arr, callback){
	if(callback){
		var result = "";
		for (var i = 0; i < arr.length; i+=1){
			result += callback(arr, i) + " ";
		}
	return result;
	}
	else{
		return arr;
	}
}

//NEED HELP ON THIS!!!
//Exercise 3 -- Write out the declaration for this function
//___________________________________________________Example invocation 1
map([1, 2, 3], function(value) { // returns [2,3,4]
    return value += 1;
});


//___________________________________________________Example invocation 2
map([1, 2, 3], function(value) { // returns [2,4,6]
    return value *= 2;
});





//samples

var arr = [5,4,3,2,1]
for(var i =0; i<arr.length; i+=1){
  console.log(   arr[i]   )  // Do something to data
}

function add(a,b){
	return a + b;
}

function multiply(a,b){
	return a * b;
}

//as a callback (sample):
function doMath(a,b,callback){
	return callback(a,b);
}

