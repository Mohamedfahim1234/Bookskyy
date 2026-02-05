import express from "express";
import Book from "../models/BookModel.js";

const router = express.Router();

// Get all books
router.get("/", async (req, res) => {
  try {
    const books = await Book.findAll();
    res.json(books);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch books" });
  }
});

// Add new book
router.post("/", async (req, res) => {
  try {
    const { title, author, description } = req.body;
    const newBook = await Book.create({ title, author, description });
    res.json(newBook);
  } catch (err) {
    res.status(500).json({ error: "Failed to add book" });
  }
});

// Delete book
router.delete("/:id", async (req, res) => {
  try {
    const book = await Book.findByPk(req.params.id);
    if (!book) return res.status(404).json({ error: "Book not found" });
    await book.destroy();
    res.json({ message: "Book deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: "Failed to delete book" });
  }
});

export default router;
