/*
* @author: Chisimdi Damian Ezeanieto
* @date: 16/03/2023
- Should take two params:
  - object
  - keys separated by dots as string
- Return value if it exists at that path inside the object, else return undefined
*/

// const findPath = (obj, path) => {
//   if (!path) return undefined;
  
//   const keys = path.split('.');
//   let value = obj;
//   for (let key of keys) {
//     if (!value.hasOwnProperty(key)) {
//       return undefined;
//     }
//     value = value[key];
//   }
//   return value;
// };

// const findPath = (obj, path) => {
//   return path.split('.').reduce((value, key) => value && value[key], obj);
// };

// Using Recursion
const findPath = (obj, path) => {
  const keys = path.split('.');
  if (keys.length === 1) {
    return obj[path];
  } else {
    const nextKey = keys.shift();
    const nextObj = obj[nextKey];
    if (nextObj === undefined) {
      return undefined;
    }
    return findPath(nextObj, keys.join('.'));
  }
}

module.exports = findPath;