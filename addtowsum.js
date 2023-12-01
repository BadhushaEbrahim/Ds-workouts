const addTwoNumbers = (numbers, target) => {
    for (let i = 0; i < numbers.length; i++) {
        for (let j = i + 1; j < numbers.length; j++) {
            if (numbers[j] + numbers[i]===target) {
                return [i, j];
            }
        }
    }
}

console.log(addTwoNumbers([1, 2, 3, 5, 5], 10));

