//plaindrome is a number thats reads the same from backwards and fawards

const palindrome=(x)=>{
return x<0?false:x===+x.toString().split("").reverse().join("")
}

console.log(palindrome(313));