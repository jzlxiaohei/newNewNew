var fs = require('fs')

fs.readdirSync('./controller').forEach(function (file) {
    console.log(file)
});