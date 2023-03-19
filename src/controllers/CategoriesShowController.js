const { HomehclModels, HomehcaModels, MainSectionModels, ProductsModels, CategoryOptionsModels } = require("../models");

const CategoriesShowController = {
    viewShowCategory: async(req, res) => {
        let hcl = await HomehclModels.findOne();
        // console.log(hcl);
        let hca = await HomehcaModels.findOne();
        // console.log(hca);
        let ms = await MainSectionModels.findAll();
        // console.log(ms);
        let pm = await ProductsModels.findAll();
        // console.log(pm);
        let co = await CategoryOptionsModels.findOne();
        // console.log(co);
        const {id} = req.params;
        
    var categoryResult = await CategoryOptionsModels.findAll({
        where: {
            id:id
        }
    });
    
    if (!categoryResult) {
        return res.render("error", {
          title: "Erro de Servidor",
          message: "Nenhum categoria encontrada"
        })
      }
      return res.render("categoryShow", {title: "MICMAR | MOSTRANDO CATEGORIA", categoryResult});
    },
};
module.exports = CategoriesShowController