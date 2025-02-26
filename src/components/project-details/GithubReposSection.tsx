
import React from "react";
import { motion } from "framer-motion";
import { Github, Star, Eye, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

interface RepoStats {
  stars: number;
  forks: number;
  watchers: number;
}

interface Repo {
  name: string;
  description: string;
  url: string;
  stats: RepoStats;
}

interface GithubReposSectionProps {
  repos: Repo[];
}

const GithubReposSection: React.FC<GithubReposSectionProps> = ({ repos }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      viewport={{ once: true }}
      className="my-12"
    >
      <h2 className="text-3xl font-bold mb-8">GitHub Repositories</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {repos.map((repo, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 * index }}
            viewport={{ once: true }}
            className="bg-card rounded-lg overflow-hidden border shadow-md hover:shadow-lg transition-all"
          >
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-bold text-primary">{repo.name}</h3>
                <Button variant="ghost" size="sm" className="gap-1" asChild>
                  <a href={repo.url} target="_blank" rel="noopener noreferrer">
                    <Github className="h-4 w-4" />
                    View
                  </a>
                </Button>
              </div>
              <p className="text-muted-foreground mb-6">{repo.description}</p>
              <div className="flex justify-between text-sm">
                <div className="flex items-center gap-1">
                  <Star className="h-4 w-4 text-yellow-500" />
                  <span>{repo.stats.stars}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Users className="h-4 w-4 text-blue-500" />
                  <span>{repo.stats.forks}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Eye className="h-4 w-4 text-green-500" />
                  <span>{repo.stats.watchers}</span>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default GithubReposSection;
