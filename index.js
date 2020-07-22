// Add your functions here
const map = (array, fn) => {
    let newArray = []
    for (let element of array) {
        newArray.push(fn(element))
    }
    return newArray
}

function reduce(src, cb, starting){
    let r = (!!starting) ? starting : src[0]
    let i = (!!starting) ? 0 : 1
  
    for (; i < src.length; i++) {
      r = cb(src[i], r)
    }
  
    return r;
  }