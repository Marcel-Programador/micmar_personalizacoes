const express = require("express");
const app = express();
const port = 3000;
const logMiddleware = require("./middlewares/log")
const methodOverride = require("method-override");

const homeRoute = require("./src/routes/homeRoute");
const productsPageRoute = require("./src/routes/productsPageRoute");
const productRoute = require("./src/routes/productRoute");

const admPageRoute = require("./src/routes/admPageRoute");

const categoriesRecordRoute = require("./src/routes/categoriesRecordRoute");
const productsRecordRoute = require("./src/routes/productsRecordRoute");
const usersRecordRoute = require("./src/routes/usersRecordRoute");

const categoriesActionChangeRoute = require("./src/routes/categoriesActionChangeRoute");
const productsActionChangeRoute = require("./src/routes/productsActionChangeRoute");
const usersActionChangeRoute = require("./src/routes/usersActionChangeRoute");

const categoriesShowRoute = require("./src/routes/categoriesShowRoute");
const productsShowRoute = require("./src/routes/productsShowRoute");
const usersShowRoute = require("./src/routes/usersShowRoute");

const categoriesEditRoute = require("./src/routes/categoriesEditRoute");
const productsEditRoute = require("./src/routes/productsEditRoute");
const usersEditRoute = require("./src/routes/usersEditRoute");

const categoriesDeleteRoute = require("./src/routes/categoriesDeleteRoute");
const productsDeleteRoute = require("./src/routes/productsDeleteRoute");
const usersDeleteRoute = require("./src/routes/usersDeleteRoute");

app.set("view engine", "ejs");
app.set("views", __dirname + "/src/views");
app.use(express.static(__dirname + "/public"));
app.use(express.static(__dirname + "/uploads"));
app.use(methodOverride("_method"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }))
app.use(logMiddleware)
app.use(express.json());

app.use("/", homeRoute);
app.use("/products", productsPageRoute);
app.use("/product", productRoute);

app.use("/adm", admPageRoute);

app.use("/record/cat", categoriesRecordRoute);
app.use("/record/prod", productsRecordRoute);
app.use("/record/user", usersRecordRoute);

app.use("/actionChange/cat", categoriesActionChangeRoute);
app.use("/actionChange/prod", productsActionChangeRoute);
app.use("/actionChange/user", usersActionChangeRoute);

app.use("/show/cat", categoriesShowRoute);
app.use("/show/prod", productsShowRoute);
app.use("/show/user", usersShowRoute);

app.use("/edit/cat", categoriesEditRoute);
app.use("/edit/prod", productsEditRoute);
app.use("/edit/user", usersEditRoute);

app.use("/delete/cat", categoriesDeleteRoute);
app.use("/delete/prod", productsDeleteRoute);
app.use("/delete/user", usersDeleteRoute);

app.use((req, res) => {
    return res.status(404).send({message: "Solicitação não encontrada, esta pagina que voce buscou não existe."})
});

app.listen(port, () => {
    console.log(`Servidor rodando no endereço http://localhost:${port}`)
});