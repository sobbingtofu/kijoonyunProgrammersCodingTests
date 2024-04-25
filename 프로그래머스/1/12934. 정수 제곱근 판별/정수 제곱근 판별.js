function solution(n) {
    let answer = 0;
    let k = Math.sqrt(n);
    answer = (Number.isInteger(k)) ? Math.pow(k+1, 2) : -1
    return answer;
    
}