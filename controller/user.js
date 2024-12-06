import User from "../model/user.js"; 

export const createMember = async (req, res) => {
  const { name, phone, height, weight, password, goal } = req.body;

  try {
    const newUser = new User({
      name,
      phone,
      height,
      weight,
      password,
      goal,
    });

    await newUser.save();
    res.status(201).json({ message: 'User registered successfully', user: newUser });
  } catch (err) {
    console.error('Error in createMember:', err); // Log full error for debugging
    res.status(400).json({ 
      message: 'Error registering user', 
      error: err.message,
      details: err
    });
  }
};


export const getAllUsers = async (req, res) => {
    try {
      const users = await User.find({});
      res.status(200).json(users);
    } catch (error) {
      console.error('Error fetching users:', error); // Log error
      res.status(500).json({ message: 'Internal Server Error' });
    }
  };



  export const loginMember = async (req, res) => {
    const { phone, password } = req.body;
  
    if (!phone || !password) {
      return res.status(400).json({ message: 'Phone and password are required' });
    }
  
    try {
      const member = await User.findOne({ phone }).select('+password');
      if (!member) {
        return res.status(400).json({ message: 'User not found' });
      }
  
      // Directly compare the plain-text password (Not secure)
      if (password !== member.password) {
        return res.status(400).json({ message: 'Invalid credentials' });
      }
  
      // Omit the password before sending the user object
      member.password = undefined;
  
      res.status(200).json({ message: 'Login successful', user: member });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: error.message });
    }
  };
  