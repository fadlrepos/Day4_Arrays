let arr = [10, 20, 30, 40];
let newArr = [];

for (let i = 0; i < arr.length; i++) {
  if (arr[i] !== 30) {
    newArr.push(arr[i]);
  }
}

console.log(newArr);