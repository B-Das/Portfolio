import { ExternalLink, Github, ArrowRight } from 'lucide-react';

export const ProjectsSection = () => {
    const projects = [
        {
            id: "one",
            title: "Portfolio",
            description: "A sleek and responsive portfolio website built with React and TailwindCSS",
            image: "/projects/portfolio.webp",
            tags: ["React", "TailwindCSS", "Lucide-React","emailjs"],
            githubURL: "https://github.com/B-Das/portfolio",
            demoURL: "https://birajdasportfolio.netlify.app/"
        },
        {
            id: "two",
            title: "Carbon Footprint Calculator",
            description: "CarbonCalC is a privacy-focused web application that helps businesses measure, understand, and reduce their carbon footprint using internationally recognized greenhouse gas (GHG) standards.",
            image: "/projects/carboncalc.webp",
            tags: ["javascript", "html", "css"],
            githubURL: "https://github.com/B-Das/carbon-calculator",
            demoURL: "https://carboncalce.netlify.app/"
        },
        {
            id: "three",
            title: "Estatehaven Real Estate",
            description: "Estatehaven is a clients Real Estate website that allows users to buy, sell, and rent properties.",
            image: "/projects/estatehaven.webp",
            tags: ["wordpress"],
            // githubURL: "https://github.com/B-Das/estatehaven",
            // demoURL: "https://estatehaven.netlify.app/"
        },
        {
            id: "four",
            title: "Crypto Tracker",
            description: "Crypto Tracker is a simple application designed to monitor and display real-time cryptocurrency prices and trends.",
            image: "/projects/crypto.webp",
            tags: ["JavaScript", "API Integration", "CSS Grid"],
            githubURL: "https://github.com/B-Das/crypto-tracker",
            demoURL: "https://b-das.github.io/crypto-tracker/"
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

                <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
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