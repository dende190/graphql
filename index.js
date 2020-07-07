'use strict'

const { graphql, buildSchema } = require('graphql');
const express = require('express');
const gqlMiddleware = require('express-graphql');
const app = express();
const port = process.env.port || 8080;

//Definiendo el esquema
const schema = buildSchema(`
	type Query {
		hello: String
	}
`);

//Configurar los Resolvers
const resolvers = {
	hello: () => {
		return 'Hola mundo';
	}
}

//Configracion de Middleware
app.use('/api', gqlMiddleware);


//Ejecutar el query Hello
graphql(schema, '{ hello }', resolvers)
	.then(data => console.log(data));  
