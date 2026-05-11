"use client";

import { motion, useReducedMotion } from "framer-motion";
import { MessageCircle, ShoppingCart, ArrowRight } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function WhatsAppOrderPage() {
    const [DeveloperName, setDeveloperName] = useState("Abid Hussain");
    const [whatsappNumber, setWhatsappNumber] = useState("03436544231");
    const [message, setMessage] = useState("");

    useEffect(() => {
        const DeveloperName = localStorage.getItem('Developer_name') || "Abid Hussain";
        const whatsappNumber = localStorage.getItem('Developer_phone') || "03436544231";
        const message = encodeURIComponent(
            "Hi! I'd like to place an order. Can you help me?"
        );
        setDeveloperName(DeveloperName);
        setWhatsappNumber(whatsappNumber);
        setMessage(message);
    }, [])

    const prefersReducedMotion = useReducedMotion();

    return (
        <div className="relative flex flex-col items-center justify-center min-h-screen bg-[#F8FAFC] text-[#0F172A] px-6 py-12 font-sans overflow-x-hidden">
            {/* Background Decor (decorative) */}
            <div
                className="absolute inset-0 opacity-[0.03] pointer-events-none z-0"
                aria-hidden="true"
            >
                <svg width="100%" height="100%">
                    <pattern
                        id="pattern"
                        x="0"
                        y="0"
                        width="60"
                        height="60"
                        patternUnits="userSpaceOnUse"
                    >
                        <path
                            d="M0 60L60 0M-10 10L10 -10M50 70L70 50"
                            stroke="currentColor"
                            strokeWidth="1.5"
                        />
                    </pattern>
                    <rect width="100%" height="100%" fill="url(#pattern)" />
                </svg>
            </div>

            <div className="relative z-10 w-full max-w-4xl flex flex-col md:flex-row items-center justify-between gap-12">
                {/* Left Side: Main Pitch */}
                <div className="flex-1 text-center md:text-left">
                    {/* Animated icon instead of 404 */}
                    <motion.div
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={
                            !prefersReducedMotion
                                ? { scale: [1, 1.05, 1], opacity: 1 }
                                : { scale: 1, opacity: 1 }
                        }
                        transition={
                            prefersReducedMotion
                                ? {}
                                : {
                                    scale: { repeat: Infinity, duration: 2, ease: "easeInOut" },
                                    opacity: { duration: 0.5 },
                                }
                        }
                        className="inline-flex items-center justify-center w-24 h-24 md:w-28 md:h-28 rounded-3xl bg-[#D79136]/10 text-[#D79136] mb-6"
                    >
                        <ShoppingCart size={48} />
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-4xl md:text-5xl font-extrabold tracking-tight"
                    >
                        Order Directly via{" "}
                        <span className="text-[#25D366]">WhatsApp</span>
                    </motion.h1>

                    <p className="mt-4 text-gray-500 text-lg max-w-md mx-auto md:mx-0">
                        Skip the forms and website hassle. Tell me what you need and I’ll
                        hand‑pick it for you — fast, personal, and secure.
                    </p>

                    {/* Primary CTA (duplicates card action for convenience) */}
                    <a
                        href={`https://wa.me/${whatsappNumber}?text=${message}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-8 inline-flex items-center gap-2 px-8 py-4 bg-[#25D366] text-white font-bold rounded-xl hover:bg-[#20ba5a] transition-all shadow-lg shadow-green-200 active:scale-95 group"
                    >
                        <MessageCircle className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                        Order Now on WhatsApp
                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </a>
                </div>

                {/* Right Side / Mobile Bottom: Detailed Order Card */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="w-full max-w-sm bg-white border border-gray-100 p-6 md:p-8 rounded-3xl shadow-xl shadow-gray-200/50"
                >
                    <div className="flex items-center gap-4 mb-6">
                        <Image
                            src={"/developer.png"}
                            alt="Shop owner profile"
                            width={50}
                            height={50}
                            className="rounded-full object-cover"
                        />
                        <div>
                            <p className="text-[10px] uppercase tracking-[0.2em] font-bold text-gray-400">
                                Your Personal Shopper
                            </p>
                            <h3 className="text-lg font-bold text-[#0F172A]">
                                {DeveloperName}
                            </h3>
                        </div>
                    </div>

                    <div className="space-y-4 mb-6">
                        <div className="flex items-start gap-3">
                            <div className="w-5 h-5 mt-0.5 text-green-500">✓</div>
                            <p className="text-sm text-gray-600">
                                No registration — just send a message
                            </p>
                        </div>
                        <div className="flex items-start gap-3">
                            <div className="w-5 h-5 mt-0.5 text-green-500">✓</div>
                            <p className="text-sm text-gray-600">
                                Secure payment options explained in chat
                            </p>
                        </div>
                        <div className="flex items-start gap-3">
                            <div className="w-5 h-5 mt-0.5 text-green-500">✓</div>
                            <p className="text-sm text-gray-600">
                                Same‑day dispatch on most orders
                            </p>
                        </div>
                    </div>

                    <a
                        href={`https://wa.me/${whatsappNumber}?text=${message}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-3 w-full py-4 bg-[#25D366] text-white font-bold rounded-2xl hover:bg-[#20ba5a] transition-all shadow-md active:scale-95 group"
                    >
                        <MessageCircle className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                        Start Your Order
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