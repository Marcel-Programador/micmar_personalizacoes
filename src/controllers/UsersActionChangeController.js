const { HomehclModels, HomehcaModels, ProductsModels, CategoryOptionsModels, UsersModels, MainSectionModels } = require("../models");
const file = require("../helpers/files");
const sequelize = require("../config/sequelize");

const UsersActionChangeController = {

    viewUsers: async (req, res) => {
        let hcl = await HomehclModels.findOne();
        // console.log(hcl);
        let hca = await HomehcaModels.findOne();
        // console.log(hca);
        let user = await UsersModels.findAll();
        // console.log(user)
    
        return res.render("userActionChange", {title: "MICMAR | ALTERAR USUÁRIOS", hcl, hca, user});
    },
}
module.exports = UsersActionChangeController