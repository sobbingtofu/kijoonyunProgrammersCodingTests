function solution(left, right) {
    let answer = 0;
    let counter = 0;
    for (let i=left; i<=right; i++) {
    // 범위 내 각 자연수 순환 
        counter = 0;
        // 약수 개수 초기화
        for (let k=1; k<=i; k++) {
        // 0부터 해당 자연수까지 나눠서 나머지가 0인 숫자 발견시 counter로 개수 기록
            if(i%k === 0) {
                counter += 1;
            }
        }
        answer = (counter%2 === 0) ? answer+i : answer-i;
    }
    return answer;
}