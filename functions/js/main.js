// 1 task
function sum(a,b) {
    return a+b
}

console.log(sum(4,5))

// 2 task
function maximumNumber(...numbers){
    if(numbers.length === 0) {
        throw new Error("Reikia nurodyti skaiciu")
    }
    let max = numbers[0]

    for(let i = 1; i < numbers.length; i++) {
        if (numbers[i] > max) {
            max = numbers[i]
        }
    }

    return max
}

const result = maximumNumber(1,2,3,4,5,6,54,543,95);

console.log(result)