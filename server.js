const cors = require("cors");
const express = require("express");
const mongo = require("./src/db/dbConnect");
const userRouter = require("./src/routers/userRouter");
const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(userRouter);
app.set("view engine", "pug");

mongo.connect().then(() => {
    app.listen(port, () => {
        console.log(`App listening at http://localhost:${port}`);
    });
});
