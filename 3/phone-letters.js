const keyMap = new Map();
keyMap.set('1', ' ');
keyMap.set('2', 'abc');
keyMap.set('3', 'def');
keyMap.set('4', 'ghi');
keyMap.set('5', 'jkl');
keyMap.set('6', 'mno');
keyMap.set('7', 'pqrs');
keyMap.set('8', 'tuv');
keyMap.set('9', 'wxyz');
keyMap.set('0', ' ');

const letterCombinations = (number) => {
  const letters = number.split('').map((num) => keyMap.get(num).split(''));
  return combine(letters);
};

const combine = ([first, ...[second, ...rest]]) => {
  if (!second) return first;

  const combined = first.flatMap((a) => second.map((b) => `${a}${b}`));

  return combine([combined, ...rest]);
};

const phoneNumber = process.argv[2];
if (!phoneNumber) {
  console.log('You must provide a phone number');
  return;
}

const combinations = letterCombinations(phoneNumber);

console.log(combinations);
