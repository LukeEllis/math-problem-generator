const fs = require('fs')
const problem = require('./problems.txt')

var posCoefficient = Math.floor(Math.random() * Math.floor(9));
var negCoefficient = Math.floor(Math.random() * Math.floor(-9));
var posConstant1 = Math.floor(Math.random() * Math.floor(30));
var negConstant1 = Math.floor(Math.random() * Math.floor(-30));
var posConstant2 = Math.floor(Math.random() * Math.floor(30));
var negConstant2 = Math.floor(Math.random() * Math.floor(-30));

// console.log(`${posCoefficient}x + ${posConstant1} = ${posConstant2}`)
// console.log(`${negCoefficient}x + ${posConstant} = ${posConstant}`)
// console.log(`${posCoefficient}x + ${posConstant} = ${negConstant}`)
// console.log(`${negCoefficient}x + ${posConstant} = ${negConstant}`)
// console.log(`${posCoefficient}x + ${negConstant} = ${posConstant}`)
// console.log(`${negCoefficient}x + ${negConstant} = ${posConstant}`)

var case1 = `${posCoefficient}x + ${posConstant1} = ${posConstant2}`
// var case2 =`${negCoefficient}x + ${posConstant} = ${posConstant}`
// var case3 =`${posCoefficient}x + ${posConstant} = ${negConstant}`
// var case4 =`${negCoefficient}x + ${posConstant} = ${negConstant}`
// var case5 =`${posCoefficient}x + ${negConstant} = ${posConstant}`
// var case6 =`${negCoefficient}x + ${negConstant} = ${posConstant}`

fs.appendFile(`problems.txt`, case1, function(err){
    if (err) throw err;
})
