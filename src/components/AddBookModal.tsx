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
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[100]"
            style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0 }}
          />

          {/* Modal Container - Centered */}
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
                  className="absolute top-4 right-4 p-2 rounded-lg bg-black/20 hover:bg-black/30 transition-all z-10"
                  aria-label="Close modal"
                >
                  <X className="h-5 w-5 text-white" />
                </button>

              <h2 className="text-3xl font-bold text-white mb-6 pr-8">Add New Book</h2>

                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <Input
                      type="text"
                      value={title}
                      onChange={(e) => setTitle(e.target.value)}
                      placeholder="Book Name"
                      className="w-full bg-white/10 border-b-2 border-black/30 text-white placeholder:text-black/70 rounded-lg focus:border-black/50 focus:bg-white/15 transition-all text-lg px-4 py-3"
                      autoComplete="off"
                      required
                    />
                  </div>

                  <div>
                    <Input
                      type="text"
                      value={author}
                      onChange={(e) => setAuthor(e.target.value)}
                      placeholder="Author"
                      className="w-full bg-white/10 border-b-2 border-black/30 text-white placeholder:text-black/70 rounded-lg focus:border-black/50 focus:bg-white/15 transition-all text-lg px-4 py-3"
                      autoComplete="off"
                      required
                    />
                  </div>

                  <div>
                    <Textarea
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                      placeholder="Description"
                      rows={4}
                      className="w-full bg-white/10 border-2 border-black/30 text-white placeholder:text-black/70 rounded-lg focus:border-black/50 focus:bg-white/15 transition-all text-lg resize-none px-4 py-3"
                      autoComplete="off"
                      required
                    />
                  </div>

                  <div className="flex gap-3 pt-3">
                    <Button
                      type="submit"
                      className="flex-1 bg-black hover:bg-black/90 text-white py-6 text-lg font-medium rounded-lg transition-all hover:shadow-lg"
                    >
                      Add Book
                    </Button>
                    <Button
                      type="button"
                      onClick={handleClose}
                      variant="outline"
                      className="flex-1 bg-black/20 hover:bg-black/30 text-white border-black/30 py-6 text-lg font-medium rounded-lg transition-all"
                    >
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
