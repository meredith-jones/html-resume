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

function langGreeting(lang){
	if (lang == "es"){
		console.log("Hola, Mundo.");
	}
	else if (lang == "pt"){
		console.log("Ola, Mundo.");
	}
	else if (lang == "zh"){
		console.log("Ni hao, Shijie.");
	}
	else{
		console.log("Hello, World.");
	}

}