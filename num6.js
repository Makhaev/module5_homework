// задание 6

function hasTwins(array){
  return array.length !== new Set(array).size;
}
console.log(hasTwins(arr))