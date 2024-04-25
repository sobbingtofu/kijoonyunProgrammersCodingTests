function solution(n) {
    let answer = [];
    let k = n.toString();

    for (let i=0; i<k.length; i++){
        answer.push((parseInt(k[i])));
    }
    return answer.reverse();
}