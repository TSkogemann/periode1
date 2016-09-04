/**
 * Created by Thomas Skogemann on 24-08-2016.
 */

var fs = require('fs');
var file = process.argv[2];

content = fs.readFileSync(file).toString();
var numberOfNewline = content.split('\n').length -1;

console.log(numberOfNewline);