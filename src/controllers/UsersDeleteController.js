const { HomehclModels, HomehcaModels, ProductsModels, CategoryOptionsModels, UsersModels, MainSectionModels } = require("../models");
const file = require("../helpers/files");
const sequelize = require("../config/sequelize");

const UsersDeleteController = {

    viewDeleteUser: async (req, res) => {
      let user = await UsersModels.findAll();
        
        const {id} = req.params;
        // console.log(category_opt_singular, category_opt_plural)

        var userResult = await UsersModels.findOne({
            where: {
                id: id
            }
        });
        
        if (!userResult) {
            return res.render("error", {
              title: "Erro de Servidor",
              message: "Nenhum usuário encontrada"
            })
          }
            return res.render("userDelete", { title: "MICMAR | EXCLUINDO USUÁRIO", userResult, user })
        },

    deletedUser: async (req, res) => {

        const isAdmin = 0;
        const { firstName, lastName, cpf, cnpj, email, telephone, mobilePhone, professionalPhone, birthDate, genre, address, number, district, city, state, country, zipCode, password } = req.body;

        let filename = "shoes-defaut.png";

        if (req.file) {
          filename = req.file.filename
        }
        const { id } = req.params;
    
           try {
            const result = await sequelize.transaction(async (t) => {
            const copt = await UsersModels.destroy({
                where: { id: id }
              })
          })

            return res.send({ Deleted: "Exclusão realizada com sucesso", result }).status(200);

    }   catch (error) {
            return res.send({ message: "erro: " + error});
    }
},
}

module.exports = UsersDeleteController