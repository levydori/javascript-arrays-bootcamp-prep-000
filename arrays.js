var chocolateBars = ["nickers", "hundred grand", "kitkat", "skittles"]

function destructivelyAddElementToBeginningOfArray(arr, newElem) {
  arr.unshift(newElem)
  return arr
}

function addElementToBeginningOfArray(arr, newElem) {
  return [newElem, ...arr]
}