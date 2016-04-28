/*to create a blueprint/clone of an object: 
use Object.create(), 
use factory functions, 
use constructor functions.
*/

//Object.create() example, showing prototypal inheritance
var human = {
	planet: "earth",
	living: "yes"
}

var alien = Object.create(human) // clone human and make it an alien

alien.power = "zapper";
alien.planet = "another dimension";

var superAlien = Object.create(alien);

superAlien.power = ['zapper', 'lazer', 'force shield'];

//"this" keyword -- placeholder which points to the current object

var alien = {
	name: "Martian",
	power: "flying",
	fly: function(){
		return this.name +" is now "+ this.power
	}
}
alien.fly()

var superHero = Object.create(alien);
superHero.name = "Superman";
console.log(superHero.fly());

//creating and accessing private data with object.create()

var proto = {
	submitNumber: function(yourNumber){
		var hiddenNumber = yourNumber || 123;
		proto.getHiddenNumber = function(){
			return "The number is "+ hiddenNumber;
		};
	},
	prop: "defaultvalue"
}
	//doesn't modify private data:
var submitNothing = Object.create(proto);
submitNothing.submitNumber();
submitNothing.getHiddenNumber();
	
	//modifies private data
var submitSomething = Object.create(proto);
submitSomething.submitNumber(100);
console.log(submitSomething.getHiddenNumber());


//factory functions--functions that return an object

function makeUser(name, skills){
	var user = {};
	user.name = name;
	user.skills = skills;
	user.getSkills = function(){
		return this.name + " has the following skills: " + this.skills
	}
	return user;
}

var brendan = makeUser("Brendan Eich", ['brogrammer', 'public speaker', 'pool shark'])

console.log(brendan.getSkills());

//creating private data in factory functions -- place a variable inside it

function makeUser(name, skills){
	var somePrivateData = "herromoto"
	var user = {};
	user.name = name;
	user.skills = skills;
	user.getSkills = function(){
		return this.name + " has the following skills: " + this.skills
	};
	user.changePrivateData = function(newData){
		somePrivateData = newData || somePrivateData;
		return "somePrivateData is "+ somePrivateData;
	}
	return user;
}
var micky = makeUser("micky", ['being a mouse ', 'being a cartoon'])
console.log(micky.getSkills());
console.log(micky.somePrivateData); //returns undefined
micky.changePrivateData(); // returns herromoto
micky.changePrivateData('blah'); //returns blah

//constructor functions

function Person(name, profession){ //good form to capitalize your constructor
	this.name = name;
	this.profession = profession;
}
//adding a method to the constructor:
Person.prototype.sayNameAndProfession = function(){
	return this.name +" is a "+ this.profession;
}
var brendan = new Person('Brendan Jacques', 'brogrammer');
//"new" keyword tells the JS interpreter that you 
//want to use your function as a constructor and are 
//intending to return an object from it.
brendan.sayNameAndProfession();

//hidden data using constructor functions
function Person(name, profession){ //good form to capitalize your constructor
	var secretData = "yolo"; //private data
	this.name = name;
	this.profession = profession;
}
Person.prototype.modifySecretData = function(newData){
	var secretData = "yolo";
	secretData = newData || secretData;
	return "secretData is "+ secretData;
}

var micky = new Person("Micky");
console.log(micky.modifySecretData()); //returns secret data
console.log(micky.modifySecretData("blah"));

//house objects -- factory function
function makeHouse(rooms, color, size){
	var house = {};
	house.rooms = rooms;
	house.color = color;
	house.size = size;
	house.describeHouse = function(){
		return "This house has "+this.rooms+" rooms, is the color "+this.color+", and is "+this.size+" square feet."
	}
	return house;
}

var stanfordHouse = makeHouse(4, "grey", 2500);

console.log(stanfordHouse.describeHouse());

//house object -- Object.create() -- clone sh*t
var house = {
	rooms: 3,
	color: "yellow",
	size: 2300,
	describe: function(){
		return("this house has "+house.rooms+" rooms, is the color "+house.color+", and is "+house.size+" square feet.")
	}
}

var stanfordHouse = Object.create(house) // clone house

house.color = "blue";
house.size = 3000;

stanfordHouse.describe();

//house object-- constructor function
function House(rooms, color, size){ //good form to capitalize your constructor
	this.rooms = rooms;
	this.color = color;
	this.size = size;
}
//adding a method to the constructor:
House.prototype.describeHouse = function(){
	return "This house has "+this.rooms+" rooms, is the color "+this.color+", and is "+this.size+" square feet.";
}
var stanfordHouse = new House(5, "blue", 4000);
//"new" keyword tells the JS interpreter that you 
//want to use your function as a constructor and are 
//intending to return an object from it.
stanfordHouse.describeHouse();

//debugging javascript with developer tools
console.log() //give info about the current state of the program
console.assert() //allow us to print a string to the console if a condition isn't met
	//example:
	var a = 1000;
	console.assert(a< 500, "list count is <500");

//keyword "debugger" allows you to pause your program and step through it line by line
debugger;

function loop1(){
    for(var i = 0; i < 5; i+=1){

        console.log(i)
    }
}

function loop2(){

        for(var i = 0; i < 5; i+=1){

        console.log(i)
    }

}

loop1();
loop2();


$('#title')
//returns <h1 class="heading" id="title">Bare-Bones Page</h1>

inspect($('#date')[0])
//highlights element in DOM

$0
//returns most recent selected 




