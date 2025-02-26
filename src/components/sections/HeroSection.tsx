
import { motion } from "framer-motion";
import { Button as DefaultButton } from "@/components/ui/button";
import { Button as MovingBorderButton } from "@/components/ui/moving-border";
import { ArrowDown } from "lucide-react";
import { useEffect, useMemo, useState } from "react";

const wordVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  }
};

export function HeroSection() {
  const [titleNumber, setTitleNumber] = useState(0);
  const titles = useMemo(
    () => ["Developer", "Designer", "Creator", "Innovator", "Problem Solver"],
    []
  );

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (titleNumber === titles.length - 1) {
        setTitleNumber(0);
      } else {
        setTitleNumber(titleNumber + 1);
      }
    }, 2000);
    return () => clearTimeout(timeoutId);
  }, [titleNumber, titles]);

  return (
    <section className="min-h-screen flex items-center justify-center">
      <div className="container mx-auto px-4 py-20 relative z-10">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center text-center gap-8"
        >
          <MovingBorderButton
            borderRadius="100%"
            className="bg-background dark:bg-slate-900 border-none p-0"
            containerClassName="w-56 h-56"
            as="div"
          >
            <img
              src="/profile-2.png"
              alt="Abhiyan Poudel"
              className="w-full h-full object-cover rounded-full"
            />
          </MovingBorderButton>
          
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.1
                }
              }
            }}
            className="text-center"
          >
            <motion.h1
              variants={wordVariants}
              className="text-4xl md:text-6xl font-bold tracking-tight mb-2 text-black dark:text-white"
            >
              Abhiyan Poudel
            </motion.h1>
            
            <div className="h-12 mb-4 overflow-hidden relative">
              {titles.map((title, index) => (
                <motion.span
                  key={index}
                  className="absolute left-0 right-0 text-xl md:text-2xl text-primary font-semibold"
                  initial={{ opacity: 0, y: "100%" }}
                  animate={
                    titleNumber === index
                      ? { opacity: 1, y: 0 }
                      : { opacity: 0, y: titleNumber > index ? "-100%" : "100%" }
                  }
                  transition={{ 
                    type: "spring", 
                    stiffness: 100,
                    damping: 20
                  }}
                >
                  {title}
                </motion.span>
              ))}
            </div>
            
            <motion.p
              variants={wordVariants}
              className="text-lg md:text-xl text-muted-foreground max-w-2xl mt-4 mx-auto"
            >
              A passionate developer crafting high-performance web apps, AI solutions, mobile apps, and engaging visuals. Skilled in modern web technologies, UI/UX design, video editing, and freelancing.
            </motion.p>
          </motion.div>
          
          <motion.div
            variants={wordVariants}
            initial="hidden"
            animate="visible"
          >
            <MovingBorderButton
              className="bg-background dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800"
              onClick={() => {
                document.getElementById('education')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Explore More
              <ArrowDown className="ml-2 h-4 w-4 transition-transform group-hover:translate-y-1" />
            </MovingBorderButton>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
