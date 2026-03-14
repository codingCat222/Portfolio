import img1 from "./assets/images/project1.jpg";
// import imgc from "./assets/images/profile.jpg";
import img2 from "./assets/images/project2.jpg";

export const portfolioData = {
  name: "John Samuel",
  title: "Full Stack Developer",
  tagline: "I craft fast, accessible, and beautifully designed web experiences.",
  about:
    `I am a Software Engineering student and Fullstack De
    veloper with a strong focus on building scalable web applications. I specialize in modern technologies 
    such as React.js for frontend development and Node.js 
    for backend systems. I enjoy creating efficient, 
    user-friendly solutions and continuously improving my 
    skills by working on real-world projects and learning new
     technologies.
 `,
  aboutExtra:
    "Outside of coding, I enjoy contributing to open source, writing technical articles, and exploring the intersection of design and engineering.",

  // Social links — replace with your real URLs
  github: "https://github.com/codingCat222",
  twitter: "https://twitter.com/jaytech@09",
  linkedin: "https://linkedin.com/in/jaysam@98",
  email: "tobisamuel2024@gmail.com",

  // Stats shown in About section
  stats: [
    { number: "15+", label: "Projects Built" },
    { number: "2+", label: "Years Experience" },
    { number: "8+", label: "Happy Clients" },
    { number: "100%", label: "Dedication" },
  ],

  // Skills with percentage levels
  skills: [
    { name: "React / Next.js", level: 90, icon: "fa-brands fa-react" },
    { name: "JavaScript / TypeScript", level: 85, icon: "fa-brands fa-js" },
    { name: "Node.js", level: 75, icon: "fa-brands fa-node-js" },
    { name: "CSS / Bootstrap", level: 88, icon: "fa-brands fa-css3-alt" },
    { name: "Python", level: 70, icon: "fa-brands fa-python" },
    { name: "Git & GitHub", level: 82, icon: "fa-brands fa-git-alt" },
  ],

  // Projects — add a screenshot image to src/assets/images/ and reference it here
  projects: [
    {
      title: "E-Commerce Multi-Tenant Platform",
      description:`

CartifyMarket    is a full-stack **social media marketplace** that connects buyers and sellers in an interactive e-commerce environment. Buyers can discover products through **short reels posted by sellers**, chat directly with them, and complete purchases securely. The platform also includes an **AI assistant** that helps users navigate the site and resolve issues.

The system supports **secure payments via Paystack** and **user verification through Dojah** to improve trust and security. It was built using **React.js, Node.js, MongoDB, Cloudinary, and Google Cloud**, creating a scalable and modern marketplace experience.
`,
      tech: ["React", "Node.js", "MongoDB", "Stripe"],
      github: "https://github.com/codingCat222/cartifys",
      live: "https://cartify-oous.vercel.app",
      screenshot: img1,
      accentColor: "#FF6B6B",
    },
    {
      title:"Hotel Management System",
      description:`A Hotel Management System built with JavaScript 
      that streamlines hotel operations such as room booking,
       customer management, and reservation tracking. The system 
       integrates Firebase and Google Cloud Authentication for secure 
       user login and access control, while MongoDB is used for efficient
        data storage and management. It is designed to provide a reliable
        , scalable, and user-friendly platform for managing hotel services
         and customer information.
`,
      tech: ["Javascript", "Firebase", "Bootstrap", "MongoDB"],
      github: "https://github.com/codingCat222/Management",
      live: "https://management-nine-zeta.vercel.app/",
      screenshot: img2,
      accentColor: "#4ECDC4",
    },
    {
      title: "AI Chat Interface",
      description:
        "Sleek chatbot UI integrating OpenAI API with conversation history and markdown rendering.",
      tech: ["React", "OpenAI API", "Python"],
      github: "https://github.com",
      live: "",
      screenshot: null,
      accentColor: "#A78BFA",
    },
    {
      title: "Weather Dashboard",
      description:
        "Real-time weather app with 7-day forecasts, interactive maps, and geolocation support.",
      tech: ["JavaScript", "REST API", "Chart.js"],
      github: "https://github.com",
      live: "https://example.com",
      screenshot: null,
      accentColor: "#F59E0B",
    },
  ],
};