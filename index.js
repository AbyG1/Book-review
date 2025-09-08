import { ApolloServer } from '@apollo/server';
import mongoose from 'mongoose';
import { startStandaloneServer } from '@apollo/server/standalone';
import { typeDefs } from './graphql/schema.js';
import { resolvers } from './graphql/resolver.js'
import 'dotenv/config'
const PORT = process.env.PORT
const connetionString = process.env.MONGODB_URI

const server = new ApolloServer({

    typeDefs,
    resolvers  

})




mongoose.connect(connetionString).then(() => console.log("succesfully connected to mongodb"))
                                 .catch((err) => console.log(`connection to mongodb failed with error ${err}`))


const { url } = await startStandaloneServer(server, {

            listen: { port: PORT },
});

    


