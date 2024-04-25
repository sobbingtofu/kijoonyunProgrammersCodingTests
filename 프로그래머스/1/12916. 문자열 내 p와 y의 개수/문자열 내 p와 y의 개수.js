function solution(s){
    let counter_p = 0;
    let counter_y = 0;
    let answer = true;
    for (let i=0; i < s.length; i++) {
        if ((s[i] === 'p') || (s[i] === 'P')) {
            counter_p = counter_p+1;
        }
        else if ((s[i] === 'y') || (s[i] === 'Y')) {
            counter_y = counter_y+1;
        }
    }
    if (counter_y === counter_p) {
        answer = true;
    }
    else {
        answer = false
    }
    return answer;
}