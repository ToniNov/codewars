//Grasshopper - Personalized Message

const greet = (name, owner) => (name == owner) ? 'Hello boss' :'Hello guest';

//Opposite number

const opposite = (number) => Math.sign(number) < 0 ? Math.abs(number) : -Math.abs(number);

//Beginner Series #4 Cockroach

const cockroachSpeed = s => Math.floor(s * (100000 / 3600))

//Is the date today

function isToday(date) {
   return new Date().toDateString() === date.toDateString()
}

//Grasshopper - Summation

var summation = function (num) {
  return num ? num + summation(num - 1) : num
}

//8 kyu Will you make it?

const zeroFuel = (distanceToPump, mpg, fuelLeft) =>
distanceToPump <= mpg * fuelLeft ? true : false

//8 kyu Parse nice int from char problem

const getAge = (inputString) => Number(inputString[0])

// 8 kyu Count by X

function countBy(x, n) {
    const z = []
    const l = x * n

    for (let i = 1; i <= l; i++) {
        if (i % x === 0) z.push(i)
    }

    return z
}

//8 kyu
// Rock Paper Scissors!

const rps = (p1, p2) => {
    if (p1 === p2) {
        return `Draw!`;
    }
    if (p1 === 'rock' && p2 === 'scissors') {
        return `Player 1 won!`;
    } else if (p1 === 'paper' && p2 === 'rock') {
        return `Player 1 won!`;
    } else if (p1 === 'scissors' && p2 === 'paper') {
        return `Player 1 won!`;
    } else {
        return `Player 2 won!`;
    }
};