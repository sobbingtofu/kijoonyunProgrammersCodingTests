function solution(price, money, count) {
    let answer = 0;
    let total_price = 0;
    for (let i=1; i<=count; i++) {
        total_price = total_price + price*i;
    }
    answer = total_price - money;
    if (answer > 0) {
        return answer;
    }
    else {
        return 0;
    }
    
}