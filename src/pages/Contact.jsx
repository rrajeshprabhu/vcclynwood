import React from 'react';
import { MapPin, Mail, Phone, ExternalLink, Clock } from 'lucide-react';

const Contact = () => {
    return (
        <div className="bg-surface min-h-screen py-12">
            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto">
                    {/* Header */}
                    <div className="text-center mb-12">
                        <h1 className="text-3xl md:text-4xl font-serif font-bold text-secondary mb-4">Contact Us</h1>
                        <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            We'd love to hear from you! Visit us at our Lynnwood location or reach out to VCC Sammamish for any inquiries.
                        </p>
                    </div>

                    {/* Contact Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                        {/* VCC Lynnwood */}
                        <div className="bg-white rounded-lg shadow-md p-8">
                            <h2 className="text-xl font-bold text-secondary mb-4 border-b border-gray-200 pb-2">VCC Lynnwood</h2>

                            <div className="space-y-4">
                                <div className="flex items-start gap-3">
                                    <MapPin className="text-primary mt-1 flex-shrink-0" size={20} />
                                    <div>
                                        <p className="font-medium text-gray-800">Address</p>
                                        <p className="text-gray-600">4305 178th Pl SW,<br />Lynnwood, WA 98037</p>
                                        <a
                                            href="https://maps.google.com/?q=4305+178th+Pl+SW,+Lynnwood,+WA+98037"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-primary text-sm hover:underline inline-flex items-center gap-1 mt-1"
                                        >
                                            Get Directions <ExternalLink size={12} />
                                        </a>
                                    </div>
                                </div>

                                <div className="flex items-start gap-3">
                                    <Clock className="text-primary mt-1 flex-shrink-0" size={20} />
                                    <div>
                                        <p className="font-medium text-gray-800">Temple Hours</p>
                                        <p className="text-gray-600 text-sm">
                                            <strong>Fri - Sun:</strong> 6:30 PM - 8:30 PM<br />
                                            <strong>Mon - Thu:</strong> Closed
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* VCC Sammamish */}
                        <div className="bg-white rounded-lg shadow-md p-8">
                            <h2 className="text-xl font-bold text-secondary mb-4 border-b border-gray-200 pb-2">VCC Sammamish (Main Temple)</h2>

                            <div className="space-y-4">
                                <div className="flex items-start gap-3">
                                    <MapPin className="text-primary mt-1 flex-shrink-0" size={20} />
                                    <div>
                                        <p className="font-medium text-gray-800">Address</p>
                                        <p className="text-gray-600">1420 228th Ave SE,<br />Sammamish, WA 98075</p>
                                        <a
                                            href="https://maps.google.com/?q=1420+228th+Ave+SE,+Sammamish,+WA+98075"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-primary text-sm hover:underline inline-flex items-center gap-1 mt-1"
                                        >
                                            Get Directions <ExternalLink size={12} />
                                        </a>
                                    </div>
                                </div>

                                <div className="flex items-start gap-3">
                                    <Mail className="text-primary mt-1 flex-shrink-0" size={20} />
                                    <div>
                                        <p className="font-medium text-gray-800">Email</p>
                                        <a href="mailto:info@vedicculturalcenter.org" className="text-primary hover:underline">
                                            info@vedicculturalcenter.org
                                        </a>
                                    </div>
                                </div>

                                <div className="flex items-start gap-3">
                                    <Phone className="text-primary mt-1 flex-shrink-0" size={20} />
                                    <div>
                                        <p className="font-medium text-gray-800">Phone</p>
                                        <p className="text-gray-600 text-sm">
                                            Namavrata Das: <a href="tel:+12069798002" className="text-primary hover:underline">+1 (206) 979-8002</a><br />
                                            Damodar Prasad Das: <a href="tel:+14257614605" className="text-primary hover:underline">+1 (425) 761-4605</a>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Send Message CTA */}
                    <div className="bg-gradient-to-br from-amber-50 to-orange-100 rounded-lg p-8 text-center">
                        <h2 className="text-2xl font-serif font-bold text-secondary mb-4">Want to Send Us a Message?</h2>
                        <p className="text-gray-700 mb-6 max-w-xl mx-auto">
                            For general inquiries, volunteer opportunities, or to connect with our community, please use the VCC contact form.
                        </p>
                        <a
                            href="https://www.vedicculturalcenter.org/contact-sign-up-form/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 bg-primary hover:bg-secondary text-white px-8 py-3 rounded-full font-medium transition-colors shadow-md"
                        >
                            Contact VCC Seattle <ExternalLink size={18} />
                        </a>
                    </div>

                    {/* Map Embed */}
                    <div className="mt-12">
                        <h2 className="text-xl font-bold text-secondary mb-4 text-center">Find Us</h2>
                        <div className="rounded-lg overflow-hidden shadow-md">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2683.8574!2d-122.3137!3d47.8394!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x549012345678!2s4305+178th+Pl+SW%2C+Lynnwood%2C+WA+98037!5e0!3m2!1sen!2sus!4v1234567890"
                                width="100%"
                                height="350"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="VCC Lynnwood Location"
                                className="w-full"
                            ></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
