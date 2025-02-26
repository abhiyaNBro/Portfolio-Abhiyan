
// Project data
const projectsData = [
  {
    id: "project-one",
    name: "Mobile Apps on Google Play",
    description: "A collection of my published Android applications.",
    fullDescription: "I have developed and published several mobile applications on the Google Play Store, focusing on utility and educational purposes. These apps are built using modern mobile development frameworks and demonstrate my ability to create user-friendly, performant applications for the Android platform.",
    technologies: ["React Native", "Java", "Kotlin", "Firebase", "Google Play Services"],
    features: [
      { title: "Marriage Point Calculator", description: "A calculator app for game of card.", date: "Published 2024" },
      { title: "CS2 Nades", description: "Utility app for Counter-Strike 2 players", date: "Published 2024" },
      { title: "GRE Flashcards", description: "Educational app for GRE preparation", date: "Published 2024" },
    ],
    image: "/adddev.jpg",
    mobileApps: [
      {
        name: "Marriage Point Calculator",
        description: "A calculator app for game of card.",
        url: "https://play.google.com/store/apps/details?id=com.abhiyanpoudel.mcgc",
        icon: "/mgpc.png",
        stats: {
          downloads: "500+",
          rating: "4.7",
          reviews: "7+"
        }
      },
      {
        name: "CS2 Nades",
        description: "Utility app for Counter-Strike 2 players to learn grenade spots and strategies.",
        url: "https://play.google.com/store/apps/details?id=com.abhiyanpoudel.cs2_nade",
        icon: "/cs.png",
        stats: {
          downloads: "1,000+",
          rating: "4.8",
          reviews: "20+"
        }
      },
      {
        name: "GRE Flashcards",
        description: "An educational app with flashcards to help with GRE vocabulary preparation.",
        url: "https://play.google.com/store/apps/details?id=com.abhiyanpoudel.gre_flashcards",
        icon: "/gre.jpg",
        stats: {
          downloads: "10+",
          rating: "4.7",
          reviews: "1+"
        }
      }
    ],
    githubUrl: "https://github.com/abhiyaNBro",
  },
  {
    id: "project-two",
    name: "Graphic Designing",
    description: "Showcase of my Photoshop designs and thumbnails.",
    fullDescription: "This project showcases my graphic design skills and creativity using various design tools like Photoshop. The portfolio includes a variety of design works from digital illustrations to thumbnails and demonstrates my eye for aesthetics and attention to detail.",
    technologies: ["Photoshop", "Illustrator", "Figma", "UI/UX Design"],
    features: [
      { title: "YouTube Thumbnails", description: "Eye-catching thumbnails for video content", date: "Various dates" },
      { title: "Social Media Graphics", description: "Engaging visuals for social platforms", date: "Various dates" },
      { title: "Logo Designs", description: "Brand identity designs", date: "Various dates" }
    ],
    slideshow: true, // Flag to show slideshow instead of static image
    images: [
      "/mainx.png",
      "/nike.jpg",
      "/reel.jpg",
      "/untitled-2.jpg",
      "/untitled-3.jpg"
      
    ],
    designWorks: [
      {
        title: "YouTube Thumbnails",
        items: [
          {
            name: "Gaming Channel",
            description: "Vibrant thumbnails for gaming content",
            image: "https://images.unsplash.com/photo-1560419015-7c427e8ae5ba?q=80&w=2070&auto=format&fit=crop"
          },
          {
            name: "Tech Reviews",
            description: "Clean, modern thumbnails for tech channel",
            image: "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?q=80&w=2070&auto=format&fit=crop"
          },
          {
            name: "Tutorial Series",
            description: "Informative thumbnails for educational content",
            image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?q=80&w=2074&auto=format&fit=crop"
          }
        ]
      },
      {
        title: "Social Media Graphics",
        items: [
          {
            name: "Instagram Posts",
            description: "Engaging visuals for social media campaigns",
            image: "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?q=80&w=2074&auto=format&fit=crop"
          },
          {
            name: "Facebook Banners",
            description: "Professional banners for business pages",
            image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?q=80&w=2071&auto=format&fit=crop"
          }
        ]
      },
      {
        title: "Brand Identity",
        items: [
          {
            name: "Logo Designs",
            description: "Distinctive logos for various businesses",
            image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=2000&auto=format&fit=crop"
          },
        
        ]
      }
    ],
    testimonials: true,
    liveUrl: "https://www.upwork.com/freelancers/~015454379d00ceae11",
    githubUrl: "https://github.com/abhiyaNBro",
  },
  {
    id: "project-three",
    name: "GitHub Repositories",
    description: "Collection of my open source projects and contributions.",
    fullDescription: "This is a showcase of various projects hosted on my GitHub profile. These projects span different technologies and demonstrate my versatility as a developer. From utility scripts to more complex applications, this collection highlights my programming skills across different domains.",
    technologies: ["JavaScript", "Python", "React", "Node.js", "Express", "MongoDB"],
    features: [
      { title: "Web Applications", description: "Full-stack and frontend applications", date: "Various dates" },
      { title: "Utility Projects", description: "Helper tools and scripts", date: "Various dates" },
      { title: "Mobile Development", description: "Android application projects", date: "Various dates" }
    ],
    repos: [
      { 
        name: "ChurnIT - Customer Churn Prediction", 
        description: "A mining concentration calculator for Android. It can calculate and store metal concentration formula calculations.", 
        url: "https://github.com/abhiyaNBro/ChurnIT",
        stats: {
          stars: 5,
          forks: 2,
          watchers: 3
        }
      },
      { 
        name: "Marriage-CardGame-Calculator", 
        description: "Application for learning Counter-Strike 2 grenade lineups and strategies", 
        url: "https://github.com/abhiyaNBro/Marriage-CardGame-Calculator",
        stats: {
          stars: 12,
          forks: 3,
          watchers: 5
        }
      },
      { 
        name: "Amazon-Clone-Frontend", 
        description: "Android kernel source code for OnePlus 8 series devices", 
        url: "https://github.com/abhiyaNBro/Amazon-Clone-Frontend",
        stats: {
          stars: 8,
          forks: 1,
          watchers: 2
        }
      },
      { 
        name: "To-Do-List", 
        description: "Flashcard application for GRE vocabulary preparation", 
        url: "https://github.com/abhiyaNBro/To-Do-List",
        stats: {
          stars: 3,
          forks: 0,
          watchers: 1
        }
      },
      { 
        name: "Tic-Tac-Toe", 
        description: "Personal portfolio website built with React and Tailwind CSS", 
        url: "https://github.com/abhiyaNBro/Tic-Tac-Toe",
        stats: {
          stars: 7,
          forks: 2,
          watchers: 4
        }
      },
      { 
        name: "SimonGame", 
        description: "Mobile app for wildcat crypto token investigation and analysis", 
        url: "https://github.com/abhiyaNBro/SimonGame",
        stats: {
          stars: 6,
          forks: 1,
          watchers: 3
        }
      },
      { 
        name: "FlashCard", 
        description: "Collection of various Python scripts and small applications", 
        url: "https://github.com/abhiyaNBro/FlashCard",
        stats: {
          stars: 4,
          forks: 1,
          watchers: 2
        }
      },
      { 
        name: "DrumKit", 
        description: "Blog site built with Next.js and MDX for content management", 
        url: "https://github.com/abhiyaNBro/DrumKit",
        stats: {
          stars: 5,
          forks: 1,
          watchers: 2
        }
      }
    ],
    image: "https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?q=80&w=2088&auto=format&fit=crop",
    liveUrl: "https://github.com/abhiyaNBro",
  },
  {
    id: "project-four",
    name: "Web Development Portfolio",
    description: "Showcase of websites and web applications I've built.",
    fullDescription: "This portfolio showcases the websites and web applications I've developed throughout my career. These projects demonstrate my proficiency in front-end and back-end web technologies, responsive design principles, and user experience design.",
    technologies: ["HTML/CSS", "JavaScript", "React", "Next.js", "Node.js", "WordPress"],
    features: [
      { title: "E-commerce Platforms", description: "Online stores with payment integration", date: "Various dates" },
      { title: "Business Websites", description: "Professional websites for various businesses", date: "Various dates" },
      { title: "Web Applications", description: "Interactive web apps with complex functionality", date: "Various dates" }
    ],
    websites: [
      { 
        name: "Portfolio Website", 
        description: "A personal portfolio website showcasing skills and projects", 
       
        image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?q=80&w=2072&auto=format&fit=crop",
        features: [
          "Responsive design for all devices",
          "Dynamic project showcase",
          "Interactive UI elements",
          "Contact form integration"
        ]
      },
      { 
        name: "SaaS Website", 
        description: "A software-as-a-service platform with user accounts and subscription management", 
        
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
        features: [
          "User authentication system",
          "Subscription management",
          "Payment processing integration",
          "Dashboard with analytics"
        ]
      },
    ],
    image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?q=80&w=2069&auto=format&fit=crop",
    liveUrl: "https://abhiyanbro.github.io/Portfolio/",
  }
];

export default projectsData;
