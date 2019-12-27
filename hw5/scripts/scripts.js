'use strict';

function mathematic() {
    let userNums = prompt('Введите числа через запятую', '').split(',').map(Number);
    let numsArray = userNums.filter(Number);
    console.log(Math.max.apply(null, numsArray));

    let sumArray = 0;
    for (let i=0; i < numsArray.length; i++){
        sumArray += numsArray[i];
    }
    console.log(sumArray);

    let evenNums = [];
    for (let i=0; i < numsArray.length; i++){
        if (numsArray[i] % 2 === 0){
            evenNums.push(numsArray[i]);
        }
    }
    console.log(evenNums);
}
mathematic();