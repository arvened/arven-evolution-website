'use client'

import { useTranslations } from 'next-intl'
import { CheckCircle, AlertCircle, BarChart3, Shield, Calendar } from 'lucide-react'

export default function Home() {
  const t = useTranslations()

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
              {t('hero.subtitle')}
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center mt-12">
              <button className="px-8 py-4 bg-arven-magenta text-white rounded-lg hover:bg-opacity-80 transition">
                {t('hero.cta_primary')}
              </button>
              <button className="px-8 py-4 border border-arven-cyan text-arven-cyan rounded-lg hover:bg-arven-cyan hover:text-arven-bg transition">
                {t('hero.cta_secondary')}
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
            {t('why.title')}
          </h2>

          <div className="space-y-8">
            <div className="bg-gradient-to-br from-arven-red/10 to-arven-red/5 border-l-4 border-arven-red rounded-lg p-8">
              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <AlertCircle className="text-arven-red" size={32} />
                </div>
                <div className="flex-grow">
                  <h3 className="text-2xl font-montserrat font-bold mb-3 text-white">{t('why.ai_act_title')}</h3>
                  <p className="text-arven-text-secondary text-lg leading-relaxed mb-3">
                    {t('why.ai_act_desc')}
                  </p>
                  <p className="text-sm text-arven-text-tertiary">
                    <a href="https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32024L1689" className="text-arven-cyan hover:underline font-semibold">{t('why.ai_act_source')}</a>
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
                  <h3 className="text-2xl font-montserrat font-bold mb-3 text-white">{t('why.gdpr_title')}</h3>
                  <p className="text-arven-text-secondary text-lg leading-relaxed mb-2">
                    {t('why.gdpr_desc')}
                  </p>
                  <p className="text-sm text-arven-text-tertiary">
                    <a href="https://www.edpb.europa.eu/" className="text-arven-cyan hover:underline font-semibold">{t('why.gdpr_source')}</a>
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-arven-cyan/10 to-transparent border-l-4 border-arven-cyan rounded-lg p-8">
              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <Shield className="text-arven-cyan" size={32} />
                </div>
                <div className="flex-grow">
                  <h3 className="text-2xl font-montserrat font-bold mb-3 text-white">{t('why.expensive_title')}</h3>
                  <p className="text-arven-text-secondary text-lg leading-relaxed">
                    {t('why.expensive_desc')}
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
            {t('how.title')}
          </h2>

          <div className="grid md:grid-cols-3 gap-6 mt-12 mb-8">
            <div className="relative bg-gradient-to-b from-arven-cyan/15 to-arven-cyan/5 border-2 border-arven-cyan/50 rounded-lg p-8 hover:border-arven-cyan transition">
              <div className="absolute -top-5 left-1/2 -translate-x-1/2 w-10 h-10 bg-arven-cyan rounded-full flex items-center justify-center">
                <span className="text-lg font-montserrat font-bold text-arven-bg">1</span>
              </div>
              <h3 className="text-xl font-montserrat font-bold text-center mb-4 mt-4 text-arven-cyan">
                {t('how.step1_title')}
              </h3>
              <p className="text-arven-text-secondary text-center text-sm leading-relaxed">
                {t('how.step1_desc')}
              </p>
            </div>

            <div className="relative bg-gradient-to-b from-arven-magenta/15 to-arven-magenta/5 border-2 border-arven-magenta/50 rounded-lg p-8 hover:border-arven-magenta transition">
              <div className="absolute -top-5 left-1/2 -translate-x-1/2 w-10 h-10 bg-arven-magenta rounded-full flex items-center justify-center">
                <span className="text-lg font-montserrat font-bold text-arven-bg">2</span>
              </div>
              <h3 className="text-xl font-montserrat font-bold text-center mb-4 mt-4 text-arven-magenta">
                {t('how.step2_title')}
              </h3>
              <p className="text-arven-text-secondary text-center text-sm leading-relaxed">
                {t('how.step2_desc')}
              </p>
            </div>

            <div className="relative bg-gradient-to-b from-arven-green/15 to-arven-green/5 border-2 border-arven-green/50 rounded-lg p-8 hover:border-arven-green transition">
              <div className="absolute -top-5 left-1/2 -translate-x-1/2 w-10 h-10 bg-arven-green rounded-full flex items-center justify-center">
                <span className="text-lg font-montserrat font-bold text-arven-bg">3</span>
              </div>
              <h3 className="text-xl font-montserrat font-bold text-center mb-4 mt-4 text-arven-green">
                {t('how.step3_title')}
              </h3>
              <p className="text-arven-text-secondary text-center text-sm leading-relaxed">
                {t('how.step3_desc')}
              </p>
            </div>
          </div>

          <div className="mt-12 bg-gradient-to-br from-arven-green/10 to-arven-green/5 border-2 border-arven-green/40 rounded-lg p-10">
            <h3 className="text-2xl font-montserrat font-bold text-center mb-8 text-arven-green">
              ✓ {t('how.frameworks_title')}
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="flex items-start gap-4 p-3 rounded bg-arven-darker/40 border border-arven-green/20">
                <CheckCircle size={24} className="text-arven-green flex-shrink-0 mt-1" />
                <div>
                  <div className="font-semibold">{t('how.gdpr_law')}</div>
                  <div className="text-xs text-arven-text-tertiary">{t('how.gdpr_law_desc')}</div>
                </div>
              </div>
              <div className="flex items-start gap-4 p-3 rounded bg-arven-darker/40 border border-arven-green/20">
                <CheckCircle size={24} className="text-arven-green flex-shrink-0 mt-1" />
                <div>
                  <div className="font-semibold">{t('how.ai_act_law')}</div>
                  <div className="text-xs text-arven-text-tertiary">{t('how.ai_act_law_desc')}</div>
                </div>
              </div>
              <div className="flex items-start gap-4 p-3 rounded bg-arven-darker/40 border border-arven-green/20">
                <CheckCircle size={24} className="text-arven-green flex-shrink-0 mt-1" />
                <div>
                  <div className="font-semibold">{t('how.dsa')}</div>
                  <div className="text-xs text-arven-text-tertiary">{t('how.dsa_desc')}</div>
                </div>
              </div>
              <div className="flex items-start gap-4 p-3 rounded bg-arven-darker/40 border border-arven-green/20">
                <CheckCircle size={24} className="text-arven-green flex-shrink-0 mt-1" />
                <div>
                  <div className="font-semibold">{t('how.nis2')}</div>
                  <div className="text-xs text-arven-text-tertiary">{t('how.nis2_desc')}</div>
                </div>
              </div>
              <div className="flex items-start gap-4 p-3 rounded bg-arven-darker/40 border border-arven-green/20 md:col-span-2">
                <CheckCircle size={24} className="text-arven-green flex-shrink-0 mt-1" />
                <div>
                  <div className="font-semibold">{t('how.dora')}</div>
                  <div className="text-xs text-arven-text-tertiary">{t('how.dora_desc')}</div>
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
            {t('status.title')}
          </h2>
          <div className="bg-arven-bg/50 border border-arven-magenta/20 rounded-lg p-8">
            <p className="text-lg text-arven-text-secondary">
              {t('status.text1')}
            </p>
            <p className="text-arven-text-tertiary mt-4">
              {t('status.text2')}
            </p>
          </div>
        </div>
      </section>

      <div className="section-divider"></div>

      {/* SECTION 5: PILOT PROGRAM */}
      <section id="pilot-program" className="section-gradient-1 py-16 md:py-24">
        <div className="container max-w-4xl mx-auto">
          <h2 className="text-4xl font-montserrat font-bold text-center text-gold-glow mb-16">
            {t('pilot.title')}
          </h2>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="bg-gradient-to-b from-arven-darker to-arven-darker/60 border-2 border-arven-green/40 rounded-lg p-8">
              <h3 className="text-2xl font-montserrat font-bold mb-6 text-arven-green">
                ✓ {t('pilot.why_join_title')}
              </h3>
              <ul className="space-y-4">
                <li className="flex gap-3 pb-3 border-b border-arven-green/20">
                  <CheckCircle size={22} className="text-arven-green flex-shrink-0 mt-1" />
                  <span className="text-arven-text-secondary">
                    <strong>{t('pilot.join1_title')}</strong><br/>
                    <span className="text-sm">{t('pilot.join1_desc')}</span>
                  </span>
                </li>
                <li className="flex gap-3 pb-3 border-b border-arven-green/20">
                  <CheckCircle size={22} className="text-arven-green flex-shrink-0 mt-1" />
                  <span className="text-arven-text-secondary">
                    <strong>{t('pilot.join2_title')}</strong><br/>
                    <span className="text-sm">{t('pilot.join2_desc')}</span>
                  </span>
                </li>
                <li className="flex gap-3 pb-3 border-b border-arven-green/20">
                  <CheckCircle size={22} className="text-arven-green flex-shrink-0 mt-1" />
                  <span className="text-arven-text-secondary">
                    <strong>{t('pilot.join3_title')}</strong><br/>
                    <span className="text-sm">{t('pilot.join3_desc')}</span>
                  </span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle size={22} className="text-arven-green flex-shrink-0 mt-1" />
                  <span className="text-arven-text-secondary">
                    <strong>{t('pilot.join4_title')}</strong><br/>
                    <span className="text-sm">{t('pilot.join4_desc')}</span>
                  </span>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-arven-darker to-arven-darker/60 border-2 border-arven-magenta/40 rounded-lg p-8">
              <h3 className="text-2xl font-montserrat font-bold mb-6 text-arven-magenta">
                ? {t('pilot.ask_title')}
              </h3>
              <ul className="space-y-4">
                <li className="flex gap-3 pb-3 border-b border-arven-magenta/20">
                  <AlertCircle size={22} className="text-arven-magenta flex-shrink-0 mt-1" />
                  <span className="text-arven-text-secondary">
                    <strong>{t('pilot.ask1_title')}</strong><br/>
                    <span className="text-sm">{t('pilot.ask1_desc')}</span>
                  </span>
                </li>
                <li className="flex gap-3 pb-3 border-b border-arven-magenta/20">
                  <AlertCircle size={22} className="text-arven-magenta flex-shrink-0 mt-1" />
                  <span className="text-arven-text-secondary">
                    <strong>{t('pilot.ask2_title')}</strong><br/>
                    <span className="text-sm">{t('pilot.ask2_desc')}</span>
                  </span>
                </li>
                <li className="flex gap-3">
                  <AlertCircle size={22} className="text-arven-magenta flex-shrink-0 mt-1" />
                  <span className="text-arven-text-secondary">
                    <strong>{t('pilot.ask3_title')}</strong><br/>
                    <span className="text-sm">{t('pilot.ask3_desc')}</span>
                  </span>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-gradient-to-r from-arven-cyan/10 to-transparent border-l-4 border-arven-cyan rounded-lg p-8">
            <div className="flex items-center gap-3 mb-4">
              <Calendar className="text-arven-cyan" size={24} />
              <h3 className="text-2xl font-montserrat font-bold text-arven-cyan">
                {t('pilot.timeline_title')}
              </h3>
            </div>
            <div className="space-y-2 text-arven-text-secondary text-lg">
              <p><strong>{t('pilot.timeline_q4')}</strong> {t('pilot.timeline_q4_desc')}</p>
              <p><strong>{t('pilot.timeline_q1')}</strong> {t('pilot.timeline_q1_desc')}</p>
              <p><strong>{t('pilot.timeline_q2')}</strong> {t('pilot.timeline_q2_desc')}</p>
            </div>
            <p className="text-sm text-arven-text-tertiary mt-4 pt-4 border-t border-arven-cyan/20">
              {t('pilot.transparency')}
            </p>
          </div>
        </div>
      </section>

      <div className="section-divider"></div>

      {/* SECTION 6: ABOUT */}
      <section id="about" className="section-gradient-2 py-16 md:py-24">
        <div className="container max-w-4xl mx-auto">
          <h2 className="text-4xl font-montserrat font-bold text-center text-gold-glow mb-12">
            {t('about.title')}
          </h2>

          <div className="bg-arven-bg/50 border border-arven-magenta/20 rounded-lg p-8">
            <p className="text-lg text-arven-text-secondary mb-6">
              {t('about.p1')}
            </p>
            <p className="text-arven-text-secondary mb-6">
              {t('about.p2')}
            </p>
            <p className="text-arven-text-secondary">
              {t('about.p3')}
            </p>
          </div>
        </div>
      </section>

      <div className="section-divider"></div>

      {/* SECTION 7: PARTNERS */}
      <section id="partners" className="section-gradient-1 py-16 md:py-24">
        <div className="container max-w-4xl mx-auto">
          <h2 className="text-4xl font-montserrat font-bold text-center text-gold-glow mb-12">
            {t('partners.title')}
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-arven-darker/50 border border-arven-magenta/20 rounded-lg p-6">
              <h3 className="text-2xl font-montserrat font-bold mb-3">
                {t('partners.covent_title')}
              </h3>
              <p className="text-arven-text-secondary mb-4">
                {t('partners.covent_desc')}
              </p>
              <p className="text-sm text-arven-text-tertiary">
                {t('partners.covent_contact')}
              </p>
            </div>

            <div className="bg-arven-darker/50 border border-arven-magenta/20 rounded-lg p-6">
              <h3 className="text-2xl font-montserrat font-bold mb-3">
                {t('partners.intita_title')}
              </h3>
              <p className="text-arven-text-secondary mb-4">
                {t('partners.intita_desc')}
              </p>
              <p className="text-sm text-arven-text-tertiary">
                {t('partners.intita_contact')}
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
            {t('cta.title')}
          </h2>

          <div className="bg-arven-bg/50 border border-arven-magenta/20 rounded-lg p-8">
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-semibold mb-2">
                  {t('cta.company_label')}
                </label>
                <input
                  type="text"
                  placeholder={t('cta.company_placeholder')}
                  className="w-full px-4 py-2 bg-arven-darker/50 border border-arven-magenta/30 text-white rounded-lg focus:border-arven-magenta focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2">
                  {t('cta.email_label')}
                </label>
                <input
                  type="email"
                  placeholder={t('cta.email_placeholder')}
                  className="w-full px-4 py-2 bg-arven-darker/50 border border-arven-magenta/30 text-white rounded-lg focus:border-arven-magenta focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2">
                  {t('cta.message_label')}
                </label>
                <textarea
                  placeholder={t('cta.message_placeholder')}
                  rows={5}
                  className="w-full px-4 py-2 bg-arven-darker/50 border border-arven-magenta/30 text-white rounded-lg focus:border-arven-magenta focus:outline-none"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full px-6 py-4 bg-arven-magenta text-white rounded-lg hover:bg-opacity-80 transition font-semibold"
              >
                {t('cta.submit_button')}
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
                  +380 (95) 476-34-06
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

