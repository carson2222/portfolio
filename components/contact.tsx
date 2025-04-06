"use client";

import type React from "react";

import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Twitter, Mail, Send } from "lucide-react";
import Image from "next/image";
import { toast } from "sonner";

export default function Contact() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Make a real API call
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formState),
      });

      if (!response.ok) {
        throw new Error("Failed to send message");
      }

      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormState({ name: "", email: "", message: "" });

      // Reset success message after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    } catch (error) {
      toast("Something went wrong. Please try again.");
      console.error(error);
      setIsSubmitting(false);
    }
  };

  const socialLinks = [
    { name: "GitHub", icon: <Github className="h-5 w-5" />, url: "https://github.com/carson2222" },
    {
      name: "LinkedIn",
      icon: <Linkedin className="h-5 w-5" />,
      url: "https://www.linkedin.com/in/carson-ts-830479321/",
    },
    { name: "Twitter", icon: <Twitter className="h-5 w-5" />, url: "https://x.com/carson3068" },
    { name: "Email", icon: <Mail className="h-5 w-5" />, url: "mailto:example@example.com" },
  ];

  return (
    <section id="contact" className="py-20 px-4 md:px-8 lg:px-16 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, laudantium?
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Card className="bg-card/50 backdrop-blur-sm border border-border/50 h-full">
              <CardContent className="pt-6">
                <h3 className="text-2xl font-semibold mb-6">Contact Form</h3>
                {isSubmitted ? (
                  <div className="bg-primary/10 text-primary p-4 rounded-md mb-4 flex items-center">
                    <Send className="h-5 w-5 mr-2" />
                    <span>Thank you for your message! I&apos;ll get back to you soon.</span>
                  </div>
                ) : null}
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <Input
                      name="name"
                      placeholder="Your Name"
                      value={formState.name}
                      onChange={handleChange}
                      required
                      className="bg-background/50 border-border/50 focus-visible:ring-primary"
                    />
                  </div>
                  <div>
                    <Input
                      name="email"
                      type="email"
                      placeholder="Your Email"
                      value={formState.email}
                      onChange={handleChange}
                      required
                      className="bg-background/50 border-border/50 focus-visible:ring-primary"
                    />
                  </div>
                  <div>
                    <Textarea
                      name="message"
                      placeholder="Your Message"
                      value={formState.message}
                      onChange={handleChange}
                      required
                      className="min-h-[150px] bg-background/50 border-border/50 focus-visible:ring-primary"
                    />
                  </div>
                  <Button
                    type="submit"
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <span className="flex items-center">
                        <svg
                          className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          ></circle>
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          ></path>
                        </svg>
                        Sending...
                      </span>
                    ) : (
                      <span className="flex items-center">
                        <Send className="h-4 w-4 mr-2" />
                        Send Message
                      </span>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <Card className="bg-card/50 backdrop-blur-sm border border-border/50 h-full">
              <CardContent className="pt-6 relative">
                <Image
                  src={"/pokemons/pikachu.png"}
                  alt="Pikachu"
                  width={100}
                  height={100}
                  className="absolute md:-top-18 md:-right-12 md:rotate-12 rotate-[170deg] -bottom-20 -right-2 md:scale-100 scale-[90%]"
                />
                <h3 className="text-2xl font-semibold mb-6">Connect With Me</h3>
                <p className="text-muted-foreground mb-8">
                  Feel free to connect with me on social media or send me an email. I&apos;m always open to
                  discussing new projects, creative ideas, or opportunities to be part of your vision.
                </p>
                <div className="space-y-4">
                  {socialLinks.map((link, index) => (
                    <motion.a
                      key={link.name}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center p-3 rounded-md hover:bg-primary/10 transition-colors"
                      whileHover={{ x: 5 }}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.6 + index * 0.1 }}
                    >
                      <div className="bg-primary/10 p-2 rounded-full mr-3">{link.icon}</div>
                      <span>{link.name}</span>
                    </motion.a>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
      <footer className="mt-20 text-center text-muted-foreground text-sm">
        <p>&copy; {new Date().getFullYear()} Carson. All rights reserved.</p>
      </footer>
    </section>
  );
}
