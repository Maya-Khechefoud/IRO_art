import React from "react";

export const Navbar: React.FC = () => {
    return (
        <header className="w-full py-6 px-12 md:px-24 flex justify-center items-center z-50 relative">
            <nav className="w-full max-w-5xl border border-accentLime/40 rounded-full px-8 md:px-16 py-3 backdrop-blur-2xl bg-darkBg/50 flex items-center justify-between shadow-[0_0_30px_rgba(163,230,53,0.2)]">
                <button className="font-serif text-base md:text-lg tracking-widest text-accentPink hover:text-white transition-colors duration-300 uppercase cursor-pointer">
                    HOME
                </button>

                <button className="font-serif text-base md:text-lg tracking-widest text-mutedGrey hover:text-white transition-colors duration-300 uppercase cursor-pointer">
                    GALLERY
                </button>

                <button className="font-serif text-base md:text-lg tracking-widest text-mutedGrey hover:text-white transition-colors duration-300 uppercase cursor-pointer">
                    About
                </button>
            </nav>
        </header>
    );
};

export default Navbar;