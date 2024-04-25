function solution(numbers) {
    let result = 0;
    let arr = [0,1,2,3,4,5,6,7,8,9]
    for (let i = 0; i <= 9; i++) {
        if (!numbers.includes(i)) result += i;
    }
    return result;
}