/**
 * Created by Thomas Skogemann on 24-08-2016.
 */
var total = 0;

for (var i = 2; i < process.argv.length; i++)
    total += Number(process.argv[i])

console.log(total);