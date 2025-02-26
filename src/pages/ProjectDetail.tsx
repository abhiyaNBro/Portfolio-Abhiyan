
import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Github, Globe, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import DisplayCards from "@/components/ui/display-cards";
import { Footerdemo } from "@/components/ui/footer-section";
import { AnimatedTestimonialsDemo } from "@/components/ui/animated-testimonials-demo";

// Import project data
import projectsData from "@/data/projectsData";

// Import project section components
import MobileAppsSection from "@/components/project-details/MobileAppsSection";
import GraphicDesignSection from "@/components/project-details/GraphicDesignSection";
import GithubReposSection from "@/components/project-details/GithubReposSection";
import WebDevSection from "@/components/project-details/WebDevSection";

export default function ProjectDetail() {
  const { id } = useParams<{ id: string }>();
  const project = projectsData.find(p => p.id === id);
  
  // Fix for scrolling to the top when the component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);
  
  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
          <p className="mb-8">The project you're looking for doesn't exist or has been removed.</p>
          <Link to="/">
            <Button>Return Home</Button>
          </Link>
        </div>
      </div>
    );
  }

  const displayCards = project.features.map(feature => ({
    icon: <FileText className="size-4 text-primary-foreground" />,
    title: feature.title,
    description: feature.description,
    date: feature.date,
    iconClassName: "text-primary",
    titleClassName: "text-primary",
  }));

  return (
    <div className="min-h-screen bg-transparent text-foreground">
      {/* Hero Section */}
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-transparent to-primary/20 backdrop-blur-3xl" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/0" />
        <div className="container mx-auto px-4 py-28 relative z-10">
          <Link to="/#projects" className="inline-block mb-8">
            <Button variant="ghost" className="gap-2">
              <ArrowLeft className="h-4 w-4" />
              Back to Projects
            </Button>
          </Link>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">{project.name}</h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8">{project.description}</p>
            
            <div className="flex flex-wrap gap-2 mb-8">
              {project.technologies.map((tech, index) => (
                <span 
                  key={index}
                  className="px-3 py-1 text-sm rounded-full bg-primary/10 text-primary"
                >
                  {tech}
                </span>
              ))}
            </div>
            
            <div className="flex flex-wrap gap-4">
              {project.liveUrl && (
                <Button className="gap-2" asChild>
                  <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                    <Globe className="h-4 w-4" />
                    View Live
                  </a>
                </Button>
              )}
              
              {project.githubUrl && (
                <Button variant="outline" className="gap-2" asChild>
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                    <Github className="h-4 w-4" />
                    View Code
                  </a>
                </Button>
              )}
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Project Image or Slideshow */}
      <div className="container mx-auto px-4 py-16">
        {project.slideshow ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            className="rounded-xl overflow-hidden shadow-2xl"
          >
            <div className="relative h-[400px] md:h-[500px] overflow-hidden">
              {project.images?.map((image, index) => (
                <motion.div
                  key={index}
                  className="absolute inset-0"
                  initial={{ opacity: 0 }}
                  animate={{ 
                    opacity: [0, 1, 1, 0], 
                    transition: { 
                      times: [0, 0.1, 0.9, 1],
                      duration: 5, 
                      delay: index * 5,
                      repeat: Infinity,
                      repeatDelay: (project.images?.length || 1) * 5 - 5
                    } 
                  }}
                >
                  <img 
                    src={image} 
                    alt={`${project.name} slide ${index + 1}`} 
                    className="w-full h-full object-cover"
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            className="rounded-xl overflow-hidden shadow-2xl max-h-[500px]"
          >
            <img 
              src={project.image} 
              alt={project.name} 
              className="w-full h-full object-cover"
            />
          </motion.div>
        )}
      </div>
      
      {/* Project Description */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-6">About the Project</h2>
            <p className="text-lg text-muted-foreground mb-12 leading-relaxed">
              {project.fullDescription}
            </p>
          </motion.div>
          
          <DisplayCards cards={displayCards} />
          
          {/* Project-specific sections */}
          {project.id === "project-one" && project.mobileApps && (
            <MobileAppsSection apps={project.mobileApps} />
          )}
          
          {project.id === "project-two" && project.designWorks && (
            <GraphicDesignSection designWorks={project.designWorks} />
          )}
          
          {project.id === "project-three" && project.repos && (
            <GithubReposSection repos={project.repos} />
          )}
          
          {project.id === "project-four" && project.websites && (
            <WebDevSection websites={project.websites} />
          )}
          
          {/* Testimonials */}
          {project.testimonials && (
            <div className="my-16">
              <h2 className="text-3xl font-bold mb-8">What Clients Say</h2>
              <AnimatedTestimonialsDemo />
            </div>
          )}
        </div>
      </div>
      
      {/* Footer */}
      <Footerdemo />
    </div>
  );
}
