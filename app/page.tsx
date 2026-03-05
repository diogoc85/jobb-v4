'use client';

import { motion } from 'motion/react';
import { 
  List, 
  X, 
  CheckCircle, 
  ChatCircleText, 
  Gear, 
  CurrencyDollar, 
  FilePdf, 
  GameController, 
  ChartBar,
  Link as LinkIcon,
  PaperPlaneTilt,
  Receipt,
  Bank,
  ArrowRight,
  Cpu,
  PlugsConnected,
  Eye,
  DeviceMobile,
  ArrowLeft,
  ArrowUp
} from '@phosphor-icons/react';
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';

export default function LandingPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showScrollButton, setShowScrollButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollButton(true);
      } else {
        setShowScrollButton(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-jobb-dark text-jobb-text font-sans overflow-x-hidden relative">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-jobb-dark/90 backdrop-blur-md border-b border-white/5">
        <div className="container-custom h-20 flex items-center justify-between">
          <div className="flex items-center gap-12">
            <Link href="/" className="text-2xl font-bold text-white flex items-center gap-2">
              <span className="text-3xl font-extrabold tracking-tighter">jobb</span>
            </Link>
            
            <nav className="hidden lg:flex items-center gap-8">
              <Link href="#" className="text-sm font-medium text-jobb-text-secondary hover:text-white transition-colors">Home</Link>
              <Link href="#" className="text-sm font-medium text-jobb-text-secondary hover:text-white transition-colors">Funcionalidades</Link>
              <Link href="#" className="text-sm font-medium text-jobb-text-secondary hover:text-white transition-colors">Clientes</Link>
              <Link href="#" className="text-sm font-medium text-jobb-text-secondary hover:text-white transition-colors">Estudantes/Professores</Link>
              <Link href="#" className="text-sm font-medium text-jobb-text-secondary hover:text-white transition-colors">Blog</Link>
              <Link href="#" className="text-sm font-medium text-jobb-text-secondary hover:text-white transition-colors">Ajuda</Link>
            </nav>
          </div>

          <div className="hidden lg:flex items-center gap-4">
            <Button variant="primary">Teste Grátis</Button>
            <Button variant="outline" className="border-white/20 rounded-full px-6">Login</Button>
          </div>

          <button className="lg:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} /> : <List size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden bg-jobb-dark border-b border-white/10 p-4 flex flex-col gap-4">
            <Link href="#" className="text-sm font-medium text-white">Home</Link>
            <Link href="#" className="text-sm font-medium text-white">Funcionalidades</Link>
            <Link href="#" className="text-sm font-medium text-white">Clientes</Link>
            <Link href="#" className="text-sm font-medium text-white">Estudantes/Professores</Link>
            <Link href="#" className="text-sm font-medium text-white">Blog</Link>
            <Link href="#" className="text-sm font-medium text-white">Ajuda</Link>
            <div className="flex flex-col gap-2 mt-4">
              <Button variant="primary" className="w-full">Teste Grátis</Button>
              <Button variant="outline" className="w-full">Login</Button>
            </div>
          </div>
        )}
      </header>

      <main className="pt-20">
        {/* Hero Section */}
        <section className="section-padding relative overflow-hidden">
          <div className="container-custom grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 z-10">
              <h1 className="text-5xl md:text-6xl font-bold text-white leading-[1.1]">
                Gestão de <br />
                produtoras <br />
                audiovisual.
              </h1>
              <p className="text-xl text-jobb-text-secondary max-w-md">
                Do orçamento ao financeiro, tudo em um único lugar!
              </p>
              <div className="pt-4">
                <Button variant="primary" size="lg" className="text-base px-8 py-6">
                  Teste grátis por 15 dias
                </Button>
                <p className="text-xs text-jobb-text-secondary mt-4 max-w-xs">
                  Faça como mais de <span className="text-jobb-orange">400 produtoras</span> que já profissionalizaram a gestão com o Jobb.
                </p>
              </div>
            </div>
            
            <div className="relative z-10 flex justify-center lg:justify-end">
              {/* Abstract representation of the hero image since we don't have the exact asset */}
              <div className="relative w-full max-w-[500px] aspect-[4/5] bg-gradient-to-br from-jobb-gray to-black rounded-3xl overflow-hidden flex items-center justify-center group">
                 <div className="absolute inset-0 bg-[url('https://picsum.photos/seed/woman/800/1000')] bg-cover bg-center opacity-80 mix-blend-overlay"></div>
                 <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
                    {/* Floating UI Elements Mockup */}
                    <div className="bg-jobb-gray/90 backdrop-blur p-4 rounded-xl shadow-none mb-4 transform -rotate-6 translate-x-12">
                        <div className="flex items-center gap-2 mb-2">
                            <div className="w-3 h-3 rounded-full bg-red-500"></div>
                            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                            <div className="w-3 h-3 rounded-full bg-green-500"></div>
                        </div>
                        <div className="h-2 w-24 bg-white/20 rounded mb-2"></div>
                        <div className="h-2 w-16 bg-white/20 rounded"></div>
                    </div>
                    
                    <div className="bg-jobb-orange p-6 rounded-2xl shadow-none transform rotate-3">
                        <h3 className="text-2xl font-bold text-white">NOVO JOBB</h3>
                        <div className="text-4xl font-black text-white">4.0</div>
                        <div className="text-xs text-white/80 mt-1">Upgrade realizado com sucesso!</div>
                    </div>
                 </div>
                 
                 {/* Floating Badges */}
                 <div className="absolute top-20 left-10 bg-white/10 backdrop-blur px-4 py-2 rounded-full flex items-center gap-2">
                    <div className="bg-white p-1 rounded-full"><CheckCircle className="text-jobb-orange" weight="fill" /></div>
                    <span className="text-sm font-medium">Segurança</span>
                 </div>
                 
                 <div className="absolute bottom-32 left-10 bg-jobb-orange px-4 py-2 rounded-full flex items-center gap-2 shadow-none">
                    <div className="bg-white/20 p-1 rounded-full"><CheckCircle className="text-white" weight="fill" /></div>
                    <span className="text-sm font-medium text-white">Usabilidade</span>
                 </div>

                 <div className="absolute bottom-40 right-10 bg-white/10 backdrop-blur px-4 py-2 rounded-full flex items-center gap-2">
                    <div className="bg-white p-1 rounded-full"><CheckCircle className="text-jobb-orange" weight="fill" /></div>
                    <span className="text-sm font-medium">Performance</span>
                 </div>
              </div>
            </div>
          </div>
          
          {/* Background Glow */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-jobb-orange/10 rounded-full blur-[120px] -z-0 pointer-events-none"></div>
        </section>

        {/* Problem Section */}
        <section className="section-padding bg-[#1A1A1E]">
          <div className="container-custom">
            <div className="flex flex-col items-center text-center mb-16">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 text-xs font-medium text-jobb-text-secondary mb-6">
                <X size={14} className="text-red-500" /> Produtora sem o Jobb
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Sua produtora <span className="text-jobb-text-secondary font-normal">está com a</span><br />
                <span className="text-jobb-text-secondary font-normal">gestão toda bagunçada?</span>
              </h2>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="relative">
                 <div className="relative w-full aspect-video bg-jobb-gray rounded-2xl overflow-hidden">
                    <Image 
                        src="https://picsum.photos/seed/stressed/800/600" 
                        alt="Gestão bagunçada" 
                        fill 
                        className="object-cover opacity-60 grayscale"
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="bg-red-500/20 p-4 rounded-full backdrop-blur-sm">
                            <X size={48} className="text-red-500" weight="bold" />
                        </div>
                    </div>
                 </div>
              </div>

              <div className="space-y-6">
                <ul className="space-y-4">
                    {[
                        "Gestão com planilhas desorganizadas.",
                        "Vários sistemas separados que não interagem.",
                        "Horas perdidas na montagem do orçamento.",
                        "Pagamentos atrasados por esquecimento."
                    ].map((item, i) => (
                        <li key={i} className="flex items-start gap-3 text-jobb-text-secondary">
                            <div className="mt-1 min-w-[20px] h-5 rounded-full border border-red-500/30 flex items-center justify-center">
                                <X size={12} className="text-red-500" />
                            </div>
                            {item}
                        </li>
                    ))}
                </ul>
                <div className="pt-4 border-t border-white/5">
                    <p className="text-lg">
                        Conheça o sistema Jobb e <span className="text-jobb-orange italic">dê um boooooost na sua produtora.</span>
                    </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Solution Section */}
        <section className="section-padding">
          <div className="container-custom">
            <div className="flex flex-col items-center text-center mb-16">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 text-xs font-medium text-jobb-text-secondary mb-6">
                <CheckCircle size={14} className="text-jobb-orange" weight="fill" /> Produtora com o Jobb
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Integre <span className="font-normal text-jobb-text-secondary">todos os setores da sua produtora!</span>
              </h2>
              <p className="text-jobb-text-secondary max-w-2xl">
                Com o Sistema Jobb <span className="text-jobb-orange">sua produtora centraliza tudo</span> em um único lugar.
              </p>
            </div>

            {/* Main Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                {[
                    { icon: ChatCircleText, title: "Atendimento", desc: "Cadastre os clientes, agências e fornecedores, faça os orçamentos, visualize e envie diretamente pelo sistema." },
                    { icon: Gear, title: "Gestão da produção", desc: "Cadastro da mão de obra envolvida, prestação de contas das despesas de produção por Jobb. Tudo numa única tela, sem complicações." },
                    { icon: CurrencyDollar, title: "Financeiro completo", desc: "Financeiro totalmente integrado com a produção: faturamento, contas a pagar e receber, cheques, conciliação bancária, entre outros." },
                    { icon: FilePdf, title: "Envio de PDF", desc: "Crie sua carta de orçamento com o timbrado ou marca da sua empresa e visualize antes de enviar." },
                    { icon: GameController, title: "Controle do projeto", desc: "Controle seus prazos, tarefas e tempo. Melhore a comunicação entre a equipe e tenha um calendário de execução." },
                    { icon: ChartBar, title: "Relatórios gerenciais", desc: "Tenha numa única tela uma visão completa do andamento do orçamento, pagamentos, recebimentos e lucro." },
                ].map((feature, i) => (
                    <div key={i} className="bg-jobb-gray p-8 rounded-3xl transition-all duration-300 hover:brightness-75 group cursor-default shadow-none">
                        <motion.div
                          initial={{ scale: 0.5, opacity: 0 }}
                          whileInView={{ scale: 1, opacity: 1 }}
                          transition={{ 
                            type: "spring", 
                            stiffness: 260, 
                            damping: 20, 
                            delay: i * 0.1 
                          }}
                          viewport={{ once: true }}
                        >
                          <feature.icon className="text-jobb-orange mb-6" size={32} weight="regular" />
                        </motion.div>
                        <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                        <p className="text-sm text-jobb-text-secondary leading-relaxed">{feature.desc}</p>
                    </div>
                ))}
            </div>

            {/* Secondary Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                {[
                    { icon: LinkIcon, title: "Envio de cadastro de fornecedores por link", desc: "Agora seu fornecedor tem a facilidade de atualizar os próprios dados que ficam salvos automaticamente no sistema." },
                    { icon: PaperPlaneTilt, title: "Envio de contratos via D4sign", desc: "Além de você gerar os contratos em PDF de uma maneira prática e automatizada, agora você já pode enviar os contratos para seus clientes." },
                    { icon: Receipt, title: "Emissão de nota fiscal de serviço eletrônica", desc: "A emissão de NFS-e integrada ao sistema financeiro traz agilidade e eficiência. Automação do processo de envio." },
                    { icon: Bank, title: "Conciliação bancária por arquivo Ofx", desc: "Tenha praticidade e economize tempo com nossa solução de conciliação bancária. Simplificamos o processo." },
                ].map((feature, i) => (
                    <div key={i} className="p-6 rounded-2xl hover:bg-white/5 transition-colors shadow-none">
                        <motion.div
                          initial={{ scale: 0.5, opacity: 0 }}
                          whileInView={{ scale: 1, opacity: 1 }}
                          transition={{ 
                            type: "spring", 
                            stiffness: 260, 
                            damping: 20, 
                            delay: i * 0.1 
                          }}
                          viewport={{ once: true }}
                        >
                          <feature.icon className="text-jobb-orange mb-4" size={24} weight="regular" />
                        </motion.div>
                        <h4 className="text-base font-bold text-white mb-2">{feature.title}</h4>
                        <p className="text-xs text-jobb-text-secondary leading-relaxed">{feature.desc}</p>
                    </div>
                ))}
            </div>

            <div className="flex justify-center gap-4">
                <Button variant="secondary" className="rounded-full px-8 py-6 bg-jobb-gray hover:bg-jobb-gray-hover">Mais funcionalidades</Button>
                <Button variant="primary" className="rounded-full px-8 py-6">Teste grátis por 15 dias</Button>
            </div>
          </div>
        </section>

        {/* Target Audience Section */}
        <section className="section-padding bg-[url('https://picsum.photos/seed/darkbg/1920/1080')] bg-cover bg-center bg-no-repeat relative">
          <div className="absolute inset-0 bg-jobb-dark/90"></div>
          <div className="container-custom relative z-10">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
                {/* Logos Grid */}
                <div className="grid grid-cols-3 gap-4">
                    {[
                        { name: "Globo play", color: "bg-red-500" },
                        { name: "Vídeos Publicitários", color: "bg-green-500" },
                        { name: "HBO Max", color: "bg-purple-700" },
                        { name: "Twitch", color: "bg-purple-500" },
                        { name: "YouTube", color: "bg-red-600" },
                        { name: "Prime Video", color: "bg-blue-500" },
                        { name: "Disney+", color: "bg-blue-900" },
                        { name: "Netflix", color: "bg-black" },
                        { name: "Paramount+", color: "bg-blue-600" },
                    ].map((logo, i) => (
                        <div key={i} className={`${logo.color} aspect-square rounded-2xl flex items-center justify-center p-4 text-center text-xs font-bold text-white shadow-none`}>
                            {logo.name}
                        </div>
                    ))}
                </div>

                {/* Text Content */}
                <div>
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
                        Pra quem é indicado o <br />
                        <span className="text-white">Sistema Jobb?</span>
                    </h2>
                    <ul className="space-y-4">
                        {[
                            "Produtoras de vídeos publicitários/institucionais",
                            "Produtores de Filmes/Documentários - Ancine",
                            "Produtoras de Filmes/Séries nos grande Streamers (Netflix/Amazon/Globo/Hbo)...",
                            "Produtores de conteúdo para Youtube, Twitch Tv, entre outros."
                        ].map((item, i) => (
                            <li key={i} className="flex items-start gap-3 text-jobb-text-secondary">
                                <ArrowRight size={16} className="text-jobb-orange mt-1 shrink-0" weight="bold" />
                                <span>{item}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
          </div>
        </section>

        {/* Features 4.0 Section */}
        <section className="section-padding">
          <div className="container-custom">
            <div className="mb-12">
                <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 text-xs font-medium text-jobb-text-secondary mb-6">
                    <div className="w-2 h-2 rounded-full bg-jobb-orange animate-pulse"></div> Novidades
                </span>
                <p className="text-jobb-text-secondary text-lg">
                    O Jobb lançou a versão 4.0 com novidades que vão dá um <span className="text-jobb-orange italic font-medium">boooost na sua produtividade</span>, aproveite!
                </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
                {[
                    { icon: Cpu, title: "Jobb AI", desc: "Chat inteligente para consulta rápida a seus dados: tome decisões estratégicas com consultas instantâneas via chat." },
                    { icon: PlugsConnected, title: "Conectividade e API", desc: "A nova arquitetura permitirá integrações poderosas. Em breve, disponibilizaremos nossa API aberta e documentada." },
                    { icon: Eye, title: "Visibilidade do status", desc: "Acompanhe em tempo real a fase do status de produção e tenha mais visibilidade do fluxo do projeto." },
                ].map((feature, i) => (
                    <div key={i} className="group">
                        <div className="mb-4">
                            <feature.icon className="text-jobb-orange" size={32} weight="regular" />
                        </div>
                        <h3 className="text-xl font-bold text-white mb-3">
                            {feature.title.split(' ').map((word, idx) => 
                                word === 'AI' || word === 'API' || word === 'status' ? 
                                <span key={idx} className="text-jobb-orange"> {word}</span> : 
                                <span key={idx}> {word}</span>
                            )}
                        </h3>
                        <p className="text-sm text-jobb-text-secondary leading-relaxed">{feature.desc}</p>
                    </div>
                ))}
            </div>

            <div className="mt-20 bg-jobb-gray rounded-3xl p-8 lg:p-12 flex flex-col lg:flex-row items-center gap-12 shadow-none">
                <div className="lg:w-1/3 relative">
                     {/* Phone Mockup */}
                     <div className="relative mx-auto w-48 h-96 bg-black rounded-[3rem] border-4 border-gray-800 shadow-none overflow-hidden">
                        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-24 h-6 bg-black rounded-b-xl z-20"></div>
                        <div className="w-full h-full bg-white text-black p-4 pt-10 overflow-hidden">
                            <div className="flex justify-between items-center mb-4">
                                <div className="font-bold text-lg">Orçamento</div>
                                <div className="text-xs bg-orange-100 text-orange-600 px-2 py-1 rounded">Em aberto</div>
                            </div>
                            <div className="space-y-2">
                                <div className="h-16 bg-gray-100 rounded-lg p-2">
                                    <div className="h-2 w-12 bg-gray-300 rounded mb-2"></div>
                                    <div className="h-2 w-20 bg-gray-200 rounded"></div>
                                </div>
                                <div className="h-16 bg-gray-100 rounded-lg p-2">
                                    <div className="h-2 w-12 bg-gray-300 rounded mb-2"></div>
                                    <div className="h-2 w-20 bg-gray-200 rounded"></div>
                                </div>
                                <div className="h-16 bg-gray-100 rounded-lg p-2">
                                    <div className="h-2 w-12 bg-gray-300 rounded mb-2"></div>
                                    <div className="h-2 w-20 bg-gray-200 rounded"></div>
                                </div>
                            </div>
                        </div>
                     </div>
                </div>
                <div className="lg:w-2/3">
                    <div className="flex items-center gap-3 mb-4">
                        <DeviceMobile size={32} className="text-jobb-orange" />
                        <h3 className="text-2xl font-bold text-white">Orçamento no <span className="text-jobb-orange">celular</span></h3>
                    </div>
                    <p className="text-jobb-text-secondary leading-relaxed max-w-xl">
                        A nova versão traz uma interface pensada para a mobilidade real. Editar orçamentos pelo celular vai ficar muito mais fácil e intuitivo. Ajuste valores, itens e prazos na palma da sua mão com a mesma precisão do computador, de onde você estiver.
                    </p>
                </div>
            </div>
          </div>
        </section>

        {/* Ancine Section */}
        <section className="section-padding">
            <div className="container-custom">
                <div className="bg-gradient-to-r from-green-900/80 to-green-600/20 rounded-3xl p-8 lg:p-16 relative overflow-hidden shadow-none">
                    <div className="grid lg:grid-cols-2 gap-12 items-center relative z-10">
                        <div>
                            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                                Gestão financeira de <br />
                                projetos incentivados Ancine
                            </h2>
                            <p className="text-white/90 mb-8 max-w-md">
                                Facilite a sua rotina e reduza o tempo de trabalho na gestão financeira dos projetos
                            </p>
                            <ul className="space-y-3">
                                {[
                                    "Relação de pagamentos - Padrão Ancine",
                                    "Demonstrativo de Extrato - Padrão Ancine",
                                    "Demonstrativo Orçamentário - Padrão Ancine",
                                    "Relatório de Grandes Itens - Ancine",
                                    "Fontes de financiamentos e Contas bancárias separadas por projeto"
                                ].map((item, i) => (
                                    <li key={i} className="flex items-start gap-3 text-sm text-white/80">
                                        <ArrowRight size={16} className="text-green-400 mt-0.5 shrink-0" weight="bold" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="relative">
                            <div className="relative rounded-2xl overflow-hidden shadow-none">
                                <Image 
                                    src="https://picsum.photos/seed/manoffice/600/400" 
                                    alt="Gestão Ancine" 
                                    width={600} 
                                    height={400} 
                                    className="object-cover"
                                />
                                <div className="absolute bottom-4 right-4 bg-white p-2 rounded-lg shadow-none">
                                    <div className="text-green-700 font-bold text-xs tracking-widest uppercase">ancine</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        {/* Pricing Teaser */}
        <section className="section-padding bg-jobb-gray/30">
            <div className="container-custom">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-white mb-2">Planos e preços</h2>
                    <p className="text-jobb-orange font-medium">Profissionalize a gestão da sua empresa</p>
                </div>

                <div className="bg-jobb-gray rounded-3xl p-8 max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 shadow-none">
                    <div className="flex items-center gap-6">
                        <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-jobb-orange relative">
                            <Image 
                                src="https://picsum.photos/seed/smilingwoman/200/200" 
                                alt="Atendente" 
                                fill 
                                className="object-cover"
                            />
                        </div>
                        <div className="text-left">
                            <p className="text-white text-lg font-medium">a partir de <span className="text-jobb-orange font-bold text-2xl">R$ 199,00</span></p>
                            <p className="text-xs text-jobb-text-secondary mt-1 max-w-xs">
                                Entre em contato com nossos consultores para mais informações sobre treinamento e o melhor plano para sua empresa.
                            </p>
                        </div>
                    </div>
                    <Button variant="primary" className="rounded-full px-8 py-6 w-full md:w-auto">Saber sobre os planos</Button>
                </div>
            </div>
        </section>

        {/* Testimonials */}
        <section className="section-padding">
            <div className="container-custom text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                    Nossos clientes <span className="font-normal text-jobb-text-secondary">recomendam!</span>
                </h2>
                <p className="text-jobb-text-secondary mb-12">
                    Já são mais de <span className="text-jobb-orange font-bold italic">400 produtoras</span> parceiras
                </p>

                {/* Client Logos Strip */}
                <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-50 grayscale mb-16">
                    {/* Placeholder logos using text for now as we don't have the SVGs */}
                    {['ATUACENA', 'Libre', 'pindorama', 'PLURAL', 'art&films', 'BASE', 'dez', 'NOAR'].map((logo, i) => (
                        <div key={i} className="text-xl font-bold text-white">{logo}</div>
                    ))}
                </div>

                <p className="text-sm text-jobb-text-secondary mb-8">O que eles dizem sobre o Jobb</p>

                {/* Testimonial Card */}
                <div className="bg-jobb-gray p-8 md:p-12 rounded-3xl max-w-3xl mx-auto relative shadow-none">
                    <div className="absolute top-1/2 -left-6 transform -translate-y-1/2">
                        <button className="bg-black/50 hover:bg-jobb-orange p-3 rounded-full transition-colors">
                            <ArrowLeft size={20} className="text-white" />
                        </button>
                    </div>
                    <div className="absolute top-1/2 -right-6 transform -translate-y-1/2">
                        <button className="bg-black/50 hover:bg-jobb-orange p-3 rounded-full transition-colors">
                            <ArrowRight size={20} className="text-white" />
                        </button>
                    </div>

                    <p className="text-lg text-white/90 leading-relaxed mb-8">
                        &quot;O Jobb é vital para a Sanfona. Temos total controle de orçamentos, custos, lucratividade, pagamentos e os relatórios mais específicos de forma rápida e muito intuitiva. Recomendo até pros meus concorrentes.&quot;
                    </p>

                    <div className="flex items-center justify-center gap-4">
                        <div className="w-12 h-12 rounded-full overflow-hidden border border-white/20 relative">
                             <Image 
                                src="https://picsum.photos/seed/alfredo/100/100" 
                                alt="Alfredo Valtier" 
                                fill 
                                className="object-cover"
                            />
                        </div>
                        <div className="text-left">
                            <div className="flex text-yellow-500 text-xs mb-1">★★★★★</div>
                            <div className="text-sm font-bold text-white">Alfredo Valtier</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        {/* Footer CTA */}
        <section className="py-24 bg-gradient-to-r from-[#FF5500] to-[#FF7700] text-center">
            <div className="container-custom">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
                    Profissionalize a
                </h2>
                <h2 className="text-3xl md:text-4xl font-bold text-white italic mb-4">
                    gestão da sua produtora!
                </h2>
                <p className="text-white/90 mb-8">Teste grátis ou fale com um dos nossos consultores!</p>
                
                <div className="flex flex-col sm:flex-row justify-center gap-4 mb-6">
                    <Button variant="dark" className="rounded-full px-8 py-6 bg-black hover:bg-black/80 text-white border-none">Teste grátis por 15 dias</Button>
                    <Button variant="outline" className="rounded-full px-8 py-6 border-white/40 hover:bg-white/10 text-white">Falar com um consultor</Button>
                </div>
                
                <p className="text-xs text-white/80">
                    Faça como mais de <span className="font-bold">400 produtoras</span> que já profissionalizaram a gestão com o Jobb.
                </p>
            </div>
        </section>
      </main>

        {/* Footer */}
        <footer className="bg-jobb-gray py-16 border-t border-white/5">
            <div className="container-custom">
                <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-16">
                    <div className="max-w-xs">
                        <div className="text-2xl font-extrabold text-white tracking-tighter mb-4">jobb</div>
                        <p className="text-xs text-jobb-text-secondary">
                            Sistema Jobb, desde 2013 ajudando as produtoras na gestão audiovisual.
                        </p>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-16 w-full md:w-auto">
                        <div className="space-y-4">
                            <Link href="#" className="block text-xs text-jobb-text-secondary hover:text-white">Funcionalidades</Link>
                            <Link href="#" className="block text-xs text-jobb-text-secondary hover:text-white">Estudantes/Professores</Link>
                            <Link href="#" className="block text-xs text-jobb-text-secondary hover:text-white">Clientes</Link>
                            <Link href="#" className="block text-xs text-jobb-text-secondary hover:text-white">Blog</Link>
                        </div>
                        <div className="space-y-4">
                            <Link href="#" className="block text-xs text-jobb-text-secondary hover:text-white">Planos</Link>
                            <Link href="#" className="block text-xs text-jobb-text-secondary hover:text-white">Parcerias</Link>
                            <Link href="#" className="block text-xs text-jobb-text-secondary hover:text-white">Termos de uso</Link>
                            <Link href="#" className="block text-xs text-jobb-text-secondary hover:text-white">Política de Privacidade</Link>
                        </div>
                        <div className="space-y-4">
                            <Link href="#" className="block text-xs text-jobb-text-secondary hover:text-white">atendimento@jobb</Link>
                            <Link href="#" className="block text-xs text-jobb-text-secondary hover:text-white">55 81 998504107</Link>
                            <Link href="#" className="block text-xs text-jobb-text-secondary hover:text-white">@sistemajobb</Link>
                            <Link href="#" className="block text-xs text-jobb-text-secondary hover:text-white">@sistemajobb</Link>
                        </div>
                        <div>
                            <div className="w-20 h-20 bg-[#232F3E] rounded-lg flex items-center justify-center border border-white/10">
                                <span className="text-[10px] text-white text-center leading-tight">Somos parceiros<br/><strong className="text-orange-400 text-lg">aws</strong></span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="border-t border-white/5 pt-8 text-center md:text-left">
                    <p className="text-[10px] text-jobb-text-secondary">
                        © 2026 - Sistema Jobb. Todos os Direitos Reservados.
                    </p>
                </div>
            </div>
        </footer>
      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-8 right-8 bg-jobb-orange hover:bg-jobb-orange-hover text-white p-3 rounded-full shadow-lg z-50 transition-all duration-300 ${
          showScrollButton ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'
        }`}
        aria-label="Scroll to top"
      >
        <ArrowUp size={24} weight="bold" />
      </button>
    </div>
  );
}
