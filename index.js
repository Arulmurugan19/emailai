const express = require("express");
require("dotenv").config();
const app = express();
const cors = require("cors");
app.use(express.json());
app.use(cors("*"));

app.get("/", (req, res) => {
    res.json({
        message: "API is running successfully"
    });
});

app.get("/api/test", (req, res) => {
    res.json({
        message: "Test API working"
    });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on port ${PORT}`);
});