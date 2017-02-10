const path = require('path');
const join = src => path.join(__dirname, src);

module.exports = {
	comment: join('../src/common/components/comment/main.js'), //评论组件
	yytStatics: join('../src/common/yyt/yytstatis.js') //音悦台统计方法
}
