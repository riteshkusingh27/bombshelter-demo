'use client'

import Image from 'next/image'
import { FormEvent, useState } from 'react'

const photos = {
  bunker: 'https://images.unsplash.com/photo-1722971299940-ac87c804e540?auto=format&fit=crop&w=1800&q=88',
  concrete: 'https://images.unsplash.com/photo-1622007032611-8a48d2441c2d?auto=format&fit=crop&w=1200&q=85',
  home: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=85',
  cabin: 'https://images.unsplash.com/photo-1449158743715-0a90ebb6d2d8?auto=format&fit=crop&w=1200&q=85',
  interior: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1200&q=85',
  steel: 'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?auto=format&fit=crop&w=1200&q=85',
  forest: 'https://images.unsplash.com/photo-1570122696161-cb795b9a2425?auto=format&fit=crop&w=1200&q=85',
}

const categories = [
  ['Bomb Shelters', 'Engineered protection for your family.', photos.bunker],
  ['Storm Shelters', 'Severe-weather protection for every property.', photos.concrete],
  ['Safe Rooms', 'Secure spaces designed for home or business.', photos.interior],
  ['Luxury Bunkers', 'Premium comfort below ground.', photos.interior],
  ['Steel Framed Homes', 'Modern strength and adaptable design.', photos.steel],
  ['Cabins', 'Timeless architecture, modern craftsmanship.', photos.cabin],
]

const models = [
  ['BEST SELLER', 'Standard Underground Bomb Shelter', 'Multiple configurations available', photos.bunker],
  ['LUXURY', 'Luxury Underground Bunker', 'Custom interiors & layouts', photos.interior],
  ['POPULAR', 'Residential Storm Shelter', 'Residential protection solutions', photos.concrete],
  ['NEW', 'The Appalachian Steel Framed Home', 'Custom quote available', photos.steel],
  ['CUSTOM', 'The Gatlinburg Jr. Cabin', 'Cabin package options', photos.cabin],
  ['FEATURED', 'Modern Steel Framed Home', 'Designed for modern living', photos.home],
]

const benefits = ['American-Made Options', 'Verified Manufacturers', 'Nationwide Delivery', 'Custom-Built Solutions', 'Flexible Financing', 'Expert Guidance']
const faqs = [
  ['How much does a bomb shelter cost?', 'Costs vary by size, configuration, site conditions, and finish level. Request a project consultation for an accurate manufacturer quote.'],
  ['How long does installation take?', 'Timelines depend on the shelter type, customization, permitting, site preparation, and delivery location.'],
  ['Do I need a permit to install a shelter?', 'Requirements vary by state and local jurisdiction. Your selected specialist can help identify the approvals needed for your project.'],
  ['What features can be customized?', 'Available options may include layout, storage, power, air filtration, finishes, communications, and accessibility features.'],
  ['Do you offer financing options?', 'Financing options may be available through participating providers, subject to approval and applicable terms.'],
]

function Icon({ name = 'shield' }: { name?: string }) {
  const paths: Record<string, React.ReactNode> = {
    phone: <><path d="M5 4h3l2 5-2 1c1.2 2.5 3.4 4.7 6 6l1-2 5 2v3c0 1-1 2-2 2C10 21 3 14 3 6c0-1 1-2 2-2Z"/></>,
    search: <><circle cx="11" cy="11" r="7"/><path d="m20 20-4-4"/></>,
    menu: <><path d="M4 7h16M4 12h16M4 17h16"/></>,
    chat: <><path d="M4 5h16v11H9l-5 4V5Z"/><path d="M8 10h8"/></>,
    shield: <><path d="M12 3 4 6v5c0 5 3 8 8 10 5-2 8-5 8-10V6l-8-3Z"/><path d="m9 12 2 2 4-5"/></>,
    arrow: <><path d="M5 12h14M14 7l5 5-5 5"/></>,
    check: <><path d="m5 12 4 4L19 6"/></>,
    star: <><path d="m12 3 2.7 5.5 6 .9-4.4 4.2 1 6-5.3-2.8-5.3 2.8 1-6-4.4-4.2 6-.9L12 3Z"/></>,
  }
  return <svg className="icon" viewBox="0 0 24 24" aria-hidden="true">{paths[name] || paths.shield}</svg>
}

function Button({ children, secondary = false }: { children: React.ReactNode; secondary?: boolean }) {
  return <button className={`button ${secondary ? 'button-secondary' : ''}`}>{children}<Icon name="arrow" /></button>
}

function SectionTitle({ eyebrow, title, copy }: { eyebrow?: string; title: React.ReactNode; copy?: string }) {
  return <div className="section-title">{eyebrow && <span className="eyebrow">{eyebrow}</span>}<h2>{title}</h2>{copy && <p>{copy}</p>}</div>
}

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [openFaq, setOpenFaq] = useState(0)
  const [sent, setSent] = useState(false)
  const submit = (e: FormEvent) => { e.preventDefault(); setSent(true) }

  return <div className="site-shell">
    <header className="site-header">
      <div className="utility"><div className="wrap utility-inner"><span><Icon name="phone" /> +1 (812) 595-4033</span><span className="rating">★★★★★ <b>Trusted Shelter Specialists</b></span><span className="utility-links">Manufacturer Network　 Financing　 Sign In　 Support</span></div></div>
      <div className="main-head wrap">
        <Image className="logo" src="/assets/bombshelters-logo.jpg" alt="BombShelters.com" width={1226} height={207} priority />
        <label className="search"><Icon name="search" /><input aria-label="Search" placeholder="Search shelters, bunkers, safe rooms, manufacturers..." /><button>Search</button></label>
        <button className="menu-toggle" aria-label="Toggle menu" onClick={() => setMenuOpen(!menuOpen)}><Icon name="menu" /></button>
        <Button>Request a Quote</Button>
      </div>
      <nav className={menuOpen ? 'nav open' : 'nav'}><div className="wrap nav-inner">{['Bunkers','Storm Shelters','Steel Framed Homes','Cabins','House Kits','Safe Rooms','Financing','Custom Solutions','About'].map(x => <a key={x} href={`#${x.toLowerCase().replaceAll(' ','-')}`}>{x}<span>⌄</span></a>)}</div></nav>
    </header>

    <main>
      <section className="hero" id="bunkers" style={{ backgroundImage: `url(${photos.bunker})` }}>
        <div className="wrap hero-content"><span className="hero-badge">Preparedness starts here</span><h1>Protection for an<br/><em>Unpredictable World.</em></h1><p>Explore professionally engineered bomb shelters, storm shelters, safe rooms, and hardened structures designed to protect what matters most.</p><div className="actions"><Button>Explore Shelters</Button><Button secondary>Get an Instant Quote</Button></div><span className="hero-note"><Icon name="shield" /> Trusted guidance. Verified options. Built for peace of mind.</span></div>
      </section>

      <section className="trust-strip"><div className="wrap trust-grid">{benefits.map((b,i)=><div className="trust-item" key={b}><span>{String(i+1).padStart(2,'0')}</span><Icon name={i===4?'star':'shield'} /><b>{b}</b></div>)}</div></section>

      <section className="section soft" id="storm-shelters"><div className="wrap">
        <div className="title-row"><SectionTitle eyebrow="Explore solutions" title={<>Shop by <em>Category</em></>} copy="Shelter solutions designed around your property, needs, and budget."/><a className="text-link" href="#models">View All Categories <Icon name="arrow"/></a></div>
        <div className="category-grid">{categories.map(([title,copy,img])=><article className="category-card" key={title}><div className="card-image"><img src={img} alt="" /></div><div className="card-body"><h3>{title}</h3><p>{copy}</p><a href="#consultation">Explore Category <Icon name="arrow"/></a></div></article>)}</div>
      </div></section>

      <section className="section" id="models"><div className="wrap">
        <div className="title-row"><SectionTitle eyebrow="Built for confidence" title={<>Featured <em>Models</em></>} copy="Popular shelters and structures selected for quality, value, and performance."/><a className="text-link" href="#consultation">View All Models <Icon name="arrow"/></a></div>
        <div className="model-grid">{models.map(([badge,title,spec,img])=><article className="model-card" key={title}><div className="model-image"><img src={img} alt="" /><span>{badge}</span></div><div className="model-body"><p className="model-type">BombShelters.com selection</p><h3>{title}</h3><p>{spec}</p><div className="price">Pricing by quote</div><a href="#consultation">View details <Icon name="arrow"/></a></div></article>)}</div>
      </div></section>

      <section className="promo wrap"><article style={{backgroundImage:`url(${photos.interior})`}}><div><span>Elevated protection</span><h2>Luxury Bunkers</h2><p>Premium underground living with thoughtfully designed comfort and protection.</p><Button>Explore Luxury Bunkers</Button></div></article><article style={{backgroundImage:`url(${photos.steel})`}}><div><span>Engineered living</span><h2>Steel Framed Homes</h2><p>Modern construction. Engineered strength. Built for the future.</p><Button>Explore Steel Homes</Button></div></article></section>

      <section className="dark-section section"><div className="wrap"><SectionTitle eyebrow="The marketplace advantage" title="Why Choose BombShelters.com?" copy="Compare trusted manufacturers, explore flexible solutions, and find the right shelter for your needs."/><div className="feature-grid">{['Compare Multiple Builders','Direct Pricing','Custom Options','Financing Assistance','Expert Guidance','Nationwide Network'].map((x,i)=><article key={x}><span className="feature-number">0{i+1}</span><Icon name={i===3?'star':'shield'}/><h3>{x}</h3><p>{['See models and features in one place.','Get competitive quotes from verified manufacturers.','Tailor the solution to your site and budget.','Explore options through participating providers.','Get answers from shelter specialists.','Connect with builders across the U.S.'][i]}</p></article>)}</div></div></section>

      <section className="section how"><div className="wrap"><SectionTitle eyebrow="A clear path forward" title={<>How It <em>Works</em></>} copy="From your first search to final installation, we help you navigate the process."/><div className="steps">{[['01','Browse Models'],['02','Compare Options'],['03','Get a Quote'],['04','Delivery & Installation']].map(([n,t],i)=><article key={n}><span>{n}</span><div><h3>{t}</h3><p>{['Explore shelters, structures, and manufacturers.','Review designs, features, and available solutions.','Connect with a manufacturer or specialist.','Coordinate next steps with your selected provider.'][i]}</p></div></article>)}</div></div></section>

      <section className="partners soft section"><div className="wrap"><div className="title-row"><SectionTitle eyebrow="Our network" title="Trusted Manufacturers & Partners" copy="We work with established manufacturers to help customers explore quality shelter solutions."/><a className="text-link" href="#consultation">View All Manufacturers <Icon name="arrow"/></a></div><div className="logo-grid">{['FORTRESS BUILT','LIBERTY SHIELD SYSTEMS','IRON RIDGE SHELTERS','PATRIOT UNDERGROUND','STEADFAST BUNKERS','SUMMIT SAFE ROOMS'].map((x,i)=><div key={x}><span className="partner-mark">{['FB','LS','IR','PU','SB','SS'][i]}</span>{x}</div>)}</div></div></section>

      <section className="consultation" id="consultation"><div className="consult-image" style={{backgroundImage:`url(${photos.home})`}}><div><span className="eyebrow">Plan with confidence</span><h2>Flexible Financing Options</h2><p>Explore available financing options and find an approach that works for your project.</p>{['Competitive options','Multiple providers','No obligation to explore'].map(x=><span className="check" key={x}><Icon name="check"/>{x}</span>)}<Button>Explore Financing</Button></div></div>
        <form className="consult-form" onSubmit={submit}><span className="eyebrow">Talk to a specialist</span><h2>Get a Free Consultation</h2><p>Tell us about your project and let our team help you explore the next steps.</p><div className="form-grid"><label>Full Name<input required placeholder="Your name"/></label><label>Email Address<input required type="email" placeholder="you@example.com"/></label><label>Phone Number<input type="tel" placeholder="(000) 000-0000"/></label><label>Shelter Type<select defaultValue=""><option value="" disabled>Select a solution</option><option>Bomb Shelter</option><option>Storm Shelter</option><option>Safe Room</option><option>Steel Framed Home</option></select></label><label className="wide">Project Location<input placeholder="City, State"/></label><label className="wide">Optional Message<textarea rows={3} placeholder="Tell us about your project"/></label></div><Button>{sent ? 'Request Received' : 'Request a Consultation'}</Button>{sent && <p className="success">Thank you. A shelter specialist will follow up with you.</p>}</form>
      </section>

      <section className="section testimonials soft"><div className="wrap"><SectionTitle eyebrow="Customer stories" title="Real Customers. Real Peace of Mind." copy="Sample layout shown below. Final endorsements should be replaced with verified customer reviews."/><div className="testimonial-grid">{['Homeowner in Texas','Family in Colorado','Business Owner in Florida'].map((name,i)=><article key={name}><span className="sample">PLACEHOLDER TESTIMONIAL</span><div className="stars">★★★★★</div><blockquote>“{['The process was clear and the team helped us understand the available options.','Helpful guidance made it easier to compare solutions for our property.','We appreciated the professional approach and straightforward process.'][i]}”</blockquote><b>{name}</b></article>)}</div></div></section>

      <section className="section faq"><div className="wrap faq-grid"><div><SectionTitle eyebrow="Common questions" title={<>Frequently Asked <em>Questions</em></>} copy="Find answers to common questions about shelters, pricing, installation, and customization."/><div className="accordion">{faqs.map(([q,a],i)=><div className="faq-item" key={q}><button onClick={()=>setOpenFaq(openFaq===i?-1:i)} aria-expanded={openFaq===i}><span>{q}</span><b>{openFaq===i?'−':'+'}</b></button>{openFaq===i&&<p>{a}</p>}</div>)}</div></div><aside style={{backgroundImage:`url(${photos.forest})`}}><div><h2>Prepare Today.<br/>Protect Tomorrow.</h2><p>Explore shelter solutions built around your property and priorities.</p><Button>Start Your Project</Button></div></aside></div></section>
    </main>

    <footer><div className="wrap footer-grid"><div className="footer-brand"><Image src="/assets/bombshelters-logo.jpg" alt="BombShelters.com" width={1226} height={207}/><p>America’s trusted marketplace for shelter solutions, hardened homes, and preparedness structures.</p><div className="socials">f　◎　in</div></div>{[['Shop','Bomb Shelters','Storm Shelters','Safe Rooms','Luxury Bunkers','Steel Framed Homes'],['Company','About Us','Our Manufacturers','Customer Reviews','Financing','Contact Us'],['Resources','Buying Guide','Preparedness Blog','FAQs','Case Studies','Guides & Resources']].map(col=><div className="footer-col" key={col[0]}><h3>{col[0]}</h3>{col.slice(1).map(x=><a href="#" key={x}>{x}</a>)}</div>)}<div className="newsletter"><h3>Join Our Newsletter</h3><p>Get preparedness insights, product updates, and special offers.</p><label><input type="email" aria-label="Newsletter email" placeholder="Email address"/><button>Subscribe</button></label><p>+1 (812) 595-4033<br/>support@bombshelters.com</p></div></div><div className="wrap footer-bottom"><span>© 2026 BombShelters.com. All rights reserved.</span><span>Privacy Policy　 Terms of Service　 Sitemap</span></div></footer>
    <button className="chat" aria-label="Chat with us"><Icon name="chat"/><span>Chat with Us</span></button>
  </div>
}
