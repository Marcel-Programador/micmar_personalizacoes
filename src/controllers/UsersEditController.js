const { HomehclModels, HomehcaModels, ProductsModels, CategoryOptionsModels, UsersModels, MainSectionModels } = require("../models");
const file = require("../helpers/files");
const sequelize = require("../config/sequelize");

const UsersEditController = {

    viewEditUser: async (req, res) => {
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
              message: "Nenhum usuário encontrado"
            })
          }
            return res.render("userEdit", { title: "MICMAR | EDITANDO USUÁRIO", userResult, user })
        },

    editedUser: async (req, res) => {


        const isAdmin = 0;
        const { firstName, lastName, cpf, cnpj, email, telephone, mobilePhone, professionalPhone, birthDate, genre, addressNumber, district, city, state, country, zipCode, password } = req.body;

        let filename = "shoes-defaut.png";

        if (req.file) {
          filename = req.file.filename
        }
        const { id } = req.params;
    
    
        try {
            if ( !firstName || !lastName || !cpf || !email || !mobilePhone || !birthDate || !genre || !password ){

            throw Error("Todos os campos devem ser preenchidos!");
          }
          const result = await sequelize.transaction(async (t) => {
            const copt = await UsersModels.update({
                firstName: firstName,
                lastName: lastName,
                cpf: cpf,
                email: email,
                mobilePhone: mobilePhone,
                birthDate: birthDate,
                password: password,
                cnpj: cnpj,
                telephone: telephone,
                professionalPhone: professionalPhone,
                addressNumber: addressNumber,
                district: district,
                city: city,
                state: state,
                country: country,
                zipCode: zipCode,
                img: filename,
                isAdmin: isAdmin
            },
              {
                where: { id: id }
              })
          })

            return res.send({ Edited: "Alteração realizada com sucesso", result }).status(200);

    }   catch (error) {
            return res.send({ message: "erro: " + error});
    }
},
}

module.exports = UsersEditController