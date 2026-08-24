'use client'

import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import { CheckCircle, AlertCircle, BarChart3, Lightbulb, Shield, Zap, Lock, Eye, Code } from 'lucide-react'

export default function Home() {
  return (
    <div className="min-h-screen bg-arven-bg">
      <Navigation />

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
          <h2 className="text-4xl font-montserrat font-bold text-center text-gold-glow mb-12">
            Why This Matters
          </h2>

          <div className="space-y-6 mt-12">
            <div className="bg-arven-bg/50 border border-arven-magenta/30 rounded-lg p-6">
              <div className="flex gap-4 mb-4">
                <AlertCircle className="text-arven-red flex-shrink-0" size={24} />
                <div>
                  <h3 className="text-xl font-montserrat font-bold">EU AI Act Requirements</h3>
                  <p className="text-arven-text-secondary mt-2">
                    Since August 2026, EU AI Act Article 4 requires documented compliance for high-risk systems.
                  </p>
                  <p className="text-sm text-arven-text-tertiary">
                    Source: <a href="https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32024L1689" className="text-arven-cyan hover:underline">EUR-Lex 2024/1689</a>
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-arven-bg/50 border border-arven-magenta/30 rounded-lg p-6">
              <div className="flex gap-4 mb-4">
                <BarChart3 className="text-arven-red flex-shrink-0" size={24} />
                <div>
                  <h3 className="text-xl font-montserrat font-bold">GDPR Enforcement is Serious</h3>
                  <p className="text-arven-text-secondary mt-2">
                    Total GDPR fines in the EU exceeded €4B in 2024. Average penalty: €8–12M per case.
                  </p>
                  <p className="text-sm text-arven-text-tertiary">
                    Source: <a href="https://www.edpb.europa.eu/" className="text-arven-cyan hover:underline">EDPB Annual Report 2025</a>
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-arven-bg/50 border border-arven-magenta/30 rounded-lg p-6">
              <div className="flex gap-4 mb-4">
                <Shield className="text-arven-red flex-shrink-0" size={24} />
                <div>
                  <h3 className="text-xl font-montserrat font-bold">Compliance Consultants are Expensive</h3>
                  <p className="text-arven-text-secondary mt-2">
                    Most compliance consultants charge €150–500/hour. A basic audit: €20K–80K. We cost 90% less.
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

          <div className="grid md:grid-cols-3 gap-8 mt-12">
            {/* Module 1: EVALUATION */}
            <div className="bg-arven-darker/50 border border-arven-magenta/20 rounded-lg p-6">
              <div className="flex items-center justify-center mb-4">
                <span className="text-2xl font-montserrat font-bold text-arven-cyan">1</span>
              </div>
              <h3 className="text-xl font-montserrat font-bold text-center mb-3">
                <span className="text-arven-cyan">EVALUATION</span>
              </h3>
              <p className="text-arven-text-secondary text-center">
                You provide basic information: company size, data flows, AI systems deployed, current controls.
              </p>
            </div>

            {/* Module 2: AUDIT */}
            <div className="bg-arven-darker/50 border border-arven-magenta/20 rounded-lg p-6">
              <div className="flex items-center justify-center mb-4">
                <span className="text-2xl font-montserrat font-bold text-arven-cyan">2</span>
              </div>
              <h3 className="text-xl font-montserrat font-bold text-center mb-3">
                <span className="text-arven-cyan">AUDIT</span>
              </h3>
              <p className="text-arven-text-secondary text-center">
                Platform checks against 8 GDPR criteria, 7 EU AI Act markers, and 5 risk categories in real-time.
              </p>
            </div>

            {/* Module 3: REMEDIATION */}
            <div className="bg-arven-darker/50 border border-arven-magenta/20 rounded-lg p-6">
              <div className="flex items-center justify-center mb-4">
                <span className="text-2xl font-montserrat font-bold text-arven-cyan">3</span>
              </div>
              <h3 className="text-xl font-montserrat font-bold text-center mb-3">
                <span className="text-arven-cyan">REMEDIATION</span>
              </h3>
              <p className="text-arven-text-secondary text-center">
                Receive actionable report: specific violations, remediation steps, and compliance roadmap.
              </p>
            </div>
          </div>

          {/* Supported Frameworks */}
          <div className="mt-16 bg-arven-darker/50 border border-arven-magenta/20 rounded-lg p-8">
            <h3 className="text-2xl font-montserrat font-bold text-center mb-8">
              Supported Frameworks
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="flex items-center justify-center">
                <CheckCircle size={20} className="text-arven-green mr-3" />
                <span>GDPR (EU 2016/679)</span>
              </div>
              <div className="flex items-center justify-center">
                <CheckCircle size={20} className="text-arven-green mr-3" />
                <span>EU AI Act (EU 2024/1689)</span>
              </div>
              <div className="flex items-center justify-center">
                <CheckCircle size={20} className="text-arven-green mr-3" />
                <span>DSA (Digital Services Act)</span>
              </div>
              <div className="flex items-center justify-center">
                <CheckCircle size={20} className="text-arven-green mr-3" />
                <span>NIS2 (Network Security)</span>
              </div>
              <div className="flex items-center justify-center">
                <CheckCircle size={20} className="text-arven-green mr-3" />
                <span>DORA (Digital Operational)</span>
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
            We're at the Beginning –
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
          <h2 className="text-4xl font-montserrat font-bold text-center text-gold-glow mb-12">
            Pilot Program
          </h2>

          <div className="space-y-6 mt-12">
            <div className="bg-arven-darker/50 border border-arven-magenta/20 rounded-lg p-6">
              <h3 className="text-2xl font-montserrat font-bold mb-3">
                Why Join?
              </h3>
              <ul className="space-y-3 text-arven-text-secondary">
                <li className="flex gap-3">
                  <CheckCircle size={20} className="text-arven-green flex-shrink-0" />
                  <span>Free or heavily discounted audit (€500–2K vs €20K+)</span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle size={20} className="text-arven-green flex-shrink-0" />
                  <span>Shape the product — your feedback drives development</span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle size={20} className="text-arven-green flex-shrink-0" />
                  <span>Get a compliance roadmap</span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle size={20} className="text-arven-green flex-shrink-0" />
                  <span>Preferential pricing when GA launches</span>
                </li>
              </ul>
            </div>

            <div className="bg-arven-darker/50 border border-arven-magenta/20 rounded-lg p-6">
              <h3 className="text-2xl font-montserrat font-bold mb-3">
                What We Ask
              </h3>
              <ul className="space-y-3 text-arven-text-secondary">
                <li className="flex gap-3">
                  <CheckCircle size={20} className="text-arven-green flex-shrink-0" />
                  <span>Honest feedback on the audit report</span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle size={20} className="text-arven-green flex-shrink-0" />
                  <span>Permission to use anonymized findings in case studies</span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle size={20} className="text-arven-green flex-shrink-0" />
                  <span>30 min feedback call after report delivery</span>
                </li>
              </ul>
            </div>

            <div className="bg-arven-darker/50 border border-arven-magenta/20 rounded-lg p-6">
              <h3 className="text-2xl font-montserrat font-bold mb-3">
                Timeline
              </h3>
              <p className="text-arven-text-secondary">
                Pilot phases: Q4 2026 (first 10 companies), Q1 2027 (30 companies), GA late Q2 2027.
              </p>
              <p className="text-sm text-arven-text-tertiary mt-4">
                We're transparent about delays. Current blockers: NIS2 test data integration, multi-language report gen.
              </p>
            </div>
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
            {/* COVENT TECH */}
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

            {/* INTITA */}
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

      <Footer />
    </div>
  )
}

