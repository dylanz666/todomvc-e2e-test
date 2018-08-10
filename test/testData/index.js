/**Created by Dylan*/
let testData = [];
const dirPath = path.join(__dirname, env);
module.exports = function () {
    function getTestData(dir) {
        let rtnArr = main(dir);
        if (rtnArr.length > 0) {
            for (let i = 0; i < rtnArr.length; i++) {
                getTestData(rtnArr[i]);
            }
        }
    }

    getTestData(dirPath);
    return testData;
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
                    if (fileName && fileName.length && !(i in testData) && req) {
                        testData[i] = req[i];
                    }
                }
            }
        }
    });
    return dirArr;
}