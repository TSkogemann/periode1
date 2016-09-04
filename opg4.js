/**
 * Created by Thomas Skogemann on 24-08-2016.
 */

var fs = require('fs');
var file = process.argv[2];

fs.readFile(file, function(err,data){

    var dataArray = data.toString();
    var content = dataArray.split('\n').length -1
    console.log(content);

});
