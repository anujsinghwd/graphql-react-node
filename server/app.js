const express = require('express');
const graphqlHTTP = require('express-graphql');
const mongoose = require('mongoose');
const config = require('./config/config');

const schema = require('./schema/schema');

const app = express();

// Connecting To MongoDB
mongoose.connect(`mongodb://${config.MONGO_USER}:${config.MONGO_PASS}@ds161410.mlab.com:61410/gql`);
mongoose.connection.once('open', () => {
    console.log('Connected To DataBase');
});

app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true
}));

app.listen(4000, () => {
    console.log(`listen to port 4000`);
});