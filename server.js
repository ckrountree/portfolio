'use strict';

// allow server to access .env file
require( 'dotenv' ).config();

const pg = require('pg');
const fs = require('fs');
const express = require('express');
const bodyParser = require('body-parser');
const requestProxy = require('express-request-proxy'); 
const PORT = process.env.PORT || 3000;
const app = express();
// const conString = 'postgres://postgres:1234@localhost:PORT 5432/kilovolt';
// When using environment variables, move conString to .env file
const conString = ( process.env.DATABASE_URL ); 
const client = new pg.Client(conString);
client.connect();
client.on('error', err => console.error(err));