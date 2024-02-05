const express = require("express");
const app = express();

app.listen(4000, () => {});

app.get("/", (req, res) => {
  res.send("Hello World");
});
app.get("/hello", (req, res) => {
  res.json({ msg: "hello" });
});

app.get("/:prenom/:nom", (req, res) => {
  let prenom = req.params.prenom;
  let nom = req.params.nom;
  console.log(`Bonjour ${prenom} ${nom}`);
  res.send(`Bonjour ${prenom} ${nom}`);
  // res.json({ prenom: prenom, nom: nom });
});
