let array = [10000, 1000, 999, 99, 205, 67, 105];

function numMin(arr) {
    let min = arr[0];
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] < min) {
            min = arr[i]
        }         
    }
    return arr.indexOf(min);   
}
console.log(numMin(array))
