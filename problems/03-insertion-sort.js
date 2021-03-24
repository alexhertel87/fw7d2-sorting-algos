// Implement Insertion Sort

function insertionSort(array) {
  for (let i = 1; i < array.length; i++) {
    let valToInsert = array[i]
    let holePos = i
    while (holePos > 0 && array[holePos - 1] > valToInsert) {
      array[holePos] = array[holePos - 1];
      holePos--
    }
    array[holePos] = valToInsert
  }
  return array;
}

module.exports = {
  insertionSort
};
