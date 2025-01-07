import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { RecipeCard } from './RecipeCard';
import { recipes } from '@/lib/recipes';

export function RagRecipes() {
  const [activeIndex, setActiveIndex] = useState(0);
  const visibleRecipes = 3;

  const nextSlide = () => {
    setActiveIndex((current) => 
      Math.min(current + 1, recipes.length - visibleRecipes)
    );
  };

  const prevSlide = () => {
    setActiveIndex((current) => Math.max(current - 1, 0));
  };

  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-12">
          <div>
            <h2 className="text-3xl font-medium mb-2">RAG Recipes</h2>
            <p className="text-lg text-white/60">Ready-to-deploy RAG applications</p>
          </div>
          
          <div className="flex gap-2">
            <Button
              variant="secondary"
              size="icon"
              onClick={prevSlide}
              disabled={activeIndex === 0}
              className="rounded-xl transition-transform hover:scale-105"
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button
              variant="secondary"
              size="icon"
              onClick={nextSlide}
              disabled={activeIndex === recipes.length - visibleRecipes}
              className="rounded-xl transition-transform hover:scale-105"
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>

        <div className="relative overflow-hidden">
          <motion.div
            className="flex gap-6"
            animate={{
              x: `${-activeIndex * (100 / visibleRecipes)}%`,
            }}
            transition={{
              type: "spring",
              stiffness: 150,
              damping: 20
            }}
          >
            <AnimatePresence>
              {recipes.map((recipe) => (
                <motion.div
                  key={recipe.id}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.5 }}
                  className="min-w-[calc(100%/3-1rem)]"
                >
                  <RecipeCard recipe={recipe} />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
