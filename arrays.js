var chocolateBars = ["nickers", "hundred grand", "kitkat", "skittles"]

function destructivelyAddElementToBeginningOfArray(arr, newElem) {
  arr.unshift(newElem)
  return arr
}

function addElementToBeginningOfArray(arr, newElem) {
  return [newElem, ...arr]
}

function destructivelyAddElementToBeginningOfArray(arr, newElem) {
  arr.push(newElem)
  return arr
}

function addElementToEndOfArray(arr, newElem) {
  return [...arr, newElem]
}