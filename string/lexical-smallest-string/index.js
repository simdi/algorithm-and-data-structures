/*
* @author: Chisimdi Damian Ezeanieto
* @date: 05/02/2020
*/

const lexicographicallySmallestString = (str) => {
  /*
  * Steps: 
  * 1. Define, 2. Represent, 3. Approach/Strategy, 4. Algorithm, 5. Analyse, 6. Experiment
  */
  // "abczd" => "abcd"
  const result = str.split("")
                  .map(x => x.charCodeAt(0))
                  .sort((a, b) => a - b)
                  .slice(0, -1)
                  .map(x => String.fromCharCode(x))
                  .join("");
  return result;
}

module.exports = lexicographicallySmallestString;