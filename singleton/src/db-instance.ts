import { Db, MongoClient } from "mongodb";

class DBInstance {
  private static instance: Db;

  private constructor() {}

  static getInstance() {
    if (!this.instance) {
      const URL = "mongodb://localhost:27017";
      const dbName = "sample";
      MongoClient.connect(URL, (err, client) => {
        if (err) {
          console.log("Database connection error", err);
        }

        const db = client.db(dbName);
        this.instance = db;
      });
    }
    return this.instance;
  }
}

export default DBInstance;
