import { ExternalLink, Github, ArrowRight } from 'lucide-react';

export const ProjectsSection = () => {
    const projects = [
        {
            id: "one",
            title: "SAS Landing Page",
            description: "AI-Powered Business Solutions landing page with modern design and interactive elements.",
            image: "/projects/project1.svg",
            tags: ["React", "TailwindCSS", "Supabase"],
            githubURL: "https://github.com/yourusername/sas-landing-page",
            demoURL: "https://sas-landing-page.vercel.app"
        },
        {
            id: "two",
            title: "Personalized AI Meal Plans",
            description: "AI-driven meal planning application that creates personalized meal plans based on user preferences.",
            image: "/projects/project2.svg",
            tags: ["TypeScript", "D3.js", "Next.js"],
            githubURL: "https://github.com/yourusername/meal-planner",
            demoURL: "https://meal-planner-demo.vercel.app"
        },
        {
            id: "three",
            title: "Explore Countries",
            description: "Interactive application for exploring countries with real-time data visualization and statistics.",
            image: "/projects/project3.svg",
            tags: ["React", "Node.js", "Stripe"],
            githubURL: "https://github.com/yourusername/country-explorer",
            demoURL: "https://country-explorer.vercel.app"
        },
        {
            id: "four",
            title: "Crypto Tracker",
            description: "Crypto Tracker is a simple application designed to monitor and display real-time cryptocurrency prices and trends.",
            image: "/projects/crypto.webp",
            tags: ["JavaScript", "API Integration", "CSS Grid"],
            githubURL: "https://github.com/B-Das/crypto-tracker",
            demoURL: "https://b-das.github.io/crypto-tracker/"
        },
        {
            id: "five",
            title: "Portfolio Website",
            description: "Modern portfolio website with interactive elements, smooth animations, and responsive design.",
            image: "/projects/project5.svg",
            tags: ["React", "Tailwind CSS", "Framer Motion"],
            githubURL: "https://github.com/yourusername/portfolio",
            demoURL: "https://yourportfolio.vercel.app"
        },
        {
            id: "six",
            title: "Recipe Finder",
            description: "Find recipes based on your ingredients with filtering options and step-by-step cooking instructions.",
            image: "/projects/project6.svg",
            tags: ["React", "API Integration", "Styled Components"],
            githubURL: "https://github.com/yourusername/recipe-finder",
            demoURL: "https://recipe-finder-demo.vercel.app"
        }
    ];

    return (
        <section id="projects" className="py-24 px-4 relative">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                    Featured <span className="text-primary">Projects</span>
                </h2>
                <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                    Here are some of my recent projects that showcase my skills and expertise in web development.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project) => (
                        <div 
                            key={project.id} 
                            className="group bg-card rounded-lg overflow-hidden shadow-md border border-border/40 transition-all duration-300 hover:shadow-xl hover:border-primary/20 hover:-translate-y-1"
                        >
                            <div className="relative">
                                <img 
                                    src={project.image} 
                                    alt={project.title}
                                    className="w-full h-48 object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                                    <div className="p-6 w-full">
                                        <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                                    </div>
                                </div>
                            </div>
                            <div className="p-6">
                                <p className="text-muted-foreground text-sm mb-6">{project.description}</p>
                                
                                <div className="flex justify-between items-center">
                                    <div className="flex space-x-3">
                                        <a 
                                            href={project.demoURL} 
                                            target="_blank" 
                                            rel="noreferrer"
                                            className="text-foreground/80 hover:text-primary transition-colors duration-300"
                                            aria-label={`View live demo of ${project.title}`}
                                        >
                                            <ExternalLink size={20} />
                                        </a>
                                        <a 
                                            href={project.githubURL} 
                                            target="_blank" 
                                            rel="noreferrer"
                                            className="text-foreground/80 hover:text-primary transition-colors duration-300"
                                            aria-label={`View GitHub repository for ${project.title}`}
                                        >
                                            <Github size={20} />
                                        </a>
                                    </div>
                                    
                                    <div className="flex flex-wrap gap-2 justify-end">
                                        {project.tags.map((tag, index) => (
                                            <span 
                                                key={index} 
                                                className="px-2 py-1 text-xs font-medium rounded-full bg-secondary/50 text-secondary-foreground"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="text-center mt-12">
                    <a 
                        href="https://github.com/B-Das?tab=repositories" 
                        target="_blank"
                        rel="noreferrer"
                        className="cosmic-button w-fit flex items-center justify-center mx-auto gap-2"
                    >
                        Check my GitHub
                        <ArrowRight size={16} />
                    </a>
                </div>
            </div>
        </section>
    );
}; 