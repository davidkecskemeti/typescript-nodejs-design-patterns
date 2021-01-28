"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const body_parser_1 = __importDefault(require("body-parser"));
const express_1 = __importDefault(require("express"));
const db_instance_1 = __importDefault(require("./db-instance"));
const app = express_1.default();
const PORT = 8000;
function start() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            app.use(body_parser_1.default.json());
            app.use(body_parser_1.default.urlencoded({ extended: true }));
            console.log("Connecting to the database");
            const db = yield db_instance_1.default.getInstance();
            console.log("Database connection enstablished");
            app.get("/todos", (request, response) => __awaiter(this, void 0, void 0, function* () {
                console.log("Requesting todos");
                try {
                    const db = yield db_instance_1.default.getInstance();
                    const todos = yield db.collection("todo").find({}).toArray();
                    response.status(200).json({
                        success: true,
                        data: todos,
                    });
                }
                catch (e) {
                    console.log("Error on fetching", e);
                    response.status(500).json({
                        success: false,
                        data: null,
                    });
                }
            }));
            app.post("/todo", (req, res) => __awaiter(this, void 0, void 0, function* () {
                try {
                    const db = yield db_instance_1.default.getInstance();
                    const name = req.body.name;
                    console.log(JSON.stringify(req.body));
                    const todoCollection = yield db.collection("todo").insertOne({ name });
                    res.status(200).json({ success: true, data: todoCollection });
                }
                catch (e) {
                    console.log("Error on Inserting", e);
                    res.status(500).json({ success: false, data: null });
                }
            }));
            app.listen(PORT, () => {
                console.log(`⚡️[server]: Server is running at https://localhost:${PORT}`);
            });
        }
        catch (e) {
            console.log("Error while starting the server", e);
        }
    });
}
console.log("Starting the server");
start();
