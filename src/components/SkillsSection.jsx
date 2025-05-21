import { useState } from 'react';
import { cn } from '../lib/utils';
import { 
  Code2, 
  Palette, 
  FileCode, 
  CodepenIcon, 
  Layers, 
  FileText, 
  Search, 
  GitBranch 
} from 'lucide-react';

export const SkillsSection = () => {
    const skills = [
        { name: 'HTML', icon: Code2 },
        { name: 'CSS', icon: Palette },
        { name: 'JavaScript', icon: FileCode },
        { name: 'React', icon: CodepenIcon },
        { name: 'Tailwind CSS', icon: Layers },
        { name: 'WordPress', icon: FileText },
        { name: 'SEO', icon: Search },
        { name: 'Git', icon: GitBranch },
    ];

    return (
        <section id="skills" className="py-24 px-4 relative bg-secondary/30">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
                    My <span className="text-primary">Skills</span>
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {skills.map((skill, index) => {
                        const Icon = skill.icon;
                        return (
                            <div key={index} className="p-6 rounded-lg shadow-md card-hover">
                                <div className="text-left mb-4">
                                    <div className="flex items-center gap-3 mb-2">
                                        <div className="p-2 rounded-full bg-primary/10">
                                            <Icon className="h-5 w-5 text-primary" />
                                        </div>
                                        <h3 className="font-semibold text-lg">{skill.name}</h3>
                                    </div>
                                    <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden mt-2">
                                        <div 
                                            className="bg-primary h-2 rounded-full origin-left animate-grow"
                                            style={{ 
                                                width: '100%',
                                                animationDelay: `${index * 0.1}s`
                                            }}
                                        />
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};
