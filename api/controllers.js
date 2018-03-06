const fs = require('fs');
const path = require('path')

exports.get = function(req, res) {
    var filename = path.join(__dirname, '/data/teams.json');
    fs.readFile(filename, function(err, data) {
        if (err) console.error(`💩 Error: ${err.message}`);
        res.json(JSON.parse(data));
    });
};