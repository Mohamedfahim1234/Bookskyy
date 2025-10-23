import { motion } from 'framer-motion';
import { Trash2 } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface BookCardProps {
  id: string;
  title: string;
  author: string;
  description: string;
  onDelete: (id: string) => void;
  index: number;
}

const BookCard = ({ id, title, author, description, onDelete, index }: BookCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.3, delay: index * 0.05 }}
      whileHover={{ scale: 1.02, y: -5 }}
      className="bg-[hsl(var(--book-card))] text-[hsl(var(--book-card-foreground))] rounded-xl p-6 shadow-card hover:shadow-elegant transition-all"
    >
      <h2 className="text-2xl font-bold text-primary mb-2 capitalize line-clamp-2">
        {title}
      </h2>
      <h5 className="text-lg text-muted-foreground mb-3 font-medium">
        {author}
      </h5>
      <p className="text-sm leading-relaxed mb-4 opacity-90 line-clamp-4">
        {description}
      </p>
      <Button
        variant="destructive"
        size="sm"
        onClick={() => onDelete(id)}
        className="w-full bg-primary hover:bg-primary/90 text-primary-foreground transition-all hover:shadow-glow"
      >
        <Trash2 className="h-4 w-4 mr-2" />
        Delete
      </Button>
    </motion.div>
  );
};

export default BookCard;
