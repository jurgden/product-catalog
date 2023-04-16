const { MongoClient } = require("mongodb");

const connectionString =
  "mongodb+srv://cthul:hpUoLLx8ixCYZcKp@lophophora.uy3ofsk.mongodb.net/?retryWrites=true&w=majority";

const connect = async () => {
  const client = new MongoClient(connectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  await client.connect();
  const db = client.db("lophophora");
  return db;
};

module.exports = { connect };
