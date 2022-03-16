//Grasshopper - Personalized Message

const greet = (name, owner) => (name == owner) ? 'Hello boss' :'Hello guest';

//Opposite number

const opposite = (number) => Math.sign(number) < 0 ? Math.abs(number) : -Math.abs(number);