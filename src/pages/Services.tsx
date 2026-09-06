import { divisions } from '../data'
import { Arrow, Magnetic, PageHero } from '../layout'

export default function Services() {
  return (
    <main>
      <PageHero
        kicker="Capabilities"
        title="What we put our name on."
        img="/images/civil-works.jpg"
        lede="Architecture and construction. Civil works and supply. Mining. Agriculture. Property that someone still maintains after handover."
      />
      {divisions.map((d, i) => (
        <section
          className="featured"
          key={d.id}
          style={i % 2 ? { direction: 'rtl' } : undefined}
        >
          <div className="featured-media" style={{ direction: 'ltr' }}>
            <img src={d.img} alt={d.title} />
          </div>
          <div className="featured-body" style={{ direction: 'ltr' }}>
            <span className="kicker">{d.no}</span>
            <h2>{d.title}.</h2>
            <p>{d.copy}</p>
            <Magnetic className="btn btn-fill" to="/contact">
              Brief this desk <Arrow />
            </Magnetic>
          </div>
        </section>
      ))}
      <section className="section section-paper">
        <span className="kicker">Renovations</span>
        <div className="split">
          <h2 className="display">Interiors, kitchens, bathrooms, the outside wall.</h2>
          <div className="prose">
            <p>
              The previous site listed kitchen, bath, interior and exterior remodeling plus
              commercial-space renovations. That work still sits under the construction desk —
              consultation, design, then delivery.
            </p>
            <Magnetic className="btn btn-dark" to="/contact">
              Request a renovation visit <Arrow />
            </Magnetic>
          </div>
        </div>
        <img
          src="/images/renovation.jpg"
          alt="Kitchen renovation"
          style={{ marginTop: '2rem', width: '100%', maxHeight: 520, objectFit: 'cover' }}
        />
      </section>
    </main>
  )
}
