import bodyParser from "body-parser";
import express, { Application, Request, Response } from "express";
import DBInstance from "./db-instance";

const app = express();
const PORT = 8000;

async function start() {
  try {
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));

    console.log("Connecting to the database");
    const db = await DBInstance.getInstance();
    console.log("Database connection enstablished");

    app.get("/todos", async (request: Request, response: Response) => {
      console.log("Requesting todos");

      try {
        const db = await DBInstance.getInstance();
        const todos = await db.collection("todo").find({}).toArray();
        response.status(200).json({
          success: true,
          data: todos,
        });
      } catch (e) {
        console.log("Error on fetching", e);
        response.status(500).json({
          success: false,
          data: null,
        });
      }
    });

    app.post("/todo", async (req: Request, res: Response) => {
      try {
        const db = await DBInstance.getInstance();

        const name = req.body.name;
        console.log(JSON.stringify(req.body));

        const todoCollection = await db.collection("todo").insertOne({ name });

        res.status(200).json({ success: true, data: todoCollection });
      } catch (e) {
        console.log("Error on Inserting", e);
        res.status(500).json({ success: false, data: null });
      }
    });

    app.listen(PORT, () => {
      console.log(
        `⚡️[server]: Server is running at https://localhost:${PORT}`
      );
    });
  } catch (e) {
    console.log("Error while starting the server", e);
  }
}

console.log("Starting the server");

start();
