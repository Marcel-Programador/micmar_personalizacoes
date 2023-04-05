const { HomehclModels, HomehcaModels, ProductsModels, CategoryOptionsModels, UsersModels } = require("../models");
const file = require("../helpers/files");

const ProductsRecordController = {

    viewProduct: async (req, res) => {
        let hcl = await HomehclModels.findOne();
        // console.log(hcl);
        let hca = await HomehcaModels.findOne();
        // console.log(hca);
        let pm = await ProductsModels.findAll();
        // console.log(hca);
        return res.render("productRecord", {title: "| CADASTRO DE PRODUTO", hcl, hca, pm});
    },
    recordedProduct: async (req, res) => {
        const { category, theme, mark, type, color, quantity, costPrice, salePrice, specialPrice, description } = req.body;
        let filename = "shoes-defaut.png";

        if (req.file) {
          filename = req.file.filename
        }

        if ( !category || !theme || !mark || !type || !color || !quantity || !costPrice || !salePrice || !specialPrice || !description ){
            return res.send({message: "Se chegou aqui é porque esqueceu de cadastrar alguma informação do produto"})
        }
    try {
        const product = await ProductsModels.create({
            theme: theme,
            category: category,
            mark: mark,
            type: type,
            color: color,
            quantity: parseInt(quantity),
            costPrice: parseFloat(costPrice),
            salePrice: parseFloat(salePrice),
            specialPrice: parseFloat(specialPrice),
            description: description,
            img: filename
        })
        return res.render("ProductShowRecorded", {title: "| PRODUTO GRAVADO"});

        } catch (error) {
            return res.send({message: "erro" + error})
        }
    },
}
module.exports = ProductsRecordController