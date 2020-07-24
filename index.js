// Your code here

const map = (sourceArray, funct) => {
    return sourceArray.map(e => funct(e))
}

const reduce = (sourceArray, funct, startingPoint=0) => {
    return sourceArray.reduce(funct, startingPoint)
}