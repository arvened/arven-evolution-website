'use client'

import { CheckCircle, AlertCircle, BarChart3, Shield, Zap, Lock, Eye, Code, Calendar } from 'lucide-react'

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
