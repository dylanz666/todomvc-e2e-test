/**Created by Dylan*/
class random {
    static str(length) {
        let letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz',
            randomNumber, rnd = '';
        length = length || 5;
        for (let i = 1; i <= length; i++) {
            randomNumber = Math.floor(Math.random() * letters.length);
            rnd += letters.substring(randomNumber, randomNumber + 1);
        }
        return rnd;
    }

    static randomDigit(len) {
        if (len < 1) {
            throw "Please input valid digit!"
        }
        let digit = len || 3;
        return Math.round(Math.random() * (Math.pow(10, digit) - 1 - Math.pow(10, digit - 1)) + Math.pow(10, digit - 1));
    }
}

module.exports = random;
