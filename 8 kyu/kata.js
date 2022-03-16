//Grasshopper - Personalized Message

const greet = (name, owner) => (name == owner) ? 'Hello boss' :'Hello guest';

//Opposite number

const opposite = (number) => Math.sign(number) < 0 ? Math.abs(number) : -Math.abs(number);

//Beginner Series #4 Cockroach

const cockroachSpeed = s => Math.floor(s * (100000 / 3600))