const list = ['Glad', 'Påsk', 'Forefront', '2021', 'Från', 'Jonas'];

const format = (word) => `* ${word} *`;
const longestWordLength = list.reduce((longestWord, word) =>
  longestWord.length > word.length ? longestWord : word
).length;

const asterisks = Array(longestWordLength + 4)
  .fill('*')
  .join('');

console.log(asterisks);
list.forEach((word) => console.log(format(word)));
console.log(asterisks);
