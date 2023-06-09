const { HomehclModels, HomehcaModels, MainSectionModels, ProductsModels, CategoryOptionsModels } = require("../models");

const ProductController = {
    productShow: async(req, res) => {
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
              id: id,
            }
          });
        return res.render("product", {title: "| PAGINA DO PRODUTO", ms, pm, co, hcl});
    }
};
module.exports = ProductController