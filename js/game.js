var printline = function(toPrint){
    print(toPrint+'\n');
}

var operators = ['+','-','/','*'];
var numbers = [0,1,2,3,4,5,6,7,8,9];

// Generate random operator
Array.prototype.getRandomElement = function(){
    return this[Math.floor(Math.random()*this.length)];
}

Array.prototype.shuffle = function(){
    for(var j, x, i = this.length; i; j = Math.floor(Math.random() * i), x = this[--i], this[i] = this[j], this[j] = x);
    return this;
};

Array.prototype.getRandomList = function(){
	var n = R(1,this.length);
	var randomList = [];
	
	this.shuffle();

	for (var i = 0; i < n; i++) {
		randomList.push(this[i]);
	}
	
	return randomList;
}

// Integer random generator
var R = function(min,max){
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Do Calculation
function doOperation(value1, operation, value2) {
	return eval(value1+operation+value2);
}

function isMultiple(x,y){
	//x and y are both integers
	var remainder = x % y;
	if (remainder == 0){
		return true;
	} else {
		return false;
	}
}

function randomLevelGeneration(listOfNumbers, listOfOperators, numOfCycles) {
	var total = listOfNumbers.getRandomElement();
	var level = ""+total;
	for (var i = 0; i < numOfCycles;) {
		var operator = listOfOperators.getRandomElement();
		var number = listOfNumbers.getRandomElement();
		if(operator == '/' && number == 0){
			continue;
		}
		if(operator == '/' && !isMultiple(eval(level),number)){
			continue;
		}
		level += operator + number;
		i++;
	}
	return level;
}

// generate the needed seeds
function generateSeeds() {
	localStorage.clear();
    //printline("generateSeeds");
	var listOfOperators = operators.getRandomList();
	//printline(listOfOperators);
	var listOfNumbers = numbers.getRandomList();
	//enable(listOfOperators);
	//enable(listOfNumbers);
	var level = randomLevelGeneration(listOfNumbers,listOfOperators,R(3,5));
	console.log(level);
	console.log(eval(level));
	//printline(listOfNumbers);
	//save();
	//load();
}

// Storage Utils
function save(){
	if (localStorage.level)
	  {
	  localStorage.level=Number(localStorage.level)+1;
	  }
	else
	  {
	  localStorage.level=1;
	  }
}

function load(){
	if (localStorage.level)
	  {
	  console.log(localStorage.level);
	  }
	else
	  {
	  console.log(0);
	  }
}

function saveObject(name,obj){
	var testObject = { 'one': 1, 'two': 2, 'three': 3 };

	// Put the object into storage
	localStorage.setItem('testObject', JSON.stringify(testObject));

	// Retrieve the object from storage
	var retrievedObject = localStorage.getItem('testObject');

	console.log('retrievedObject: ', JSON.parse(retrievedObject));
}

generateSeeds();