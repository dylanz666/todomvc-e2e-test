/**Created by Dylan*/
module.exports = function() {
    let I = {};
    const dirPath = path.join(__dirname);
    fs.readdirSync(dirPath).forEach(function(file) {
        if (file !== 'index.js' && path.extname(file) === '.js') {
            let fileName = path.basename(file, '.js');
            let req = require(path.join(dirPath, file));
            for (let i in req) {
                if (fileName && fileName.length && !(i in I) && req) {
                    I[i] = req[i];
                }
            }
        }
    });
    return I;
}();