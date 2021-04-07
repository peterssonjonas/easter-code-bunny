const SIZE = 4;

const solveNQueens = (size, row, colPlacements, result) => {
  if (row === size) {
    result.push([...colPlacements]);
    return;
  }

  for (let col = 0; col < size; col++) {
    colPlacements.push(col);

    if (isValid(colPlacements)) {
      solveNQueens(size, row + 1, colPlacements, result);
    }
    colPlacements.pop();
  }
};

const isValid = (colPlacements) => {
  const rowId = colPlacements.length - 1;
  for (let i = 0; i < rowId; i++) {
    const diff = Math.abs(colPlacements[i] - colPlacements[rowId]);
    if (diff === 0 || diff === rowId - i) return false;
  }
  return true;
};

const printResult = (results) => {
  console.log('Possible solutions');
  results.forEach((result, i) => {
    console.log('Solution', i + 1);
    result.forEach((col) => {
      const queenPlacement = Array(SIZE)
        .fill(0)
        .map((v, i) => (col === i ? 1 : v))
        .join(', ');
      console.log(`{ ${queenPlacement} }`);
    });
    console.log('**************');
  });
};

const results = [];
solveNQueens(SIZE, 0, [], results);

printResult(results);
