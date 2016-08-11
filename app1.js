

function show(e,result) {
    console.log(result)
}


var fs = require('fs')
var result = fs.readdirSync("/home/choo/Downloads/")
console.log(result)
console.log("Finished!!!")

fs.readdir("/home/choo/Downloads/",show)


console.log('finished 2 !!!!')
