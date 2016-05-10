
//M's
var newArray = ["hello", "this", "is", "your", "captain"];
var length = (newArray.length - 1);

function countDown(arrLength, arr){
	if(arrLength < 0){
		return "done";
	}
	console.log(newArray[arrLength])
	return countDown(arrLength -= 1);
}

countDown(length, newArray);

var newArray = ["hello", "this", "is", "your", "captain"];
function countDown(arr, count){
	if(count === undefined){
		count = arr.length - 1;
	}
	console.log(arr[count]);
	if(count === 0){
		return "done";
	}
	return countDown(arr, count -= 1);
}
countDown(newArray);



//W's
var tools = ["computer", "books", "text editor"];
var length = (tools.length - 1)

function countDown(arrLength, arr) {
    if (arrLength < 0) {
        return "all done"
    }
    console.log(tools[arrLength])
    return countDown(arrLength -= 1)
}

countDown(length, tools);


//Exercise 1
function power(base, exponent) {
    if (exponent == 0)
        return 1;
    else
        return base * power(base, exponent - 1);
}

console.log(power(2, 3));
// → 8

/*
We declared a function called power, 
which takes the parameters "base" and "exponent."
The "if" statement checks to see whether the exponent is 0,
and if it is, 1 will be returned.
Else, the base will be returned, and multiplied by power(base, exponent - 1)
2 times power(2,2), then 2 times power(2,1), then 2 times power(2,0) --
exponent is 0, so 1 is returned and stops iterating. 
*/

var newArray = ["hello", "this", "is", "your", "captain"];
function countDown(arr, count){
	if(count === undefined){
		count = 0;
	}
	if(count !== arr.length){
		console.log(arr[count])
		return countDown(arr, count += 1)
	}
	else{
		return "done";
	}
}
countDown(newArray);






