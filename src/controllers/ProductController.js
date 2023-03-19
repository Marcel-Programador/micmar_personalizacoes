const { HomehclModels, HomehcaModels, MainSectionModels, ProductsModels, CategoryOptionsModels } = require("../models");

const ProductController = {
    product: async(req, res) => {
        let hcl = await HomehclModels.findOne();
        // console.log(hcl);
        let hca = await HomehcaModels.findOne();
        // console.log(hca);
        let ms = await MainSectionModels.findAll();
        // console.log(ms);
        let co = await CategoryOptionsModels.findAll();
      
        const { id } = req.params;
        let pm = await ProductsModels.findAll({
            where: {
              id: id
            }
          });
        // console.log(pm);
        // const { id, category_opt_singular, category_opt_plural } = req.params;
        // let co = await CategoryOptionsModels.findAll({
        //   options: {
        //       id: id,
        //       category_opt_singular: category_opt_singular,
        //       category_opt_plural: category_opt_plural
        // }
        // });
        return res.render("product", {title: "MICMAR | PAGINA DO PRODUTO", hcl, hca, ms, pm, co});
    }
};
module.exports = ProductController