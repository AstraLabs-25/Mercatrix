"use client";

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Star, TrendingUp, ShieldCheck, Zap, Server, ShoppingCart } from 'lucide-react';

const products = [
  { id: '1', title: 'Quantum X Pro', price: 299.99, rating: 4.9, vendor: 'TechNova', discount: '15% OFF', image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&q=80' },
  { id: '2', title: 'AeroMax Drone', price: 849.00, rating: 4.8, vendor: 'SkyHigh', image: 'https://images.unsplash.com/photo-1473968512647-3e447244af8f?w=800&q=80' },
  { id: '3', title: 'Neon Mechanical KB', price: 149.50, rating: 5.0, vendor: 'KeyCraft', image: 'https://images.unsplash.com/photo-1595225476474-87563907a212?w=800&q=80' },
  { id: '4', title: 'HoloLens VR Set', price: 499.00, rating: 4.7, vendor: 'Visionary', image: 'https://images.unsplash.com/photo-1622979135225-d2ba269cf1ac?w=800&q=80' },
];

const categories = [
  { name: 'Electronics', icon: Zap },
  { name: 'Hardware', icon: Server },
  { name: 'Accessories', icon: ShieldCheck },
  { name: 'Trending', icon: TrendingUp },
];

export default function Home() {
  return (
    <div className="relative min-h-screen pt-20 overflow-hidden">
      
      {/* Background Gradients & Glows */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 bg-[#0B0B0F]">
        <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-blue-600/30 rounded-full blur-[120px]"></div>
        <div className="absolute top-[20%] right-[-5%] w-[500px] h-[500px] bg-indigo-600/20 rounded-full blur-[150px]"></div>
        <div className="absolute bottom-[-10%] left-[20%] w-[600px] h-[600px] bg-blue-900/10 rounded-full blur-[150px]"></div>
      </div>

      {/* Hero Section */}
      <section className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-32 flex flex-col items-center text-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#111827] border border-white/10 mb-8"
        >
          <span className="flex h-2 w-2 rounded-full bg-blue-500 animate-pulse"></span>
          <span className="text-sm font-medium text-gray-300">Mercatrix v2.0 is now live</span>
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter mb-6 leading-tight drop-shadow-sm"
        >
          The Future of <br className="hidden md:block"/> 
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-500 to-indigo-500">
            Digital Commerce
          </span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg md:text-xl text-gray-400 max-w-2xl mb-10 leading-relaxed font-light"
        >
          Discover cutting-edge products from top independent vendors globally. Experience seamless shopping built on enterprise-grade infrastructure.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <Link href="/products" className="group relative px-8 py-4 bg-blue-600 rounded-full font-semibold text-white overflow-hidden transition-all shadow-[0_0_40px_-10px_rgba(37,99,235,0.8)] hover:shadow-[0_0_60px_-15px_rgba(37,99,235,1)]">
            <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-[100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
            <span className="flex items-center gap-2 relative z-10">Shop Collection <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform"/></span>
          </Link>
          <Link href="/vendor/signup" className="px-8 py-4 bg-[#111827] text-white border border-white/10 hover:bg-white/5 rounded-full font-semibold transition-all flex items-center justify-center gap-2 hover:border-white/20">
            Become a Seller
          </Link>
        </motion.div>
      </section>

      {/* Categories */}
      <section className="border-y border-white/5 bg-black/20 backdrop-blur-sm py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center sm:justify-between items-center gap-6 opacity-70">
            {categories.map((Cat, i) => (
              <div key={i} className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors cursor-pointer group">
                <Cat.icon className="w-5 h-5 text-blue-500 group-hover:scale-110 transition-transform" />
                <span className="font-medium tracking-wide uppercase text-sm">{Cat.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-2">Trending Drops</h2>
            <p className="text-gray-400">Handpicked premium tech gear.</p>
          </div>
          <Link href="/products" className="hidden sm:flex text-blue-400 hover:text-blue-300 font-medium items-center gap-1 group">
            View Market <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, i) => (
            <motion.div 
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -5 }}
              className="group relative bg-[#111827] rounded-2xl border border-white/5 overflow-hidden shadow-2xl hover:border-blue-500/30 transition-all duration-300 flex flex-col"
            >
              {product.discount && (
                <div className="absolute top-4 left-4 z-20 bg-blue-600 text-white text-xs font-bold px-2 py-1 rounded shadow-lg backdrop-blur-md">
                  {product.discount}
                </div>
              )}
              
              <div className="relative h-56 overflow-hidden">
                <div className="absolute inset-0 bg-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity z-10 duration-500 rounded-t-2xl mix-blend-overlay"></div>
                <img 
                  src={product.image} 
                  alt={product.title} 
                  className="w-full h-full object-cover transform scale-100 group-hover:scale-110 transition-transform duration-700 ease-out" 
                />
              </div>

              <div className="p-5 flex flex-col flex-1">
                <div className="flex justify-between items-start mb-2">
                  <p className="text-xs font-medium text-blue-400 uppercase tracking-wider">{product.vendor}</p>
                  <div className="flex items-center gap-1 bg-black/40 px-2 py-0.5 rounded text-xs text-yellow-500 border border-white/5">
                    <Star className="w-3 h-3 fill-current" /> {product.rating}
                  </div>
                </div>
                
                <h3 className="text-lg font-semibold text-gray-100 mb-4 group-hover:text-blue-300 transition-colors">{product.title}</h3>
                
                <div className="mt-auto flex justify-between items-center pt-4 border-t border-white/5">
                  <span className="text-xl font-bold text-white">${product.price.toFixed(2)}</span>
                  <button className="bg-white/5 hover:bg-blue-600 text-white p-2 rounded-xl border border-white/10 hover:border-transparent transition-all duration-300 backdrop-blur-sm">
                    <ShoppingCart className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Stats Divider */}
      <section className="py-20 border-y border-white/5 bg-[#0a0a0e]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-white/5">
            {[
              { label: 'Active Products', value: '10K+' },
              { label: 'Verified Vendors', value: '500+' },
              { label: 'Happy Customers', value: '2M+' },
              { label: 'Secure Payments', value: '100%' },
            ].map((stat, i) => (
              <div key={i} className="flex flex-col gap-2">
                <span className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-gray-100 to-gray-500">{stat.value}</span>
                <span className="text-sm font-medium text-gray-500 uppercase tracking-widest">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-lg h-[200px] bg-blue-600/20 blur-[120px] rounded-full -z-10"></div>
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight">Stay Ahead of the Curve</h2>
          <p className="text-gray-400 mb-8 max-w-xl mx-auto">Join 50,000+ early adopters. Get exclusive drops, vendor updates, and marketplace insights straight to your inbox.</p>
          
          <form className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
            <input 
              type="email" 
              placeholder="Enter your email address" 
              className="flex-1 bg-[#111827] border border-white/10 rounded-full px-6 py-4 text-white outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/50 transition-all placeholder-gray-600"
            />
            <button className="bg-blue-600 hover:bg-blue-500 text-white font-semibold py-4 px-8 rounded-full transition-all shadow-[0_0_20px_-5px_rgba(37,99,235,0.5)]">
              Subscribe
            </button>
          </form>
        </div>
      </section>

      {/* Simple Footer */}
      <footer className="border-t border-white/10 bg-[#0B0B0F] py-8">
        <div className="max-w-7xl mx-auto px-4 text-center sm:text-left flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">© 2026 Mercatrix Platform. Built for scale.</p>
          <div className="flex gap-6 text-sm text-gray-500">
            <Link href="#" className="hover:text-white transition">Privacy</Link>
            <Link href="#" className="hover:text-white transition">Terms</Link>
            <Link href="#" className="hover:text-white transition">Support</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
