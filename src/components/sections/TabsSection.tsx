'use client';

import { useState, useEffect, useCallback } from 'react';
import {
    BuildingsIcon,
    IdentificationCardIcon,
    UserPlusIcon,
    CoinsIcon,
    CurrencyDollarIcon,
    WalletIcon,
    ChartLineUpIcon,
    BankIcon,
    ReceiptIcon,
    ListChecksIcon,
    ChartBarIcon,
    CalendarIcon,
    TimerIcon,
    CalculatorIcon,
    HandshakeIcon,
    LinkIcon,
    FilePdfIcon,
    EnvelopeSimpleIcon,
    CopyIcon,
    MegaphoneIcon,
    CloudSunIcon,
    PrinterIcon,
    BarcodeIcon,
    CheckSquareOffsetIcon,
} from '@phosphor-icons/react';
import { motion, AnimatePresence } from 'motion/react';

// ─── Carousel images per tab ───
const tabImages: Record<string, string[]> = {
    cadastro: [
        '/images/funcionalidades/cadastro/cadastro-permissoes.webp',
        '/images/funcionalidades/cadastro/cadastro-produtos.webp',
        '/images/funcionalidades/cadastro/cadastro-unidades.webp',
    ],
    financeiro: [
        '/images/funcionalidades/financeiro/contas-pagar.webp',
        '/images/funcionalidades/financeiro/faturas.webp',
        '/images/funcionalidades/financeiro/plano-contas.webp',
        '/images/funcionalidades/financeiro/relacao-pagamentos.webp',
    ],
    tarefas: [
        '/images/funcionalidades/tarefas/cadastro-projeto.webp',
        '/images/funcionalidades/tarefas/gantt.webp',
        '/images/funcionalidades/tarefas/gestao-tarefas.webp',
    ],
    orcamentos: [
        '/images/funcionalidades/orcamentos/audiovisual.webp',
        '/images/funcionalidades/orcamentos/publicitario.webp',
    ],
    'ordem-do-dia': [
        '/images/funcionalidades/tela2.jpg.webp',
        '/images/funcionalidades/tela3.jpg.webp',
        '/images/funcionalidades/tela5.jpg.webp',
    ],
    equipamentos: [
        '/images/funcionalidades/equipamentos/consulta-equipamentos.webp',
        '/images/funcionalidades/equipamentos/saida-equipamentos.webp',
    ],
};

// ─── Bento grid items per tab ───
interface BentoItem {
    icon: React.ReactNode;
    title: string;
    description: string;
    /** Optional: 'large' spans 2 columns on desktop */
    size?: 'large' | 'normal';
}

const tabsData: { id: string; title: string; items: BentoItem[] }[] = [
    {
        id: 'cadastro',
        title: 'Cadastro',
        items: [
            {
                icon: <BuildingsIcon size={36} weight="light" />,
                title: 'Unidades sem limites',
                description: 'Cadastre quantas unidades desejar! Adicione e gerencie todas as unidades da sua empresa de forma prática e ilimitada.',
                size: 'large',
            },
            {
                icon: <IdentificationCardIcon size={36} weight="light" />,
                title: 'Permissões e perfis',
                description: 'Controle total sobre permissões de cada usuário. Direcione com segurança as ações de cada membro da equipe no sistema.',
            },
            {
                icon: <UserPlusIcon size={36} weight="light" />,
                title: 'Usuários por unidade',
                description: 'Segmente usuários por unidade com perfis personalizados, garantindo acesso direcionado às informações relevantes.',
            },
            {
                icon: <CoinsIcon size={36} weight="light" />,
                title: 'Produtos do orçamento',
                description: 'Base de itens do orçamento com pré-cadastro de valor e associação ao plano de contas no financeiro.',
            },
        ],
    },
    {
        id: 'financeiro',
        title: 'Financeiro',
        items: [
            {
                icon: <CurrencyDollarIcon size={36} weight="light" />,
                title: 'Contas a Pagar',
                description: 'Gestão financeira completa, integrando contas a pagar diretamente do orçamento e custos fixos administrativos.',
                size: 'large',
            },
            {
                icon: <WalletIcon size={36} weight="light" />,
                title: 'Contas a Receber',
                description: 'Controle financeiro completo com gerenciamento de contas a receber e valores da sua produtora audiovisual.',
            },
            {
                icon: <ChartLineUpIcon size={36} weight="light" />,
                title: 'Fluxo de Caixa',
                description: 'Acompanhe entradas e saídas com gráfico de saldo intuitivo para análise precisa das finanças.',
            },
            {
                icon: <BankIcon size={36} weight="light" />,
                title: 'Conciliação Bancária',
                description: 'Importe arquivos OFX e conte com conciliação inteligente com sugestões precisas de lançamentos.',
            },
            {
                icon: <ReceiptIcon size={36} weight="light" />,
                title: 'Nota Fiscal Eletrônica',
                description: 'Faturamento e emissão de NF-e diretamente pela plataforma de forma ágil e segura.',
            },
        ],
    },
    {
        id: 'tarefas',
        title: 'Tarefas',
        items: [
            {
                icon: <ListChecksIcon size={36} weight="light" />,
                title: 'Quadro Kanban',
                description: 'Gerencie tarefas com quadro Kanban, adicione convidados, faça comentários e anexe arquivos diretamente.',
                size: 'large',
            },
            {
                icon: <ChartBarIcon size={36} weight="light" />,
                title: 'Gráfico de Gantt',
                description: 'Acompanhe o andamento de cada tarefa de forma intuitiva com visão de todos os projetos juntos.',
            },
            {
                icon: <CalendarIcon size={36} weight="light" />,
                title: 'Calendário com Cores',
                description: 'Atribua cores para cada tarefa com identificação rápida e fácil no calendário de tarefas.',
            },
            {
                icon: <TimerIcon size={36} weight="light" />,
                title: 'Gestão de Tempo',
                description: 'Crie tarefas com registro de tempo gasto em cada atividade com funcionalidade de timesheet.',
            },
        ],
    },
    {
        id: 'orcamentos',
        title: 'Orçamentos',
        items: [
            {
                icon: <CalculatorIcon size={36} weight="light" />,
                title: 'Criação Rápida',
                description: 'Crie orçamentos como no Excel. Use modelos personalizados, calcule taxas, impostos, BV e comissões.',
                size: 'large',
            },
            {
                icon: <HandshakeIcon size={36} weight="light" />,
                title: 'Prestação de Contas',
                description: 'Após aprovação, preencha fornecedores e custos de produção diretamente na plataforma.',
            },
            {
                icon: <LinkIcon size={36} weight="light" />,
                title: 'Link para Fornecedor',
                description: 'Envie link seguro para o fornecedor preencher dados cadastrais e anexar notas fiscais.',
            },
            {
                icon: <FilePdfIcon size={36} weight="light" />,
                title: 'Envio em PDF ou Link',
                description: 'Envie orçamentos em PDF ou link com template personalizado com a marca da sua empresa.',
            },
            {
                icon: <CoinsIcon size={36} weight="light" />,
                title: 'Verba de Produção',
                description: 'Gerencie verbas para pagamento de despesas em dinheiro com app para prestação de contas.',
            },
        ],
    },
    {
        id: 'ordem-do-dia',
        title: 'Ordem do dia',
        items: [
            {
                icon: <UserPlusIcon size={36} weight="light" />,
                title: 'Importar do Orçamento',
                description: 'Importe elenco e equipe técnica diretamente do orçamento, economizando tempo e evitando erros.',
                size: 'large',
            },
            {
                icon: <EnvelopeSimpleIcon size={36} weight="light" />,
                title: 'E-mails e Avisos',
                description: 'Envie e-mails e compartilhe link de acesso para a equipe visualizar a Ordem do dia e Call sheet.',
            },
            {
                icon: <CopyIcon size={36} weight="light" />,
                title: 'Duplicar Ordem do Dia',
                description: 'Duplique documentos com um clique, economizando tempo e garantindo consistência.',
            },
            {
                icon: <MegaphoneIcon size={36} weight="light" />,
                title: 'Equipe Atualizada',
                description: 'Descrição das cenas, ambientes e locações com avisos e atualizações para toda a equipe.',
            },
            {
                icon: <CloudSunIcon size={36} weight="light" />,
                title: 'Previsão do Tempo',
                description: 'Previsão do tempo integrada e cadastro de locações para planejar com confiança.',
            },
            {
                icon: <PrinterIcon size={36} weight="light" />,
                title: 'Impressão em PDF',
                description: 'Imprima Ordens do dia e Call sheets em PDF, disponíveis para a equipe mesmo offline.',
            },
        ],
    },
    {
        id: 'equipamentos',
        title: 'Equipamentos',
        items: [
            {
                icon: <BarcodeIcon size={36} weight="light" />,
                title: 'Cadastro e Inventário',
                description: 'Registre todos os equipamentos com código de barras próprio para gestão eficiente do inventário.',
                size: 'large',
            },
            {
                icon: <CheckSquareOffsetIcon size={36} weight="light" />,
                title: 'Checklist de Entrada/Saída',
                description: 'Controle saída e entrada de equipamentos com lista personalizada de check-list e registro completo.',
            },
        ],
    },
];

// ─── Carousel Component ───
function ImageCarousel({ images }: { images: string[] }) {
    const [currentIndex, setCurrentIndex] = useState(0);

    const next = useCallback(() => {
        setCurrentIndex((prev) => (prev + 1) % images.length);
    }, [images.length]);

    useEffect(() => {
        const interval = setInterval(next, 4000);
        return () => clearInterval(interval);
    }, [next]);

    return (
        <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden bg-card">
            <AnimatePresence mode="wait">
                <motion.div
                    key={currentIndex}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    className="absolute inset-0"
                >
                    <img
                        src={images[currentIndex]}
                        alt={`Funcionalidade tela ${currentIndex + 1}`}
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 900px"
                    />
                </motion.div>
            </AnimatePresence>

            {/* Dots */}
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                {images.map((_, i) => (
                    <button
                        key={i}
                        onClick={() => setCurrentIndex(i)}
                        className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${i === currentIndex
                            ? 'bg-jobb-orange w-6'
                            : 'bg-gray-400/80 hover:bg-gray-600/80'
                            }`}
                    />
                ))}
            </div>
        </div>
    );
}

// ─── Main Component ───
export function TabsSection() {
    const [activeTab, setActiveTab] = useState(tabsData[0].id);

    const activeData = tabsData.find((t) => t.id === activeTab);
    const images = tabImages[activeTab] || [];

    return (
        <section className="bg-secondary pt-8 pb-24">
            <div className="container-custom max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col gap-8 lg:gap-12">

                    {/* ── Horizontal Tabs ── */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        className="w-full justify-center border-b border-white/10 flex overflow-x-auto hide-scrollbar"
                    >
                        <ul className="flex flex-row">
                            {tabsData.map((tab) => {
                                const isActive = activeTab === tab.id;
                                return (
                                    <li
                                        key={tab.id}
                                        onClick={() => setActiveTab(tab.id)}
                                        className={`group flex items-center justify-center gap-3 font-medium py-4 px-6 cursor-pointer transition-colors hover:bg-white/5 border-b-2 ${isActive
                                            ? 'bg-white/5 text-jobb-orange border-jobb-orange'
                                            : 'text-[#a3a3a3] hover:text-white border-transparent'
                                            }`}
                                    >
                                        <span className="text-center whitespace-nowrap">{tab.title}</span>
                                    </li>
                                );
                            })}
                        </ul>
                    </motion.div>

                    {/* ── Tab Content ── */}
                    <div className="w-full flex flex-col gap-12">

                        {/* Carousel */}
                        <div className="w-full max-w-5xl mx-auto mb-12">
                            <motion.div
                                key={`carousel-${activeTab}`}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, ease: "easeOut" }}
                            >
                                <ImageCarousel images={images} />
                            </motion.div>
                        </div>

                        {/* Bento Grid */}
                        <motion.div
                            key={`grid-${activeTab}`}
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, ease: "easeOut", delay: 0.15 }}
                            className="flex flex-wrap justify-center gap-6"
                        >
                            {activeData?.items.map((item, i) => {
                                // Se a tab tiver 4 cards (ex: Cadastro, Tarefas), ou for especificada com layout 50%
                                const isTwoCols = activeData.items.length === 4;
                                const widthClass = isTwoCols
                                    ? 'md:w-[calc(37%-12px)]'
                                    : 'md:w-[calc(33.333%-16px)]';

                                return (
                                    <div
                                        key={i}
                                        className={`w-full ${widthClass} bg-card rounded-2xl p-8 group transition-colors duration-300 hover:bg-card/60`}
                                    >
                                        <div className="flex items-start gap-6">
                                            <div className="text-jobb-orange shrink-0 mt-1 group-hover:scale-110 transition-transform">
                                                {item.icon}
                                            </div>
                                            <div>
                                                <h3 className="text-white text-lg font-medium mb-2">{item.title}</h3>
                                                <p className="text-[#a3a3a3] leading-relaxed text-[15px]">{item.description}</p>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </motion.div>

                    </div>
                </div>
            </div>
        </section>
    );
}
