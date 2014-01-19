var printline = function(toPrint){
    print(toPrint+'\n');
}

var operators = ['+','-','/','*'];
var numbers = [0,1,2,3,4,5,6,7,8,9];

// Generate random operator
Array.prototype.getRandomPosition = function(){
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
function doOperation(value1, value2, operation) {
	return eval(value1+operation+value2);
}

function randomLevelGeneration(operations, numbers, numOfCycles) {

    printline("randomLevelGeneration");
    var number = numbers.getRandomPosition;
    var operation = operations.getRandomPosition;
    printline(number);
    printline(operation);
	var total = 0;
	for (var i = numOfCycles; i >= 0; i--) {
		total = doOperation (total, numbers.getRandomPosition, operations.getRandomPosition);
	}
    printline(total);
}

// generate the needed seeds
function generateSeeds() {
    var MIN_CYCLES = 5;
    var MAX_CYCLES = 20;
    printline("generateSeeds");
	var listOfOperators = operators.getRandomList();//randomNumberOfOperators();
	printline(listOfOperators);
	var listOfNumbers = numbers.getRandomList();//randomNumberOfNumbers();
	printline(listOfNumbers);
    var cycles = R(MIN_CYCLES, MAX_CYCLES);
    printline(cycles);
    randomLevelGeneration(listOfOperators, listOfNumbers, cycles);
}

generateSeeds();