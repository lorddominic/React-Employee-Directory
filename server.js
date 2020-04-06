const express = require("express");
const app = express();
const path = require("path");
const PORT = process.env.PORT || 8080;

app.use(express.static("public"));

app.get("*", function(req, res) {
    res.sendFile(path.resolve(__dirname + "public\index.html"));
});

app.listen(PORT, () => console.log(`App listening on PORT:${PORT}`));