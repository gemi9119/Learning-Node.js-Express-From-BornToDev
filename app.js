import express from "express";
import chalk from "chalk";
import debug from "debug";
import morgan from "morgan";
const app = express();
const port = 3003;

app.use(morgan('combined'))

app.get("/", (req,res) => {
    res.send('Hello Express')
})

app.listen(port, () => {
    debug('Listening from port:', chalk.green(port));
})