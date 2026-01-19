import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, MapPin, Mail, Phone } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white pt-16 pb-8">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
                    {/* About */}
                    <div>
                        <h3 className="text-xl font-serif font-bold text-primary mb-4">VCC Lynnwood</h3>
                        <p className="text-gray-400 mb-6 leading-relaxed">
                            Dedicated to preserving and promoting Vedic culture, spiritual values, and community service. Join us in our journey of devotion and learning.
                        </p>
                        <h4 className="text-sm font-bold text-white mb-3">Follow Us</h4>
                        <div className="flex space-x-4">
                            <a href="https://www.facebook.com/people/VCC-Lynwood/61581783850360/" target="_blank" rel="noopener noreferrer" className="bg-blue-600 p-3 rounded-full hover:bg-blue-700 text-white transition-colors flex items-center gap-2">
                                <Facebook size={22} />
                            </a>
                            <a href="https://www.instagram.com/iskcon_lynnwood/" target="_blank" rel="noopener noreferrer" className="bg-gradient-to-br from-purple-600 via-pink-500 to-orange-400 p-3 rounded-full hover:opacity-90 text-white transition-colors flex items-center gap-2">
                                <Instagram size={22} />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-lg font-bold mb-4 border-b border-gray-700 pb-2 inline-block">Quick Links</h3>
                        <ul className="space-y-2 text-gray-400">
                            <li><Link to="/about" className="hover:text-primary transition-colors">About Us</Link></li>
                            <li><Link to="/events" className="hover:text-primary transition-colors">Upcoming Events</Link></li>
                            <li><a href="https://www.vedicculturalcenter.org/sponsor/" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">Donate</a></li>
                            <li><Link to="/contact" className="hover:text-primary transition-colors">Contact Us</Link></li>
                        </ul>
                    </div>

                    {/* Weekly Programs */}
                    <div>
                        <h3 className="text-lg font-bold mb-4 border-b border-gray-700 pb-2 inline-block">Weekly Programs</h3>
                        <ul className="space-y-2 text-gray-400 text-sm">
                            <li><Link to="/events" className="hover:text-primary transition-colors">Fri: Class & Kirtan (7 PM)</Link></li>
                            <li><Link to="/events" className="hover:text-primary transition-colors">Sat: Kirtan (6:30 PM)</Link></li>
                            <li><Link to="/events" className="hover:text-primary transition-colors">Sun AM: BG Class (11 AM)</Link></li>
                            <li><Link to="/events" className="hover:text-primary transition-colors">Sun PM: Vedic School & Feast (6:30 PM)</Link></li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="text-lg font-bold mb-4 border-b border-gray-700 pb-2 inline-block">VCC Lynnwood</h3>
                        <ul className="space-y-3 text-gray-400 text-sm">
                            <li className="flex items-start gap-2">
                                <MapPin className="text-primary mt-1 flex-shrink-0" size={16} />
                                <span>4305 178th Pl SW,<br />Lynnwood, WA 98037</span>
                            </li>
                        </ul>

                        <h3 className="text-lg font-bold mb-4 mt-6 border-b border-gray-700 pb-2 inline-block">VCC Sammamish</h3>
                        <ul className="space-y-3 text-gray-400 text-sm">
                            <li className="flex items-start gap-2">
                                <MapPin className="text-primary mt-1 flex-shrink-0" size={16} />
                                <span>1420 228th Ave SE,<br />Sammamish, WA 98075</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <Mail className="text-primary flex-shrink-0" size={16} />
                                <a href="mailto:info@vedicculturalcenter.org" className="hover:text-primary transition-colors">info@vedicculturalcenter.org</a>
                            </li>
                            <li className="flex items-start gap-2">
                                <Phone className="text-primary mt-1 flex-shrink-0" size={16} />
                                <div>
                                    <span>Namavrata Das: +1 (206) 979-8002</span><br />
                                    <span>Damodar Prasad Das: +1 (425) 761-4605</span>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-gray-800 pt-8 text-center text-gray-500 text-sm">
                    <p>&copy; {new Date().getFullYear()} Vedic Cultural Center Lynnwood. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
