import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import sequelize from "./config/db.js";
import bookRoutes from "./routes/bookRoutes.js";
import contactRoutes from "./routes/contactRoutes.js";
import Book from "./models/BookModel.js";
import ContactMessage from "./models/ContactModel.js";

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/books", bookRoutes);
app.use("/api/contact", contactRoutes);

const PORT = process.env.PORT || 5000;

// Connect to MySQL
sequelize
  .sync()
  .then(() => {
    console.log("✅ MySQL Database Synced Successfully");
    app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
  })
  .catch((err) => {
    console.error("❌ Database connection failed:", err);
  });
