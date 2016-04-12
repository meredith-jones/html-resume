//loop through 1-20 and state even or odd

for(var i = 0; i <= 20; i++){
	if(i % 2 == 0){
		console.log(i +" is even.");
	}
	else{
		console.log(i +" is odd.");
	}
}

//Compare two numbers, console.log() the greater number.
function compareTwoNum(x,y){
	if(x == y){
		console.log(x +" and "+ y+" are the same.");
	}
	else if (x > y){
		console.log(x +" is the greater number.");
	}
	else{
		console.log(y + " is the greater number.")
	}
}

//multiplication tables
for(var i=0; i<=10; i++){
	console.log(i +" * 9 = "+ (i*9));
}

//nested loop--tables 1-10
for(var i=0; i<=10; i++){
	for(var b=0; b<=10; b++){
	console.log(i +" * "+b+ " = "+ (i*b));
	}
}

