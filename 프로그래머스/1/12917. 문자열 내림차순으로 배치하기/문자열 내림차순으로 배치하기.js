function solution(s) {
    let answer = '';
    answer = [...s].sort().reverse().join('');
    return answer;
}