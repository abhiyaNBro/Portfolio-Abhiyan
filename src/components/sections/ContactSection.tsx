
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Send, Mail, Phone, MapPin, Instagram, Youtube, Github, Gamepad2, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function ContactSection() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // This would be replaced with actual email sending logic
      // For example, using a service like EmailJS, Formspree, or your own backend
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "f09fc55b-85f2-4ba8-9bff-03fb99c6f007",
          name,
          email,
          message,
          subject: "New contact form submission",
          from_name: "Portfolio Contact Form",
          to_email: "abhiyanpoudel360@gmail.com",
        }),
      });
      
      const data = await response.json();
      
      if (data.success) {
        // Show success toast
        toast({
          title: "Message sent!",
          description: "I'll get back to you as soon as possible.",
          duration: 5000,
        });

        // Reset form
        setName("");
        setEmail("");
        setMessage("");
      } else {
        throw new Error("Form submission failed");
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive",
        duration: 5000,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-16 bg-muted/30">
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center mb-12"
        >
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Get In Touch</h2>
          <p className="mt-4 text-muted-foreground">
            I'm always open to discussing new projects, opportunities, or partnerships.
          </p>
        </motion.div>

        <div className="grid gap-10 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="rounded-lg border bg-card p-8">
              <h3 className="text-2xl font-bold mb-6">Send Me a Message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <Input 
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Your name"
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input 
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Your email address"
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <textarea
                    id="message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Your message"
                    className="flex min-h-[120px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    required
                  />
                </div>
                
                <Button type="submit" className="w-full" disabled={isSubmitting}>
                  {isSubmitting ? (
                    <>Sending...</>
                  ) : (
                    <>
                      Send Message
                      <Send className="ml-2 h-4 w-4" />
                    </>
                  )}
                </Button>
              </form>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="rounded-lg border bg-card p-8 h-full flex flex-col justify-between">
              <div>
                <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
                <p className="text-muted-foreground mb-8">
                  Feel free to reach out to me through any of these channels. I'll get back to you as soon as possible.
                </p>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <Mail className="mr-3 h-6 w-6 text-muted-foreground" />
                    <div>
                      <h4 className="font-medium">Email</h4>
                      <p className="text-muted-foreground">abhiyanpoudel360@gmail.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Phone className="mr-3 h-6 w-6 text-muted-foreground" />
                    <div>
                      <h4 className="font-medium">Phone</h4>
                      <p className="text-muted-foreground">+977 9864476157</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <MapPin className="mr-3 h-6 w-6 text-muted-foreground" />
                    <div>
                      <h4 className="font-medium">Location</h4>
                      <p className="text-muted-foreground">Kathmandu, Nepal</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <h4 className="font-medium mb-3">Social Media</h4>
                <div className="flex space-x-4">
                  <Button variant="outline" size="icon" className="rounded-full" asChild>
                    <a href="https://www.instagram.com/abhiyan_bro/" target="_blank" rel="noopener noreferrer">
                      <Instagram className="h-4 w-4" />
                      <span className="sr-only">Instagram</span>
                    </a>
                  </Button>
                  <Button variant="outline" size="icon" className="rounded-full" asChild>
                    <a href="https://steamcommunity.com/id/abhiyaNBro/" target="_blank" rel="noopener noreferrer">
                      <Gamepad2 className="h-4 w-4" />
                      <span className="sr-only">Steam</span>
                    </a>
                  </Button>
                  <Button variant="outline" size="icon" className="rounded-full" asChild>
                    <a href="https://www.youtube.com/channel/UCjyv2LNoAu1TEszxhlLwAAw" target="_blank" rel="noopener noreferrer">
                      <Youtube className="h-4 w-4" />
                      <span className="sr-only">YouTube</span>
                    </a>
                  </Button>
                  <Button variant="outline" size="icon" className="rounded-full" asChild>
                    <a href="https://discordapp.com/users/299412707520675842" target="_blank" rel="noopener noreferrer">
                      <MessageSquare className="h-4 w-4" />
                      <span className="sr-only">Discord</span>
                    </a>
                  </Button>
                  <Button variant="outline" size="icon" className="rounded-full" asChild>
                    <a href="https://github.com/abhiyaNBro" target="_blank" rel="noopener noreferrer">
                      <Github className="h-4 w-4" />
                      <span className="sr-only">GitHub</span>
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
