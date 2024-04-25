function solution(x, n) {
    var answer = [x];
    let i = 0;
    for (i = 1; i < n; i++) {
        answer.push(x+x*i);
    }
    return answer;
}