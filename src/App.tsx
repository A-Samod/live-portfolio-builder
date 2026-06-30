import React, { useState, useEffect, useRef } from 'react';
import { 
  Github, 
  Linkedin, 
  Twitter, 
  Mail, 
  ExternalLink, 
  MapPin, 
  Briefcase, 
  GraduationCap, 
  Award, 
  Check, 
  Download, 
  Edit3, 
  Eye, 
  Plus, 
  Trash2, 
  Code, 
  Sliders, 
  X, 
  Sparkles, 
  Folder, 
  Palette, 
  Clipboard, 
  Globe, 
  Dribbble, 
  EyeOff, 
  FileCode,
  Layout,
  CheckCircle2,
  ChevronRight,
  Info
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { PortfolioData, Project, Skill, TimelineEvent } from './types';
import { presets, defaultColors } from './data';

export default function App() {
  // Application State
  const [activePreset, setActivePreset] = useState<keyof typeof presets>('developer');
  const [portfolio, setPortfolio] = useState<PortfolioData>(presets.developer);
  
  // Customization & UI State
  const [isCustomizeOpen, setIsCustomizeOpen] = useState(true);
  const [selectedTab, setSelectedTab] = useState<'profile' | 'skills' | 'projects' | 'experience' | 'theme'>('profile');
  const [projectFilter, setProjectFilter] = useState<string>('All');
  const [contactForm, setContactForm] = useState({ name: '', email: '', message: '' });
  const [contactSuccess, setContactSuccess] = useState(false);
  const [contactLoading, setContactLoading] = useState(false);
  
  // Export State
  const [isExportOpen, setIsExportOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  
  // Styling State
  const [selectedColor, setSelectedColor] = useState(defaultColors[0]); // Emerald Forest default
  const [selectedFont, setSelectedFont] = useState<'sans' | 'display' | 'serif'>('display');

  // Load Preset when changed
  useEffect(() => {
    setPortfolio(presets[activePreset]);
  }, [activePreset]);

  // Handle Input Changes for Profile
  const handleProfileChange = (key: keyof PortfolioData, value: any) => {
    setPortfolio(prev => ({ ...prev, [key]: value }));
  };

  const handleSocialsChange = (key: string, value: string) => {
    setPortfolio(prev => ({
      ...prev,
      socials: { ...prev.socials, [key]: value }
    }));
  };

  // Skill Handlers
  const handleAddSkill = () => {
    const newSkill: Skill = { name: 'New Skill', category: 'Frontend', level: 80 };
    setPortfolio(prev => ({
      ...prev,
      skills: [...prev.skills, newSkill]
    }));
  };

  const handleUpdateSkill = (index: number, key: keyof Skill, value: any) => {
    setPortfolio(prev => {
      const updatedSkills = [...prev.skills];
      updatedSkills[index] = { ...updatedSkills[index], [key]: value };
      return { ...prev, skills: updatedSkills };
    });
  };

  const handleRemoveSkill = (index: number) => {
    setPortfolio(prev => ({
      ...prev,
      skills: prev.skills.filter((_, i) => i !== index)
    }));
  };

  // Project Handlers
  const handleAddProject = () => {
    const newProject: Project = {
      id: `proj-${Date.now()}`,
      title: 'New Dynamic Project',
      shortDescription: 'A brief sentence description of your amazing project.',
      longDescription: 'A comprehensive explanation of what you built, why you built it, the major architectural challenges solved, and lessons learned during development.',
      category: 'Web App',
      imageUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&h=450&q=80',
      tags: ['React', 'Tailwind CSS'],
      githubUrl: 'https://github.com',
      liveUrl: 'https://example.com',
      featured: false
    };
    setPortfolio(prev => ({
      ...prev,
      projects: [...prev.projects, newProject]
    }));
  };

  const handleUpdateProject = (id: string, key: keyof Project, value: any) => {
    setPortfolio(prev => ({
      ...prev,
      projects: prev.projects.map(proj => proj.id === id ? { ...proj, [key]: value } : proj)
    }));
  };

  const handleUpdateProjectTags = (id: string, tagsString: string) => {
    const tagsArray = tagsString.split(',').map(tag => tag.trim()).filter(tag => tag.length > 0);
    handleUpdateProject(id, 'tags', tagsArray);
  };

  const handleRemoveProject = (id: string) => {
    setPortfolio(prev => ({
      ...prev,
      projects: prev.projects.filter(proj => proj.id !== id)
    }));
  };

  // Experience Handlers
  const handleAddExperience = () => {
    const newExp: TimelineEvent = {
      id: `exp-${Date.now()}`,
      title: 'Job Position / Title',
      subtitle: 'Company or Institution Name',
      period: '2024 - Present',
      description: 'Describe your core responsibilities, key project milestones, technology stack, and quantifiable achievements.',
      type: 'work'
    };
    setPortfolio(prev => ({
      ...prev,
      experience: [...prev.experience, newExp]
    }));
  };

  const handleUpdateExperience = (id: string, key: keyof TimelineEvent, value: any) => {
    setPortfolio(prev => ({
      ...prev,
      experience: prev.experience.map(exp => exp.id === id ? { ...exp, [key]: value } : exp)
    }));
  };

  const handleRemoveExperience = (id: string) => {
    setPortfolio(prev => ({
      ...prev,
      experience: prev.experience.filter(exp => exp.id !== id)
    }));
  };

  // Contact Form Submission
  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!contactForm.name || !contactForm.email || !contactForm.message) return;
    setContactLoading(true);
    setTimeout(() => {
      setContactLoading(false);
      setContactSuccess(true);
      setContactForm({ name: '', email: '', message: '' });
      setTimeout(() => setContactSuccess(false), 5000);
    }, 1200);
  };

  // Unique categories for filtering
  const projectCategories = ['All', ...Array.from(new Set(portfolio.projects.map(p => p.category)))];

  // Font family helper
  const getFontClass = () => {
    switch (selectedFont) {
      case 'sans': return 'font-sans';
      case 'display': return 'font-display';
      case 'serif': return 'font-serif';
      default: return 'font-sans';
    }
  };

  // Primary color helper mapping
  const getColorClasses = () => {
    const colorMap: Record<string, { bg: string, text: string, hover: string, border: string, focus: string, badge: string, iconBg: string, accentGlow: string }> = {
      emerald: {
        bg: 'bg-emerald-600',
        text: 'text-emerald-600 dark:text-emerald-400',
        hover: 'hover:text-emerald-700 dark:hover:text-emerald-300',
        border: 'border-emerald-600/30',
        focus: 'focus:border-emerald-600 focus:ring-emerald-600/20',
        badge: 'bg-emerald-50 text-emerald-700 border-emerald-200 dark:bg-emerald-950/40 dark:text-emerald-300 dark:border-emerald-900/50',
        iconBg: 'bg-emerald-50 text-emerald-600 dark:bg-emerald-950/30 dark:text-emerald-400',
        accentGlow: 'from-emerald-600/10 via-transparent to-transparent'
      },
      sky: {
        bg: 'bg-sky-600',
        text: 'text-sky-600 dark:text-sky-400',
        hover: 'hover:text-sky-700 dark:hover:text-sky-300',
        border: 'border-sky-600/30',
        focus: 'focus:border-sky-600 focus:ring-sky-600/20',
        badge: 'bg-sky-50 text-sky-700 border-sky-200 dark:bg-sky-950/40 dark:text-sky-300 dark:border-sky-900/50',
        iconBg: 'bg-sky-50 text-sky-600 dark:bg-sky-950/30 dark:text-sky-400',
        accentGlow: 'from-sky-600/10 via-transparent to-transparent'
      },
      indigo: {
        bg: 'bg-indigo-600',
        text: 'text-indigo-600 dark:text-indigo-400',
        hover: 'hover:text-indigo-700 dark:hover:text-indigo-300',
        border: 'border-indigo-600/30',
        focus: 'focus:border-indigo-600 focus:ring-indigo-600/20',
        badge: 'bg-indigo-50 text-indigo-700 border-indigo-200 dark:bg-indigo-950/40 dark:text-indigo-300 dark:border-indigo-900/50',
        iconBg: 'bg-indigo-50 text-indigo-600 dark:bg-indigo-950/30 dark:text-indigo-400',
        accentGlow: 'from-indigo-600/10 via-transparent to-transparent'
      },
      rose: {
        bg: 'bg-rose-600',
        text: 'text-rose-600 dark:text-rose-400',
        hover: 'hover:text-rose-700 dark:hover:text-rose-300',
        border: 'border-rose-600/30',
        focus: 'focus:border-rose-600 focus:ring-rose-600/20',
        badge: 'bg-rose-50 text-rose-700 border-rose-200 dark:bg-rose-950/40 dark:text-rose-300 dark:border-rose-900/50',
        iconBg: 'bg-rose-50 text-rose-600 dark:bg-rose-950/30 dark:text-rose-400',
        accentGlow: 'from-rose-600/10 via-transparent to-transparent'
      },
      amber: {
        bg: 'bg-amber-600',
        text: 'text-amber-600 dark:text-amber-400',
        hover: 'hover:text-amber-700 dark:hover:text-amber-300',
        border: 'border-amber-600/30',
        focus: 'focus:border-amber-600 focus:ring-amber-600/20',
        badge: 'bg-amber-50 text-amber-700 border-amber-200 dark:bg-amber-950/40 dark:text-amber-300 dark:border-amber-900/50',
        iconBg: 'bg-amber-50 text-amber-600 dark:bg-amber-950/30 dark:text-amber-400',
        accentGlow: 'from-amber-600/10 via-transparent to-transparent'
      },
      violet: {
        bg: 'bg-violet-600',
        text: 'text-violet-600 dark:text-violet-400',
        hover: 'hover:text-violet-700 dark:hover:text-violet-300',
        border: 'border-violet-600/30',
        focus: 'focus:border-violet-600 focus:ring-violet-600/20',
        badge: 'bg-violet-50 text-violet-700 border-violet-200 dark:bg-violet-950/40 dark:text-violet-300 dark:border-violet-900/50',
        iconBg: 'bg-violet-50 text-violet-600 dark:bg-violet-950/30 dark:text-violet-400',
        accentGlow: 'from-violet-600/10 via-transparent to-transparent'
      },
      zinc: {
        bg: 'bg-zinc-800',
        text: 'text-zinc-800 dark:text-zinc-300',
        hover: 'hover:text-zinc-900 dark:hover:text-zinc-100',
        border: 'border-zinc-800/30',
        focus: 'focus:border-zinc-800 focus:ring-zinc-800/20',
        badge: 'bg-zinc-100 text-zinc-800 border-zinc-200 dark:bg-zinc-800 dark:text-zinc-300 dark:border-zinc-700',
        iconBg: 'bg-zinc-100 text-zinc-800 dark:bg-zinc-800 dark:text-zinc-300',
        accentGlow: 'from-zinc-800/10 via-transparent to-transparent'
      }
    };
    return colorMap[selectedColor.primary] || colorMap.emerald;
  };

  const colors = getColorClasses();

  // Export HTML Generator (Single File Portfolio with fully embedded styles and beautiful UI elements)
  const generateHTMLCode = () => {
    const featuredProjects = portfolio.projects.map(p => `
          <!-- Project Card -->
          <div class="group bg-white rounded-2xl border border-slate-100 overflow-hidden shadow-xs hover:shadow-md hover:border-slate-200 transition-all duration-300 flex flex-col h-full">
            <div class="relative overflow-hidden aspect-video">
              <img src="${p.imageUrl}" alt="${p.title}" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" referrerpolicy="no-referrer">
              ${p.featured ? `<span class="absolute top-4 left-4 bg-slate-900 text-white text-xs px-2.5 py-1 rounded-full font-medium tracking-wide">Featured Project</span>` : ''}
            </div>
            <div class="p-6 flex flex-col flex-1">
              <span class="text-xs uppercase tracking-widest text-slate-400 font-semibold mb-2">${p.category}</span>
              <h3 class="text-xl font-bold text-slate-900 mb-2 group-hover:text-indigo-600 transition-colors">${p.title}</h3>
              <p class="text-sm text-slate-600 leading-relaxed mb-4 flex-1">${p.shortDescription}</p>
              <div class="flex flex-wrap gap-1.5 mb-5">
                ${p.tags.map(tag => `<span class="text-[11px] bg-slate-50 text-slate-600 px-2 py-0.5 rounded border border-slate-100">${tag}</span>`).join('')}
              </div>
              <div class="flex items-center gap-4 mt-auto pt-4 border-t border-slate-50">
                ${p.liveUrl ? `<a href="${p.liveUrl}" target="_blank" class="text-xs font-semibold text-slate-900 flex items-center gap-1 hover:text-indigo-600 transition-colors">View Demo <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14L21 3"/></svg></a>` : ''}
                ${p.githubUrl ? `<a href="${p.githubUrl}" target="_blank" class="text-xs font-semibold text-slate-500 flex items-center gap-1 hover:text-slate-900 transition-colors">Code Repo <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/></svg></a>` : ''}
              </div>
            </div>
          </div>`).join('\n');

    const timelineHTML = portfolio.experience.map(e => `
          <!-- Timeline Card -->
          <div class="relative pl-8 pb-10 border-l border-slate-100 last:pb-0">
            <!-- Icon Node -->
            <div class="absolute -left-3.5 top-0 w-7 h-7 rounded-full bg-white border-2 border-indigo-600 flex items-center justify-center text-indigo-600 shadow-xs">
              ${e.type === 'work' ? `<svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>` : 
                e.type === 'education' ? `<svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c0 2 2 3 6 3s6-1 6-3v-5"/></svg>` : 
                `<svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><circle cx="12" cy="8" r="7"/><path d="M8.21 13.89L7 23l5-3 5 3-1.21-9.12"/></svg>`}
            </div>
            <!-- Content -->
            <div>
              <span class="inline-block text-xs font-semibold text-indigo-600 bg-indigo-50 border border-indigo-100 px-2.5 py-0.5 rounded-full mb-2">${e.period}</span>
              <h3 class="text-lg font-bold text-slate-900">${e.title}</h3>
              <p class="text-sm font-medium text-slate-500 mb-2">${e.subtitle}</p>
              <p class="text-sm text-slate-600 leading-relaxed">${e.description}</p>
            </div>
          </div>`).join('\n');

    const skillsHTML = portfolio.skills.map(s => `
          <!-- Skill Badge -->
          <div class="bg-slate-50 border border-slate-100 rounded-xl p-4 flex items-center justify-between shadow-2xs hover:shadow-xs transition-shadow">
            <span class="text-sm font-semibold text-slate-800">${s.name}</span>
            <span class="text-xs font-mono text-indigo-600 font-bold bg-indigo-50 border border-indigo-100 px-2 py-0.5 rounded-md">${s.level}%</span>
          </div>`).join('\n');

    return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${portfolio.name} - ${portfolio.title}</title>
  <!-- Tailwind CSS CDN -->
  <script src="https://cdn.tailwindcss.com"></script>
  <!-- Google Fonts -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet">
  <style>
    body {
      font-family: 'Inter', sans-serif;
    }
    .heading-font {
      font-family: 'Space Grotesk', sans-serif;
    }
  </style>
</head>
<body class="bg-slate-50/50 text-slate-800 antialiased selection:bg-indigo-500 selection:text-white">

  <!-- Header / Navigation -->
  <header class="sticky top-0 z-50 backdrop-blur-md bg-white/75 border-b border-slate-100">
    <div class="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
      <a href="#" class="heading-font text-xl font-bold tracking-tight text-slate-900 flex items-center gap-2">
        <span class="w-8 h-8 rounded-lg bg-indigo-600 flex items-center justify-center text-white text-sm font-extrabold shadow-sm">${portfolio.name[0]}</span>
        <span>${portfolio.name}</span>
      </a>
      <nav class="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
        <a href="#about" class="hover:text-slate-950 transition-colors">About</a>
        <a href="#skills" class="hover:text-slate-950 transition-colors">Skills</a>
        <a href="#projects" class="hover:text-slate-950 transition-colors">Projects</a>
        <a href="#experience" class="hover:text-slate-950 transition-colors">Experience</a>
        <a href="#contact" class="hover:text-slate-950 transition-colors">Contact</a>
      </nav>
      <a href="#contact" class="bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-semibold px-4 py-2.5 rounded-lg shadow-sm transition-all flex items-center gap-1.5">
        <span>Get in Touch</span>
        <svg class="w-3 h-3" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
      </a>
    </div>
  </header>

  <!-- Hero Section -->
  <section class="relative py-24 md:py-32 overflow-hidden border-b border-slate-100 bg-white">
    <div class="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-30"></div>
    <div class="max-w-4xl mx-auto px-6 text-center relative z-10">
      <div class="inline-flex items-center gap-1.5 bg-indigo-50 border border-indigo-100 rounded-full px-3 py-1 text-xs text-indigo-700 font-medium mb-6">
        <svg class="w-3 h-3 animate-pulse text-indigo-500" fill="currentColor" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/></svg>
        <span>Available for New Projects</span>
      </div>
      <h1 class="heading-font text-4xl sm:text-5xl md:text-6xl font-bold text-slate-900 tracking-tight leading-none mb-6">
        Hi, I'm <span class="text-indigo-600">${portfolio.name}</span>
      </h1>
      <p class="heading-font text-xl sm:text-2xl font-medium text-slate-700 max-w-2xl mx-auto mb-6 leading-normal">
        ${portfolio.title}
      </p>
      <p class="text-base text-slate-500 max-w-xl mx-auto mb-10 leading-relaxed">
        ${portfolio.subtitle}
      </p>
      <div class="flex flex-col sm:flex-row items-center justify-center gap-4">
        <a href="#projects" class="w-full sm:w-auto bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-semibold px-6 py-3.5 rounded-xl shadow-xs transition-colors">View My Work</a>
        <a href="#contact" class="w-full sm:w-auto bg-slate-50 hover:bg-slate-100 text-slate-900 text-sm font-semibold px-6 py-3.5 rounded-xl border border-slate-200 transition-colors">Let's Connect</a>
      </div>
    </div>
  </section>

  <!-- About Section -->
  <section id="about" class="py-24 max-w-6xl mx-auto px-6">
    <div class="grid md:grid-cols-12 gap-12 items-center">
      <div class="md:col-span-5 flex justify-center">
        <div class="relative">
          <div class="absolute inset-0 bg-indigo-600/10 rounded-3xl transform rotate-3 scale-105"></div>
          <img src="${portfolio.avatarUrl}" alt="${portfolio.name}" class="relative z-10 w-64 h-64 md:w-80 md:h-80 object-cover rounded-3xl border border-slate-100 shadow-sm" referrerpolicy="no-referrer">
        </div>
      </div>
      <div class="md:col-span-7">
        <span class="text-xs font-bold uppercase tracking-widest text-indigo-600 mb-2 block">ABOUT ME</span>
        <h2 class="heading-font text-3xl font-bold text-slate-900 mb-6">Designing products with purpose, building software to last.</h2>
        <p class="text-slate-600 text-base leading-relaxed mb-4">${portfolio.bio}</p>
        <p class="text-slate-600 text-base leading-relaxed mb-6">${portfolio.detailedBio}</p>
        <div class="flex items-center gap-4">
          <span class="text-sm font-semibold text-slate-900 flex items-center gap-1.5"><svg class="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>${portfolio.location}</span>
          <span class="text-slate-300">|</span>
          <span class="text-sm font-semibold text-slate-900 flex items-center gap-1.5"><svg class="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><path d="M22 6l-10 7L2 6"/></svg>${portfolio.email}</span>
        </div>
      </div>
    </div>
  </section>

  <!-- Skills Section -->
  <section id="skills" class="py-24 bg-white border-y border-slate-100">
    <div class="max-w-6xl mx-auto px-6">
      <div class="text-center max-w-2xl mx-auto mb-16">
        <span class="text-xs font-bold uppercase tracking-widest text-indigo-600 mb-2 block">EXPERTISE</span>
        <h2 class="heading-font text-3xl font-bold text-slate-900 mb-4">Core Skills & Specialties</h2>
        <p class="text-sm text-slate-500 leading-relaxed">Here are the key platforms, tools, frameworks, and workflows that represent my daily workspace.</p>
      </div>
      <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
        ${skillsHTML}
      </div>
    </div>
  </section>

  <!-- Projects Section -->
  <section id="projects" class="py-24 bg-slate-50/50">
    <div class="max-w-6xl mx-auto px-6">
      <div class="text-center max-w-2xl mx-auto mb-16">
        <span class="text-xs font-bold uppercase tracking-widest text-indigo-600 mb-2 block">PORTFOLIO</span>
        <h2 class="heading-font text-3xl font-bold text-slate-900 mb-4">Featured Projects</h2>
        <p class="text-sm text-slate-500 leading-relaxed">A handpicked collection of applications, interfaces, and branding campaigns built to solve real-world problems.</p>
      </div>
      <div class="grid md:grid-cols-2 gap-8">
        ${featuredProjects}
      </div>
    </div>
  </section>

  <!-- Experience Section -->
  <section id="experience" class="py-24 bg-white border-y border-slate-100">
    <div class="max-w-4xl mx-auto px-6">
      <div class="text-center max-w-2xl mx-auto mb-16">
        <span class="text-xs font-bold uppercase tracking-widest text-indigo-600 mb-2 block">HISTORY</span>
        <h2 class="heading-font text-3xl font-bold text-slate-900 mb-4">Experience & Timeline</h2>
        <p class="text-sm text-slate-500 leading-relaxed">My professional career milestones, academic highlights, and awards archive.</p>
      </div>
      <div class="relative">
        ${timelineHTML}
      </div>
    </div>
  </section>

  <!-- Contact Section -->
  <section id="contact" class="py-24 max-w-4xl mx-auto px-6">
    <div class="bg-white rounded-3xl border border-slate-100 shadow-xs p-8 md:p-12">
      <div class="text-center max-w-xl mx-auto mb-10">
        <span class="text-xs font-bold uppercase tracking-widest text-indigo-600 mb-2 block">GET IN TOUCH</span>
        <h2 class="heading-font text-2xl md:text-3xl font-bold text-slate-900 mb-4">Let's work together</h2>
        <p class="text-slate-500 text-sm leading-relaxed">Have an exciting vision, project, or role? Shoot me a message, and I will get back to you within 24 hours.</p>
      </div>
      <form class="space-y-6" onsubmit="event.preventDefault(); alert('Message Sent! This is a single-file static portfolio template preview.');">
        <div class="grid sm:grid-cols-2 gap-6">
          <div>
            <label class="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-2">Name</label>
            <input type="text" required class="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-hidden focus:ring-2 focus:ring-indigo-600/20 focus:border-indigo-600 text-sm" placeholder="Your name">
          </div>
          <div>
            <label class="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-2">Email Address</label>
            <input type="email" required class="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-hidden focus:ring-2 focus:ring-indigo-600/20 focus:border-indigo-600 text-sm" placeholder="you@example.com">
          </div>
        </div>
        <div>
          <label class="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-2">Your Message</label>
          <textarea required rows="4" class="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-hidden focus:ring-2 focus:ring-indigo-600/20 focus:border-indigo-600 text-sm" placeholder="Tell me about your project..."></textarea>
        </div>
        <button type="submit" class="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold text-sm py-4 rounded-xl shadow-sm transition-colors">Send Message</button>
      </form>
    </div>
  </section>

  <!-- Footer -->
  <footer class="bg-slate-900 text-slate-400 py-12 border-t border-slate-800">
    <div class="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
      <div class="text-center md:text-left">
        <h3 class="heading-font text-white font-bold text-lg mb-1">${portfolio.name}</h3>
        <p class="text-xs text-slate-500">${portfolio.title}</p>
      </div>
      <div class="flex items-center gap-4">
        ${portfolio.socials.github ? `<a href="${portfolio.socials.github}" target="_blank" class="hover:text-white transition-colors"><svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.9-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.9 1.52 2.34 1.07 2.91.83.1-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z"/></svg></a>` : ''}
        ${portfolio.socials.linkedin ? `<a href="${portfolio.socials.linkedin}" target="_blank" class="hover:text-white transition-colors"><svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg></a>` : ''}
        ${portfolio.socials.twitter ? `<a href="${portfolio.socials.twitter}" target="_blank" class="hover:text-white transition-colors"><svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/></svg></a>` : ''}
      </div>
      <p class="text-xs text-slate-500">© 2026 ${portfolio.name}. All rights reserved.</p>
    </div>
  </footer>

</body>
</html>`;
  };

  const handleCopyCode = () => {
    navigator.clipboard.writeText(generateHTMLCode());
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDownloadCode = () => {
    const blob = new Blob([generateHTMLCode()], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `${portfolio.name.toLowerCase().replace(/\s+/g, '-')}-portfolio.html`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <div className={`min-h-screen bg-slate-50 text-slate-800 flex ${getFontClass()} antialiased selection:bg-slate-200 transition-colors duration-300`}>
      
      {/* LEFT/SIDEBAR: THE CONTROLLER (Interactive Live Customizer) */}
      <AnimatePresence>
        {isCustomizeOpen && (
          <motion.aside
            initial={{ width: 0, opacity: 0 }}
            animate={{ width: 440, opacity: 1 }}
            exit={{ width: 0, opacity: 0 }}
            transition={{ type: 'spring', stiffness: 260, damping: 28 }}
            className="hidden lg:flex flex-col bg-white border-r border-slate-200 h-screen sticky top-0 z-40 overflow-hidden shadow-xl"
          >
            {/* Control Panel Header */}
            <div className="p-5 border-b border-slate-100 flex items-center justify-between bg-slate-50/50">
              <div className="flex items-center gap-2">
                <Sliders className="w-5 h-5 text-slate-700" />
                <h2 className="font-display font-bold text-lg text-slate-900 tracking-tight">Live Portfolio Builder</h2>
              </div>
              <button 
                onClick={() => setIsCustomizeOpen(false)}
                className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-all"
                title="Collapse Panel"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Presets Row */}
            <div className="p-4 border-b border-slate-100 bg-slate-50/20">
              <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-2">Portfolio Blueprint Presets</label>
              <div className="grid grid-cols-3 gap-1.5">
                {(Object.keys(presets) as Array<keyof typeof presets>).map(presetKey => (
                  <button
                    key={presetKey}
                    onClick={() => setActivePreset(presetKey)}
                    className={`px-3 py-2 text-xs font-semibold rounded-lg text-center transition-all ${
                      activePreset === presetKey 
                        ? 'bg-slate-900 text-white shadow-xs' 
                        : 'bg-white border border-slate-200 text-slate-600 hover:bg-slate-50'
                    }`}
                  >
                    {presetKey === 'developer' ? 'Developer' : presetKey === 'designer' ? 'Designer' : 'AI Specialist'}
                  </button>
                ))}
              </div>
            </div>

            {/* Sidebar Navigation Tabs */}
            <div className="flex border-b border-slate-100 bg-slate-50/40 px-2 overflow-x-auto scrollbar-none">
              {(['profile', 'skills', 'projects', 'experience', 'theme'] as const).map(tab => (
                <button
                  key={tab}
                  onClick={() => setSelectedTab(tab)}
                  className={`px-4 py-3 text-xs font-bold capitalize border-b-2 transition-all shrink-0 ${
                    selectedTab === tab 
                      ? `${colors.text} ${selectedColor.borderClass} border-b-2` 
                      : 'border-transparent text-slate-500 hover:text-slate-800'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            {/* Config Panel Body (Scrollable form) */}
            <div className="flex-1 overflow-y-auto p-5 space-y-6">
              
              {/* TAB: PROFILE DETAILS */}
              {selectedTab === 'profile' && (
                <div className="space-y-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-500 mb-1">Your Full Name</label>
                    <input 
                      type="text" 
                      value={portfolio.name}
                      onChange={(e) => handleProfileChange('name', e.target.value)}
                      className={`w-full px-3 py-2 text-sm rounded-lg border border-slate-200 focus:outline-hidden ${colors.focus} bg-slate-50/50`}
                      placeholder="Jane Doe"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-500 mb-1">Professional Title</label>
                    <input 
                      type="text" 
                      value={portfolio.title}
                      onChange={(e) => handleProfileChange('title', e.target.value)}
                      className={`w-full px-3 py-2 text-sm rounded-lg border border-slate-200 focus:outline-hidden ${colors.focus} bg-slate-50/50`}
                      placeholder="UI/UX Designer"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-500 mb-1">Catchy Tagline / Subtitle</label>
                    <textarea 
                      rows={2}
                      value={portfolio.subtitle}
                      onChange={(e) => handleProfileChange('subtitle', e.target.value)}
                      className={`w-full px-3 py-2 text-sm rounded-lg border border-slate-200 focus:outline-hidden ${colors.focus} bg-slate-50/50`}
                      placeholder="A short punchy subtext shown in your main hero section."
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-500 mb-1">Quick Bio summary</label>
                    <textarea 
                      rows={3}
                      value={portfolio.bio}
                      onChange={(e) => handleProfileChange('bio', e.target.value)}
                      className={`w-full px-3 py-2 text-sm rounded-lg border border-slate-200 focus:outline-hidden ${colors.focus} bg-slate-50/50`}
                      placeholder="One-to-two sentence executive introduction."
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-500 mb-1">Detailed About Me</label>
                    <textarea 
                      rows={4}
                      value={portfolio.detailedBio}
                      onChange={(e) => handleProfileChange('detailedBio', e.target.value)}
                      className={`w-full px-3 py-2 text-sm rounded-lg border border-slate-200 focus:outline-hidden ${colors.focus} bg-slate-50/50`}
                      placeholder="A deeper dive describing your journey, passion, design principles, or technical values."
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-bold text-slate-500 mb-1">Location</label>
                      <input 
                        type="text" 
                        value={portfolio.location}
                        onChange={(e) => handleProfileChange('location', e.target.value)}
                        className={`w-full px-3 py-2 text-sm rounded-lg border border-slate-200 focus:outline-hidden ${colors.focus} bg-slate-50/50`}
                        placeholder="Paris, France"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-500 mb-1">Contact Email</label>
                      <input 
                        type="email" 
                        value={portfolio.email}
                        onChange={(e) => handleProfileChange('email', e.target.value)}
                        className={`w-full px-3 py-2 text-sm rounded-lg border border-slate-200 focus:outline-hidden ${colors.focus} bg-slate-50/50`}
                        placeholder="hello@domain.com"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-500 mb-1">Avatar / Image URL</label>
                    <input 
                      type="text" 
                      value={portfolio.avatarUrl}
                      onChange={(e) => handleProfileChange('avatarUrl', e.target.value)}
                      className={`w-full px-3 py-2 text-sm rounded-lg border border-slate-200 focus:outline-hidden ${colors.focus} bg-slate-50/50`}
                      placeholder="Avatar image URL"
                    />
                  </div>

                  {/* Social Links Sub-section */}
                  <div className="border-t border-slate-100 pt-4 mt-4">
                    <h3 className="text-xs font-extrabold uppercase tracking-widest text-slate-400 mb-3">Social Networks</h3>
                    <div className="space-y-3">
                      <div>
                        <label className="block text-xs text-slate-500 mb-1">GitHub Profile Link</label>
                        <input 
                          type="text" 
                          value={portfolio.socials.github || ''}
                          onChange={(e) => handleSocialsChange('github', e.target.value)}
                          className={`w-full px-3 py-2 text-sm rounded-lg border border-slate-200 focus:outline-hidden ${colors.focus} bg-slate-50/50`}
                          placeholder="https://github.com/your-username"
                        />
                      </div>
                      <div>
                        <label className="block text-xs text-slate-500 mb-1">LinkedIn Profile Link</label>
                        <input 
                          type="text" 
                          value={portfolio.socials.linkedin || ''}
                          onChange={(e) => handleSocialsChange('linkedin', e.target.value)}
                          className={`w-full px-3 py-2 text-sm rounded-lg border border-slate-200 focus:outline-hidden ${colors.focus} bg-slate-50/50`}
                          placeholder="https://linkedin.com/in/username"
                        />
                      </div>
                      <div>
                        <label className="block text-xs text-slate-500 mb-1">Twitter / X Link</label>
                        <input 
                          type="text" 
                          value={portfolio.socials.twitter || ''}
                          onChange={(e) => handleSocialsChange('twitter', e.target.value)}
                          className={`w-full px-3 py-2 text-sm rounded-lg border border-slate-200 focus:outline-hidden ${colors.focus} bg-slate-50/50`}
                          placeholder="https://twitter.com/handle"
                        />
                      </div>
                      <div>
                        <label className="block text-xs text-slate-500 mb-1">Dribbble Profile Link</label>
                        <input 
                          type="text" 
                          value={portfolio.socials.dribbble || ''}
                          onChange={(e) => handleSocialsChange('dribbble', e.target.value)}
                          className={`w-full px-3 py-2 text-sm rounded-lg border border-slate-200 focus:outline-hidden ${colors.focus} bg-slate-50/50`}
                          placeholder="https://dribbble.com/handle"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* TAB: SKILLS */}
              {selectedTab === 'skills' && (
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest">Manage Skills</h3>
                    <button 
                      onClick={handleAddSkill}
                      className={`text-xs font-semibold px-2.5 py-1.5 rounded-lg flex items-center gap-1 text-white ${selectedColor.class}`}
                    >
                      <Plus className="w-3.5 h-3.5" /> Add Skill
                    </button>
                  </div>

                  <div className="space-y-3.5 max-h-[50vh] overflow-y-auto pr-1">
                    {portfolio.skills.map((skill, index) => (
                      <div key={index} className="p-3 bg-slate-50 rounded-xl border border-slate-100 space-y-2 relative group/skill">
                        <button
                          onClick={() => handleRemoveSkill(index)}
                          className="absolute top-2 right-2 text-slate-300 hover:text-rose-600 p-1 rounded-md hover:bg-slate-100 transition-all opacity-0 group-hover/skill:opacity-100"
                          title="Remove Skill"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                        <div className="grid grid-cols-2 gap-2">
                          <div>
                            <label className="block text-[10px] font-bold text-slate-400 uppercase">Skill Name</label>
                            <input 
                              type="text" 
                              value={skill.name}
                              onChange={(e) => handleUpdateSkill(index, 'name', e.target.value)}
                              className="w-full px-2 py-1 text-xs rounded border border-slate-200 bg-white"
                            />
                          </div>
                          <div>
                            <label className="block text-[10px] font-bold text-slate-400 uppercase">Category Tag</label>
                            <input 
                              type="text" 
                              value={skill.category}
                              onChange={(e) => handleUpdateSkill(index, 'category', e.target.value)}
                              className="w-full px-2 py-1 text-xs rounded border border-slate-200 bg-white"
                            />
                          </div>
                        </div>
                        <div>
                          <div className="flex items-center justify-between mb-1">
                            <span className="text-[10px] font-bold text-slate-400 uppercase">Proficiency level</span>
                            <span className="text-xs font-mono font-bold text-slate-600">{skill.level}%</span>
                          </div>
                          <input 
                            type="range" 
                            min="10" 
                            max="100" 
                            step="5"
                            value={skill.level}
                            onChange={(e) => handleUpdateSkill(index, 'level', parseInt(e.target.value))}
                            className="w-full h-1.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-slate-800"
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* TAB: PROJECTS */}
              {selectedTab === 'projects' && (
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest">Manage Projects</h3>
                    <button 
                      onClick={handleAddProject}
                      className={`text-xs font-semibold px-2.5 py-1.5 rounded-lg flex items-center gap-1 text-white ${selectedColor.class}`}
                    >
                      <Plus className="w-3.5 h-3.5" /> Add Project
                    </button>
                  </div>

                  <div className="space-y-4 max-h-[50vh] overflow-y-auto pr-1">
                    {portfolio.projects.map((project) => (
                      <div key={project.id} className="p-4.5 bg-slate-50 rounded-2xl border border-slate-100 space-y-3 relative group/proj">
                        <div className="flex items-center justify-between border-b border-slate-200/50 pb-2 mb-2">
                          <span className="text-xs font-extrabold text-slate-800 font-display">Project Settings</span>
                          <button
                            onClick={() => handleRemoveProject(project.id)}
                            className="text-slate-300 hover:text-rose-600 p-1.5 rounded-lg hover:bg-white transition-all opacity-0 group-hover/proj:opacity-100"
                            title="Delete Project"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>

                        <div className="grid grid-cols-2 gap-2">
                          <div>
                            <label className="block text-[10px] font-bold text-slate-400 uppercase">Project Title</label>
                            <input 
                              type="text" 
                              value={project.title}
                              onChange={(e) => handleUpdateProject(project.id, 'title', e.target.value)}
                              className="w-full px-2 py-1.5 text-xs rounded border border-slate-200 bg-white"
                            />
                          </div>
                          <div>
                            <label className="block text-[10px] font-bold text-slate-400 uppercase">Category</label>
                            <input 
                              type="text" 
                              value={project.category}
                              onChange={(e) => handleUpdateProject(project.id, 'category', e.target.value)}
                              className="w-full px-2 py-1.5 text-xs rounded border border-slate-200 bg-white"
                            />
                          </div>
                        </div>

                        <div>
                          <label className="block text-[10px] font-bold text-slate-400 uppercase">Thumbnail Image URL</label>
                          <input 
                            type="text" 
                            value={project.imageUrl}
                            onChange={(e) => handleUpdateProject(project.id, 'imageUrl', e.target.value)}
                            className="w-full px-2 py-1.5 text-xs rounded border border-slate-200 bg-white"
                          />
                        </div>

                        <div>
                          <label className="block text-[10px] font-bold text-slate-400 uppercase">Short Description (Preview text)</label>
                          <textarea 
                            rows={2}
                            value={project.shortDescription}
                            onChange={(e) => handleUpdateProject(project.id, 'shortDescription', e.target.value)}
                            className="w-full px-2 py-1.5 text-xs rounded border border-slate-200 bg-white"
                          />
                        </div>

                        <div>
                          <label className="block text-[10px] font-bold text-slate-400 uppercase">Tech Tags (comma separated)</label>
                          <input 
                            type="text" 
                            value={project.tags.join(', ')}
                            onChange={(e) => handleUpdateProjectTags(project.id, e.target.value)}
                            className="w-full px-2 py-1.5 text-xs rounded border border-slate-200 bg-white"
                            placeholder="React, TypeScript, Redux"
                          />
                        </div>

                        <div className="grid grid-cols-2 gap-2">
                          <div>
                            <label className="block text-[10px] font-bold text-slate-400 uppercase">Live Demo URL</label>
                            <input 
                              type="text" 
                              value={project.liveUrl || ''}
                              onChange={(e) => handleUpdateProject(project.id, 'liveUrl', e.target.value)}
                              className="w-full px-2 py-1.5 text-xs rounded border border-slate-200 bg-white"
                            />
                          </div>
                          <div>
                            <label className="block text-[10px] font-bold text-slate-400 uppercase">Source Code URL</label>
                            <input 
                              type="text" 
                              value={project.githubUrl || ''}
                              onChange={(e) => handleUpdateProject(project.id, 'githubUrl', e.target.value)}
                              className="w-full px-2 py-1.5 text-xs rounded border border-slate-200 bg-white"
                            />
                          </div>
                        </div>

                        <div className="flex items-center gap-2">
                          <input 
                            type="checkbox" 
                            id={`featured-${project.id}`}
                            checked={project.featured}
                            onChange={(e) => handleUpdateProject(project.id, 'featured', e.target.checked)}
                            className="rounded border-slate-300 text-indigo-600 focus:ring-indigo-500"
                          />
                          <label htmlFor={`featured-${project.id}`} className="text-xs font-semibold text-slate-600 select-none">Feature this project on top</label>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* TAB: EXPERIENCE */}
              {selectedTab === 'experience' && (
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest">Work & Education History</h3>
                    <button 
                      onClick={handleAddExperience}
                      className={`text-xs font-semibold px-2.5 py-1.5 rounded-lg flex items-center gap-1 text-white ${selectedColor.class}`}
                    >
                      <Plus className="w-3.5 h-3.5" /> Add Milestone
                    </button>
                  </div>

                  <div className="space-y-4 max-h-[50vh] overflow-y-auto pr-1">
                    {portfolio.experience.map((exp) => (
                      <div key={exp.id} className="p-4 bg-slate-50 rounded-2xl border border-slate-100 space-y-3 relative group/exp">
                        <button
                          onClick={() => handleRemoveExperience(exp.id)}
                          className="absolute top-2 right-2 text-slate-300 hover:text-rose-600 p-1 rounded-md hover:bg-slate-100 transition-all opacity-0 group-hover/exp:opacity-100"
                          title="Remove Milestone"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>

                        <div className="grid grid-cols-2 gap-2">
                          <div>
                            <label className="block text-[10px] font-bold text-slate-400 uppercase">Title / Role</label>
                            <input 
                              type="text" 
                              value={exp.title}
                              onChange={(e) => handleUpdateExperience(exp.id, 'title', e.target.value)}
                              className="w-full px-2 py-1 text-xs rounded border border-slate-200 bg-white"
                            />
                          </div>
                          <div>
                            <label className="block text-[10px] font-bold text-slate-400 uppercase">Subtitle / Company</label>
                            <input 
                              type="text" 
                              value={exp.subtitle}
                              onChange={(e) => handleUpdateExperience(exp.id, 'subtitle', e.target.value)}
                              className="w-full px-2 py-1 text-xs rounded border border-slate-200 bg-white"
                            />
                          </div>
                        </div>

                        <div className="grid grid-cols-2 gap-2">
                          <div>
                            <label className="block text-[10px] font-bold text-slate-400 uppercase">Period (e.g., 2021-2023)</label>
                            <input 
                              type="text" 
                              value={exp.period}
                              onChange={(e) => handleUpdateExperience(exp.id, 'period', e.target.value)}
                              className="w-full px-2 py-1 text-xs rounded border border-slate-200 bg-white"
                            />
                          </div>
                          <div>
                            <label className="block text-[10px] font-bold text-slate-400 uppercase">Milestone Type</label>
                            <select 
                              value={exp.type}
                              onChange={(e) => handleUpdateExperience(exp.id, 'type', e.target.value)}
                              className="w-full px-2 py-1.5 text-xs rounded border border-slate-200 bg-white"
                            >
                              <option value="work">Work Experience</option>
                              <option value="education">Education</option>
                              <option value="award">Award / Honorship</option>
                            </select>
                          </div>
                        </div>

                        <div>
                          <label className="block text-[10px] font-bold text-slate-400 uppercase">Describe your work/milestone</label>
                          <textarea 
                            rows={3}
                            value={exp.description}
                            onChange={(e) => handleUpdateExperience(exp.id, 'description', e.target.value)}
                            className="w-full px-2 py-1 text-xs rounded border border-slate-200 bg-white"
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* TAB: STYLE & THEME */}
              {selectedTab === 'theme' && (
                <div className="space-y-6">
                  {/* Color Palette Choice */}
                  <div>
                    <h3 className="text-xs font-extrabold text-slate-400 uppercase tracking-widest mb-3 flex items-center gap-1.5">
                      <Palette className="w-3.5 h-3.5 text-slate-500" /> Choose Accent Color
                    </h3>
                    <div className="grid grid-cols-2 gap-2">
                      {defaultColors.map((color) => (
                        <button
                          key={color.name}
                          onClick={() => setSelectedColor(color)}
                          className={`p-2.5 rounded-xl border text-left flex items-center justify-between transition-all ${
                            selectedColor.name === color.name
                              ? 'border-slate-800 bg-slate-50 font-semibold shadow-xs'
                              : 'border-slate-200 bg-white hover:bg-slate-50'
                          }`}
                        >
                          <span className="text-xs text-slate-700">{color.name}</span>
                          <span className={`w-3.5 h-3.5 rounded-full ${color.class.split(' ')[0]}`}></span>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Typography Pairing */}
                  <div className="border-t border-slate-100 pt-5">
                    <h3 className="text-xs font-extrabold text-slate-400 uppercase tracking-widest mb-3 flex items-center gap-1.5">
                      <Code className="w-3.5 h-3.5 text-slate-500" /> Font Hierarchy Pairings
                    </h3>
                    <div className="space-y-2">
                      {[
                        { id: 'display', name: 'Tech Display & Clean Sans', desc: 'Space Grotesk + Inter', font: 'font-display' },
                        { id: 'sans', name: 'Universal Modern Minimalist', desc: 'Inter + Inter', font: 'font-sans' },
                        { id: 'serif', name: 'Bespoke Editorial & Serif', desc: 'Playfair Display + Inter', font: 'font-serif' }
                      ].map((fontSet) => (
                        <button
                          key={fontSet.id}
                          onClick={() => setSelectedFont(fontSet.id as any)}
                          className={`w-full p-3 rounded-xl border text-left flex flex-col transition-all ${
                            selectedFont === fontSet.id
                              ? 'border-slate-800 bg-slate-50 shadow-2xs'
                              : 'border-slate-200 bg-white hover:bg-slate-50'
                          }`}
                        >
                          <span className={`text-sm font-semibold text-slate-800 ${fontSet.font}`}>{fontSet.name}</span>
                          <span className="text-[11px] text-slate-500 mt-0.5">{fontSet.desc}</span>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Quick helper tip */}
                  <div className="p-3.5 rounded-xl bg-indigo-50/50 border border-indigo-100 text-[11px] text-indigo-800 leading-relaxed flex gap-2">
                    <Info className="w-4 h-4 text-indigo-500 shrink-0 mt-0.5" />
                    <span>Styling modifications apply in real-time. Use the export tool to save your changes to a clean single-file static portfolio.</span>
                  </div>
                </div>
              )}

            </div>

            {/* Customizer Sticky Export Footer */}
            <div className="p-5 border-t border-slate-100 bg-slate-50/50 flex flex-col gap-2">
              <button 
                onClick={() => setIsExportOpen(true)}
                className={`w-full py-3 px-4 rounded-xl font-semibold text-sm text-white flex items-center justify-center gap-2 shadow-xs hover:shadow-md transition-all ${selectedColor.class}`}
              >
                <FileCode className="w-4 h-4" /> Export Single-File HTML
              </button>
              <div className="flex justify-between items-center text-[10px] text-slate-400 px-1 mt-1">
                <span>Tailwind CSS v4 Integration</span>
                <span>Responsive & Multi-Device</span>
              </div>
            </div>
          </motion.aside>
        )}
      </AnimatePresence>

      {/* RIGHT SIDE: LIVE PREVIEW & INTERACTIVE WEBSITE */}
      <main className="flex-1 min-h-screen overflow-y-auto relative bg-slate-50/30">
        
        {/* Floating Customizer Control Trigger */}
        <div className="fixed top-4 right-4 z-50 flex items-center gap-2">
          {!isCustomizeOpen && (
            <button
              onClick={() => setIsCustomizeOpen(true)}
              className="bg-slate-900 text-white p-3 rounded-xl shadow-lg hover:bg-slate-800 transition-all flex items-center gap-2 text-xs font-bold font-display"
              title="Open Portfolio Editor"
            >
              <Sliders className="w-4 h-4 animate-bounce" /> Customize Profile
            </button>
          )}

          <button
            onClick={() => setIsExportOpen(true)}
            className="bg-white border border-slate-200 text-slate-800 p-3 rounded-xl shadow-md hover:bg-slate-50 transition-all flex items-center gap-2 text-xs font-bold font-display"
            title="Download HTML file"
          >
            <Download className="w-4 h-4 text-slate-600" /> Export File
          </button>
        </div>

        {/* --- LIVE PORTFOLIO PREVIEW WRAPPER --- */}
        <div className="max-w-4xl mx-auto px-6 py-12 md:py-20 space-y-24">
          
          {/* Header Branding Row inside preview */}
          <header className="flex items-center justify-between pb-6 border-b border-slate-200/50">
            <div className="flex items-center gap-2.5">
              <span className={`w-9 h-9 rounded-xl ${colors.bg} flex items-center justify-center text-white text-sm font-extrabold shadow-xs`}>
                {portfolio.name[0]}
              </span>
              <span className="font-display font-bold text-lg text-slate-900 tracking-tight">{portfolio.name}</span>
            </div>
            
            {/* Quick social bar */}
            <div className="flex items-center gap-3">
              {portfolio.socials.github && (
                <a href={portfolio.socials.github} target="_blank" className="text-slate-400 hover:text-slate-800 transition-colors">
                  <Github className="w-4.5 h-4.5" />
                </a>
              )}
              {portfolio.socials.linkedin && (
                <a href={portfolio.socials.linkedin} target="_blank" className="text-slate-400 hover:text-slate-800 transition-colors">
                  <Linkedin className="w-4.5 h-4.5" />
                </a>
              )}
              {portfolio.socials.twitter && (
                <a href={portfolio.socials.twitter} target="_blank" className="text-slate-400 hover:text-slate-800 transition-colors">
                  <Twitter className="w-4.5 h-4.5" />
                </a>
              )}
              {portfolio.socials.dribbble && (
                <a href={portfolio.socials.dribbble} target="_blank" className="text-slate-400 hover:text-slate-800 transition-colors">
                  <Dribbble className="w-4.5 h-4.5" />
                </a>
              )}
            </div>
          </header>

          {/* SECTION 1: HERO */}
          <section className="relative overflow-hidden py-4">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-1.5 bg-slate-100 border border-slate-200/50 rounded-full px-3 py-1 text-[11px] text-slate-600 font-medium">
                <span className={`w-1.5 h-1.5 rounded-full ${colors.bg} animate-pulse`}></span>
                <span>Open for freelance gigs & collaborations</span>
              </div>
              
              <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-slate-900 leading-[1.05]">
                Designing products. <br />
                Building <span className={`${colors.text}`}>{portfolio.name}</span>.
              </h1>

              <p className="font-display text-lg sm:text-xl font-medium text-slate-600 max-w-2xl leading-normal">
                {portfolio.title}
              </p>

              <p className="text-sm md:text-base text-slate-400 max-w-xl leading-relaxed">
                {portfolio.subtitle}
              </p>

              <div className="flex flex-wrap items-center gap-3.5 pt-4">
                <a 
                  href="#contact" 
                  className={`px-5 py-3 rounded-xl font-semibold text-xs text-white shadow-xs transition-colors ${colors.bg}`}
                >
                  Let's Work Together
                </a>
                <a 
                  href="#projects" 
                  className="px-5 py-3 rounded-xl font-semibold text-xs text-slate-800 bg-white hover:bg-slate-50 border border-slate-200 shadow-3xs transition-colors"
                >
                  View Featured Work
                </a>
              </div>
            </div>
          </section>

          {/* SECTION 2: BENTO ABOUT ME */}
          <section id="about" className="grid md:grid-cols-12 gap-8 items-stretch pt-6">
            <div className="md:col-span-5 bg-white border border-slate-200/70 rounded-3xl p-6 flex flex-col justify-center items-center text-center shadow-3xs relative overflow-hidden">
              <div className="absolute inset-0 bg-radial from-slate-50 via-white to-white z-0"></div>
              
              <div className="relative z-10 space-y-4">
                <div className="relative w-36 h-36 mx-auto rounded-full p-1 border-2 border-slate-100">
                  <img 
                    src={portfolio.avatarUrl} 
                    alt={portfolio.name} 
                    className="w-full h-full rounded-full object-cover shadow-sm"
                    referrerPolicy="no-referrer"
                  />
                  <div className={`absolute bottom-1 right-2 w-4 h-4 rounded-full border-2 border-white ${colors.bg}`}></div>
                </div>

                <div>
                  <h3 className="font-display font-bold text-lg text-slate-900">{portfolio.name}</h3>
                  <p className="text-xs text-slate-400 mt-0.5 flex items-center justify-center gap-1">
                    <MapPin className="w-3 h-3" /> {portfolio.location}
                  </p>
                </div>
              </div>
            </div>

            <div className="md:col-span-7 bg-white border border-slate-200/70 rounded-3xl p-8 flex flex-col justify-between shadow-3xs">
              <div className="space-y-4">
                <span className={`text-[10px] font-bold uppercase tracking-widest ${colors.text}`}>Biography</span>
                <h3 className="font-display text-xl font-bold text-slate-900">Engineering meets human-centric design.</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{portfolio.bio}</p>
                <p className="text-sm text-slate-500 leading-relaxed">{portfolio.detailedBio}</p>
              </div>

              <div className="border-t border-slate-100 pt-5 mt-6 flex items-center justify-between text-xs font-semibold text-slate-800">
                <div className="flex items-center gap-1.5">
                  <Mail className="w-4 h-4 text-slate-400" />
                  <span>{portfolio.email}</span>
                </div>
                <a 
                  href={`mailto:${portfolio.email}`}
                  className={`text-xs font-bold flex items-center gap-1 ${colors.text} ${colors.hover}`}
                >
                  Write Email <ChevronRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </section>

          {/* SECTION 3: SKILLS BADGES */}
          <section id="skills" className="space-y-8">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
              <div className="space-y-1">
                <span className={`text-[10px] font-bold uppercase tracking-widest ${colors.text}`}>Expertise</span>
                <h2 className="font-display text-2xl font-bold text-slate-900">Skills & Tech Stack</h2>
              </div>
              <p className="text-xs text-slate-400 max-w-sm">
                Each skill percentage reflects continuous hands-on architectural experience over professional cycles.
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3.5">
              {portfolio.skills.map((skill, index) => (
                <div 
                  key={index}
                  className="bg-white border border-slate-200/60 rounded-xl p-4 flex items-center justify-between shadow-2xs hover:shadow-xs transition-shadow"
                >
                  <div className="space-y-1">
                    <span className="text-xs font-bold text-slate-800">{skill.name}</span>
                    <span className="block text-[9px] uppercase tracking-wider text-slate-400 font-semibold">{skill.category}</span>
                  </div>
                  <span className={`text-[10px] font-mono font-bold px-2 py-0.5 rounded-md ${colors.badge}`}>
                    {skill.level}%
                  </span>
                </div>
              ))}
            </div>
          </section>

          {/* SECTION 4: PROJECTS FILTER & GALLERY */}
          <section id="projects" className="space-y-8">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
              <div className="space-y-1">
                <span className={`text-[10px] font-bold uppercase tracking-widest ${colors.text}`}>My Portfolio</span>
                <h2 className="font-display text-2xl font-bold text-slate-900">Featured Creations</h2>
              </div>

              {/* Filtering Controls */}
              <div className="flex flex-wrap gap-1 bg-slate-100 rounded-lg p-1 max-w-max border border-slate-200/50">
                {projectCategories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setProjectFilter(cat)}
                    className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-all ${
                      projectFilter === cat 
                        ? 'bg-white text-slate-900 shadow-3xs' 
                        : 'text-slate-500 hover:text-slate-800'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {portfolio.projects
                .filter(proj => projectFilter === 'All' || proj.category === projectFilter)
                .map((project) => (
                  <div 
                    key={project.id}
                    className="group bg-white rounded-3xl border border-slate-200/70 overflow-hidden shadow-3xs hover:shadow-md hover:border-slate-300 transition-all duration-300 flex flex-col h-full"
                  >
                    <div className="relative overflow-hidden aspect-video border-b border-slate-100 bg-slate-50">
                      <img 
                        src={project.imageUrl} 
                        alt={project.title} 
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-103"
                        referrerPolicy="no-referrer"
                      />
                      {project.featured && (
                        <span className="absolute top-4 left-4 bg-slate-900 text-white text-[10px] uppercase px-2.5 py-1 rounded-full font-bold tracking-wider">
                          Featured
                        </span>
                      )}
                    </div>

                    <div className="p-6 flex flex-col flex-1">
                      <span className="text-[10px] uppercase tracking-widest text-slate-400 font-bold mb-2 block">{project.category}</span>
                      <h3 className="font-display text-lg font-bold text-slate-900 mb-2 group-hover:text-slate-800 transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-xs text-slate-600 leading-relaxed mb-4 flex-1">
                        {project.shortDescription}
                      </p>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-1.5 mb-5">
                        {project.tags.map((tag, tIdx) => (
                          <span 
                            key={tIdx}
                            className="text-[10px] font-semibold bg-slate-50 text-slate-500 px-2 py-0.5 rounded border border-slate-100"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      {/* Project Action Links */}
                      <div className="flex items-center gap-4 mt-auto pt-4 border-t border-slate-100">
                        {project.liveUrl && (
                          <a 
                            href={project.liveUrl} 
                            target="_blank" 
                            className={`text-xs font-semibold flex items-center gap-1 ${colors.text} ${colors.hover}`}
                          >
                            Live Demo <ExternalLink className="w-3.5 h-3.5" />
                          </a>
                        )}
                        {project.githubUrl && (
                          <a 
                            href={project.githubUrl} 
                            target="_blank" 
                            className="text-xs font-semibold text-slate-500 flex items-center gap-1 hover:text-slate-900 transition-colors"
                          >
                            GitHub Repository <Github className="w-3.5 h-3.5" />
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </section>

          {/* SECTION 5: EXPERIENCE TIMELINE */}
          <section id="experience" className="space-y-8">
            <div className="space-y-1">
              <span className={`text-[10px] font-bold uppercase tracking-widest ${colors.text}`}>Background</span>
              <h2 className="font-display text-2xl font-bold text-slate-900">Career & Milestones</h2>
            </div>

            <div className="space-y-1 bg-white border border-slate-200/70 rounded-3xl p-8 relative">
              {portfolio.experience.map((exp, idx) => (
                <div 
                  key={exp.id} 
                  className={`relative pl-8 pb-8 last:pb-0 ${
                    idx !== portfolio.experience.length - 1 ? 'border-l border-slate-100' : ''
                  }`}
                >
                  {/* Timeline icon indicator */}
                  <div className={`absolute -left-3.5 top-0 w-7 h-7 rounded-full bg-white border-2 ${colors.border} flex items-center justify-center text-slate-600 shadow-3xs`}>
                    {exp.type === 'work' && <Briefcase className="w-3 h-3 text-slate-700" />}
                    {exp.type === 'education' && <GraduationCap className="w-3 h-3 text-slate-700" />}
                    {exp.type === 'award' && <Award className="w-3 h-3 text-slate-700" />}
                  </div>

                  <div>
                    <span className="inline-block text-[10px] font-bold text-slate-400 mb-1">{exp.period}</span>
                    <h3 className="font-display font-bold text-base text-slate-900">{exp.title}</h3>
                    <p className="text-xs font-semibold text-slate-500 mb-2">{exp.subtitle}</p>
                    <p className="text-xs text-slate-600 leading-relaxed max-w-2xl">{exp.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* SECTION 6: CONTACT FORM */}
          <section id="contact" className="space-y-8">
            <div className="space-y-1 text-center max-w-xl mx-auto">
              <span className={`text-[10px] font-bold uppercase tracking-widest ${colors.text}`}>Contact</span>
              <h2 className="font-display text-2xl font-bold text-slate-900">Send a Message</h2>
              <p className="text-xs text-slate-400">Have an ambitious concept to launch or an employment opening? Write in below.</p>
            </div>

            <div className="bg-white border border-slate-200/70 rounded-3xl p-6 md:p-8 max-w-2xl mx-auto shadow-3xs">
              <form onSubmit={handleContactSubmit} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1.5">Your Name</label>
                    <input 
                      type="text" 
                      required
                      value={contactForm.name}
                      onChange={(e) => setContactForm(prev => ({ ...prev, name: e.target.value }))}
                      className={`w-full px-3 py-2.5 text-xs rounded-xl border border-slate-200 focus:outline-hidden ${colors.focus} bg-slate-50/20`}
                      placeholder="Jane Doe"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1.5">Email Address</label>
                    <input 
                      type="email" 
                      required
                      value={contactForm.email}
                      onChange={(e) => setContactForm(prev => ({ ...prev, email: e.target.value }))}
                      className={`w-full px-3 py-2.5 text-xs rounded-xl border border-slate-200 focus:outline-hidden ${colors.focus} bg-slate-50/20`}
                      placeholder="you@domain.com"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1.5">Message / Inquiry Details</label>
                  <textarea 
                    rows={4}
                    required
                    value={contactForm.message}
                    onChange={(e) => setContactForm(prev => ({ ...prev, message: e.target.value }))}
                    className={`w-full px-3 py-2.5 text-xs rounded-xl border border-slate-200 focus:outline-hidden ${colors.focus} bg-slate-50/20`}
                    placeholder="Tell me about your timeline, targets, and goals..."
                  />
                </div>

                <button 
                  type="submit" 
                  disabled={contactLoading}
                  className={`w-full py-3 rounded-xl font-bold text-xs text-white shadow-3xs transition-all flex items-center justify-center gap-2 ${
                    contactLoading ? 'opacity-80 cursor-wait' : ''
                  } ${colors.bg}`}
                >
                  {contactLoading ? 'Sending message...' : 'Send Message'}
                </button>

                {contactSuccess && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-3 bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs rounded-xl flex items-center gap-2"
                  >
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Inquiry sent successfully! A confirmation message has been dispatched to {portfolio.email}.</span>
                  </motion.div>
                )}
              </form>
            </div>
          </section>

          {/* Footer inside preview */}
          <footer className="border-t border-slate-200/50 pt-10 text-center space-y-4">
            <div className="flex items-center justify-center gap-2">
              <span className={`w-7 h-7 rounded-lg ${colors.bg} flex items-center justify-center text-white text-xs font-bold`}>
                {portfolio.name[0]}
              </span>
              <span className="font-display font-bold text-base text-slate-900">{portfolio.name}</span>
            </div>
            <p className="text-[11px] text-slate-400">© 2026 {portfolio.name}. Built with the Live Portfolio Builder.</p>
          </footer>

        </div>

      </main>

      {/* --- MODAL: EXPORT / CODE GENERATOR VIEW --- */}
      <AnimatePresence>
        {isExportOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/40 backdrop-blur-xs p-4">
            <motion.div 
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="bg-white rounded-3xl max-w-3xl w-full max-h-[85vh] overflow-hidden flex flex-col shadow-2xl border border-slate-200"
            >
              {/* Modal Header */}
              <div className="p-6 border-b border-slate-100 flex items-center justify-between bg-slate-50/50">
                <div className="flex items-center gap-2">
                  <FileCode className="w-5 h-5 text-indigo-600" />
                  <div>
                    <h3 className="font-display font-bold text-lg text-slate-900">Your Portfolio HTML is Ready!</h3>
                    <p className="text-xs text-slate-400 mt-0.5">Fully responsive single-file template powered by modern Tailwind CDN styling.</p>
                  </div>
                </div>
                <button 
                  onClick={() => setIsExportOpen(false)}
                  className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-all"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Code Preview Frame */}
              <div className="flex-1 overflow-y-auto p-6 bg-slate-950 font-mono text-xs text-slate-300 relative select-text leading-relaxed">
                <div className="absolute top-4 right-4 z-10 flex items-center gap-2">
                  <button 
                    onClick={handleCopyCode}
                    className="bg-slate-800 hover:bg-slate-700 text-white font-semibold text-xs py-2 px-3 rounded-lg flex items-center gap-1.5 transition-all shadow-sm"
                  >
                    {copied ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-400" /> Copied!
                      </>
                    ) : (
                      <>
                        <Clipboard className="w-3.5 h-3.5" /> Copy Code
                      </>
                    )}
                  </button>
                  <button 
                    onClick={handleDownloadCode}
                    className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold text-xs py-2 px-3 rounded-lg flex items-center gap-1.5 transition-all shadow-sm"
                  >
                    <Download className="w-3.5 h-3.5" /> Download .html
                  </button>
                </div>
                <pre className="pt-10 scrollbar-thin select-text text-emerald-400">
                  {generateHTMLCode()}
                </pre>
              </div>

              {/* Modal Footer */}
              <div className="p-5 border-t border-slate-100 bg-slate-50 flex items-center justify-between text-xs text-slate-500">
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                  <span>Production-ready, single-file HTML & CSS export format</span>
                </span>
                <button 
                  onClick={() => setIsExportOpen(false)}
                  className="font-bold text-slate-700 hover:text-slate-950 px-4 py-2"
                >
                  Done
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
}
