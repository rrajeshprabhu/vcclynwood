import React from 'react';
import Hero from '../components/home/Hero';
import { Calendar, Clock, MapPin, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className="flex flex-col">
            <Hero />

            {/* Quick Info Bar */}
            <div className="bg-white py-8 shadow-sm relative z-10 -mt-8 mx-4 md:mx-auto max-w-5xl rounded-lg grid grid-cols-1 md:grid-cols-2 gap-6 px-8">
                <div className="flex items-center gap-4">
                    <div className="bg-orange-100 p-3 rounded-full text-primary">
                        <Clock size={24} />
                    </div>
                    <div>
                        <h3 className="font-bold text-lg text-secondary">Temple Hours</h3>
                        <p className="text-sm text-gray-600">
                            <strong>Fri - Sun:</strong> 6:30 PM - 8:30 PM<br />
                            <strong>Mon - Thu:</strong> Closed
                        </p>
                    </div>
                </div>
                <a href="https://maps.google.com/?q=4305+178th+Pl+SW,+Lynnwood,+WA+98037" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 hover:bg-orange-50 rounded-lg p-2 -m-2 transition-colors">
                    <div className="bg-orange-100 p-3 rounded-full text-primary">
                        <MapPin size={24} />
                    </div>
                    <div>
                        <h3 className="font-bold text-lg text-secondary">Location</h3>
                        <p className="text-sm text-gray-600 hover:text-primary transition-colors">4305 178th Pl SW,<br />Lynnwood, WA 98037</p>
                    </div>
                </a>

            </div>

            {/* Welcome Section */}
            <section className="py-20 px-4 container mx-auto">
                <div className="flex flex-col md:flex-row items-center gap-12">
                    <div className="md:w-1/2">
                        <div className="relative">
                            <img
                                src="/images/hero-image-1.webp"
                                alt="VCC Lynnwood Community"
                                className="rounded-lg shadow-xl"
                            />
                        </div>
                    </div>
                    <div className="md:w-1/2">
                        <h4 className="text-primary font-bold uppercase tracking-wide mb-2">Welcome to VCC Lynnwood</h4>
                        <h2 className="text-4xl font-serif font-bold text-secondary mb-6">Serving Seattle North</h2>
                        <p className="text-gray-600 mb-6 leading-relaxed">
                            VCC Lynnwood is an extension of the <a href="https://www.vedicculturalcenter.org/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Vedic Cultural Center, Seattle</a>, bringing the timeless wisdom of the Vedas to the Seattle North community.
                        </p>
                        <p className="text-gray-600 mb-6 leading-relaxed">
                            Under the guidance of <strong>His Holiness Harivilas Maharaj</strong>, we are dedicated to creating a loving spiritual community. Whether you seek peace, knowledge, or fellowship, you are welcome here.
                        </p>
                        <p className="text-gray-600 mb-8 leading-relaxed">
                            Join us for kirtan, Bhagavad Gita classes, and Sunday feast prasadam.
                        </p>
                        <a href="https://www.vedicculturalcenter.org/about-us/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-secondary font-bold hover:text-primary transition-colors border-b-2 border-secondary hover:border-primary pb-1">
                            Learn More About VCC <ArrowRight size={16} />
                        </a>
                    </div>
                </div>
            </section>

            {/* Weekly Schedule */}
            <section className="bg-surface py-20 px-4">
                <div className="container mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-serif font-bold text-secondary mb-4">Weekly Schedule</h2>
                        <div className="w-20 h-1 bg-primary mx-auto"></div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {/* Event 1 - Friday Program */}
                        <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow group">
                            <div className="relative overflow-hidden h-48 bg-gradient-to-br from-orange-100 to-orange-50">
                                <img
                                    src="/images/friday-kirtan.jpg"
                                    alt="Friday Program"
                                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                                    onError={(e) => {
                                        e.target.style.display = 'none';
                                    }}
                                />
                                <div className="absolute top-4 left-4 bg-white px-3 py-1 rounded-md text-center shadow-sm">
                                    <span className="block text-lg font-bold text-secondary">FRI</span>
                                    <span className="block text-xs uppercase text-gray-500">WEEKLY</span>
                                </div>
                            </div>
                            <div className="p-5">
                                <h3 className="text-lg font-bold mb-2 text-gray-800 group-hover:text-primary transition-colors">Friday Program</h3>
                                <p className="text-gray-600 text-sm mb-3">Class by HH Harivilas Maharaj followed by kirtan.</p>
                                <div className="flex flex-col gap-1 text-sm text-gray-500">
                                    <div className="flex items-center gap-2">
                                        <Clock size={14} /> 7:00 PM - Class
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <Clock size={14} /> 8:00 PM - Kirtan
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Event 2 - Bhagavad Gita Class */}
                        <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow group">
                            <div className="relative overflow-hidden h-48 bg-gradient-to-br from-amber-800 to-amber-900">
                                <img
                                    src="/images/bhagavad-gita-class.jpg"
                                    alt="Bhagavad Gita Class"
                                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                                    onError={(e) => {
                                        e.target.style.display = 'none';
                                    }}
                                />
                                <div className="absolute inset-0 flex items-center justify-center" style={{ display: 'flex' }}>
                                    <span className="text-amber-200 text-4xl font-serif font-bold opacity-30">ॐ</span>
                                </div>
                                <div className="absolute top-4 left-4 bg-white px-3 py-1 rounded-md text-center shadow-sm">
                                    <span className="block text-lg font-bold text-secondary">SUN</span>
                                    <span className="block text-xs uppercase text-gray-500">MORNING</span>
                                </div>
                            </div>
                            <div className="p-5">
                                <h3 className="text-lg font-bold mb-2 text-gray-800 group-hover:text-primary transition-colors">Bhagavad Gita Class</h3>
                                <p className="text-gray-600 text-sm mb-3">Discourse on the timeless wisdom of the Gita for adults.</p>
                                <div className="flex items-center gap-2 text-sm text-gray-500">
                                    <Clock size={14} /> 11:00 AM - 1:00 PM
                                </div>
                            </div>
                        </div>

                        {/* Event 3 - Sunday Vedic School */}
                        <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow group">
                            <div className="relative overflow-hidden h-48 bg-gray-900">
                                <img
                                    src="/images/sunday-vedic-school.jpg"
                                    alt="Sunday Vedic School"
                                    className="w-full h-full object-contain transform group-hover:scale-105 transition-transform duration-500"
                                />
                                <div className="absolute top-4 left-4 bg-white px-3 py-1 rounded-md text-center shadow-sm">
                                    <span className="block text-lg font-bold text-secondary">SUN</span>
                                    <span className="block text-xs uppercase text-gray-500">EVENING</span>
                                </div>
                            </div>
                            <div className="p-5">
                                <h3 className="text-lg font-bold mb-2 text-gray-800 group-hover:text-primary transition-colors">Sunday Vedic School</h3>
                                <p className="text-gray-600 text-sm mb-3">Shloka recitation & moral stories for children (ages 3-10+).</p>
                                <div className="flex items-center gap-2 text-sm text-gray-500">
                                    <Clock size={14} /> 6:30 PM - 8:30 PM
                                </div>
                            </div>
                        </div>

                        {/* Event 4 - Sunday Feast */}
                        <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow group">
                            <div className="relative overflow-hidden h-48 bg-orange-50">
                                <img
                                    src="/images/sunday-feast.jpg"
                                    alt="Sunday Feast Prasadam"
                                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                                />
                                <div className="absolute top-4 left-4 bg-white px-3 py-1 rounded-md text-center shadow-sm">
                                    <span className="block text-lg font-bold text-secondary">SUN</span>
                                    <span className="block text-xs uppercase text-gray-500">EVENING</span>
                                </div>
                            </div>
                            <div className="p-5">
                                <h3 className="text-lg font-bold mb-2 text-gray-800 group-hover:text-primary transition-colors">Sunday Feast</h3>
                                <p className="text-gray-600 text-sm mb-3">Arati, Kirtan, Discourse and delicious vegetarian prasadam.</p>
                                <div className="flex items-center gap-2 text-sm text-gray-500">
                                    <Clock size={14} /> 6:30 PM - 8:30 PM
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="text-center mt-12">
                        <a href="https://www.vedicculturalcenter.org/events/" target="_blank" rel="noopener noreferrer" className="bg-secondary text-white px-8 py-3 rounded-full hover:bg-primary transition-colors font-medium inline-block">
                            View Full Calendar
                        </a>
                    </div>
                </div>
            </section>

            {/* Quote Section */}
            <section className="py-20 bg-gradient-to-br from-amber-50 to-orange-100 text-center px-4 relative overflow-hidden">
                <div className="absolute inset-0 opacity-5 bg-[url('https://www.transparenttextures.com/patterns/mandala.png')]"></div>
                <div className="container mx-auto relative z-10 max-w-4xl">
                    <p className="text-2xl md:text-3xl font-serif italic mb-4 text-amber-700 leading-relaxed">
                        हरेर्नाम हरेर्नाम हरेर्नामैव केवलम्।<br />
                        कलौ नास्त्येव नास्त्येव नास्त्येव गतिरन्यथा॥
                    </p>
                    <p className="text-lg md:text-xl font-serif italic mb-6 text-amber-600 leading-relaxed">
                        harer nāma harer nāma harer nāmaiva kevalam<br />
                        kalau nāsty eva nāsty eva nāsty eva gatir anyathā
                    </p>
                    <p className="text-xl md:text-2xl font-serif italic mb-8 text-gray-700 leading-relaxed">
                        "In this age of quarrel and hypocrisy, the only means of deliverance is the chanting of the holy names of the Lord. There is no other way. There is no other way. There is no other way."
                    </p>
                    <p className="font-bold text-lg text-primary">— Sri Caitanya-caritamrta, Madhya 6.242</p>
                </div>
            </section>

        </div>
    );
};

export default Home;
