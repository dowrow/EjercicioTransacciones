'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _http = require('http');

var _http2 = _interopRequireDefault(_http);

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _cors = require('cors');

var _cors2 = _interopRequireDefault(_cors);

var _morgan = require('morgan');

var _morgan2 = _interopRequireDefault(_morgan);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _api = require('./api');

var _api2 = _interopRequireDefault(_api);

var _config = require('./config.json');

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();
app.server = _http2.default.createServer(app);

// logger
app.use((0, _morgan2.default)('dev'));

app.enable('etag');

// 3rd party middleware
app.use((0, _cors2.default)({
	exposedHeaders: _config2.default.corsHeaders
}));

app.use(_bodyParser2.default.json({
	limit: _config2.default.bodyLimit
}));

app.get('/', function (req, res) {
	return res.send('Citibox server working');
});

app.use('/api', (0, _api2.default)({ config: _config2.default }));

app.use(function (req, res, next) {
	res.removeHeader("X-Powered-By");
	res.header('Cache-Control', 'private, no-cache, no-store, must-revalidate');
	res.header('Expires', '-1');
	res.header('Pragma', 'no-cache');
	next();
});

app.server.listen(process.env.PORT || _config2.default.port, function () {
	console.log('Citibox server started on port ' + app.server.address().port);
});

exports.default = app;
//# sourceMappingURL=index.js.map