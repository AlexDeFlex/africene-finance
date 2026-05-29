export default function AfriCeneFinance() {
  return (
    <div className="min-h-screen bg-black text-white font-sans overflow-x-hidden">
      {/* Background Effects */}
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_top,rgba(20,40,90,0.35),transparent_45%)] pointer-events-none" />
      <div className="fixed inset-0 opacity-20 pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-900 blur-3xl rounded-full" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-slate-700 blur-3xl rounded-full" />
      </div>

      {/* NAVBAR */}
      <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-black/40 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div>
            <h1 className="text-2xl tracking-wide font-light">AfriCene Finance</h1>
            <p className="text-xs text-zinc-400 tracking-[0.3em] uppercase">AI & Quantitative Intelligence</p>
          </div>

          <nav className="hidden md:flex gap-8 text-sm text-zinc-300">
            <a href="#about" className="hover:text-white transition">About</a>
            <a href="#firm" className="hover:text-white transition">Our Firm</a>
            <a href="#lab" className="hover:text-white transition">AI Quant Lab</a>
            <a href="#strategies" className="hover:text-white transition">Strategies</a>
            <a href="#careers" className="hover:text-white transition">Careers</a>
            <a href="#contact" className="hover:text-white transition">Contact</a>
          </nav>
        </div>
      </header>

      {/* HERO */}
      <section className="relative min-h-screen flex items-center justify-center px-6">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/90 to-black" />

        <div className="relative z-10 max-w-6xl w-full grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="uppercase tracking-[0.4em] text-blue-300 text-xs mb-6">
              Emerging Quantitative Hedge Fund
            </p>

            <h1 className="text-6xl md:text-8xl leading-none font-light tracking-tight mb-8">
              AfriCene
              <br />
              <span className="text-zinc-400">Finance</span>
            </h1>

            <p className="text-zinc-300 text-lg leading-relaxed max-w-xl mb-10">
              Building the future intersection of artificial intelligence,
              quantitative finance, and institutional research from Africa to
              global markets.
            </p>

            <div className="flex flex-wrap gap-4">
              <button className="px-8 py-4 rounded-2xl bg-white text-black font-medium hover:scale-105 transition">
                Explore The Firm
              </button>

              <button className="px-8 py-4 rounded-2xl border border-white/20 backdrop-blur-xl bg-white/5 hover:bg-white/10 transition">
                Investor Insights
              </button>
            </div>
          </div>

          <div className="relative flex justify-center">
            <div className="absolute inset-0 bg-blue-500/10 blur-3xl rounded-full" />

            <div className="relative backdrop-blur-2xl bg-white/5 border border-white/10 rounded-[2rem] p-8 shadow-2xl max-w-lg w-full">
              <img
                src="/afrifin.png"
                alt="AfriCene Finance"
                className="rounded-2xl opacity-90"
              />

              <div className="mt-8 grid grid-cols-2 gap-4 text-sm">
                <div className="bg-white/5 border border-white/10 rounded-2xl p-4">
                  <p className="text-zinc-400 mb-2">Focus</p>
                  <h3 className="text-xl">AI Quant</h3>
                </div>

                <div className="bg-white/5 border border-white/10 rounded-2xl p-4">
                  <p className="text-zinc-400 mb-2">Sector</p>
                  <h3 className="text-xl">Hedge Fund</h3>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Trading Ticker */}
        <div className="absolute bottom-0 left-0 right-0 border-t border-white/10 bg-black/80 backdrop-blur-xl overflow-hidden">
          <div className="flex whitespace-nowrap animate-pulse py-4 text-sm text-zinc-400 gap-16 px-10">
            <span>NASDAQ +1.28%</span>
            <span>S&P 500 +0.87%</span>
            <span>AI SIGNALS ACTIVE</span>
            <span>QUANT RESEARCH PIPELINE</span>
            <span>VOLATILITY INDEX -0.14%</span>
            <span>AFRICENE FINANCE SYSTEMS</span>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="max-w-7xl mx-auto px-6 py-32">
        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <p className="uppercase tracking-[0.3em] text-blue-300 text-xs mb-4">
              About Us
            </p>

            <h2 className="text-5xl font-light mb-8 leading-tight">
              A vision born from adversity, research, and innovation.
            </h2>
          </div>

          <div className="space-y-6 text-zinc-300 leading-relaxed text-lg">
            <p>
              AfriCene Finance is an emerging AI and quantitative finance company
              currently in development, established with the long-term vision of
              becoming part of AfriCene Holdings — a multidisciplinary group of
              companies spanning finance, health sciences, artificial
              intelligence, pharmaceuticals, engineering, research, media, and
              legal advisory.
            </p>

            <p>
              The foundation of the company originates from a journey shaped by
              setbacks in health sciences, exposure to toxicology and human
              physiology research, and later encounters with quantitative
              finance and algorithmic trading. The realization emerged that
              finance stands at the center of innovation — funding research,
              medical advancement, and technological development during times of
              global need.
            </p>

            <p>
              AfriCene Finance exists to build systems capable of funding future
              breakthroughs through intelligence, disciplined research, and
              long-term institutional thinking.
            </p>
          </div>
        </div>
      </section>

      {/* HOLDINGS */}
      <section id="firm" className="bg-white/[0.03] border-y border-white/10 py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-20">
            <p className="uppercase tracking-[0.3em] text-blue-300 text-xs mb-4">
              Our Ecosystem
            </p>

            <h2 className="text-5xl font-light mb-6">
              Future AfriCene Holdings Structure
            </h2>

            <p className="text-zinc-400 max-w-3xl text-lg">
              AfriCene Finance is envisioned as the financial engine supporting
              a broader ecosystem of research, technology, healthcare, and
              industrial innovation.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              ['AfriCene Finance', 'HF | IB | PE'],
              ['AfriCene Wire', 'Journalism & Media'],
              ['AfriCene Systems', 'Project Management'],
              ['AfriCene Pharmaceuticals', 'Drug Development'],
              ['AfriCene MedTech', 'Health Innovation'],
              ['AfriCene Technologies', 'AI & Electronics'],
              ['AfriCene OHS', 'Toxicology & Ergonomics'],
              ['AfriCene Consultants', 'Advisory Services'],
            ].map((item) => (
              <div
                key={item[0]}
                className="backdrop-blur-xl bg-white/[0.04] border border-white/10 rounded-3xl p-8 hover:border-blue-400/30 transition"
              >
                <h3 className="text-2xl mb-3 font-light">{item[0]}</h3>
                <p className="text-zinc-400">{item[1]}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI LAB */}
      <section id="lab" className="max-w-7xl mx-auto px-6 py-32">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="uppercase tracking-[0.3em] text-blue-300 text-xs mb-4">
              AI Quant Lab
            </p>

            <h2 className="text-5xl font-light mb-8 leading-tight">
              Artificial intelligence infrastructure for modern markets.
            </h2>

            <div className="space-y-6 text-zinc-300 text-lg leading-relaxed">
              <p>
                AfriCene Finance aims to build AI-driven systems for quantitative
                research, market analysis, risk intelligence, and predictive
                modeling.
              </p>

              <p>
                The long-term objective is to integrate machine learning,
                algorithmic strategies, financial data engineering, and economic
                research into a scalable institutional platform.
              </p>
            </div>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-gradient-to-br from-blue-950/30 to-black p-8 backdrop-blur-2xl">
            <div className="space-y-4 font-mono text-sm text-green-400">
              <div>{'>'} Initializing AI market models...</div>
              <div>{'>'} Loading quantitative datasets...</div>
              <div>{'>'} Neural risk engine active...</div>
              <div>{'>'} Statistical arbitrage monitoring...</div>
              <div>{'>'} Portfolio optimization ready...</div>
              <div>{'>'} Liquidity signals connected...</div>
            </div>
          </div>
        </div>
      </section>

      {/* STRATEGIES */}
      <section id="strategies" className="py-32 px-6 bg-white/[0.03] border-y border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="mb-20">
            <p className="uppercase tracking-[0.3em] text-blue-300 text-xs mb-4">
              Strategies
            </p>

            <h2 className="text-5xl font-light mb-6">
              Research-driven quantitative approaches.
            </h2>
          </div>

          <div className="grid lg:grid-cols-4 gap-6">
            {[
              'Statistical Arbitrage',
              'AI Sentiment Analysis',
              'Systematic Macro',
              'Machine Learning Signals',
            ].map((strategy) => (
              <div
                key={strategy}
                className="p-8 rounded-3xl border border-white/10 backdrop-blur-xl bg-white/[0.04]"
              >
                <h3 className="text-2xl font-light mb-4">{strategy}</h3>
                <p className="text-zinc-400 text-sm leading-relaxed">
                  Conceptual research and infrastructure currently under long-term
                  development.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CAREERS */}
      <section id="careers" className="max-w-7xl mx-auto px-6 py-32">
        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <p className="uppercase tracking-[0.3em] text-blue-300 text-xs mb-4">
              Careers & Network
            </p>

            <h2 className="text-5xl font-light mb-8">
              Building through talent, collaboration, and research.
            </h2>
          </div>

          <div className="space-y-6 text-zinc-300 text-lg leading-relaxed">
            <p>
              AfriCene recruits through networking, collaborative research,
              technical projects, and long-term partnerships.
            </p>

            <p>
              The company seeks individuals interested in quantitative finance,
              artificial intelligence, software engineering, market research,
              economics, healthcare innovation, and institutional strategy.
            </p>

            <p>
              As the organization evolves, AfriCene aims to create a global
              ecosystem of researchers, analysts, engineers, and innovators.
            </p>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-32 px-6 border-t border-white/10">
        <div className="max-w-5xl mx-auto text-center">
          <p className="uppercase tracking-[0.3em] text-blue-300 text-xs mb-4">
            Contact
          </p>

          <h2 className="text-5xl font-light mb-8">
            Building institutional intelligence.
          </h2>

          <p className="text-zinc-400 text-lg mb-10 max-w-2xl mx-auto">
            AfriCene Finance is currently in development and open to strategic
            networking opportunities, research collaborations, and future
            partnerships.
          </p>

          <div className="backdrop-blur-xl bg-white/[0.04] border border-white/10 rounded-[2rem] p-10 inline-block">
            <p className="text-zinc-400 mb-2">Email</p>
            <h3 className="text-2xl">ajexflex@gmail.com</h3>

            <div className="mt-8 flex justify-center gap-4 flex-wrap">
              <div className="px-6 py-3 rounded-2xl bg-white/5 border border-white/10">
                africeneventures.com
              </div>

              <div className="px-6 py-3 rounded-2xl bg-white/5 border border-white/10">
                africenefinance.com
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
