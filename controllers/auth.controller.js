const { User } = require('../database/config');
const {request, response} = require('express');
const authCtrl ={};

authCtrl.login = async(req = request,res = response)=>{
    const { email, password} = req.body;
    try {
        console.log(req.body)
        const userDB = await User.findOne({ where: { email: email, password: password } });
        if (userDB === null){
            return res.status(404).json({
                ok:false,
                msg:"Wrong email or password"
            })
        }
        res.json({
            ok: true,
            msg:"User logged",
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok:false,
            msg:"Unexpected error"
        })
    }
}
module.exports = authCtrl;