function Calculator() {
}
Calculator.prototype.add = function(a, b) {
  this.result = a + b;
};

Calculator.prototype.subtract = function(a, b) {
  this.result = a - b;
};

Calculator.prototype.divide = function(a, b) {
 this.result = a / b;
};

Calculator.prototype.multiply = function(a, b) {
 this.result = a * b;
};

Calculator.prototype.factorial = function(number) {
    if (number < 0) {
        throw new Error("There is no factorial for negative numbers");
    } else if (number == 1 || number == 0) {
        return 1;
    } else {
        return number * this.factorial(number - 1);
    }
}

Calculator.prototype.average = function(number1, number2) {
    return (number1 + number2) / 2;
}
