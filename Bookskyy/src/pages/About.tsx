import { motion } from 'framer-motion';
import { BookOpen, Heart, Sparkles, Users } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: BookOpen,
      title: 'Digital Library',
      description: 'Keep all your favorite books organized in one beautiful, accessible place.',
    },
    {
      icon: Heart,
      title: 'Built with Love',
      description: 'Crafted with passion for book lovers by book lovers.',
    },
    {
      icon: Sparkles,
      title: 'Beautiful Design',
      description: 'A clean, modern interface that makes managing your collection a joy.',
    },
    {
      icon: Users,
      title: 'For Everyone',
      description: 'Whether you have 10 books or 1000, Booksky scales with your collection.',
    },
  ];

  return (
    <div className="min-h-screen">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12"
      >
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
            About Booksky
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Booksky is your personal digital library manager, designed to help you organize, track, 
            and celebrate your reading journey. Born from a love of books and clean design, we've 
            created a space where your collection can truly shine.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + index * 0.1 }}
                whileHover={{ scale: 1.03, y: -5 }}
                className="bg-card rounded-2xl p-8 shadow-card hover:shadow-elegant transition-all border border-border"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-primary to-primary/70 rounded-xl flex items-center justify-center mb-6 shadow-glow">
                  <Icon className="h-7 w-7 text-primary-foreground" />
                </div>
                <h3 className="text-2xl font-bold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </motion.div>
            );
          })}
        </div>

        {/* Mission Statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="gradient-primary rounded-2xl p-12 text-center shadow-elegant"
        >
          <h2 className="text-3xl font-bold text-white mb-4">Our Mission</h2>
          <p className="text-white/90 text-lg leading-relaxed max-w-2xl mx-auto">
            To create the most delightful book management experience possible, 
            making it easy for readers everywhere to organize their collections 
            and rediscover the joy of their personal libraries.
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default About;
