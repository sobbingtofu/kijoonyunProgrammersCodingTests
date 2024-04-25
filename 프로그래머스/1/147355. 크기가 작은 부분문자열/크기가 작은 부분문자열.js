function solution(t, p) {
    let answer = 0;
    let arr01 = [...t], arr02 = [], arr03 = [], arr04 = [];
    const n = t.length - p.length + 1;
    for (let i = 0; i<n; i++) {
        for (let j = 0; j<p.length; j++) {
            arr02.push(arr01[i+j]);
        }
        arr03[i] = arr02.join('')
        arr02 = [];
    }
    
    for (k in arr03) {
        if(arr03[k] <= p) {
            arr04.push(arr03[k]);
        }
    }


    return arr04.length;
}