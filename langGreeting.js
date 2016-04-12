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

function pluralizer(noun, number){
	if(number == 1){
		console.log("There is " +number+ " " +noun+ ".");
	}
	else if(noun.search(/f$|fe$/i)>=0){
		var irregPlural = noun.replace(/f$|fe$/i, "ves");
		console.log("There are " +number+ " " +irregPlural+ ".");
	}
	else if(number > 1){
		console.log("There are " +number+ " " +noun+ "s.");
	}
}

