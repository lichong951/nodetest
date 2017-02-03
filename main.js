// var fs=require("fs");
//
// var data=fs.readFileSync('/Users/lichong/node/input.rtf');
//
// console.log(data.toString());
// console.log("程序执行结束！");

var fs=require("fs");

fs.readFile('/Users/lichong/node/input.rtf',function (err, data) {
    if (err)return console.error(err);
    console.log(data.toString())
})
console.log("程序执行结束！");
