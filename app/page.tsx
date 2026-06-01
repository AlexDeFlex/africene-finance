import Image from 'next/image';

export default function AfriCeneFinance() {
  return (
    <div className="min-h-screen bg-black text-white font-sans overflow-x-hidden smooth-scroll">
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
          <button className="md:hidden text-white text-sm border border-white/20 px-4 py-2 rounded-xl">
            Menu
         </button>
        </div>
      </header>

      {/* HERO */}
      <section className="relative min-h-screen flex items-center justify-center px-6 pt-32">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/90 to-black" />

        <div className="relative z-10 max-w-6xl w-full grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="uppercase tracking-[0.4em] text-blue-300 text-xs mb-6">
              Emerging Quantitative Hedge Fund
            </p>

            <h1 className="text-7xl md:text-8xl font-light tracking-tight leading-none font-light tracking-tight mb-8">
              AfriCene
              <br />
              <span className="text-zinc-400">Finance</span>
            </h1>

            <p className="text-zinc-300 text-xl leading-relaxed text-zinc-300 leading-relaxed max-w-xl mb-10">
              Building the future intersection of artificial intelligence,
              quantitative finance, and institutional research from Africa to
              global markets.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#explore"
                className="px-8 py-4 rounded-2xl bg-white text-black font-medium hover:scale-105 transition text-center"
              >
                Explore The Firm
              </a>

              <a
                href="#insights"
                className="px-8 py-4 rounded-2xl border border-white/20 backdrop-blur-xl bg-white/5 hover:bg-white/10 transition text-center"
              >
                Investor Insights
              </a>
              
            </div>
          </div>

          <div className="relative flex justify-center">
            <div className="absolute inset-0 bg-blue-500/10 blur-3xl rounded-full" />

            <div className="relative w-full aspect-square max-w-lg overflow-hidden rounded-2xl border border-white/10 bg-white/5">
              <Image
                src="/afrifin.png"
                alt="AfriCene Finance"
                fill
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
                className="rounded-2xl opacity-90 object-cover"
              />
            </div>
          </div>
        </div>

        {/* Trading Ticker */}
        <div className="absolute bottom-0 left-0 right-0 border-t border-white/10 bg-black/80 backdrop-blur-xl overflow-hidden">
          <div className="flex whitespace-nowrap animate-pulse py-4 text-sm text-zinc-300 leading-relaxed gap-16 px-10">
            <span>TALENT PIPELINE ACTIVE</span>
            <span>STRATEGIC PARTNERSHIPS</span>
            <span>QUANT RESEARCH PIPELINE</span>
            <span>QUANT TEAM 2026</span>
            <span>EDUCATIONAL PROGRAMS</span>
            <span>AI QUANT MODELS</span>
          </div>
        </div>
      </section>

      <section id="explore" className="scroll-mt-32 max-w-5xl mx-auto px-6 py-32">
         <p className="uppercase tracking-[0.3em] text-blue-300 text-xs mb-4">
           Explore The Firm
         </p>

         <h2 className="text-6xl md:text-7xl font-light tracking-tight font-light mb-10">
           Building a Future Financial Institution
        </h2>

       <div className="text-zinc-300 text-xl leading-relaxed text-zinc-300 leading-relaxed space-y-6">
         <p>
           AfriCene Finance is currently in the development stage and is not yet operational. What exists today is a long-term vision: a research-driven financial enterprise being built with a commitment to professionalism, innovation, and regulatory compliance.
         </p>

         <p>
           We believe that trust is earned through competence, transparency, and adherence to the law. As responsible corporate citizens, we recognize that financial services can only be provided within the framework of applicable regulations, licensing requirements, and industry standards. Protecting investors and maintaining public confidence remain fundamental priorities.
         </p>

         <p>
           The company is presently registered through the CIPC and is focused on education, research, and strategic development. During this phase, we are dedicated to expanding our knowledge, refining investment methodologies, conducting market research, and developing robust quantitative and artificial intelligence-driven strategies.
         </p>

         <p>
           Before commencing operations as an investment management or hedge fund business, several critical areas must be addressed; including regulatory licensing and authorization, legal and corporate governance structures, and compliance and anti-money laundering (AML) procedures.
         </p>

         <p>
           At this stage, Africene Finance remains in a learning, research, and development phase. Our focus is on building expertise, creating value through rigorous analysis, and laying the foundation for a future organization that investors can trust and respect.
         </p>

         <p>
           We look forward to transforming this vision into a fully compliant and professionally managed financial institution.
         </p>
       </div>
      </section>

      <section id="insights" className="scroll-mt-32 max-w-5xl mx-auto px-6 py-32 border-t border-white/10">
         <p className="uppercase tracking-[0.3em] text-blue-300 text-xs mb-4">
           Investor Insights
         </p>

         <h2 className="text-6xl md:text-7xl font-light tracking-tight font-light mb-10">
           Finance with Long-Term Social Impact
         </h2>

       <div className="text-zinc-300 text-xl leading-relaxed text-zinc-300 leading-relaxed space-y-6">
         <p>
           AfriCene Finance was founded on the belief that finance should not only create wealth but also contribute to the long-term prosperity of society.
         </p>

         <p>
           While traditional hedge funds often focus primarily on institutional investors, family offices, pension funds, and high-net-worth individuals, our long-term vision includes exploring ways to expand financial inclusion and create opportunities for broader participation in wealth creation.
         </p>

         <p>
           One area of particular interest is the entertainment industry. South Africa is home to extraordinary talent in music, film, television, and the creative arts.
         </p>

         <p>
           As part of our future vision, we aim to explore specialized investment initiatives that support wealth preservation, financial literacy, retirement planning, and long-term capital growth for professionals in the creative economy.
         </p>

         <p>
           Beyond the entertainment sector, we believe capital can be a powerful tool for economic development. Our broader vision includes supporting entrepreneurship, innovation, and business growth by helping connect capital with promising ventures that contribute to employment creation and economic progress.
         </p>

         <p>
           We are also interested in exploring community-driven funding models that empower citizens to support meaningful causes, including education support, community infrastructure projects, and emergency assistance initiatives.
         </p>

         <p>
           Any future products, investment vehicles, crowdfunding initiatives, or financial services would be developed in accordance with applicable laws, regulations, and licensing requirements.
         </p>

         <p>
           At its core, Africene Finance seeks to combine financial excellence with social impact. Our ambition is to contribute to a future where investment capital not only generates returns but also helps build stronger communities, support innovation, and create opportunities for future generations.
         </p>
       </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="scroll-mt-32 max-w-6xl mx-auto px-8 md:px-12 py-40">
        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <p className="uppercase tracking-[0.3em] text-blue-300 text-xs mb-4">
              About Us
            </p>

            <h2 className="text-6xl md:text-7xl font-light tracking-tight font-light mb-8 leading-tight">
              A vision born from adversity, research, and innovation.
            </h2>
          </div>

          <div className="space-y-6 text-zinc-300 leading-relaxed text-xl leading-relaxed text-zinc-300">
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
      <section id="firm" className="bg-white/[0.02] border-y border-white/10 py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-20">
            <p className="uppercase tracking-[0.3em] text-blue-300 text-xs mb-4">
              Our Ecosystem
            </p>

            <h2 className="text-6xl md:text-7xl font-light tracking-tight font-light mb-6">
              Future AfriCene Holdings Structure
            </h2>

            <p className="text-zinc-400 max-w-3xl text-xl leading-relaxed text-zinc-300">
              AfriCene Finance is envisioned as the financial engine supporting
              a broader ecosystem of research, technology, healthcare, and
              industrial innovation.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              ['AfriCene Finance', 'HF | IB | PE'],
              ['AfriCene Wire', 'Tech Blog & Media'],
              ['AfriCene Projects', 'Project Management'],
              ['AfriCene Pharmaceuticals', 'Drug Development'],
              ['AfriCene MedTech', 'Health Innovation'],
              ['AfriCene Technologies', 'AI Hardware'],
              ['AfriCene Toxicology', 'Chemical Treatment'],
              ['AfriCene Consultancy', 'Advisory Services'],
              ['AfriCene Legal', 'Legal & Compliance'],
              ['AfriCene Agency', 'Tech Talent Network'],
            ].map((item) => (
              <div
                key={item[0]}
                className="backdrop-blur-xl bg-white/[0.04] border border-white/10 rounded-3xl p-10 hover:border-blue-400/30 transition"
              >
                <h3 className="text-2xl mb-3 font-light">{item[0]}</h3>
                <p className="text-zinc-400">{item[1]}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI LAB */}
      <section id="lab" className="max-w-6xl mx-auto px-8 md:px-12 py-40">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="uppercase tracking-[0.3em] text-blue-300 text-xs mb-4">
              AI Quant Lab
            </p>

            <h2 className="text-6xl md:text-7xl font-light tracking-tight font-light mb-8 leading-tight">
              Artificial intelligence infrastructure for modern markets.
            </h2>

            <div className="space-y-6 text-zinc-300 text-xl leading-relaxed text-zinc-300 leading-relaxed">
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

          <div className="rounded-[2rem] border border-white/10 bg-gradient-to-br from-blue-950/30 to-black p-10 backdrop-blur-2xl">
            <div className="space-y-4 font-mono text-sm text-green-400">
              <div>{'•'} Initializing AI market models...</div>
              <div>{'•'} Loading quantitative datasets...</div>
              <div>{'•'} Neural risk engine active...</div>
              <div>{'•'} Statistical arbitrage monitoring...</div>
              <div>{'•'} Portfolio optimization ready...</div>
              <div>{'•'} Liquidity signals connected...</div>
            </div>
          </div>
        </div>
      </section>

      {/* STRATEGIES */}
      <section id="strategies" className="py-32 px-6 bg-white/[0.0] border-y border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="mb-20">
            <p className="uppercase tracking-[0.3em] text-blue-300 text-xs mb-4">
              Strategies
            </p>

            <h2 className="text-6xl md:text-7xl font-light tracking-tight font-light mb-6">
              Research-driven quantitative approaches.
            </h2>
          </div>

          <div className="grid lg:grid-cols-4 gap-6">
           {[
             {
              title: 'Statistical Arbitrage',
              description: 
              <p>Market-Neutral Research • Relative-Value Analysis • Quantitative Modeling • Execution Efficiency<br /><br />AfriCene Finance studies statistical arbitrage as one of the foundational disciplines of quantitative investing. Our research focuses on identifying temporary pricing dislocations between related securities, sectors, and markets through rigorous statistical analysis. By examining historical relationships, volatility behavior, and market structure dynamics, we aim to develop systematic frameworks that can identify opportunities while minimizing unnecessary directional market exposure. Our long-term objective is to build robust, research-driven models capable of adapting to evolving market conditions</p>
             },
             {
              title: 'Factor Investing',
              description:
              <p>Value • Momentum • Quality • Risk Factors • Long-Term Asset Pricing Research<br /><br />Factor investing represents one of the most extensively researched areas in modern finance. At AfriCene Finance, we study the drivers of long-term asset returns through the lens of academic and institutional research. Our work focuses on understanding how factors such as value, momentum, quality, and risk characteristics influence investment performance across different market environments. Through continuous analysis and data-driven research, we seek to develop systematic approaches that combine multiple factors into diversified investment frameworks.</p>,
             },
             {
              title: 'Systematic Macro',
              description:
              <p>Economic Intelligence • Policy Analysis • Liquidity Cycles • Cross-Asset Research <br /><br />Financial markets are influenced by a complex interaction of economic, political, and monetary forces. Our systematic macro research seeks to understand these relationships through a structured and quantitative framework. We study macroeconomic indicators, central bank policies, liquidity conditions, and global market developments to identify long-term trends and investment themes. By combining economic analysis with quantitative methodologies, we aim to build a deeper understanding of how large-scale market forces shape investment opportunities across asset classes.</p>,
            },
            {
              title: 'Portfolio Optimization & Risk Management',
              description:
              <p>Capital Preservation • Portfolio Construction • Diversification Research • Volatility Management<br /><br /> Successful investing is not solely about identifying opportunities—it is also about managing risk responsibly. AfriCene Finance places significant emphasis on portfolio construction and risk management research as core pillars of its long-term vision. Our work explores diversification techniques, volatility management, position sizing methodologies, and portfolio optimization frameworks designed to improve risk-adjusted outcomes. We believe that disciplined risk management is essential to building sustainable investment processes and maintaining investor confidence over the long term.</p>,
            },
          ].map((strategy) => (
              <div
                key={strategy.title}
                className="p-10 rounded-3xl border border-white/10 backdrop-blur-xl bg-white/[0.04]"
              >
                <h3 className="text-2xl font-light mb-4">
                  {strategy.title}
                </h3>
                <div className="text-zinc-400 text-sm leading-relaxed">
                  {strategy.description}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CAREERS */}
      <section id="careers" className="max-w-6xl mx-auto px-8 md:px-12 py-40">
        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <p className="uppercase tracking-[0.3em] text-blue-300 text-xs mb-4">
              Careers & Network
            </p>

            <h2 className="text-6xl md:text-7xl font-light tracking-tight font-light mb-8">
              Building through talent, collaboration, and research.
            </h2>
          </div>

          <div className="space-y-6 text-zinc-300 text-xl leading-relaxed text-zinc-300 leading-relaxed">
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

          <h2 className="text-6xl md:text-7xl font-light tracking-tight font-light mb-8">
            Building institutional intelligence.
          </h2>

          <p className="text-zinc-400 text-xl leading-relaxed text-zinc-300 mb-10 max-w-2xl mx-auto">
            AfriCene Finance is currently in development and open to strategic
            networking opportunities, research collaborations, and future
            partnerships.
          </p>

          <div className="backdrop-blur-xl bg-white/[0.04] border border-white/10 rounded-[2rem] p-10 inline-block">
            <p className="text-zinc-400 mb-2">Email</p>
            <h3 className="text-2xl">mltale007@myuct.ac.za</h3>

            <div className="mt-8 flex justify-center gap-4 flex-wrap">
              <div className="px-6 py-3 rounded-2xl bg-white/5 border border-white/10">
                afrifin.co.za
              </div>

              <div className="px-6 py-3 rounded-2xl bg-white/5 border border-white/10">
                github.com/AlexDeFlex
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
