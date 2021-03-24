// Implement Merge Sort
//******* MY CODE ********/
function merge(arr1, arr2) {
  let merged = []
  while (arr1.length && arr2.length) {
    if (arr1[0] > arr2[0]) {
      merged.push(arr2.shift())
    } else {
      merged.push(arr1.shift())
    }
  }
  while (arr1.length) {
    merged.push(arr1.shift())
  }
  while (arr2.length) {
    merged.push(arr2.shift())
  }
  return merged
}

//******** aA CODE *******/
// function merge(array1, array2) {
//   let merged = [];

//   while (array1.length || array2.length) {
//     let ele1 = array1.length ? array1[0] : Infinity;
//     let ele2 = array2.length ? array2[0] : Infinity;

//     let next;
//     if (ele1 < ele2) {
//       next = array1.shift();
//     } else {
//       next = array2.shift();
//     }

//     merged.push(next);
//   }

//   return merged;
// }


//******** MY CODE *********/
// function mergeSort(arr) {
  // if (arr.length <= 1) return arr;

  // let minIdx = Math.floor(arr.length / 2);
  // let left = arr.slice(0, minIdx);
  // let right = arr.slice(minIdx);

  // let leftSort = mergeSort(left)
  // let rightSort = mergeSort(right)

  // return merge(leftSort, rightSort)
// }

//********* a/A CODE ***********/
function mergeSort(array) {
  if (array.length <= 1) {
      return array;
  }

  let midIdx = Math.floor(array.length / 2);
  let leftHalf = array.slice(0, midIdx);
  let rightHalf = array.slice(midIdx);

  let sortedLeft = mergeSort(leftHalf);
  let sortedRight = mergeSort(rightHalf);

  return merge(sortedLeft, sortedRight);
}

module.exports = {
  merge,
  mergeSort
};
