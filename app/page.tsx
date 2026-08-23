'use client'

import Navigation from '@0/components/Navigation'
import Footer from '@0/components/Footer'
import { CheckCircle, AlertCircle, BarChart3, Users, Lock } from 'lucide-react'

export default function Home() {
  return (
    <div className="min-h-screen bg-arven-bg">
      <Navigation />

      {/* SECTION 1: HERO */}
      <section className="section-gradient-1 pt-32 pb-20 px-4">
        <div className="container max-w-4xl mx-auto">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-montserrat font-bold">
              <span className="text-arven-magenta">ARVEN</span>
              <br />
              <span className="text-arven-cyan">GDPR & EU AI Act</span>
            </h1>
            <p className="text-xl text-arven-text-tertiary mt-6">
              Automated compliance assessment for SMEs. Provide data about your company — get a structured report on risks and gaps without expensive consultants.
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center mt-8">
              <button className="px-8 py-4 bg-arven-magenta text-white font-medium hover:opacity-90">
                Get Pilot Audit
              </button>
              <button className="px-8 py-4 border-2 border-arven-magenta text-arven-magenta font-medium hover:bg-arven-magenta/10">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>

      <div className="section-divider"></div>

      {/* SECTION 2: WHY IT MATTERS */}
      <section className="section-gradient-2 py-20 px-4">
        <div className="container max-w-4xl mx-auto">
          <h2 className="text-4xl font-montserrat font-bold">
            Why This Matters
            <span className="block text-arven-cyan text-2xl mt-2">Right Now</span>
          </h2>

          <div className="space-y-6 mt-12">
            <div className="bg-arven-bg/50 border border-arven-magenta/20 p-6">
              <div className="flex gap-4 mb-4">
                <AlertCircle className="text-arven-red flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-montserrat font-bold">
                    EU AI Act Requirements
                  </h3>
                  <p className="text-arven-text-tertiary mt-2">
                    Since August 2026, EU AI Act articles 50 (transparency) and 4 (AI literacy) are in effect. If you use AI tools — which most SMEs do — you must disclose it and ensure staff understand AI use.
                  </p>
                  <p className="text-sm text-arven-cyan mt-2">
                    Source: <a href="https://eur-lex.europa.eu/" className="underline">EU AI Act (Official Journal)</a>
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-arven-bg/50 border border-arven-magenta/20 p-6">
              <div className="flex gap-4 mb-4">
                <AlertCircle className="text-arven-red flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-montserrat font-bold">
                    GDPR Enforcement is Serious
                  </h3>
                  <p className="text-arven-text-tertiary mt-2">
                    Total GDPR fines in the EU reached €1.145 billion in 2025. Average fine for SMEs: €20K–€50K. Enterprise compliance solutions (OneTrust, TrustArc) cost €30K+/year.
                  </p>
                  <p className="text-sm text-arven-cyan mt-2">
                    Source: <a href="https://www.edpb.eu/" className="underline">EDPB Annual Report</a>
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-arven-bg/50 border border-arven-magenta/20 p-6">
              <div className="flex gap-4 mb-4">
                <AlertCircle className="text-arven-red flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-montserrat font-bold">
                    Compliance Consultants are Expensive
                  </h3>
                  <p className="text-arven-text-tertiary mt-2">
                    Most compliance consultants charge €150–€500/hour. A basic audit takes 40–60 hours = €6K–€30K. Many SMEs can't justify the cost, so they skip compliance entirely and hope.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="section-divider"></div>

      {/* SECTION 3: HOW IT WORKS */}
      <section id="how-it-works" className="section-gradient-3 py-20 px-4">
        <div className="container max-w-4xl mx-auto">
          <h2 className="text-4xl font-montserrat font-bold">
            How ARVEN PLATFORM Works
          </h2>

          <div className="grid md:grid-cols-3 gap-8 mt-12">
            {/* Module 1: EVALUATION */}
            <div className="bg-arven-darker/50 border border-arven-magenta/20 p-6">
              <div className="flex items-center justify-center mb-4">
                <span className="text-2xl font-montserrat font-bold">1</span>
              </div>
              <h3 className="text-2xl font-montserrat font-bold">
                <span className="text-arven-cyan">EVALUATION</span>
              </h3>
              <p className="text-arven-text-tertiary mt-4">
                You provide basic information: company size, industry, data types, AI tools used, staff count, current compliance efforts.
              </p>
            </div>

            {/* Module 2: AUDIT */}
            <div className="bg-arven-darker/50 border border-arven-magenta/20 p-6">
              <div className="flex items-center justify-center mb-4">
                <span className="text-2xl font-montserrat font-bold">2</span>
              </div>
              <h3 className="text-2xl font-montserrat font-bold">
                <span className="text-arven-cyan">AUDIT</span>
              </h3>
              <p className="text-arven-text-tertiary mt-4">
                Platform checks against 8 GDPR checkpoints, 5 EU AI Act articles (50, 4, 37, 38, 40), and NIS2 baseline controls. Zero consultants involved.
              </p>
            </div>

            {/* Module 3: REMEDIATION */}
            <div className="bg-arven-darker/50 border border-arven-magenta/20 p-6">
              <div className="flex items-center justify-center mb-4">
                <span className="text-2xl font-montserrat font-bold">3</span>
              </div>
              <h3 className="text-2xl font-montserrat font-bold">
                <span className="text-arven-cyan">REMEDIATION</span>
              </h3>
              <p className="text-arven-text-tertiary mt-4">
                Receive actionable report: specific gaps, ranked by risk, with step-by-step remediation templates. Compliance roadmap included.
              </p>
            </div>
          </div>

          {/* Supported Frameworks */}
          <div className="mt-16 bg-arven-darker/50 border-l-4 border-arven-magenta p-8">
            <h3 className="text-2xl font-montserrat font-bold">
              Supported Frameworks
            </h3>
            <div className="grid md:grid-cols-3 gap-4 mt-8">
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
        </div>
      </section>

      <div className="section-divider"></div>

      {/* SECTION 4: HONEST STATUS */}
      <section id="status" className="section-gradient-1 py-20 px-4">
        <div className="container max-w-4xl mx-auto">
          <h2 className="text-4xl font-montserrat font-bold">
            We're at the Beginning —
            <span className="block text-arven-cyan">And We're Transparent</span>
          </h2>

          <div className="bg-arven-bg/50 border border-arven-magenta/20 p-6 mt-8">
            <p className="text-lg text-arven-text-secondary">
              ARVEN PLATFORM is in early development (TRL 4 — validated platform). We're not "production-ready." We're honest about it.
            </p>
            <p className="text-arven-text-tertiary mt-4">
              If you're skeptical of "disruptive" AI claims — good. We don't use that language. We're building infrastructure for compliance, not hype.
            </p>
          </div>
        </div>
      </section>

      <div className="section-divider"></div>

      {/* SECTION 5: PILOT PROGRAM */}
      <section id="pilot-program" className="section-gradient-4 py-20 px-4">
        <div className="container max-w-4xl mx-auto">
          <h2 className="text-4xl font-montserrat font-bold">
            Pilot Program
          </h2>

          <div className="space-y-6 mt-12">
            <div className="bg-arven-darker/50 border border-arven-magenta/20 p-6">
              <h3 className="text-2xl font-montserrat font-bold">
                Why Join?
              </h3>
              <ul className="space-y-3 text-arven-text-tertiary mt-4">
                <li className="flex gap-3">
                  <CheckCircle size={20} className="text-arven-green flex-shrink-0" />
                  <span>Free or heavily discounted audit in Q4 2026</span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle size={20} className="text-arven-green flex-shrink-0" />
                  <span>Shape the product — your input directs development</span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle size={20} className="text-arven-green flex-shrink-0" />
                  <span>Get a compliance roadmap before any competitor</span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle size={20} className="text-arven-green flex-shrink-0" />
                  <span>Preferential pricing when we launch</span>
                </li>
              </ul>
            </div>

            <div className="bg-arven-darker/50 border border-arven-magenta/20 p-6">
              <h3 className="text-2xl font-montserrat font-bold">
                What We Ask
              </h3>
              <ul className="space-y-3 text-arven-text-tertiary mt-4">
                <li>Honest feedback on the audit process and report clarity</li>
                <li>Permission to use anonymized findings in case studies</li>
                <li>30 min feedback call after receiving your report</li>
              </ul>
            </div>

            <div className="bg-arven-darker/50 border border-arven-magenta/20 p-6">
              <h3 className="text-2xl font-montserrat font-bold">
                Timeline
              </h3>
              <p className="text-arven-text-tertiary mt-4">
                Pilot phases: Q4 2026 (first 10 companies)
              </p>
              <p className="text-sm text-arven-cyan mt-2">
                We're transparent about delays, learnings, and roadmap changes.
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="section-divider"></div>

      {/* SECTION 6: ABOUT */}
      <section id="about" className="section-gradient-2 py-20 px-4">
        <div className="container max-w-4xl mx-auto">
          <h2 className="text-4xl font-montserrat font-bold">
            About ARVEN
          </h2>

          <div className="bg-arven-bg/50 border border-arven-magenta/20 p-6 mt-8">
            <p className="text-lg text-arven-text-secondary">
              ARVEN PLATFORM is developed by a team with experience in compliance infrastructure, EU policy, and autonomous systems. We built this because we saw the gap: large consultancies charge too much; DIY compliance tools are scattered and unreliable.
            </p>
            <p className="text-arven-text-tertiary mt-4">
              We built this because we saw the gap: large consultancies charge too much; DIY compliance tools are scattered and unreliable.
            </p>
            <p className="text-arven-text-tertiary mt-4">
              Our goal: make compliance automation accessible to SMEs.
            </p>
          </div>
        </div>
      </section>

      <div className="section-divider"></div>

      {/* SECTION 7: PARTNERS */}
      <section id="partners" className="section-gradient-3 py-20 px-4">
        <div className="container max-w-4xl mx-auto">
          <h2 className="text-4xl font-montserrat font-bold">
            Partners
          </h2>

          <div className="grid md:grid-cols-2 gap-8 mt-12">
            {/* COVENT TECH */}
            <div className="bg-arven-darker/50 border border-arven-magenta/20 p-6">
              <h3 className="text-2xl font-montserrat font-bold">
                COVENT TECH
              </h3>
              <p className="text-arven-text-tertiary mb-4 mt-2">
                Poland-based partner driving European market development and commercial licensing
              </p>
              <p className="text-sm text-arven-text-tertiary">
                <strong>Contact:</strong> Igor Melnyk
              </p>
            </div>

            {/* INTITA */}
            <div className="bg-arven-darker/50 border border-arven-magenta/20 p-6">
              <h3 className="text-2xl font-montserrat font-bold">
                INTITA — Vinnytsia Technological University
              </h3>
              <p className="text-arven-text-tertiary mb-4 mt-2">
                Research partner providing methodology validation and academic rigor
              </p>
              <p className="text-sm text-arven-text-tertiary">
                <strong>Contact:</strong> Roman Melnyk, Rector
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="section-divider"></div>

      {/* SECTION 8: CTA + CONTACT */}
      <section id="contact" className="section-gradient-4 py-20 px-4">
        <div className="container max-w-4xl mx-auto">
          <h2 className="text-4xl font-montserrat font-bold">
            Ready to Assess Your Compliance?
          </h2>

          <div className="bg-arven-bg/50 border border-arven-magenta/20 p-8 mt-8">
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-montserrat mb-2">
                  Company Name
                </label>
                <input
                  type="text"
                  placeholder="Your company"
                  className="w-full px-4 py-2 bg-arven-bg border border-arven-magenta/30 text-white placeholder:text-arven-text-tertiary focus:outline-none focus:border-arven-magenta"
                />
              </div>

              <div>
                <label className="block text-sm font-montserrat mb-2">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="you@company.com"
                  className="w-full px-4 py-2 bg-arven-bg border border-arven-magenta/30 text-white placeholder:text-arven-text-tertiary focus:outline-none focus:border-arven-magenta"
                />
              </div>

              <div>
                <label className="block text-sm font-montserrat mb-2">
                  Message
                </label>
                <textarea
                  placeholder="Tell us about your business"
                  rows={5}
                  className="w-full px-4 py-2 bg-arven-bg border border-arven-magenta/30 text-white placeholder:text-arven-text-tertiary focus:outline-none focus:border-arven-magenta"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full px-6 py-4 bg-arven-magenta text-white font-montserrat font-bold hover:opacity-90"
              >
                Request Pilot Audit
              </button>
            </form>
          </div>

          <div className="grid md:grid-cols-3 gap-6 text-center mt-12">
            <div>
              <p className="text-sm text-arven-text-tertiary">
                <a href="mailto:hello@arvend.io" className="text-arven-magenta hover:underline">
                  hello@arvend.io
                </a>
              </p>
            </div>

            <div>
              <p className="text-sm text-arven-text-tertiary">
                <a href="tel:+380954763406" className="text-arven-magenta hover:underline">
                  +380 (95) 476-34-06
                </a>
              </p>
            </div>

            <div>
              <p className="text-sm text-arven-text-tertiary">
                <a href="https://t.me/arven_agency" target="_blank" className="text-arven-magenta hover:underline">
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
