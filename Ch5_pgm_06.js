// A function with two arguments

var showSum;

showSum = function (number1, number2) {
	var total = number1 + number2;
	console.log("The sum is " + total);
};

showSum(30, 23);
showSum(2.8, -5);
showSum(56, 74);

var showProduct = function (number1, number2) {
	var result = number1 * number2;
	console.log("The product is " + result);
};

showProduct(5, 3);     
showProduct(-4, 10);   
showProduct(2.5, 4);
showProduct(2, 3);     
showProduct(10, 10);   
showProduct(-2, -8); 

var showDifference = function (number1, number2) {
	var difference = number1 - number2;
	console.log("The difference is " + difference);
};

var showQuotient = function (number1, number2) {
	var quotient = number1 / number2;
	console.log("The quotient is " + quotient);
};

showDifference(10, 5);   
showDifference(20, 8);   
showQuotient(10, 2);     
showQuotient(15, 3);     
showQuotient(7, 2);      



/* Further Adventures
 *
 * 1) Use the showSum function to add 56 and 74.
 *
 * To multiply two numbers, use the * symbol.
 * e.g. 3 * 5 is 3 multiplied by 5.
 *
 * 2) Create a showProduct function to multiply two numbers.
 *
 * 3) Use your function to multiply three pairs of numbers.
 *
 * To divide one number by another, use /.
 * e.g. 10 / 2 is 10 divided by 2.
 *
 * 4) What about showDifference and showQuotient
 *    for subtraction and division?
 *
 */