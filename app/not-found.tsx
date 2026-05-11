"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { MessageCircle, Home } from "lucide-react";
import Image from "next/image";

export default function NotFound() {
    // Replace with your actual WhatsApp number
    const whatsappNumber = "+923436544231";
    const message = encodeURIComponent("Hi Abid, I'm on the 404 page and need help!");

    return (
        <div className="relative flex flex-col items-center justify-center min-h-screen bg-[#F8FAFC] text-[#0F172A] px-6 py-12 font-sans overflow-x-hidden">

            {/* Background Decor */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none z-0">
                <svg width="100%" height="100%">
                    <pattern id="pattern" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
                        <path d="M0 60L60 0M-10 10L10 -10M50 70L70 50" stroke="currentColor" strokeWidth="1.5" />
                    </pattern>
                    <rect width="100%" height="100%" fill="url(#pattern)" />
                </svg>
            </div>

            <div className="relative z-10 w-full max-w-4xl flex flex-col md:flex-row items-center justify-between gap-12">

                {/* Left Side: 404 Main Content */}
                <div className="flex-1 text-center md:text-left">

                    {/* BLINKING 404 TEXT - Color updated to #D79136 */}
                    <motion.h1
                        initial={{ opacity: 0, x: -20 }}
                        animate={{
                            opacity: [1, 0.2, 1], // Blinking effect
                            x: 0
                        }}
                        transition={{
                            x: { duration: 0.5 },
                            opacity: {
                                repeat: Infinity,
                                duration: 1.5,
                                ease: "easeInOut"
                            }
                        }}
                        // NEW COLOR APPLIED HERE
                        className="text-7xl md:text-9xl font-black tracking-tighter text-[#D79136]"
                    >
                        404
                    </motion.h1>

                    <motion.h2
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-2xl md:text-4xl font-bold uppercase tracking-tight mt-2 text-[#0F172A]"
                    >
                        Page Not Found
                    </motion.h2>

                    <p className="mt-4 text-gray-500 text-lg max-w-sm mx-auto md:mx-0">
                        This page has been dismantled or moved. Let's get you back to the workshop.
                    </p>

                    <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                        <Link
                            href="/"
                            className="flex items-center justify-center gap-2 px-8 py-4 bg-orange-500 text-white font-bold rounded-lg hover:bg-orange-600 transition-all shadow-lg shadow-orange-200 active:scale-95"
                        >
                            <Home size={18} />
                            Return Home
                        </Link>
                    </div>
                </div>

                {/* Right Side / Mobile Bottom: Developer Details */}
                {/* 'md:hidden' removed so it shows on all devices */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="w-full max-w-sm bg-white border border-gray-100 p-6 md:p-8 rounded-3xl shadow-xl shadow-gray-200/50"
                >
                    <div className="flex items-center gap-4 mb-6">
                        {/* <div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center font-bold text-orange-500">

                        </div> */}
                        <Image src={'/developer.png'} alt="Developer Profile" width={50} height={50} />
                        <div>
                            <p className="text-[10px] uppercase tracking-[0.2em] font-bold text-gray-400">Developer Support</p>
                            <h3 className="text-lg font-bold text-[#0F172A]">Muhammad Abid Hussain</h3>
                        </div>
                    </div>

                    <p className="text-sm text-gray-600 mb-6 leading-relaxed">
                        Need technical help? If this page should exist, contact me directly and I'll fix it for you.
                    </p>

                    <a
                        href={`https://wa.me/${whatsappNumber}?text=${message}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-3 w-full py-4 bg-[#25D366] text-white font-bold rounded-2xl hover:bg-[#20ba5a] transition-all shadow-md active:scale-95 group"
                    >
                        <MessageCircle className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                        Contact on WhatsApp
                    </a>

                    <p className="mt-4 text-center text-xs text-gray-400">
                        Typical response time: &lt; 1 hour
                    </p>
                </motion.div>
            </div>

            {/* Decorative Orbs */}
            <div className="absolute -top-24 -right-24 w-64 h-64 bg-orange-100 rounded-full blur-[100px] opacity-50 z-0" />
            <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-blue-100 rounded-full blur-[100px] opacity-50 z-0" />
        </div>
    );
}