import React from 'react';
import { ExternalLink, Instagram } from 'lucide-react';

const Events = () => {
    return (
        <div className="bg-surface min-h-screen py-12">
            <div className="container mx-auto px-4">
                <div className="bg-white p-8 rounded-lg shadow-sm">
                    <h1 className="text-3xl font-serif font-bold text-secondary mb-6 border-b pb-4">Events & Programs</h1>

                    {/* Weekly Programs - Now at the top */}
                    <div className="bg-orange-50 border-l-4 border-primary p-6 mb-8 rounded-r-lg">
                        <h2 className="text-2xl font-serif font-bold text-secondary mb-4">VCC Lynnwood Weekly Programs</h2>
                        <ul className="text-gray-700 space-y-3">
                            <li className="flex items-start gap-2">
                                <span className="bg-primary text-white text-xs px-2 py-1 rounded font-bold min-w-[40px] text-center">FRI</span>
                                <div>
                                    <strong>Class by HH Harivilas Maharaj</strong> (7:00 PM) | <strong>Kirtan</strong> (8:00 PM)
                                    <div className="text-sm text-green-700 mt-1">🍽️ Dinner Prasadam served</div>
                                </div>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="bg-primary text-white text-xs px-2 py-1 rounded font-bold min-w-[40px] text-center">SAT</span>
                                <div>
                                    <strong>Kirtan</strong> - 6:30 PM to 8:30 PM
                                    <div className="text-sm text-green-700 mt-1">🍽️ Dinner Prasadam served</div>
                                </div>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="bg-primary text-white text-xs px-2 py-1 rounded font-bold min-w-[40px] text-center">SUN</span>
                                <span><strong>Bhagavad Gita Class for Adults</strong> - 11:00 AM to 1:00 PM</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="bg-secondary text-white text-xs px-2 py-1 rounded font-bold min-w-[40px] text-center">SUN</span>
                                <div>
                                    <strong>Vedic School & Feast Prasadam</strong> - 6:30 PM to 8:30 PM
                                    <ul className="ml-2 mt-2 text-sm text-gray-600 space-y-1">
                                        <li>• Kishora Class (10+ years)</li>
                                        <li>• Gopinath Class (6-9 years)</li>
                                        <li>• Damodar Class (3-5 years)</li>
                                    </ul>
                                    <div className="text-sm text-green-700 mt-1">🍽️ Dinner Prasadam served</div>
                                </div>
                            </li>
                        </ul>
                    </div>

                    {/* Discover Yourself Program */}
                    <div className="bg-gradient-to-br from-blue-50 to-indigo-50 border-l-4 border-blue-500 p-6 mb-8 rounded-r-lg">
                        <h2 className="text-2xl font-serif font-bold text-secondary mb-4 flex items-center gap-3">
                            <span className="text-3xl">📖</span>
                            Discover Yourself Program (DYS)
                        </h2>
                        <div className="flex flex-col lg:flex-row gap-6 items-start mb-4">
                            <div className="lg:w-80 flex-shrink-0">
                                <img
                                    src="/images/discover-yourself-hires.png"
                                    alt="Discover Yourself Program"
                                    className="w-full h-full object-cover rounded-lg shadow-lg"
                                />
                            </div>
                            <div className="flex-1">
                                <p className="text-gray-700 mb-4 leading-relaxed">
                                    <strong>Discover Your Self (DYS)</strong> is a systematic program that enhances your Spiritual Quotient (SQ) and Emotional Quotient (EQ) through the wisdom of the Bhagavad Gita and Vedic teachings.
                                </p>
                                <p className="text-gray-700 mb-4 leading-relaxed">
                                    Through interactive sessions, you'll gain profound insights into fundamental questions about life, purpose, and satisfaction. The program explores scientific perspectives on the soul, consciousness, reincarnation, and the relationship between body and spirit, while improving personality development through ancient Vedic wisdom.
                                </p>
                            </div>
                        </div>

                        <div className="mb-4">
                            <h3 className="font-bold text-lg text-secondary mb-3">What You'll Learn:</h3>
                            <ul className="text-gray-700 space-y-2 ml-4">
                                <li className="flex items-start gap-2">
                                    <span className="text-blue-500 mt-1">•</span>
                                    <span><strong>The Science of the Soul:</strong> Understanding consciousness, the relationship between body and soul</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-blue-500 mt-1">•</span>
                                    <span><strong>Life's Fundamental Questions:</strong> Exploring creation, purpose, happiness, and satisfaction</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-blue-500 mt-1">•</span>
                                    <span><strong>Reincarnation & Karma:</strong> Scientific and scriptural perspectives on life after death</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-blue-500 mt-1">•</span>
                                    <span><strong>Bhagavad Gita Wisdom:</strong> Practical application of timeless teachings for modern life</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-blue-500 mt-1">•</span>
                                    <span><strong>Personality Development:</strong> Enhancing Spiritual Quotient (SQ) and Emotional Quotient (EQ)</span>
                                </li>
                            </ul>
                        </div>

                        <div className="bg-white/70 p-4 rounded-lg border-l-4 border-blue-400">
                            <p className="text-gray-700 text-sm mb-2">
                                <strong>Program Format:</strong> Interactive sessions combining lectures, discussions, and Q&A
                            </p>
                            <p className="text-gray-700 text-sm italic">
                                For more information about the program schedule, registration, and upcoming batches, please contact us or visit during our regular programs.
                            </p>
                        </div>
                    </div>

                    {/* Kirtan Buddies */}
                    <div className="bg-pink-50 border-l-4 border-pink-400 p-6 mb-8 rounded-r-lg">
                        <div className="flex flex-col md:flex-row gap-6 items-center md:items-start">
                            <img
                                src="/images/kirtan-buddies-logo.png"
                                alt="Kirtan Buddies Logo"
                                className="w-32 h-32 object-contain flex-shrink-0"
                            />
                            <div className="flex-1">
                                <h2 className="text-2xl font-serif font-bold text-secondary mb-4">Kirtan Buddies</h2>
                                <p className="text-gray-700 mb-4">
                                    <strong>A youth-driven initiative at VCC Lynnwood!</strong> Kirtan Buddies is dedicated to getting kids involved in devotional service and congregational chanting from a young age.
                                </p>
                                <p className="text-gray-700 mb-4">
                                    Kids of all ages can participate and learn from their peers through:
                                </p>
                                <ul className="text-gray-700 space-y-2 ml-4 mb-4">
                                    <li className="flex items-center gap-2">
                                        <span className="text-pink-500">•</span> Singing and chanting
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <span className="text-pink-500">•</span> Dancing
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <span className="text-pink-500">•</span> Learning instruments - Harmonium, Mridanga, Kartals
                                    </li>
                                </ul>
                                <a
                                    href="https://www.instagram.com/kirtan.buddies"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 bg-gradient-to-br from-purple-600 via-pink-500 to-orange-400 text-white px-5 py-2 rounded-full hover:opacity-90 transition-opacity font-medium"
                                >
                                    <Instagram size={18} /> Follow on Instagram
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Festival & Ekadashi Calendars */}
                    <h2 className="text-2xl font-serif font-bold text-secondary mb-4">Festival Calendar 2026</h2>
                    <p className="text-gray-600 mb-6">
                        VCC Lynnwood follows the festival calendar of our parent temple, <a href="https://www.vedicculturalcenter.org/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Vedic Cultural Center, Seattle</a>.
                    </p>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                        {/* Festival Calendar */}
                        <div>
                            <h3 className="text-xl font-bold text-secondary mb-4">Festival Calendar</h3>
                            <a href="/images/festival-calendar-2026.png" target="_blank" rel="noopener noreferrer">
                                <img
                                    src="/images/festival-calendar-2026.png"
                                    alt="VCC Festival Calendar 2026"
                                    className="w-full rounded-lg shadow-md hover:shadow-xl transition-shadow border"
                                />
                            </a>
                        </div>

                        {/* Ekadashi Calendar */}
                        <div>
                            <h3 className="text-xl font-bold text-secondary mb-4">Ekadashi Calendar</h3>
                            <a href="/images/ekadashi-calendar-2026.png" target="_blank" rel="noopener noreferrer">
                                <img
                                    src="/images/ekadashi-calendar-2026.png"
                                    alt="VCC Ekadashi Calendar 2026"
                                    className="w-full rounded-lg shadow-md hover:shadow-xl transition-shadow border"
                                />
                            </a>
                        </div>
                    </div>

                    <div className="text-center">
                        <a
                            href="https://www.vedicculturalcenter.org/events/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 bg-secondary text-white px-8 py-3 rounded-full hover:bg-primary transition-colors font-medium"
                        >
                            View Full Calendar on VCC Sammamish <ExternalLink size={18} />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Events;
