import { ArrowDownIcon } from "lucide-react";

export const HeroSection = () => {
    return(
        <section id="hero" 
        className="min-h-screen flex flex-col items-center justify-center">
            <div className="container max-w-4xl text-center z-10 px-4">
                <div
                className="space-y-4">
                    <h1 className="text-4xl md:text-6xl font-bold">
                    <span className="opacity-0 animate-fade-in"> Hi,I'm </span>
                    <span className="text-primary opacity-0 animate-fade-in delay-1">Biraj</span>
                    <span className="text-gradient opacity-0 animate-fade-in delay-2"> 
                      {" "}  I'm a</span>
                      <span className="text-primary opacity-0 animate-fade-in delay-3"> Frontend </span>
                      <span className="text-gradient opacity-0 animate-fade-in delay-4"> developer</span>
                    </h1>
                    <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto opacity-0 animate-fade-in delay-3">
                        I'm a frontend developer with a passion for creating user-friendly and efficient web applications.
                    </p>

<div className="pt-4 opacity-0 animate-fade-in delay-4">
    <a href="#projects" className="cosmic-button">
        view my work
    </a>
</div>

                
                </div>
            </div>

            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
                <span className="text-sm text-muted-foreground">Scroll</span>
                <ArrowDownIcon className="w-6 h-6 text-primary" />
            </div>
        </section>
    )
}
