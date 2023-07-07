/**
 * @author: Chisimdi Damian Ezeanieto
 * @date: 07/07/2023
 */

function reverse32BitInteger(x) {
  const isNegative = x < 0;
  const absX = Math.abs(x);
  const reversed = Number(String(absX).split('').reverse().join(''));

  if (reversed > Math.pow(2, 31) - 1) {
    return 0;
  }

  return isNegative ? -reversed : reversed;
}

module.exports = reverse32BitInteger;