import { gql } from "apollo-server-lambda";

export const typeDefs = gql`
    type Query {
        hello: String
        user:User
        blogs:[Blog]
    }
    type Blog{
        id:ID!
        title: String
        content:String
        img:String
        author:String
        comments:[Comment]
    }
     type User {
        id: ID!
        email: String!
        trips: [Launch]!
        token: String
    }



    type Mutation {
        double(x: Int!): Int!
    }
`;

// Provide resolver functions for your schema fields
export const resolvers = {
    Query: {
        hello: () => 'Hello world!'
        ,articles:async()=>{
            return await Articles.find()
        }
    },
    Mutation: {
        double: (_:number, { x }) => x * 2
    }
};
