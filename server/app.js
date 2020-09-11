var express = require( 'express' );
var bodyParser = require( 'body-parser');
var cookieParser = require( 'cookie-parser');
var compress = require( 'compression');
var cors = require( 'cors');
var helmet = require( 'helmet');
var userRoutes = require( './routes/user.routes');
var authRoutes = require( './routes/auth.routes');
var postRoutes = require( './routes/post.routes');

const CURRENT_WORKING_DIR = process.cwd()
const app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cookieParser())
app.use(compress())
app.use(helmet())
app.use(cors())

// routes
app.use('/', userRoutes)
app.use('/', authRoutes)
app.use('/', postRoutes)

module.exports = app;
