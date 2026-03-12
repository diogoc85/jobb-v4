'use client';

import { useState } from 'react';
import Image from 'next/image';
import {
    CaretRightIcon,
    BuildingsIcon,
    IdentificationCardIcon,
    UsersIcon,
    ClipboardTextIcon,
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
    CoinsIcon,
    UserPlusIcon,
    EnvelopeSimpleIcon,
    CopyIcon,
    MegaphoneIcon,
    CloudSunIcon,
    PrinterIcon,
    BarcodeIcon,
    CheckSquareOffsetIcon,
} from '@phosphor-icons/react';
import { motion } from 'framer-motion';

const tabsData = [
    {
        id: 'cadastro',
        title: 'Cadastro',
        content: (
            <>
                <div className="bg-card transition-colors duration-300 hover:bg-card/50 rounded-xl p-8 flex flex-col items-center justify-center sm:flex-row gap-6 group">
                    <div className="w-20 h-20 rounded-xl flex items-center justify-center">
                        <BuildingsIcon size={100} className="text-jobb-orange group-hover:scale-110 transition-transform" weight="light" />
                    </div>
                    <div>
                        <h3 className="text-white text-xl font-medium mb-3">Cadastro de unidade: Sem limites no Jobb!</h3>
                        <p className="text-[#a3a3a3] leading-relaxed text-[15px]">
                            Com o Jobb, você pode cadastrar quantas unidades desejar! Nossa plataforma permite que você adicione e gerencie todas as unidades da sua empresa de forma prática e ilimitada. Descubra como o Jobb oferece a flexibilidade necessária para atender às necessidades específicas do seu negócio.
                        </p>
                    </div>
                </div>

                <div className="bg-card transition-colors duration-300 hover:bg-card/50 rounded-xl p-8 flex flex-col items-center justify-center sm:flex-row gap-6 group">
                    <div className="w-20 h-20 rounded-xl flex items-center justify-center">
                        <IdentificationCardIcon size={100} className="text-jobb-orange group-hover:scale-110 transition-transform" weight="light" />
                    </div>
                    <div>
                        <h3 className="text-white text-xl font-medium mb-3">Cadastro de permissões e perfis personalizados no Jobb!</h3>
                        <p className="text-[#a3a3a3] leading-relaxed text-[15px]">
                            Tenha controle total sobre as permissões de cada usuário. Através do cadastro de perfis personalizados, direcione com segurança as ações de cada membro da equipe no sistema. Nossa plataforma permite que você conceda acesso apenas ao que é necessário, garantindo a segurança dos dados e aumentando a eficiência do trabalho. Simplifique a gestão de permissões e otimize a colaboração com o Jobb.
                        </p>
                    </div>
                </div>

                <div className="bg-card transition-colors duration-300 hover:bg-card/50 rounded-xl p-8 flex flex-col items-center justify-center sm:flex-row gap-6 group">
                    <div className="w-20 h-20 rounded-xl flex items-center justify-center">
                        <UserPlusIcon size={100} className="text-jobb-orange group-hover:scale-110 transition-transform" weight="light" />
                    </div>
                    <div>
                        <h3 className="text-white text-xl font-medium mb-3">Cadastro de usuários no Jobb: segmentação por unidade e perfis personalizados!</h3>
                        <p className="text-[#a3a3a3] leading-relaxed text-[15px]">
                            Você tem total controle sobre o cadastro de usuários. Aproveite a funcionalidade de segmentar usuários por unidade, permitindo um acesso mais direcionado às informações relevantes. Além disso, você pode escolher perfis personalizados para cada usuário, garantindo que eles tenham acesso apenas às áreas e funções necessárias.
                        </p>
                    </div>
                </div>

                <div className="bg-card transition-colors duration-300 hover:bg-card/50 rounded-xl p-8 flex flex-col items-center justify-center sm:flex-row gap-6 group">
                    <div className="w-20 h-20 rounded-xl flex items-center justify-center">
                        <CoinsIcon size={100} className="text-jobb-orange group-hover:scale-110 transition-transform" weight="light" />
                    </div>
                    <div>
                        <h3 className="text-white text-xl font-medium mb-3">Cadastro de produtos/itens do orçamento</h3>
                        <p className="text-[#a3a3a3] leading-relaxed text-[15px]">
                            Aqui é a base de todos os itens cadastrados no orçamento, onde você pode, se quiser, realizar um pré-cadastro, colocando valor e associando ao plano de contas no financeiro.
                        </p>
                    </div>
                </div>
            </>
        )
    },
    {
        id: 'financeiro',
        title: 'Financeiro',
        content: (
            <>
                <div className="bg-card transition-colors duration-300 hover:bg-card/50 rounded-xl p-8 flex flex-col items-center justify-center sm:flex-row gap-6 group">
                    <div className="w-20 h-20 rounded-xl flex items-center justify-center">
                        <CurrencyDollarIcon size={100} className="text-jobb-orange group-hover:scale-110 transition-transform" weight="light" />
                    </div>
                    <div>
                        <h3 className="text-white text-xl font-medium mb-3">Controle de Contas a Pagar</h3>
                        <p className="text-[#a3a3a3] leading-relaxed text-[15px]">
                            Gestão financeira completa, integrando contas a pagar diretamente do orçamento. Além de registrar as despesas relacionadas ao projeto, o Jobb permite que você acompanhe os custos fixos administrativos da produtora, proporcionando uma visão abrangente das finanças do seu negócio audiovisual. Simplifique a gestão financeira, tenha controle total dos gastos e otimize o planejamento do seu projeto com o Jobb.
                        </p>
                    </div>
                </div>

                <div className="bg-card transition-colors duration-300 hover:bg-card/50 rounded-xl p-8 flex flex-col items-center justify-center sm:flex-row gap-6 group">
                    <div className="w-20 h-20 rounded-xl flex items-center justify-center">
                        <WalletIcon size={100} className="text-jobb-orange group-hover:scale-110 transition-transform" weight="light" />
                    </div>
                    <div>
                        <h3 className="text-white text-xl font-medium mb-3">Gerenciamento de Contas a Receber</h3>
                        <p className="text-[#a3a3a3] leading-relaxed text-[15px]">
                            Com o Jobb, você terá um controle financeiro completo, incluindo o gerenciamento de contas a receber. Registre todas as receitas a serem recebidas e mantenha o controle total sobre os valores a receber da sua produtora audiovisual.
                        </p>
                    </div>
                </div>

                <div className="bg-card transition-colors duration-300 hover:bg-card/50 rounded-xl p-8 flex flex-col items-center justify-center sm:flex-row gap-6 group">
                    <div className="w-20 h-20 rounded-xl flex items-center justify-center">
                        <ChartLineUpIcon size={100} className="text-jobb-orange group-hover:scale-110 transition-transform" weight="light" />
                    </div>
                    <div>
                        <h3 className="text-white text-xl font-medium mb-3">Visão Estratégica com Gráfico de Fluxo de Caixa</h3>
                        <p className="text-[#a3a3a3] leading-relaxed text-[15px]">
                            O controle financeiro fica mais claro e estratégico com o Fluxo de Caixa e o Gráfico de Saldo. Acompanhe todas as entradas e saídas de recursos de forma organizada e visualmente intuitiva. O Gráfico de fluxo de caixa oferece uma visão clara do seu caixa ao longo do tempo, permitindo uma análise precisa das finanças da sua produtora.
                        </p>
                    </div>
                </div>

                <div className="bg-card transition-colors duration-300 hover:bg-card/50 rounded-xl p-8 flex flex-col items-center justify-center sm:flex-row gap-6 group">
                    <div className="w-20 h-20 rounded-xl flex items-center justify-center">
                        <BankIcon size={100} className="text-jobb-orange group-hover:scale-110 transition-transform" weight="light" />
                    </div>
                    <div>
                        <h3 className="text-white text-xl font-medium mb-3">Conciliação Bancária Descomplicada</h3>
                        <p className="text-[#a3a3a3] leading-relaxed text-[15px]">
                            Simplifique a conciliação bancária com o Jobb! Importe facilmente arquivos OFX do seu banco e conte com nossa conciliação inteligente, que oferece sugestões precisas de lançamentos a conciliar. Com o Jobb, você terá uma visão clara e organizada das transações bancárias, garantindo maior agilidade e precisão na gestão financeira da sua produtora audiovisual.
                        </p>
                    </div>
                </div>

                <div className="bg-card transition-colors duration-300 hover:bg-card/50 rounded-xl p-8 flex flex-col items-center justify-center sm:flex-row gap-6 group">
                    <div className="w-20 h-20 rounded-xl flex items-center justify-center">
                        <ReceiptIcon size={100} className="text-jobb-orange group-hover:scale-110 transition-transform" weight="light" />
                    </div>
                    <div>
                        <h3 className="text-white text-xl font-medium mb-3">Faturamento e Emissão de Nota Fiscal Eletrônica</h3>
                        <p className="text-[#a3a3a3] leading-relaxed text-[15px]">
                            Faturamento e opção de emissão de nota fiscal eletrônica. Realize o faturamento dos seus projetos audiovisuais de forma ágil e segura, e conte com a praticidade de emitir notas fiscais eletrônicas diretamente pela plataforma.
                        </p>
                    </div>
                </div>
            </>
        )
    },
    {
        id: 'tarefas',
        title: 'Tarefas',
        content: (
            <>
                <div className="bg-card transition-colors duration-300 hover:bg-card/50 rounded-xl p-8 flex flex-col items-center justify-center sm:flex-row gap-6 group">
                    <div className="w-20 h-20 rounded-xl flex items-center justify-center">
                        <ListChecksIcon size={100} className="text-jobb-orange group-hover:scale-110 transition-transform" weight="light" />
                    </div>
                    <div>
                        <h3 className="text-white text-xl font-medium mb-3">Gestão de Tarefas Simplificada</h3>
                        <p className="text-[#a3a3a3] leading-relaxed text-[15px]">
                            Com o Jobb, a gestão de tarefas nunca foi tão fácil! Através do quadro Kanban, você pode visualizar suas tarefas de forma clara e organizada. Adicione convidados para colaboração, faça comentários e anexe arquivos diretamente nas tarefas. Defina prazos para garantir a entrega pontual de cada atividade. Otimize o trabalho em equipe e aumente a produtividade com a Gestão de Tarefas do Jobb.
                        </p>
                    </div>
                </div>

                <div className="bg-card transition-colors duration-300 hover:bg-card/50 rounded-xl p-8 flex flex-col items-center justify-center sm:flex-row gap-6 group">
                    <div className="w-20 h-20 rounded-xl flex items-center justify-center">
                        <ChartBarIcon size={100} className="text-jobb-orange group-hover:scale-110 transition-transform" weight="light" />
                    </div>
                    <div>
                        <h3 className="text-white text-xl font-medium mb-3">Gráfico de Gantt e Opção de Ver Todos os Projetos no Jobb!</h3>
                        <p className="text-[#a3a3a3] leading-relaxed text-[15px]">
                            Com o Jobb, você tem uma visão completa dos seus projetos no que se refere a prazos! Utilize o Gráfico de Gantt para acompanhar o andamento de cada tarefa de forma intuitiva e organizada. Além disso, com a opção de visualizar todos os projetos juntos, você terá uma visão estratégica da sua produção audiovisual.
                        </p>
                    </div>
                </div>

                <div className="bg-card transition-colors duration-300 hover:bg-card/50 rounded-xl p-8 flex flex-col items-center justify-center sm:flex-row gap-6 group">
                    <div className="w-20 h-20 rounded-xl flex items-center justify-center">
                        <CalendarIcon size={100} className="text-jobb-orange group-hover:scale-110 transition-transform" weight="light" />
                    </div>
                    <div>
                        <h3 className="text-white text-xl font-medium mb-3">Organização com Calendário de Tarefas</h3>
                        <p className="text-[#a3a3a3] leading-relaxed text-[15px]">
                            Atribua cores para cada tarefa e tenha uma visão clara e organizada das atividades do seu projeto. O calendário com cores proporciona uma identificação rápida e fácil das tarefas, simplificando sua gestão e otimizando o planejamento da equipe.
                        </p>
                    </div>
                </div>

                <div className="bg-card transition-colors duration-300 hover:bg-card/50 rounded-xl p-8 flex flex-col items-center justify-center sm:flex-row gap-6 group">
                    <div className="w-20 h-20 rounded-xl flex items-center justify-center">
                        <TimerIcon size={100} className="text-jobb-orange group-hover:scale-110 transition-transform" weight="light" />
                    </div>
                    <div>
                        <h3 className="text-white text-xl font-medium mb-3">Crie Tarefas com Gestão de Tempo</h3>
                        <p className="text-[#a3a3a3] leading-relaxed text-[15px]">
                            Você pode otimizar o tempo e ter um controle preciso das tarefas! A funcionalidade de gestão de tempo/timesheet permite criar tarefas com registros do tempo gasto em cada atividade.
                        </p>
                    </div>
                </div>
            </>
        )
    },
    {
        id: 'orcamentos',
        title: 'Orçamentos',
        content: (
            <>
                <div className="bg-card transition-colors duration-300 hover:bg-card/50 rounded-xl p-8 flex flex-col items-center justify-center sm:flex-row gap-6 group">
                    <div className="w-20 h-20 rounded-xl flex items-center justify-center">
                        <CalculatorIcon size={100} className="text-jobb-orange group-hover:scale-110 transition-transform" weight="light" />
                    </div>
                    <div>
                        <h3 className="text-white text-xl font-medium mb-3">Crie Seus Orçamentos de Forma Fácil e Rápida</h3>
                        <p className="text-[#a3a3a3] leading-relaxed text-[15px]">
                            Com o Jobb, criar seus orçamentos é uma tarefa simples e rápida, como se estivesse no Excel. Utilize nossos modelos personalizados para evitar retrabalho e agilizar o processo. Além disso, você pode calcular o valor final adicionando taxas, impostos, BV, comissões e até mesmo acréscimos ou descontos. Experimente agora o Jobb e torne a gestão financeira dos seus projetos audiovisuais mais eficiente do que nunca!
                        </p>
                    </div>
                </div>

                <div className="bg-card transition-colors duration-300 hover:bg-card/50 rounded-xl p-8 flex flex-col items-center justify-center sm:flex-row gap-6 group">
                    <div className="w-20 h-20 rounded-xl flex items-center justify-center">
                        <HandshakeIcon size={100} className="text-jobb-orange group-hover:scale-110 transition-transform" weight="light" />
                    </div>
                    <div>
                        <h3 className="text-white text-xl font-medium mb-3">Prestação de Contas Simplificada: Gerenciando Fornecedores e Custos de Produção</h3>
                        <p className="text-[#a3a3a3] leading-relaxed text-[15px]">
                            Após a aprovação do orçamento, o Jobb torna a prestação de contas uma tarefa fácil e organizada. Preencha os fornecedores e os custos de produção diretamente na plataforma, lançando todas as despesas realizadas e os valores a pagar para os fornecedores no setor financeiro. Com o Jobb, você terá total controle sobre as finanças do seu projeto audiovisual, garantindo uma gestão eficiente e transparente.
                        </p>
                    </div>
                </div>

                <div className="bg-card transition-colors duration-300 hover:bg-card/50 rounded-xl p-8 flex flex-col items-center justify-center sm:flex-row gap-6 group">
                    <div className="w-20 h-20 rounded-xl flex items-center justify-center">
                        <LinkIcon size={100} className="text-jobb-orange group-hover:scale-110 transition-transform" weight="light" />
                    </div>
                    <div>
                        <h3 className="text-white text-xl font-medium mb-3">Link para o Fornecedor: Preenchimento de Dados e Anexo de Notas Fiscais</h3>
                        <p className="text-[#a3a3a3] leading-relaxed text-[15px]">
                            Novidade no Jobb! Agora, com a função de &quot;Link para o Fornecedor&quot;, você pode enviar um link seguro para que o próprio fornecedor preencha os dados cadastrais e anexe notas fiscais diretamente na plataforma. Essa funcionalidade agiliza o lançamento para o setor financeiro, tornando todo o processo mais eficiente e seguro. Simplifique a comunicação com seus fornecedores e otimize a gestão financeira dos seus projetos audiovisuais.
                        </p>
                    </div>
                </div>

                <div className="bg-card transition-colors duration-300 hover:bg-card/50 rounded-xl p-8 flex flex-col items-center justify-center sm:flex-row gap-6 group">
                    <div className="w-20 h-20 rounded-xl flex items-center justify-center">
                        <FilePdfIcon size={100} className="text-jobb-orange group-hover:scale-110 transition-transform" weight="light" />
                    </div>
                    <div>
                        <h3 className="text-white text-xl font-medium mb-3">Envie Orçamentos em PDF ou através de Link</h3>
                        <p className="text-[#a3a3a3] leading-relaxed text-[15px]">
                            Com o Jobb, você tem flexibilidade para enviar orçamentos para seus clientes de forma personalizada. Escolha entre enviar em PDF ou através de um link com um template pronto. Customizamos seu modelo com a marca, cores e timbrado da sua empresa. Simplifique o processo de envio de orçamentos com o Jobb.
                        </p>
                    </div>
                </div>

                <div className="bg-card transition-colors duration-300 hover:bg-card/50 rounded-xl p-8 flex flex-col items-center justify-center sm:flex-row gap-6 group">
                    <div className="w-20 h-20 rounded-xl flex items-center justify-center">
                        <CoinsIcon size={100} className="text-jobb-orange group-hover:scale-110 transition-transform" weight="light" />
                    </div>
                    <div>
                        <h3 className="text-white text-xl font-medium mb-3">Controle sua Verba de Produção: Gerencie Despesas com Facilidade no Jobb!</h3>
                        <p className="text-[#a3a3a3] leading-relaxed text-[15px]">
                            Com o Jobb, você tem total controle sobre a Verba de Produção. Gerencie as verbas solicitadas pelos produtores para pagamento de despesas em dinheiro durante a produção, como almoço, táxi, Uber, objetos e muito mais. Além disso, contamos com um app específico para celular, facilitando a prestação de contas pelos produtores com o upload de recibos ou notas.
                        </p>
                    </div>
                </div>
            </>
        )
    },
    {
        id: 'ordem-do-dia',
        title: 'Ordem do dia',
        content: (
            <>
                <div className="bg-card transition-colors duration-300 hover:bg-card/50 rounded-xl p-8 flex flex-col items-center justify-center sm:flex-row gap-6 group">
                    <div className="w-20 h-20 rounded-xl flex items-center justify-center">
                        <UserPlusIcon size={100} className="text-jobb-orange group-hover:scale-110 transition-transform" weight="light" />
                    </div>
                    <div>
                        <h3 className="text-white text-xl font-medium mb-3">Importar elenco e equipe técnica direto do orçamento.</h3>
                        <p className="text-[#a3a3a3] leading-relaxed text-[15px]">
                            Esqueça a necessidade de inserir manualmente informações sobre elenco e equipe técnica em cada Ordem do dia ou Call sheet. Com o Jobb 3.0, você pode importar esses dados diretamente do seu orçamento, economizando tempo precioso e evitando erros.
                        </p>
                    </div>
                </div>

                <div className="bg-card transition-colors duration-300 hover:bg-card/50 rounded-xl p-8 flex flex-col items-center justify-center sm:flex-row gap-6 group">
                    <div className="w-20 h-20 rounded-xl flex items-center justify-center">
                        <EnvelopeSimpleIcon size={100} className="text-jobb-orange group-hover:scale-110 transition-transform" weight="light" />
                    </div>
                    <div>
                        <h3 className="text-white text-xl font-medium mb-3">Envio de e-mail e avisos para toda a equipe participante.</h3>
                        <p className="text-[#a3a3a3] leading-relaxed text-[15px]">
                            Facilite a comunicação e o compartilhamento de informações com a equipe. Com o Jobb 3.0, você pode disponibilizar um link de acesso para todos os convidados envolvidos na produção, permitindo que eles visualizem a Ordem do dia e a Call sheet de forma rápida e conveniente.
                        </p>
                    </div>
                </div>

                <div className="bg-card transition-colors duration-300 hover:bg-card/50 rounded-xl p-8 flex flex-col items-center justify-center sm:flex-row gap-6 group">
                    <div className="w-20 h-20 rounded-xl flex items-center justify-center">
                        <CopyIcon size={100} className="text-jobb-orange group-hover:scale-110 transition-transform" weight="light" />
                    </div>
                    <div>
                        <h3 className="text-white text-xl font-medium mb-3">Duplicar Ordem do dia.</h3>
                        <p className="text-[#a3a3a3] leading-relaxed text-[15px]">
                            Elimine a necessidade de recriar Ordem do dia e Call sheets repetidamente. Com apenas um clique, você pode duplicar um documento existente, economizando tempo e garantindo consistência em suas produções.
                        </p>
                    </div>
                </div>

                <div className="bg-card transition-colors duration-300 hover:bg-card/50 rounded-xl p-8 flex flex-col items-center justify-center sm:flex-row gap-6 group">
                    <div className="w-20 h-20 rounded-xl flex items-center justify-center">
                        <MegaphoneIcon size={100} className="text-jobb-orange group-hover:scale-110 transition-transform" weight="light" />
                    </div>
                    <div>
                        <h3 className="text-white text-xl font-medium mb-3">Mantenha sua equipe atualizada e informada.</h3>
                        <p className="text-[#a3a3a3] leading-relaxed text-[15px]">
                            Descrição das cenas, ambientes e locações, com o Jobb 3.0, você pode enviar e-mails e avisos diretamente para toda a equipe participante, garantindo que todos estejam cientes das últimas atualizações, alterações de horário ou requisitos especiais.
                        </p>
                    </div>
                </div>

                <div className="bg-card transition-colors duration-300 hover:bg-card/50 rounded-xl p-8 flex flex-col items-center justify-center sm:flex-row gap-6 group">
                    <div className="w-20 h-20 rounded-xl flex items-center justify-center">
                        <CloudSunIcon size={100} className="text-jobb-orange group-hover:scale-110 transition-transform" weight="light" />
                    </div>
                    <div>
                        <h3 className="text-white text-xl font-medium mb-3">Previsão do tempo e cadastro de locações.</h3>
                        <p className="text-[#a3a3a3] leading-relaxed text-[15px]">
                            Planeje sua produção com confiança. Com a previsão do tempo integrada ao Jobb 3.0, você poderá antecipar possíveis problemas climáticos e ajustar sua programação de acordo. Além disso, você pode cadastrar todas as locações da produção, mantendo todas as informações essenciais organizadas e acessíveis.
                        </p>
                    </div>
                </div>

                <div className="bg-card transition-colors duration-300 hover:bg-card/50 rounded-xl p-8 flex flex-col items-center justify-center sm:flex-row gap-6 group">
                    <div className="w-20 h-20 rounded-xl flex items-center justify-center">
                        <PrinterIcon size={100} className="text-jobb-orange group-hover:scale-110 transition-transform" weight="light" />
                    </div>
                    <div>
                        <h3 className="text-white text-xl font-medium mb-3">Impressão em PDF.</h3>
                        <p className="text-[#a3a3a3] leading-relaxed text-[15px]">
                            Mantenha seus documentos sempre à mão. Com o Jobb 3.0, você pode imprimir suas Ordens do dia e Call sheets em formato PDF, tornando-as facilmente disponíveis para a equipe, mesmo quando estão offline.
                        </p>
                    </div>
                </div>
            </>
        )
    },
    {
        id: 'equipamentos',
        title: 'Equipamentos',
        content: (
            <>
                <div className="bg-card transition-colors duration-300 hover:bg-card/50 rounded-xl p-8 flex flex-col items-center justify-center sm:flex-row gap-6 group">
                    <div className="w-20 h-20 rounded-xl flex items-center justify-center">
                        <BarcodeIcon size={100} className="text-jobb-orange group-hover:scale-110 transition-transform" weight="light" />
                    </div>
                    <div>
                        <h3 className="text-white text-xl font-medium mb-3">Cadastre e Controle seu Inventário</h3>
                        <p className="text-[#a3a3a3] leading-relaxed text-[15px]">
                            Controle do seu inventário através do Cadastro de Equipamentos. Registre todos os seus equipamentos para uma gestão eficiente. Além disso, caso você já tenha um código de barras próprio, pode utilizá-lo para cadastrar seus equipamentos de forma rápida e prática.
                        </p>
                    </div>
                </div>

                <div className="bg-card transition-colors duration-300 hover:bg-card/50 rounded-xl p-8 flex flex-col items-center justify-center sm:flex-row gap-6 group">
                    <div className="w-20 h-20 rounded-xl flex items-center justify-center">
                        <CheckSquareOffsetIcon size={100} className="text-jobb-orange group-hover:scale-110 transition-transform" weight="light" />
                    </div>
                    <div>
                        <h3 className="text-white text-xl font-medium mb-3">Controle de Saída e Entrada com Checklist</h3>
                        <p className="text-[#a3a3a3] leading-relaxed text-[15px]">
                            Controle sobre a saída e entrada de equipamentos. Facilite a gestão do seu inventário adicionando equipamentos na saída e gerando uma lista personalizada para check-list. Na entrada, verifique e registre todos os equipamentos devolvidos, garantindo uma gestão organizada e precisa.
                        </p>
                    </div>
                </div>
            </>
        )
    }
];

export function TabsSection() {
    const [activeTab, setActiveTab] = useState(tabsData[0].id);

    return (
        <section className="bg-secondary section-padding">
            <div className="container-custom max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row gap-8 lg:gap-16">

                    {/* Sidebar Menu */}
                    <motion.div 
                        initial={{ opacity: 0, x: -20, y: 20 }}
                        whileInView={{ opacity: 1, x: 0, y: 0 }}
                        viewport={{ once: false, margin: "-50px" }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        className="w-full md:w-1/4 border-r border-white/5"
                    >
                        <ul className="flex flex-col gap-1 border-r border-white/5 md:border-transparent">
                            {tabsData.map((tab) => {
                                const isActive = activeTab === tab.id;
                                return (
                                    <li
                                        key={tab.id}
                                        onClick={() => setActiveTab(tab.id)}
                                        className={`group flex items-center justify-end gap-3 font-medium py-4 px-4 cursor-pointer transition-colors hover:bg-white/5 border-r-2 ${isActive
                                            ? 'bg-white/5 text-jobb-orange border-jobb-orange'
                                            : 'text-[#a3a3a3] hover:text-white border-transparent'
                                            }`}
                                    >
                                        <span className="text-right">{tab.title}</span>
                                    </li>
                                );
                            })}
                        </ul>
                    </motion.div>

                    {/* Content Area */}
                    <motion.div 
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false, margin: "-50px" }}
                        transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
                        className="w-full md:w-3/4 flex flex-col gap-6"
                    >
                        {tabsData.find(t => t.id === activeTab)?.content}
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
