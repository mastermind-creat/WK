export const profile = {
    name: "Wambia Kennedy",
    role: "Web Developer | Graphic Designer | Tech Enthusiast",
    summary: "I create beautiful, functional digital experiences that help businesses grow and individuals shine online.",
    about: "I'm a passionate web developer and designer with over 5 years of experience creating digital solutions that make an impact. I specialize in building responsive, user-friendly websites and applications that help businesses and individuals establish their online presence.",
    funFact: "I once designed a personal website that looked so good, I almost hired myself. 😂",
    email: "kennyleyy0@gmail.com",
    phone: "+254 743 394 373",
    location: "Kisumu, Kenya",
    avatar: "/images/profile.jpg",
    resumeUrl: "/resume.pdf",
    skills: ["PHP/Laravel", "React/Next.js", "MySQL/PostgreSQL", "Node.js", "UI/UX Design"],
    languages: ["English", "Swahili"],
    education: [
        {
            degree: ".NET Core (C#) Training",
            institution: "Microsoft",
            period: "2025 – Present (Ongoing)",
            icon: "code"
        },
        {
            degree: "Diploma in Information Communication Technology",
            institution: "Seme Technical and Vocational College",
            period: "2022 – 2025 (Final Exams Completed)",
            icon: "laptop-code"
        },
        {
            degree: "Advanced HTML Certification",
            institution: "Programming Hub",
            period: "2022",
            icon: "certificate"
        },
        {
            degree: "Kenya Certificate of Secondary Education (KCSE)",
            institution: "Friends School Mbale, C+",
            period: "2017 – 2020",
            icon: "school"
        },
        {
            degree: "Kenya Certificate of Primary Education (KCPE)",
            institution: "Our Lady of Grace, 362 Marks",
            period: "2009 – 2016",
            icon: "book-reader"
        }
    ],
    experience: [
        {
            title: "Intern Frontend Developer",
            company: "Elimu Tech",
            period: "Dec 2025 – Present",
            description: "Developing the frontend for an innovative Learning Management System (LMS) platform at a fast-paced startup. Utilizing React and modern UI/UX principles to enhance educational delivery systems.",
            icon: "laptop-code"
        },
        {
            title: "Freelance Web & Software Developer",
            company: "Self-employed",
            period: "2023 – Present",
            description: "Designing and developing custom websites, software solutions, and online platforms for clients. Skilled in front-end and back-end technologies, including React, Node.js, and database integration.",
            icon: "briefcase"
        },
        {
            title: "Graphic Designer",
            company: "Self-employed",
            period: "2019 – Present",
            description: "Creating visual content including logos, posters, banners, and marketing materials for individuals and businesses.",
            icon: "paint-brush"
        },
        {
            title: "ICT Attachment",
            company: "Mariakani Sub County Hospital",
            period: "Jan – Apr 2024",
            description: "Provided technical support, computer maintenance (including OS installation), and networking tasks such as crimping, configuration, and troubleshooting for hospital systems.",
            icon: "tool"
        },
        {
            title: "Tech Mentor",
            company: "Self-employed",
            period: "2021 – Present",
            description: "Guiding aspiring developers through coding bootcamps and workshops, focusing on practical skills and real-world projects.",
            icon: "chalkboard-teacher"
        }
    ],
    leadership: [
        {
            title: "Ajira Digital Club Chairman",
            period: "2025 – Present",
            description: "Leading the Ajira Digital Club in organizing workshops, networking events, and digital skills training for students. Fostered partnerships with industry professionals to provide mentorship opportunities.",
            icon: "users-cog"
        },
        {
            title: "ICT Department Representative",
            period: "2024 – Present",
            description: "Represented the ICT department in institutional decision-making, bridging communication between administration and students to enhance academic and technical programs.",
            icon: "network-wired"
        },
        {
            title: "Class Representative",
            period: "2022 – 2024",
            description: "Coordinated academic schedules, managed class communications, and liaised with faculty to address student concerns and academic needs.",
            icon: "chalkboard-teacher"
        },
        {
            title: "High School Journalism Club Member",
            period: "2017 – 2019",
            description: "Contributed articles, edited publications, and participated in organizing school media coverage for events and activities.",
            icon: "newspaper"
        }
    ],
    awards: [
        {
            title: "1st Place – TVET Fair Regionals",
            subtitle: "Ajira Digital Club Management System, Qualified for Nationals",
            year: "2025",
            icon: "trophy"
        },
        {
            title: "Certificate of Competition – Software Solutions for Business",
            subtitle: "Kenya National WorldSkills Competition",
            year: "2024",
            icon: "award"
        },
        {
            title: "3rd Place – TVET Fair Regionals",
            subtitle: "Qualified for Nationals",
            year: "2024",
            icon: "trophy"
        },
        {
            title: "Advanced HTML Certification",
            subtitle: "Programming Hub",
            year: "2022",
            icon: "certificate"
        },
        {
            title: "Certificate of Recognition – Journalism Club",
            subtitle: "Friends School Mbale",
            year: "2020",
            icon: "users"
        }
    ],
    testimonials: [
        {
            name: "Joseph O. Ngode",
            role: "Engineer, Welding",
            content: "Am so greatful to Kennedy, for the wonderful job you have done for me, brother God bless you.",
            image: "images/clients/joseph.jpg"
        },
        {
            name: "Michael Brown",
            role: "Marketing Director, BrandCo",
            content: "Working with Wambia on our graphic design needs was a pleasure. He delivered creative, high-quality designs that perfectly captured our vision.",
            image: "https://randomuser.me/api/portraits/men/32.jpg"
        }
    ]
};

export const skills = [
    {
        category: "Backend Development",
        icon: "server",
        items: [
            { name: "PHP & Laravel", level: 98, color: "from-purple-500 to-pink-500" },
            { name: "Node.js & Express", level: 90, color: "from-green-600 to-green-400" },
            { name: "Python & Django", level: 85, color: "from-orange-500 to-yellow-500" },
            { name: "RESTful APIs", level: 95, color: "from-indigo-600 to-purple-500" }
        ]
    },
    {
        category: "Frontend Development",
        icon: "code",
        items: [
            { name: "React & Next.js", level: 96, color: "from-purple-500 to-blue-500" },
            { name: "Vue.js & Nuxt", level: 90, color: "from-green-500 to-emerald-400" },
            { name: "TypeScript", level: 88, color: "from-blue-600 to-blue-400" },
            { name: "Tailwind CSS", level: 94, color: "from-cyan-500 to-blue-500" }
        ]
    },
    {
        category: "Database & Cloud",
        icon: "database",
        items: [
            { name: "MySQL & PostgreSQL", level: 97, color: "from-blue-500 to-cyan-500" },
            { name: "MongoDB", level: 90, color: "from-green-500 to-emerald-600" },
            { name: "AWS & Vercel", level: 88, color: "from-orange-600 to-orange-400" },
            { name: "Docker & Kubernetes", level: 80, color: "from-blue-600 to-indigo-600" }
        ]
    },
    {
        category: "Design & Tools",
        icon: "palette",
        items: [
            { name: "Figma & Adobe XD", level: 95, color: "from-purple-500 to-pink-500" },
            { name: "Photoshop & Illustrator", level: 90, color: "from-blue-500 to-rose-500" },
            { name: "Git & GitHub", level: 92, color: "from-gray-600 to-gray-400" },
            { name: "VS Code & Terminal", level: 95, color: "from-blue-500 to-cyan-400" }
        ]
    }
];

export const techStack = [
    { name: "React", icon: "react", color: "text-blue-400" },
    { name: "Vue.js", icon: "vuejs", color: "text-green-500" },
    { name: "Node.js", icon: "node-js", color: "text-green-600" },
    { name: "Python", icon: "python", color: "text-blue-500" },
    { name: "PHP", icon: "php", color: "text-blue-300" },
    { name: "AWS", icon: "aws", color: "text-orange-500" },
    { name: "Docker", icon: "docker", color: "text-blue-600" },
    { name: "Git", icon: "git-alt", color: "text-red-500" }
];

export const services = [
    {
        title: "KRA Services",
        description: "Comprehensive tax registration and filing services to keep you compliant with Kenyan regulations.",
        icon: "file-invoice-dollar",
        price: "Ksh 200+",
        features: ["KRA PIN Registration", "Filing Returns"],
        detailedFeatures: [
            { name: "KRA PIN Registration", price: "Ksh 200" },
            { name: "Filing Returns", price: "Ksh 150" },
            { name: "Tax Compliance Certificates", price: "Ksh 500" },
            { name: "iTax Assistance", price: "Ksh 100" }
        ],
        whatsappMsg: "Hi Wambia! I need help with KRA Services."
    },
    {
        title: "HELB Assistance",
        description: "Expert guidance through the HELB application process for both new and returning applicants.",
        icon: "graduation-cap",
        price: "Ksh 150+",
        features: ["First-time Applications", "Subsequent Applications"],
        detailedFeatures: [
            { name: "First-time Applications", price: "Ksh 300" },
            { name: "Subsequent Applications", price: "Ksh 150" },
            { name: "HELB Appeal Assistance", price: "Ksh 200" },
            { name: "Documentation Support", price: "Included" }
        ],
        whatsappMsg: "Hi Wambia! I need assistance with my HELB application."
    },
    {
        title: "Computer Maintenance",
        description: "Keep your systems running smoothly with professional maintenance and optimization services.",
        icon: "laptop-code",
        price: "Ksh 500+",
        features: ["OS Installation", "Software Installations", "Updates"],
        detailedFeatures: [
            { name: "OS Installation (Windows/Linux)", price: "Ksh 1,000" },
            { name: "Software Installation & Config", price: "Ksh 500" },
            { name: "System Optimization & Cleanup", price: "Ksh 400" },
            { name: "Hardware Dusting & Cleaning", price: "Ksh 300" }
        ],
        whatsappMsg: "Hi Wambia! My computer needs some maintenance."
    },
    {
        title: "Software Development",
        description: "Custom software solutions tailored to your specific needs and requirements.",
        icon: "project-diagram",
        price: "Ksh 5,000+",
        features: ["Fullstack Development", "School Projects", "Custom Solutions"],
        detailedFeatures: [
            { name: "Fullstack Web Applications", price: "Quote" },
            { name: "School Project Development", price: "Ksh 5,000+" },
            { name: "Python Scripting & Automation", price: "Ksh 2,000+" },
            { name: "Database Design & Setup", price: "Ksh 3,000+" }
        ],
        whatsappMsg: "Hi Wambia! I'd like to discuss a software development project."
    },
    {
        title: "Web Development",
        description: "Modern, responsive websites that showcase your brand and engage your audience.",
        icon: "globe",
        price: "Ksh 10,000+",
        features: ["UI/UX Design", "Personal Portfolio", "Landing Pages"],
        detailedFeatures: [
            { name: "Personal Portfolio / CV Site", price: "Ksh 10,000" },
            { name: "Business Landing Page", price: "Ksh 15,000" },
            { name: "E-commerce Website", price: "Ksh 30,000+" },
            { name: "Blog / News Website", price: "Ksh 20,000+" }
        ],
        whatsappMsg: "Hi Wambia! I need a professional website built."
    },
    {
        title: "Graphic Design",
        description: "Creative visual solutions that communicate your message effectively.",
        icon: "paint-brush",
        price: "Ksh 300+",
        features: ["Logo Design", "Wedding Cards", "Posters"],
        detailedFeatures: [
            { name: "Professional Logo Design", price: "Ksh 1,500+" },
            { name: "Birthday / Wedding Cards", price: "Ksh 300" },
            { name: "Event Posters & Flyers", price: "Ksh 500+" },
            { name: "Brand Identity Package", price: "Ksh 5,000+" }
        ],
        whatsappMsg: "Hi Wambia! I need some graphic design work done."
    },
    {
        title: "Virtual Assistance",
        description: "Reliable support to help you stay productive, available both remotely and onsite.",
        icon: "user-tie",
        price: "Ksh 1,000+",
        features: ["Admin Support", "Email Management", "Social Media"],
        detailedFeatures: [
            { name: "Remote Administrative Support", price: "Ksh 1,000/day" },
            { name: "Social Media Management", price: "Ksh 5,000/month" },
            { name: "Email & Calendar Management", price: "Ksh 500/day" },
            { name: "Onsite Event Coverage", price: "Quote" }
        ],
        whatsappMsg: "Hi Wambia! I'm looking for virtual assistance services."
    },
    {
        title: "Deployment & Hosting",
        description: "End-to-end deployment, server setups, and code troubleshooting for smooth operation.",
        icon: "server",
        price: "Ksh 2,000+",
        features: ["Cloud Deployment", "Hosting Setup", "Troubleshooting"],
        detailedFeatures: [
            { name: "Cloud / VPS Deployment", price: "Ksh 2,000" },
            { name: "Hosting & Domain Setup", price: "Ksh 1,000" },
            { name: "CI/CD Pipeline Setup", price: "Ksh 3,000" },
            { name: "Code Debugging & Fixes", price: "Ksh 500/hr" }
        ],
        whatsappMsg: "Hi Wambia! I need help deploying or hosting my application."
    },
    {
        title: "Training & Tutoring",
        description: "Professional training in computer packages and coding bootcamps for beginners and advanced learners.",
        icon: "graduation-cap",
        price: "Ksh 1,500+",
        features: ["Computer Packages", "Coding Bootcamps", "One-on-One Mentorship"],
        detailedFeatures: [
            { name: "Microsoft Office Suite", price: "Ksh 1,500" },
            { name: "Web Dev Fundamentals", price: "Ksh 3,000" },
            { name: "Project-based Coding", price: "Ksh 5,000" },
            { name: "Advanced Frameworks", price: "Quote" }
        ],
        whatsappMsg: "Hi Wambia! I'm interested in the Computer Training or Coding sessions."
    }
];

export const projects = [
    {
        title: "ElimuTech LMS",
        description: "A modern Learning Management System designed to streamline online education. Features scalable content delivery, structured learning flows, and an intuitive user experience for both learners and instructors.",
        image: "images/projects/elimutech.png",
        tags: ["React", "Tailwind CSS", "Laravel"],
        liveUrl: "https://lms-z445.vercel.app/",
        githubUrl: "https://github.com/mastermind-creat/Lms",
        category: "web"
    },
    {
        title: "TechSafi",
        description: "A technology-driven digital platform built to showcase and manage tech-focused services and solutions. Emphasizes performance, responsiveness, and clean UI design.",
        image: "images/projects/techsafi.png",
        tags: ["React", "Tailwind CSS", "PHP/Laravel"],
        liveUrl: "https://tech-safi-k21q.vercel.app/",
        githubUrl: "https://github.com/mastermind-creat/tech.safi",
        category: "web"
    },
    {
        title: "LaunchVerse",
        description: "A startup-oriented platform designed to support product launches and digital onboarding workflows. Optimized for speed, usability, and future feature expansion.",
        image: "images/projects/launchverse.png",
        tags: ["React", "Tailwind CSS", "PHP/Laravel"],
        liveUrl: "https://launch-verse.vercel.app/#/login",
        githubUrl: "https://github.com/mastermind-creat/LaunchVerse",
        category: "web"
    },
    {
        title: "E-Commerce Website",
        description: "A fully functional e-commerce website built using core PHP with Tailwind CSS. Includes product listings, cart functionality, and order handling, demonstrating strong backend fundamentals.",
        image: "images/projects/ecommerce.png",
        tags: ["PHP", "Tailwind CSS"],
        liveUrl: "#",
        githubUrl: "https://github.com/mastermind-creat/E-Commerce",
        category: "web"
    },
    {
        title: "Kodiero Business Center",
        description: "A professional business website developed for a registered enterprise. Focuses on clarity, performance, and responsive design, delivering a polished multi-page layout.",
        image: "images/projects/kodiero.png",
        tags: ["React", "Tailwind CSS"],
        liveUrl: "https://kodiero-investments.vercel.app/",
        githubUrl: "https://github.com/techsafi/Kodiero_Investments",
        category: "web"
    },
    {
        title: "Personal Welding Website",
        description: "A professional industrial portal for welding fabrication services, featuring dynamic service galleries and consultation booking integration.",
        image: "images/projects/welding.png",
        tags: ["React", "Tailwind CSS", "Framer Motion"],
        liveUrl: "https://welding-flax.vercel.app/",
        githubUrl: "https://github.com/mastermind-creat/Welding",
        category: "web"
    },
    {
        title: "AJIRA Job Portal",
        description: "A comprehensive digital employment ecosystem designed to connect specialized talent with high-impact opportunities across Kenya.",
        image: "images/projects/ajira.png",
        tags: ["Next.js", "TypeScript", "PostgreSQL"],
        liveUrl: "https://seme-tvc-ajira.vercel.app/",
        githubUrl: "https://github.com/mastermind-creat/Seme_TVC_Ajira",
        category: "web"
    },
    {
        title: "Industrial SACCO System",
        description: "A secure, scalable financial management platform for credit cooperatives, featuring real-time transaction monitoring and automated dividend distribution.",
        image: "images/projects/sacco.png",
        tags: ["Java", "Spring Boot", "MySQL"],
        liveUrl: "#",
        githubUrl: "#",
        category: "software"
    },
    {
        title: "Online Library Ecosystem",
        description: "A sophisticated digital resource management system for academic institutions, supporting global cataloging and electronic lending protocols.",
        image: "images/projects/online_library.png",
        tags: ["Python", "Django", "PostgreSQL"],
        liveUrl: "#",
        githubUrl: "#",
        category: "software"
    },
    {
        title: "Workstation Reservation",
        description: "An enterprise-grade resource allocation platform for optimized workspace management and real-time environment scheduling.",
        image: "images/projects/wrs.png",
        tags: ["C#", "ASP.NET Core", "SQL Server"],
        liveUrl: "#",
        githubUrl: "#",
        category: "software"
    },
    {
        title: "Portfolio Architecture v1",
        description: "A high-fidelity creative demonstration platform featuring advanced glassmorphism and motion-synchronized UI components.",
        image: "images/projects/portfolio1.png",
        tags: ["React", "Framer Motion", "Tailwind"],
        liveUrl: "https://lates-portfolio-v1.vercel.app/portfolio.html",
        githubUrl: "https://github.com/mastermind-creat/mastermind-creat",
        category: "web"
    },
    {
        title: "Springs Environmental System",
        description: "A specialized resource monitoring system for water quality tracking and environmental conservation management.",
        image: "images/projects/springs.png",
        tags: ["Python", "Flask", "Chart.js"],
        liveUrl: "#",
        githubUrl: "#",
        category: "software"
    }
];

export const galleryItems = [
    {
        title: "Logo Design",
        category: "logo",
        description: "Professional logo for brand identity",
        image: "images/graphics/logo.png",
        icon: "palette"
    },
    {
        title: "Branding Logo",
        category: "logo",
        description: "Alternative branding concept",
        image: "images/graphics/logo.jpg",
        icon: "palette"
    },
    {
        title: "Fullstack Foundry",
        category: "logo",
        description: "Identity design for a tech collective",
        image: "images/graphics/Fullstack Foundry.png",
        icon: "palette"
    },
    {
        title: "Birthday Card",
        category: "card",
        description: "Celebratory card for special occasions",
        image: "images/graphics/Birthday.jpg",
        icon: "cake"
    },
    {
        title: "Success Card",
        category: "card",
        description: "Motivational card for achievements",
        image: "images/graphics/success.jpg",
        icon: "trophy"
    },
    {
        title: "Digital Skills",
        category: "poster",
        description: "Training poster for digital skills development",
        image: "images/graphics/digitalskills.png",
        icon: "laptop-code"
    },
    {
        title: "African Cup",
        category: "poster",
        description: "Cultural cup design with African themes",
        image: "images/graphics/African_cup.png",
        icon: "trophy"
    },
    {
        title: "African Heritage",
        category: "poster",
        description: "Traditional themed cultural poster",
        image: "images/graphics/african.png",
        icon: "palette"
    },
    {
        title: "Ajira Digital",
        category: "poster",
        description: "Professional poster for digital opportunities",
        image: "images/graphics/ajira.jpg",
        icon: "briefcase"
    },
    {
        title: "STVC Ajira",
        category: "poster",
        description: "Academic digital skills banner",
        image: "images/graphics/stvcAjira.jpg",
        icon: "briefcase"
    },
    {
        title: "Training Banner",
        category: "poster",
        description: "Professional technical training announcement",
        image: "images/graphics/training.png",
        icon: "laptop-code"
    },
    {
        title: "System Dev",
        category: "infographic",
        description: "Infrastructure development flow chart",
        image: "images/graphics/systemdev.png",
        icon: "laptop-code"
    },
    {
        title: "Project Tracko",
        category: "ui",
        description: "Modern task management interface concept",
        image: "images/graphics/projectTracko.jpg",
        icon: "laptop-code"
    },
    {
        title: "Worship Event",
        category: "poster",
        description: "Spiritual and community gathering flyer",
        image: "images/graphics/worship.jpg",
        icon: "palette"
    },
    {
        title: "Portrait Design",
        category: "art",
        description: "High-fidelity digital portrait composition",
        image: "images/graphics/Alicia.jpg",
        icon: "palette"
    },
    {
        title: "Modern Layout",
        category: "design",
        description: "Contemporary digital publication design",
        image: "images/graphics/new.png",
        icon: "palette"
    },
    {
        title: "Plum Branding",
        category: "logo",
        description: "Experimental fruit-themed branding",
        image: "images/graphics/plum.png",
        icon: "palette"
    },
    {
        title: "Vector Abstract",
        category: "art",
        description: "Clean mathematical vector illustration",
        image: "images/graphics/graphic1.png",
        icon: "palette"
    },
    {
        title: "Floral Art",
        category: "art",
        description: "Nature-inspired pattern design",
        image: "images/graphics/flower.jpg",
        icon: "palette"
    },
    {
        title: "Elite Composition",
        category: "design",
        description: "Mixed media digital artwork",
        image: "images/graphics/Designer (1).jpeg",
        icon: "palette"
    },
    {
        title: "Social Branding",
        category: "branding",
        description: "LinkedIn-optimized professional identity",
        image: "images/graphics/linkedin.png",
        icon: "briefcase"
    }
];

export const pricing = [
    {
        plan: "Basic",
        price: "Ksh 15,000+",
        description: "Perfect for personal use and small portfolios.",
        features: ["Simple 5-page website", "Basic contact form", "Mobile responsive", "1 Round of revisions", "Basic SEO"],
        popular: false
    },
    {
        plan: "Standard",
        price: "Ksh 30,000+",
        description: "Ideal for growing businesses and professional brands.",
        features: ["Up to 10 pages", "CMS integration", "Basic SEO setup", "Google Analytics", "3 Rounds of revisions"],
        popular: true
    },
    {
        plan: "Premium",
        price: "Ksh 60,000+",
        description: "Full-scale custom solutions for large organizations.",
        features: ["Custom design & branding", "E-commerce functionality", "Advanced SEO", "Ongoing support", "Performance Optimization"],
        popular: false
    },
    {
        plan: "Enterprise",
        price: "Ksh 100,000+",
        description: "Enterprise-level custom software and virtual assistance packages.",
        features: ["Custom software portal", "Virtual Assistance package", "Digital strategy consulting", "24/7 Priority support", "Deep analytics integration"],
        popular: false
    }
];

export const blogPosts = [
    {
        title: "Modern Web Design Trends 2025",
        excerpt: "Discover the latest trends in web design that are shaping the digital landscape this year.",
        category: "webdev",
        date: "Dec 30, 2025",
        image: "https://images.unsplash.com/photo-1547658719-da2b51169166?auto=format&fit=crop&q=80&w=800",
        content: `
            <p class="mb-6">The digital landscape is evolving at a breakneck pace. As we move into 2025, web design is shifting towards more immersive, interactive, and personalized experiences. Here are the key trends defining the new era of digital aesthetics.</p>
            
            <h3 class="text-2xl font-black uppercase mb-4 text-primary-600">1. Bento Grids & Modular Layouts</h3>
            <p class="mb-6">Inspired by dashboard UIs, bento grids offer a structured yet flexible way to organize complex content. They provide a clear visual hierarchy and are incredibly mobile-responsive by design.</p>

            <h3 class="text-2xl font-black uppercase mb-4 text-primary-600">2. Dark Mode as Default</h3>
            <p class="mb-6">Dark mode is no longer just a toggle; it's becoming the default aesthetic for premium brands. It reduces eye strain, saves battery on OLED screens, and offers a sleek, sophisticated canvas for vibrant accent colors.</p>

            <h3 class="text-2xl font-black uppercase mb-4 text-primary-600">3. Micro-Interactions & Motion</h3>
            <p class="mb-6">Static pages are dead. Users expect feedback. From subtle hover effects to complex scroll-triggered animations, motion brings interfaces to life, guiding distinct user journeys and enhancing engagement.</p>
        `
    },
    {
        title: "Mastering Color Theory",
        excerpt: "Learn how to use color effectively in your designs to evoke emotion and drive action.",
        category: "design",
        date: "Dec 25, 2025",
        image: "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?auto=format&fit=crop&q=80&w=800",
        content: `
            <p class="mb-6">Color is more than just decoration; it's a powerful psychological tool. Understanding color theory is essential for creating designs that not only look good but also function effectively.</p>

            <h3 class="text-2xl font-black uppercase mb-4 text-primary-600">The 60-30-10 Rule</h3>
            <p class="mb-6">A classic rule for balanced color schemes: 60% dominant color (usually neutral), 30% secondary color, and 10% accent color. This ensures your design feels cohesive without being overwhelming.</p>

            <h3 class="text-2xl font-black uppercase mb-4 text-primary-600">Psychology of Color</h3>
            <p class="mb-6">Blue conveys trust (banks, tech), Red evokes urgency and passion (sales, food), while Green represents growth and health. Choosing the right palette allows you to subconsciously communicate your brand's values before a user reads a single word.</p>
        `
    },
    {
        title: "Building Scalable APIs with Node.js",
        excerpt: "A step-by-step guide to structuring your Express applications for maximum scalability and maintainability.",
        category: "tutorial",
        date: "Dec 31, 2025",
        image: "https://images.unsplash.com/photo-1555099962-4199c345e5dd?auto=format&fit=crop&q=80&w=800",
        content: `
            <p class="mb-6">Scalability isn't an afterthought; it's a foundational architectural decision. When building APIs with Node.js, how you structure your code today determines how well you'll sleep tomorrow.</p>

            <h3 class="text-2xl font-black uppercase mb-4 text-primary-600">Layered Architecture</h3>
            <p class="mb-6">Don't dump everything in your controllers. Adopt a layered approach: <strong>Controller</strong> (handles HTTP), <strong>Service</strong> (business logic), and <strong>Data Access</strong> (database interactions). This separation of concerns makes testing and distinct scaling infinitely easier.</p>

            <h3 class="text-2xl font-black uppercase mb-4 text-primary-600">Caching Strategies</h3>
            <p class="mb-6">The fastest query is the one you never make. Implementing Redis for caching frequently accessed data can reduce database load by over 90% and drastically improve response times.</p>
        `
    }
];
