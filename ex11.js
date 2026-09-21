let arr = [1, 2 ,4 , 5];
let newArr = [];

for (let i = 0; i < arr.length; i++) {
  if (arr[i] === 3) {
    newArr.push(arr[i]);
  }
}

console.log(newArr);