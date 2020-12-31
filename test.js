const findEvenNum = () => {
  let result = [];
  let i = 1;
  while (i <= 50) {
    if (i % 2 === 0) {
      result.push(i);
    }
    i++
  };
  return result;
};

findEvenNum();
