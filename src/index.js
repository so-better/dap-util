const number = require('./number')
const data = require('./data')
const element = require('./element')
const event = require('./event')
const common = require('./common')
const date = require('./date')
const color = require('./color')
const file = require('./file')
const string = require('./string')
const platform = require('./platform')

const packages = require('../package.json')

console.log(
    '%c感谢使用' +
        packages.name +
        '，当前版本：%c v' +
        packages.version +
        '\n%c如果你觉得' +
        packages.name +
        '还不错，不妨去github点个star\ngithub地址：%c' +
        packages.repository.url,
    'color:#808080;',
    'color:#008a00',
    'color:#808080;',
    'color:#008a00'
)

module.exports = {
    number,
    data,
    element,
    event,
    common,
    date,
    color,
    file,
    string,
    platform
}
