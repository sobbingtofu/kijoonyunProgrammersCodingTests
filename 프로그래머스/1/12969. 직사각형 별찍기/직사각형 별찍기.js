process.stdin.setEncoding('utf8');
process.stdin.on('data', data => {
    const n = data.split(" ");
    const a = Number(n[0]), b = Number(n[1]);
    let answer = [];
    for (let i=0; i<a; i++) {
        answer[i] = '*';
    }
    answer = answer.join('')
    for (let k=1; k<=b; k++) {
        console.log(answer);
    }

});