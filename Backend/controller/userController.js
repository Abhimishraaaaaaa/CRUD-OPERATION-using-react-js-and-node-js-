import usermodel from "../models/User.js"
const create = async(req, res) => {
    try {
        if (!req.body) {
            return res.status(400).json({ success: false, message: "Request body is missing." });
        }

        const { name, fathername, email, phone } = req.body;

        if (!name || !email || !phone) {
            return res.status(400).json({ success: false, message: "Required fields are missing." });
        }

        const newUser = new usermodel({
            name,
            fathername,
            email,
            phone
        });

        await newUser.save();
        res.status(201).json({ success: true, message: "User created successfully.", user: newUser });
    } catch (error) {
        console.error("Error creating user:", error.message);
        res.status(500).json({ success: false, message: "Internal server error", error: error.message });
    }
};

const get = async(req, res) => {
    try {
        const user = await usermodel.find()
        if (!user) {
            res.status(404).json({ success: false, message: "user not found" })

        }
        res.status(201).json({ success: true, message: "user found", user })

    } catch (error) {
        console.error("Error creating user:", error.message);
        res.status(500).json({ success: false, message: "Internal server error", error: error.message });


    }

}

const update = async(req, res) => {
    try {
        const userId = req.params.id
        const updateuser = await usermodel.findByIdAndUpdate(userId, req.body, { new: true })
        if (!updateuser) {
            res.status(404).json({ success: false, message: "user not found" })
        }
        res.status(200).json({ success: true, message: "user update successfully", updateuser })

    } catch (error) {
        console.error("Error creating user:", error.message);
        res.status(500).json({ success: false, message: "Internal server error", error: error.message });

    }



}
const delate = async(req, res) => {
    try {
        const userId = req.params.id
        const delateuser = await usermodel.findByIdAndDelete(userId)
        if (!delateuser) {
            res.status(404).json({ success: false, message: 'user not found' })
        }
        res.status(200).json({ success: true, message: "user delate successfully", delateuser })


    } catch (error) {
        console.error("Error creating user:", error.message);
        res.status(500).json({ success: false, message: "Internal server error", error: error.message });

    }

}

// ////////update user api






















































// const Updated = async(req, res) => {
//     try {
//         const userId = req.params.id

//         const updateuser = await usermodel.findByIdAndUpdate(userId, req.body, { new: true })
//         if (!updateuser) {
//             return res.status(404).json({ success: false, message: 'User not found' });
//         }
//         res.status(200).json({ success: true, message: 'User updated successfully', updateuser });
//     } catch (error) {
//         console.log(error);
//         res.status(500).json({ success: false, message: 'Internal server error' });
//     }
// }

// // delet user ap
// const Delete = async(req, res) => {
//     try {
//         const userId = req.params.id
//         const deletuser = await usermodel.findByIdAndDelete(userId)
//         if (!deletuser) {
//             return res.status(404).json({ success: false, message: 'user Not found' });
//         }
//         res.status(200).json({ success: true, message: 'user Deleted successfully' });
//     } catch (error) {
//         console.log(error)
//         res.status(500).json({ success: false, message: 'Internal server error' });
//     }
// }

export { create, get, update, delate }