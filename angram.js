const IsAnagram =(word1,word2)=>{
    if (word1.length!=word2.length) return false

    const obj1={}
    const obj2={}

for(i=0;i<word1.length;i++){
    obj1[word1[i]]=(obj1[word1[i]]+1||0)
    obj2[word2[i]]=(obj2[word2[i]]+1||0)
}

for (const key in obj1) {
    if(obj1[key]!==obj2[key]) return false
}
return true

}

console.log(IsAnagram("anagram","neagaram"))