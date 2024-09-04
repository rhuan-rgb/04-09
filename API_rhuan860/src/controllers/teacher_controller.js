module.exports = class teacher_controller{
    // cadastro de professor
    static async post_teacher(req,res){
        const {nome, carga_horaria} = req.body;
        if(!nome || !carga_horaria){
            res.status(400).json({message:"Dados inválidos ou incompletos"});
        }
        else{
            res.status(200).json({message:'Informação recebia: Docente cadastrado', nome, carga_horaria});
        }
    }
    // listar professor
    static async get_teacher(req, res) {
        res.status(200).json({nome:"Bruh2"});
    }
}