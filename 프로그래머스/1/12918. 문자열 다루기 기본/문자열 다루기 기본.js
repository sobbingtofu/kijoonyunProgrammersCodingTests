function solution(s) {
    let answer = true;
    let test_01 = /^[0-9]*$/;
    if ((s.length === 4 || s.length === 6) && (test_01.test(s))) {
        answer = true;
    }
    else {
        answer = false;
    }
    return answer;
}