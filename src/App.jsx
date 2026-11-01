import { useState, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './App.css';

gsap.registerPlugin(ScrollTrigger);

// Custom GSAP Scroll Animation Hook
function useAnimations() {
  useEffect(() => {
    // 1. Hero Content Entrance Animation
    gsap.fromTo(
      '.hero-biz-content > *',
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.15,
        ease: 'power3.out',
      }
    );

    // 2. Scroll-Driven Staggered Reveals for Sections
    const sections = document.querySelectorAll('.scroll-reveal');
    sections.forEach((section) => {
      gsap.fromTo(
        section,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: section,
            start: 'top 85%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    });

    // 3. Staggered Card Reveals (Services, Portfolio, Pricing, Testimonials)
    const cardGrids = document.querySelectorAll('.services-grid, .portfolio-grid, .pricing-grid, .testimonials-grid');
    cardGrids.forEach((grid) => {
      const cards = grid.children;
      gsap.fromTo(
        cards,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: grid,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [currency, setCurrency] = useState('USD');

  useAnimations();

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'Services', href: '#services' },
    { label: 'Portfolio', href: '#portfolio' },
    { label: 'About', href: '#about' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <>
      {/* HEADER */}
      <header className="site-header">
        <nav className="navbar">
          <a href="#home" className="brand-logo" aria-label="Joshwebtix Home">
            <img src="/22.jpg" alt="Joshwebtix" />
          </a>

          <div className="desktop-nav">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="nav-link-underline"
              >
                {link.label}
              </a>
            ))}
          </div>

          <a href="#contact" className="nav-cta-pill">
            <span>Let's Talk</span>
            <span className="arrow-badge">
              <i className="fa-solid fa-arrow-right" />
            </span>
          </a>

          <button
            type="button"
            id="mobile-menu-btn"
            className={`mobile-menu-btn ${menuOpen ? 'active' : ''}`}
            aria-label={menuOpen ? 'Close navigation' : 'Open navigation'}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span className="hamburger-bar bar-top" />
            <span className="hamburger-bar bar-middle" />
            <span className="hamburger-bar bar-bottom" />
          </button>
        </nav>

        <div className={`mobile-nav ${menuOpen ? 'open' : ''}`}>
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}

          <a href="#contact" onClick={() => setMenuOpen(false)}>
            Let's Talk
          </a>
        </div>
      </header>

      <main>
        {/* HERO SECTION — FULL WIDTH BACKGROUND DESIGN */}
        {/* Hero Section */}
<section id="home" className="hero-dark-grid">
  <div className="hero-grid-overlay"></div>
  
  <div className="hero-container">
    <div className="hero-content">
      {/* 5-Star Pill Badge */}
      <div className="hero-rating-badge">
        <span className="stars">★★★★★</span>
        <span className="rating-text">5K+ Reviews &amp; Client Trust</span>
      </div>

      {/* Main Heading */}
      <h1 className="hero-heading">
        Your business deserves <span className="highlight-text">a stronger online presence.</span>
      </h1>

      {/* Subtitle */}
      <p className="hero-subtext">
        We build fast, secure web apps and websites that earn customer trust and turn visitors into paying customers.
      </p>

      {/* CTA Buttons */}
      <div className="hero-actions">
        <a 
          href="https://wa.me/2347038943310" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="btn-primary-pill"
        >
          Get Your Website
        </a>
        <a href="#portfolio" className="btn-secondary-pill">
          Explore Our Work
        </a>
      </div>
    </div>
  </div>
</section>
        {/* PORTFOLIO */}
       <section id="portfolio" className="portfolio-section scroll-reveal">
  <div className="section-heading">
    <span className="section-eyebrow">SELECTED WORK</span>
    <h2>Projects built with purpose.</h2>
    <p>
      A selection of projects designed to present ideas clearly,
      solve problems, and create better online experiences.
    </p>
  </div>

  <div className="portfolio-grid">
    {/* Project 1: TFOOD */}
    <article className="portfolio-card animate-card-hover">
      <div 
        className="portfolio-card-image"
        style={{ backgroundImage: "url('/tf.png')" }}
      />
      <div className="portfolio-info">
        <h3>TFOOD</h3>
        <p>
          A premium food platform with easy-to-use menus, smooth online ordering, and a vibrant, food-focused design.
        </p>
        <a 
          href="https://tfood-ten.vercel.app" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="portfolio-details-btn"
        >
          View Website <i className="fa-solid fa-arrow-up-right-from-square" />
        </a>
      </div>
    </article>

    {/* Project 2: NCT TRAVELS */}
    <article className="portfolio-card animate-card-hover">
      <div 
        className="portfolio-card-image"
        style={{ backgroundImage: "url('/nt.jpg')" }}
      />
      <div className="portfolio-info">
        <h3>NCT TRAVELS</h3>
        <p>
          A visa website providing fast, reliable, and seamless visa processing services.
        </p>
        <a 
          href="https://nct-travels.vercel.app" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="portfolio-details-btn"
        >
          View Website <i className="fa-solid fa-arrow-up-right-from-square" />
        </a>
      </div>
    </article>

    {/* Project 3: CEDAG FOUNDATION */}
    <article className="portfolio-card animate-card-hover">
      <div 
        className="portfolio-card-image"
        style={{ backgroundImage: "url('/edeee.png')" }}
      />
      <div className="portfolio-info">
        <h3>CEDAG FOUNDATION</h3>
        <p>
          A website for a foundation focused on community growth, social impact, and educational support.
        </p>
        <a 
          href="https://cedag-foundation.vercel.app" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="portfolio-details-btn"
        >
          View Website <i className="fa-solid fa-arrow-up-right-from-square" />
        </a>
      </div>
    </article>
  </div>
</section>
        {/* ABOUT */}
       {/* ABOUT */}
<section id="about" className="about-redesign-section scroll-reveal">
  <div className="about-redesign-container">
    <div className="about-left-col">
      {/* Added less-bold-heading to eyebrow and heading */}
      <span className="section-eyebrow less-bold-heading">ABOUT JOSHWEBTIX</span>
      <h2 className="less-bold-heading">We build websites that turn visitors into long-term clients.</h2>
      <p>
        Joshwebtix is a specialized web design and development brand dedicated to engineering modern, conversion-focused websites and web applications. We blend performance-driven software engineering with clean, accessible visual architecture.
      </p>
      <p>
        Whether you are a growing business seeking higher search market visibility or an executive requiring a distinguished online portfolio, we deliver tailored technical solutions without fluff or unnecessary bloat.
      </p>

      <div className="about-stats-grid">
        <div className="stat-box">
          <h3>100%</h3>
          <p>Client Satisfaction Rate</p>
        </div>
        <div className="stat-box">
          <h3>99/100</h3>
          <p>Average Lighthouse Speed</p>
        </div>
      </div>
    </div>

    <div className="about-right-card animate-card-hover">
      <h3>Why Choose Joshwebtix?</h3>
      <ul>
        <li>
          <i className="fa-regular fa-circle-check" />
          <span>Clean, responsive layouts crafted strictly to modern web standards.</span>
        </li>
        <li>
          <i className="fa-regular fa-circle-check" />
          <span>SEO-optimized search visibility structures built in from day one.</span>
        </li>
        <li>
          <i className="fa-regular fa-circle-check" />
          <span>Lightning-fast page loads powered by lightweight codebases.</span>
        </li>
        <li>
          <i className="fa-regular fa-circle-check" />
          <span>Transparent communication and clear project execution timelines.</span>
        </li>
      </ul>
    </div>
  </div>
</section>
       {/* TESTIMONIALS */}
<section id="testimonials" className="testimonials-dark-section scroll-reveal">
  <div className="testimonials-dark-container">
    {/* LEFT COLUMN: Title & Navigation */}
    <div className="testimonials-left-col">
  <div className="quote-icon-large">
    <i className="fa-solid fa-quote-left" />
  </div>
  <h2 className="testimonials-main-title">
    What our <br />
    customers are <br />
    <span className="highlight-blue">saying</span>
  </h2>
  
  {/* Navigation as shown in your image */}
  <div className="testimonials-slider-nav">
    <button type="button" aria-label="Previous slide" className="t-nav-btn">
      <i className="fa-solid fa-arrow-left" />
    </button>
    <div className="t-nav-pagination">
      <span className="t-dash active" />
      <span className="t-dash" />
    </div>
    <button type="button" aria-label="Next slide" className="t-nav-btn">
      <i className="fa-solid fa-arrow-right" />
    </button>
  </div>
</div>

    {/* RIGHT COLUMN: Speech Bubble Cards */}
    <div className="testimonials-right-col">
      <div className="testimonials-scroll-track">
        <article className="speech-bubble-card animate-card-hover">
          <p className="bubble-quote">
            &ldquo;The redesign process was seamless. Since launching the new website, our conversion rates have jumped by 40%. The performance and speed are simply top-notch.&rdquo;
          </p>
          <div className="bubble-stars">★★★★★</div>
          <div className="bubble-author">
            <div className="bubble-avatar sam-avatar"></div>
            <div>
              <strong>Sam O.</strong>
              <small>MARKETING DIRECTOR</small>
            </div>
          </div>
        </article>

        <article className="speech-bubble-card animate-card-hover">
          <p className="bubble-quote">
            &ldquo;My bro I must confess the whole design and set up the website is good and powerful. This is my first time working with you and I enjoyed it because you barely complained.&rdquo;
          </p>
          <div className="bubble-stars">★★★★★</div>
          <div className="bubble-author">
            <div className="bubble-avatar pnation-avatar"></div>
            <div>
              <strong>Pnation Hub</strong>
              <small>SALES EXPERT</small>
            </div>
          </div>
        </article>
      </div>
    </div>
  </div>
</section>

        {/* PRICING */}
        <section id="pricing" className="pricing-redesign-section scroll-reveal">
          <div className="section-heading">
            <div className="currency-toggle">
              <button
                type="button"
                className={currency === 'USD' ? 'active-curr' : ''}
                onClick={() => setCurrency('USD')}
              >
                USD ($)
              </button>
              <button
                type="button"
                className={currency === 'NGN' ? 'active-curr' : ''}
                onClick={() => setCurrency('NGN')}
              >
                NGN (₦)
              </button>
            </div>
            <h2>Simple &amp; Predictable Pricing</h2>
            <p>Invest in your online presence with professional tiers tailored to your scale.</p>
          </div>

          <div className="pricing-grid">
            <article className="pricing-card animate-card-hover">
              <span className="pkg-badge">Starter Site</span>
              <h3>Essential Presence</h3>
              <p className="pricing-description">
                Perfect for small businesses and personal portfolios needing a clean launch.
              </p>
              <div className="price-tag">
                {currency === 'USD' ? '$300' : '₦450,000'} <span>/ one-time</span>
              </div>
              <div className="price-divider" />

              <ul>
                <li><i className="fa-solid fa-check" /> 1–3 Custom Page Layouts</li>
                <li><i className="fa-solid fa-check" /> 100% Mobile Responsive</li>
                <li><i className="fa-solid fa-check" /> Contact Form Integration</li>
                <li><i className="fa-solid fa-check" /> Basic SEO Optimization</li>
                <li className="disabled-feature"><i className="fa-solid fa-xmark" /> Custom Web Application Logic</li>
              </ul>

              <a href="#contact" className="pkg-btn secondary-pkg-btn">
                Select Starter Plan
              </a>
            </article>

            <article className="pricing-card pricing-featured animate-card-hover">
              <div className="most-popular-pill">MOST POPULAR</div>
              <span className="pkg-badge">Growth Package</span>
              <h3>Professional Growth</h3>
              <p className="pricing-description">
                Comprehensive solution for established brands looking to drive leads online.
              </p>
              <div className="price-tag">
                {currency === 'USD' ? '$750' : '₦1,150,000'} <span>/ one-time</span>
              </div>
              <div className="price-divider" />

              <ul>
                <li><i className="fa-solid fa-check" /> Up to 7 Custom Designed Pages</li>
                <li><i className="fa-solid fa-check" /> Full Content Management System (CMS)</li>
                <li><i className="fa-solid fa-check" /> Advanced Speed &amp; Technical SEO</li>
                <li><i className="fa-solid fa-check" /> Interactive Project Showcases</li>
                <li><i className="fa-solid fa-check" /> 30 Days Post-Launch Maintenance</li>
              </ul>

              <a href="#contact" className="pkg-btn primary-pkg-btn">
                Select Growth Plan
              </a>
            </article>

            <article className="pricing-card animate-card-hover">
              <span className="pkg-badge">Custom Web App</span>
              <h3>Enterprise Custom</h3>
              <p className="pricing-description">
                Tailored web platforms, custom SaaS dashboards, and complex digital builds.
              </p>
              <div className="price-tag">
                {currency === 'USD' ? '$1,500+' : '₦2,300,000+'} <span>/ custom quote</span>
              </div>
              <div className="price-divider" />

              <ul>
                <li><i className="fa-solid fa-check" /> Full-Stack Web Application Architecture</li>
                <li><i className="fa-solid fa-check" /> Database &amp; Third-party API Integrations</li>
                <li><i className="fa-solid fa-check" /> Custom User Portals &amp; Dashboards</li>
                <li><i className="fa-solid fa-check" /> Priority SLA Technical Support</li>
                <li><i className="fa-solid fa-check" /> Continuous Security Optimization</li>
              </ul>

              <a href="#contact" className="pkg-btn secondary-pkg-btn">
                Request Enterprise Quote
              </a>
            </article>
          </div>
        </section>

        {/* CONTACT SECTION */}
        {/* CONTACT SECTION */}
<section id="contact" className="contact-redesign-section scroll-reveal">
  <div className="contact-redesign-container">
    <div className="contact-left-info">
      {/* Added less-bold-heading to eyebrow and heading */}
      <span className="section-eyebrow less-bold-heading">GET IN TOUCH</span>
      <h2 className="less-bold-heading">Let&apos;s Build Something Great Together</h2>
      <p>
        Ready to start your web project or have questions about pricing and custom builds? Fill out the project form and we&apos;ll reply within 24 hours.
      </p>

      <div className="contact-info-badges">
        <div className="ci-badge animate-card-hover">
          <span className="ci-icon"><i className="fa-regular fa-envelope" /></span>
          <div>
            <small>DIRECT EMAIL</small>
            <strong>contact@joshwebtix.com</strong>
          </div>
        </div>

        <div className="ci-badge animate-card-hover">
          <span className="ci-icon"><i className="fa-regular fa-clock" /></span>
          <div>
            <small>RESPONSE TIME</small>
            <strong>Within 24 Hours Guaranteed</strong>
          </div>
        </div>
      </div>
    </div>

    <form
  className="contact-redesign-form animate-card-hover"
  onSubmit={(event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const name = formData.get('name');
    const email = formData.get('email');
    const service = formData.get('service');
    const message = formData.get('message');

    const whatsappMessage = encodeURIComponent(
      `*New Project Inquiry from Website*\n\n` +
      `*Name:* ${name}\n` +
      `*Email:* ${email}\n` +
      `*Service:* ${service}\n\n` +
      `*Project Details:*\n${message}`
    );

    const phoneNumber = '2347038943310';

    window.open(`https://wa.me/${phoneNumber}?text=${whatsappMessage}`, '_blank');
  }}
>
  <div className="form-row-2">
    <div>
      <label htmlFor="contact-name">YOUR NAME</label>
      <input id="contact-name" name="name" type="text" placeholder="John Doe" required />
    </div>
    <div>
      <label htmlFor="contact-email">EMAIL ADDRESS</label>
      <input id="contact-email" name="email" type="email" placeholder="john@example.com" required />
    </div>
  </div>

  <label htmlFor="contact-service">PROJECT SERVICE NEEDED</label>
  <select id="contact-service" name="service" required defaultValue="">
    <option value="" disabled>Select a package or service</option>
    <option value="Essential Presence (Starter)">Essential Presence (Starter)</option>
    <option value="Professional Growth (Most Popular)">Professional Growth (Most Popular)</option>
    <option value="Enterprise Custom Web App">Enterprise Custom Web App</option>
    <option value="Website Redesign">Website Redesign</option>
    <option value="Other Custom Inquiry">Other Custom Inquiry</option>
  </select>

  <label htmlFor="contact-message">PROJECT DETAILS</label>
  <textarea
    id="contact-message"
    name="message"
    rows="4"
    placeholder="Tell us about your business goals, timeline, and key requirements..."
    required
  />

  <button type="submit" className="form-submit-btn">
    Send Project Inquiry
  </button>
</form>
  </div>
</section>
      </main>

      {/* FOOTER */}
      <footer className="footer-redesign">
        <div className="footer-redesign-container">
          <div className="footer-col-main">
            <h3>Joshwebtix</h3>
            <p>
              Joshwebtix builds high-performing, custom websites and web applications designed to elevate modern brands online.
            </p>
            <p className="footer-copy">© 2026 Joshwebtix. All rights reserved.</p>
          </div>

          <div className="footer-col-links">
            <h4>QUICK NAVIGATION</h4>
            <a href="#home">Home</a>
            <a href="#services">Services</a>
            <a href="#portfolio">Projects Portfolio</a>
            <a href="#about">About Joshwebtix</a>
            <a href="#pricing">Pricing Plans</a>
          </div>

          <div className="footer-col-links">
            <h4>LEGAL &amp; SUPPORT</h4>
            <a href="#contact">Contact Us</a>
            <a href="#privacy">Privacy Policy</a>
            <a href="#terms">Terms of Service</a>
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;
