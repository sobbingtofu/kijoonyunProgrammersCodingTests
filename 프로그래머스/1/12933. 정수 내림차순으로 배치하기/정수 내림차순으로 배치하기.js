function solution(n) {
    k = [...n.toString()];
    t = k.sort().reverse();
    return parseInt(k.join(""));
}