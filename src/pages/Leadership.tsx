import { asset, leaders } from '../data'
import { PageHero } from '../layout'

export default function Leadership() {
  return (
    <main>
      <PageHero
        kicker="The bench"
        title="People whose names are already on the work."
        img={asset('/images/antony-dube.jpg')}
        lede="Portraits from public profiles and awards. Two faces we could not fairly source stay as initials — we will not invent them."
      />
      <section className="section section-ink">
        <div className="leader-grid" style={{ gridTemplateColumns: 'repeat(2, 1fr)' }}>
          {leaders.map((l) => (
            <article className="leader" key={l.name} style={{ minHeight: 560 }}>
              <img
                src={l.img}
                alt={l.initials ? '' : l.name}
                style={{
                  objectPosition: l.object,
                  transform: l.zoom ? `scale(${l.zoom})` : undefined,
                  transformOrigin: l.object || 'center',
                  minHeight: 560,
                }}
              />
              {l.initials ? <div className="initials">{l.initials}</div> : null}
              <div className="leader-meta">
                <h3>{l.name}</h3>
                <span>{l.role}</span>
              </div>
            </article>
          ))}
        </div>
      </section>
      <section className="section section-bone">
        {leaders.map((l) => (
          <article key={l.name} style={{ marginBottom: '2.4rem', maxWidth: '68ch' }}>
            <span className="kicker">{l.role}</span>
            <h2 className="display" style={{ fontSize: '2.4rem', marginBottom: '0.8rem' }}>
              {l.name}
            </h2>
            <p className="prose" style={{ color: 'var(--muted-dark)' }}>
              {l.bio}
            </p>
            {l.links.map((link) => (
              <p key={link.href} style={{ marginTop: '0.6rem' }}>
                <a href={link.href} target="_blank" rel="noreferrer" style={{ color: 'var(--orange)' }}>
                  {link.label} ↗
                </a>
              </p>
            ))}
          </article>
        ))}
      </section>
      <section className="section section-paper">
        <span className="kicker">On the record</span>
        <h2 className="display" style={{ marginBottom: '1.4rem' }}>
          Awards we did not write ourselves.
        </h2>
        <div className="award-row">
          <img src={asset('/images/gay-awards-nominee.jpg')} alt="Gay Chindedza, Zimbabwe Women in Real Estate nominee" />
          <img src={asset('/images/gay-diaspora-award.jpg')} alt="Zimbabwe Diaspora Awards certificate" />
        </div>
      </section>
    </main>
  )
}
