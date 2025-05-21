import { useState, useEffect } from "react";

export const StarBackground = () => {
    const [stars, setStars] = useState([]);
    const [meteors, setMeteors] = useState([]);

    useEffect(() => {
        generateStars();
        generateMeteors();
        
        // Add interval to continuously generate new meteors
        const meteorInterval = setInterval(() => {
            generateMeteors();
        }, 5000); // Generate new meteors every 5 seconds
        
        return () => clearInterval(meteorInterval);
    }, []);

    const generateStars = () => {
        const numberOfStars = Math.floor(window.innerWidth / 100);

        const newStars = [];
        for (let i = 0; i < numberOfStars; i++) {
            newStars.push({
                id: i,
                size: Math.random() * 3 + 1,
                x: Math.random() * 100,
                y: Math.random() * 100,
                opacity: Math.random() * 0.5 + 0.5,
                animationDuration: Math.random() * 4 + 2,
            });
        };
        setStars(newStars);
    };

    const generateMeteors = () => {
        const numberOfMeteors = Math.floor(window.innerWidth / 200);
        const newMeteors = [];
        for (let i = 0; i < numberOfMeteors; i++) {
            newMeteors.push({
                id: i + Date.now(), // Ensure unique IDs when regenerating
                size: Math.random() * 1 + 0.5,
                x: Math.random() * 100, // Use full screen width (0-100%)
                y: Math.random() * 10,
                delay: Math.random() * 0.5, // Reduced delay to max 0.5 seconds
                animationDuration: Math.random() * 3 + 4, // Slower animation (4-7 seconds)
            });
        }
        setMeteors(newMeteors);
    };

    return <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        {stars.map((star) => (
            <div key={star.id} className="star animate-pulse subtle" style={{
                width: star.size + "px",
                height: star.size + "px",
                left: star.x + "%",
                top: star.y + "%",
                opacity: star.opacity,
                animationDuration: star.animationDuration + "s",
            }}></div>
        ))}
        {meteors.map((meteor) => (
            <div key={meteor.id} className="meteor animate-meteor" style={{
                width: meteor.size * 30 + "px",
                height: meteor.size * 0.5 + "px",
                left: meteor.x + "%",
                top: meteor.y + "%",
                animationDelay: meteor.delay + "s",
                animationDuration: meteor.animationDuration + "s",
                transform: "rotate(45deg)",
            }}></div>
        ))}
    </div>;
};
