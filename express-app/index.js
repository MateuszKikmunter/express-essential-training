import express from "express";
import data from './../data/MOCK_DATA.json';

const app = express();
const PORT = 3000;

//defining static data
app.use(express.static("public"));

//defining static for specific path and folder
app.use("/images", express.static("images"));

app.get("/", (req, res) => {
    res.json(data);
});

app.get("/users/:id", (req, res, next) => {
    const user = data.find(user => user.id === +req.params.id);
    res.json(user);
    next();
}, (req, res) => {
    console.log("Did you get the right data?");
});

app.listen(PORT, () => {
    console.log(`Your server is running on port ${PORT}`);
});

