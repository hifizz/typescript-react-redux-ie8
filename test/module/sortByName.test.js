// function sortByName(a, b) {
//   return a.localeCompare(
//     b,
//     // "zh-Hans-CN",
//     "pinyin",
//     {
//       sensitivity: "accent",
//       // numeric: true, //
//       caseFirst: 'lower',
//       ignorePunctuation: true
//     });
// }

var sortByName = require("../../src/module/sortByName");

// 全集 case1
var case1 = [
  "A",
  "b",
  "a",
  "B",
  "10A",
  "10B",

  "7ME40",
  "9ME40",
  "3ME40",
  "1ME40",
  "12ME40",
  "21ME40",
  "123ME40",

  "张三的ME90",
  "张三的ME30",
  "张三的80",
  "张三的ME10",

  "6王五的ME20",
  "6张三的ME20",
  "1张三的ME20",
  "1张三的ME90",
  "13张三的ME90",
  "6王五的ME20",
  "23张三的ME20",
  "7李四的ME90",
  "8李四的ME20",
  "6王五的ME20",
  "6王五的ME20",
  "6a王五的ME20",
  "6ab王五的ME20",
  "6abcME20王五",
  "6abcME20王五",
  "6abcME20王五",
  "6abcME90",
  "6abcME60",
  "6abcME20",
  "6aME20王五",
  "6abME20王五",
  "6abcME20王五",
  "6abc王五的ME20",
  "6abc王五的ME20",
  "6abc王五^的ME20",
  "6abc王五&&的ME20",
  "6abc王五的**ME20",
  "6abc王五的ME20",
  "&&6王五的ME20",
  "^^6王五的ME20",
  "^^&6王五的ME20",
  "&^6王五的ME20",
  "6%^王五的ME20",
  "#46王五的ME20",
  "^6*(*王五的ME20"
];

// 子集 case2
var case2 = [
  "1张三",
  "8张三",
  "3张三",
  "5张三",
  "13张三",
  "24张三",
  "2张三",
  "2李四",
  "7李四",
  "3李四",
  "9李四",
  "3王五"
];

console.log(case1.sort(sortByName));
// console.log(case2.sort(sortByName));
