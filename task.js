function compareArrays(arr1, arr2) {
  let result = arr1.every((element, i) => element === arr2[i]) && arr1.length === arr2.length ;
  return result;
  }

function advancedFilter(arr) {
  return arr
  .filter(num => num % 3 == 0 && num > 0)
  .map(num => num * 10);
}
