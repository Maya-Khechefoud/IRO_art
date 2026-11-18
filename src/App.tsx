import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

export function App() {
    const [isColored, setIsColored] = useState(false);

    const handleToggleColor = () => {
        setIsColored((prev) => !prev);
    };

    return (
        <div className="min-h-screen bg-darkBg text-white relative overflow-hidden flex flex-col justify-between">
            <Navbar />
            <main className="flex-grow flex items-center">
                <Hero isColored={isColored} onToggleColor={handleToggleColor} />
            </main>
        </div>
    );
}

export default App;