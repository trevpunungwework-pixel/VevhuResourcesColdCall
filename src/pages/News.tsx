import { news } from '../data'
import { PageHero } from '../layout'

export default function News() {
  return (
    <main>
      <PageHero
        kicker="News & site notes"
        title="Court, community, concrete."
        img="/images/stakeholders.jpg"
        lede="Drawn from NewsDay, NewZimbabwe, Africa Press and Vevhu’s own public posts — not invented press."
      />
      <section className="section section-bone">
        <div className="news-grid" style={{ gridTemplateColumns: '1fr 1fr' }}>
          {news.map((n) => (
            <article className="news-card" key={n.title} style={{ background: '#fff' }}>
              <img src={n.img} alt="" />
              <div className="pad">
                <small>
                  {n.date} · {n.source}
                </small>
                <h3 style={{ color: '#141210' }}>{n.title}</h3>
                <p style={{ color: '#6b645c' }}>{n.copy}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  )
}
