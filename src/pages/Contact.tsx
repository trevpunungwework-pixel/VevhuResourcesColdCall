import { useState, type FormEvent } from 'react'
import { asset, company, faqs, projects } from '../data'
import { PageHero } from '../layout'

const interests = [
  'Residential stand — Prayer City',
  'Residential stand — Vantage Spitzkop',
  'Commercial stand',
  'House construction / plans',
  'Renovations',
  'Civil works / supply',
  'Mining',
  'Agriculture',
  'Investment partnership',
]

export default function Contact() {
  const [step, setStep] = useState(0)
  const [sent, setSent] = useState(false)
  const [form, setForm] = useState({
    first: '',
    last: '',
    email: '',
    phone: '',
    interest: interests[0],
    project: projects[0].title,
    message: '',
  })

  const set = (k: keyof typeof form, v: string) => setForm((f) => ({ ...f, [k]: v }))

  const submit = (e: FormEvent) => {
    e.preventDefault()
    const payload = { ...form, at: new Date().toISOString() }
    const existing = JSON.parse(localStorage.getItem('vevhu-enquiries') || '[]') as unknown[]
    localStorage.setItem('vevhu-enquiries', JSON.stringify([payload, ...existing]))
    setSent(true)
    const text = `Hello Vevhu Resources, I am ${form.first} ${form.last}. Interest: ${form.interest} (${form.project}). ${form.message} Contact: ${form.phone} ${form.email}`
    window.open(`https://wa.me/${company.whatsapp}?text=${encodeURIComponent(text)}`, '_blank')
  }

  return (
    <main>
      <PageHero
        kicker="Contact"
        title="Have a project in mind?"
        img={asset('/images/invest-today.jpg')}
        lede="The form writes to this browser and opens WhatsApp with your brief. Email still works if you prefer paper."
      />
      <section className="section section-bone">
        <div className="split">
          <div>
            <span className="kicker">Stand & project desk</span>
            <h2 className="display">Tell us what you want to build.</h2>
            <p style={{ marginTop: '1rem', color: 'var(--muted-dark)', maxWidth: '42ch' }}>
              Four steps. We already know the difference between a Prayer City plot and a Spitzkop
              regularisation — you do not have to pretend otherwise.
            </p>
            <div style={{ marginTop: '2rem' }}>
              <p>
                <a href={`mailto:${company.email}`} style={{ color: 'var(--orange)' }}>
                  {company.email}
                </a>
              </p>
              {company.phones.map((p) => (
                <p key={p}>
                  <a href={`tel:${p.replace(/\s/g, '')}`}>{p}</a>
                </p>
              ))}
              <p>WhatsApp {company.whatsappDisplay}</p>
            </div>
          </div>
          <div>
            {sent ? (
              <div className="success">
                <h3 className="display" style={{ fontSize: '2rem' }}>
                  Received.
                </h3>
                <p>
                  WhatsApp should have opened with your message. If it did not, write {company.email}{' '}
                  or call {company.phone}.
                </p>
              </div>
            ) : (
              <form className="form" onSubmit={submit}>
                <div className="steps">
                  {[0, 1, 2, 3].map((n) => (
                    <span key={n} className={step >= n ? 'on' : ''}>
                      {n + 1}
                    </span>
                  ))}
                </div>
                {step === 0 && (
                  <div className="field">
                    <label>What are you here for?</label>
                    <select value={form.interest} onChange={(e) => set('interest', e.target.value)}>
                      {interests.map((i) => (
                        <option key={i}>{i}</option>
                      ))}
                    </select>
                  </div>
                )}
                {step === 1 && (
                  <div className="field">
                    <label>Project</label>
                    <select value={form.project} onChange={(e) => set('project', e.target.value)}>
                      {projects.map((p) => (
                        <option key={p.slug}>{p.title}</option>
                      ))}
                      <option>Other / not sure</option>
                    </select>
                  </div>
                )}
                {step === 2 && (
                  <>
                    <div className="form-row">
                      <div className="field">
                        <label>First name</label>
                        <input required value={form.first} onChange={(e) => set('first', e.target.value)} />
                      </div>
                      <div className="field">
                        <label>Last name</label>
                        <input required value={form.last} onChange={(e) => set('last', e.target.value)} />
                      </div>
                    </div>
                    <div className="form-row">
                      <div className="field">
                        <label>Email</label>
                        <input
                          required
                          type="email"
                          value={form.email}
                          onChange={(e) => set('email', e.target.value)}
                        />
                      </div>
                      <div className="field">
                        <label>Phone</label>
                        <input required value={form.phone} onChange={(e) => set('phone', e.target.value)} />
                      </div>
                    </div>
                  </>
                )}
                {step === 3 && (
                  <div className="field">
                    <label>Anything we should know</label>
                    <textarea
                      value={form.message}
                      onChange={(e) => set('message', e.target.value)}
                      placeholder="Plot size, budget, timeline…"
                    />
                  </div>
                )}
                <div style={{ display: 'flex', gap: '0.7rem', marginTop: '0.6rem' }}>
                  {step > 0 ? (
                    <button type="button" className="btn btn-ghost" style={{ color: '#141210', boxShadow: 'inset 0 0 0 1px #141210' }} onClick={() => setStep((s) => s - 1)}>
                      Back
                    </button>
                  ) : null}
                  {step < 3 ? (
                    <button type="button" className="btn btn-dark" onClick={() => setStep((s) => s + 1)}>
                      Continue
                    </button>
                  ) : (
                    <button type="submit" className="btn btn-fill">
                      Send on WhatsApp
                    </button>
                  )}
                </div>
              </form>
            )}
          </div>
        </div>
      </section>
      <section className="section section-paper">
        <div className="split">
          <div>
            <h4 style={{ fontFamily: 'var(--display)', letterSpacing: '0.16em', textTransform: 'uppercase' }}>
              {company.hq.title}
            </h4>
            {company.hq.lines.map((l) => (
              <p key={l}>{l}</p>
            ))}
          </div>
          <div>
            <h4 style={{ fontFamily: 'var(--display)', letterSpacing: '0.16em', textTransform: 'uppercase' }}>
              {company.sales.title}
            </h4>
            {company.sales.lines.map((l) => (
              <p key={l}>{l}</p>
            ))}
          </div>
        </div>
        <iframe
          className="map-frame"
          title="Belvedere office"
          src="https://maps.google.com/maps?q=257%20Samora%20Machel%20Avenue%20Belvedere%20Harare&t=&z=16&ie=UTF8&iwloc=&output=embed"
          style={{ marginTop: '2rem' }}
        />
      </section>
      <section className="section section-bone">
        <span className="kicker">FAQ</span>
        <div className="faq">
          {faqs.map((f) => (
            <details key={f.q}>
              <summary>{f.q}</summary>
              <p>{f.a}</p>
            </details>
          ))}
        </div>
      </section>
    </main>
  )
}
