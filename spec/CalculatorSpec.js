describe("Calculator", function() {
  var calculator;

  beforeEach(function() {
    calculator = new Calculator();
  });

  it("should add two numbers correctly", function() {
    calculator.add(2,3);
    expect(calculator.result).toEqual(5);
  });

  it("should subtract two numbers correctly", function() {
    calculator.subtract(3,2);
    expect(calculator.result).toEqual(1);
  });

  it("should divide two numbers correctly", function() {
    calculator.divide(6,2);
    expect(calculator.result).toEqual(3);
  });

  it("should add two numbers correctly", function() {
    calculator.multiply(2,3);
    expect(calculator.result).toEqual(6);
  });

  it("should the number be in between the specified numbers", function() {
    expect(4).toBeBetween(3,5);
  });

  //Spec for factorial operation for positive number
  it("should be able to calculate factorial of 9", function() {
      expect(calculator.factorial(9)).toEqual(362880);
  });
  //Spec for factorial operation for negative number
  it("should be able to throw error in factorial operation when the number is negative", function() {
      expect(function() { 
          calculator.factorial(-7)
      }).toThrowError(Error);
  });

});
