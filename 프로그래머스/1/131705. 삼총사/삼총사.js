function solution(number) {
  let count = 0;
  for (let i = 0; i < number.length; i++) {
    for (let j = 1; j < number.length; j++) {
      for (let k = 1; k < number.length; k++) {
          if ((i+j) >= number.length) continue;
          if ((number[i] + number[i + j] + number[k + i + j] === 0)) count += 1;
      }
    }
  }
  return count;
}