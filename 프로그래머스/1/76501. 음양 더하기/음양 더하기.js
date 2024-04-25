function solution(absolutes, signs) {
    let arr = [];
    let answer = 0;
    for (let i =0; i<absolutes.length; i++){
        if(signs[i] === true) {
            arr.push(absolutes[i]);
        }
        else {
            arr.push(absolutes[i]*-1);
        }
    }
    for (let k = 0; k<arr.length; k++){
        answer += arr[k];
    }
    return answer;
    
}