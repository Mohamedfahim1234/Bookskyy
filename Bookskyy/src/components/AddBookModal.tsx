import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

interface AddBookModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAdd: (book: { title: string; author: string; description: string }) => void;
}

const AddBookModal = ({ isOpen, onClose, onAdd }: AddBookModalProps) => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (title.trim() && author.trim() && description.trim()) {
      onAdd({ title, author, description });
      setTitle('');
      setAuthor('');
      setDescription('');
      onClose();
    }
  };

  const handleClose = () => {
    setTitle('');
    setAuthor('');
    setDescription('');
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[100]"
          />

          <div className="fixed inset-0 z-[101] flex items-center justify-center p-4 pointer-events-none">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.2 }}
              className="w-full max-w-lg pointer-events-auto"
            >
              <div className="gradient-primary rounded-2xl p-8 shadow-elegant relative">
                <button
                  onClick={handleClose}
                  type="button"
                  className="absolute top-4 right-4 p-2 rounded-lg bg-black/20 hover:bg-black/30 transition-all"
                >
                  <X className="h-5 w-5 text-white" />
                </button>

                <h2 className="text-3xl font-bold text-white mb-6">Add New Book</h2>

                <form onSubmit={handleSubmit} className="space-y-5">
                  <Input value={title} onChange={e => setTitle(e.target.value)} placeholder="Book Name" required />
                  <Input value={author} onChange={e => setAuthor(e.target.value)} placeholder="Author" required />
                  <Textarea value={description} onChange={e => setDescription(e.target.value)} placeholder="Description" rows={4} required />

                  <div className="flex gap-3 pt-3">
                    <Button type="submit" className="flex-1 bg-black hover:bg-black/90 text-white py-6 text-lg font-medium rounded-lg transition-all hover:shadow-lg">
                      Add Book
                    </Button>
                    <Button type="button" onClick={handleClose} variant="outline" className="flex-1 bg-black/20 hover:bg-black/30 text-white border-black/30 py-6 text-lg font-medium rounded-lg transition-all">
                      Cancel
                    </Button>
                  </div>
                </form>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
};

export default AddBookModal;
