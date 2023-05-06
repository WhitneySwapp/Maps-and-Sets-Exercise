// Write a function called hasDuplicate which accepts an array and returns true or false if that array contains a duplicate
// hasDuplicate([1,3,2,1]) // true
// hasDuplicate([1,5,-1,4]) // false

const hasDuplicate = arr => new Set(arr).size !== arr.length;


// Code Referenced: 
// Posted by Domenic on 9/11/11: https://stackoverflow.com/questions/7376598/in-javascript-how-do-i-check-if-an-array-has-duplicate-values

// Write a function called vowelCount which accepts a string and returns a map where the keys are numbers and the values are the count of the vowels in the string.
// vowelCount('awesome') // Map { 'a' => 1, 'e' => 2, 'o' => 1 }
// vowelCount('Colt') // Map { 'o' => 1 }

function vowelCount(str){
    const vowels = 'aeiou';
    const m = new Map();

    for (let i = 0; i <str.length; i++){
        const lowerCase = str.toLowerCase();
        let char = lowerCase[i]
        if (vowels.includes(char)) {
            !m.has(char) ? m.set(char, 1) : m.set(char, m.get(char) + 1);
        }
    }
    return m;
}

// Code Referenced: 
// Posted by The fourth bird on 2/22/21: https://stackoverflow.com/questions/66319832/counting-vowels-in-a-string-js
// Posted by Nerdragen on 2/22/21: https://stackoverflow.com/questions/66319832/counting-vowels-in-a-string-js