const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const massive = require('massive');
const connectionString = "postgres://postgres:445tb@localhost/sandbox";
const products_controller = require('./products_controller');

const app = express();
app.use( bodyParser.json() );
app.use( cors() );
massive( connectionString ).then( db => app.set('db', db) );

app.post( '/api/product', products_controller.create );
app.get( '/api/products', products_controller.getAll );
app.get( '/api/product/:id', products_controller.getOne );
app.put( '/api/product/:id', products_controller.update );
app.delete( '/api/product/:id', products_controller.delete );

let port = 3000;
app.listen(port, () => console.log( "Listening on port 3000" ));
