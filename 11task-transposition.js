let arrInt = [1, 100, 40, 999, 5, 2];
let arrInt2 = [100, 80, 6578, 999, 2000];
function selectMin(arr) {
    let min = arr[0];
    for(let i of arr) {
        if(i < min ) {
            min = i;
        }
    }
    return min
}
console.log(selectMin(arrInt2));