/**
 * @file 模拟数据示例
 *
 * @author 赵晓强
 */

let mock = require('mockjs');

module.exports = function (param) {

    return {
        status: 0,
        statusInfo: '',
        data: mock.Random.cparagraph()
    };
};