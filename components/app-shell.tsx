'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Bot, FolderKanban, Home, Settings } from 'lucide-react';
import { cn } from '@/lib/utils';

const items = [
  { href: '/', label: 'Dashboard', icon: Home },
  { href: '/projects', label: 'Projetos', icon: FolderKanban },
  { href: '/chat', label: 'Chat IA', icon: Bot },
  { href: '/settings', label: 'Configurações', icon: Settings }
];

export function AppShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <div className='flex min-h-screen'>
      <aside className='w-64 border-r border-border bg-card p-5'>
        <p className='mb-8 text-lg font-semibold'>ContextOS</p>
        <nav className='space-y-2'>
          {items.map(({ href, label, icon: Icon }) => (
            <Link key={href} href={href} className={cn('flex items-center gap-2 rounded-lg px-3 py-2 text-sm text-muted hover:bg-accent hover:text-foreground', pathname === href && 'bg-accent text-foreground')}>
              <Icon size={16} />
              {label}
            </Link>
          ))}
        </nav>
      </aside>
      <main className='flex-1 p-6'>{children}</main>
    </div>
  );
}
