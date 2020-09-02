// Add your functions here

const map = (sourceArray, callbackFunction) => {
    let newArray = [] 
    for (let i = 0; i < sourceArray.length; i++) {
        let x = sourceArray[i]

        newArray.push(callbackFunction(x))
    }
    return newArray
}

const reduce = (sourceArray, callbackFunction, initialValue) => {
    if (initialValue === undefined) {
        initialValue = sourceArray[0]
        sourceArray = sourceArray.slice(1)
    }

    for (let i = 0; i < sourceArray.length; i++) {
        initialValue = callbackFunction(sourceArray[i], initialValue)
    }
    return initialValue 
}