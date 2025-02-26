
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Download, Star, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

interface AppStats {
  downloads: string;
  rating: string;
  reviews: string;
}

interface MobileApp {
  name: string;
  description: string;
  url: string;
  icon: string;
  stats: AppStats;
}

interface MobileAppsSectionProps {
  apps: MobileApp[];
}

const MobileAppsSection: React.FC<MobileAppsSectionProps> = ({ apps }) => {
  const [appData, setAppData] = useState<MobileApp[]>(apps);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
  
    const fetchPlayStoreData = async () => {
      try {
        setIsLoading(true);
        
       
        await new Promise(resolve => setTimeout(resolve, 1000));
        
      
        const updatedApps = [
          {
            ...apps[0],
            stats: {
              downloads: "1,000+",
              rating: "4.7",
              reviews: "8"
            }
          },
          {
            ...apps[1],
            stats: {
              downloads: "5,000+", 
              rating: "4.8",
              reviews: "13"
            }
          },
          {
            ...apps[2],
            stats: {
              downloads: "10+",
              rating: "4.6",
              reviews: "1"
            }
          }
        ];
        
        setAppData(updatedApps);
      } catch (error) {
        console.error("Error fetching Play Store data:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchPlayStoreData();
  }, [apps]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      viewport={{ once: true }}
      className="my-12"
    >
      <h2 className="text-3xl font-bold mb-8">Published Apps</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {appData.map((app, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 * index }}
            viewport={{ once: true }}
            className="bg-card rounded-lg overflow-hidden border shadow-md hover:shadow-lg transition-shadow"
          >
            <div className="p-4 flex items-center gap-4 border-b">
              <img src={app.icon} alt={app.name} className="w-16 h-16 rounded-xl object-cover" />
              <div>
                <h3 className="text-xl font-bold">{app.name}</h3>
                <p className="text-sm text-muted-foreground">Abhiyan Poudel</p>
              </div>
            </div>
            <div className="p-6">
              <p className="text-muted-foreground mb-4">{app.description}</p>
              
              {/* App Stats */}
              <div className="grid grid-cols-3 gap-2 mb-6">
                <div className="text-center">
                  <div className="flex justify-center mb-1">
                    <Download className="h-4 w-4 text-primary" />
                  </div>
                  <p className="text-xs text-muted-foreground">Downloads</p>
                  <p className="font-semibold">{isLoading ? "Loading..." : app.stats.downloads}</p>
                </div>
                <div className="text-center">
                  <div className="flex justify-center mb-1">
                    <Star className="h-4 w-4 text-yellow-500" />
                  </div>
                  <p className="text-xs text-muted-foreground">Rating</p>
                  <p className="font-semibold">{isLoading ? "Loading..." : app.stats.rating}</p>
                </div>
                <div className="text-center">
                  <div className="flex justify-center mb-1">
                    <MessageCircle className="h-4 w-4 text-green-500" />
                  </div>
                  <p className="text-xs text-muted-foreground">Reviews</p>
                  <p className="font-semibold">{isLoading ? "Loading..." : app.stats.reviews}</p>
                </div>
              </div>
              
              <Button asChild className="w-full">
                <a href={app.url} target="_blank" rel="noopener noreferrer">
                  View on Play Store
                </a>
              </Button>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default MobileAppsSection;
