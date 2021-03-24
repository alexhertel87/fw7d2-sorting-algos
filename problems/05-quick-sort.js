// Implement Quick Sort

function quickSort(arr) {
  if (arr.length <= 1) {
    return arr
  }
  let pivot = arr.shift()
  let left = arr.filter(el => el < pivot);
  let right = arr.filter(el => el >= pivot);

  let leftSort = quickSort(left)
  let rightSort = quickSort(right)

  return [...leftSort, pivot, ...rightSort]
}


module.exports = {
  quickSort
};
