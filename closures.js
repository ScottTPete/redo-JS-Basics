var outer = function(){
  var name = 'Tyler';
  return function(){
    return 'The original name was ' + name;
  }
};

//////////////////PROBLEM 1////////////////////
// Above you're given a function that returns another function which has a closure over the name variable.
// Invoke outer saving the return value into another variable called 'inner'.

var inner = outer();

//Once you do that, invoke inner.

inner();



//////////////////PROBLEM 2////////////////////


var callFriend = function(){
  var friend = 'Jake';
  function callF(number){
    return 'Calling ' + friend + ' at ' + number;
  }
  return callF;
};


//Above you're given a callFriend function that returns another function.
//Do what you need to do in order to call your function and get 'Calling Jake at 435-215-9248' in your console.


//saves result of callfriend to call. callFriend knows friend is 'Jake' so now call does too. Call is now a function that takes in a number and returns: 'Calling ' + friend + ' at ' + number;
var call = callFriend();


call('435-215-9248');




//////////////////PROBLEM 3////////////////////



/*
  Write a function called makeCounter that makes the following code work properly.
*/  

//creates a function that returns a function that increments counter by 1
function makeCounter() {
	var counter = 0;
	return function add() {
		counter++
		return counter
	}
	return add;
}
  
  
//Uncomment this once you make your function
   var count = makeCounter();
   console.log(count()); // 1
   console.log(count()); // 2
   console.log(count()); // 3
   console.log(count()); // 4



//////////////////PROBLEM 4////////////////////


// Inside the function called counterFactory
// return two functions that implement up/down counter.
// The first function is called inc, this function is responsible for incrementing the value once
// The second function is called dec, this function is responsible for decrementing the value by one
// You will need to use the module pattern to achieve this.


//returns an object with two methods. when inc is called increment value by 1. when dec is called decrement by 1;
function counterFactory(value) {
  return {
	  inc: function() {
		 return ++value; 
	  },
	  dec: function() {
		  return --value;
	  }
  }

}


counter = counterFactory(10);


console.log(counter.inc());
console.log(counter.dec());




//////////////////PROBLEM 5////////////////////


// Inside the motivation function create another function called message that will return welcomeText + firstname + lastname

  function motivation(firstname, lastname){

    var welcomeText = 'Your doing awesome keep it up ';

    function message() {
		return welcomeText + firstname + ' ' + lastname;
	}


    //Uncommment this to return the value of your invoked message function
     return message()
  }

  motivation('Billy', 'Bob'); // 'Your doing awesome keep it up Billy Bob



//////////////////PROBLEM 6////////////////////
// Inside the return create a publicMethod property that is a function that invokes privateMethod. After you create the privateMethod
// Invoke it by calling module.publicMethod(); outside the module scope

  var module = (function() {
    var person = {
      name: "phillip",
      age: 29,
      location: 'Utah'
    };

    var privateMethod = function(){
      return "Hi my name is " + person.name + ' I am ' + person.age + ' I live in ' + person.location + '.';
    };

    // Anything that is being returned is made public and can be invoked from outside our lexical scope

    return {
      publicMethod: function() {
		  return privateMethod()
	  }
    };

  })();

//Uncomment this after you create your public method
   module.publicMethod();



//////////////////PROBLEM 7////////////////////
// Here we have a for loop that will iterate as long as i is less than or equal to 5. What we need to do is console.log(i)
// So that it logs ( 1 then 2 then 3, etc). Run this code in your console to see what the output is.


/*
  for (var i = 0; i <= 5; i++) {
    setTimeout(function() {
      console.log(i)
    }, i * 1000)
  }
*/


  // To make this code work you will need to create a new scope for every iteration.
//create function called countEverySecond. as long as i < or = to 5 loop and add 1 to i each loop. 
var countEverySecond = function(){
	for (var i=1; i<=5; i++) {
		setTimeout(function timer(i){ //call setTimeout method which calls a function (We called it timer) that takes in a parameter of i
			console.log(i);
		}, i*1000, i );
	}
};
countEverySecond();





//////////////////PROBLEM 8////////////////////

function arrayCounter() {
	var count = [0];
	return function() {
		return count++;
	}
}

var funcArray = arrayCounter();



/*
  Make the following code work

  funcArray[0]() //0
  funcArray[1]() //1
  funcArray[2]() //2
  funcArray[3]() //3
  funcArray[4]() //4
  funcArray[5]() //5

  *Hint: Don't let this fool you. Break down what's really happening here.
*/


