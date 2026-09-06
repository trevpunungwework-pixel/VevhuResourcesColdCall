export const company = {
  name: 'Vevhu Resources',
  legal: 'Vevhu Resources (Pvt) Ltd',
  tagline: 'From the Ground Up',
  sub: 'Elevating Possibilities, Delivering Value',
  founded: 2006,
  email: 'admin@vevhuresources.co.zw',
  phone: '+263 242 705 409',
  phones: ['+263 242 705 409', '+263 773 050 480', '+263 773 060 955'],
  whatsapp: '263779484632',
  whatsappDisplay: '+263 779 484 632',
  hours: 'Mon – Fri, 8:00am – 9:00pm',
  hq: {
    title: 'Headquarters',
    lines: [
      '15th Floor, Trust Towers',
      '56–60 Samora Machel Avenue',
      'Harare, Zimbabwe',
    ],
    maps: 'https://www.google.com/maps/search/?api=1&query=Trust+Towers+56+Samora+Machel+Harare',
  },
  sales: {
    title: 'Sales & Project Office',
    lines: ['257 Samora Machel Avenue', 'Belvedere, Harare'],
    maps: 'https://www.google.com/maps/search/?api=1&query=257+Samora+Machel+Avenue+Belvedere+Harare',
  },
  social: {
    facebook: 'https://www.facebook.com/100067113447238/',
    linkedin: 'https://www.linkedin.com/company/vevhu-resources-zw',
    linkedinAlt: 'https://www.linkedin.com/company/vevhu-resources',
  },
}

export const nav = [
  { to: '/', label: 'Home', sn: 'Musha' },
  { to: '/about', label: 'About', sn: 'Nezvedu' },
  { to: '/projects', label: 'Projects', sn: 'Mapurojekiti' },
  { to: '/services', label: 'Services', sn: 'Mabasa' },
  { to: '/leadership', label: 'Leadership', sn: 'Vatungamiri' },
  { to: '/news', label: 'News', sn: 'Nhau' },
  { to: '/contact', label: 'Contact', sn: 'Bata isu' },
]

export const stats = [
  { n: '2006', l: 'Established in Zimbabwe', hint: 'Year' },
  { n: '3,595', l: 'Stands at Spitzkop Lot 14', hint: 'Vantage' },
  { n: '4', l: 'Operating divisions', hint: 'Group' },
  { n: '20+', l: 'Years of executive practice', hint: 'Leadership' },
]

export const divisions = [
  {
    id: 'property',
    no: '01',
    title: 'Property Development',
    copy: 'We purchase raw land, master-plan it, and deliver residential and commercial stands. We also renovate, lease and maintain buildings — painting, roofing, plumbing and full-scope upkeep.',
    img: '/images/aerial-stands.jpg',
  },
  {
    id: 'construction',
    no: '02',
    title: 'Construction',
    copy: 'Housing, architecture and construction services that turn layouts into liveable places. House plans from 200 m² to 400 m², tailored to how Zimbabwean families actually live.',
    img: '/images/house-400.jpg',
  },
  {
    id: 'civil',
    no: '03',
    title: 'Civil Works & Supply',
    copy: 'Bridge engineering, road construction and rehabilitation, earthworks and a construction-material supply desk for active estates — including Prayer City.',
    img: '/images/civil-works.jpg',
  },
  {
    id: 'mining',
    no: '04',
    title: 'Mining',
    copy: 'Surveys, claim registration, equipment hire and metal processing. Responsible extraction that respects the land while feeding industry.',
    img: '/images/mining-ops.jpg',
  },
  {
    id: 'agriculture',
    no: '05',
    title: 'Agriculture',
    copy: 'Smart farming, mechanical implements and inputs — built for yields, soil and the long season, not a single harvest.',
    img: '/images/agriculture.jpg',
  },
]

export const process = [
  {
    no: '01',
    title: 'Master plan',
    copy: 'Layout, tenure and community realities first. We design for how people already live, then we build.',
  },
  {
    no: '02',
    title: 'Finance',
    copy: 'We partner with investors and philanthropists who want modest, reliable returns and a visible social dividend.',
  },
  {
    no: '03',
    title: 'Develop',
    copy: 'Civil works, housing, mining and agriculture — delivered under one accountable roof.',
  },
  {
    no: '04',
    title: 'Steward',
    copy: 'Regularise stands, keep talking to residents, and stay on site until the neighbourhood is a neighbourhood.',
  },
]

export const projects = [
  {
    slug: 'prayer-city',
    kicker: 'Flagship estate',
    title: 'Prayer City',
    subtitle: 'A true home',
    status: 'Civil works underway',
    location: 'Harare hinterland',
    year: '2024–',
    img: '/images/prayer-city-gate.jpg',
    card: '/images/prayer-render.jpg',
    summary:
      'A planned residential estate marketed as a sanctuary for families — gated, serviced and designed as a genuine neighbourhood rather than a scatter of plots.',
    body: [
      'Prayer City is Vevhu’s signature “turning settlements into cities” project: a master-planned community with house plans, a designed gatehouse, and a published amenity pack.',
      'The company has been on the ground with stakeholders — including a site meeting on 6 June 2026 — and has already moved gate materials to site. Suppliers of construction materials have been invited to prequalify as the estate expands.',
    ],
    amenities: [
      '24-hour security and smart surveillance',
      'Reliable borehole water',
      'Solar energy',
      'High-speed fibre internet',
      'Bio-digester sanitation',
      'Refuse collection',
    ],
    gallery: [
      '/images/prayer-city-gate.jpg',
      '/images/prayer-render.jpg',
      '/images/prayer-amenities.jpg',
      '/images/prayer-sanctuary.jpg',
      '/images/gate-progress.jpg',
      '/images/house-200.jpg',
      '/images/house-400.jpg',
      '/images/family-home.jpg',
    ],
  },
  {
    slug: 'vantage-spitzkop',
    kicker: 'Zvimba District',
    title: 'Vantage at Spitzkop',
    subtitle: 'Lot 14 — 3,595 stands',
    status: 'Civil works resuming',
    location: 'Spitzkop Lot 14, Zvimba',
    year: '2022–',
    img: '/images/aerial-stands.jpg',
    card: '/images/aerial-stands.jpg',
    summary:
      'A 3,595-stand layout with shops, schools and recreation. Tenure confirmed by the Supreme Court of Zimbabwe in 2025. Civil works are moving again, with a public pledge that no resident is left homeless.',
    body: [
      'Lot 14 Spitzkop — marketed as Vantage — is a full township layout: 3,595 stands plus land for shops, schools and recreational facilities. Approvals and permits from the Ministry of Local Government date to July 2022.',
      'After a nine-year tenure dispute and sixteen court matters, the Supreme Court dismissed the final appeal in 2025. CEO Antony Dube told residents the company would adopt the original layout so people already settled can be accommodated, with only a third of households relocated — still inside Lot 14.',
      'In 2026 the company withdrew fraud charges against three residents in favour of dialogue, asking buyers who purchased through informal sellers to come forward so allocations can be regularised.',
    ],
    amenities: [
      '3,595 residential stands',
      'Shops, schools and recreation on the original layout',
      'Civil works restart after Supreme Court confirmation',
      'Stand regularisation desk for bona fide buyers',
    ],
    gallery: [
      '/images/aerial-stands.jpg',
      '/images/civil-works.jpg',
      '/images/hero-site.jpg',
      '/images/house-200.jpg',
    ],
  },
]

export const leaders = [
  {
    name: 'Antony Dube',
    role: 'Group Chief Executive Officer',
    img: '/images/antony-dube.jpg',
    object: 'center 20%',
    bio: 'Toni is a Harare entrepreneur and speaker who has led Vevhu as Group CEO since May 2020. He also leads Blue Fire Group and works across energy, property, leisure, agriculture, mining and automotive — more than twenty years at executive level.',
    links: [
      { label: 'LinkedIn', href: 'https://www.linkedin.com/in/antony-dube-707604122' },
    ],
  },
  {
    name: 'Gay Kudakwashe Chindedza',
    role: 'Chief Operating Officer',
    img: '/images/gay-chindedza.jpg',
    object: '52% 18%',
    zoom: 1.85,
    bio: 'COO since August 2023, overseeing operations, PR, marketing and partnerships. Managing Director of Roqk Kapital Investments. Honoured among the Top 100 Global Future Builders 2026 (Istanbul), 1st runner-up for Professional Excellence at the Zimbabwe Diaspora Awards (Dec 2025), and a ZNCC Women in Enterprise honouree. Nominee, Zimbabwe Women in Real Estate & Construction Awards (May 2025).',
    links: [
      { label: 'LinkedIn', href: 'https://www.linkedin.com/in/gay-chindedza-65158672' },
    ],
  },
  {
    name: 'Khumbulani Magama',
    role: 'General Manager',
    img: '/images/harare-cbd.jpg',
    object: 'center',
    initials: 'KM',
    bio: 'General Manager since July 2022. Has represented the company in court and community engagement — including the 2026 decision to pursue dialogue and regularise stand allocations at Spitzkop rather than prosecute first.',
    links: [],
  },
  {
    name: 'Nyasha Mpofu',
    role: 'Head of Department · Civil Engineering',
    img: '/images/civil-works.jpg',
    object: 'center',
    initials: 'NM',
    bio: 'HOD since February 2022. Higher National Diploma in Civil Engineering, Harare Polytechnic — the technical lead on civil works and layout delivery.',
    links: [],
  },
]

export const news = [
  {
    date: 'June 2026',
    tag: 'Prayer City',
    title: 'Stakeholders meet on the future site of the homes',
    source: 'Vevhu Resources · Prayer City',
    copy: 'On 6 June 2026 the company hosted a stakeholders’ meeting at Prayer City, 10am–12pm, to walk the ground where residential homes will rise and to share progress toward construction.',
    img: '/images/stakeholders.jpg',
    href: '/projects/prayer-city',
  },
  {
    date: 'May 2026',
    tag: 'Spitzkop',
    title: 'Fraud charges withdrawn in favour of community dialogue',
    source: 'NewsDay',
    copy: 'Vevhu withdrew fraud charges against three Spitzkop residents at Harare Magistrates Court, inviting people who bought stands informally to come in so allocations can be regularised.',
    img: '/images/aerial-stands.jpg',
    href: '/news',
  },
  {
    date: 'October 2025',
    tag: 'Tenure',
    title: 'Supreme Court victory clears civil works at Lot 14',
    source: 'NewsDay · NewZimbabwe',
    copy: 'The Supreme Court dismissed the Greater Spitzkop Residents Association appeal, ending a nine-year, 16-case dispute. CEO Antony Dube pledged civil works would resume and that no one would be left homeless.',
    img: '/images/civil-works.jpg',
    href: '/projects/vantage-spitzkop',
  },
  {
    date: '2026',
    tag: 'Site',
    title: 'Gate material on the way — the neighbourhood takes shape',
    source: 'Vevhu Resources',
    copy: 'Brick pillars are up and gate materials have been dispatched. The published 3D gatehouse shows a modern, landscaped entrance for the estate.',
    img: '/images/gate-progress.jpg',
    href: '/projects/prayer-city',
  },
]

export const faqs = [
  {
    q: 'Who is Vevhu Resources?',
    a: 'A privately held Zimbabwean company, established in 2006, that acts as master planner, financier and developer across property, construction, civil works, mining and agriculture.',
  },
  {
    q: 'How do I apply for a stand?',
    a: 'Use the stand enquiry on this site, WhatsApp +263 779 484 632, or visit 257 Samora Machel Avenue, Belvedere, Harare. Tell us whether you want Prayer City, Vantage at Spitzkop, or another product.',
  },
  {
    q: 'What is happening at Spitzkop Lot 14?',
    a: 'The Supreme Court confirmed the company’s tenure in 2025. Civil works are resuming on the original 3,595-stand layout. Residents already on the land are being accommodated; a regularisation desk exists for people who bought through informal sellers.',
  },
  {
    q: 'Do you work with construction suppliers?',
    a: 'Yes. Prayer City has an open call for suppliers of building materials. Write to admin@vevhuresources.co.zw or call +263 773 050 480 / +263 714 959 744.',
  },
]

export const buildChoices = [
  {
    id: 'home',
    title: 'A Home',
    copy: 'Residential and commercial stands, house plans from 200 m², and a desk that still answers the phone.',
    to: '/contact',
    img: '/images/house-400.jpg',
  },
  {
    id: 'city',
    title: 'A City',
    copy: 'Prayer City and Vantage at Spitzkop — layouts with shops, schools, gates and the boring things that make a place liveable.',
    to: '/projects',
    img: '/images/prayer-city-gate.jpg',
  },
  {
    id: 'mine',
    title: 'A Mine',
    copy: 'Surveys, claims, hire and processing — mining treated as a long asset, not a scramble.',
    to: '/services',
    img: '/images/mining-ops.jpg',
  },
  {
    id: 'harvest',
    title: 'A Harvest',
    copy: 'Implements, inputs and land that is supposed to feed people after the ribbon is cut.',
    to: '/services',
    img: '/images/agriculture.jpg',
  },
]
