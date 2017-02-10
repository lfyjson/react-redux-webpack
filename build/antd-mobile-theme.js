const fs = require('fs');
const path = require('path');
const lessToJs = require('less-vars-to-js');

module.exports = lessToJs(fs.readFileSync(path.join(__dirname, '../src/config/antd-mobile-theme.less'), 'utf8'));