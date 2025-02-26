
import React from "react";
import { motion } from "framer-motion";

interface DesignItem {
  name: string;
  description: string;
  image: string;
}

interface DesignCategory {
  title: string;
  items: DesignItem[];
}

interface GraphicDesignSectionProps {
  designWorks: DesignCategory[];
}

const GraphicDesignSection: React.FC<GraphicDesignSectionProps> = ({ designWorks }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      viewport={{ once: true }}
      className="my-12"
    >
      {designWorks.map((category, categoryIndex) => (
        <div key={categoryIndex} className="mb-16">
          <h2 className="text-3xl font-bold mb-8">{category.title}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {category.items.map((item, itemIndex) => (
              <motion.div
                key={itemIndex}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * itemIndex }}
                viewport={{ once: true }}
                className="group bg-card rounded-lg overflow-hidden border shadow-md hover:shadow-lg transition-all"
              >
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                  <div className="absolute bottom-0 left-0 p-4 text-white">
                    <h3 className="text-lg font-bold">{item.name}</h3>
                    <p className="text-sm text-white/80">{item.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      ))}
    </motion.div>
  );
};

export default GraphicDesignSection;
