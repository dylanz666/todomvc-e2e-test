/**Created by Dylan*/
let pageObject = [];
const dirPath = path.join(__dirname);
module.exports = function () {
    function getPageObject(dir) {
        let rtnArr = main(dir);
        if (rtnArr.length > 0) {
            for (let i = 0; i < rtnArr.length; i++) {
                getPageObject(rtnArr[i]);
            }
        }
    }

    getPageObject(dirPath);
    return pageObject;
}();

function main(executePath) {
    let dirArr = [];
    fs.readdirSync(executePath).forEach(function (file) {
        let stats = fs.statSync(path.join(executePath, file));
        if (stats.isDirectory() === true) {
            dirArr.push(path.join(executePath, file));
        } else {
            if (file !== 'index.js' && path.extname(file) === '.js') {
                let fileName = path.basename(file, '.js');
                let req = require(path.join(executePath, file));
                for (let i in req) {
                    if (fileName && fileName.length && !(i in pageObject) && req) {
                        pageObject[i] = req[i];
                    }
                }
            }
        }
    });
    return dirArr;
}