function solution(n) {
    let count = 0;
    for (let i = 1; i<=n; i++) {
        let sum = 0, tmp =0;
        while(sum < n) {
            sum = sum + i + tmp;
            tmp++;
        }
        if (sum === n) {
            count +=1;
        }
    }
    return count;
}