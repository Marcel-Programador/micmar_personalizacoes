const { HomehclModels, HomehcaModels, ProductsModels, CategoryOptionsModels, UsersModels, MainSectionModels } = require("../models");
const file = require("../helpers/files");
const sequelize = require("../config/sequelize");

const CategoriesActionChangeController = {

    viewCategory: async (req, res) =>{
        let hcl = await HomehclModels.findOne();
        // console.log(hcl);
        let hca = await HomehcaModels.findOne();
        // console.log(hca);
        let co = await CategoryOptionsModels.findAll();
        // console.log(hca);
        return res.render("categoryActionChange", {title: "MICMAR | ALTERAR CATEGORIAS", hcl, hca, co});
    },
}
module.exports = CategoriesActionChangeController