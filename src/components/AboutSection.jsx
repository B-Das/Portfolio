import { Code, Wrench, Search } from "lucide-react";

export const AboutSection = () =>{
    return <section id="about" className="py-24 px-4 relative bg-secondary/30">
        <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
                About <span className="text-primary">Me</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                    <h3 className="text-2xl font-semibold">
                        Passionate web developer and tech creator
                    </h3>
                    <p className="text-muted-foreground">
                    I'm Biraj Das, a Computer Science Engineering graduate with a strong focus on frontend development and digital technologies. I build responsive web interfaces using HTML, CSS, JavaScript, and ReactJS, and have professional experience developing and maintaining WordPress sites, including a real estate website for a client.
                    </p>
                    <p className="text-muted-foreground">
                    I also manage a personal blog and apply SEO best practices to improve visibility. With a certification in AI prompting, I understand how to craft effective prompts for AI tools to deliver accurate and meaningful results.
                    </p>
                    <p className="text-muted-foreground">Adaptable and always learning, I enjoy solving problems, building intuitive user experiences, and working on impactful digital projects.</p>
                    <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center md:justify-start">
                        <a href="#contact" className="cosmic-button">
                            Get in Touch
                        </a>
                        <a 
                            href="/resume.pdf" 
                            className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
                        >
                            Download CV
                        </a>
                    </div>
                </div>

                <div className="grid grid-cols-1 gap-6">
                    <div className="gradient-border p-6 card-hover">
                        <div className="flex items-start gap-4">
                            <div className="p-3 rounded-full bg-primary/10">
                                <Code className="h-6 w-6 text-primary" />
                            </div>
                            <div className="text-left">
                                <h4 className="text-lg font-semibold mb-2">Web Development</h4>
                                <p className="text-muted-foreground text-sm">
                                    Building responsive and performant web applications with modern technologies and frameworks.
                                </p>
                            </div>
                        </div>
                    </div>
                    
                    <div className="gradient-border p-6 card-hover">
                        <div className="flex items-start gap-4">
                            <div className="p-3 rounded-full bg-primary/10">
                                <Search className="h-6 w-6 text-primary" />
                            </div>
                            <div className="text-left">
                                <h4 className="text-lg font-semibold mb-2">Wordpress SEO</h4>
                                <p className="text-muted-foreground text-sm">
                                    Optimizing WordPress sites for search engines to improve visibility and drive organic traffic.
                                </p>
                            </div>
                        </div>
                    </div>
                    
                    <div className="gradient-border p-6 card-hover">
                        <div className="flex items-start gap-4">
                            <div className="p-3 rounded-full bg-primary/10">
                                <Wrench className="h-6 w-6 text-primary" />
                            </div>
                            <div className="text-left">
                                <h4 className="text-lg font-semibold mb-2">Wordpress Site Setup&Maintenance</h4>
                                <p className="text-muted-foreground text-sm">
                                    Setting up and maintaining WordPress sites to ensure optimal performance and user experience.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
}