var math = window.prompt("Do you want to multiply, divide, add, or subtract?");
var num1 = window.prompt("Enter your first number here:");
var num2 = window.prompt("Enter your second number here:");
num1 = parseFloat(num1);
num2 = parseFloat(num2);
var result;
switch (math){
case "multiply":
    result = num1 + " * "+ num2 + " equals " + (num1 * num2) + ".";
break;

case "divide":
    result = num1 + " divided by " + num2 + " equals " + (num1 / num2) + ".";
break;

case "add":
    result = num1 + " plus " + num2 + " equals " + (num1 + num2) +".";
break;

case "subtract":
    result = num1 + " minus "+ num2 + " equals " + (num1 - num2) +".";
break;

default:
    result = "Please enter multiply, divide, add, or subtract."
break;
}