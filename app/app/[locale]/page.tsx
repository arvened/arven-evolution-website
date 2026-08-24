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
