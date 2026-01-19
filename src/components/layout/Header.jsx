import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ChevronDown, Phone, Mail, Facebook, Instagram } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import logo from '../../assets/images/vcc-logo.jpg';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState(null);

    const navigation = [
        { name: 'Home', href: '/' },
        { name: 'About', href: '/about' },
        { name: 'Events', href: '/events' },
        { name: 'Contact', href: '/contact' },
    ];

    return (
        <header className="w-full bg-white shadow-md sticky top-0 z-50">
            {/* Top Bar */}
            <div className="bg-secondary text-white py-1 hidden md:block">
                <div className="container mx-auto px-4 flex justify-between items-center text-sm">
                    <div className="flex items-center space-x-6">
                        <span className="flex items-center gap-2"><Phone size={14} /> (425) 123-4567</span>
                        <span className="flex items-center gap-2"><Mail size={14} /> info@vcclynnwood.org</span>
                    </div>
                    <div className="flex items-center space-x-4">
                        <a href="https://www.facebook.com/people/VCC-Lynwood/61581783850360/" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors"><Facebook size={16} /></a>
                        <a href="https://www.instagram.com/iskcon_lynnwood/" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors"><Instagram size={16} /></a>
                    </div>
                </div>
            </div>

            {/* Main Nav */}
            <nav className="container mx-auto px-2 md:px-4 py-2 md:py-4">
                <div className="flex justify-between items-center gap-2">
                    {/* Logo */}
                    <Link to="/" className="flex items-center gap-1 flex-1 min-w-0">
                        {/* Logo image - bigger on mobile, no max-width constraint */}
                        <img src={logo} alt="VCC Logo" className="h-10 md:h-12 w-auto flex-shrink-0 max-w-[220px] md:max-w-none object-contain object-left" />
                        {/* Desktop only: show text */}
                        <span className="hidden md:block text-2xl font-serif font-bold text-secondary whitespace-nowrap">VCC Lynnwood</span>
                        {/* Mobile: tiny Lynnwood badge */}
                        <span className="md:hidden text-[10px] font-bold text-white bg-secondary px-1.5 py-0.5 rounded whitespace-nowrap">Lynnwood</span>
                    </Link>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center space-x-8">
                        {navigation.map((item) => (
                            <div
                                key={item.name}
                                className="relative group"
                                onMouseEnter={() => setActiveDropdown(item.name)}
                                onMouseLeave={() => setActiveDropdown(null)}
                            >
                                <Link
                                    to={item.href}
                                    className="font-medium hover:text-primary transition-colors flex items-center gap-1 py-2"
                                >
                                    {item.name}
                                    {item.children && <ChevronDown size={14} />}
                                </Link>

                                {/* Dropdown */}
                                {item.children && (
                                    <AnimatePresence>
                                        {activeDropdown === item.name && (
                                            <motion.div
                                                initial={{ opacity: 0, y: 10 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                exit={{ opacity: 0, y: 10 }}
                                                className="absolute top-full left-0 w-48 bg-white shadow-xl rounded-md overflow-hidden py-2 border-t-2 border-primary"
                                            >
                                                {item.children.map((child) => (
                                                    <Link
                                                        key={child.name}
                                                        to={child.href}
                                                        className="block px-4 py-2 hover:bg-orange-50 hover:text-primary text-sm transition-colors"
                                                    >
                                                        {child.name}
                                                    </Link>
                                                ))}
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                )}
                            </div>
                        ))}
                        <a
                            href="https://www.vedicculturalcenter.org/sponsor/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-primary hover:bg-secondary text-white px-6 py-2 rounded-full font-medium transition-all transform hover:scale-105 shadow-md"
                        >
                            Donate
                        </a>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden text-secondary bg-orange-100 p-2 rounded-lg flex-shrink-0"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </nav>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-white border-t"
                    >
                        <div className="px-4 py-4 space-y-4">
                            {navigation.map((item) => (
                                <div key={item.name}>
                                    <Link
                                        to={item.href}
                                        className="block font-medium text-lg py-2"
                                        onClick={() => setIsOpen(false)}
                                    >
                                        {item.name}
                                    </Link>
                                    {item.children && (
                                        <div className="pl-4 space-y-2 border-l-2 border-primary mt-2">
                                            {item.children.map(child => (
                                                <Link
                                                    key={child.name}
                                                    to={child.href}
                                                    className="block text-gray-600 py-1"
                                                    onClick={() => setIsOpen(false)}
                                                >
                                                    {child.name}
                                                </Link>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            ))}
                            <div className="pt-4 border-t">
                                <a
                                    href="https://www.vedicculturalcenter.org/sponsor/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="block w-full text-center bg-primary text-white py-3 rounded-md font-bold"
                                    onClick={() => setIsOpen(false)}
                                >
                                    Donate Now
                                </a>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
};

export default Header;
