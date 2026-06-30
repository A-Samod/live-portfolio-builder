import { PortfolioData } from './types';

export const developerPreset: PortfolioData = {
  name: "Alex Rivera",
  title: "Full-Stack Engineer & Interaction Designer",
  subtitle: "Crafting beautiful, high-performance interfaces and scalable digital architectures.",
  bio: "I'm a full-stack engineer specialized in React, Node.js, and cloud systems, with a deep passion for micro-interactions, responsive systems, and sleek UI aesthetics.",
  detailedBio: "With over five years of professional experience, I bridge the gap between complex engineering and elegant design. I believe software should not only work flawlessly under heavy load but should also delight the humans interacting with it. Currently, I build next-generation collaboration tools and robust web architectures.",
  location: "San Francisco, CA",
  email: "alex.rivera@dev.io",
  avatarUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&h=400&q=80",
  socials: {
    github: "https://github.com",
    linkedin: "https://linkedin.com",
    twitter: "https://twitter.com",
    email: "mailto:alex.rivera@dev.io",
    dribbble: "https://dribbble.com"
  },
  skills: [
    { name: "React / Next.js", category: "Frontend", level: 95 },
    { name: "TypeScript", category: "Languages", level: 90 },
    { name: "Tailwind CSS", category: "Frontend", level: 98 },
    { name: "Node.js & Express", category: "Backend", level: 85 },
    { name: "GraphQL & REST APIs", category: "Backend", level: 88 },
    { name: "PostgreSQL & Redis", category: "Database", level: 80 },
    { name: "Docker & AWS", category: "DevOps", level: 75 },
    { name: "Figma & UI Design", category: "Design", level: 88 }
  ],
  projects: [
    {
      id: "proj-1",
      title: "Nova Workspace",
      shortDescription: "A real-time multiplayer document collaboration suite with interactive canvases and high-fidelity text editing.",
      longDescription: "Nova Workspace completely reimagines digital documentation. By utilizing CRDTs (Conflict-free Replicated Data Types) and a local-first architecture, Nova provides instant-sync collaborative spaces, custom widget blocks, infinite whiteboards, and fully offline-first capabilities. The front-end leverages advanced React custom rendering and canvas optimizations to sustain 60fps even under heavy drawing loads.",
      category: "SaaS",
      imageUrl: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&h=450&q=80",
      tags: ["React", "TypeScript", "Tailwind CSS", "WebSockets", "CRDTs"],
      githubUrl: "https://github.com",
      liveUrl: "https://example.com",
      featured: true
    },
    {
      id: "proj-2",
      title: "Synthetix Audio Studio",
      shortDescription: "An in-browser digital audio workstation (DAW) powered by the Web Audio API with visual equalizer and custom synths.",
      longDescription: "Synthetix is an interactive music production sandbox operating completely within the browser. Built to expose the full power of the Web Audio API, it includes a multi-track timeline sequencer, live synthesizer routing, responsive soundwave visualizers constructed on SVG and Canvas, custom delay/reverb sound nodes, and real-time audio record/export functions. It features a stunning, dark-cyberpunk cyberpunk theme styled with custom glow grids.",
      category: "Creative Tech",
      imageUrl: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=800&h=450&q=80",
      tags: ["TypeScript", "Web Audio API", "HTML5 Canvas", "Tailwind CSS", "Vite"],
      githubUrl: "https://github.com",
      liveUrl: "https://example.com",
      featured: true
    },
    {
      id: "proj-3",
      title: "Vortex Analytics Dashboard",
      shortDescription: "High-performance data visualizer mapping real-time streaming telemetry with modular bento charts.",
      longDescription: "Vortex is a powerful telemetry visualization platform designed for fast-paced IoT deployments. It leverages optimized canvas rendering engines to visualize up to 100,000 data points in real time without dropping frames. The modular dashboard features full custom drag-and-drop widget resizing, live web socket streaming integration, anomaly alarm logs, and interactive filter controls using complex multidimensional math kernels.",
      category: "Web App",
      imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&h=450&q=80",
      tags: ["React", "Recharts", "WebSockets", "Tailwind CSS", "Node.js"],
      githubUrl: "https://github.com",
      liveUrl: "https://example.com",
      featured: false
    },
    {
      id: "proj-4",
      title: "Apex E-Commerce Platform",
      shortDescription: "A minimalist, hyper-fast e-commerce experience with custom checkout workflows and full Stripe API integration.",
      longDescription: "Apex is a head-turning headless e-commerce store built for high conversion. It features instantaneous page loading, search-as-you-type fuzzy catalog navigation, visual interactive cart drawers, custom multi-step checkout progress flows, and secure Serverless back-end endpoints parsing secure tokenized Stripe payments. Fully accessibility-audited meeting strict WCAG AA contrast, size, and layout benchmarks.",
      category: "E-Commerce",
      imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&h=450&q=80",
      tags: ["Next.js", "Stripe API", "Framer Motion", "Tailwind CSS", "GraphQL"],
      githubUrl: "https://github.com",
      liveUrl: "https://example.com",
      featured: false
    }
  ],
  experience: [
    {
      id: "exp-1",
      title: "Senior Product Engineer",
      subtitle: "Stripe • Full-time",
      period: "2023 - Present",
      description: "Directing UI architecture and design token integrations for billing dashboards. Decreased page bundle sizes by 32% while initiating robust client-side animation principles.",
      type: 'work'
    },
    {
      id: "exp-2",
      title: "Frontend Engineer II",
      subtitle: "Vercel • Full-time",
      period: "2021 - 2023",
      description: "Contributed to Vercel's analytics and project onboarding consoles. Spearheaded integration of modular canvas widgets and led community design-system standardization.",
      type: 'work'
    },
    {
      id: "exp-3",
      title: "B.S. in Computer Science & Interaction Design",
      subtitle: "Stanford University",
      period: "2017 - 2021",
      description: "Specialized in Human-Computer Interaction (HCI) and Graphics. Graduated with honors, directing the Stanford Design Collective student coalition.",
      type: 'education'
    },
    {
      id: "exp-4",
      title: "Awwwards Developer Site of the Year Nomination",
      subtitle: "Synthetix DAW project",
      period: "2024",
      description: "Recognized for exemplary integration of the Web Audio API, layout rhythm, responsive web typography, and rich visual interactive components.",
      type: 'award'
    }
  ]
};

export const designerPreset: PortfolioData = {
  name: "Mia Thorne",
  title: "Principal Brand Designer & Creative Director",
  subtitle: "Sculpting visual identities, refined editorial layouts, and beautiful brand guidelines.",
  bio: "I'm a multidisciplinary designer focusing on luxury branding, editorial layouts, and fluid motion systems for forward-thinking creative companies.",
  detailedBio: "Over eight years of design practice has taught me that true style comes from stripping away the unnecessary. I believe in high-contrast editorial typography, balanced grids, spacious whitespace, and subtle micro-interactions that guide a reader's eyes effortlessly. Currently, I consult with global fashion and architecture firms to define their digital presence.",
  location: "New York, NY",
  email: "mia@thorne-studios.design",
  avatarUrl: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=400&h=400&q=80",
  socials: {
    github: "https://github.com",
    linkedin: "https://linkedin.com",
    twitter: "https://twitter.com",
    email: "mailto:mia@thorne-studios.design",
    dribbble: "https://dribbble.com/mia"
  },
  skills: [
    { name: "Creative Direction", category: "Design", level: 98 },
    { name: "Brand Identity Systems", category: "Design", level: 95 },
    { name: "Editorial Typography", category: "Design", level: 92 },
    { name: "Figma & Adobe Suite", category: "Tools", level: 96 },
    { name: "HTML & Custom CSS", category: "Frontend", level: 78 },
    { name: "Motion & Keyframes", category: "Tools", level: 85 }
  ],
  projects: [
    {
      id: "proj-1",
      title: "Atelier Muse",
      shortDescription: "An elegant interactive brand catalog and visual system created for a high-end French perfume brand.",
      longDescription: "Atelier Muse required a physical-to-digital translation that felt premium and sensory. I sculpted their complete typographic branding, customized packaging grids, and directed a minimal editorial showcase website. The interface operates on deep charcoal-to-alabaster layouts, displaying responsive parallax product slides, immersive split-screen layout formats, and highly refined typographic pairings.",
      category: "Branding",
      imageUrl: "https://images.unsplash.com/photo-1523293182086-7651a899d37f?auto=format&fit=crop&w=800&h=450&q=80",
      tags: ["Brand System", "Typography", "Art Direction", "Packaging"],
      githubUrl: "",
      liveUrl: "https://example.com",
      featured: true
    },
    {
      id: "proj-2",
      title: "Grid & Rhythm Magazine",
      shortDescription: "A digital publication examining Swiss minimalist graphic design and editorial print layouts.",
      longDescription: "Grid & Rhythm is an online platform celebrating international graphic design history. Heavily influenced by the International Typographic Style (Swiss Style), the web layout uses dynamic, responsive css-grid grids that shift depending on screen sizing, large display headers, tight tracking offsets, high-contrast monochrome layouts, and structural sidebar tables listing historical design figures.",
      category: "Editorial",
      imageUrl: "https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?auto=format&fit=crop&w=800&h=450&q=80",
      tags: ["CSS Grid", "Editorial", "Typographic Art", "Swiss Style"],
      githubUrl: "",
      liveUrl: "https://example.com",
      featured: true
    },
    {
      id: "proj-3",
      title: "Solitude Architecture",
      shortDescription: "A responsive portfolio layout showcasing minimalist concrete residential designs.",
      longDescription: "A fully responsive digital archive for a bespoke architectural firm. Relying on concrete textures, stark lines, and extensive use of white margins, this design system frames residential masterpieces with quiet elegance. It incorporates smooth fade-in image animations, custom full-screen image expand modals, and a dark/light mood toggle to represent daytime and nighttime shadows.",
      category: "Photography",
      imageUrl: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&h=450&q=80",
      tags: ["UI Layout", "Interaction Design", "Art Direction", "Archived Works"],
      githubUrl: "",
      liveUrl: "https://example.com",
      featured: false
    }
  ],
  experience: [
    {
      id: "exp-1",
      title: "Creative Director",
      subtitle: "Atelier Agency • Freelance / Contract",
      period: "2022 - Present",
      description: "Directing end-to-end branding, digital editorial design, and responsive styling systems for boutique European luxury clients.",
      type: 'work'
    },
    {
      id: "exp-2",
      title: "Senior Brand Designer",
      subtitle: "Pentagram • Full-time",
      period: "2019 - 2022",
      description: "Designed core identity systems, custom packaging guidelines, and high-profile exhibition signage for tech giants and museums.",
      type: 'work'
    },
    {
      id: "exp-3",
      title: "Master of Fine Arts (MFA)",
      subtitle: "Yale School of Art",
      period: "2017 - 2019",
      description: "Specialized in Graphic Design and Editorial History. Awarded the Yale School of Art Design Excellence prize.",
      type: 'education'
    }
  ]
};

export const aiPreset: PortfolioData = {
  name: "Dr. Ryan Vance",
  title: "AI Research Scientist & Systems Architect",
  subtitle: "Developing advanced cognitive models and optimizing large neural architectures.",
  bio: "I'm a computer scientist and deep learning researcher focused on building efficient generative model pipelines, neural search frameworks, and smart interfaces.",
  detailedBio: "With a PhD in Artificial Intelligence and multiple high-impact papers, I love translating complex algorithmic theory into practical, production-ready full-stack tools. I design interactive visualizers that let developers 'peer inside' neural weights and manage dense real-time high-throughput model latency budgets.",
  location: "Seattle, WA",
  email: "r.vance@cognitive-systems.ai",
  avatarUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&h=400&q=80",
  socials: {
    github: "https://github.com",
    linkedin: "https://linkedin.com",
    twitter: "https://twitter.com",
    email: "mailto:r.vance@cognitive-systems.ai"
  },
  skills: [
    { name: "PyTorch & TensorFlow", category: "AI/ML", level: 96 },
    { name: "Python & Rust", category: "Languages", level: 94 },
    { name: "LLM Fine-Tuning & RAG", category: "AI/ML", level: 92 },
    { name: "Transformers Architecture", category: "AI/ML", level: 95 },
    { name: "TypeScript / React", category: "Frontend", level: 80 },
    { name: "Docker, Kubernetes & CUDA", category: "DevOps", level: 88 }
  ],
  projects: [
    {
      id: "proj-1",
      title: "Cognitive Maps (CogMap)",
      shortDescription: "An interactive, beautiful browser-based high-dimensional vector embeddings projection visualizer.",
      longDescription: "CogMap allows developers to project high-dimensional LLM embeddings directly onto a clean, interactive 3D/2D browser canvas utilizing UMAP and t-SNE algorithms. Developers can search for semantic vectors in real time, upload CSV dataset matrices, customize grouping hues, and inspect dynamic cosine-similarity distance vectors on hover. Features full dark-mode styling with subtle tech grid grids.",
      category: "AI Tools",
      imageUrl: "https://images.unsplash.com/photo-1509228468518-180dd4864904?auto=format&fit=crop&w=800&h=450&q=80",
      tags: ["React", "D3.js", "TypeScript", "Tailwind CSS", "Vector Math"],
      githubUrl: "https://github.com",
      liveUrl: "https://example.com",
      featured: true
    },
    {
      id: "proj-2",
      title: "Aura: Lightweight Local LLM Chat",
      shortDescription: "A minimalist web interface for local WebGPU-accelerated LLMs running 100% in-browser.",
      longDescription: "Aura is a client-side chat interface that lets users download and execute fully-functional light neural networks directly in the web browser leveraging WebGPU. Zero server calls, total privacy, and near-zero latency. Includes beautiful markdown rendering, code block syntax highlighting, token speed visualizers, and customized conversation branching controls.",
      category: "SaaS",
      imageUrl: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=800&h=450&q=80",
      tags: ["WebGPU", "React", "TypeScript", "Tailwind CSS", "Markdown"],
      githubUrl: "https://github.com",
      liveUrl: "https://example.com",
      featured: true
    }
  ],
  experience: [
    {
      id: "exp-1",
      title: "Lead AI Researcher",
      subtitle: "OpenAI • Full-time",
      period: "2022 - Present",
      description: "Directing alignment research and optimizing distributed model inference throughput. Lead development on interactive weight analysis dashboards.",
      type: 'work'
    },
    {
      id: "exp-2",
      title: "Research Scientist",
      subtitle: "Google DeepMind • Full-time",
      period: "2020 - 2022",
      description: "Developed multimodal fine-tuning architectures. Authored three core papers on visual and semantic representation learning.",
      type: 'work'
    },
    {
      id: "exp-3",
      title: "Ph.D. in Computer Science",
      subtitle: "MIT • Artificial Intelligence Lab",
      period: "2015 - 2020",
      description: "Dissertation: 'Sparse Attention Mechanics in Large Scale Transformer Architectures'. Published at NeurIPS, ICML, and CVPR.",
      type: 'education'
    }
  ]
};

export const presets = {
  developer: developerPreset,
  designer: designerPreset,
  ai_scientist: aiPreset
};

export const defaultColors = [
  { name: "Emerald Forest", primary: "emerald", class: "bg-emerald-600 hover:bg-emerald-700 text-white", textClass: "text-emerald-600", borderClass: "border-emerald-600" },
  { name: "Ocean Breeze", primary: "sky", class: "bg-sky-600 hover:bg-sky-700 text-white", textClass: "text-sky-600", borderClass: "border-sky-600" },
  { name: "Royal Indigo", primary: "indigo", class: "bg-indigo-600 hover:bg-indigo-700 text-white", textClass: "text-indigo-600", borderClass: "border-indigo-600" },
  { name: "Crimson Rose", primary: "rose", class: "bg-rose-600 hover:bg-rose-700 text-white", textClass: "text-rose-600", borderClass: "border-rose-600" },
  { name: "Amber Sand", primary: "amber", class: "bg-amber-600 hover:bg-amber-700 text-white", textClass: "text-amber-600", borderClass: "border-amber-600" },
  { name: "Cyber Violet", primary: "violet", class: "bg-violet-600 hover:bg-violet-700 text-white", textClass: "text-violet-600", borderClass: "border-violet-600" },
  { name: "Minimalist Slate", primary: "zinc", class: "bg-zinc-800 hover:bg-zinc-900 text-white", textClass: "text-zinc-800", borderClass: "border-zinc-800" }
];
