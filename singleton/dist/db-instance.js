"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongodb_1 = require("mongodb");
class DBInstance {
    constructor() { }
    static getInstance() {
        if (!this.instance) {
            const URL = "mongodb://localhost:27017";
            const dbName = "sample";
            mongodb_1.MongoClient.connect(URL, (err, client) => {
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
exports.default = DBInstance;
