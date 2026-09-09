import React from "react";
import { FlaskConical, GraduationCap, ShieldCheck, Rocket, Dna, BookOpen, Mail, Phone, MapPin } from "lucide-react";

export default function AfriCeneFinance() {
  return (
    <div className="min-h-screen bg-[#EFEFEA] text-[#12181F] font-sans">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,300;0,9..144,400;0,9..144,500;1,9..144,400&family=Inter:wght@300;400;500;600&family=IBM+Plex+Mono:wght@400;500&display=swap');
        .font-display { font-family: 'Fraunces', serif; }
        .font-mono { font-family: 'IBM Plex Mono', monospace; }
      `}</style>

      {/* NAV */}
      <header className="sticky top-0 z-50 bg-[#EFEFEA]/90 backdrop-blur-md border-b border-[#D9D6CC]">
        <div className="max-w-6xl mx-auto px-6 py-5 flex items-center justify-between">
          <div>
            <p className="font-display text-xl tracking-tight">AfriCene</p>
            <p className="font-mono text-[10px] tracking-[0.25em] text-[#5F6A72] -mt-0.5">FINANCE</p>
          </div>
          <nav className="hidden md:flex gap-10 text-sm text-[#3A4148]">
            <a href="#vision" className="hover:text-[#16273D] transition">Vision</a>
            <a href="#focus" className="hover:text-[#16273D] transition">Focus</a>
            <a href="#journey" className="hover:text-[#16273D] transition">Journey</a>
            <a href="#ecosystem" className="hover:text-[#16273D] transition">Ecosystem</a>
            <a href="#contact" className="hover:text-[#16273D] transition">Contact</a>
          </nav>
        </div>
      </header>

      {/* HERO */}
      <section className="max-w-6xl mx-auto px-6 pt-20 pb-24 grid lg:grid-cols-[1.4fr,0.6fr] gap-16 items-center">
        <div>
          <p className="font-mono text-[11px] tracking-[0.25em] text-[#3F6B5E] mb-6">
            IN DEVELOPMENT — PRETORIA, SOUTH AFRICA
          </p>
          <h1 className="font-display font-light text-5xl md:text-6xl leading-[1.08] tracking-tight mb-8">
            Capital, built to fund the science that changes lives.
          </h1>
          <p className="text-[#3A4148] text-lg leading-relaxed mb-10">
            AfriCene Finance is an emerging asset management firm, currently in its
            research and foundation phase. We exist to build long-term investment
            discipline toward one purpose: directing capital into medical science,
            drug development, and biomedical engineering.
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="#vision" className="px-7 py-3.5 rounded-full bg-[#16273D] text-[#EFEFEA] text-sm font-medium hover:bg-[#0E1B2B] transition">
              Read our thesis
            </a>
            <a href="#contact" className="px-7 py-3.5 rounded-full border border-[#16273D]/25 text-sm font-medium hover:bg-white transition">
              Get in touch
            </a>
          </div>
        </div>

        {/* Abstract candlestick chart motif — hero visual */}
        <div className="relative aspect-square max-w-md mx-auto w-full">
          <svg viewBox="0 0 400 400" className="w-full h-full">
            <g stroke="#16273D" strokeOpacity="0.15" strokeWidth="1">
              <line x1="0" y1="100" x2="400" y2="100" />
              <line x1="0" y1="200" x2="400" y2="200" />
              <line x1="0" y1="300" x2="400" y2="300" />
            </g>
            <line x1="40" y1="300" x2="350" y2="55" stroke="#3F6B5E" strokeWidth="1.5" strokeDasharray="4 5" strokeOpacity="0.6" />
            {[
              { x: 50, wickTop: 220, wickBot: 280, bodyTop: 240, bodyBot: 270, fill: "#8A9199" },
              { x: 90, wickTop: 190, wickBot: 260, bodyTop: 210, bodyBot: 250, fill: "#8A9199" },
              { x: 130, wickTop: 160, wickBot: 230, bodyTop: 180, bodyBot: 215, fill: "#3A4148" },
              { x: 170, wickTop: 130, wickBot: 200, bodyTop: 150, bodyBot: 190, fill: "#3A4148" },
              { x: 210, wickTop: 150, wickBot: 210, bodyTop: 165, bodyBot: 195, fill: "#8A9199" },
              { x: 250, wickTop: 100, wickBot: 170, bodyTop: 115, bodyBot: 150, fill: "#3A4148" },
              { x: 290, wickTop: 70, wickBot: 140, bodyTop: 85, bodyBot: 120, fill: "#5F6A72" },
              { x: 330, wickTop: 40, wickBot: 110, bodyTop: 55, bodyBot: 90, fill: "#9C7A3C" },
            ].map((c) => (
              <g key={c.x}>
                <line x1={c.x} y1={c.wickTop} x2={c.x} y2={c.wickBot} stroke={c.fill} strokeWidth="1.5" />
                <rect x={c.x - 9} y={c.bodyTop} width="18" height={c.bodyBot - c.bodyTop} fill={c.fill} rx="1.5" />
              </g>
            ))}
          </svg>
        </div>
      </section>

      {/* VISION */}
      <section id="vision" className="border-t border-[#D9D6CC] bg-white/50">
        <div className="max-w-6xl mx-auto px-6 py-24 grid lg:grid-cols-[0.8fr,1.2fr] gap-16">
          <div>
            <p className="font-mono text-[11px] tracking-[0.25em] text-[#3F6B5E] mb-4">VISION</p>
            <h2 className="font-display font-light text-4xl leading-tight">
              Why this fund exists.
            </h2>
          </div>
          <div className="space-y-6 text-[#3A4148] text-lg leading-relaxed">
            <p>
              The idea for AfriCene Finance did not begin in a trading room. It began
              in health sciences — in early exposure to toxicology, human physiology,
              and the slow, expensive, capital-intensive path a discovery takes
              before it ever reaches a patient.
            </p>
            <p>
              That path is where the realization took hold: finance sits at the
              centre of medical progress. Every drug, device, and biomedical
              breakthrough is, eventually, a question of who was willing to fund it
              — and how well that capital was managed.
            </p>
            <p>
              AfriCene Finance is being built to answer that question. Our long-term
              purpose is to become an asset manager whose capital is directed,
              deliberately, toward medical science, drug development, and biomedical
              engineering — treating financial discipline as the foundation that
              makes scientific ambition possible.
            </p>
          </div>
        </div>
      </section>

      {/* STAGE DISCLOSURE */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="rounded-2xl border border-[#D9D6CC] bg-white px-8 py-10 md:px-12 md:py-12">
          <p className="font-mono text-[11px] tracking-[0.25em] text-[#3F6B5E] mb-4">WHERE WE ARE TODAY</p>
          <p className="text-[#3A4148] text-lg leading-relaxed max-w-3xl">
            AfriCene Finance is registered with the CIPC and is not yet operating as
            a licensed investment manager. We are in a deliberate research and
            education phase — building the regulatory, compliance, and quantitative
            foundation required before we manage a single rand of client capital.
            We believe trust in this industry is earned through competence and
            transparency, not promises made ahead of readiness.
          </p>
        </div>
      </section>

      {/* FOCUS AREAS */}
      <section id="focus" className="border-t border-[#D9D6CC] bg-[#16273D] text-[#EFEFEA]">
        <div className="max-w-6xl mx-auto px-6 py-24">
          <p className="font-mono text-[11px] tracking-[0.25em] text-[#9FD4C2] mb-4">FOCUS</p>
          <h2 className="font-display font-light text-4xl leading-tight mb-16 max-w-2xl">
            Where we intend to direct capital.
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: FlaskConical,
                title: "Medical Sciences & Drug Development",
                body: "Long-term capital thinking applied to the research and development pipelines behind new treatments and therapies.",
              },
              {
                icon: Dna,
                title: "Biomedical Engineering",
                body: "Funding attention toward the tools, devices, and technology infrastructure that next-generation healthcare depends on.",
              },
              {
                icon: BookOpen,
                title: "Quantitative & Financial Research",
                body: "The discipline we are building now — market research, data analysis, and formal study, ahead of any capital deployment.",
              },
            ].map((item) => (
              <div key={item.title} className="border border-[#3A4756] rounded-2xl p-8 bg-[#1A2C44]">
                <item.icon className="w-6 h-6 text-[#9FD4C2] mb-6" strokeWidth={1.5} />
                <h3 className="font-display text-xl font-light mb-3">{item.title}</h3>
                <p className="text-[#B9BEC5] text-sm leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* JOURNEY — signature timeline */}
      <section id="journey" className="max-w-6xl mx-auto px-6 py-24">
        <p className="font-mono text-[11px] tracking-[0.15em] text-[#3F6B5E] mb-4">JOURNEY</p>
        <h2 className="font-display font-light text-4xl leading-tight mb-16 max-w-2xl">
          The path from research to a licensed fund.
        </h2>

        <div className="relative pl-10">
          <div className="absolute left-[7px] top-2 bottom-2 w-px bg-[#D9D6CC]" />
          {[
            {
              icon: ShieldCheck,
              stage: "Foundation & research",
              when: "Current",
              body: "Registered with the CIPC. Dedicated to market study, financial research, and disciplined groundwork rather than active investing.",
            },
            {
              icon: GraduationCap,
              stage: "Formal education",
              when: "January 2027",
              body: "Our founder begins a Master of Science in Financial Engineering at WorldQuant University, formalising the quantitative foundation the firm is built on.",
            },
            {
              icon: ShieldCheck,
              stage: "Regulatory licensing",
              when: "Ahead",
              body: "Pursuing the legal structure, compliance framework, and anti-money laundering procedures required to operate as a licensed investment manager.",
            },
            {
              icon: Rocket,
              stage: "Fund launch",
              when: "Ahead",
              body: "Bringing the vision to investors — fully compliant, professionally managed, and built on the foundation laid in the stages before it.",
            },
          ].map((step) => (
            <div key={step.stage} className="relative pb-14 last:pb-0">
              <div className="absolute -left-10 top-0 w-4 h-4 rounded-full bg-[#EFEFEA] border-2 border-[#3F6B5E]" />
              <p className="font-mono text-xs tracking-[0.15em] text-[#9C7A3C] mb-2">{step.when}</p>
              <h3 className="font-display text-2xl font-light mb-2">{step.stage}</h3>
              <p className="text-[#3A4148] leading-relaxed max-w-xl">{step.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ECOSYSTEM */}
      <section id="ecosystem" className="border-t border-[#D9D6CC] bg-white/50">
        <div className="max-w-6xl mx-auto px-6 py-24">
          <p className="font-mono text-[11px] tracking-[0.25em] text-[#3F6B5E] mb-4">ECOSYSTEM</p>
          <h2 className="font-display font-light text-4xl leading-tight mb-4 max-w-2xl">
            Envisioned as part of a wider group.
          </h2>
          <p className="text-[#3A4148] max-w-2xl mb-14 leading-relaxed">
            AfriCene Finance is intended, over time, to sit alongside a broader
            group of research and technology ventures under AfriCene Holdings —
            with finance as the engine that funds the rest.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              ["AfriCene Finance", "Asset Management"],
              ["AfriCene Pharmaceuticals", "Drug Development"],
              ["AfriCene MedTech", "Health Innovation"],
              ["AfriCene Toxicology", "Chemical Research"],
            ].map(([name, tag]) => (
              <div key={name} className="border border-[#D9D6CC] rounded-2xl p-6 bg-white">
                <h3 className="font-display text-lg font-light mb-1">{name}</h3>
                <p className="font-mono text-xs tracking-wide text-[#5F6A72]">{tag}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="max-w-6xl mx-auto px-6 py-28 text-center">
        <p className="font-mono text-[11px] tracking-[0.25em] text-[#3F6B5E] mb-4">CONTACT</p>
        <h2 className="font-display font-light text-4xl leading-tight mb-6 max-w-xl mx-auto">
          Open to research collaboration and future partnerships.
        </h2>
        <p className="text-[#3A4148] max-w-xl mx-auto mb-12 leading-relaxed">
          AfriCene Finance is not yet accepting client capital. We welcome
          conversations with researchers, academics, and future partners who share
          this direction.
        </p>

        <div className="inline-flex flex-col sm:flex-row gap-4 text-left">
          <a href="mailto:malatsialex@gmail.com" className="flex items-center gap-3 border border-[#D9D6CC] rounded-full px-6 py-3.5 bg-white hover:border-[#16273D]/40 transition">
            <Mail className="w-4 h-4 text-[#3F6B5E]" strokeWidth={1.5} />
            <span className="text-sm">malatsialex@gmail.com</span>
          </a>
          <a href="tel:+27797775836" className="flex items-center gap-3 border border-[#D9D6CC] rounded-full px-6 py-3.5 bg-white hover:border-[#16273D]/40 transition">
            <Phone className="w-4 h-4 text-[#3F6B5E]" strokeWidth={1.5} />
            <span className="text-sm">+27 79 777 5836</span>
          </a>
          <div className="flex items-center gap-3 border border-[#D9D6CC] rounded-full px-6 py-3.5 bg-white">
            <MapPin className="w-4 h-4 text-[#3F6B5E]" strokeWidth={1.5} />
            <span className="text-sm">Pretoria, South Africa</span>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-[#D9D6CC] py-10">
        <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="font-display text-sm">AfriCene Finance</p>
          <p className="text-xs text-[#5F6A72]">
            AfriCene Finance is in development and is not currently a licensed financial services provider.
          </p>
        </div>
      </footer>
    </div>
  );
}