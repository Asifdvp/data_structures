class Array {
  constructor() {
    this.data = [];
  }
  //Push
  push(value) {
    this.data[this.data.length] = value;
  }
  //Pop
  pop() {
    if (this.data.length === 0) return undefined;
    const lastItem = this.data[this.data.length - 1];
    this.data.length--;
    return lastItem;
  }
  //Shift
  shift() {
    if (this.data.length === 0) return undefined;
    let firstItem = this.data[0];
    for (let i = 0; i < this.data.length - 1; i++) {
      this.data[i] = this.data[i + 1];
    }
    this.data.length--;
    return firstItem;
  }
  //Unshift
  unshift(value) {
    if (this.data.length === 0) {
      this.data[0] = value;
    }
    this.data.length++;
    for (let i = this.data.length - 1; i > 0; i--) {
      this.data[i] = this.data[i - 1];
    }
    this.data[0] = value;
  }
  //Map
  map(func) {
    let newArrayy = [];
    for (let i = 0; i < this.data.length; i++) {
      newArrayy[i] = func(this.data[i], i);
    }
    return newArrayy;
  }
  //Filter
  filter(func) {
    let newArray = [];
    for (let i = 0; i < this.data.length; i++) {
      if (func(this.data[i], i)) {
        newArray.push(this.data[i]);
      }
    }
    return newArray;
  }
  //Reduce
  reduce(func, initialValue) {
    let startIndex = 0;
    let totalValue;

    if (initialValue != undefined) {
      totalValue = initialValue;
    } else {
      if (this.data.length === 0) {
        throw new TypeError(
          "TypeError: Reduce of empty array with no initial value"
        );
      }
      totalValue = this.data[0];
      startIndex = 1;
    }

    for (let i = startIndex; i < this.data.length; i++) {
      totalValue = func(totalValue, this.data[i]);
    }
    return totalValue;
  }
  //Slice
  slice(start = 0, end = this.data.length) {
    let newArr = [];
    let arr = this.data;
    if (!arr.length) return [];

    let startIndex =
      start < 0 ? Math.max(arr.length + start, 0) : Math.min(start, arr.length);
    let endIndex =
      end < 0 ? Math.max(arr.length + end, 0) : Math.min(end, arr.length);
    for (let i = startIndex; i < endIndex; i++) {
      newArr.push(this.data[i]);
    }
    return newArr;
  }

  //Reduce

  //•	push(), pop(), shift(), unshift(), map(), filter(), reduce(), slice(), splice(), sort().
}

const animals = new Array();
animals.push("ant");
animals.push("bison");
animals.push("camel");
animals.push("duck");
animals.push("elephant");
// arr.shift();
// arr.pop();
// arr.unshift(4);

// let newArrasy = arr.map((item, index) => item + index);
// let filterArray = arr.filter((item, index) => item > 2);
// let reduceArr = arr.reduce((acc, item) => (acc += item));
// console.log(reduceArr);

// console.log(animals[-1])

console.log(animals.slice(null, null));
// Expected output: Array ["camel", "duck", "elephant"]

console.log(animals.slice(2, 4));
// Expected output: Array ["camel", "duck"]

console.log(animals.slice(1, 5));
// Expected output: Array ["bison", "camel", "duck", "elephant"]

console.log(animals.slice(-2));
// Expected output: Array ["duck", "elephant"]

console.log(animals.slice(0, -4));
// Expected output: Array ["camel", "duck"]

console.log(animals.slice());
// Expected output: Array ["ant", "bison", "camel", "duck", "elephant"]
