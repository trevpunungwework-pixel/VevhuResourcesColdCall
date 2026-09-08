import { Link, useParams } from 'react-router-dom'
import { asset, faqs, projects } from '../data'
import { Arrow, Magnetic, PageHero } from '../layout'

export function Projects() {
  return (
    <main>
      <PageHero
        kicker="Our work"
        title="Projects with dirt on them."
        img={asset('/images/aerial-stands.jpg')}
        lede="Prayer City is rising. Vantage at Spitzkop Lot 14 has its tenure confirmed. Civil works, gates, stands — not a brochure in search of a site."
      />
      <section className="section section-bone">
        <div className="film">
          {projects.map((p) => (
            <Link key={p.slug} to={`/projects/${p.slug}`} className="film-card">
              <img src={p.img} alt={p.title} />
              <div className="film-meta">
                <small>
                  {p.location} · {p.status}
                </small>
                <h3>{p.title}</h3>
              </div>
            </Link>
          ))}
        </div>
      </section>
      {projects.map((p, i) => (
        <section className={`featured ${i % 2 ? 'flip' : ''}`} key={p.slug} style={i % 2 ? { direction: 'rtl' } : undefined}>
          <div className="featured-media" style={{ direction: 'ltr' }}>
            <img src={p.img} alt={p.title} />
          </div>
          <div className="featured-body" style={{ direction: 'ltr' }}>
            <span className="kicker">{p.kicker}</span>
            <h2>{p.title}.</h2>
            <p>{p.summary}</p>
            <div className="amenity-row">
              {p.amenities.slice(0, 4).map((a) => (
                <span className="chip" key={a}>
                  {a}
                </span>
              ))}
            </div>
            <Magnetic className="btn btn-fill" to={`/projects/${p.slug}`}>
              Open project <Arrow />
            </Magnetic>
          </div>
        </section>
      ))}
    </main>
  )
}

export function ProjectDetail() {
  const { slug } = useParams()
  const p = projects.find((x) => x.slug === slug)
  if (!p) {
    return (
      <main className="section section-bone">
        <h2 className="display">Project not found.</h2>
        <Link to="/projects" className="btn btn-dark" style={{ marginTop: '1.5rem' }}>
          Back to projects
        </Link>
      </main>
    )
  }
  return (
    <main>
      <PageHero kicker={p.kicker} title={p.title} img={p.img} lede={`${p.location} · ${p.status} · ${p.year}`} />
      <section className="section section-bone">
        <div className="split">
          <h2 className="display">{p.subtitle}</h2>
          <div className="prose">
            {p.body.map((para) => (
              <p key={para}>{para}</p>
            ))}
          </div>
        </div>
        <div className="amenity-row" style={{ marginTop: '2rem' }}>
          {p.amenities.map((a) => (
            <span className="chip" key={a} style={{ color: '#141210', borderColor: 'rgba(20,18,16,0.18)' }}>
              {a}
            </span>
          ))}
        </div>
      </section>
      <section className="section section-paper">
        <span className="kicker">Gallery</span>
        <h2 className="display" style={{ marginBottom: '1.5rem' }}>
          From the ground.
        </h2>
        <div className="gallery">
          {p.gallery.map((src) => (
            <img key={src} src={src} alt="" />
          ))}
        </div>
        <div style={{ marginTop: '2rem' }}>
          <Magnetic className="btn btn-dark" to="/contact">
            Enquire on this project <Arrow />
          </Magnetic>
        </div>
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
