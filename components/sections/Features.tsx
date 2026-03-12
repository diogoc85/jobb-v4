'use client';

import { OpenAiLogoIcon, WebhooksLogoIcon, Eye, DeviceMobileCameraIcon, MegaphoneIcon } from '@phosphor-icons/react';
import Image from 'next/image';
import { motion } from 'framer-motion';

export function Features() {
    return (
        <section className="bg-secondary section-padding">
            <div className="container-custom">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, margin: "-50px" }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="mb-12"
                >
                    <p className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-jobb-orange text-white mb-6">
                        <MegaphoneIcon size={20} /> Novidades
                    </p>
                    <h3 className="text-jobb-text-secondary">
                        O Jobb lançou a versão 4.0 com novidades que vão dá um <span className="text-jobb-orange italic font-medium">boooost na sua produtividade</span>, aproveite!
                    </h3>
                </motion.div>

                <div className="grid lg:grid-cols-3 gap-8 mb-4">
                    {[
                        { icon: OpenAiLogoIcon, title: "Jobb AI", desc: "Chat inteligente para consulta rápida a seus dados: tome decisões estratégicas com consultas instantâneas via chat." },
                        { icon: WebhooksLogoIcon, title: "Conectividade e API", desc: "A nova arquitetura permitirá integrações poderosas. Em breve, disponibilizaremos nossa API aberta e documentada." },
                        { icon: Eye, title: "Visibilidade do status", desc: "Acompanhe em tempo real a fase do status de produção e tenha mais visibilidade do fluxo do projeto." },
                    ].map((feature, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: false, margin: "-50px" }}
                            transition={{ duration: 0.6, ease: "easeOut", delay: i * 0.3 }}
                            className="group"
                        >
                            <div className="mb-4">
                                <feature.icon className="text-jobb-orange" size={32} weight="regular" />
                            </div>
                            <h3 className="text-white mb-3">
                                {feature.title.split(' ').map((word, idx) =>
                                    word === 'AI' || word === 'API' || word === 'status' ?
                                        <span key={idx} className="text-jobb-orange"> {word}</span> :
                                        <span key={idx}> {word}</span>
                                )}
                            </h3>
                            <p className="text-jobb-text-secondary leading-relaxed text-[16px]">{feature.desc}</p>
                        </motion.div>
                    ))}
                </div>

                <div className="flex flex-col lg:flex-row items-center gap-8">
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false, margin: "-50px" }}
                        transition={{ duration: 0.6, ease: "easeOut", delay: 0.6 }}
                        className="lg:w-1/3 relative flex justify-center"
                    >
                        <div className="relative w-64 h-[18rem] flex items-center justify-center overflow-visible">
                            <Image src="/images/celular.webp" alt="Orçamento no celular" fill sizes="256px" className="object-contain" />
                        </div>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false, margin: "-50px" }}
                        transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
                        className="lg:w-2/3"
                    >
                        <div>
                            <DeviceMobileCameraIcon size={32} className="mb-4 text-jobb-orange" />
                            <h3 className="mb-3 text-white">Orçamento no <span className="text-jobb-orange">celular</span></h3>
                        </div>
                        <p className="text-jobb-text-secondary leading-relaxed text-[16px]">
                            A nova versão traz uma interface pensada para a mobilidade real. Editar orçamentos pelo celular vai ficar muito mais fácil e intuitivo. Ajuste valores, itens e prazos na palma da sua mão com a mesma precisão do computador, de onde você estiver.
                        </p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
