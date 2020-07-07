'use strict'

const { buildSchema } = require('graphql');
const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const app = express();
const port = process.env.port || 8080;

//Definiendo el esquema
const schema = buildSchema(`
	type Query {
		"Retorna un saludo al mundo"
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
app.use('/api', graphqlHTTP({
	schema: schema,
	rootValue: resolvers,
	graphiql: true
}));

app.listen(port, () => {
	console.log('servidor iniciado en', port);
});