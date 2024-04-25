function solution(d, budget) {
    let answer = 0, total = 0;

    d.sort((a, b) => a - b).forEach(price => {
        if(total + price <= budget) {
            total = total + price; 
            answer++;
        }
    });

    return answer;
}