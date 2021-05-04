import _ from 'lodash';

import formatter from './formatter.js';

const operators = ['-', '+'];

const getComprasion = (filepath1, filepath2) => {
  const json1 = formatter(filepath1);
  const json2 = formatter(filepath2);
  const keys1 = _.keys(json1);
  const keys2 = _.keys(json2);
  const keysAll = _.union(keys1, keys2);
  keysAll.sort();
  const result = {};
  for (let key of keysAll) {
    if (_.has(json1, key) && !_.has(json2, key)) {
      result[`${operators[0]} ${key}`] = json1[key];
    } else if (!_.has(json1, key) && _.has(json2, key)) {
      result[`${operators[1]} ${key}`] = json2[key];
    } else if (
      _.has(json1, key) &&
      _.has(json2, key) &&
      json1[key] === json2[key]
    ) {
      result[`  ${key}`] = json1[key];
    } else if (
      _.has(json1, key) &&
      _.has(json2, key) &&
      json1[key] !== json2[key]
    ) {
      result[`${operators[0]} ${key}`] = json1[key];
      result[`${operators[1]} ${key}`] = json2[key];
    }
  }
  const resultStringfy = JSON.stringify(result, null, 2);
  console.log(resultStringfy);
};

export default getComprasion;
// getComprasion('./file1.json', './file2.json');

// function replacer(key, value) {
//   return key.replace(/"/g, '');
// }

// const result2 = JSON.stringify(
//   obj,
//   function replacer(key, value) {
//     console.log(value);
//     return key.replace(/"/g, '');
//   },
//   '  ',
// );
// console.log(result2);
// return result;

// const result2 = JSON.stringify(
//   result,
//   function replacer(key, value) {
//     return key.replace(/"/g, '');
//   },
//   '   ',
// );
// console.log(result2);
// return result;
// };

// последнее последнее решение
// const getComprasion = (json1Path, json2Path) => {
//   const json1Fs = readFileSync(json1Path, 'utf-8');
//   const json2Fs = readFileSync(json2Path, 'utf-8');
//   const json1 = JSON.parse(json1Fs);
//   const json2 = JSON.parse(json2Fs);
//   const keys1 = _.keys(json1);
//   const keys2 = _.keys(json2);
//   const keysAll = _.union(keys1, keys2);
//   keysAll.sort();
//   const result = {};
//   for (let key of keysAll) {
//     if (_.has(json1, key) && !_.has(json2, key)) {
//       result[`${operators[0]} ${key}`] = json1[key];
//     } else if (!_.has(json1, key) && _.has(json2, key)) {
//       result[`${operators[1]} ${key}`] = json2[key];
//     } else if (
//       _.has(json1, key) &&
//       _.has(json2, key) &&
//       json1[key] === json2[key]
//     ) {
//       result[`  ${key}`] = json1[key];
//     } else if (
//       _.has(json1, key) &&
//       _.has(json2, key) &&
//       json1[key] !== json2[key]
//     ) {
//       result[`${operators[0]} ${key}`] = json1[key];
//       result[`${operators[1]} ${key}`] = json2[key];
//     }
//   }
//   console.log(result);
//   return result;
// };

// export default getComprasion;
// const getComprasion = (json1, json2) => {
//   const result = {};
//   const key1 = [];
//   const operators = ['-', '+'];
//   for (const [key, value] of Object.entries(json1)) {
//     for (const [key2, value2] of Object.entries(json2)) {
//       if (!json2.hasOwnProperty(key)) {
//         result[`${operators[0]} ${key}`] = value;
//       } else if (!json1.hasOwnProperty(key2)) {
//         result[`${operators[1]} ${key2}`] = value2;
//       } else if (json2.hasOwnProperty(key) && json1[key] === json2[key]) {
//         result[`  ${key}`] = value2;
//       } else if (
//         json1.hasOwnProperty(key2) &&
//         json2.hasOwnProperty(key) &&
//         json1[key2] !== json2[key]
//       ) {
//         result[`${operators[0]} ${key}`] = value;
//         result[`${operators[1]} ${key2}`] = value2;
//       }
//     }
//   }
//   console.log(key1);
//   return result;
// };

// getComprasion(filejson1, filejson2);

// Варианты последний
// import _ from 'lodash';

// import { readFileSync } from 'fs';

// // const json1Fs = readFileSync('./file1.json', 'utf-8');
// // const json2Fs = readFileSync('./file2.json', 'utf-8');
// // const json1 = JSON.parse(json1Fs);
// // const json2 = JSON.parse(json2Fs);

// const operators = ['-', '+'];

// const getComprasion = (json1Path, json2Path) => {
//   const json1Fs = readFileSync('json1Path', 'utf-8');
//   const json2Fs = readFileSync('json2Path', 'utf-8');
//   const json1 = JSON.parse(json1Fs);
//   const json2 = JSON.parse(json2Fs);
//   const keys1 = _.keys(json1);
//   const keys2 = _.keys(json2);
//   const keysAll = _.union(keys1, keys2);
//   keysAll.sort();
//   const result = {};
//   for (let key of keysAll) {
//     if (_.has(json1, key) && !_.has(json2, key)) {
//       result[`${operators[0]} ${key}`] = json1[key];
//     } else if (!_.has(json1, key) && _.has(json2, key)) {
//       result[`${operators[1]} ${key}`] = json2[key];
//     } else if (
//       _.has(json1, key) &&
//       _.has(json2, key) &&
//       json1[key] === json2[key]
//     ) {
//       result[`  ${key}`] = json1[key];
//     } else if (
//       _.has(json1, key) &&
//       _.has(json2, key) &&
//       json1[key] !== json2[key]
//     ) {
//       result[`${operators[0]} ${key}`] = json1[key];
//       result[`${operators[1]} ${key}`] = json2[key];
//     }
//   }
//   console.log(result);
//   return result;
// };
// getComprasion('./file1.json', './file2.json');

// export default getComprasion;
