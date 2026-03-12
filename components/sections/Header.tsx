'use client';

import { useState } from 'react';
import { List, X } from '@phosphor-icons/react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';

export function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const pathname = usePathname();

    const isActive = (path: string) => pathname === path;

    return (
        <motion.header
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="z-50 relative"
        >
            <div className="container-custom h-20 flex items-center justify-between">

                <Link href="/" className="text-2xl font-bold text-white flex items-center gap-2">
                    <Image src="/images/logo-jobb-light.svg" alt="Jobb" priority width={80} height={80} />
                </Link>

                <nav className="hidden lg:flex items-center gap-8">
                    <Link href="/" className={`text-sm font-medium transition-colors hover:text-white ${isActive('/') ? 'text-jobb-orange' : 'text-jobb-text-secondary'}`}>Home</Link>
                    <Link href="/funcionalidades" className={`text-sm font-medium transition-colors hover:text-white ${isActive('/funcionalidades') ? 'text-jobb-orange' : 'text-jobb-text-secondary'}`}>Funcionalidades</Link>
                    <Link href="/clientes" className={`text-sm font-medium transition-colors hover:text-white ${isActive('/clientes') ? 'text-jobb-orange' : 'text-jobb-text-secondary'}`}>Clientes</Link>
                    <Link href="/estudantes-professores" className={`text-sm font-medium transition-colors hover:text-white ${isActive('/estudantes-professores') ? 'text-jobb-orange' : 'text-jobb-text-secondary'}`}>Estudantes/Professores</Link>
                    <Link href="https://blog.sistemajobb.com.br/" target="_blank" className={`text-sm font-medium transition-colors hover:text-white ${isActive('/blog') ? 'text-jobb-orange' : 'text-jobb-text-secondary'}`}>Blog</Link>
                </nav>

                <div className="hidden lg:flex items-center gap-4">
                    <Link className="py-2 px-6 rounded-2xl bg-card hover:bg-jobb-bg-secondary" href="#">Login</Link>
                    <Link className="py-2 px-6 rounded-2xl gradient hover:gradient" href="https://www.sistemajobb.com.br/teste-gratis" target="_blank">Teste Grátis</Link>
                </div>

                <button className="lg:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                    {isMenuOpen ? <X size={24} /> : <List size={24} />}
                </button>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="lg:hidden bg-jobb-dark border-b border-white/10 p-4 flex flex-col gap-4">
                    <Link href="/" onClick={() => setIsMenuOpen(false)} className={`text-sm font-medium transition-colors hover:text-white ${isActive('/') ? 'text-jobb-orange' : 'text-jobb-text-secondary'}`}>Home</Link>
                    <Link href="/funcionalidades" onClick={() => setIsMenuOpen(false)} className={`text-sm font-medium transition-colors hover:text-white ${isActive('/funcionalidades') ? 'text-jobb-orange' : 'text-jobb-text-secondary'}`}>Funcionalidades</Link>
                    <Link href="/clientes" onClick={() => setIsMenuOpen(false)} className={`text-sm font-medium transition-colors hover:text-white ${isActive('/clientes') ? 'text-jobb-orange' : 'text-jobb-text-secondary'}`}>Clientes</Link>
                    <Link href="/estudantes-professores" onClick={() => setIsMenuOpen(false)} className={`text-sm font-medium transition-colors hover:text-white ${isActive('/estudantes-professores') ? 'text-jobb-orange' : 'text-jobb-text-secondary'}`}>Estudantes/Professores</Link>
                    <Link href="https://blog.sistemajobb.com.br/" target="_blank" onClick={() => setIsMenuOpen(false)} className={`text-sm font-medium transition-colors hover:text-white ${isActive('/blog') ? 'text-jobb-orange' : 'text-jobb-text-secondary'}`}>Blog</Link>

                    <div className="flex flex-col gap-4 mt-4">
                        <Button variant="primary" className="btn w-full" asChild><Link href="https://www.sistemajobb.com.br/teste-gratis" target="_blank">Teste Grátis</Link></Button>
                        <Button variant="outline" className="btn w-full" asChild><Link href="#">Login</Link></Button>
                    </div>
                </div>
            )}
        </motion.header>
    );
}
