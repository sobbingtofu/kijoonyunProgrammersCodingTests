function solution(n)
{
    let answer = 0;
    
    for (let i of n.toString()) {
        answer += parseInt(i);
        
    }
    return answer;
}