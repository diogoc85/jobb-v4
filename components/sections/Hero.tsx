'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';
import { Plus } from '@phosphor-icons/react';

export function Hero() {
    return (
        <section className="relative w-full bg-gradient-to-b from-black to-jobb-secondary -mt-20 pt-20">
            <div className=" container-custom md:h-[100svh] lg:h-[83vh] grid lg:grid-cols-2 gap-12 items-center relative z-10  lg:py-0 py-24">

                <div className='text-center md:text-left'>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
                    >
                        <h1 className="text-5xl md:text-6xl font-bold text-white leading-[1.1]">
                            Gestão de <br />
                            produtoras <br />
                            audiovisual.
                        </h1>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
                        className="mb-4"
                    >
                        <p className="text-jobb-text-secondary text-3xl max-w-md py-2">
                            Do orçamento ao financeiro, tudo em um único lugar!
                        </p>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
                        className=""
                    >
                        <div className="flex flex-col gap-2 items-center md:items-start">
                            <Link className="btn text-3xl w-fit px-8 py-6 gradient hover:gradient" href="https://www.sistemajobb.com.br/teste-gratis" target="_blank">Teste grátis por 15 dias</Link>
                            <p className="text-jobb-text-secondary mt-4 max-w-xs text-[16px]">
                                Faça como mais de <span className="text-jobb-orange text-[16px]">400 produtoras</span> que já profissionalizaram a gestão com o Jobb.
                            </p>
                        </div>
                    </motion.div>
                </div>

                <div id="v4" className="hidden lg:block h-full relative">

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
                        className="absolute -left-20 -lg:-left-20 bottom-0 z-20 ">
                        <Image src="/images/menina.webp" alt="Sistema Jobb 4.0" priority width={570} height={570} className="object-contain object-bottom z-5" />
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, ease: "easeOut", delay: 0.5 }}
                        className="absolute left-20 lg:-left-20 top-20 z-1 w-36 md:w-56">
                        <Image src="/images/sidebar-jobb.webp" alt="Sidebar" priority width={270} height={370} className="w-full h-auto opacity-10" />
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.8, y: 0 }}
                        whileInView={{ opacity: 1, scale: 1, y: [0, 10, 0] }}
                        viewport={{ once: true }}
                        transition={{
                            opacity: { duration: 0.4, delay: 0.6 },
                            scale: { duration: 0.4, delay: 0.6 },
                            y: { repeat: Infinity, duration: 3, delay: 0.6, ease: "easeInOut" }
                        }}
                        className="absolute right-0 lg:-right-0 top-1/2 -translate-y-1/2 z-20 w-38 md:w-54"
                    >
                        <Image src="/images/novo-jobb.svg" alt="Jobb 4.0" priority width={186} height={186} className="w-full h-auto drop-shadow-2xl" />
                    </motion.div>

                    {/* Tag: Segurança */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8, y: 0 }}
                        whileInView={{ opacity: 1, scale: 1, y: [0, -5, 0] }}
                        viewport={{ once: true }}
                        transition={{
                            opacity: { duration: 0.4, delay: 0.7 },
                            scale: { duration: 0.4, delay: 0.7 },
                            y: { repeat: Infinity, duration: 3.5, ease: "easeInOut", delay: 0.7 }
                        }}
                        className="absolute top-[27%] left-6 lg:-left-18 z-10 flex items-center gap-3 px-3 py-2 md:px-4 md:py-3 rounded-xl md:rounded-2xl backdrop-blur-md border border-white/20 bg-white/10 shadow-xl"
                    >
                        <div className="w-5 h-5 md:w-6 md:h-6 rounded-full bg-white flex items-center justify-center text-jobb-orange">
                            <Plus weight="bold" size={14} />
                        </div>
                        <span className="text-white font-semibold text-sm md:text-lg">Segurança</span>
                    </motion.div>

                    {/* Tag: Usabilidade */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8, y: 0 }}
                        whileInView={{ opacity: 1, scale: 1, y: [0, -15, 0] }}
                        viewport={{ once: true }}
                        transition={{
                            opacity: { duration: 0.4, delay: 0.9 },
                            scale: { duration: 0.4, delay: 0.9 },
                            y: { repeat: Infinity, duration: 4.5, ease: "easeInOut", delay: 0.9 }
                        }}
                        className="absolute bottom-[20%] lg:bottom-[15%] -left-8 lg:-left-4 z-30 flex items-center gap-3 px-3 py-2 md:px-4 md:py-3 rounded-xl md:rounded-2xl backdrop-blur-md border border-white/20 bg-white/10 shadow-xl"
                    >
                        <div className="w-5 h-5 md:w-6 md:h-6 rounded-full bg-white flex items-center justify-center text-jobb-orange">
                            <Plus weight="bold" size={14} />
                        </div>
                        <span className="text-white font-semibold text-sm md:text-lg">Usabilidade</span>
                    </motion.div>

                    {/* Tag: Performance */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8, y: 0 }}
                        whileInView={{ opacity: 1, scale: 1, y: [0, -10, 0] }}
                        viewport={{ once: true }}
                        transition={{
                            opacity: { duration: 0.4, delay: 1.1 },
                            scale: { duration: 0.4, delay: 1.1 },
                            y: { repeat: Infinity, duration: 3.8, ease: "easeInOut", delay: 1.1 }
                        }}
                        className="absolute bottom-[25%] lg:bottom-[20%] right-4 lg:right-8 z-30 flex items-center gap-3 px-3 py-2 md:px-4 md:py-3 rounded-xl md:rounded-2xl backdrop-blur-md border border-white/20 bg-white/10 shadow-xl"
                    >
                        <div className="w-5 h-5 md:w-6 md:h-6 rounded-full bg-white flex items-center justify-center text-jobb-orange">
                            <Plus weight="bold" size={14} />
                        </div>
                        <span className="text-white font-semibold text-sm md:text-lg">Performance</span>
                    </motion.div>
                    {/* Background Glow */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8, y: 0 }}
                        whileInView={{ opacity: 1, scale: 1, y: [0, -10, 0] }}
                        viewport={{ once: true }}
                        transition={{
                            opacity: { duration: 0.4, delay: 1.1 },
                            scale: { duration: 0.4, delay: 1.1 },
                            y: { repeat: Infinity, duration: 3.8, ease: "easeInOut", delay: 1.1 }
                        }}
                    >
                        <div className="absolute top-30 right-10 w-[500px] h-[500px] bg-jobb-orange/40 rounded-full blur-[120px] z-2 pointer-events-none"></div>
                    </motion.div>
                </div>

            </div>
        </section>
    );
}
