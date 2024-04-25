function solution(x) {
    let x_str = [...x.toString()];
    let x_int = x_str.map(v => parseInt(v));
    let sum = 0;
    x_int.forEach(v => { sum += v });
    let answer = (x%sum === 0) ? true : false;
    return answer;
}