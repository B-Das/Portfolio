import { Moon, Sun } from "lucide-react";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

export const ThemeToggle = () => {
    // Initialize state based on current class on html element
    const [isDark, setIsDark] = useState(() => {
        return document.documentElement.classList.contains("dark");
    });
    
    const toggleTheme = () => {
        const newIsDark = !isDark;
        
        // Update the DOM
        if (newIsDark) {
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme", "dark");
        } else {
            document.documentElement.classList.remove("dark");
            localStorage.setItem("theme", "light");
        }
        
        // Update state
        setIsDark(newIsDark);
    };
    
    return (
        <button
            onClick={toggleTheme}
            className={cn(
                "fixed max-sm:hidden top-5 right-5 z-50 rounded-full transition-colors duration-300",
                "focus:outline-none w-9 h-9 flex items-center justify-center"
            )}
            aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
            type="button"
        >
            {isDark ? (
                <Sun className="w-5 h-5 text-yellow-300" />
            ) : (
                <Moon className="w-5 h-5 text-blue-900" />
            )}
        </button>
    );
};