
import React, { useEffect } from "react";
import { NavBar } from "@/components/ui/tubelight-navbar";
import { Footerdemo } from "@/components/ui/footer-section";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

const PrivacyPolicy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-transparent min-h-screen">
      <NavBar />
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-3xl mx-auto">
          <Link to="/" className="inline-block mb-8">
            <Button variant="ghost" className="gap-2">
              <ArrowLeft className="h-4 w-4" />
              Back to Home
            </Button>
          </Link>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-3xl md:text-4xl font-bold mb-6">Privacy Policy</h1>
            <div className="prose prose-lg dark:prose-invert">
              <p className="text-lg text-muted-foreground mb-6">
                Last updated: May 1, 2023
              </p>
              
              <h2 className="text-xl font-semibold mb-4">Introduction</h2>
              <p className="mb-4">
                This Privacy Policy describes how Abhiyan Poudel ("I", "me", or "my") collects, uses, and shares your information when you use my website, services, or interact with me through various channels.
              </p>
              
              <h2 className="text-xl font-semibold mb-4">Information Collection</h2>
              <p className="mb-4">
                I collect information you provide directly, such as:
              </p>
              <ul className="list-disc pl-6 mb-4">
                <li>Contact information (name, email, phone number)</li>
                <li>Communication history</li>
                <li>Project requirements and feedback</li>
                <li>Payment information for services rendered</li>
              </ul>
              
              <h2 className="text-xl font-semibold mb-4">Use of Information</h2>
              <p className="mb-4">
                I use collected information to:
              </p>
              <ul className="list-disc pl-6 mb-4">
                <li>Provide and improve my services</li>
                <li>Communicate with you about projects</li>
                <li>Send updates about my work when relevant</li>
                <li>Process payments</li>
                <li>Comply with legal obligations</li>
              </ul>
              
              <h2 className="text-xl font-semibold mb-4">Information Sharing</h2>
              <p className="mb-4">
                I do not sell your personal information. I may share information with:
              </p>
              <ul className="list-disc pl-6 mb-4">
                <li>Service providers who help deliver my services</li>
                <li>Legal authorities when required by law</li>
                <li>With your consent for portfolio or testimonial purposes</li>
              </ul>
              
              <h2 className="text-xl font-semibold mb-4">Data Security</h2>
              <p className="mb-4">
                I implement reasonable security measures to protect your information. However, no method of transmission over the Internet or electronic storage is 100% secure.
              </p>
              
              <h2 className="text-xl font-semibold mb-4">Your Rights</h2>
              <p className="mb-4">
                Depending on your location, you may have rights regarding your personal information, including:
              </p>
              <ul className="list-disc pl-6 mb-4">
                <li>Access to your data</li>
                <li>Correction of inaccurate data</li>
                <li>Deletion of your data</li>
                <li>Restriction of processing</li>
                <li>Data portability</li>
              </ul>
              
              <h2 className="text-xl font-semibold mb-4">Changes to This Policy</h2>
              <p className="mb-4">
                I may update this Privacy Policy occasionally. The updated version will be indicated by an updated "Last Updated" date.
              </p>
              
              <h2 className="text-xl font-semibold mb-4">Contact Me</h2>
              <p className="mb-4">
                If you have questions about this Privacy Policy, please contact me at: <a href="mailto:contact@abhiyanpoudel.com" className="text-primary hover:underline">contact@abhiyanpoudel.com</a>
              </p>
            </div>
          </motion.div>
        </div>
      </div>
      <Footerdemo />
    </div>
  );
};

export default PrivacyPolicy;
