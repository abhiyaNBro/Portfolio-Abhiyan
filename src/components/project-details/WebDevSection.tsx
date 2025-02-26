
import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

interface WebsiteFeature {
  [key: number]: string;
}

interface Website {
  name: string;
  description: string;
  url: string;
  image: string;
  features: string[];
}

interface WebDevSectionProps {
  websites: Website[];
}

const WebDevSection: React.FC<WebDevSectionProps> = ({ websites }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      viewport={{ once: true }}
      className="my-12"
    >
      <h2 className="text-3xl font-bold mb-8">Featured Websites</h2>
      <div className="space-y-16">
        {websites.map((website, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 * index }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center"
          >
            <div className={index % 2 === 0 ? "order-1 md:order-1" : "order-1 md:order-2"}>
              <div className="rounded-xl overflow-hidden shadow-lg">
                <img 
                  src={website.image} 
                  alt={website.name} 
                  className="w-full h-auto"
                />
              </div>
            </div>
            <div className={index % 2 === 0 ? "order-2 md:order-2" : "order-2 md:order-1"}>
              <h3 className="text-2xl font-bold mb-3">{website.name}</h3>
              <p className="text-muted-foreground mb-6">{website.description}</p>
              <ul className="space-y-2 mb-6">
                {website.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-2">
                    <span className="text-primary text-lg leading-tight">•</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <Button asChild>
                <a href={website.url} target="_blank" rel="noopener noreferrer">
                  View Website
                </a>
              </Button>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default WebDevSection;
