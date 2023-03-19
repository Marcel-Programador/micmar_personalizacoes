const { HomehclModels, HomehcaModels, ProductsModels, CategoryOptionsModels, UsersModels, MainSectionModels } = require("../models");
const file = require("../helpers/files");
const sequelize = require("../config/sequelize");

const UsersShowController = {

    viewShowUser: async (req, res) => {

        let {id} = req.params;
        
        var userResult = await UsersModels.findAll({
            where: {
                id: id
            }
        });
        
        if (!userResult) {
            return res.render("error", {
              title: "Erro de Servidor",
              message: "Nenhum usuário encontrado"
            })
          }
            return res.render("userShow", { title: "MICMAR | MOSTRANDO USUÁRIO", userResult })
        },
}

module.exports = UsersShowController