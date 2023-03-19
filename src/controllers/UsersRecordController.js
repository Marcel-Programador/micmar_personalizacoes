const { HomehclModels, HomehcaModels, ProductsModels, CategoryOptionsModels, UsersModels } = require("../models");
const file = require("../helpers/files");

const UsersRecordController = {

    viewUsers: async (req, res) => {
        let hcl = await HomehclModels.findOne();
        // console.log(hcl);
        let hca = await HomehcaModels.findOne();
        // console.log(hca);
        let user = await UsersModels.findOne();
        // console.log(user)
    
        return res.render("userRecord", {title: "MICMAR | CADASTRO DE USUÁRIOS", hcl, hca, user});
    },
    recordedUser: async (req, res) => {
        const isAdmin = 0;
        const { firstName, lastName, cpf, cnpj, email, telephone, mobilePhone, professionalPhone, birthDate, genre, addressNumber, district, city, state, country, zipCode, password } = req.body;
        let filename = "shoes-defaut.png";

        if (req.file) {
          filename = req.file.filename
        }

        if ( !firstName || !lastName || !cpf || !email || !mobilePhone || !birthDate || !genre || !addressNumber || !district || !city || !state || !country || !zipCode || !password ){
            return res.send({message: "Se chegou aqui é porque esqueceu de cadastrar alguma informação do usuário"})
        }
    try {
        const user = await UsersModels.create({
            firstName,
            lastName,
            cpf,
            cnpj,
            email,
            telephone,
            mobilePhone,
            professionalPhone,
            birthDate,
            genre,
            password,
            addressNumber,
            district,
            city,
            state,
            country,
            zipCode,
            img: filename,
            isAdmin,
        })


        return res.send({Recorded: user}).status(200);

        } catch (error) {
            return res.send({message: "erro" + error})
        }
    },
}
module.exports = UsersRecordController