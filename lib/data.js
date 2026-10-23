export const profile = {
  name: "Shakir Hussain",
  roles: ["Full Stack Developer", "MERN Stack Developer", "Next.js Developer"],
  location: "Dhaka, Bangladesh",
  email: "shakirhusain1414@gmail.com",
  phone: "+880 1575193387",
  whatsapp: "+880 1575193387",
  avatar: "https://avatars.githubusercontent.com/u/224368473?v=4",
  github: "https://github.com/shakirhussaindev",
  linkedin: "https://www.linkedin.com/in/shakirhussaindev/",
  tagline:
    "I build fast, accessible, full-stack web apps — from pixel-perfect interfaces to the APIs and databases behind them.",
  about: [
    "Hi, I'm Shakir Hussain from Dhaka, Bangladesh. I'm a full-stack developer who likes building web applications from start to finish. I enjoy creating the UI, connecting it with the backend, and seeing everything work together. Most of the time I work with React, Next.js, JavaScript, TypeScript, Node.js, Express.js, MongoDB, and Mongoose.",

    "I got into programming because I liked seeing my code work right away. I'd build something, find a bug, fix it, and learn something new every time. Over time, I started building bigger projects like booking systems, travel guides, book borrowing apps, and social platforms. Every project taught me something different.",

    "I like working on projects that solve real problems. Whether it's authentication, APIs, databases, or making sure a website works well on both phones and desktops, I enjoy figuring things out and improving them. I also try to write code that's clean and easy to understand.",
  ],
  availability: "Open to opportunities",
};

export const skills = [
  {
    category: "Frontend",
    items: [
      "Next.js",
      "React.js",
      "JavaScript (ES6+)",
      "Redux",
      "Tailwind CSS",
      "HTML5",
      "CSS3",
    ],
  },
  {
    category: "Backend",
    items: [
      "Node.js",
      "Express.js",
      "MongoDB",
      "Mongoose",
      "REST APIs",
      "JWT Auth",
    ],
  },
  {
    category: "Tools & Workflow",
    items: ["Git", "GitHub", "Vercel", "VS Code", "Figma"],
  },
];

export const education = {
  degree: "Graduation in Islamic Studies",
  detail: "Completed after HSC",
  note: "Alongside my formal education, I've been self-teaching full-stack web development, working through real projects to build practical, production-ready skills.",
};

export const journey = [
  {
    year: "Foundations",
    title: "Islamic Studies (Graduation, post-HSC)",
    description:
      "Completed my degree in Islamic Studies after HSC, building a strong foundation in discipline, research and structured thinking.",
  },
  {
    year: "Getting started",
    title: "Learning to code",
    description:
      "Started self-teaching HTML, CSS and JavaScript, then moved into React — drawn in by the loop of building something and watching it work in the browser.",
  },
  {
    year: "Going full-stack",
    title: "Node.js, Express & MongoDB",
    description:
      "Extended into backend development — REST APIs, authentication with JWT, and MongoDB/Mongoose for data modelling — to be able to ship complete products end to end.",
  },
  {
    year: "Now",
    title: "Building real projects",
    description:
      "Shipping full-stack platforms (booking systems, travel guides, social apps) with React/Next.js frontends and Node/Express/MongoDB backends — and open to full-stack developer roles.",
  },
];

export const projects = [
  {
    slug: "startup-forge",
    name: "StartupForge Team Builder Platform",
    short:
      "A platform connecting collaborators with founders for building startup.",
    description:
      "StartupForge is a role-based platform that connects startup founders with skilled collaborators. Founders can create startups, publish opportunities, review applicants, and build their teams, while collaborators can discover opportunities, apply, and track their applications.",
    stack: [
      "Next Js",
      "JavaScript",
      "Tailwind CSS",
      "Hero ui",
      "Framer Motion",
      "Recharts",
      "Better Auth",
      "JWT",
      "RBAC",
      "Protected admin, founder, and collaborator routes",
      "Node.js",
      "Express Js",
      "MongoDB",
      "REST API",
      "Stripe Checkout & Webhooks",
    ],
    live: "https://startup-client-eta.vercel.app",
    github: "https://github.com/shakirhussaindev/startup-client",
    challenges: [
      `Multi-Role Access Control & Architecture: Designing and securing strict access boundaries across three distinct user roles (Admin, Founder, and Collaborator) while maintaining shared components, dynamic navigation, and isolated dashboard workflows.`,
      "Server-Client State Synchronization: Handling instant UI revalidation in Next.js App Router after mutation actions (e.g., updating application status or toggling ban states) by properly aligning server actions, revalidatePath, and cache invalidation.",
      "Safe Data Parsing & Error Boundaries: Mitigating runtime crashes caused by invalid MongoDB ObjectId lookups returning HTML error pages instead of JSON, solved by implementing custom error.jsx, not-found.jsx, and defensive API response checks.",
      "Theme Synchronization with Third-Party SVG Charts: Resolving styling conflicts between Recharts SVG elements and HeroUI/Tailwind dark/light themes, specifically correcting muddy axis strokes, text readability, and glassmorphism hover tooltips.",
    ],
    improvements: [
      "Real-Time Notifications & In-App Messaging: Implementing WebSockets via Socket.io or Pusher to provide instant candidate status updates and direct founder-collaborator messaging without requiring page reloads.",
      "AI-Powered Candidate Matchmaking: Integrating an LLM-based parsing engine to analyze collaborator resumes and technical skill sets against opportunity requirements, outputting an automated 'Fit Score.'",
      "Full-Cycle Stripe Subscription Management: Building out self-service billing portals where founders can cancel, upgrade, or downgrade plans, accompanied by automated PDF invoice generation.",
      "Fuzzy Search & Advanced Discovery: Integrating MongoDB Atlas Search or Algolia to handle typo-tolerant search across opportunities, startup tags, and collaborator skill sets.",
    ],
  },
  {
    slug: "tutor-booking-platform",
    name: "Tutor Booking Platform",
    short: "A platform connecting students with tutors for booking sessions.",
    description:
      "A booking platform that connects students with tutors. Students can browse available tutors, view their subjects and availability, and book learning sessions through a clean, guided flow. The client focuses on a smooth booking experience with clear scheduling and profile information.",
    stack: [
      "Next Js",
      "JavaScript",
      "Tailwind CSS",
      "Shadcn ui",
      "Better Auth",
      "JWT",
      "Express Js",
      "MongoDB",
      "REST API",
    ],
    live: "https://tutor-booking-client-side.vercel.app/",
    github: "https://github.com/shakirhussaindev/tutor-booking-client-side",
    challenges:
      "Coordinating booking state and availability across multiple tutor profiles while keeping the UI simple and free of double-bookings was the trickiest part, along with keeping the flow usable on smaller screens.",
    improvements:
      "Planned improvements include real-time availability updates, calendar sync, in-app messaging between students and tutors, and payment integration for paid sessions.",
  },
  {
    slug: "book-borrowing-platform",
    name: "Book Borrowing Platform",
    short: "A full-stack library platform for browsing and borrowing books.",
    description:
      "An online book borrowing platform with JWT authentication, an in-memory data store, REST API routes and a multi-page frontend with a cohesive library-themed design. Users can browse the catalog, view book details, and borrow or return books through a clean, book-store-inspired interface.",
    stack: ["React.js", "JavaScript", "BetterAuth", "Tailwind CSS"],
    live: "https://book-borrowing-platform-lac.vercel.app/",
    github: "https://github.com/shakirhussaindev/Book-Borrowing-Platform",
    challenges:
      "Designing authentication (JWT) alongside a borrowing workflow that has to track book availability accurately, and keeping the library-themed UI consistent across every page.",
    improvements:
      "Next steps include migrating from the in-memory store to a persistent database, adding due-date reminders, and a personal borrowing-history dashboard for each user.",
  },
  {
    slug: "keenkeeper-friendship-platform",
    name: "KeenKeeper — Friendship Platform",
    short:
      "A social platform for connecting and staying in touch with friends.",
    description:
      "KeenKeeper is a social/friendship platform designed to help people connect, discover others with shared interests, and stay in touch — built with a focus on a clean, approachable interface.",
    stack: ["React", "JavaScript", "Tailwind CSS", "REST API"],
    live: "https://keenkeeper-lake.vercel.app/",
    github: "https://github.com/shakirhussaindev/keenkeeper",
    challenges:
      "Structuring the data model for user connections and profiles, and designing an interface that feels social and inviting rather than transactional.",
    improvements:
      "Planned features include real-time chat, friend suggestions based on shared interests, and notification support.",
  },
];

export const navLinks = [
  { href: "#home", label: "home", file: "Home" },
  { href: "#about", label: "about", file: "About" },
  { href: "#skills", label: "skills", file: "Skills" },
  { href: "#projects", label: "projects", file: "Projects" },
  { href: "#journey", label: "journey", file: "Journey" },
  { href: "#contact", label: "contact", file: "Contact" },
];
