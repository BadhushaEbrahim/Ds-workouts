function summation(n){
    let sum=0;
    for(i=0;i<=n;i++){
        sum+=i;
    }
    return sum
}

var sum=summation(4)
console.log(sum);
{
 //object 
 const person = {
    firstName: 'rahul',
    lastName: 'Menon'
};

var keys = Object.keys(person); //o(n)
var values=Object.values(person) //o(n)
var entries=Object.entries(person) //o(n)
console.log(keys);
console.log(values);
console.log(entries);

}