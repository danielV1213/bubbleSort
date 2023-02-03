// Array of numbers to sort
let nArray = [4, 8, 10, 34, -2, 7, 20]

// Function for the bubble sort.
function bubble(numArray) {
    let i, num, k, aux

    num = numArray.length

    for (i = 1; i < num; i++) {
        for (k = 0; k < (num - i); k++) {
            if (numArray[k] > numArray[k + 1]) {
                aux = numArray[k]
                numArray[k] = numArray[k + 1]
                numArray[k + 1] = aux
            }
        }
    }

    let numArrayJSON = JSON.stringify(numArray)

    console.log('Arreglo normal:', numArray)
    console.log('Arreglo JSON:', numArrayJSON)
}

bubble(nArray)