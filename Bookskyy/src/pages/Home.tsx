import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Plus } from 'lucide-react';
import BookCard from '@/components/BookCard';
import AddBookModal from '@/components/AddBookModal';

interface Book {
  id: number;
  title: string;
  author: string;
  description: string;
}

const Home = () => {
  const [books, setBooks] = useState<Book[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Fetch all books from backend
  useEffect(() => {
    fetch('http://localhost:5000/api/books')
      .then(res => res.json())
      .then(data => setBooks(data))
      .catch(err => console.error('Error fetching books:', err));
  }, []);

  // Add new book
  const handleAddBook = async (bookData: { title: string; author: string; description: string }) => {
    try {
      const res = await fetch('http://localhost:5000/api/books', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(bookData),
      });
      const newBook = await res.json();
      setBooks([...books, newBook]);
    } catch (err) {
      console.error('Error adding book:', err);
    }
  };

  // Delete book
  const handleDeleteBook = async (id: number) => {
    try {
      await fetch(`http://localhost:5000/api/books/${id}`, { method: 'DELETE' });
      setBooks(books.filter(book => book.id !== id));
    } catch (err) {
      console.error('Error deleting book:', err);
    }
  };

  return (
    <div className="min-h-screen pb-24">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-gradient-to-br from-primary/10 via-background to-primary/5 py-12 px-4 mb-8"
      >
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
            Your Digital Library
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Organize, manage, and cherish your book collection in one beautiful place
          </p>
        </div>
      </motion.div>

      {/* Books Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {books.length === 0 ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20"
          >
            <p className="text-2xl text-muted-foreground mb-4">No books yet!</p>
            <p className="text-lg text-muted-foreground">Click the + button to add your first book</p>
          </motion.div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {books.map((book, index) => (
              <BookCard
                key={book.id}
                {...book}
                onDelete={handleDeleteBook}
                index={index}
              />
            ))}
          </div>
        )}
      </div>

      {/* Floating Add Button */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsModalOpen(true)}
        className="fixed bottom-10 right-10 w-16 h-16 bg-gradient-to-br from-primary to-primary/80 text-primary-foreground rounded-full shadow-elegant hover:shadow-glow transition-all flex items-center justify-center z-40 animate-pulse-glow"
        aria-label="Add book"
      >
        <Plus className="h-8 w-8" />
      </motion.button>

      {/* Add Book Modal */}
      <AddBookModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onAdd={handleAddBook}
      />
    </div>
  );
};

export default Home;
