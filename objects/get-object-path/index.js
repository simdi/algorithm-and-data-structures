/**
 * @author: "Chisimdi Damian Ezeanieto"
 * @date: "05/07/2023"
 * 
 */

// function getObjectPath(obj, state = '') {
//   const result = {};
//   // Use a recursive statement
//   // the base case will be a number
//   console.log(obj)
//   for(let key in obj) {
//     const value = obj[key];
//     const preKey =  state ? `${state}.${key}` : key;
  
//     if (typeof value === 'object' && value !== null) {
//       const challengeResult = getObjectPath(value, preKey);

//       Object.assign(result, challengeResult);
//     } else {
//       result[preKey] = value;
//     }
//   }
//   return result;
// }

// Using generator function
function getObjectPath(args) {
  function* generatorFunction(obj, state = '') {
    const result = {};
    
    for(let key in obj) {
      const preKey = state ? `${state}.${key}` : key;
      if (typeof obj[key] === 'object') {
        yield [...generatorFunction(obj[key], preKey)].flat()
      } else {
        result[preKey] = obj[key];
        yield result;
      }
    }
  }

  const generator = generatorFunction(args);
  return [...generator].flat().reduce((acc, curr) => Object.assign(acc, curr), {})
}

module.exports = getObjectPath;