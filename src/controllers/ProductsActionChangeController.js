const { HomehclModels, HomehcaModels, ProductsModels, CategoryOptionsModels, UsersModels, MainSectionModels } = require("../models");
const file = require("../helpers/files");
const sequelize = require("../config/sequelize");

const ProductsActionChangeController = {
    viewProducts: async (req, res) =>{
        let hcl = await HomehclModels.findOne();
        // console.log(hcl);
        let hca = await HomehcaModels.findOne();
        // console.log(hca);
        let pm = await ProductsModels.findAll();
        // console.log(hca);
        return res.render("productActionChange", {title: "| ALTERAR PRODUTOS", hcl, hca, pm});
    },
}
module.exports = ProductsActionChangeController