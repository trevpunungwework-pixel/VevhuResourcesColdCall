import {
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
  type CSSProperties,
  type MouseEvent,
  type ReactNode,
} from 'react'
import { Link, NavLink, Outlet, useLocation } from 'react-router-dom'
import { company, nav } from './data'

type Lang = 'en' | 'sn'
const LangCtx = createContext<{ lang: Lang; setLang: (l: Lang) => void }>({
  lang: 'en',
  setLang: () => undefined,
})
export function useLang() {
  return useContext(LangCtx)
}

export function Logo({ light = true }: { light?: boolean }) {
  const v = '#F36E21'
  const r = light ? '#f3eee6' : '#141210'
  return (
    <svg viewBox="0 0 64 64" aria-hidden="true">
      <path
        d="M10 16 L32 52 L54 16"
        fill="none"
        stroke={v}
        strokeWidth="7"
        strokeLinejoin="miter"
      />
      <path d="M36 16 H50 C57 16 57 29 50 29 H40 L53 48 H44 L34 29 H36 V16 Z" fill={r} />
    </svg>
  )
}

function Arrow() {
  return (
    <svg className="arrow" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  )
}

export function Magnetic({
  children,
  className,
  to,
  href,
  style,
}: {
  children: ReactNode
  className?: string
  to?: string
  href?: string
  style?: CSSProperties
}) {
  const ref = useRef<HTMLAnchorElement>(null)
  const move = (e: MouseEvent) => {
    const el = ref.current
    if (!el) return
    const r = el.getBoundingClientRect()
    const x = e.clientX - r.left - r.width / 2
    const y = e.clientY - r.top - r.height / 2
    el.style.transform = `translate(${x * 0.18}px, ${y * 0.18}px)`
  }
  const leave = () => {
    if (ref.current) ref.current.style.transform = 'translate(0,0)'
  }
  const cls = className
  if (to) {
    return (
      <Link ref={ref} to={to} className={cls} style={style} onMouseMove={move} onMouseLeave={leave}>
        {children}
      </Link>
    )
  }
  return (
    <a ref={ref} href={href} className={cls} style={style} onMouseMove={move} onMouseLeave={leave}>
      {children}
    </a>
  )
}

export function Layout() {
  const { pathname } = useLocation()
  const [lang, setLang] = useState<Lang>('en')
  const [loaded, setLoaded] = useState(() => sessionStorage.getItem('vevhu-in') === '1')
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const cursor = useRef<HTMLDivElement>(null)
  const bar = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (loaded) return
    const t = window.setTimeout(() => {
      sessionStorage.setItem('vevhu-in', '1')
      setLoaded(true)
    }, 1800)
    return () => window.clearTimeout(t)
  }, [loaded])

  useEffect(() => {
    window.scrollTo(0, 0)
    setOpen(false)
  }, [pathname])

  useEffect(() => {
    const touch = window.matchMedia('(pointer: coarse)').matches
    if (touch) document.body.classList.add('is-touch')
    const onMove = (e: PointerEvent) => {
      const c = cursor.current
      if (!c) return
      c.style.left = `${e.clientX}px`
      c.style.top = `${e.clientY}px`
    }
    const onOver = (e: Event) => {
      const t = e.target as HTMLElement
      cursor.current?.classList.toggle('grow', Boolean(t.closest('a, button, summary')))
    }
    const onScroll = () => {
      setScrolled(window.scrollY > 40)
      const h = document.documentElement
      const p = h.scrollHeight - h.clientHeight
      const w = p > 0 ? (h.scrollTop / p) * 100 : 0
      if (bar.current) bar.current.style.width = `${w}%`
    }
    window.addEventListener('pointermove', onMove)
    window.addEventListener('mouseover', onOver)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => {
      window.removeEventListener('pointermove', onMove)
      window.removeEventListener('mouseover', onOver)
      window.removeEventListener('scroll', onScroll)
    }
  }, [])

  return (
    <LangCtx.Provider value={{ lang, setLang }}>
      <div className="cursor" ref={cursor} />
      <div className="progress" ref={bar} />
      <div className={`loader ${loaded ? 'out' : ''}`} aria-hidden={loaded}>
        <div className="loader-inner">
          <div className="loader-mark">
            <Logo />
          </div>
          <div className="loader-name">VEVHU</div>
          <div className="loader-bar">
            <span />
          </div>
        </div>
      </div>

      <div className="topbar">
        <a href={`mailto:${company.email}`}>{company.email}</a>
        <div className="topbar-r">
          <a href={`tel:${company.phone.replace(/\s/g, '')}`}>{company.phone}</a>
          <div className="lang">
            <button type="button" className={lang === 'en' ? 'on' : ''} onClick={() => setLang('en')}>
              EN
            </button>
            <button type="button" className={lang === 'sn' ? 'on' : ''} onClick={() => setLang('sn')}>
              SN
            </button>
          </div>
        </div>
      </div>

      <header className={`nav ${scrolled ? 'scrolled' : ''}`}>
        <Link to="/" className="brand">
          <Logo />
          <span className="brand-text">
            <strong>VEVHU RESOURCES</strong>
            <span>{company.tagline}</span>
          </span>
        </Link>
        <nav className="nav-links">
          {nav.map((item) => (
            <NavLink key={item.to} to={item.to} end={item.to === '/'}>
              {lang === 'sn' ? item.sn : item.label}
            </NavLink>
          ))}
          <Link className="nav-cta" to="/contact">
            {lang === 'sn' ? 'Nyora chigaro' : 'Apply for stands'}
          </Link>
        </nav>
        <button className="burger" type="button" aria-label="Menu" onClick={() => setOpen((o) => !o)}>
          <span />
        </button>
      </header>

      <div className={`menu ${open ? 'open' : ''}`}>
        <nav>
          {nav.map((item) => (
            <Link key={item.to} to={item.to} onClick={() => setOpen(false)}>
              {lang === 'sn' ? item.sn : item.label}
            </Link>
          ))}
          <Link to="/contact" onClick={() => setOpen(false)}>
            {lang === 'sn' ? 'Nyora chigaro' : 'Apply for stands'}
          </Link>
          <button type="button" className="btn btn-ghost" onClick={() => setOpen(false)}>
            Close
          </button>
        </nav>
      </div>

      <Outlet />

      <footer className="footer">
        <div className="footer-grid">
          <div>
            <Link to="/" className="brand" style={{ marginBottom: '1rem' }}>
              <Logo />
              <span className="brand-text">
                <strong>VEVHU RESOURCES</strong>
                <span>{company.tagline}</span>
              </span>
            </Link>
            <p style={{ marginTop: '1rem', maxWidth: '36ch' }}>
              Master planner, financier and developer since {company.founded}. Property,
              construction, civil works, mining and agriculture — under one roof.
            </p>
          </div>
          <div>
            <h4>{company.hq.title}</h4>
            {company.hq.lines.map((l) => (
              <p key={l}>{l}</p>
            ))}
            <p style={{ marginTop: '0.8rem' }}>{company.hours}</p>
          </div>
          <div>
            <h4>{company.sales.title}</h4>
            {company.sales.lines.map((l) => (
              <p key={l}>{l}</p>
            ))}
            <p style={{ marginTop: '0.8rem' }}>
              <a href={`mailto:${company.email}`}>{company.email}</a>
            </p>
            {company.phones.map((p) => (
              <p key={p}>
                <a href={`tel:${p.replace(/\s/g, '')}`}>{p}</a>
              </p>
            ))}
          </div>
          <div>
            <h4>Visit</h4>
            {nav.map((item) => (
              <p key={item.to}>
                <Link to={item.to}>{item.label}</Link>
              </p>
            ))}
            <p>
              <a href={company.social.facebook} target="_blank" rel="noreferrer">
                Facebook
              </a>
            </p>
            <p>
              <a href={company.social.linkedin} target="_blank" rel="noreferrer">
                LinkedIn
              </a>
            </p>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} {company.legal}. {company.tagline}.</span>
          <span>Harare · Zimbabwe</span>
        </div>
      </footer>

      <a
        className="wa"
        href={`https://wa.me/${company.whatsapp}?text=${encodeURIComponent('Hello Vevhu Resources — I would like to enquire about stands / a project.')}`}
        target="_blank"
        rel="noreferrer"
        aria-label="WhatsApp"
      >
        <svg viewBox="0 0 24 24">
          <path d="M20 11.5A8.5 8.5 0 0 1 7.4 18.6L4 20l1.5-3.3A8.5 8.5 0 1 1 20 11.5Zm-8.5 7a7 7 0 1 0-5.9-3.3l.2.3-.9 2 2.1-.8.3.2A7 7 0 0 0 11.5 18.5Zm4-5.2c-.2-.1-1.2-.6-1.4-.7-.2-.1-.3-.1-.5.1l-.5.6c-.1.1-.3.2-.5 0a5.7 5.7 0 0 1-1.7-1.1 6.3 6.3 0 0 1-1.2-1.5c-.1-.2 0-.3.1-.4l.3-.4.1-.3a.4.4 0 0 0 0-.4l-.7-1.6c-.2-.4-.4-.4-.5-.4h-.4a.8.8 0 0 0-.6.3 2.5 2.5 0 0 0-.8 1.9 4.3 4.3 0 0 0 .9 2.3 10 10 0 0 0 3.8 3.6 4.3 4.3 0 0 0 2.5.7 2.3 2.3 0 0 0 1.5-.6 1.9 1.9 0 0 0 .4-1.3c0-.2 0-.2-.2-.3Z" />
        </svg>
      </a>
    </LangCtx.Provider>
  )
}

export function PageHero({
  kicker,
  title,
  img,
  lede,
}: {
  kicker: string
  title: string
  img: string
  lede?: string
}) {
  return (
    <section className="page-hero">
      <img className="bg" src={img} alt="" />
      <div className="veil" />
      <div className="inner">
        <span className="eyebrow">{kicker}</span>
        <h1>{title}</h1>
        {lede ? <p className="lede" style={{ marginTop: '1rem', color: 'rgba(243,238,230,0.8)' }}>{lede}</p> : null}
      </div>
    </section>
  )
}

export { Arrow }
