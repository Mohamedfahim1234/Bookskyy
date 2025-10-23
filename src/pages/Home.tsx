import { useState } from 'react';
import { motion } from 'framer-motion';
import { Plus } from 'lucide-react';
import BookCard from '@/components/BookCard';
import AddBookModal from '@/components/AddBookModal';

interface Book {
  id: string;
  title: string;
  author: string;
  description: string;
}

const Home = () => {
  const [books, setBooks] = useState<Book[]>([
    {
      id: '1',
      title: 'Rich Dad Poor Dad',
      author: 'Robert Kiyosaki',
      description: 'A groundbreaking personal finance book that challenges conventional wisdom about money and investing. Learn the secrets of financial independence and wealth building.',
    },
  ]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleAddBook = (bookData: { title: string; author: string; description: string }) => {
    const newBook: Book = {
      id: Date.now().toString(),
      ...bookData,
    };
    setBooks([...books, newBook]);
  };

  const handleDeleteBook = (id: string) => {
    setBooks(books.filter(book => book.id !== id));
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
