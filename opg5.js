/**
 * Created by Thomas Skogemann on 29-08-2016.
 */

var fs = require('fs');
var path = require('path');
var file = process.argv[2];
var extension = '.' + process.argv[3];

fs.readdir(file,function (err, list ){
list.forEach(function (file) {
    var fileExtension = path.extname(file);
    if (fileExtension === extension){
        console.log(file);
    }
    }
)
})