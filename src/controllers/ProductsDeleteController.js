const { HomehclModels, HomehcaModels, ProductsModels, CategoryOptionsModels, UsersModels, MainSectionModels } = require("../models");
const file = require("../helpers/files");
const sequelize = require("../config/sequelize");

const ProductsDeleteController = {

    viewDeleteProduct: async (req, res) => {
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
        var productResult = await ProductsModels.findOne({
            where: {
                id: id
            }
        });
        
        if (!productResult) {
            return res.render("error", {
              title: "Erro de Servidor",
              message: "Nenhum produto encontrado"
            })
          }
            return res.render("productDelete", { title: "MICMAR | EXCLUINDO PRODUTO", productResult, pm, ms, hcl, hca, co })
        },
    
    deletedProduct: async (req, res) => {

        const { category, theme, mark, type, color, quantity, costPrice, salePrice, specialPrice, description } = req.body;
        let filename = "shoes-defaut.png";

        if (req.file) {
          filename = req.file.filename
        }
        const { id } = req.params;
        
        try {
          const productResult = await sequelize.transaction(async (t) => {
            const copt = await ProductsModels.destroy({
                where: { id: id }
              })
          });

            return res.send({ Deleted: "Exclusão realizada com sucesso", productResult }).status(200);

    }   catch (error) {
            return res.send({ message: "erro: " + error});
    }
},
}
module.exports = ProductsDeleteController