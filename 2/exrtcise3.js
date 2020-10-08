var numbers = [1, 1.3, 55, 66.3, 5.3];

function needfive(numbers) {
  var five = [];
  for (var i = 0; i < numbers.length; i++) {
    if (numbers[i] % 5 === 0) {
      five.push(numbers[i]);
    }
  }
  return five;
}
needfive(numbers).length;