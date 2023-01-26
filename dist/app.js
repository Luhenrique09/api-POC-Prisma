import express from "express";
import { add } from "./crud.controller.js";
var app = express();
app.use(express.json());
app.post('/characters', add);
app.listen(4000, function () {
    console.log("Server running i port: 4000");
});
