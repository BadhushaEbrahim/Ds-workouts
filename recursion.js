//this is a function that calls itself and return the function when
//a base case is meet(its a piece of code of certain condition according our logic)

function factorial(num){
    if(num===1) return 1
    return num * factorial (num-1)
    /* first phase num=3 ,num-1=2
    3*factorial(2) return 6
    2*factorial(1) return 2
    condition meet num ===1 then return 1
    |^| return starts from here
    */ 
}

var Factorial=factorial(3)
console.log(Factorial);

