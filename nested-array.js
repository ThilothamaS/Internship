function nestedOperation(array) {
  for (let i = 0; i < array.length; i++) {
    if (typeof array[i] !== "string") {
      array[i] = arrayOperation(array[i]);
    }
  }
  console.log(array);
  let value = array.length - 1;
  if (array[value] === "add") {
    let sum = array[0];
    for (let i = 1; i < value; i++) {
      sum += array[i];
    }
    return sum;
  } else if (array[value] === "subtract") {
    let sub = array[0];
    for (let i = 1; i < value; i++) {
      sub -= array[i];
    }
    return sub;
  } else if (array[value] === "multiply") {
    let mul = array[0];
    for (let i = 1; i < value; i++) {
      if (array[i] === 0) {
        return 0;
      }
      mul = mul * array[i];
    }
    return mul;
  } else {
    let div = array[0];
    for (let i = 1; i < value; i++) {
      if (array[i] === 0) {
        return 0;
      }
      div = div / array[i];
    }
    return div;
  }
}

function arrayOperation(arr) {
  const value = arr.length - 1;

  if (arr[value] === "add") {
    let sum = arr[0];
    for (let i = 1; i < value; i++) {
      sum += arr[i];
    }
    return sum;
  } else if (arr[value] === "subtract") {
    let sub = arr[0];
    for (let i = 1; i < value; i++) {
      sub -= arr[i];
    }
    return sub;
  } else if (arr[value] === "multiply") {
    let mul = arr[0];
    for (let i = 1; i < value; i++) {
      if (arr[i] === 0) {
        return 0;
      }
      mul = mul * arr[i];
    }
    return mul;
  } else {
    let div = arr[0];
    for (let i = 1; i < value; i++) {
      if (arr[i] === 0) {
        return 0;
      }
      div = div / arr[i];
    }
    return div;
  }
}

const finalValue = nestedOperation([
  [5, 5, 2, "multiply"],
  [2, 5, "add"],
  [10, 2, 0, "divide"],
  "add",
]);

console.log(finalValue);
