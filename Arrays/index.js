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

  //Splice

  splice(start = 0, deleteCount = 0, ...items) {
    const arr = this.data;
    let startIndex =
      start < 0 ? Math.max(arr.length + start, 0) : Math.min(arr.length, start);
    let deleteItems = arr.slice(startIndex, startIndex + deleteCount);

    this.data = [
      ...arr.slice(0, startIndex),
      ...items,
      ...arr.slice(startIndex + deleteCount),
    ];
    return deleteItems;
  }

  reverse1() {
    let arr = [...this.data];
    for (let i = 0; i < this.data.length; i++) {
      this.data[i] = arr[arr.length - 1 - i];
    }
  }
  reverse() {
    let left = 0;
    let right = this.data.length - 1;
    while (left < right) {
      let temp = this.data[left];
      this.data[left] = this.data[right];
      this.data[right] = temp;
      left++;
      right--;
    }
  }

  bubbleSort() {
    let n = this.data.length;
    let arr = this.data;
    for (let i = 0; i < n - 1; i++) {
      for (let j = 0; j < n - i - 1; j++) {
        if (this.data[j] > this.data[j + 1]) {
          // let temp = arr[j];
          // arr[j] = arr[j + 1];
          // arr[j + 1] = temp;
          [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        }
      }
    }
    return arr;
  }

  bubbleSortRecursive(n = this.data.length) {
    let arr = this.data;

    if (n == 1) return arr;
    let swapped = false;
    for (let i = 0; i < n - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
        swapped = true;
      }
    }
    if (!swapped) {
      console.log("onsuzfa siralnib");
      return arr;
    }
    return this.bubbleSortRecursive(n - 1);
  }

  //•	splice(), sort().
}

const animals = new Array();
animals.push(5);
animals.push(3);
animals.push(2);
animals.push(1);
animals.push(4);

// console.log(animals.splice(0));
// console.log(animals.splice(0, 2, "salam", "dtes"));
console.log(animals);
console.log(animals.bubbleSortRecursive());
console.log(animals.bubbleSortRecursive());
