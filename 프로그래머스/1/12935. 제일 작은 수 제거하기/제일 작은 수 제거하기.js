function solution(arr) {
    
    if (arr.length === 1) {
        return [-1];
    }
    
    let number = Math.min(...arr);
    
    arr.splice(arr.indexOf(number),1);;
    return arr;
}