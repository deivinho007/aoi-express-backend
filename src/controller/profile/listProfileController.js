import { list } from "../../model/profileModel.js";

export  const  listProfileController = async(req, res) => {
  const result = await list();
  res.json({
    message:'Usúarios listados com sucesso',
    profiles: result
  })
}