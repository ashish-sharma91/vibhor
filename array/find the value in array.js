// Find the value in array. If if you find the value then print the index;

let arr = [1,2,4,2];

let toFind = 2;

console.log(arr);

for(let i = 0; i < arr.length; i++){
  if(arr[i] === toFind){
    console.log(i);
  }
}



// i = 0        arr[0] = 1    1 === 2?  no
// i = 1        arr[1] = 2.   2 === 2?   yes.    print i.  1

// i = 1        arr[1] = 2.   2 === 2?   yes.    print i.  1