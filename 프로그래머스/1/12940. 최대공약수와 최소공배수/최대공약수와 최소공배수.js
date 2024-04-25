function solution(n, m) {
    let answer = [];

    let gcd = 1;

    for(let i=2; i<=Math.min(n, m); i++){
        if(n % i === 0 && m % i === 0){
            gcd = i;
        }
    }
    
    let lcm = 1;
   
    while(true){
      if((lcm % n == 0) && (lcm % m == 0)){
        break;
      }
      lcm++;
    }
    
    answer[0] = gcd;
    answer[1] = lcm;
    return answer;
    
}