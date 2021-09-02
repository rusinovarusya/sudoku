module.exports = function solveSudoku(matrix) {
  const size = 9;

  let matrixCopy = [];
  for (let i = 0; i < size; ++i)
    matrixCopy[i] = Array(size);

  for (let i = 0; i < size; ++i) 
    for (let j = 0; j < size; ++j)
      matrixCopy[i][j] = matrix[i][j];

  for (let rowIndex = 0; rowIndex < size; ++rowIndex) {
    for (let columnIndex = 0; columnIndex < size; ++columnIndex) {
      if (matrixCopy[rowIndex][columnIndex] == 0) {
        //
        let variants = [1, 2, 3, 4, 5, 6, 7, 8, 9];
        for (let i = 0; i < size; ++i) {
          for (let j = 0; j < variants.length; ++j) {
            if (matrixCopy[rowIndex][i] == variants[j]) {
              variants[j] = -1;
            }
          }
        }
        for (let i = 0; i < size; ++i) {
          for (let j = 0; j < variants.length; ++j) {
            if (matrixCopy[i][columnIndex] == variants[j]) {
              variants[j] = -1;
            }
          }
        }
        
        for (let i = 0; i < variants.length; ++i) {
          if (variants[i] != -1) matrixCopy[rowIndex][columnIndex] = variants[i];
        }
      }
    }
  }

  return matrixCopy;
}