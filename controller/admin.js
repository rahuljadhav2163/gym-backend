import Admin from "../model/admin.js";

 export const postadmin =  async (req, res) => {
    const { mobile, password } = req.body;
    try {
        const newUser = new Admin({
            mobile,
            password,
        });
        const saveUser = await newUser.save();
        res.json({
            success: true,
            data: saveUser,
            message: 'Signup successfully..!',
        });
    } catch (e) {
        res.json({
            success: false, 
            message: e.message,
        });
    }
  }

  export const loginadmin =  async (req, res) => {
    const { mobile, password } = req.body;
    const findUser = await Admin.findOne({ password, mobile })
  
    if (findUser == null) {
        return res.json({
            success: "false",
            message: "Something went wrong..!"
        }
        )
    }
    res.json({
        success: "true",
        data: findUser,
        message: "Login successfully..!"
    }
    )
  }
