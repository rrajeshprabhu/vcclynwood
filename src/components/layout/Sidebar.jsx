import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, MapPin, Clock } from 'lucide-react';

const Sidebar = () => {
    return (
        <div className="space-y-8">
            {/* Donate Widget */}
            <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-primary">
                <h3 className="text-xl font-serif font-bold mb-3 flex items-center gap-2">
                    <Heart className="text-primary fill-current" size={20} />
                    Support Us
                </h3>
                <p className="text-gray-600 mb-4 text-sm">
                    Your generous donations help us maintain the temple and serve the community.
                </p>
                <Link
                    to="/donate"
                    className="block w-full text-center bg-primary hover:bg-secondary text-white py-3 rounded-md font-bold transition-colors"
                >
                    Donate Now
                </Link>
            </div>

            {/* Location Widget */}
            <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-serif font-bold mb-4 flex items-center gap-2">
                    <MapPin className="text-primary" size={20} />
                    Visit Us
                </h3>
                <div className="text-gray-600 text-sm space-y-3">
                    <p>
                        <strong>VCC Lynnwood</strong><br />
                        4305 178th Pl SW,<br />
                        Lynnwood, WA 98037
                    </p>
                    <div className="h-40 bg-gray-200 rounded-md flex items-center justify-center text-gray-400 text-xs">
                        [Google Map Placeholder]
                    </div>
                    <a href="#" className="block text-primary hover:underline text-xs">Get Directions &rarr;</a>
                </div>
            </div>

            {/* Hours Widget */}
            <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-serif font-bold mb-4 flex items-center gap-2">
                    <Clock className="text-primary" size={20} />
                    Temple Hours
                </h3>
                <ul className="text-sm text-gray-600 space-y-2">
                    <li className="flex justify-between">
                        <span>Fri - Sat:</span>
                        <span className="font-medium">6:30 PM - 8:30 PM</span>
                    </li>
                    <li className="flex justify-between">
                        <span>Sunday:</span>
                        <span className="font-medium">6:30 PM - 8:30 PM</span>
                    </li>
                    <li className="flex justify-between text-gray-400">
                        <span>Mon - Thu:</span>
                        <span className="font-medium">Closed</span>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Sidebar;
