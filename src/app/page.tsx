"use client";

import { useState } from "react";
import {
  Sparkles,
  Heart,
  TrendingDown,
  CheckCircle,
  Star,
  ArrowRight,
  Shield,
  Users,
  Award,
  Zap,
  Scale,
  Target,
  Clock,
} from "lucide-react";

export default function LandingPage() {
  const [showQuiz, setShowQuiz] = useState(false);
  const [quizStep, setQuizStep] = useState(0);
  const [quizAnswers, setQuizAnswers] = useState<{ [key: number]: string }>({});

  const quizQuestions = [
    {
      question: "Qual é seu principal objetivo?",
      options: [
        "Perder peso de forma saudável",
        "Acompanhar tratamento com Ozempic",
        "Melhorar hábitos alimentares",
        "Monitorar progresso diário",
      ],
    },
    {
      question: "Quanto peso você deseja perder?",
      options: ["Até 5kg", "5-10kg", "10-20kg", "Mais de 20kg"],
    },
    {
      question: "Você já usa ou pretende usar Ozempic?",
      options: [
        "Sim, já uso",
        "Pretendo começar",
        "Não, apenas dieta",
        "Ainda estou decidindo",
      ],
    },
    {
      question: "Qual sua maior dificuldade?",
      options: [
        "Controlar a alimentação",
        "Manter a motivação",
        "Acompanhar o progresso",
        "Organizar a rotina",
      ],
    },
  ];

  const handleQuizAnswer = (answer: string) => {
    setQuizAnswers({ ...quizAnswers, [quizStep]: answer });
    
    if (quizStep < quizQuestions.length - 1) {
      setQuizStep(quizStep + 1);
    } else {
      // Quiz finalizado - redirecionar para checkout ou mostrar resultado
      alert("Quiz concluído! Redirecionando para o checkout...");
      // Aqui você pode redirecionar para uma página de checkout real
      // window.location.href = "/checkout";
    }
  };

  const handleStartQuiz = () => {
    setShowQuiz(true);
    setQuizStep(0);
    setQuizAnswers({});
  };

  if (showQuiz) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100 flex items-center justify-center p-4">
        <div className="max-w-2xl w-full">
          {/* Progress Bar */}
          <div className="mb-8">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm font-medium text-gray-600">
                Pergunta {quizStep + 1} de {quizQuestions.length}
              </span>
              <span className="text-sm font-medium text-blue-600">
                {Math.round(((quizStep + 1) / quizQuestions.length) * 100)}%
              </span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div
                className="bg-gradient-to-r from-blue-500 to-blue-600 h-2 rounded-full transition-all duration-500"
                style={{ width: `${((quizStep + 1) / quizQuestions.length) * 100}%` }}
              />
            </div>
          </div>

          {/* Quiz Card */}
          <div className="bg-white rounded-3xl shadow-2xl p-8 sm:p-12">
            <div className="mb-8">
              <div className="bg-gradient-to-br from-blue-500 to-blue-600 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 mx-auto">
                <Sparkles className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 text-center mb-4">
                {quizQuestions[quizStep].question}
              </h2>
              <p className="text-gray-600 text-center">
                Selecione a opção que melhor descreve você
              </p>
            </div>

            <div className="space-y-3">
              {quizQuestions[quizStep].options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleQuizAnswer(option)}
                  className="w-full text-left p-4 rounded-xl border-2 border-gray-200 hover:border-blue-500 hover:bg-blue-50 transition-all duration-300 group"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-medium text-gray-900 group-hover:text-blue-700">
                      {option}
                    </span>
                    <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-blue-600 transform group-hover:translate-x-1 transition-all" />
                  </div>
                </button>
              ))}
            </div>

            {quizStep > 0 && (
              <button
                onClick={() => setQuizStep(quizStep - 1)}
                className="mt-6 text-gray-600 hover:text-gray-900 font-medium"
              >
                ← Voltar
              </button>
            )}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section - MELHORADO */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDE2YzAtMi4yMSAxLjc5LTQgNC00czQgMS43OSA0IDQtMS43OSA0LTQgNC00LTEuNzktNC00em0wIDI0YzAtMi4yMSAxLjc5LTQgNC00czQgMS43OSA0IDQtMS43OSA0LTQgNC00LTEuNzktNC00ek0xMiAxNmMwLTIuMjEgMS43OS00IDQtNHM0IDEuNzkgNCA0LTEuNzkgNC00IDQtNC0xLjc5LTQtNHptMCAyNGMwLTIuMjEgMS43OS00IDQtNHM0IDEuNzkgNCA0LTEuNzkgNC00IDQtNC0xLjc5LTQtNHoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-30" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 lg:py-32 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Copy */}
            <div className="text-center lg:text-left">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium mb-6 border border-white/30">
                <Sparkles className="w-4 h-4" />
                <span>+10.000 vidas transformadas</span>
              </div>

              {/* Headline Principal */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight">
                Cansado de Dietas que
                <span className="block text-orange-300">Não Funcionam?</span>
              </h1>

              {/* Subheadline - Dores e Soluções */}
              <div className="space-y-4 mb-8">
                <p className="text-xl sm:text-2xl text-blue-50 font-medium">
                  Pare de sofrer com:
                </p>
                <ul className="space-y-3 text-lg text-blue-100">
                  <li className="flex items-start gap-3">
                    <div className="bg-red-500 rounded-full p-1 mt-1 flex-shrink-0">
                      <div className="w-2 h-2 bg-white rounded-full" />
                    </div>
                    <span><strong className="text-white">Efeito sanfona</strong> que faz você recuperar tudo</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="bg-red-500 rounded-full p-1 mt-1 flex-shrink-0">
                      <div className="w-2 h-2 bg-white rounded-full" />
                    </div>
                    <span><strong className="text-white">Falta de controle</strong> sobre o que você come</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="bg-red-500 rounded-full p-1 mt-1 flex-shrink-0">
                      <div className="w-2 h-2 bg-white rounded-full" />
                    </div>
                    <span><strong className="text-white">Desmotivação</strong> por não ver resultados</span>
                  </li>
                </ul>

                <div className="pt-4">
                  <p className="text-xl sm:text-2xl text-white font-bold mb-3">
                    ✨ Agora você pode:
                  </p>
                  <ul className="space-y-3 text-lg text-blue-50">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-6 h-6 text-orange-300 flex-shrink-0 mt-0.5" />
                      <span>Perder peso de forma <strong className="text-white">saudável e sustentável</strong></span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-6 h-6 text-orange-300 flex-shrink-0 mt-0.5" />
                      <span>Acompanhar cada detalhe do seu <strong className="text-white">progresso real</strong></span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-6 h-6 text-orange-300 flex-shrink-0 mt-0.5" />
                      <span>Manter a <strong className="text-white">motivação todos os dias</strong></span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* CTA Principal */}
              <div className="flex flex-col sm:flex-row gap-4 mb-8 justify-center lg:justify-start">
                <button
                  onClick={handleStartQuiz}
                  className="group bg-orange-500 hover:bg-orange-600 text-white px-8 py-5 rounded-2xl font-bold text-lg shadow-2xl hover:shadow-orange-500/50 transition-all duration-300 flex items-center justify-center gap-3 hover:scale-105"
                >
                  <span>Descobrir Meu Plano Ideal</span>
                  <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                </button>
                <button className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white px-8 py-5 rounded-2xl font-bold text-lg border-2 border-white/30 transition-all duration-300">
                  Ver Como Funciona
                </button>
              </div>

              {/* Social Proof */}
              <div className="flex flex-wrap justify-center lg:justify-start items-center gap-6 text-sm text-blue-100">
                <div className="flex items-center gap-2">
                  <div className="flex -space-x-2">
                    {[1, 2, 3, 4].map((i) => (
                      <div
                        key={i}
                        className="w-10 h-10 rounded-full bg-gradient-to-br from-orange-400 to-orange-600 border-2 border-white flex items-center justify-center text-white font-bold"
                      >
                        {i === 1 && "M"}
                        {i === 2 && "J"}
                        {i === 3 && "A"}
                        {i === 4 && "C"}
                      </div>
                    ))}
                  </div>
                  <span className="font-medium text-white">+10k usuários felizes</span>
                </div>
                <div className="flex items-center gap-1">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                  <span className="ml-1 font-medium text-white">4.9/5 (2.847 avaliações)</span>
                </div>
              </div>
            </div>

            {/* Right Column - Antes e Depois */}
            <div className="relative">
              {/* Card Principal de Transformação */}
              <div className="bg-white rounded-3xl shadow-2xl p-8 relative z-10">
                <div className="text-center mb-6">
                  <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-blue-600 text-white px-4 py-2 rounded-full text-sm font-bold mb-4">
                    <TrendingDown className="w-4 h-4" />
                    <span>Transformação Real</span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    Resultados Comprovados
                  </h3>
                  <p className="text-gray-600">Veja a transformação de Maria em 4 meses</p>
                </div>

                {/* Antes e Depois Visual */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  {/* Antes */}
                  <div className="relative">
                    <div className="aspect-[3/4] bg-gradient-to-br from-gray-200 to-gray-300 rounded-2xl overflow-hidden relative">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-center">
                          <Scale className="w-16 h-16 text-gray-400 mx-auto mb-2" />
                          <p className="text-gray-500 font-medium">85kg</p>
                        </div>
                      </div>
                      <div className="absolute top-3 left-3 bg-red-500 text-white px-3 py-1 rounded-full text-xs font-bold">
                        ANTES
                      </div>
                    </div>
                  </div>

                  {/* Depois */}
                  <div className="relative">
                    <div className="aspect-[3/4] bg-gradient-to-br from-blue-200 to-blue-300 rounded-2xl overflow-hidden relative border-4 border-blue-500">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-center">
                          <Scale className="w-16 h-16 text-blue-600 mx-auto mb-2" />
                          <p className="text-blue-700 font-bold text-lg">70kg</p>
                        </div>
                      </div>
                      <div className="absolute top-3 left-3 bg-blue-500 text-white px-3 py-1 rounded-full text-xs font-bold">
                        DEPOIS
                      </div>
                      <div className="absolute top-3 right-3 bg-orange-500 text-white p-2 rounded-full">
                        <Sparkles className="w-4 h-4" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Métricas de Resultado */}
                <div className="grid grid-cols-3 gap-3 mb-6">
                  <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-4 text-center">
                    <div className="text-3xl font-bold text-blue-600 mb-1">-15kg</div>
                    <div className="text-xs text-gray-600 font-medium">Peso Perdido</div>
                  </div>
                  <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl p-4 text-center">
                    <div className="text-3xl font-bold text-orange-600 mb-1">4</div>
                    <div className="text-xs text-gray-600 font-medium">Meses</div>
                  </div>
                  <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-4 text-center">
                    <div className="text-3xl font-bold text-purple-600 mb-1">100%</div>
                    <div className="text-xs text-gray-600 font-medium">Satisfeita</div>
                  </div>
                </div>

                {/* Depoimento */}
                <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-6 border-l-4 border-blue-500">
                  <div className="flex items-center gap-1 mb-3">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-gray-700 italic mb-3">
                    "Finalmente consegui emagrecer de forma saudável! O app me ajudou a controlar tudo e ver meu progresso todos os dias. Mudou minha vida!"
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center text-white font-bold">
                      M
                    </div>
                    <div>
                      <p className="font-bold text-gray-900">Maria Silva</p>
                      <p className="text-sm text-gray-600">Usuária VidaLeve</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Elementos Decorativos */}
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-orange-400 rounded-full opacity-20 blur-3xl" />
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-blue-400 rounded-full opacity-20 blur-3xl" />
            </div>
          </div>
        </div>

        {/* Wave Divider */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
            <path d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="white"/>
          </svg>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { icon: Users, value: "+10.000", label: "Usuários Ativos" },
              { icon: TrendingDown, value: "15kg", label: "Média de Perda" },
              { icon: Star, value: "4.9/5", label: "Avaliação" },
              { icon: Award, value: "98%", label: "Satisfação" },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="bg-gradient-to-br from-blue-100 to-blue-200 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-8 h-8 text-blue-600" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-1">{stat.value}</div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 sm:py-24 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Tudo que você precisa em um só app
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Funcionalidades completas para acompanhar cada passo da sua transformação
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: TrendingDown,
                title: "Monitoramento de Peso",
                description: "Acompanhe sua evolução com gráficos detalhados e metas personalizadas",
                color: "from-blue-500 to-blue-600",
              },
              {
                icon: Heart,
                title: "Registro de Refeições",
                description: "Controle calorias, proteínas e fibras de forma simples e rápida",
                color: "from-orange-500 to-orange-600",
              },
              {
                icon: Zap,
                title: "Acompanhamento Ozempic",
                description: "Registre aplicações e monitore efeitos do tratamento",
                color: "from-purple-500 to-purple-600",
              },
              {
                icon: Target,
                title: "Metas Personalizadas",
                description: "Defina objetivos realistas e acompanhe seu progresso diário",
                color: "from-blue-500 to-blue-600",
              },
              {
                icon: Shield,
                title: "Dados Seguros",
                description: "Suas informações protegidas e armazenadas localmente",
                color: "from-green-500 to-green-600",
              },
              {
                icon: Award,
                title: "Dicas Personalizadas",
                description: "Receba orientações baseadas no seu progresso e objetivos",
                color: "from-yellow-500 to-yellow-600",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className={`bg-gradient-to-br ${feature.color} w-14 h-14 rounded-xl flex items-center justify-center mb-6`}>
                  <feature.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Histórias de Sucesso Reais
            </h2>
            <p className="text-lg text-gray-600">
              Veja como outras pessoas transformaram suas vidas
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Maria Silva",
                result: "Perdeu 15kg em 4 meses",
                before: "85kg",
                after: "70kg",
                text: "O app me ajudou a manter o foco e acompanhar cada detalhe. Nunca foi tão fácil!",
                rating: 5,
              },
              {
                name: "João Santos",
                result: "Perdeu 22kg em 6 meses",
                before: "102kg",
                after: "80kg",
                text: "Combinando com Ozempic, consegui resultados incríveis. Recomendo demais!",
                rating: 5,
              },
              {
                name: "Ana Costa",
                result: "Perdeu 10kg em 3 meses",
                before: "75kg",
                after: "65kg",
                text: "Interface simples e funcional. Me mantém motivada todos os dias!",
                rating: 5,
              },
            ].map((testimonial, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100"
              >
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                
                {/* Antes e Depois Compacto */}
                <div className="flex items-center justify-center gap-4 mb-6 bg-white rounded-xl p-4 border-2 border-blue-200">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-gray-400 mb-1">{testimonial.before}</div>
                    <div className="text-xs text-gray-500 font-medium">ANTES</div>
                  </div>
                  <ArrowRight className="w-6 h-6 text-blue-500" />
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-600 mb-1">{testimonial.after}</div>
                    <div className="text-xs text-blue-600 font-medium">DEPOIS</div>
                  </div>
                </div>

                <p className="text-gray-700 mb-6 italic">"{testimonial.text}"</p>
                <div className="border-t border-gray-100 pt-4">
                  <p className="font-bold text-gray-900">{testimonial.name}</p>
                  <p className="text-sm text-blue-600 font-medium">{testimonial.result}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 sm:py-24 bg-gradient-to-br from-blue-50 to-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Invista na Sua Transformação
            </h2>
            <p className="text-lg text-gray-600">
              Escolha o plano ideal para sua jornada de emagrecimento
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                name: "Mensal",
                price: "R$ 29,90",
                period: "/mês",
                features: [
                  "Todos os recursos incluídos",
                  "Monitoramento ilimitado",
                  "Dicas personalizadas",
                  "Suporte por email",
                ],
                popular: false,
              },
              {
                name: "Trimestral",
                price: "R$ 69,90",
                period: "/3 meses",
                features: [
                  "Todos os recursos incluídos",
                  "Monitoramento ilimitado",
                  "Dicas personalizadas",
                  "Suporte prioritário",
                  "Economize 22%",
                ],
                popular: true,
              },
              {
                name: "Anual",
                price: "R$ 199,90",
                period: "/ano",
                features: [
                  "Todos os recursos incluídos",
                  "Monitoramento ilimitado",
                  "Dicas personalizadas",
                  "Suporte VIP 24/7",
                  "Economize 44%",
                ],
                popular: false,
              },
            ].map((plan, index) => (
              <div
                key={index}
                className={`relative rounded-3xl p-8 ${
                  plan.popular
                    ? "bg-gradient-to-br from-blue-500 to-blue-600 text-white shadow-2xl scale-105"
                    : "bg-white border-2 border-gray-200"
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-orange-500 text-white px-4 py-1 rounded-full text-sm font-bold">
                      Mais Popular
                    </span>
                  </div>
                )}

                <div className="text-center mb-8">
                  <h3 className={`text-2xl font-bold mb-4 ${plan.popular ? "text-white" : "text-gray-900"}`}>
                    {plan.name}
                  </h3>
                  <div className="flex items-baseline justify-center gap-1">
                    <span className={`text-4xl font-bold ${plan.popular ? "text-white" : "text-gray-900"}`}>
                      {plan.price}
                    </span>
                    <span className={`text-lg ${plan.popular ? "text-blue-100" : "text-gray-600"}`}>
                      {plan.period}
                    </span>
                  </div>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <CheckCircle className={`w-5 h-5 ${plan.popular ? "text-white" : "text-blue-600"}`} />
                      <span className={plan.popular ? "text-blue-50" : "text-gray-700"}>{feature}</span>
                    </li>
                  ))}
                </ul>

                <button
                  onClick={handleStartQuiz}
                  className={`w-full py-4 rounded-xl font-bold text-lg transition-all duration-300 ${
                    plan.popular
                      ? "bg-white text-blue-600 hover:shadow-2xl hover:scale-105"
                      : "bg-gradient-to-r from-blue-500 to-blue-600 text-white hover:shadow-xl"
                  }`}
                >
                  Começar Agora
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 sm:py-24 bg-gradient-to-br from-blue-600 to-blue-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-5xl font-bold text-white mb-6">
            Sua Transformação Começa Hoje
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Junte-se a milhares de pessoas que já estão alcançando seus objetivos de emagrecimento
          </p>
          <button
            onClick={handleStartQuiz}
            className="group bg-orange-500 hover:bg-orange-600 text-white px-10 py-5 rounded-2xl font-bold text-xl shadow-2xl hover:shadow-orange-500/50 transition-all duration-300 inline-flex items-center gap-3 hover:scale-105"
          >
            Fazer Quiz Gratuito Agora
            <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
          </button>
          <p className="text-blue-100 mt-6 text-sm">
            ✓ Sem compromisso • ✓ Cancele quando quiser • ✓ Garantia de 7 dias
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="bg-gradient-to-br from-blue-500 to-blue-600 p-2 rounded-lg">
                  <TrendingDown className="w-5 h-5 text-white" />
                </div>
                <span className="text-white font-bold text-lg">VidaLeve</span>
              </div>
              <p className="text-sm">
                Transformando vidas através de hábitos saudáveis e tecnologia.
              </p>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4">Produto</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">Funcionalidades</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Preços</a></li>
                <li><a href="#" className="hover:text-white transition-colors">FAQ</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4">Empresa</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">Sobre</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contato</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4">Legal</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">Privacidade</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Termos</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Cookies</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-sm">
            <p>© 2024 VidaLeve. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
