// This is the link to this JavaScript Coding Challenge
// https://discord.com/channels/949141893508399175/949141893999128678

function countBits(n){
    // We start by doing a simple if-else statement when n is zero it will return zero. If not then we will proceed to create array arr for initializing the value of quotient at index zero. Then we use the while loop setting the condition for the quotient until it reaches the value of 1. We use the Math.floor function to truncate the decimal places without rounding the quotient. We set a counter for the one then we use the modulus division to detect that if it has a remainder of 1, we increment the counter. We use the pop and push so that the latest quotient is retained. We push the remainder of the modulus division in the binary array. Then we use reverse, toString(), split, and join to output the final binary conversion.
    if(n == 0){
        return console.log(`${n} in binary is ${n}`)
    } else {
        let arr = [n]
        let quotient = arr[0]
        let binary = []
        let counter = 0
        while(quotient >= 1){
            // console.log(quotient, quotient % 2)
            if(quotient % 2 == 1){
                counter++
            }
            binary.push(quotient % 2)
            quotient = Math.floor(arr[0]/2)
            arr.pop()
            arr.push(quotient)
        }
        let binarystr = binary.reverse().toString().split(',').join('')
        // console.log(binary.reverse().toString().split(',').join(''))
        console.log(`The number ${n} in binary is: ${binarystr}\nThe frequency of 1 or true: ${counter}`)
    } 
}
countBits(1234)
console.log('========')
countBits(0)
console.log('========')
countBits(12)
console.log('========')
countBits(9)
console.log('========')
countBits(10)