const { HomehclModels, HomehcaModels, MainSectionModels, ProductsModels, CategoryOptionsModels } = require("../models");

const ProductsPageController = {
    products: async(req, res) => {
        let hcl = await HomehclModels.findOne();
        // console.log(hcl);
        let hca = await HomehcaModels.findOne();
        // console.log(hca);
        let ms = await MainSectionModels.findAll();
        // console.log(ms);
        const { category } = req.params;
        let pm = await ProductsModels.findAll({
            where: {
              category: category
            }
          });
        // console.log(pm);
        const { id, category_opt_singular, category_opt_plural } = req.params;
        let co = await CategoryOptionsModels.findAll({
          options: {
              id: id,
              category_opt_singular: category_opt_singular,
              category_opt_plural: category_opt_plural
        }
        });
        return res.render("productsPage", {title: "MICMAR | PAGINA DE PRODUTOS", hcl, hca, ms, pm, co});
    }
};
module.exports = ProductsPageController