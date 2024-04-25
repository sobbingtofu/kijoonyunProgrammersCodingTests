function solution(phone_number) {
    let answer = '';
    let arr = [...phone_number]
    for (let i=0; i < arr.length-4; i++) {
        arr[i] = '*';
    }
    return arr.join('');
}