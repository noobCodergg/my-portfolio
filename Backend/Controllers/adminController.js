import jwt from 'jsonwebtoken';
import cookieParser from 'cookie-parser';
import Admin from '../Models/adminModel.js'; // Assuming ES Modules

const JWT_SECRET = process.env.JWT_SECRET || 'your_jwt_secret';


export const login = async (req, res) => {
  const { email, password } = req.body;
  console.log(email,password)

  if (!email || !password) {
    return res.status(400).json({ message: 'Email and password are required' });
  }

  try {
 
    const admin = await Admin.findOne({ email });

    if (!admin) {
      return res.status(404).json({ message: 'Admin not found' });
    }

   
    if (password !== admin.password) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

 
    const token = jwt.sign({ id: admin._id, email: admin.email }, JWT_SECRET, {
      expiresIn: '1h',
    });

    // Set token as a cookie in the response
    res.cookie('token', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'None', // ❗ Required for Netlify ↔ Render
      maxAge: 3600 * 1000,
    });

    // Send a successful response
    return res.status(200).json({
      message: 'Login successful',
      admin: {
        email: admin.email,
        _id: admin._id,
      },
    });
  } catch (error) {
    return res.status(500).json({ message: 'Server error', error: error.message });
  }
};



export const verify = (req, res) => {
  const token = req.cookies.token;

  if (!token) {
    return res.status(401).json({ message: 'Unauthorized: No token found' });
  }

  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    // Optionally, you can add extra verification here (e.g., check if user exists)

    return res.status(200).json({ message: 'Token is valid', admin: decoded });
  } catch (error) {
    return res.status(401).json({ message: 'Invalid token', error: error.message });
  }
};


export const logout = (req, res) => {
  // Clear the token from cookies
  res.clearCookie('token', {
    httpOnly: true,
    secure: secure: process.env.NODE_ENV === 'production',
    sameSite: 'None',
  });
  

  // Send a successful response
  return res.status(200).json({ message: 'Logout successful' });
};

