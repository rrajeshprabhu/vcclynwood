import React from 'react';
import Sidebar from '../components/layout/Sidebar';

const PlaceholderPage = ({ title }) => {
    return (
        <div className="bg-surface min-h-screen py-12">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row gap-12">
                    {/* Main Content */}
                    <div className="md:w-2/3">
                        <div className="bg-white p-8 rounded-lg shadow-sm">
                            <h1 className="text-3xl font-serif font-bold text-secondary mb-6 border-b pb-4">{title}</h1>
                            <div className="prose max-w-none text-gray-700">
                                <p className="mb-4">
                                    Welcome to the {title} page. We are currently updating this section with the latest information for VCC Lynwood.
                                </p>
                                <p className="mb-4 text-justify">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                </p>
                                <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-6">
                                    <p className="font-bold">Under Construction</p>
                                    <p>This content is being migrated properly. Please check back soon.</p>
                                </div>
                                <img
                                    src={`https://images.unsplash.com/photo-1545649931-158af2525166?q=80&w=800&auto=format&fit=crop`}
                                    alt="Placeholder"
                                    className="w-full h-64 object-cover rounded-lg mb-6"
                                />
                                <p>
                                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Sidebar */}
                    <div className="md:w-1/3">
                        <Sidebar />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PlaceholderPage;
