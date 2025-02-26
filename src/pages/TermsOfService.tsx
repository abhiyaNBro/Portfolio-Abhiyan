
import React, { useEffect } from "react";
import { NavBar } from "@/components/ui/tubelight-navbar";
import { Footerdemo } from "@/components/ui/footer-section";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

const TermsOfService = () => {
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
            <h1 className="text-3xl md:text-4xl font-bold mb-6">Terms of Service</h1>
            <div className="prose prose-lg dark:prose-invert">
              <p className="text-lg text-muted-foreground mb-6">
                Last updated: May 1, 2023
              </p>
              
              <h2 className="text-xl font-semibold mb-4">1. Introduction</h2>
              <p className="mb-4">
                These Terms of Service ("Terms") govern your use of Abhiyan Poudel's website, services, and any related content or materials. By accessing or using my services, you agree to be bound by these Terms.
              </p>
              
              <h2 className="text-xl font-semibold mb-4">2. Services</h2>
              <p className="mb-4">
                I provide various digital services including but not limited to web development, AI projects, graphic design, and video editing. The specific details, deliverables, timelines, and fees for each service will be agreed upon in a separate agreement or statement of work.
              </p>
              
              <h2 className="text-xl font-semibold mb-4">3. Client Responsibilities</h2>
              <p className="mb-4">
                As a client, you agree to:
              </p>
              <ul className="list-disc pl-6 mb-4">
                <li>Provide accurate and timely information required for the services</li>
                <li>Review and provide feedback on deliverables within agreed timeframes</li>
                <li>Pay all fees as specified in our agreement</li>
                <li>Obtain any necessary permissions or licenses for materials you provide</li>
              </ul>
              
              <h2 className="text-xl font-semibold mb-4">4. Intellectual Property</h2>
              <p className="mb-4">
                Upon full payment, you will receive the rights to the final deliverables as specified in our agreement. However, I retain the rights to any preliminary concepts, as well as the right to display the work in my portfolio unless otherwise agreed.
              </p>
              
              <h2 className="text-xl font-semibold mb-4">5. Payment Terms</h2>
              <p className="mb-4">
                Payment terms will be specified in our agreement. Generally, I require a deposit before beginning work, with the balance due upon completion. Late payments may incur additional fees.
              </p>
              
              <h2 className="text-xl font-semibold mb-4">6. Limitation of Liability</h2>
              <p className="mb-4">
                I strive to provide high-quality services, but cannot guarantee that my services will be error-free or uninterrupted. My liability is limited to the amount paid for the services.
              </p>
              
              <h2 className="text-xl font-semibold mb-4">7. Termination</h2>
              <p className="mb-4">
                Either party may terminate the service agreement with written notice if the other party breaches these Terms. You will be responsible for payment for work completed prior to termination.
              </p>
              
              <h2 className="text-xl font-semibold mb-4">8. Changes to Terms</h2>
              <p className="mb-4">
                I reserve the right to modify these Terms at any time. Changes will be effective upon posting to my website.
              </p>
              
              <h2 className="text-xl font-semibold mb-4">9. Contact Information</h2>
              <p className="mb-4">
                If you have questions about these Terms, please contact me at: <a href="mailto:contact@abhiyanpoudel.com" className="text-primary hover:underline">contact@abhiyanpoudel.com</a>
              </p>
            </div>
          </motion.div>
        </div>
      </div>
      <Footerdemo />
    </div>
  );
};

export default TermsOfService;
