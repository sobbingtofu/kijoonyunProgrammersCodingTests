function solution(num) {
    let counter = 0;
    if (num === 1) {
        return 0;
    }
    while (num !== 1) {
        if (num % 2 === 0) {
            num = num/2;
        }
        else {
            num = num*3 + 1;
        }
        counter++;
        if (counter > 500) {
            return -1;
        }
    }
    return counter;
}