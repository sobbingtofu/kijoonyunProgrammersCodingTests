function solution(s) {
    let answer = [];
    let di_count = 0, zero_count = 0;

    while(s !== '1') {
        let tmp = '';

        for(let i in s) {
            if(s[i] == '0') {
                zero_count += 1;
            } else {
                tmp += s[i];
            }
        }

        tmp = (tmp.length).toString(2);
        di_count += 1;
        
        s = tmp;
    }

    answer = [di_count, zero_count]

    return answer;
}