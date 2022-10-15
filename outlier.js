const outlier = (arr) => {
    let odd = [];
    let even = [];
    for(let i = 0; i < arr.length; i++) {
        const num = arr[i];
        if (num % 2 === 0) {
            even.push(num);
        }
        else {
            odd.push(num);
        }

        if (odd.length >= 2) {
            return arr.find((num) => num % 2 === 0)
        }
        if (even.length >= 2) {
            return arr.find((num) => num % 2 !== 0)
        }
    }
}


console.log(outlier([2, 4, 0, 100, 4, 11, 2602, 36]));
console.log(outlier([-160, 3, 1719, 19, 11, 13, -21]));