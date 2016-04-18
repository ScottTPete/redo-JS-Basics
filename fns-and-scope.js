//////////////////PROBLEM 1////////////////////

var name = 'Tyler';
//Create a function called isTyler that accepts name as it's only parameter.
//If the argument you passed in is equal to 'Tyler', return true. If it's not, return false.

function isTyler (name) {
	
	if(name === 'Tyler') {
		return true;
	} else {
		return false;
	}
};


// isTyler('Scott'); will return false

//////////////////PROBLEM 2////////////////////


//Create a function called getName that uses prompt() to prompt the user for their name, then returns the name.


function getName() {
	
	//name will be equal to the user input if user clicks ok
	var name = prompt("What is your name?", "Enter Name...");
	//returns the value of name after prompt is complete.
	return name;
};


//////////////////PROBLEM 3////////////////////



//Create a function called welcome that uses your getName function you created in the previous problem to get the users name,
//then alerts "Welcome, " plus whatever the users name is.

function welcome() {
	name = getName();
	alert("Welcome, " + name);
}


//////////////////PROBLEM 4////////////////////




//What is the difference between arguments and parameters?

//Parameter is a variable decalred in the function. An argument is the value of the parameter that gets passed to the function


//////////////////PROBLEM 5////////////////////



//What are all the falsy values in JavaScript and how do you check if something is falsy?


//False, null, undefined, NaN, 0, ""  if(!hello)



//////////////////PROBLEM 6////////////////////



//Create a function called myName that returns your name

function myName () {
	return "Scott";
}
  


//Now save the function definition of myName into a new variable called newMyName

 var newMyName = myName;

//Now alert the result of invoking newMyName

alert(newMyName())

//////////////////PROBLEM 7////////////////////



//Create a function called outerFn which returns an anonymous function which returns your name.

function outerFn () {
	return function() {
		return "Scott";
	}
}

//Now save the result of invoking outerFn into a variable called innerFn.

var innerFn = outerFn();

//Now invoke innerFn.

innerFn();
