const { HomehclModels, HomehcaModels, MainSectionModels, ProductsModels, CategoryOptionsModels } = require("../models");

const AdmPageController = {
    viewAdmPage: async(req, res) => {
        let hcl = await HomehclModels.findOne();
        // console.log(hcl);
        let hca = await HomehcaModels.findOne();
        // console.log(hca);
        let ms = await MainSectionModels.findAll();
        // console.log(ms);
        let pm = await ProductsModels.findAll();
        // console.log(pm);
        let co = await CategoryOptionsModels.findAll();
        // console.log(co);
      return res.render("admPageShow", {title: "| ADMINISTRATIVO"});
    },
};
module.exports = AdmPageController