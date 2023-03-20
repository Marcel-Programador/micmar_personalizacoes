const { HomehclModels, HomehcaModels, ProductsModels, CategoryOptionsModels, UsersModels, MainSectionModels } = require("../models");
const file = require("../helpers/files");
const sequelize = require("../config/sequelize");

const CategoriesEditController = {

    viewEditCategory: async (req, res) => {
        let hcl = await HomehclModels.findOne();
        // console.log(hcl);
        let hca = await HomehcaModels.findOne();
        // console.log(hca);
        let co = await CategoryOptionsModels.findAll();
        // console.log(co)
        
        let ms = await MainSectionModels.findAll();
        // console.log(ms);
        let pm = await ProductsModels.findAll();
        
        const {id} = req.params;
        // console.log(category_opt_singular, category_opt_plural)

    var categoryResult = await CategoryOptionsModels.findOne({
        where: {
            id: id
        }
    });
    
    if (!categoryResult) {
        return res.render("error", {
          title: "Erro de Servidor",
          message: "Nenhum categoria encontrada"
        })
      }
        return res.render("categoryEdit", { title: "| EDITANDO CATEGORIA", categoryResult, pm, ms, hcl, hca, co })
    },

    editedCategory: async (req, res) => {

        const { category_opt_singular, category_opt_plural } = req.body;
        const { id } = req.params;
        
        try {
          if (!category_opt_singular || !category_opt_plural) {
            throw Error("Todos os campos devem ser preenchidos!");
          }
          var result = await sequelize.transaction(async (t) => {
            const copt = await CategoryOptionsModels.update({
                category_opt_singular: category_opt_singular,
                category_opt_plural: category_opt_plural
            },
              {
                where: { id: id }
              })
          })

            return res.send({ Edited: "Alteração realizada com sucesso", result }).status(200);

    }   catch (error) {
            return res.send({ message: "erro: " + error, result});
    }
},
}
module.exports = CategoriesEditController