
import { motion } from "framer-motion";
import { FileText, Github, Briefcase, Smartphone, Globe, Lightbulb } from "lucide-react";
import { BentoGrid, BentoCard } from "@/components/ui/bento-grid";

const projects = [
  {
    name: "Mobile Apps",
    description: "Android applications published on Google Play Store.",
    Icon: Smartphone,
    background: (
      <img
        src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b"
        alt="Mobile Apps"
        className="absolute inset-0 object-cover w-full h-full opacity-20"
      />
    ),
    href: "/project/project-one",
    cta: "View Apps",
    className: "md:col-span-1",
  },
  {
    name: "Graphic Designing",
    description: "Showcase of my Photoshop and design thumbnails.",
    Icon: Lightbulb,
    background: (
      <img
        src="https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7"
        alt="Graphic Designing"
        className="absolute inset-0 object-cover w-full h-full opacity-20"
      />
    ),
    href: "/project/project-two",
    cta: "View Designs",
    className: "md:col-span-1",
  },
  {
    name: "GitHub Projects",
    description: "My collection of open-source repositories and minor projects.",
    Icon: Github,
    background: (
      <img
        src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6"
        alt="GitHub Projects"
        className="absolute inset-0 object-cover w-full h-full opacity-20"
      />
    ),
    href: "/project/project-three",
    cta: "Explore Repos",
    className: "md:col-span-1",
  },
  {
    name: "Web Development",
    description: "Showcase of websites and web applications I've built.",
    Icon: Globe,
    background: (
      <img
        src="https://images.unsplash.com/photo-1498050108023-c5249f4df085"
        alt="Web Development"
        className="absolute inset-0 object-cover w-full h-full opacity-20"
      />
    ),
    href: "/project/project-four",
    cta: "View Websites",
    className: "md:col-span-1",
  }
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-20">
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            My Projects
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            A showcase of my work, from mobile apps to web development and design.
          </p>
        </motion.div>

        <BentoGrid className="w-full grid-cols-1 md:grid-cols-2">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.5, 
                delay: index * 0.1 
              }}
              viewport={{ once: true }}
              className={project.className}
            >
              <BentoCard
                name={project.name}
                description={project.description}
                Icon={project.Icon}
                background={project.background}
                href={project.href}
                cta={project.cta}
                className="h-full"
              />
            </motion.div>
          ))}
        </BentoGrid>
      </div>
    </section>
  );
};
