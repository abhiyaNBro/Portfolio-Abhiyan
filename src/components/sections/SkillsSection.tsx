import { motion } from "framer-motion";
import { Code2, Database, Palette, Video, Smartphone, Brain } from "lucide-react";
import { Timeline } from "@/components/ui/timeline";

const skillsData = [
  {
    title: "Web Development",
    content: (
      <div className="space-y-4">
        <div className="flex items-center gap-4 md:flex-row-reverse md:justify-end">
          <Code2 className="w-8 h-8 text-primary" />
          <div className="md:text-right">
            <h4 className="text-lg font-semibold">Frontend & Backend Development</h4>
            <p className="text-muted-foreground">
              Building high-performance web applications with modern frameworks.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
          {["React", "Next.js", "TypeScript", "TailwindCSS", "Node.js", "Express", "MongoDB", "PostgreSQL", "Docker"].map((skill) => (
            <span
              key={skill}
              className="px-3 py-1 text-sm rounded-full bg-primary/10 text-primary text-center"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    ),
  },
  {
    title: "AI & Machine Learning",
    content: (
      <div className="space-y-4">
        <div className="flex items-center gap-4">
          <Brain className="w-8 h-8 text-primary" />
          <div>
            <h4 className="text-lg font-semibold">AI & ML Solutions</h4>
            <p className="text-muted-foreground">
              Implementing AI-driven automation, chatbots, and AI avatars.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
          {["Python", "TensorFlow", "OpenAI API", "AI", "Chatbots", "Automations"].map((skill) => (
            <span
              key={skill}
              className="px-3 py-1 text-sm rounded-full bg-primary/10 text-primary text-center"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    ),
  },
  {
    title: "Graphic Design",
    content: (
      <div className="space-y-4">
        <div className="flex items-center gap-4 md:flex-row-reverse md:justify-end">
          <Palette className="w-8 h-8 text-primary" />
          <div className="md:text-right">
            <h4 className="text-lg font-semibold">Visual & UI Design</h4>
            <p className="text-muted-foreground">
              Crafting intuitive and visually appealing graphics.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
          {["Photoshop", "Illustrator", "Canva", "Figma", "Adobe XD", "Lightroom"].map((skill) => (
            <span
              key={skill}
              className="px-3 py-1 text-sm rounded-full bg-primary/10 text-primary text-center"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    ),
  },
  {
    title: "Video Editing",
    content: (
      <div className="space-y-4">
        <div className="flex items-center gap-4">
          <Video className="w-8 h-8 text-primary" />
          <div>
            <h4 className="text-lg font-semibold">Video Production</h4>
            <p className="text-muted-foreground">
              Creating engaging and high-quality visual content for digital platforms.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
          {["Premiere Pro", "After Effects", "DaVinci Resolve", "AI Video Avatars", "Motion Graphics", "Storyboarding"].map((skill) => (
            <span
              key={skill}
              className="px-3 py-1 text-sm rounded-full bg-primary/10 text-primary text-center"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    ),
  },
  {
    title: "App Development",
    content: (
      <div className="space-y-4">
        <div className="flex items-center gap-4 md:flex-row-reverse md:justify-end">
          <Smartphone className="w-8 h-8 text-primary" />
          <div className="md:text-right">
            <h4 className="text-lg font-semibold">Mobile & Web Apps</h4>
            <p className="text-muted-foreground">
              Developing cross-platform applications and Play Store publishing.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
          {["Flutter", "React Native", "Android", "iOS", "Firebase", "Play Store Publishing"].map((skill) => (
            <span
              key={skill}
              className="px-3 py-1 text-sm rounded-full bg-primary/10 text-primary text-center"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    ),
  },
  {
    title: "Freelancing",
    content: (
      <div className="space-y-4">
        <div className="flex items-center gap-4">
          <Brain className="w-8 h-8 text-primary" />
          <div>
            <h4 className="text-lg font-semibold">Freelancing & Online Business</h4>
            <p className="text-muted-foreground">
              Providing professional services on Fiverr, Upwork, and Freelancer.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
          {["Fiverr", "Upwork", "Freelancer", "SEO Optimization", "Digital Marketing", "Client Management"].map((skill) => (
            <span
              key={skill}
              className="px-3 py-1 text-sm rounded-full bg-primary/10 text-primary text-center"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    ),
  },
];

export function SkillsSection() {
  return (
    <section id="skills" className="relative">
      <Timeline 
        data={skillsData} 
        title="Skills & Expertise"
        description="A comprehensive overview of my technical skills and areas of expertise."
      />
    </section>
  );
}