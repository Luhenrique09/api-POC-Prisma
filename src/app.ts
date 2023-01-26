import express from "express";
import { add, findAll, findById, remove, update } from "./controllers/characters.controller.js";
import { findAllBreed} from "./controllers/breed.controller.js";
import { findAllGoods } from "./controllers/goods.controller.js";

const app = express();

app.use(express.json());

app.post('/characters', add);
app.get('/characters', findAll);
app.get('/characters/:id', findById);
app.patch('/characters/:id', update);
app.delete('/characters/:id', remove);

app.get('/breed', findAllBreed)

app.get('/goods', findAllGoods)


app.listen(4000, () => {
    console.log("Server running i port: 4000")
});