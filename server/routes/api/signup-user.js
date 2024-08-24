// import { signUpUser } from "../../controllers/user.js";

// export default async (req, res) => {
//   try {
//     const { username, email, password } = req.body;
//     const { user, token } = await signUpUser({ username, email, password });
//     res.json({ user, token });
//   } catch (error) {
//     console.log("api");
//     res.status(403).json(error);
//   }
// };
import User from "../../models/user.js";
export default async (req, res) => {
  const { username, password } = req.body;
  try {
    // Check if the user already exists
    // const existingUser = await User.findOne({
    //   $or: [{ nameTest }, { username }],
    // });
    // if (existingUser) {
    //   return res
    //     .status(400)
    //     .json({ message: "User already exists with that email or username" });
    // }

    // If user does not exist, create a new user
    const newUser = new User({ username, password });
    await newUser.save();

    res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    res.status(500).json({ message: "Server error Backend" + error });
  }
};
