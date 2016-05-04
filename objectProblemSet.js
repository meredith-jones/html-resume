var person = {
	name: "Joe S. Moe",
	profession: "banker",
	gender: "male", 
	age: 32,
	sayNameAndProfession: function(){
		return person.name + " is a "+ person.profession;
	}
}

function getValues(object){
	var values = [];
		for(val in object){
			values.push(object[val]);
		}
	return values;
}

console.log(getValues(person));

function keysThenVals(object){
	var objArray = Object.keys(object);
		for(val in object){
			objArray.push(object[val]);
		}
	return objArray;
}
console.log(keysThenVals(person));



//Return `true` when all of the elements in the array are keys in the object.


var person = {
	name: "Joe S. Moe",
	profession: "banker",
	gender: "male", 
	age: 32,
}

arrayOfEles = ["name", "profession", "gender", "age"];
function matchArray(object, array){
	var objArray = Object.keys(object);
	for(var i = 0; i < array.length; i++){
		if(array[i] === objArray[i]){
			return true;
		}
		else{
			return "doesn't match";
		}
	}
}
console.log(matchArray(person, arrayOfEles));













