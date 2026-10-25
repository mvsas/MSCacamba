
import { useState } from 'react'
import logo from './assets/logoms.png'
import caminhao from './assets/caminhao.jfif'


const TELEFONE = '5512996627483'

const endereco =
  'R. dos Periquitos, 515 - Vila Tatetuba, São José dos Campos - SP, 12220-130'

const whatsapp = (mensagem) =>
  `https://wa.me/${TELEFONE}?text=${encodeURIComponent(mensagem)}`

const servicos = [
  {
    numero: '01',
    titulo: 'Remoção de entulho',
    descricao:
      'Conte com a MS Caçambas para ajudar a manter sua obra ou reforma organizada.',
    icone: '▤',
  },
  {
    numero: '02',
    titulo: 'Limpeza de casas e garagens',
    descricao:
      'Mais praticidade na retirada de resíduos acumulados em ambientes residenciais.',
    icone: '⌂',
  },
  {
    numero: '03',
    titulo: 'Coleta de resíduos',
    descricao:
      'Entre em contato para consultar as opções de coleta disponíveis para sua necessidade.',
    icone: '♻',
  },
]

function App() {
  const mensagemInicial =
    'Olá! Gostaria de solicitar um orçamento com a MS Caçambas.'

  return (
    <div className="min-h-screen bg-[#EDEFEE] text-[#33363A]">
      {/* Cabeçalho */}

      <header className="sticky top-0 z-50 w-full max-w-full border-b border-white/10 bg-[#33363A] text-white shadow-lg">
        <div className="mx-auto flex w-full max-w-7xl min-w-0 items-center justify-between gap-2 px-3 py-3 sm:gap-4 sm:px-5 sm:py-4 lg:px-8">

          <a
            href="#inicio"
            className="flex min-w-0 shrink items-center gap-2 sm:gap-3"
          >
            <img
              src={logo}
              alt="Logo MS Caçambas"
              className="h-10 w-10 shrink-0 object-contain sm:h-12 sm:w-12"
            />

            <div className="min-w-0">
              <p className="whitespace-nowrap text-base font-black tracking-tight sm:text-xl">
                MS <span className="text-[#D7A007]">CAÇAMBAS</span>
              </p>

              <p className="text-[10px] text-white/60 sm:text-xs">
                Remoção e coleta de resíduos
              </p>
            </div>
          </a>

          <nav className="hidden items-center gap-7 text-sm font-semibold md:flex">
            <a href="#inicio" className="transition hover:text-[#D7A007]">
              Início
            </a>
            <a href="#servicos" className="transition hover:text-[#D7A007]">
              Serviços
            </a>
            <a href="#sobre" className="transition hover:text-[#D7A007]">
              Sobre
            </a>
            <a href="#contato" className="transition hover:text-[#D7A007]">
              Contato
            </a>
          </nav>

          <a
            href={whatsapp(mensagemInicial)}
            target="_blank"
            rel="noreferrer"
            className="shrink-0 rounded-lg bg-[#D7A007] px-2.5 py-2.5 text-xs font-extrabold text-[#33363A] transition hover:bg-yellow-300 sm:px-5 sm:py-3 sm:text-sm"
          >
            <span className="hidden sm:inline">Solicitar orçamento</span>
            <span className="sm:hidden">Orçamento ↗</span>
          </a>

        </div>
      </header>


      <main>
        {/* Destaque principal */}
        <section id="inicio" className="relative overflow-hidden bg-[#33363A] text-white">
          <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-[#D7A007]/10 blur-3xl" />
          <div className="absolute -bottom-40 left-1/4 h-80 w-80 rounded-full bg-black/20 blur-3xl" />

          <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-5 py-20 md:grid-cols-2 md:py-28 lg:px-8">
            <div>
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#D7A007]/40 bg-[#D7A007]/10 px-4 py-2 text-sm font-semibold text-[#F3C64E]">
                <span className="h-2 w-2 rounded-full bg-[#D7A007]" />
                São José dos Campos e região
              </div>

              <h1 className="max-w-2xl text-4xl font-black leading-tight tracking-tight sm:text-5xl lg:text-6xl">
                Vai reformar ou limpar?
                <span className="mt-2 block text-[#D7A007]">
                  Deixe o entulho com a gente.
                </span>
              </h1>

              <p className="mt-6 max-w-xl text-base leading-7 text-white/75 sm:text-lg">
                A MS Caçambas oferece serviços de remoção de entulho,
                limpeza de casas e garagens e coleta de resíduos.
                Entre em contato e consulte as opções para seu serviço.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href={whatsapp(mensagemInicial)}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-3 rounded-lg bg-[#D7A007] px-7 py-4 font-extrabold text-[#33363A] transition hover:-translate-y-0.5 hover:bg-yellow-300"
                >
                  Pedir orçamento <span>↗</span>
                </a>

                <a
                  href="#servicos"
                  className="inline-flex items-center justify-center rounded-lg border border-white/25 px-7 py-4 font-bold text-white transition hover:bg-white/10"
                >
                  Conhecer serviços
                </a>
              </div>

              <div className="mt-9 flex flex-wrap gap-x-6 gap-y-3 text-sm text-white/70">
                <span>✓ Atendimento em São José dos Campos</span>
                <span>✓ Contato direto</span>
              </div>
            </div>

            {/* Ilustração construída com CSS */}
            <div className="relative mx-auto w-full max-w-lg">
              <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4 shadow-2xl sm:p-6">
                <div className="mb-5 flex items-center justify-between">
                  <div>
                    <p className="text-sm font-bold text-[#D7A007]">
                      MS CAÇAMBAS
                    </p>
                    <p className="mt-1 text-xs text-white/60">
                      Soluções para seu entulho
                    </p>
                  </div>
                  <span className="rounded-md bg-[#D7A007] px-3 py-2 text-xs font-black text-[#33363A]">
                    SJC
                  </span>
                </div>

                <div className="relative flex h-64 items-end justify-center overflow-hidden rounded-xl bg-[#EDEFEE]">


                  {/* Caçamba ilustrativa */}

                  <img
                    src={caminhao}
                    alt="Caminhão da MS Caçambas"
                    className="w-full h-full object-cover"
                  />


                </div>

                <div className="mt-4 grid grid-cols-3 gap-2 text-center">
                  <div className="rounded-lg bg-white/5 p-3">
                    <p className="text-xl text-[#D7A007]">01</p>
                    <p className="mt-1 text-[11px] text-white/70">Entulho</p>
                  </div>
                  <div className="rounded-lg bg-white/5 p-3">
                    <p className="text-xl text-[#D7A007]">02</p>
                    <p className="mt-1 text-[11px] text-white/70">Limpeza</p>
                  </div>
                  <div className="rounded-lg bg-white/5 p-3">
                    <p className="text-xl text-[#D7A007]">03</p>
                    <p className="mt-1 text-[11px] text-white/70">Coleta</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Serviços */}
        <section id="servicos" className="px-5 py-20 lg:px-8 lg:py-24">
          <div className="mx-auto max-w-7xl">
            <div className="max-w-2xl">
              <p className="text-sm font-extrabold uppercase tracking-[0.18em] text-[#987000]">
                Nossos serviços
              </p>
              <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">
                Mais praticidade para sua obra e sua casa.
              </h2>
              <p className="mt-4 leading-7 text-[#33363A]/75">
                Consulte a equipe da MS Caçambas para encontrar a opção
                adequada à sua necessidade.
              </p>
            </div>

            <div className="mt-10 grid gap-5 md:grid-cols-3">
              {servicos.map((servico) => (
                <article
                  key={servico.numero}
                  className="group rounded-xl border border-[#33363A]/10 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-[#D7A007] hover:shadow-xl"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-[#D7A007]/15 text-3xl font-bold text-[#987000] transition group-hover:bg-[#D7A007] group-hover:text-[#33363A]">
                      {servico.icone}
                    </div>
                    <span className="text-sm font-black text-[#33363A]/30">
                      {servico.numero}
                    </span>
                  </div>

                  <h3 className="mt-6 text-xl font-extrabold">
                    {servico.titulo}
                  </h3>

                  <p className="mt-3 min-h-20 text-sm leading-6 text-[#33363A]/70">
                    {servico.descricao}
                  </p>

                  <a
                    href={whatsapp(
                      `Olá! Gostaria de informações sobre: ${servico.titulo}.`,
                    )}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-5 inline-flex items-center gap-2 font-extrabold text-[#8A6500] hover:text-[#33363A]"
                  >
                    Consultar serviço <span>↗</span>
                  </a>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Sobre */}
        <section id="sobre" className="bg-white px-5 py-20 lg:px-8">
          <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-2 md:items-center">
            <div>
              <div className="inline-block rounded-lg bg-[#D7A007]/15 px-4 py-2 text-sm font-extrabold text-[#806000]">
                MS CAÇAMBAS
              </div>
              <h2 className="mt-5 text-3xl font-black leading-tight sm:text-4xl">
                Seu espaço mais organizado começa com uma conversa.
              </h2>
            </div>

            <div>
              <p className="leading-7 text-[#33363A]/75">
                Precisa retirar entulho, limpar uma garagem ou consultar
                uma coleta de resíduos? Entre em contato com a MS Caçambas
                para conversar sobre o serviço, a disponibilidade e as
                condições de atendimento.
              </p>

              <a
                href={whatsapp('Olá! Gostaria de consultar os serviços da MS Caçambas.')}
                target="_blank"
                rel="noreferrer"
                className="mt-6 inline-flex rounded-lg bg-[#33363A] px-6 py-4 font-bold text-white transition hover:bg-[#D7A007] hover:text-[#33363A]"
              >
                Falar com a equipe ↗
              </a>
            </div>
          </div>
        </section>

        {/* Contato */}
        <section id="contato" className="bg-[#D7A007] px-5 py-16 lg:px-8 lg:py-20">
          <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-2 md:items-center">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.18em] text-[#33363A]/70">
                Entre em contato
              </p>
              <h2 className="mt-3 text-3xl font-black leading-tight sm:text-4xl">
                Vamos conversar sobre o seu serviço?
              </h2>
              <p className="mt-4 max-w-xl leading-7 text-[#33363A]/80">
                Solicite informações e consulte as condições de atendimento
                diretamente com a MS Caçambas.
              </p>

              <a
                href={whatsapp(mensagemInicial)}
                target="_blank"
                rel="noreferrer"
                className="mt-7 inline-flex rounded-lg bg-[#33363A] px-7 py-4 font-extrabold text-white transition hover:bg-black"
              >
                Solicitar orçamento pelo WhatsApp ↗
              </a>
            </div>

            <div className="rounded-xl bg-[#33363A] p-6 text-white sm:p-8">
              <h3 className="text-xl font-extrabold">Informações da empresa</h3>

              <div className="mt-6 space-y-5">
                <div>
                  <p className="text-sm font-bold text-[#D7A007]">Telefone</p>
                  <a
                    href="tel:+551239060787"
                    className="mt-1 inline-block text-lg font-semibold hover:text-[#D7A007]"
                  >
                    (12) 3906-0787
                  </a>
                </div>

                <div>
                  <p className="text-sm font-bold text-[#D7A007]">Endereço</p>
                  <p className="mt-1 leading-6 text-white/80">{endereco}</p>
                  <a
                    href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(endereco)}`}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-2 inline-block text-sm font-bold text-[#D7A007] hover:underline"
                  >
                    Ver no Google Maps ↗
                  </a>
                </div>

                <div>
                  <p className="text-sm font-bold text-[#D7A007]">
                    Horário de atendimento
                  </p>
                  <p className="mt-2 text-sm leading-6 text-white/80">
                    Segunda a sexta: 08h às 17h
                    <br />
                    Sábado: 08h às 12h
                    <br />
                    Domingo: fechado
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Rodapé */}
      <footer className="bg-[#25272A] px-5 py-7 text-white/70 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 text-sm sm:flex-row sm:items-center sm:justify-between">
          <p>
            <span className="font-black text-white">MS CAÇAMBAS</span>
            {' '}· São José dos Campos - SP
          </p>
          <a href="#inicio" className="font-bold text-[#D7A007] hover:underline">
            Voltar ao topo ↑
          </a>
        </div>
      </footer>
    </div>
  )
}

export default App

