const { HomehclModels, HomehcaModels, ProductsModels, CategoryOptionsModels, UsersModels } = require("../models");
const file = require("../helpers/files");

const CategoriesRecordController = {

    viewCategory: async (req, res) => {
        let hcl = await HomehclModels.findOne();
        // console.log(hcl);
        let hca = await HomehcaModels.findOne();
        // console.log(hca);
        let co = await CategoryOptionsModels.findOne();
        // console.log(co)
    
        return res.render("categoryRecord", {title: "| CADASTRO DE CATEGORIA", hcl, hca, co});
    },
    recordedCategory: async (req, res) => {
        const {category_opt_singular, category_opt_plural} = req.body;
        // console.log(category_opt_singular, category_opt_plural)

        if (!category_opt_singular || !category_opt_plural) {
            return res.send({ message: "Se chegou aqui é porque não cadastrou a categoria" });
        }
    try {
        const categoryOptions = await CategoryOptionsModels.create({
            category_opt_singular: category_opt_singular,
            category_opt_plural: category_opt_plural
        });

        return res.send({ Recorded: categoryOptions }).status(200);

    } catch (error) {
            return res.send({ message: "erro: " + error});
    }
},
}
module.exports = CategoriesRecordController