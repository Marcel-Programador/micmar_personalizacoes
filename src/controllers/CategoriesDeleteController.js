const { HomehclModels, HomehcaModels, ProductsModels, CategoryOptionsModels, UsersModels, MainSectionModels } = require("../models");
const file = require("../helpers/files");
const sequelize = require("../config/sequelize");

const CategoriesDeleteController = {

    viewDeleteCategory: async (req, res) => {
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
        return res.render("categoryDelete", { title: "| EXCLUINDO CATEGORIA", categoryResult, pm, ms, hcl, hca, co })
    },

    deletedCategory: async (req, res) => {

        const { category_opt_singular, category_opt_plural } = req.body;
        const { id } = req.params;
        
        try {
          var result = await sequelize.transaction(async (t) => {
            const copt = await CategoryOptionsModels.destroy({
                where: { id: id }
              })
          });

            return res.send({ Deleted: "Exclusão realizada com sucesso", result }).status(200);

    }   catch (error) {
            return res.send({ message: "erro: " + error, result});
    }
},
}
module.exports = CategoriesDeleteController