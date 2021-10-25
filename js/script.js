/*
CREATE AN ALGORITHM THAT DIVIDE DIFFERENT VARIABLES CYCLE RESULTS
BASED ON DIVISION BY 3, 5 AND BY 3 AND 5
*/
const divSquare = document.getElementById('block_container');

for (let i = 1; i <=100; i++){
    const square = document.createElement('div');
    square.classList.add('square');
    divSquare.append(square);

    if(i % 15 === 0) {
        square.classList.add('fizzBuzz');
        square.append("FizzBuzz");
    }else if(i % 5 === 0) {
        square.classList.add('divBuzz');
        square.append("Buzz")
    }else if (i % 3 === 0) {
        square.classList.add('divFizz');
        square.append("Fizz");
    }else {
        square.append(i);
    }
}