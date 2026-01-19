import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const slides = [
    {
        id: 1,
        image: '/images/harivilas-maharaj-class.png',
        title: 'Friday Program',
        subtitle: 'Class by HH Harivilas Maharaj at 7 PM followed by Kirtan at 8 PM.',
        cta: 'Join Us',
        link: '/events',
        isFlyer: true
    },
    {
        id: 2,
        image: '/images/weekly-bg-class.png',
        title: 'Sunday Bhagavad Gita Class',
        subtitle: 'Weekly Bhagavad Gita class by Kasam every Sunday.',
        cta: 'View Schedule',
        link: '/events',
        isFlyer: true
    },
    {
        id: 3,
        image: '/images/hero-image-feastsponsor.webp',
        title: 'Sponsor a Feast',
        subtitle: 'Support our community by sponsoring a Sunday feast prasadam.',
        cta: 'Sponsor Now',
        link: 'https://www.vedicculturalcenter.org/sponsor/',
        isFlyer: true,
        isExternal: true
    },
    {
        id: 4,
        image: '/images/hero-image-1.webp',
        title: 'Welcome to VCC Lynnwood',
        subtitle: 'Experience the joy of spiritual community in Seattle North.',
        cta: 'Learn More',
        link: '/about'
    },
    {
        id: 5,
        image: '/images/hero-image-2.webp',
        title: 'Friday Kirtan',
        subtitle: 'Experience the joy of congregational chanting every Friday evening.',
        cta: 'Join Us',
        link: '/events'
    },
    {
        id: 6,
        image: '/images/Hero-image-3.webp',
        title: 'Welcome to VCC Lynnwood',
        subtitle: 'A spiritual home for the Seattle North community under the guidance of HH Harivilas Maharaj.',
        cta: 'Learn More',
        link: '/about'
    }
];

const Hero = () => {
    const [current, setCurrent] = useState(0);
    const [direction, setDirection] = useState(1); // 1 for next, -1 for prev

    useEffect(() => {
        const timer = setInterval(() => {
            setDirection(1);
            setCurrent((prev) => (prev + 1) % slides.length);
        }, 4000); // 4 seconds per slide
        return () => clearInterval(timer);
    }, []);

    const nextSlide = () => {
        setDirection(1);
        setCurrent((prev) => (prev + 1) % slides.length);
    };

    const prevSlide = () => {
        setDirection(-1);
        setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
    };

    const currentSlide = slides[current];

    // Slide animation variants
    const slideVariants = {
        enter: (direction) => ({
            x: direction > 0 ? '100%' : '-100%',
            opacity: 0
        }),
        center: {
            x: 0,
            opacity: 1
        },
        exit: (direction) => ({
            x: direction > 0 ? '-100%' : '100%',
            opacity: 0
        })
    };

    return (
        <div className="relative bg-white">
            {/* Container with margins */}
            <div className="container mx-auto px-4 py-4">
                <div className="relative rounded-lg overflow-hidden shadow-2xl">
                    {/* Slide Container - fixed height for all slides */}
                    <div className="relative h-[500px] md:h-[550px]">
                        <AnimatePresence initial={false} custom={direction} mode="wait">
                            <motion.div
                                key={current}
                                custom={direction}
                                variants={slideVariants}
                                initial="enter"
                                animate="center"
                                exit="exit"
                                transition={{
                                    x: { type: "spring", stiffness: 300, damping: 30 },
                                    opacity: { duration: 0.3 }
                                }}
                                className="absolute inset-0 flex items-center justify-center"
                            >
                                {currentSlide.isFlyer ? (
                                    /* Flyer Display - fit within fixed height */
                                    <div className="w-full h-full flex items-center justify-center bg-amber-950 p-4">
                                        <img
                                            src={currentSlide.image}
                                            alt={currentSlide.title}
                                            className="max-w-full max-h-full object-contain"
                                        />
                                    </div>
                                ) : (
                                    /* Hero Image Display */
                                    <div className="relative w-full h-full">
                                        <img
                                            src={currentSlide.image}
                                            alt={currentSlide.title}
                                            className="w-full h-full object-cover"
                                            style={{ minHeight: '500px', maxHeight: '600px' }}
                                        />
                                        {/* Overlay */}
                                        <div className="absolute inset-0 bg-black/40" />
                                        {/* Text Content */}
                                        <div className="absolute inset-0 flex items-center justify-center text-center px-4">
                                            <div className="max-w-3xl z-10">
                                                <motion.h1
                                                    key={`title-${current}`}
                                                    initial={{ y: 20, opacity: 0 }}
                                                    animate={{ y: 0, opacity: 1 }}
                                                    transition={{ delay: 0.2, duration: 0.8 }}
                                                    className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-4"
                                                    style={{ color: '#ffffff', textShadow: '2px 2px 8px rgba(0,0,0,0.8)' }}
                                                >
                                                    {currentSlide.title}
                                                </motion.h1>
                                                <motion.p
                                                    key={`sub-${current}`}
                                                    initial={{ y: 20, opacity: 0 }}
                                                    animate={{ y: 0, opacity: 1 }}
                                                    transition={{ delay: 0.4, duration: 0.8 }}
                                                    className="text-lg md:text-xl lg:text-2xl mb-6 font-light"
                                                    style={{ color: '#ffffff', textShadow: '1px 1px 4px rgba(0,0,0,0.8)' }}
                                                >
                                                    {currentSlide.subtitle}
                                                </motion.p>
                                                <motion.div
                                                    key={`btn-${current}`}
                                                    initial={{ y: 20, opacity: 0 }}
                                                    animate={{ y: 0, opacity: 1 }}
                                                    transition={{ delay: 0.6, duration: 0.8 }}
                                                    whileHover={{ scale: 1.05 }}
                                                    whileTap={{ scale: 0.95 }}
                                                >
                                                    {currentSlide.isExternal ? (
                                                        <a
                                                            href={currentSlide.link}
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                            className="bg-primary hover:bg-white hover:text-secondary text-white px-8 py-3 rounded-full text-lg font-semibold shadow-lg transition-colors inline-block"
                                                        >
                                                            {currentSlide.cta}
                                                        </a>
                                                    ) : (
                                                        <Link
                                                            to={currentSlide.link || '/about'}
                                                            className="bg-primary hover:bg-white hover:text-secondary text-white px-8 py-3 rounded-full text-lg font-semibold shadow-lg transition-colors inline-block"
                                                        >
                                                            {currentSlide.cta}
                                                        </Link>
                                                    )}
                                                </motion.div>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    {/* Controls */}
                    <button
                        onClick={prevSlide}
                        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-primary text-white p-2 rounded-full backdrop-blur-sm transition-all z-20"
                    >
                        <ChevronLeft size={28} />
                    </button>
                    <button
                        onClick={nextSlide}
                        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-primary text-white p-2 rounded-full backdrop-blur-sm transition-all z-20"
                    >
                        <ChevronRight size={28} />
                    </button>

                    {/* Indicators */}
                    <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex space-x-2 z-20">
                        {slides.map((_, idx) => (
                            <button
                                key={idx}
                                onClick={() => setCurrent(idx)}
                                className={`h-3 rounded-full transition-all ${idx === current
                                    ? 'bg-primary w-8'
                                    : 'bg-white/50 hover:bg-white w-3'
                                    }`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
