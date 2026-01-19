import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

// Placeholder sponsors - update this list with actual sponsor names
const sponsors = [
    "Sponsor Family 1",
    "Sponsor Family 2",
    "Sponsor Family 3",
    "Sponsor Family 4",
    "Sponsor Family 5",
];

const FeastSponsors = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % sponsors.length);
        }, 3000);
        return () => clearInterval(timer);
    }, []);

    const nextSponsor = () => {
        setCurrentIndex((prev) => (prev + 1) % sponsors.length);
    };

    const prevSponsor = () => {
        setCurrentIndex((prev) => (prev - 1 + sponsors.length) % sponsors.length);
    };

    // Get visible sponsors (show 3 at a time)
    const getVisibleSponsors = () => {
        const visible = [];
        for (let i = 0; i < Math.min(3, sponsors.length); i++) {
            const index = (currentIndex + i) % sponsors.length;
            visible.push({ name: sponsors[index], index });
        }
        return visible;
    };

    return (
        <section className="py-12 bg-white">
            <div className="container mx-auto px-4">
                <div className="max-w-5xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-0 rounded-xl overflow-hidden shadow-xl border border-orange-200">
                        {/* Left side - Image */}
                        <div className="relative h-64 md:h-auto">
                            <img
                                src="/images/krishna-feast-sponsor.webp"
                                alt="Sunday Feast Prasadam"
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                                <p className="text-white text-sm text-center">
                                    Sponsor a Feast at{' '}
                                    <a
                                        href="https://www.vedicculturalcenter.org/sponsor/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-orange-300 hover:text-orange-200 underline"
                                    >
                                        vedicculturalcenter.org/sponsor
                                    </a>
                                </p>
                            </div>
                            {/* Navigation arrows */}
                            <button
                                onClick={prevSponsor}
                                className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/30 hover:bg-white/50 text-white p-2 rounded-full backdrop-blur-sm transition-all"
                            >
                                <ChevronLeft size={20} />
                            </button>
                            <button
                                onClick={nextSponsor}
                                className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/30 hover:bg-white/50 text-white p-2 rounded-full backdrop-blur-sm transition-all"
                            >
                                <ChevronRight size={20} />
                            </button>
                        </div>

                        {/* Right side - Sponsors list */}
                        <div className="bg-gradient-to-b from-orange-100 to-orange-200">
                            {/* Header */}
                            <div className="bg-orange-100 p-4 text-center border-b border-orange-200">
                                <h3 className="text-2xl font-serif font-bold text-secondary mb-1">
                                    <span className="bg-secondary text-white px-3 py-1 rounded">Feast Sponsors</span>
                                </h3>
                                <p className="text-lg font-bold text-secondary mt-2">VCC Lynnwood</p>
                            </div>

                            {/* Sponsors list with animation */}
                            <div className="divide-y divide-orange-300/50">
                                {getVisibleSponsors().map((sponsor, idx) => (
                                    <div
                                        key={`${sponsor.index}-${idx}`}
                                        className={`py-4 px-6 text-center transition-all duration-500 ${
                                            idx === 0 ? 'bg-orange-50' : ''
                                        }`}
                                    >
                                        <p className={`font-serif ${
                                            idx === 0
                                                ? 'text-xl font-bold text-secondary'
                                                : 'text-lg text-gray-700'
                                        }`}>
                                            {sponsor.name}
                                        </p>
                                    </div>
                                ))}
                            </div>

                            {/* Empty rows to match design */}
                            {Array.from({ length: Math.max(0, 3 - sponsors.length) }).map((_, idx) => (
                                <div key={`empty-${idx}`} className="py-4 px-6 border-t border-orange-300/50">
                                    &nbsp;
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FeastSponsors;
