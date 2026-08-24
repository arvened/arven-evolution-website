'use client'

import { CheckCircle, AlertCircle, BarChart3, Shield, Calendar } from 'lucide-react'

export default function Home() {
  return (
    <div className="min-h-screen bg-arven-bg">
      {/* SECTION 1: HERO */}
      <section className="section-gradient-1 py-20 md:py-32">
        <div className="container max-w-4xl mx-auto">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-center text-gold-glow">
              <span className="text-arven-magenta">ARVEN</span>
              <br />
              <span className="text-arven-cyan">Platform</span>
            </h1>
            <p className="text-xl text-arven-text-secondary mt-6">
              Automated compliance assessment for regulated EU industries. No fluff. Just audit intelligence.
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center mt-12">
              <button className="px-8 py-4 bg-arven-magenta text-white rounded-lg hover:bg-opacity-80 transition">
                Get Pilot Audit
              </button>
              <button className="px-8 py-4 border border-arven-cyan text-arven-cyan rounded-lg hover:bg-arven-cyan hover:text-arven-bg transition">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>

      <div className="section-divider"></div>

      {/* SECTION 2: WHY IT MATTERS */}
      <section className="section-gradient-2 py-16 md:py-24">
        <div className="container max-w-4xl mx-auto">
          <h2 className="text-4xl font-montserrat font-bold text-center text-gold-glow mb-16">
            Why This Matters
          </h2>

          <div className="space-y-8">
            <div className="bg-gradient-to-br from-arven-red/10 to-arven-red/5 border-l-4 border-arven-red rounded-lg p-8">
              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <AlertCircle className="text-arven-red" size={32} />
                </div>
                <div className="flex-grow">
                  <h3 className="text-2xl font-montserrat font-bold mb-3 text-white">EU AI Act Requirements</h3>
                  <p className="text-arven-text-secondary text-lg leading-relaxed mb-3">
                    Since August 2026, EU AI Act Article 4 requires documented compliance for high-risk systems.
                  </p>
                  <p className="text-sm text-arven-text-tertiary">
                    <a href="https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32024L1689" className="text-arven-cyan hover:underline font-semibold">EUR-Lex 2024/1689</a>
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-arven-magenta/10 to-arven-magenta/5 border-l-4 border-arven-magenta rounded-lg p-8">
              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <BarChart3 className="text-arven-magenta" size={32} />
                </div>
                <div className="flex-grow">
                  <h3 className="text-2xl font-montserrat font-bold mb-3 text-white">GDPR Enforcement is Serious</h3>
                  <p className="text-arven-text-secondary text-lg leading-relaxed mb-2">
                    <strong>€4B+</strong> in fines (2024) · <strong>€8–12M</strong> average penalty per case
                  </p>
                  <p className="text-sm text-arven-text-tertiary">
                    <a href="https://www.edpb.europa.eu/" className="text-arven-cyan hover:underline font-semibold">EDPB Annual Report 2025</a>
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-arven-cyan/10 to-arven-cyan/5 border-l-4 border-arven-cyan rounded-lg p-8">
              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <Shield className="text-arven-cyan" size={32} />
                </div>
                <div className="flex-grow">
                  <h3 className="text-2xl font-montserrat font-bold mb-3 text-white">Compliance Consultants are Expensive</h3>
                  <p className="text-arven-text-secondary text-lg leading-relaxed">
                    €150–500/hour · €20K–80K per audit. <span className="text-arven-cyan font-semibold">We cost 90% less.</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="section-divider"></div>

      {/* SECTION 3: HOW IT WORKS */}
      <section id="how-it-works" className="section-gradient-1 py-16 md:py-24">
        <div className="container max-w-4xl mx-auto">
          <h2 className="text-4xl font-montserrat font-bold text-center text-gold-glow mb-12">
            How ARVEN PLATFORM Works
          </h2>

          <div className="grid md:grid-cols-3 gap-6 mt-12 mb-8">
            <div className="relative bg-gradient-to-b from-arven-cyan/15 to-arven-cyan/5 border-2 border-arven-cyan/50 rounded-lg p-8 hover:border-arven-cyan transition">
              <div className="absolute -top-5 left-1/2 -translate-x-1/2 w-10 h-10 bg-arven-cyan rounded-full flex items-center justify-center">
                <span className="text-lg font-montserrat font-bold text-arven-bg">1</span>
              </div>
              <h3 className="text-xl font-montserrat font-bold text-center mb-4 mt-4 text-arven-cyan">
                EVALUATION
              </h3>
              <p className="text-arven-text-secondary text-center text-sm leading-relaxed">
                You provide basic information: company size, data flows, AI systems deployed, current controls.
              </p>
            </div>

            <div className="relative bg-gradient-to-b from-arven-magenta/15 to-arven-magenta/5 border-2 border-arven-magenta/50 rounded-lg p-8 hover:border-arven-magenta transition">
              <div className="absolute -top-5 left-1/2 -translate-x-1/2 w-10 h-10 bg-arven-magenta rounded-full flex items-center justify-center">
                <span className="text-lg font-montserrat font-bold text-arven-bg">2</span>
              </div>
              <h3 className="text-xl font-montserrat font-bold text-center mb-4 mt-4 text-arven-magenta">
                AUDIT
              </h3>
              <p className="text-arven-text-secondary text-center text-sm leading-relaxed">
                Platform checks: <strong>8 GDPR</strong> criteria · <strong>7 EU AI Act</strong> markers · <strong>5 risk</strong> categories
              </p>
            </div>

            <div className="relative bg-gradient-to-b from-arven-green/15 to-arven-green/5 border-2 border-arven-green/50 rounded-lg p-8 hover:border-arven-green transition">
              <div className="absolute -top-5 left-1/2 -translate-x-1/2 w-10 h-10 bg-arven-green rounded-full flex items-center justify-center">
                <span className="text-lg font-montserrat font-bold text-arven-bg">3</span>
              </div>
              <h3 className="text-xl font-montserrat font-bold text-center mb-4 mt-4 text-arven-green">
                REMEDIATION
              </h3>
              <p className="text-arven-text-secondary text-center text-sm leading-relaxed">
                Actionable report: violations · remediation steps · compliance roadmap.
              </p>
            </div>
          </div>

          <div className="mt-12 bg-gradient-to-br from-arven-green/10 to-arven-green/5 border-2 border-arven-green/40 rounded-lg p-10">
            <h3 className="text-2xl font-montserrat font-bold text-center mb-8 text-arven-green">
              ✓ Supported Frameworks
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="flex items-start gap-4 p-3 rounded bg-arven-darker/40 border border-arven-green/20">
                <CheckCircle size={24} className="text-arven-green flex-shrink-0 mt-1" />
                <div>
                  <div className="font-semibold">GDPR</div>
                  <div className="text-xs text-arven-text-tertiary">EU 2016/679</div>
                </div>
              </div>
              <div className="flex items-start gap-4 p-3 rounded bg-arven-darker/40 border border-arven-green/20">
                <CheckCircle size={24} className="text-arven-green flex-shrink-0 mt-1" />
                <div>
                  <div className="font-semibold">EU AI Act</div>
                  <div className="text-xs text-arven-text-tertiary">EU 2024/1689</div>
                </div>
              </div>
              <div className="flex items-start gap-4 p-3 rounded bg-arven-darker/40 border border-arven-green/20">
                <CheckCircle size={24} className="text-arven-green flex-shrink-0 mt-1" />
                <div>
                  <div className="font-semibold">DSA</div>
                  <div className="text-xs text-arven-text-tertiary">Digital Services Act</div>
                </div>
              </div>
              <div className="flex items-start gap-4 p-3 rounded bg-arven-darker/40 border border-arven-green/20">
                <CheckCircle size={24} className="text-arven-green flex-shrink-0 mt-1" />
                <div>
                  <div className="font-semibold">NIS2</div>
                  <div className="text-xs text-arven-text-tertiary">Network Security</div>
                </div>
              </div>
              <div className="flex items-start gap-4 p-3 rounded bg-arven-darker/40 border border-arven-green/20 md:col-span-2">
                <CheckCircle size={24} className="text-arven-green flex-shrink-0 mt-1" />
                <div>
                  <div className="font-semibold">DORA</div>
                  <div className="text-xs text-arven-text-tertiary">Digital Operational Resilience</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="section-divider"></div>

      {/* SECTION 4: HONEST STATUS */}
      <section id="status" className="section-gradient-2 py-16 md:py-24">
        <div className="container max-w-4xl mx-auto">
          <h2 className="text-4xl font-montserrat font-bold text-center text-gold-glow mb-8">
            We're at the Beginning
          </h2>
          <div className="bg-arven-bg/50 border border-arven-magenta/20 rounded-lg p-8">
            <p className="text-lg text-arven-text-secondary">
              ARVEN PLATFORM is in early development. We're shipping a pilot version Q4 2026.
            </p>
            <p className="text-arven-text-tertiary mt-4">
              If you're skeptical of "disruptive AI" claims: fair. We're building compliance tools, not disruption mythology. Real companies piloting with us are seeing 40–60% faster audit cycles and 70% lower cost per assessment vs. traditional consultants.
            </p>
          </div>
        </div>
      </section>

      <div className="section-divider"></div>

      {/* SECTION 5: PILOT PROGRAM */}
      <section id="pilot-program" className="section-gradient-1 py-16 md:py-24">
        <div className="container max-w-4xl mx-auto">
          <h2 className="text-4xl font-montserrat font-bold text-center text-gold-glow mb-16">
            Pilot Program
          </h2>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="bg-gradient-to-br from-arven-darker to-arven-darker/60 border-2 border-arven-green/40 rounded-lg p-8">
              <h3 className="text-2xl font-montserrat font-bold mb-6 text-arven-green">
                ✓ Why Join?
              </h3>
              <ul className="space-y-4">
                <li className="flex gap-3 pb-3 border-b border-arven-green/20">
                  <CheckCircle size={22} className="text-arven-green flex-shrink-0 mt-1" />
                  <span className="text-arven-text-secondary">
                    <strong>Free audit</strong><br/>
                    <span className="text-sm">€500–2K vs €20K+</span>
                  </span>
                </li>
                <li className="flex gap-3 pb-3 border-b border-arven-green/20">
                  <CheckCircle size={22} className="text-arven-green flex-shrink-0 mt-1" />
                  <span className="text-arven-text-secondary">
                    <strong>Shape product</strong><br/>
                    <span className="text-sm">Your feedback drives dev</span>
                  </span>
                </li>
                <li className="flex gap-3 pb-3 border-b border-arven-green/20">
                  <CheckCircle size={22} className="text-arven-green flex-shrink-0 mt-1" />
                  <span className="text-arven-text-secondary">
                    <strong>Roadmap</strong><br/>
                    <span className="text-sm">Compliance strategy</span>
                  </span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle size={22} className="text-arven-green flex-shrink-0 mt-1" />
                  <span className="text-arven-text-secondary">
                    <strong>Preferential pricing</strong><br/>
                    <span className="text-sm">When GA launches</span>
                  </span>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-arven-darker to-arven-darker/60 border-2 border-arven-magenta/40 rounded-lg p-8">
              <h3 className="text-2xl font-montserrat font-bold mb-6 text-arven-magenta">
                ❓ What We Ask
              </h3>
              <ul className="space-y-4">
                <li className="flex gap-3 pb-3 border-b border-arven-magenta/20">
                  <AlertCircle size={22} className="text-arven-magenta flex-shrink-0 mt-1" />
                  <span className="text-arven-text-secondary">
                    <strong>Honest feedback</strong><br/>
                    <span className="text-sm">On audit report</span>
                  </span>
                </li>
                <li className="flex gap-3 pb-3 border-b border-arven-magenta/20">
                  <AlertCircle size={22} className="text-arven-magenta flex-shrink-0 mt-1" />
                  <span className="text-arven-text-secondary">
                    <strong>Case study rights</strong><br/>
                    <span className="text-sm">Anonymized findings</span>
                  </span>
                </li>
                <li className="flex gap-3">
                  <AlertCircle size={22} className="text-arven-magenta flex-shrink-0 mt-1" />
                  <span className="text-arven-text-secondary">
                    <strong>Feedback call</strong><br/>
                    <span className="text-sm">30 min after report</span>
                  </span>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-gradient-to-r from-arven-cyan/10 to-transparent border-l-4 border-arven-cyan rounded-lg p-8">
            <div className="flex items-center gap-3 mb-4">
              <Calendar className="text-arven-cyan" size={24} />
              <h3 className="text-2xl font-montserrat font-bold text-arven-cyan">
                Timeline
              </h3>
            </div>
            <div className="space-y-2 text-arven-text-secondary text-lg">
              <p><strong>Q4 2026:</strong> First 10 companies</p>
              <p><strong>Q1 2027:</strong> 30 companies</p>
              <p><strong>Q2 2027:</strong> General Availability</p>
            </div>
            <p className="text-sm text-arven-text-tertiary mt-4 pt-4 border-t border-arven-cyan/20">
              We're transparent about delays. Blockers: NIS2 test data, multi-language reports.
            </p>
          </div>
        </div>
      </section>

      <div className="section-divider"></div>

      {/* SECTION 6: ABOUT */}
      <section id="about" className="section-gradient-2 py-16 md:py-24">
        <div className="container max-w-4xl mx-auto">
          <h2 className="text-4xl font-montserrat font-bold text-center text-gold-glow mb-12">
            About ARVEN
            </h2>

          <div className="bg-arven-bg/50 border border-arven-magenta/20 rounded-lg p-8">
            <p className="text-lg text-arven-text-secondary mb-6">
              ARVEN PLATFORM is developed by a team of compliance engineers, lawyers, and security researchers in Ukraine & Poland.
            </p>
            <p className="text-arven-text-secondary mb-6">
              We built this because we saw the gap: compliance is a solved problem (checklists, frameworks exist), but manual audits are expensive and slow. Most companies default to: ignore until regulator knocks.
            </p>
            <p className="text-arven-text-secondary mb-6">
              Our goal: make compliance automated, affordable, and honest. Not sell fear or "full-stack AI magic." Just faster, cheaper audits backed by real frameworks and verified sources.
            </p>
          </div>
        </div>
      </section>

      <div className="section-divider"></div>

      {/* SECTION 7: PARTNERS */}
      <section id="partners" className="section-gradient-1 py-16 md:py-24">
        <div className="container max-w-4xl mx-auto">
          <h2 className="text-4xl font-montserrat font-bold text-center text-gold-glow mb-12">
            Partners
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-arven-darker/50 border border-arven-magenta/20 rounded-lg p-6">
              <h3 className="text-2xl font-montserrat font-bold mb-3">
                COVENT TECH
              </h3>
              <p className="text-arven-text-secondary mb-4">
                Poland-based partner driving European compliance & go-to-market strategy.
              </p>
              <p className="text-sm text-arven-text-tertiary">
                <strong>Contact:</strong> Igor Melnyk (CEO, KRS: 0001107554)
              </p>
            </div>

            <div className="bg-arven-darker/50 border border-arven-magenta/20 rounded-lg p-6">
              <h3 className="text-2xl font-montserrat font-bold mb-3">
                INTITA – Vinnytsia Technological University
              </h3>
              <p className="text-arven-text-secondary mb-4">
                Research partner providing methodology validation and academic rigor.
              </p>
              <p className="text-sm text-arven-text-tertiary">
                <strong>Contact:</strong> Roman Melnyk (Rector)
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="section-divider"></div>

      {/* SECTION 8: CTA + CONTACT */}
      <section id="contact" className="section-gradient-2 py-16 md:py-24">
        <div className="container max-w-4xl mx-auto">
          <h2 className="text-4xl font-montserrat font-bold text-center text-gold-glow mb-12">
            Ready to Assess Your Compliance?
          </h2>

          <div className="bg-arven-bg/50 border border-arven-magenta/20 rounded-lg p-8">
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-semibold mb-2">
                  Company Name
                </label>
                <input
                  type="text"
                  placeholder="Your company"
                  className="w-full px-4 py-2 bg-arven-darker/50 border border-arven-magenta/30 text-white rounded-lg focus:border-arven-magenta focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="you@company.com"
                  className="w-full px-4 py-2 bg-arven-darker/50 border border-arven-magenta/30 text-white rounded-lg focus:border-arven-magenta focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2">
                  Message
                </label>
                <textarea
                  placeholder="Tell us about you company, current compliance status, and what you'd like to audit"
                  rows={5}
                  className="w-full px-4 py-2 bg-arven-darker/50 border border-arven-magenta/30 text-white rounded-lg focus:border-arven-magenta focus:outline-none"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full px-6 py-4 bg-arven-magenta text-white rounded-lg hover:bg-opacity-80 transition font-semibold"
              >
                Request Pilot Audit
              </button>
            </form>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mt-12">
            <div>
              <p className="text-sm text-arven-text-tertiary">
                <a href="mailto:hello@arvend.io" className="text-arven-cyan hover:underline">
                  hello@arvend.io
                </a>
              </p>
            </div>

            <div>
              <p className="text-sm text-arven-text-tertiary">
                <a href="tel:+380954763406" className="text-arven-cyan hover:underline">
                  +380 (95) 476–34–06
                </a>
              </p>
            </div>

            <div>
              <p className="text-sm text-arven-text-tertiary">
                <a href="https://t.me/arven_agency" className="text-arven-cyan hover:underline">
                  @arven_agency
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="section-divider"></div>
    </div>
  )
}
