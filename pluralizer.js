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