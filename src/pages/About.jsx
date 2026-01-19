import { ArrowRight, Instagram, Facebook } from 'lucide-react';

const About = () => {
    return (
        <div className="bg-surface min-h-screen py-12">
            <div className="container mx-auto px-4">
                <div className="bg-white p-8 rounded-lg shadow-sm">
                    <h1 className="text-3xl font-serif font-bold text-secondary mb-4 border-b pb-4">About VCC Lynnwood</h1>

                    {/* Introduction */}
                    <div className="mb-10">
                        <p className="text-gray-700 mb-4 leading-relaxed text-lg">
                            <strong className="text-secondary">VCC Lynnwood</strong> is a branch of the{' '}
                            <a href="https://www.vedicculturalcenter.org/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-medium">
                                Vedic Cultural Center (VCC), Seattle
                            </a>, dedicated to serving the spiritual needs of the Seattle North community.
                        </p>
                        <p className="text-gray-700 mb-4 leading-relaxed">
                            As an extension of our parent temple in Sammamish, we bring the timeless wisdom of the Vedas, the joy of kirtan, and the warmth of spiritual community to Lynnwood and surrounding areas including Everett, Edmonds, Shoreline, and Mountlake Terrace.
                        </p>
                    </div>

                    {/* Our Parent Temple */}
                    <div className="mb-10">
                        <h2 className="text-2xl font-serif font-bold text-secondary mb-4">Our Parent Temple - VCC Sammamish</h2>
                        <div className="bg-orange-50 p-6 rounded-lg border-l-4 border-primary">
                            <p className="text-gray-700 mb-4 leading-relaxed">
                                The <strong>Vedic Cultural Center, Seattle</strong> is a community services initiative of ISKCON of Washington, located in Sammamish, WA. For over 25 years, VCC Sammamish has been a beacon of Vedic knowledge and spiritual culture in the Pacific Northwest.
                            </p>
                            <p className="text-gray-700 mb-4 leading-relaxed">
                                VCC Sammamish offers a wide range of programs including daily deity worship, Bhagavad Gita classes, Sunday Feast, Vedic School for children, Bhakti Women programs, Vedic University, and numerous festivals throughout the year.
                            </p>
                            <a href="https://www.vedicculturalcenter.org/about-us/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-primary font-bold hover:underline">
                                Learn more about VCC Sammamish <ArrowRight size={16} />
                            </a>
                        </div>
                    </div>

                    {/* Leadership */}
                    <div className="mb-10">
                        <h2 className="text-2xl font-serif font-bold text-secondary mb-4">Our Spiritual Leadership</h2>
                        <p className="text-gray-700 mb-4 leading-relaxed">
                            Both VCC Sammamish and VCC Lynnwood operate under the guidance and leadership of{' '}
                            <strong className="text-secondary">His Holiness Harivilas Maharaj</strong>, who has dedicated his life to spreading the teachings of Bhagavad Gita and the practice of Bhakti Yoga.
                        </p>
                        <p className="text-gray-700 mb-4 leading-relaxed">
                            Under his compassionate guidance, our community continues to grow, providing a loving environment for spiritual seekers of all backgrounds to learn, grow, and experience the joy of devotional service.
                        </p>
                    </div>

                    {/* Our Mission */}
                    <div className="mb-10">
                        <h2 className="text-2xl font-serif font-bold text-secondary mb-4">Our Mission</h2>
                        <p className="text-gray-700 mb-4 leading-relaxed">
                            VCC Lynnwood is committed to:
                        </p>
                        <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                            <li>Sharing the timeless wisdom of the Vedic scriptures</li>
                            <li>Creating a welcoming spiritual community for families in Seattle North</li>
                            <li>Offering regular kirtan (devotional chanting) programs</li>
                            <li>Providing Bhagavad Gita classes for spiritual education</li>
                            <li>Serving delicious vegetarian prasadam (sanctified food)</li>
                            <li>Celebrating Vedic festivals and traditions</li>
                        </ul>
                    </div>

                    {/* Weekly Programs */}
                    <div className="mb-10">
                        <h2 className="text-2xl font-serif font-bold text-secondary mb-4">Weekly Programs at VCC Lynnwood</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="bg-white border border-gray-200 p-6 rounded-lg shadow-sm">
                                <h3 className="font-bold text-lg text-secondary mb-2">Friday Program</h3>
                                <p className="text-gray-600 text-sm mb-2">7:00 PM - Class | 8:00 PM - Kirtan</p>
                                <p className="text-gray-700">Class by HH Harivilas Maharaj followed by kirtan.</p>
                            </div>
                            <div className="bg-white border border-gray-200 p-6 rounded-lg shadow-sm">
                                <h3 className="font-bold text-lg text-secondary mb-2">Saturday Kirtan</h3>
                                <p className="text-gray-600 text-sm mb-2">6:30 PM - 8:30 PM</p>
                                <p className="text-gray-700">Experience the joy of congregational chanting every Saturday.</p>
                            </div>
                            <div className="bg-white border border-gray-200 p-6 rounded-lg shadow-sm">
                                <h3 className="font-bold text-lg text-secondary mb-2">Sunday Morning - Bhagavad Gita Class</h3>
                                <p className="text-gray-600 text-sm mb-2">11:00 AM - 1:00 PM</p>
                                <p className="text-gray-700">Discourse on the timeless wisdom of the Gita for adults.</p>
                            </div>
                            <div className="bg-white border border-gray-200 p-6 rounded-lg shadow-sm">
                                <h3 className="font-bold text-lg text-secondary mb-2">Sunday Evening - Vedic School & Feast</h3>
                                <p className="text-gray-600 text-sm mb-2">6:30 PM - 8:30 PM</p>
                                <p className="text-gray-700">
                                    Shloka recitation & moral stories for children:<br />
                                    <span className="text-sm">• Kishora (10+) • Gopinath (6-9) • Damodar (3-5)</span>
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Location */}
                    <div className="mb-10">
                        <h2 className="text-2xl font-serif font-bold text-secondary mb-4">Visit Us</h2>
                        <div className="bg-gray-100 p-6 rounded-lg">
                            <p className="text-gray-700 mb-2">
                                <strong>Address:</strong> 4305 178th Pl SW, Lynnwood, WA 98037
                            </p>
                            <p className="text-gray-700 mb-4">
                                <strong>Temple Hours:</strong> Friday - Sunday: 6:30 PM - 8:30 PM
                            </p>
                            <p className="text-gray-700">
                                We welcome everyone regardless of background, religion, or experience. Come as you are and experience the warmth of our spiritual community.
                            </p>
                        </div>
                    </div>

                    {/* Call to Action */}
                    <div className="relative text-center text-white p-12 rounded-lg overflow-hidden">
                        {/* Background Image */}
                        <div
                            className="absolute inset-0 bg-cover bg-center"
                            style={{ backgroundImage: "url('/images/hero-image-1.webp')" }}
                        />
                        {/* Dark Overlay */}
                        <div className="absolute inset-0 bg-black/60" />
                        {/* Content */}
                        <div className="relative z-10">
                            <h2 className="text-2xl font-serif font-bold mb-4">Join Our Community</h2>
                            <p className="mb-6">Experience peace, knowledge, and community at VCC Lynnwood.</p>
                            <div className="flex flex-wrap justify-center gap-6">
                                <a
                                    href="https://www.instagram.com/iskcon_lynnwood/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-3 bg-gradient-to-br from-purple-600 via-pink-500 to-orange-400 text-white px-6 py-3 rounded-full font-medium hover:scale-105 transition-transform shadow-lg"
                                >
                                    <Instagram size={22} /> Follow on Instagram
                                </a>
                                <a
                                    href="https://www.facebook.com/people/VCC-Lynwood/61581783850360/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-3 bg-blue-600 text-white px-6 py-3 rounded-full font-medium hover:scale-105 transition-transform shadow-lg hover:bg-blue-700"
                                >
                                    <Facebook size={22} /> Follow on Facebook
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
