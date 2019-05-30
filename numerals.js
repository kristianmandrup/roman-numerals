const lookupMap = {
  I: 1,
  IV: 4,
  V: 5,
  IX: 9,
  X: 10,
  XL: 40,
  L: 50
};

const translate = char => lookupMap[char];

const createProcess = (numbers, chars) => {
  const less = (acc, number, index) => {
    const outOfBounds = () => index >= numbers.length;

    lookaheadNumber = () => {
      const lookaheadChar = chars[index + 1];
      return lookupMap[lookaheadChar];
    };

    const calcLookahead = () => {
      if (lookaheadNumber() > number) {
        return acc - number;
      }
    };

    if (outOfBounds()) return;
    return calcLookahead();
  };

  const greater = (acc, number) => acc + number;

  return (acc, number, index) => {
    return less(acc, number, index) || greater(acc, number);
  };
};

const numerals = input => {
  const chars = input.split("");
  const numbers = chars.map(translate);
  return numbers.reduce(createProcess(numbers, chars), 0);
};

module.exports = {
  numerals
  // lookupMap: map
};
