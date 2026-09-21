const arr = [1, 2];

arr.push(3);

console.log(arr);
// so the question is why when we use const = [1 ,2] ;  arr.push(3); works but arr =  [4, 5] 
// its because arr still refers to the same array  We're simply changing its contents 
// but with arr = [4, 5] we are assigning a new value to a const so it won't work