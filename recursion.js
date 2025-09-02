//fibonacci.js
function fibsRec(n, a=0, b=1){
  // console.log("This was printed recursively");

  const fibs = [];
  if (n > 0) {
    console.log(a);
    fibsRec(n-1, b, a+b);
  }
  
  return 'fibsRec complete';
}

function mergeSort(array){
  //base case
  if(array.length === 1){
    return array;
  }
  //find the midpoint
  let mid = Math.floor(array.length/2);
  //split at midpoint
  let left = array.slice(0,mid);
  let right = array.slice(mid);
  // console.log('left: ', left);
  // console.log('right: ', right);

  //if arrays are sorted, megre them 
  return merge(mergeSort(left), mergeSort(right))
}
function merge(array1, array2) {
  let result = [];
  let i = 0;
  let j = 0;
  while(i < array1.length && j < array2.length) {
    if(array1[i] < array2 [j]) {
      result.push(array1[i]);
      i++;
    } else {
      result.push(array2[j]);
      j++;
    }
  }
  while(i<array1.length){
    result.push(array1[i]);
    i++;
  }
  while(j<array2.length){
    result.push(array2[j]);
    j++;
  }
  // console.log('result:', result)
  return result
}
console.log(fibsRec(8));
console.log(mergeSort([7,3, 1,5, 4, 2,6]));