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

app.listen(PORT, () => {
    console.log(`Your server is running on port ${PORT}`);
});

