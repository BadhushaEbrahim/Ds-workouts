// function fibonacci(n){
//     const fib=[0,1]
//     for(let i=2;i<=n;i++){
//         fib.push(fib[i-1]+fib[i-2])
//     }
//     console.log(fib);
//     return fib[n]
// }


function fib(n){
    if(n<=1){
        return n
    }
    console.log(fib(n-1),fib(n-2));
    return fib(n-1)+fib(n-2)
}

console.log(fib(4));





// console.log(fibonacci(2));

// console.log(fibonacci(6));

// console.log(fibonacci(5));
