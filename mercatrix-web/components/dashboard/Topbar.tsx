'use client';

import { Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';

import { ThemeToggle } from '../ThemeToggle';

export default function Topbar({ onMenuClick }: { onMenuClick: () => void }) {
  return (
    <header className="h-16 bg-background border-b border-border flex items-center justify-between px-4 sm:px-6 lg:px-8 sticky top-0 z-30">
      <div className="flex items-center gap-4">
        <Button variant="ghost" size="icon" className="lg:hidden" onClick={onMenuClick}>
          <Menu size={20} />
        </Button>
        <h1 className="text-lg font-semibold text-foreground hidden sm:block">Dashboard</h1>
      </div>
      <div className="flex items-center gap-4">
        <ThemeToggle />
      </div>
    </header>
  );
}
