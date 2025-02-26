
import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";

const educationData = [
  {
    year: "2005 - 2018",
    degree: "Foundational Level",
    school: "L.R.I School",
    description: "Completed foundational education with a strong emphasis on mathematics and science."
  },
  {
    year: "2019 - 2021",
    degree: "Higher Secondary",
    school: "K.M.C College",
    description: "Studied computer science, building a solid understanding of programming and system design."
  },
  {
    year: "2022 - 2026",
    degree: "Undergraduate",
    school: "Tribhuwan University",
    description: "Pursuing a Bachelor's degree in Computer engineering, focusing on advanced programming and system architecture."
  }
  

];

export function EducationSection() {
  return (
    <section id="education" className="min-h-screen py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-t from-primary/5 to-background/5 backdrop-blur-3xl" />
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="flex flex-col items-center mb-12"
        >
          <GraduationCap className="w-12 h-12 mb-4 text-primary" />
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Education Journey</h2>
          <p className="text-muted-foreground text-center max-w-2xl">
            My academic background and qualifications that have shaped my professional journey.
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          {educationData.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
              viewport={{ once: true }}
              className="relative pl-8 pb-12 last:pb-0"
            >
              <div className="absolute left-0 top-0 h-full w-px bg-border">
                <div className="absolute left-0 top-0 -translate-x-1/2 h-4 w-4 rounded-full bg-primary" />
              </div>
              
              <div className="group rounded-lg border p-6 backdrop-blur-sm transition-colors hover:bg-primary/5">
                <time className="text-sm font-medium text-muted-foreground">
                  {edu.year}
                </time>
                <h3 className="mt-2 text-xl font-semibold">{edu.degree}</h3>
                <p className="mt-1 text-primary">{edu.school}</p>
                <p className="mt-4 text-muted-foreground">
                  {edu.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
