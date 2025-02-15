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
  //map
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

  //•	push(), pop(), shift(), unshift(), map(), filter(), reduce(), slice(), splice(), sort().
}

const arr = new Array();
arr.push(1);
arr.push(2);
arr.push(3);
// arr.shift();
// arr.pop();
arr.unshift(4);

// let newArrasy = arr.map((item, index) => item + index);
// let filterArray = arr.filter((item, index) => item > 2);
console.log(arr);
console.log(filterArray);
