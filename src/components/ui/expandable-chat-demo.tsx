
import { useState, FormEvent } from "react";
import { Send, Bot, Paperclip, Mic, CornerDownLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  ChatBubble,
  ChatBubbleAvatar,
  ChatBubbleMessage,
} from "@/components/ui/chat-bubble";
import { ChatInput } from "@/components/ui/chat-input";
import {
  ExpandableChat,
  ExpandableChatHeader,
  ExpandableChatBody,
  ExpandableChatFooter,
} from "@/components/ui/expandable-chat";
import { ChatMessageList } from "@/components/ui/chat-message-list";

export function ExpandableChatDemo() {
  const [messages, setMessages] = useState([
    {
      id: 1,
      content: "Hello! How can I help you today?",
      sender: "ai",
    },
    {
      id: 2,
      content: "I have a question about your portfolio.",
      sender: "user",
    },
    {
      id: 3,
      content: "Sure! I'd be happy to help. What would you like to know about my projects or experience?",
      sender: "ai",
    },
  ]);

  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    setMessages((prev) => [
      ...prev,
      {
        id: prev.length + 1,
        content: input,
        sender: "user",
      },
    ]);
    setInput("");
    setIsLoading(true);

    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          id: prev.length + 1,
          content: getAIResponse(input),
          sender: "ai",
        },
      ]);
      setIsLoading(false);
    }, 1000);
  };

  const getAIResponse = (userInput: string) => {
    const userInputLower = userInput.toLowerCase();
    
    // Personal background
    if (userInputLower.includes("about you") || userInputLower.includes("who are you") || userInputLower.includes("tell me about yourself")) {
      return "I'm Abhiyan Poudel, a computer engineer born in December 2002 from Kathmandu, Nepal. I specialize in AI projects, web development, graphic design, and video editing. I'm passionate about technology and digital creativity, with expertise across multiple digital fields.";
    }

    // Age or birth related
    if (userInputLower.includes("age") || userInputLower.includes("how old") || userInputLower.includes("birth") || userInputLower.includes("born")) {
      return "I was born in December 2002 and I'm currently living in Kathmandu, Nepal.";
    }
    
    // Freelancing
    if (userInputLower.includes("freelance") || userInputLower.includes("fiverr") || userInputLower.includes("upwork")) {
      return "I'm actively freelancing on platforms like Fiverr, Upwork, and Freelancer, offering services in AI video avatars, AI spokesperson videos, AI-powered image generation, and portfolio website development. I'm constantly exploring new gig ideas to grow my freelancing career.";
    }
    
    // AI and machine learning
    if (userInputLower.includes("ai") || userInputLower.includes("artificial intelligence") || userInputLower.includes("machine learning")) {
      return "I specialize in AI projects including AI video avatars, AI spokesperson videos, and AI-powered image generation using tools like Midjourney. My knowledge of machine learning helps me stay ahead in this rapidly evolving field, allowing me to create innovative solutions for clients.";
    }
    
    // Web development
    if (userInputLower.includes("web") || userInputLower.includes("website") || userInputLower.includes("development")) {
      return "I specialize in portfolio website development, helping individuals and businesses establish a strong online presence. I use modern frameworks and technologies to create high-performance, responsive websites tailored to my clients' needs.";
    }
    
    // Mobile app development
    if (userInputLower.includes("app") || userInputLower.includes("mobile") || userInputLower.includes("android") || userInputLower.includes("play store")) {
      return "I'm working on various mobile app ideas, including a grenade lineup app for CS2 to help players improve their in-game strategies. I'm also interested in creating Roblox-related apps. I plan to publish these apps on the Google Play Store soon.";
    }
    
    // CS2 app specific
    if (userInputLower.includes("cs2") || userInputLower.includes("counter strike") || userInputLower.includes("grenade") || userInputLower.includes("lineup")) {
      return "One of my exciting projects is a grenade lineup app for Counter-Strike 2 (CS2), designed to help players improve their in-game strategies by learning optimal grenade placements. This app combines my passion for gaming with my technical expertise.";
    }
    
    // Roblox app related
    if (userInputLower.includes("roblox")) {
      return "I'm interested in creating an app related to Roblox, leveraging the massive gaming community to build something valuable. This project is still in the planning stages as I explore the best ways to serve the Roblox community.";
    }
    
    // Design skills
    if (userInputLower.includes("design") || userInputLower.includes("photoshop") || userInputLower.includes("illustrator") || userInputLower.includes("canva")) {
      return "I'm highly proficient in graphic design tools like Photoshop, Canva, Lightroom, and Illustrator. This allows me to create visually compelling content for various digital platforms, from social media graphics to branding materials.";
    }
    
    // Video editing
    if (userInputLower.includes("video") || userInputLower.includes("editing") || userInputLower.includes("youtube")) {
      return "My video editing skills enable me to craft engaging videos for YouTube, Instagram, and other social media platforms. I help brands and creators capture audience attention through compelling visual storytelling.";
    }
    
    // Education and GRE
    if (userInputLower.includes("education") || userInputLower.includes("study") || userInputLower.includes("gre") || userInputLower.includes("college")) {
      return "I'm a computer engineer with a strong educational background. Currently, I'm preparing for the GRE exam as I continue to push my academic and professional boundaries. I believe in continuous learning and self-improvement.";
    }
    
    // Location and relocation
    if (userInputLower.includes("nepal") || userInputLower.includes("kathmandu") || userInputLower.includes("location") || userInputLower.includes("where")) {
      return "I'm currently based in Kathmandu, Nepal. However, I have a global mindset and am always open to ideas and opportunities beyond Nepal. Technology allows me to work with clients worldwide.";
    }
    
    // Entrepreneurship and future plans
    if (userInputLower.includes("future") || userInputLower.includes("plan") || userInputLower.includes("goal") || userInputLower.includes("entrepreneur")) {
      return "My entrepreneurial spirit drives me to explore new digital ventures. Looking ahead, I plan to publish my apps on the Play Store and expand my expertise in AI, web development, and digital content creation. My goal is to make meaningful contributions in these fields and build a lasting impact in the digital space.";
    }
    
    // Gaming interests
    if (userInputLower.includes("game") || userInputLower.includes("gaming") || userInputLower.includes("play")) {
      return "I have a love for gaming which fuels my motivation to work on game-related projects. This passion allows me to blend my technical expertise with my personal interests, creating solutions that gamers can appreciate.";
    }
    
    // Skills overview
    if (userInputLower.includes("skill") || userInputLower.includes("expertise") || userInputLower.includes("what can you do")) {
      return "My expertise spans multiple fields including AI projects, web development, graphic design (Photoshop, Canva, Lightroom, Illustrator), video editing, mobile app development, and AI-powered image generation. I'm also knowledgeable in machine learning and stay updated with the latest technological advancements.";
    }
    
    // Problem-solving approach
    if (userInputLower.includes("problem") || userInputLower.includes("solution") || userInputLower.includes("approach")) {
      return "Being tech-savvy, I enjoy problem-solving and finding innovative solutions through technology. Whether it's a complex AI project, a well-optimized website, or a stunning graphic design, I focus on delivering high-quality work that meets industry standards.";
    }
    
    // Learning methods
    if (userInputLower.includes("learn") || userInputLower.includes("study") || userInputLower.includes("improve")) {
      return "As a self-learner, I believe in continuous growth, honing my skills through self-study, hands-on projects, and real-world applications. I'm constantly exploring new technologies and techniques to stay at the forefront of digital innovation.";
    }
    
    // Media and entertainment interests
    if (userInputLower.includes("media") || userInputLower.includes("entertainment") || userInputLower.includes("series") || userInputLower.includes("shows")) {
      return "My interest in web series keeps me engaged with storytelling and content trends, further enhancing my ability to create compelling digital media. This helps me understand what resonates with audiences across different platforms.";
    }
    
    // Social media expertise
    if (userInputLower.includes("social media") || userInputLower.includes("instagram") || userInputLower.includes("facebook") || userInputLower.includes("twitter")) {
      return "I understand social media engagement strategies, ensuring that my work aligns with the latest trends for maximum impact. This knowledge is crucial for creating content that performs well across different platforms.";
    }
    
    // Work ethic and quality
    if (userInputLower.includes("quality") || userInputLower.includes("work ethic") || userInputLower.includes("standard")) {
      return "I'm a detail-oriented professional, ensuring precision and excellence in everything I do. My work reflects innovation, quality, and efficiency, helping me stand out in the competitive freelancing market. I'm goal-oriented and committed to delivering value in all my projects.";
    }
    
    // Project related responses (similar to before)
    if (userInputLower.includes("project") || userInputLower.includes("work") || userInputLower.includes("portfolio")) {
      return "My projects span multiple domains including web development, mobile apps, AI solutions, and creative design work. I've developed applications for the Google Play Store, created websites for clients, and worked on AI-powered tools. You can explore them in detail in the Projects section of my portfolio!";
    }
    
    // Contact information
    if (userInputLower.includes("contact") || userInputLower.includes("hire") || userInputLower.includes("email")) {
      return "You can contact me through the contact form on my website or directly at abhiyanpoudel360@gmail.com. I'm always open to new opportunities in freelancing, collaboration, or full-time roles!";
    }
    
    // Greeting responses
    if (userInputLower.includes("hello") || userInputLower.includes("hi") || userInputLower.includes("hey") || userInputLower.includes("greetings")) {
      return "Hello! I'm Abhiyan Poudel, a computer engineer from Nepal specializing in AI, web development, and digital creativity. How can I help you today?";
    }
    
    // Thank you responses
    if (userInputLower.includes("thank") || userInputLower.includes("thanks") || userInputLower.includes("appreciate")) {
      return "You're welcome! I'm glad I could help. Is there anything else you'd like to know about my work, skills, or experience?";
    }
    
    // Default response
    return "Thank you for your message! I'm Abhiyan Poudel, a computer engineer from Nepal with expertise in AI projects, web development, graphic design, and video editing. I'd be happy to share more about my skills, experience, or how we might work together. Is there something specific you'd like to know?";
  };

  const handleAttachFile = () => {
    // File attachment functionality would go here
  };

  const handleMicrophoneClick = () => {
    // Voice input functionality would go here
  };

  return (
    <ExpandableChat
      size="lg"
      position="bottom-right"
      icon={<Bot className="h-6 w-6" />}
    >
      <ExpandableChatHeader className="flex-col text-center justify-center">
        <h1 className="text-xl font-semibold">Chat with Abhiyan ✨</h1>
        <p className="text-sm text-muted-foreground">
          Ask me anything about my projects or experience
        </p>
      </ExpandableChatHeader>

      <ExpandableChatBody>
        <ChatMessageList>
          {messages.map((message) => (
            <ChatBubble
              key={message.id}
              variant={message.sender === "user" ? "sent" : "received"}
            >
              <ChatBubbleAvatar
                className="h-8 w-8 shrink-0"
                src={
                  message.sender === "user"
                    ? "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=64&h=64&q=80&crop=faces&fit=crop"
                    : "/profile.jpg"
                }
                fallback={message.sender === "user" ? "YOU" : "AI"}
              />
              <ChatBubbleMessage className={message.sender === "user" ? "text-primary-foreground" : "text-white"}>
                {message.content}
              </ChatBubbleMessage>
            </ChatBubble>
          ))}

          {isLoading && (
            <ChatBubble variant="received">
              <ChatBubbleAvatar
                className="h-8 w-8 shrink-0"
                src="/profile.jpg"
                fallback="AI"
              />
              <ChatBubbleMessage isLoading />
            </ChatBubble>
          )}
        </ChatMessageList>
      </ExpandableChatBody>

      <ExpandableChatFooter>
        <form
          onSubmit={handleSubmit}
          className="flex items-center gap-2 w-full"
        >
          <Button type="button" variant="ghost" onClick={handleAttachFile}>
            <Paperclip className="h-5 w-5" />
          </Button>
          <Button type="button" variant="ghost" onClick={handleMicrophoneClick}>
            <Mic className="h-5 w-5" />
          </Button>
          <ChatInput
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type your message..."
            className="flex-1 text-foreground"
          />
          <Button type="submit" disabled={isLoading}>
            <Send className="h-5 w-5" />
          </Button>
        </form>
      </ExpandableChatFooter>
    </ExpandableChat>
  );
}
