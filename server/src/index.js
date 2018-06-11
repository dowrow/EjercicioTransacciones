import http from 'http';
import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import bodyParser from 'body-parser';
import api from './api';
import config from './config.json';

let app = express();
app.server = http.createServer(app);

// logger
app.use(morgan('dev'));

app.enable('etag');

// 3rd party middleware
app.use(cors({
	exposedHeaders: config.corsHeaders
}));

app.use(bodyParser.json({
	limit : config.bodyLimit
}));

app.get('/', (req, res) => res.send('Citibox server working') )

app.use('/api', api({ config }));

app.use((req, res, next) => {
	res.removeHeader("X-Powered-By");
	res.header('Cache-Control', 'private, no-cache, no-store, must-revalidate');
  	res.header('Expires', '-1');
  	res.header('Pragma', 'no-cache');
  	next();
})

app.server.listen(process.env.PORT || config.port, () => {
	console.log(`Citibox server started on port ${app.server.address().port}`);
});

export default app;
