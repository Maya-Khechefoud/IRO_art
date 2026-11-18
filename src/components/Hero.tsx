import React from "react";

interface HeroProps {
    isColored: boolean;
    onToggleColor: () => void;
}

export const Hero: React.FC<HeroProps> = ({ isColored, onToggleColor }) => {
    return (
        <section className="w-full max-w-7xl mx-auto px-12 lg:px-24 lg:py-20 relative z-20 flex items-center">
            <div className="w-full max-w-xl flex flex-col items-start text-left">
                <h1 className="font-serif text-6xl lg:text-7xl leading-[1.1] tracking-wide text-white mb-8">
                    Touch of <br />
                    <span
                        className={`transition-colors duration-700 ${
                            isColored ? "text-accentPink" : "text-white"
                        }`}
                    >
                        color
                    </span>
                </h1>

                <p className="font-sans text-base lg:text-lg leading-relaxed text-white/90 max-w-md mb-12">
                    "Where shades of{" "}
                    <span
                        className={`transition-colors duration-700 ${
                            isColored ? "text-mutedGrey" : "text-white"
                        }`}
                    >
                        grey
                    </span>{" "}
                    meet{" "}
                    <span
                        className={`transition-colors duration-700 ${
                            isColored ? "text-accentPink" : "text-white"
                        }`}
                    >
                        vibrant
                    </span>{" "}
                    colors, every little detail becomes a piece of{" "}
                    <span
                        className={`transition-colors duration-700 ${
                            isColored ? "text-accentViolet" : "text-white"
                        }`}
                    >
                        art.
                    </span>{" "}
                    Let your imagination{" "}
                    <span
                        className={`transition-colors duration-700 ${
                            isColored ? "text-accentLime" : "text-white"
                        }`}
                    >
                        bloom."
                    </span>
                </p>

                <div className="flex items-center space-x-8">
                    <button className="font-serif text-base lg:text-lg px-9 py-4 rounded-full bg-white/25 hover:bg-white/35 backdrop-blur-md text-white transition-all duration-300 cursor-pointer">
                        Explore more
                    </button>

                    <button
                        onClick={onToggleColor}
                        className={`font-serif text-base lg:text-lg px-9 py-4 rounded-full transition-all duration-500 cursor-pointer ${
                            isColored
                                ? "bg-black border border-white/80 text-white hover:border-accentLime"
                                : "bg-accentPink border border-accentLime/60 text-white hover:brightness-110 shadow-[0_0_25px_rgba(255,77,141,0.35)]"
                        }`}
                    >
                        {isColored ? "Back to grey" : "Add color"}
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Hero;