import { company } from '../data'
import { PageHero } from '../layout'

export default function About() {
  return (
    <main>
      <PageHero
        kicker="The company"
        title="From the ground up."
        img="/images/brand-story.jpg"
        lede="Elevating possibilities. Delivering value. A Harare group that plans, finances and builds."
      />
      <section className="section section-bone">
        <div className="split">
          <h2 className="display">Master planner. Financier. Developer.</h2>
          <div className="prose">
            <p>
              {company.legal} is a privately held Zimbabwean company, established in {company.founded}.
              LinkedIn lists the group at 51–200 people; the public face is a tight leadership bench in
              Harare and crews on the ground at Prayer City and Spitzkop.
            </p>
            <p>
              We sell residential and commercial stands. We buy raw land and put roads, water and a
              gate on it. We renovate and lease buildings — painting, roofing, plumbing, maintenance.
              We do the civil works that make a layout real, and we keep mining and agriculture in the
              same conversation as housing, because that is how a country actually works.
            </p>
            <p>
              The business model is a partnership with investors and philanthropists who want a modest,
              reliable return and a social result they can walk through. The slogan on the old site
              still holds: <em>the secret to success is to start</em>.
            </p>
          </div>
        </div>
      </section>
      <section className="section section-paper">
        <div className="split">
          <div>
            <span className="kicker">Where we sit</span>
            <h2 className="display">Trust Towers and Belvedere.</h2>
          </div>
          <div className="prose">
            <p>
              Headquarters remain on the 15th floor of Trust Towers, 56–60 Samora Machel Avenue —
              the address on the archived website and the LinkedIn company page.
            </p>
            <p>
              Sales and project traffic also run from 257 Samora Machel Avenue, Belvedere, Harare,
              the address printed on Prayer City and stand campaigns through 2025–2026.
            </p>
            <p>
              Hours published on the previous site: {company.hours}. Closed Saturday and Sunday
              unless a site meeting is called — as at Prayer City on 6 June 2026.
            </p>
          </div>
        </div>
        <iframe
          className="map-frame"
          title="Trust Towers Harare"
          src="https://maps.google.com/maps?q=Trust%20Towers%2056%20Samora%20Machel%20Harare&t=&z=16&ie=UTF8&iwloc=&output=embed"
          style={{ marginTop: '2rem' }}
        />
      </section>
      <section className="section section-ink">
        <span className="kicker">Commitment</span>
        <h2 className="display">Build today so the place still works tomorrow.</h2>
        <div className="process" style={{ color: '#f3eee6' }}>
          {[
            ['01', 'Tenure', 'We go to court if we must — sixteen matters at Spitzkop, all the way to the Supreme Court — then we go back to the residents.'],
            ['02', 'Compromise', 'At Lot 14 we adopted the old layout so people already settled stay inside the estate.'],
            ['03', 'Dialogue', 'In 2026 we withdrew criminal charges in favour of regularising bona fide buyers.'],
            ['04', 'Delivery', 'Gates, boreholes, solar, fibre, bio-digesters — the unfashionable list that makes a city.'],
          ].map(([no, t, c]) => (
            <article className="step" key={no} style={{ borderTopColor: 'rgba(243,238,230,0.2)' }}>
              <div className="no">{no}</div>
              <h3>{t}</h3>
              <p style={{ color: '#9a9186' }}>{c}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  )
}
