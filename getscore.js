var score = 0;
function getScore(score){
if (score >= 90){
	console.log("A");
}
else if(score >= 80){
	console.log("B");
}
else if(score >= 70){
	console.log("C");
}
else if(score >= 60){
	console.log("D");
}
else{
	console.log("F");
}
}
getScore(39);