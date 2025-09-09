import { list } from "../../model/productModel.js";

export  const  listProductController = async(req, res) => {
  const result = await list();
  res.json({
    message:'Usúarios listados com sucesso',
    profiles: result
  })
}