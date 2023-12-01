var firstPalindrome = function(words) {

    for (let i = 0; i < words.length; i++) {
        let temp=words[i]
        console.log(words[i].split('').reverse().join(''));
        if(temp===words[i].split('').reverse().join('')){
            return temp
        }else{
            return ""
        }

    }
};

const words =
["def","ghi"]
console.log(firstPalindrome(words));