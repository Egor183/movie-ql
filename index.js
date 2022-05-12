import { createServer } from "@graphql-yoga/node";
import fs from "fs";
import resolvers from "./graphql/resolvers";

const typeDefs = fs.readFileSync("./graphql/schema.graphql", "utf8");

const server = createServer({
  schema: {
    typeDefs,
    resolvers,
  },
});

server.start();
