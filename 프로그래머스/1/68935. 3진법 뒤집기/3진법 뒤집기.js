function solution(n) {
    let answer = n.toString(3);
    answer = parseInt([...answer].reverse().join(''),3);
    return answer;
}