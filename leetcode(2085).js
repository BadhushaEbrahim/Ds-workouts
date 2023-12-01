var countWords = function(words1, words2) {

    var obj1={}
    var obj2={}

for(var i=0;i<words1.length;i++){
    obj1[words1[i]]=(obj1[words1[i]]+1||0)
}

for(var j=0;j<words2.length;j++){
    obj2[words2[j]]=(obj2[words2[j]]+1||0)
}
console.log(obj1);
console.log(obj2);

let count=0
for (const key in obj1) {
    if (obj1[key] === 0 && obj2[key] === 0) {
        console.log(key);
        count++
    }
}
return count 

};





words1 =
["leetcode","is","amazing","as","is"]
words2 =
["amazing","leetcode","is"]

console.log(countWords(words1, words2));