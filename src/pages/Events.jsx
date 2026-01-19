import React from 'react';
import { ExternalLink } from 'lucide-react';

const Events = () => {
    return (
        <div className="bg-surface min-h-screen py-12">
            <div className="container mx-auto px-4">
                <div className="bg-white p-8 rounded-lg shadow-sm">
                    <h1 className="text-3xl font-serif font-bold text-secondary mb-4 border-b pb-4">Festival Calendar 2026</h1>
                    <p className="text-gray-600 mb-6">
                        VCC Lynnwood follows the festival calendar of our parent temple, <a href="https://www.vedicculturalcenter.org/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Vedic Cultural Center, Seattle</a>.
                        Please check below for upcoming festivals and events.
                    </p>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                        {/* Festival Calendar */}
                        <div>
                            <h2 className="text-xl font-bold text-secondary mb-4">Festival Calendar</h2>
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
                            <h2 className="text-xl font-bold text-secondary mb-4">Ekadashi Calendar</h2>
                            <a href="/images/ekadashi-calendar-2026.png" target="_blank" rel="noopener noreferrer">
                                <img
                                    src="/images/ekadashi-calendar-2026.png"
                                    alt="VCC Ekadashi Calendar 2026"
                                    className="w-full rounded-lg shadow-md hover:shadow-xl transition-shadow border"
                                />
                            </a>
                        </div>
                    </div>

                    <div className="bg-orange-50 border-l-4 border-primary p-4 mb-6">
                        <p className="font-bold text-secondary mb-3">VCC Lynnwood Weekly Programs</p>
                        <ul className="text-gray-700 space-y-2">
                            <li><strong>Friday:</strong> Class by HH Harivilas Maharaj (7:00 PM) | Kirtan (8:00 PM)</li>
                            <li><strong>Saturday:</strong> Kirtan - 6:30 PM to 8:30 PM</li>
                            <li><strong>Sunday Morning:</strong> Bhagavad Gita Class for Adults - 11:00 AM to 1:00 PM</li>
                            <li>
                                <strong>Sunday Evening:</strong> Vedic School & Feast Prasadam - 6:30 PM to 8:30 PM
                                <ul className="ml-4 mt-1 text-sm text-gray-600">
                                    <li>• Kishora Class (10+ years)</li>
                                    <li>• Gopinath Class (6-9 years)</li>
                                    <li>• Damodar Class (3-5 years)</li>
                                </ul>
                            </li>
                        </ul>
                    </div>

                    <div className="text-center">
                        <a
                            href="https://www.vedicculturalcenter.org/events/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 bg-secondary text-white px-8 py-3 rounded-full hover:bg-primary transition-colors font-medium"
                        >
                            View Full Calendar on VCC Seattle <ExternalLink size={18} />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Events;
