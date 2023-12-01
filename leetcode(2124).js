var checkString = function(s) {
    let sortedString=[...s].sort().join('');
    if (sortedString===s) {
        return true
    }else{
        return false
    }

};


var s="aababbb"
console.log(checkString(s));