function solution(s) {
    
    let arr = [...s];
    let count = 0;
    for (i in arr) {
        if (arr[i] !== ' ') {
            if (count%2 === 0) {
                arr[i] = arr[i].toUpperCase();
                count++;
            }
            else {
                arr[i] = arr[i].toLowerCase();
                count++;
            }
        }
        else {
            count = 0;
        }

    }
    let answer = arr.join('');
    return answer;
}