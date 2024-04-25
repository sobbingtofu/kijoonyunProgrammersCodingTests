function solution(s) {
    s = s.split(' ');
    let min = Math.min(...s);
    let max = Math.max(...s);
    let answer = `${min} ${max}`;
    return answer;
}