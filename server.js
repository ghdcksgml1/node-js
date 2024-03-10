const express = require("express");
const app = express();
app.use(express.json());

const users = [{name: "Chuck", age: 26}];

app.get("/user", async (req, res) => {
    return res.send({user: users});
});

app.post("/user", (req, res) => {
    users.push({name: req.body.name, age: req.body.age});
    return res.send({success: true});
});

app.listen(3000, () => {
    console.log("server listening on port 3000");
});
