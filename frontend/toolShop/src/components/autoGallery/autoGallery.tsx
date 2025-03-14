import { useState, useEffect } from "react";

const images = [
    "https://i.imgur.com/lke7KKa.jpeg",
    "https://i.imgur.com/TLzoG6K.jpeg",
    "https://i.imgur.com/lke7KKa.jpeg",
    "https://i.imgur.com/TLzoG6K.jpeg",
];

export default function AutoGallery() {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 500); 
        return () => clearInterval(interval); 
    }, []);

    return (
        <div className="relative w-full max-w-lg mx-auto">
            <img
                src={images[currentIndex]}
                alt={`Gallery ${currentIndex}`}
                className="w-full h-auto rounded-lg shadow-md transition-opacity"
            />
        </div>
    );
}