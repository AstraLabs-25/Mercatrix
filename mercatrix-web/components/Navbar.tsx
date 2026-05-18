"use client";

import Link from 'next/link';
import { ShoppingCart, User, Store, Search, Menu } from 'lucide-react';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-[#0B0B0F]/80 backdrop-blur-xl border-b border-white/10 shadow-lg' 
          : 'bg-transparent border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          <div className="flex items-center gap-8">
            <Link href="/" className="text-2xl font-black tracking-tighter text-white">
              MERCA<span className="text-blue-500">TRIX</span>
            </Link>
            
            <div className="hidden md:flex relative group ml-4">
              <div className="absolute inset-0 bg-blue-500/20 rounded-full blur-md opacity-0 group-hover:opacity-100 transition duration-500"></div>
              <div className="relative flex items-center bg-[#111827] rounded-full px-5 py-2.5 border border-white/5 shadow-inner">
                <Search className="w-4 h-4 text-gray-400 mr-3" />
                <input 
                  type="text" 
                  placeholder="Search future tech..." 
                  className="bg-transparent border-none outline-none text-sm text-white w-64 placeholder-gray-500"
                />
              </div>
            </div>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/vendor/signup" className="text-gray-300 hover:text-white transition-colors text-sm font-medium flex items-center gap-2">
              <Store className="w-4 h-4" /> Become a Seller
            </Link>
            
            <div className="flex items-center gap-5 border-l border-white/10 pl-8">
              <Link href="/cart" className="relative group">
                <div className="p-2 rounded-full hover:bg-white/5 transition-colors">
                  <ShoppingCart className="w-5 h-5 text-gray-300 group-hover:text-white transition-colors" />
                </div>
                <span className="absolute top-0 right-0 bg-blue-500 text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full ring-2 ring-[#0B0B0F]">2</span>
              </Link>
              
              <Link href="/login" className="flex items-center gap-2 p-2 rounded-full hover:bg-white/5 transition-colors">
                <User className="w-5 h-5 text-gray-300 hover:text-white transition-colors" />
              </Link>
            </div>
          </div>

          <div className="md:hidden flex items-center">
            <button className="text-white p-2">
              <Menu className="w-6 h-6 border-white" />
            </button>
          </div>

        </div>
      </div>
    </motion.nav>
  );
}