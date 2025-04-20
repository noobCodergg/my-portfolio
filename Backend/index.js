const express = require("express");
const cors = require("cors");
const connectDB = require("./Config/db");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser"); // Import cookie-parser
const prizeRoute = require("./Routes/prizeRoute");
const userRoute = require("./Routes/userRoute");
const requestRoute = require("./Routes/requestRoute");
const projectRoute = require("./Routes/projectRoute");
const adminRoute = require('./Routes/adminRoute');

require("dotenv").config();

// Connect to MongoDB
connectDB();

const app = express();

// ✅ Use cookie-parser middleware
app.use(cookieParser()); // Add this line to parse cookies

// ✅ Only need body-parser once with size limits
app.use(bodyParser.json({ limit: '100mb' }));
app.use(bodyParser.urlencoded({ extended: true, limit: '100mb' }));

// ✅ CORS configuration
app.use(cors({
  origin: (origin, callback) => {
    // Allow requests from both the Netlify frontend and the Render backend
    if (origin === 'https://marvelous-malabi-1cbcb7.netlify.app' || origin === 'https://my-portfolio-bapt.onrender.com') {
      callback(null, origin); // Allow the origin
    } else {
      callback(new Error('Not allowed by CORS')); // Reject other origins
    }
  },
  credentials: true, // Allow cookies to be sent with requests
}));



// ✅ Basic route
app.get('/', (req, res) => {
  return res.status(200).json({
    success: true,
    message: 'Welcome to Merchant App Server',
  });
});

// ✅ Routes
app.use("/api/prize", prizeRoute);
app.use("/api/user", userRoute);
app.use("/api/request", requestRoute);
app.use("/api/project", projectRoute);
app.use("/api/admin", adminRoute);

// ✅ Start the server
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
