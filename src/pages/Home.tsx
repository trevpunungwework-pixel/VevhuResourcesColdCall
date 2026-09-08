import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import {
  asset,
  buildChoices,
  company,
  divisions,
  news,
  process,
  projects,
  stats,
} from '../data'
import { Arrow, Magnetic, useLang } from '../layout'

gsap.registerPlugin(ScrollTrigger)

const slides = [
  asset('/images/hero-site.jpg'),
  asset('/images/prayer-city-gate.jpg'),
  asset('/images/aerial-stands.jpg'),
  asset('/images/harare-cbd.jpg'),
]

export default function Home() {
  const { lang } = useLang()
  const [slide, setSlide] = useState(0)

  useEffect(() => {
    const id = window.setInterval(() => setSlide((s) => (s + 1) % slides.length), 5200)
    return () => window.clearInterval(id)
  }, [])

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>('[data-reveal]').forEach((el) => {
        gsap.from(el, {
          y: 40,
          opacity: 0,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: { trigger: el, start: 'top 88%' },
        })
      })
    })
    return () => ctx.revert()
  }, [])

  return (
    <main>
      <section className="hero">
        <div className="hero-slides">
          {slides.map((src, i) => (
            <img key={src} src={src} alt="" className={i === slide ? 'on' : ''} />
          ))}
        </div>
        <div className="hero-veil" />
        <div className="hero-copy">
          <span className="eyebrow">
            {lang === 'sn' ? 'Kubva 2006 · Harare, Zimbabwe' : 'Since 2006 · Harare, Zimbabwe'}
          </span>
          <h1>
            {lang === 'sn' ? 'Kubva pasi' : 'From the'}
            <em>{lang === 'sn' ? 'kusvika' : 'Ground Up'}</em>
          </h1>
          <svg className="underline" viewBox="0 0 280 12" fill="none" aria-hidden="true">
            <path d="M2 8 C60 2, 140 14, 278 5" stroke="#F36E21" strokeWidth="3" />
          </svg>
          <p className="lede">
            {lang === 'sn'
              ? 'Murongi mukuru, mubhadhari uye muvaki — zvivakwa, migodhi nemapurazi, pasi pemukova mumwe.'
              : 'Master planner, financier and developer. Property, construction, civil works, mining and agriculture — one accountable roof over all of it.'}
          </p>
          <div className="hero-actions">
            <Magnetic className="btn btn-fill" to="/projects">
              {lang === 'sn' ? 'Ona mapurojekiti' : 'Browse our projects'} <Arrow />
            </Magnetic>
            <Magnetic className="btn btn-ghost" to="/contact">
              {lang === 'sn' ? 'Nyora chigaro' : 'Apply for a stand'}
            </Magnetic>
          </div>
        </div>
        <div className="scroll-hint">{lang === 'sn' ? 'Donhedza' : 'Scroll'}</div>
      </section>

      <div className="marquee" aria-hidden="true">
        <div className="marquee-track">
          {Array.from({ length: 2 }).map((_, i) => (
            <span key={i}>
              Property <b>/</b> Construction <b>/</b> Civil Works <b>/</b> Mining <b>/</b>{' '}
              Agriculture <b>/</b> Prayer City <b>/</b> Vantage Spitzkop <b>/</b> {company.tagline}{' '}
              <b>/</b>
            </span>
          ))}
        </div>
      </div>

      <section className="chooser">
        {buildChoices.map((c, i) => (
          <Link key={c.id} to={c.to} className="choice">
            <img src={c.img} alt="" />
            <span className="no">0{i + 1}</span>
            <h3>{c.title}</h3>
            <p>{c.copy}</p>
            <span className="btn btn-ghost" style={{ width: 'fit-content', padding: '0.6rem 0.9rem' }}>
              {lang === 'sn' ? 'Enda' : 'Explore'} <Arrow />
            </span>
          </Link>
        ))}
      </section>

      <section className="section section-bone">
        <div className="split" data-reveal>
          <div>
            <span className="kicker">Who we are</span>
            <h2 className="display">A Zimbabwean developer that still answers for the land.</h2>
          </div>
          <p>
            {company.legal} was established in {company.founded}. The model is deliberately
            unglamorous: we master-plan, we finance, we build. Residential and commercial stands,
            roads and earthworks, mines and farms — with partners who want both a modest return and
            a neighbourhood that actually functions.
          </p>
        </div>
        <div className="stats" data-reveal>
          {stats.map((s) => (
            <div className="stat" key={s.l}>
              <b>{s.n}</b>
              <span>{s.l}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="featured">
        <div className="featured-media">
          <img src={projects[0].img} alt="Prayer City gatehouse visualisation" />
        </div>
        <div className="featured-body">
          <span className="kicker">Featured project</span>
          <h2>
            Prayer
            <br />
            City.
          </h2>
          <p>
            A gated residential estate designed as a sanctuary — borehole water, solar, fibre,
            surveillance, and house plans from 200 m² to 400 m². Gate materials are on site.
            Stakeholders walked the ground on 6 June 2026.
          </p>
          <div className="amenity-row">
            {projects[0].amenities.slice(0, 4).map((a) => (
              <span className="chip" key={a}>
                {a}
              </span>
            ))}
          </div>
          <Magnetic className="btn btn-fill" to="/projects/prayer-city">
            Enter Prayer City <Arrow />
          </Magnetic>
        </div>
      </section>

      <section className="section section-ink">
        <div className="split" data-reveal>
          <div>
            <span className="kicker">Recent work</span>
            <h2 className="display">Projects with dirt on them.</h2>
          </div>
          <p>
            Not a moodboard. Layouts, court papers, brick pillars, a suppliers’ desk. Scroll
            sideways.
          </p>
        </div>
        <div className="film" data-reveal>
          {projects.map((p) => (
            <Link key={p.slug} to={`/projects/${p.slug}`} className="film-card">
              <img src={p.img} alt={p.title} />
              <div className="film-meta">
                <small>
                  {p.kicker} · {p.status}
                </small>
                <h3>{p.title}</h3>
              </div>
            </Link>
          ))}
          <Link to="/services" className="film-card">
            <img src={asset('/images/mining-ops.jpg')} alt="Mining" />
            <div className="film-meta">
              <small>Division</small>
              <h3>Mining</h3>
            </div>
          </Link>
          <Link to="/services" className="film-card">
            <img src={asset('/images/agriculture.jpg')} alt="Agriculture" />
            <div className="film-meta">
              <small>Division</small>
              <h3>Agriculture</h3>
            </div>
          </Link>
        </div>
      </section>

      <section className="section section-paper">
        <span className="kicker">What we do</span>
        <h2 className="display">Five trades. One name on the gate.</h2>
        <div className="div-grid">
          {divisions.slice(0, 4).map((d) => (
            <article className="div-card" key={d.id}>
              <img src={d.img} alt={d.title} />
              <div className="div-copy">
                <span className="no">{d.no}</span>
                <h3>{d.title}</h3>
                <p>{d.copy}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section section-bone">
        <span className="kicker">How we work</span>
        <h2 className="display">Plan. Fund. Build. Stay.</h2>
        <div className="process">
          {process.map((p) => (
            <article className="step" key={p.no}>
              <div className="no">{p.no}</div>
              <h3>{p.title}</h3>
              <p>{p.copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section section-dark">
        <div className="split" data-reveal>
          <div>
            <span className="kicker">Dispatch</span>
            <h2 className="display">What the papers and the site say.</h2>
          </div>
          <Link to="/news" className="btn btn-ghost" style={{ alignSelf: 'end', width: 'fit-content' }}>
            All news <Arrow />
          </Link>
        </div>
        <div className="news-grid">
          {news.slice(0, 3).map((n) => (
            <Link to={n.href} className="news-card" key={n.title}>
              <img src={n.img} alt="" />
              <div className="pad">
                <small>
                  {n.date} · {n.tag}
                </small>
                <h3>{n.title}</h3>
                <p>{n.copy}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section
        className="cta-band"
        style={{ ['--cta-image' as string]: `url(${asset('/images/harare-cbd.jpg')})` }}
      >
        <span className="eyebrow">Have a project in mind?</span>
        <h2>The secret to success is to start.</h2>
        <p style={{ maxWidth: '42ch', margin: '1.2rem 0 1.8rem', color: 'rgba(243,238,230,0.85)' }}>
          Write, call, or walk into Belvedere. Stands, civil works, mining, farms — we will tell you
          plainly what is possible.
        </p>
        <div className="hero-actions" style={{ justifyContent: 'flex-start' }}>
          <Magnetic className="btn btn-fill" to="/contact">
            Send a message <Arrow />
          </Magnetic>
          <Magnetic className="btn btn-ghost" href={`tel:${company.phone.replace(/\s/g, '')}`}>
            {company.phone}
          </Magnetic>
        </div>
      </section>
    </main>
  )
}
