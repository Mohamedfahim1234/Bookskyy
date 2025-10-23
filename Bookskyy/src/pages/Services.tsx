import { motion } from 'framer-motion';
import { BookMarked, Search, Star, Tags, TrendingUp, Shield } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: BookMarked,
      title: 'Book Management',
      description: 'Add, edit, and organize your entire book collection with ease. Keep track of titles, authors, and descriptions.',
      color: 'from-pink-500 to-rose-500',
    },
    {
      icon: Search,
      title: 'Smart Search',
      description: 'Quickly find any book in your collection with powerful search and filter capabilities.',
      color: 'from-purple-500 to-indigo-500',
    },
    {
      icon: Star,
      title: 'Favorites & Ratings',
      description: 'Mark your favorite books and rate them to remember which ones you loved the most.',
      color: 'from-amber-500 to-orange-500',
    },
    {
      icon: Tags,
      title: 'Categories & Tags',
      description: 'Organize books by genre, status, or custom tags for better organization.',
      color: 'from-green-500 to-emerald-500',
    },
    {
      icon: TrendingUp,
      title: 'Reading Stats',
      description: 'Track your reading progress and get insights about your reading habits over time.',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: Shield,
      title: 'Secure Storage',
      description: 'Your book collection data is safely stored and accessible whenever you need it.',
      color: 'from-red-500 to-pink-500',
    },
  ];

  return (
    <div className="min-h-screen">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12"
      >
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
            Our Services
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Everything you need to manage your book collection efficiently and beautifully
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + index * 0.1 }}
                whileHover={{ scale: 1.05, y: -10 }}
                className="bg-card rounded-2xl p-8 shadow-card hover:shadow-elegant transition-all border border-border group"
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center mb-6 shadow-glow group-hover:scale-110 transition-transform`}>
                  <Icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mt-20 gradient-primary rounded-2xl p-12 text-center shadow-elegant"
        >
          <h2 className="text-4xl font-bold text-white mb-4">Ready to Get Started?</h2>
          <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
            Start organizing your book collection today and experience the joy of a beautifully managed library.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white text-primary px-8 py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all"
          >
            Start Adding Books
          </motion.button>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Services;
