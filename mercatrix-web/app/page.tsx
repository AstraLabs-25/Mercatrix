'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Box, ShieldCheck, Zap, Globe, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Home() {
  return (
    <div className="relative min-h-screen pt-16 overflow-hidden bg-background">
      
      {/* Abstract Background Element */}
      <div className="absolute top-[-10%] left-[-10%] w-[120%] h-[120%] -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-zinc-200/40 via-background to-background dark:from-zinc-900/40 dark:via-background dark:to-background"></div>

      {/* Hero Section */}
      <section className="relative w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-24 flex flex-col items-center text-center">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-zinc-100 dark:bg-zinc-800/50 text-zinc-600 dark:text-zinc-300 border border-zinc-200 dark:border-zinc-700/50 mb-8"
        >
          <Sparkles className="w-4 h-4 text-zinc-500" />
          <span className="text-sm font-medium tracking-tight">Introducing Mercatrix for Vendors</span>
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter mb-8 leading-[1.05] text-zinc-900 dark:text-white"
        >
          Sell anything. <br />
          <span className="text-zinc-400 dark:text-zinc-500">To anyone.</span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          className="text-lg md:text-xl text-zinc-500 dark:text-zinc-400 max-w-2xl mb-12 leading-relaxed"
        >
          A unified, premium marketplace infrastructure. Built to help independent creators and massive vendors scale their business effortlessly.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
          className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
        >
          <Button size="lg" className="rounded-full h-14 px-8 text-base shadow-lg hover:shadow-xl transition-all group w-full sm:w-auto bg-zinc-900 hover:bg-zinc-800 text-white dark:bg-white dark:hover:bg-zinc-100 dark:text-zinc-900" asChild>
            <Link href="/signup?tab=vendor">
              Start Selling <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform"/>
            </Link>
          </Button>
          <Button size="lg" variant="outline" className="rounded-full h-14 px-8 text-base border-zinc-200 dark:border-zinc-800 hover:bg-zinc-50 dark:hover:bg-zinc-900 w-full sm:w-auto" asChild>
            <Link href="/products">
              Explore Market
            </Link>
          </Button>
        </motion.div>
      </section>

      {/* Bento Grid Features */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-zinc-900 dark:text-white mb-4">Everything you need to scale</h2>
          <p className="text-zinc-500 dark:text-zinc-400">Powerful infrastructure masked by elegant design.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[300px]">
          
          {/* Large Card */}
          <div className="md:col-span-2 relative overflow-hidden rounded-[32px] bg-zinc-100 dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-800 p-8 sm:p-12 flex flex-col">
            <div className="relative z-10 max-w-md">
              <div className="w-12 h-12 bg-white dark:bg-zinc-800 rounded-2xl shadow-sm flex items-center justify-center mb-6">
                <Globe className="w-6 h-6 text-zinc-900 dark:text-white" />
              </div>
              <h3 className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-white mb-3">Unified Platform</h3>
              <p className="text-zinc-500 dark:text-zinc-400 leading-relaxed">
                A single destination for buyers and sellers. Customers can browse products, while vendors manage their storefronts from the same seamless interface.
              </p>
            </div>
            {/* Decorative background element */}
            <div className="absolute right-0 bottom-0 w-[60%] h-[80%] bg-gradient-to-tl from-zinc-200 dark:from-zinc-800 to-transparent opacity-50 rounded-tl-[100px] pointer-events-none"></div>
          </div>

          {/* Standard Card */}
          <div className="relative overflow-hidden rounded-[32px] bg-zinc-100 dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-800 p-8 flex flex-col">
            <div className="w-12 h-12 bg-white dark:bg-zinc-800 rounded-2xl shadow-sm flex items-center justify-center mb-6">
              <Zap className="w-6 h-6 text-zinc-900 dark:text-white" />
            </div>
            <h3 className="text-xl font-bold tracking-tight text-zinc-900 dark:text-white mb-3">Quick Onboarding</h3>
            <p className="text-zinc-500 dark:text-zinc-400">
              Create a vendor profile in minutes. Wait for quick admin approval and start listing your products immediately.
            </p>
          </div>

          {/* Standard Card */}
          <div className="relative overflow-hidden rounded-[32px] bg-zinc-100 dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-800 p-8 flex flex-col">
            <div className="w-12 h-12 bg-white dark:bg-zinc-800 rounded-2xl shadow-sm flex items-center justify-center mb-6">
              <ShieldCheck className="w-6 h-6 text-zinc-900 dark:text-white" />
            </div>
            <h3 className="text-xl font-bold tracking-tight text-zinc-900 dark:text-white mb-3">Secure Access</h3>
            <p className="text-zinc-500 dark:text-zinc-400">
              Built with industry-standard JWT authentication and role-based access control to keep your data safe.
            </p>
          </div>

          {/* Large Card */}
          <div className="md:col-span-2 relative overflow-hidden rounded-[32px] bg-zinc-100 dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-800 p-8 sm:p-12 flex flex-col justify-between">
            <div className="relative z-10 max-w-md">
              <div className="w-12 h-12 bg-white dark:bg-zinc-800 rounded-2xl shadow-sm flex items-center justify-center mb-6">
                <Box className="w-6 h-6 text-zinc-900 dark:text-white" />
              </div>
              <h3 className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-white mb-3">Clean Dashboards</h3>
              <p className="text-zinc-500 dark:text-zinc-400 leading-relaxed">
                Manage your catalog, view statistics, and track your performance from a beautiful, clutter-free dashboard designed for focus.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 text-zinc-900 dark:text-white">Ready to join the market?</h2>
          <p className="text-lg text-zinc-500 dark:text-zinc-400 mb-10 max-w-xl mx-auto">
            Set up your vendor account in minutes and start selling your premium products to a global audience.
          </p>
          <Button size="lg" className="rounded-full h-14 px-10 text-base shadow-lg hover:shadow-xl transition-all group bg-zinc-900 hover:bg-zinc-800 text-white dark:bg-white dark:hover:bg-zinc-100 dark:text-zinc-900" asChild>
            <Link href="/signup?tab=vendor">
              Create Vendor Account
            </Link>
          </Button>
        </div>
      </section>

      {/* Minimal Footer */}
      <footer className="border-t border-zinc-200 dark:border-zinc-800 bg-background py-12">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-xl font-bold tracking-tight text-zinc-900 dark:text-white">
            Mercatrix<span className="text-zinc-400">.</span>
          </div>
          <div className="flex gap-8 text-sm font-medium text-zinc-500 dark:text-zinc-400">
            <Link href="#" className="hover:text-zinc-900 dark:hover:text-white transition-colors">Platform</Link>
            <Link href="#" className="hover:text-zinc-900 dark:hover:text-white transition-colors">Pricing</Link>
            <Link href="#" className="hover:text-zinc-900 dark:hover:text-white transition-colors">Developers</Link>
            <Link href="#" className="hover:text-zinc-900 dark:hover:text-white transition-colors">Legal</Link>
          </div>
          <p className="text-zinc-400 dark:text-zinc-600 text-sm">© 2026 Mercatrix Inc.</p>
        </div>
      </footer>
    </div>
  );
}
