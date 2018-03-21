const expect = require('chai').expect
const isipv4 = require('..').default

describe('#isipc4', function () {

    it ('if the given string follows the format of an IPv4 Address, the expected output should be true', function () {
        const result = isipv4('172.16.254.1')
        expect(result).to.equal(true)
    })

    it ('if one of the four decimals of the IPv4 Address has a value > 255 the expected output should  be false', function () {
        const result = isipv4('172.316.254.1')
        expect(result).to.equal(false)
    })

    it ('if one of the four decimals of the IPv4 Address is missing the expected output should  be false', function () {
        const result = isipv4('.254.255.0')
        expect(result).to.equal(false)
    })

    it ('if the given string contains a letter expected output should  be false', function () {
        const result = isipv4('1.1.1.1a')
        expect(result).to.equal(false)
    })

    it ('if the given string doesnt contains the four decimals the expetected output should be false', function () {
        const result = isipv4('1')
        expect(result).to.equal(false)
    })

    it ('if the given string doesnt contains more than 3 dots the expected output should be false', function () {
        const result = isipv4('1.23.256.255.')
        expect(result).to.equal(false)
    })

    it ('if one of the four decimals of the given string is empty the expected output should be false', function () {
        const result = isipv4('0..1.0')
        expect(result).to.equal(false)
    })

})