'use client'

import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import { CheckCircle, AlertCircle, BarChart3, Users, Lock, Zap } from 'lucide-react'

export default function Home() {
  return (
    <div className="min-h-screen bg-arven-bg">
      <Navigation />

      {/* SECTION 1: HERO */}
    className="section-gradient-1 pt-32 pb-20 px-4"

        <div className="container max-w-4xl mx-auto">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-montserrat font-bold mb-6 text-arven-text">
              <span className="text-arven-magenta">ARVEN PLATFORM</span> — Assess Your
              <br />
              <span className="text-arven-cyan">GDPR & EU AI Act Readiness</span>
            </h1>
            <p className="text-xl text-arven-text-tertiary mb-8 max-w-3xl mx-auto leading-relaxed">
              Automated compliance assessment for SMEs. Provide data about your company — get a structured report on risks and gaps without expensive consultants.
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-arven-magenta text-arven-bg font-montserrat font-semibold rounded-lg hover:bg-arven-cyan hover:text-arven-bg transition-all text-lg">
                Get Pilot Audit
              </button>
              <button className="px-8 py-4 border-2 border-arven-cyan text-arven-cyan font-montserrat font-semibold rounded-lg hover:bg-arven-cyan/10 transition-all text-lg">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>
    
    <div className="section-divider"></div>


      className="section-gradient-2 py-20 px-4"

      <section className="py-20 px-4 bg-arven-darker/50">
        <div className="container max-w-4xl mx-auto">
          <h2 className="text-4xl font-montserrat font-bold mb-12 text-center">
            Why This Matters
            <span className="block text-arven-cyan text-2xl mt-2 font-normal">Right Now</span>
          </h2>

          <div className="space-y-6">
            <div className="bg-arven-bg/50 border border-arven-magenta/20 rounded-lg p-8">
              <div className="flex gap-4 mb-4">
                <AlertCircle className="text-arven-red flex-shrink-0" size={24} />
                <div>
                  <h3 className="text-xl font-montserrat font-bold mb-2">EU AI Act Requirements</h3>
                  <p className="text-arven-text-tertiary mb-2">
                    Since August 2026, EU AI Act articles 50 (transparency) and 4 (AI literacy) are in effect. If you use AI tools — which most SMEs do — you must disclose it and ensure staff understand AI use.
                  </p>
                  <p className="text-sm text-arven-cyan">
                    Source: <a href="https://eur-lex.europa.eu/eli/reg/2024/1689/oj" target="_blank" rel="noopener noreferrer" className="underline hover:text-arven-magenta">EU AI Act (Official Journal)</a>
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-arven-bg/50 border border-arven-magenta/20 rounded-lg p-8">
              <div className="flex gap-4 mb-4">
                <AlertCircle className="text-arven-red flex-shrink-0" size={24} />
                <div>
                  <h3 className="text-xl font-montserrat font-bold mb-2">GDPR Enforcement is Serious</h3>
                  <p className="text-arven-text-tertiary mb-2">
                    Total GDPR fines in the EU reached €1.145 billion in 2025. Average fine for SMEs: €20K–€50K. Enterprise compliance solutions (OneTrust, TrustArc) cost €20,000+/year — out of reach for most SMEs.
                  </p>
                  <p className="text-sm text-arven-cyan">
                    Source: <a href="https://www.edpb.eu/our-work/our-documents/annual-reports" target="_blank" rel="noopener noreferrer" className="underline hover:text-arven-magenta">EDPB Annual Report 2025</a>
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-arven-bg/50 border border-arven-magenta/20 rounded-lg p-8">
              <div className="flex gap-4 mb-4">
                <AlertCircle className="text-arven-red flex-shrink-0" size={24} />
                <div>
                  <h3 className="text-xl font-montserrat font-bold mb-2">The Problem with Manual Audits</h3>
                  <p className="text-arven-text-tertiary">
                    Compliance consultants are expensive and slow. ARVEN automates the initial assessment — no hiring external auditors until you know where the gaps are.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="section-divider"></div>


      className="section-gradient-3 py-20 px-4"

      <section id="how-it-works" className="py-20 px-4">
        <div className="container max-w-4xl mx-auto">
          <h2 className="text-4xl font-montserrat font-bold mb-16 text-center">
            How ARVEN PLATFORM Works
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Module 1: EVALUATION */}
            <div className="bg-arven-darker/50 border border-arven-magenta/20 rounded-lg p-8 hover:border-arven-magenta/50 transition-all">
              <div className="flex items-center justify-center w-12 h-12 bg-arven-magenta/20 rounded-lg mb-6">
                <span className="text-2xl font-montserrat font-bold text-arven-magenta">1</span>
              </div>
              <h3 className="text-2xl font-montserrat font-bold mb-4">
                <span className="text-arven-cyan">EVALUATION</span>
              </h3>
              <p className="text-arven-text-tertiary">
                You provide basic information: company size, industry, AI tools used, privacy policy status.
              </p>
            </div>

            {/* Module 2: AUDIT */}
            <div className="bg-arven-darker/50 border border-arven-magenta/20 rounded-lg p-8 hover:border-arven-magenta/50 transition-all">
              <div className="flex items-center justify-center w-12 h-12 bg-arven-magenta/20 rounded-lg mb-6">
                <span className="text-2xl font-montserrat font-bold text-arven-magenta">2</span>
              </div>
              <h3 className="text-2xl font-montserrat font-bold mb-4">
                <span className="text-arven-cyan">AUDIT</span>
              </h3>
              <p className="text-arven-text-tertiary">
                Platform checks against 8 GDPR checkpoints (RoPA, legal basis, DPA with subprocessors, etc.) and EU AI Act risk classification.
              </p>
            </div>

            {/* Module 3: REMEDIATION */}
            <div className="bg-arven-darker/50 border border-arven-magenta/20 rounded-lg p-8 hover:border-arven-magenta/50 transition-all">
              <div className="flex items-center justify-center w-12 h-12 bg-arven-magenta/20 rounded-lg mb-6">
                <span className="text-2xl font-montserrat font-bold text-arven-magenta">3</span>
              </div>
              <h3 className="text-2xl font-montserrat font-bold mb-4">
                <span className="text-arven-cyan">REMEDIATION</span>
              </h3>
              <p className="text-arven-text-tertiary">
                Receive actionable report: specific gaps, priorities, and recommendations for fixing them.
              </p>
            </div>
          </div>

          {/* Supported Frameworks */}
          <div className="mt-16 bg-arven-darker/50 border border-arven-cyan/20 rounded-lg p-8">
            <h3 className="text-2xl font-montserrat font-bold mb-6 text-arven-cyan">
              Supported Frameworks
            </h3>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="flex items-center gap-3">
                <CheckCircle size={20} className="text-arven-green" />
                <span>GDPR (EU 2016/679)</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle size={20} className="text-arven-green" />
                <span>EU AI Act (EU 2024/1689)</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle size={20} className="text-arven-green" />
                <span>DSA (Digital Services Act)</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle size={20} className="text-arven-green" />
                <span>NIS2 (Network Security)</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle size={20} className="text-arven-green" />
                <span>DORA (Digital Operational Resilience)</span>
              </div>
            </div>
          </div>
        className="section-gradient-1 py-20 px-4"

      </section>

      {/* SECTION 4: HONEST STATUS */}
      <section id="status" className="py-20 px-4 bg-arven-darker/50">
        <div className="container max-w-3xl mx-auto">
          <h2 className="text-4xl font-montserrat font-bold mb-8 text-center">
            We're at the Beginning —
            <span className="block text-arven-cyan">And We're Honest About It</span>
          </h2>

          <div className="bg-arven-bg/50 border-l-4 border-arven-magenta rounded-lg p-8">
            <p className="text-lg text-arven-text-secondary leading-relaxed mb-6">
              ARVEN PLATFORM is in early development (TRL 1-2: research &amp; proof-of-concept). We're not launching a "production-ready" product. We're inviting first companies into a pilot program to test methodology, collect feedback, and build the final product based on real-world data.
            </p>
            <p className="text-arven-text-tertiary">
              If you're skeptical of "disruptive" claims — good. We are too. We'd rather be honest about where we are than oversell where we're going.
            </p>
          </div>
        className="section-gradient-4 py-20 px-4"

      </section>

      {/* SECTION 5: PILOT PROGRAM */}
      <section id="pilot-program" className="py-20 px-4">
        <div className="container max-w-3xl mx-auto">
          <h2 className="text-4xl font-montserrat font-bold mb-12 text-center">
            Pilot Program
          </h2>

          <div className="space-y-6">
            <div className="bg-arven-darker/50 border border-arven-magenta/20 rounded-lg p-8">
              <h3 className="text-2xl font-montserrat font-bold mb-4 text-arven-magenta">
                Why Join?
              </h3>
              <ul className="space-y-3 text-arven-text-tertiary">
                <li className="flex gap-3">
                  <CheckCircle size={20} className="text-arven-green flex-shrink-0 mt-0.5" />
                  <span>Free or heavily discounted audit in exchange for feedback</span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle size={20} className="text-arven-green flex-shrink-0 mt-0.5" />
                  <span>Shape the product — your input directly influences the final platform</span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle size={20} className="text-arven-green flex-shrink-0 mt-0.5" />
                  <span>Get a compliance roadmap before anyone else</span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle size={20} className="text-arven-green flex-shrink-0 mt-0.5" />
                  <span>Preferential pricing when we launch</span>
                </li>
              </ul>
            </div>

            <div className="bg-arven-darker/50 border border-arven-cyan/20 rounded-lg p-8">
              <h3 className="text-2xl font-montserrat font-bold mb-4 text-arven-cyan">
                What We Ask
              </h3>
              <ul className="space-y-3 text-arven-text-tertiary">
                <li>Honest feedback on the audit process and results</li>
                <li>Permission to use anonymized findings in case studies (we ask, you decide)</li>
                <li>30 min feedback call after receiving your report</li>
              </ul>
            </div>

            <div className="bg-arven-darker/50 border border-arven-green/20 rounded-lg p-8">
              <h3 className="text-2xl font-montserrat font-bold mb-4 text-arven-green">
                Timeline
              </h3>
              <p className="text-arven-text-tertiary mb-4">
                Pilot phases: Q4 2026 (first 10 companies) → Q1 2027 (next 25) → Q2 2027 (scale to 100+).
              </p>
              <p className="text-sm text-arven-text-tertiary italic">
                We're transparent about delays, learnings, and changes as we go.
              </p>
            </div>
          className="section-gradient-2 py-20 px-4"

        </div>
      </section>
        <div className="section-divider"></div>


      {/* SECTION 6: ABOUT */}
      <section id="about" className="py-20 px-4 bg-arven-darker/50">
        <div className="container max-w-3xl mx-auto">
          <h2 className="text-4xl font-montserrat font-bold mb-8 text-center">
            About ARVEN
          </h2>

          <div className="bg-arven-bg/50 border border-arven-magenta/20 rounded-lg p-8">
            <p className="text-lg text-arven-text-secondary mb-6">
              ARVEN PLATFORM is developed by a team with expertise in AI engineering, GDPR consulting, and B2B product development.
            </p>
            <p className="text-arven-text-tertiary mb-4">
              We built this because we saw the gap: large enterprises have compliance teams and expensive tools. SMEs are left either paying too much for consultants or ignoring regulations until a problem occurs.
            </p>
            <p className="text-arven-text-tertiary">
              Our goal: make compliance automation accessible, honest, and actually useful for companies our size.
            className="section-gradient-3 py-20 px-4"

          </div>
        </div>
      </section>
        <div className="section-divider"></div>


      {/* SECTION 7: PARTNERS */}
      <section id="partners" className="py-20 px-4">
        <div className="container max-w-3xl mx-auto">
          <h2 className="text-4xl font-montserrat font-bold mb-12 text-center">
            Partners
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {/* COVENT TECH */}
            <div className="bg-arven-darker/50 border border-arven-cyan/20 rounded-lg p-8">
              <h3 className="text-2xl font-montserrat font-bold mb-4 text-arven-cyan">
                COVENT TECH
              </h3>
              <p className="text-arven-text-tertiary mb-4">
                Poland-based partner driving European market expansion and operational delivery.
              </p>
              <p className="text-sm text-arven-text-tertiary">
                <strong>Contact:</strong> Igor Melnyk
              </p>
            </div>

            {/* INTITA */}
            <div className="bg-arven-darker/50 border border-arven-magenta/20 rounded-lg p-8">
              <h3 className="text-2xl font-montserrat font-bold mb-4 text-arven-magenta">
                INTITA — Vinnytsia Technological University
              </h3>
              <p className="text-arven-text-tertiary mb-4">
                Research partner providing methodology validation and scientific rigor.
              </p>
              <p className="text-sm text-arven-text-tertiary">
                <strong>Contact:</strong> Roman Melnyk, Rector
              className="section-gradient-4 py-20 px-4"

            </div>
          </div>
        </div>
      </section>
        <div className="section-divider"></div>


      {/* SECTION 8: CTA + CONTACT */}
      <section id="contact" className="py-20 px-4 bg-arven-darker/50">
        <div className="container max-w-3xl mx-auto">
          <h2 className="text-4xl font-montserrat font-bold mb-12 text-center">
            Ready to Assess Your Compliance?
          </h2>

          <div className="bg-arven-bg/50 border border-arven-magenta/20 rounded-lg p-8 mb-8">
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-montserrat font-semibold mb-2">
                  Company Name
                </label>
                <input
                  type="text"
                  placeholder="Your company"
                  className="w-full"
                />
              </div>

              <div>
                <label className="block text-sm font-montserrat font-semibold mb-2">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="you@company.com"
                  className="w-full"
                />
              </div>

              <div>
                <label className="block text-sm font-montserrat font-semibold mb-2">
                  Message
                </label>
                <textarea
                  placeholder="Tell us about your business and compliance questions"
                  rows={5}
                  className="w-full"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full px-6 py-4 bg-arven-magenta text-arven-bg font-montserrat font-semibold rounded-lg hover:bg-arven-cyan hover:text-arven-bg transition-all"
              >
                Request Pilot Audit
              </button>
            </form>
          </div>

          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div>
              <p className="text-sm text-arven-text-tertiary mb-2">Email</p>
              <a href="mailto:hello@arvend.io" className="text-arven-magenta font-montserrat font-semibold hover:text-arven-cyan transition-colors">
                hello@arvend.io
              </a>
            </div>
            <div>
              <p className="text-sm text-arven-text-tertiary mb-2">Phone</p>
              <a href="tel:+380954763406" className="text-arven-magenta font-montserrat font-semibold hover:text-arven-cyan transition-colors">
                +380 (95) 476-34-06
              </a>
            </div>
            <div>
              <p className="text-sm text-arven-text-tertiary mb-2">Telegram</p>
              <a href="https://t.me/arven_agency" target="_blank" rel="noopener noreferrer" className="text-arven-magenta font-montserrat font-semibold hover:text-arven-cyan transition-colors">
                @arven_agency
              </a>
            </div>
          </div>
        </div>
      </section>
        <div className="section-divider"></div>


      <Footer />
    </div>
  )
}
