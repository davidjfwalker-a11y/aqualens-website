"use client";

import React, { useState, useEffect, useRef } from "react";

const AquaLensLogo = ({ size }: { size: number }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"
      fill="currentColor"
    />
    <circle cx="12" cy="12" r="3" fill="currentColor" />
  </svg>
);

export default function Home() {
  const [scrolled, setScrolled] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [modalImage, setModalImage] = useState<string | null>(null);

  const galleryImages = [
    { src: "/screenshots/new_app_screens/home-v2.png", alt: "Home Screen" },
    { src: "/screenshots/new_app_screens/scan-fish-1-v2.png", alt: "Fish ID Scanner" },
    { src: "/screenshots/new_app_screens/scan-fish-2-v2.png", alt: "Plant ID Scanner" },
    { src: "/screenshots/new_app_screens/scan-sick-v2.png", alt: "Health Diagnostics" },
    { src: "/screenshots/new_app_screens/journal-1-v2.png", alt: "Digital Logbook" },
    { src: "/screenshots/new_app_screens/library-items-v2.png", alt: "Digital Species Library" },
    { src: "/screenshots/new_app_screens/journal-2-v2.png", alt: "Journal Entry Details" },
    { src: "/screenshots/new_app_screens/health-medication-v2.png", alt: "Medication Dosing & Tracking" },
    { src: "/screenshots/new_app_screens/hardware-light-lab-v2.png", alt: "Light Lab Simulation" },
    { src: "/screenshots/new_app_screens/nutrient-lab-1-v2.png", alt: "Nutrient Analysis" },
    { src: "/screenshots/new_app_screens/nutrient-lab-2-v2.png", alt: "Dosing Calculator" },
    { src: "/screenshots/new_app_screens/maintenance-v2.png", alt: "Maintenance & Quick Logs" },
    { src: "/screenshots/new_app_screens/filter-hardware-v2.png", alt: "Filter Hardware Lab" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
          }
        });
      },
      { threshold: 0.1 }
    );
    document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const onMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    if (scrollRef.current) {
      scrollRef.current.classList.add("dragging");
      setStartX(e.pageX - scrollRef.current.offsetLeft);
      setScrollLeft(scrollRef.current.scrollLeft);
    }
  };

  const onMouseLeave = () => {
    setIsDragging(false);
    if (scrollRef.current) scrollRef.current.classList.remove("dragging");
  };

  const onMouseUp = () => {
    setIsDragging(false);
    if (scrollRef.current) scrollRef.current.classList.remove("dragging");
  };

  const onMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !scrollRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    scrollRef.current.scrollLeft = scrollLeft - walk;
  };

  // Touch equivalents
  const onTouchStart = (e: React.TouchEvent) => {
    setIsDragging(true);
    if (scrollRef.current) {
      scrollRef.current.classList.add("dragging");
      setStartX(e.touches[0].pageX - scrollRef.current.offsetLeft);
      setScrollLeft(scrollRef.current.scrollLeft);
    }
  };

  const onTouchEnd = () => {
    setIsDragging(false);
    if (scrollRef.current) scrollRef.current.classList.remove("dragging");
  };

  const onTouchMove = (e: React.TouchEvent) => {
    if (!isDragging || !scrollRef.current) return;
    const x = e.touches[0].pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    scrollRef.current.scrollLeft = scrollLeft - walk;
  };

  return (
    <>
      {modalImage && (
        <div className="modal-overlay" onClick={() => setModalImage(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setModalImage(null)}>
              <i className="fa-solid fa-xmark"></i>
            </button>
            <img src={modalImage} alt="Expanded Screenshot" />
          </div>
        </div>
      )}

      <nav className={`nav ${scrolled ? "scrolled" : ""}`}>
        <div className="container nav-inner">
          <a href="#" className="nav-logo">
            <AquaLensLogo size={36} />
            <span>AquaLens</span>
          </a>
          <ul className="nav-links">
            <li><a href="#identification">AI Scanner</a></li>
            <li><a href="#health">Health</a></li>
            <li><a href="#journal">The Brain</a></li>
            <li><a href="#maintenance">Maintenance</a></li>
            <li><a href="#hardware">Labs & Hardware</a></li>
            <li><a href="#filter-lab">Filter Lab</a></li>
            <li><a href="#nutrients">Nutrient Lab</a></li>
            <li><a href="#opex">OPEX Lab</a></li>
            <li><a href="#finances">Financial Tracker</a></li>
            <li><a href="#gallery">Gallery</a></li>
          </ul>
          <a href="#download" className="nav-cta">Join Beta</a>
        </div>
      </nav>

      <div className="hero-bg"></div>
      <section className="hero">
        <div className="container hero-inner">
          <div className="hero-content">
            <span className="hero-badge animate-in">
              <i className="fa-brands fa-google-play"></i> Currently in Play Beta
            </span>
            <h1 className="animate-in animate-delay-1">
              Complete <span className="text-gradient">Aquarium Intelligence</span>
            </h1>
            <p className="hero-subtitle animate-in animate-delay-2">
              The ultimate AI companion for your underwater ecosystem. Instant species ID, total auto-journaling, and pro-grade engineering labs.
              <br /><br />
              <strong>Launching on App Store & Google Play early April.</strong>
            </p>


          </div>
        </div>
      </section>

      <section id="identification" className="feature-section">
        <div className="container">
          <div className="section-header reveal">
            <span className="section-label emerald">
              <i className="fa-solid fa-wand-magic-sparkles"></i> AI Scanner
            </span>
            <h2>Instant Fish & Plant ID</h2>
            <p>
              Point. Scan. Know Everything. Our cutting-edge vision AI recognizes thousands of fish, plants, algae, and invertebrates instantly in a single frame.
            </p>
          </div>
          <div className="feature-grid">
            <div className="feature-info reveal">
              <h3>
                Identify and Diagnose in <span className="text-gradient">Real-Time</span>
              </h3>
              <p>
                Get instant care advice, compatibility checks, and visual health diagnosis directly from your camera.
              </p>
              <ul className="feature-list">
                <li>
                  <span className="icon emerald"><i className="fa-solid fa-leaf"></i></span>
                  <span><strong>Comprehensive Discovery</strong> — Instantly ID fish and plants, and swipe through multiple species found in the same tank.</span>
                </li>
                <li>
                  <span className="icon sky"><i className="fa-solid fa-book-open"></i></span>
                  <span><strong>Detailed Care Logs</strong> — View temperature ranges, pH requirements, and feeding habits with a single tap.</span>
                </li>
                <li>
                  <span className="icon rose"><i className="fa-solid fa-heart-pulse"></i></span>
                  <span><strong>Visual Health Triage</strong> — AquaLens automatically flags potential sick fish issues (like Ich or fin rot) and provides tailored educational care suggestions.</span>
                </li>
              </ul>
            </div>
            <div className="feature-visual reveal animate-delay-2">
              <div className="multi-phone-display">
                <div className="device-phone phone-back"><img src="/screenshots/new_app_screens/scan-fish-2-v2.png" /></div>
                <div className="device-phone phone-front glow-emerald">
                  <img src="/screenshots/new_app_screens/scan-fish-1-v2.png" alt="Fish UI" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="section-divider"></div>

      <section id="health" className="feature-section">
        <div className="container">
          <div className="section-header reveal">
            <span className="section-label rose">
              <i className="fa-solid fa-eye"></i> Visual Health Triage
            </span>
            <h2>Spot Potential Issues Early</h2>
            <p>
              AquaLens's visual triage scanner flags potential anomalies
              on your fish. Get AI-generated observations and educational care
              suggestions to help guide conversations with your aquatic veterinarian.
            </p>
          </div>
          <div className="feature-grid reverse">
            <div className="feature-info reveal">
              <h3>
                AI-Powered Pathology & <span style={{ color: "#fb7185" }}>Precise Medicating</span>
              </h3>
              <p>
                When the scanner flags a potential concern, the card highlights it
                with observations and educational suggestions. AquaLens helps you
                know what to look for, and exactly how much medication to use based on your exact water volume.
              </p>
              <ul className="feature-list">
                <li>
                  <span className="icon rose"><i className="fa-solid fa-eye"></i></span>
                  <span><strong>Anomaly Flagging</strong> — AI highlights visual signs that may indicate common conditions like Ich, fin damage, or fungal growth.</span>
                </li>
                <li>
                  <span className="icon sky"><i className="fa-solid fa-calculator"></i></span>
                  <span><strong>Medication Calculator</strong> — Calculate exact dosing amounts required for hundreds of commercial treatments directly against your true net water volume.</span>
                </li>
                <li>
                  <span className="icon violet"><i className="fa-solid fa-bell-concierge"></i></span>
                  <span><strong>Monitor & Notify</strong> — Track active medication cycles in The Brain. Auto-reminders alert you when the next dose is due or when it's time to run carbon to clear the water.</span>
                </li>
              </ul>
              <p style={{ fontSize: "0.75rem", color: "#71717a", marginTop: "1rem", fontStyle: "italic" }}>
                * AquaLens is an educational tool and does not provide veterinary
                medical advice. Always consult a qualified aquatic veterinarian
                for diagnosis and treatment.
              </p>
            </div>
            <div className="feature-visual reveal animate-delay-2">
              <div className="multi-phone-display">
                <div className="device-phone phone-back"><img src="/screenshots/new_app_screens/health-medication-v2.png" /></div>
                <div className="device-phone phone-front glow-rose">
                  <img
                    src="/screenshots/new_app_screens/scan-sick-v2.png"
                    alt="AquaLens pathology scan detecting Ich on a Cardinal Tetra"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="section-divider"></div>

      <section id="journal" className="feature-section">
        <div className="container">
          <div className="section-header reveal">
            <span className="section-label violet">
              <i className="fa-solid fa-brain"></i> The Brain
            </span>
            <h2>All-Inclusive Auto-Journaling</h2>
            <p>
              This is the true keeper. Every scan, every test, every drop of nutrients is tracked, analyzed, and auto-logged across your entire ecosystem.
            </p>
          </div>
          <div className="feature-grid reverse">
            <div className="feature-info reveal">
              <h3>
                The Beating Heart of <span style={{ color: "#a78bfa" }}>Your Tank</span>
              </h3>
              <p>
                No more manual data entry. AquaLens operates as a central nervous system for your aquarium, silently tracking your actions and alerting you before issues arise.
              </p>
              <ul className="feature-list">
                <li>
                  <span className="icon violet"><i className="fa-solid fa-timeline"></i></span>
                  <span><strong>Unified Timeline</strong> — Watch your tank evolve. See chemistry spikes alongside new fish additions and parameter shifts.</span>
                </li>
                <li>
                  <span className="icon amber"><i className="fa-solid fa-camera-retro"></i></span>
                  <span><strong>Visual Logging</strong> — Snap photos of your water tests; AquaLens reads the charts and logs the exact parameters automatically.</span>
                </li>
                <li>
                  <span className="icon sky"><i className="fa-solid fa-bell-concierge"></i></span>
                  <span><strong>Proactive AI Alerts</strong> — Overstocked? Chemical imbalance? The Brain connects the dots and sends preemptive warnings.</span>
                </li>
              </ul>
            </div>
            <div className="feature-visual reveal animate-delay-2">
              <div className="multi-phone-display">
                <div className="device-phone phone-back"><img src="/screenshots/new_app_screens/journal-2-v2.png" /></div>
                <div className="device-phone phone-front glow-violet">
                  <img src="/screenshots/new_app_screens/journal-1-v2.png" alt="Journal UI" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="section-divider"></div>

      <section id="maintenance" className="feature-section">
        <div className="container">
          <div className="section-header reveal">
            <span className="section-label emerald">
              <i className="fa-solid fa-screwdriver-wrench"></i> Quick Maintenance
            </span>
            <h2>Maximize Performance, Minimize Effort</h2>
            <p>
              Stop wasting time manually typing out routine tasks. AquaLens gives you pre-saved, custom quick buttons that auto-log your maintenance directly into The Brain instantly.
            </p>
          </div>
          <div className="feature-grid">
            <div className="feature-info reveal">
              <h3>
                One-Tap <span style={{ color: "#34d399" }}>Auto Logging</span>
              </h3>
              <p>
                Whether you just completed a weekly water change, swapped filter media, or finished trimming plants, AquaLens lets you log it in less than a second.
              </p>
              <ul className="feature-list">
                <li>
                  <span className="icon emerald"><i className="fa-solid fa-bolt"></i></span>
                  <span><strong>Custom Quick Buttons</strong> — Build a dashboard of your most frequent tasks. Tap once to auto-log them with the current date and time.</span>
                </li>
                <li>
                  <span className="icon sky"><i className="fa-solid fa-clock-rotate-left"></i></span>
                  <span><strong>Save Precious Time</strong> — Keep hyper-accurate records of your husbandry routine without the tedious manual data entry.</span>
                </li>
                <li>
                  <span className="icon violet"><i className="fa-solid fa-microchip"></i></span>
                  <span><strong>Maximize Stability</strong> — AI cross-references your maintenance logs with water chemistry to identify performance-boosting habits.</span>
                </li>
              </ul>
            </div>
            <div className="feature-visual reveal animate-delay-2">
              <div className="device-phone glow-emerald" style={{ maxWidth: "100%" }}>
                <img
                  src="/screenshots/new_app_screens/maintenance-v2.png"
                  alt="AquaLens Routine Maintenance Quick Logging"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="section-divider"></div>

      <section id="hardware" className="feature-section">
        <div className="container">
          <div className="section-header reveal">
            <span className="section-label amber">
              <i className="fa-solid fa-microchip"></i> Hardware & AI Analysis
            </span>
            <h2>Pro-Grade Engineering Labs</h2>
            <p>
              Simulate true lighting gradients, dial in exact nutrient dosing, and analyze your equipment's real-world capacity in our advanced simulation labs.
            </p>
          </div>
          <div className="feature-grid">
            <div className="feature-info reveal">
              <h3>
                Master the <span style={{ color: "#fbbf24" }}>Light Lab</span>
              </h3>
              <p>
                Enter your exact fixture model, tank depth, and water clarity. AquaLens generates a full 2D attenuation map of your Photosynthetically Active Radiation (PAR) exactly where you need it.
              </p>
              <ul className="feature-list">
                <li>
                  <span className="icon amber"><i className="fa-solid fa-sun"></i></span>
                  <span><strong>Hardware Parity</strong> — Select from hundreds of pre-calculated commercial light fixtures for precise simulation.</span>
                </li>
                <li>
                  <span className="icon emerald"><i className="fa-solid fa-flask"></i></span>
                  <span><strong>Nutrient Stoichiometry</strong> — Calculate precise ppm contributions from commercial fertilizers automatically.</span>
                </li>
                <li>
                  <span className="icon sky"><i className="fa-solid fa-water"></i></span>
                  <span><strong>Fluid Dynamics</strong> — Filter turnover modeling based on your specific biomedia resistance and hardware choice.</span>
                </li>
              </ul>
            </div>
            <div className="feature-visual reveal animate-delay-2">
              <div className="device-phone glow-amber" style={{ maxWidth: "100%" }}>
                <img
                  src="/screenshots/new_app_screens/hardware-light-lab-v2.png"
                  alt="Hardware Light Lab"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="section-divider"></div>

      <section id="filter-lab" className="feature-section">
        <div className="container">
          <div className="section-header reveal">
            <span className="section-label amber">
              <i className="fa-solid fa-water"></i> Filter Hardware Lab
            </span>
            <h2>Flow & Filtration Dynamics</h2>
            <p>
              Model your exact filtration setup. From canister flow rates to bio-media resistance, AquaLens computes the real-world turnover of your system.
            </p>
          </div>
          <div className="feature-grid reverse">
            <div className="feature-info reveal">
              <h3>
                Optimize Your <span style={{ color: "#fbbf24" }}>System Turnover</span>
              </h3>
              <p>
                Knowing your pump's rated flow isn't enough. AquaLens calculates the pressure head, media drag, and pipe friction to give you true expected flow.
              </p>
              <ul className="feature-list">
                <li>
                  <span className="icon amber"><i className="fa-solid fa-gauge-high"></i></span>
                  <span><strong>Head Pressure Modeling</strong> — Map your plumbing height and pipe diameter to calculate true realistic GPH drop-off.</span>
                </li>
                <li>
                  <span className="icon sky"><i className="fa-solid fa-filter"></i></span>
                  <span><strong>Media Resistance</strong> — Understand how sponges, ceramic rings, and purigen impact your total system throughput.</span>
                </li>
                <li>
                  <span className="icon emerald"><i className="fa-solid fa-check-double"></i></span>
                  <span><strong>Turnover Validation</strong> — Ensure your flow rate meets the biological and mechanical needs of your exact tank volume and stocking level.</span>
                </li>
              </ul>
            </div>
            <div className="feature-visual reveal animate-delay-2">
              <div className="device-phone glow-amber" style={{ maxWidth: "100%" }}>
                <img
                  src="/screenshots/new_app_screens/filter-hardware-v2.png"
                  alt="AquaLens Filter Hardware Lab Flow Calculator"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="section-divider"></div>

      <section id="nutrients" className="feature-section">
        <div className="container">
          <div className="section-header reveal">
            <span className="section-label sky">
              <i className="fa-solid fa-flask-vial"></i> Nutrient Lab
            </span>
            <h2>Precision Chemistry & Dosing</h2>
            <p>
              Take the guesswork out of fertilizing your planted tank. AquaLens calculates the exact PPM contributions of any commercial or DIY fertilizer to keep your macros and micros perfectly balanced.
            </p>
          </div>
          <div className="feature-grid reverse">
            <div className="feature-info reveal">
              <h3>
                Dialed-In <span style={{ color: "#38bdf8" }}>Plant Nutrition</span>
              </h3>
              <p>
                From complex Estimative Index (EI) dosing to simple all-in-one commercial pumps, the Nutrient Lab models exactly what is happening in your water column.
              </p>
              <ul className="feature-list">
                <li>
                  <span className="icon sky"><i className="fa-solid fa-droplet"></i></span>
                  <span><strong>Stoichiometry Engine</strong> — Breaks down your specific fertilizers into raw elemental PPM (Nitrate, Phosphate, Potassium, Iron, etc.).</span>
                </li>
                <li>
                  <span className="icon sky"><i className="fa-solid fa-chart-pie"></i></span>
                  <span><strong>Target Matching</strong> — Compare your current tank dosage against established horticultural targets to identify deficiencies before algae takes over.</span>
                </li>
                <li>
                  <span className="icon sky"><i className="fa-solid fa-calendar-check"></i></span>
                  <span><strong>Schedule Integration</strong> — Seamlessly pushes your dosing calculations directly into The Brain's calendar for reminders.</span>
                </li>
              </ul>
            </div>
            <div className="feature-visual reveal animate-delay-2">
              <div className="multi-phone-display">
                <div className="device-phone phone-back"><img src="/screenshots/new_app_screens/nutrient-lab-2-v2.png" alt="Nutrient Lab Target Setup" /></div>
                <div className="device-phone phone-front glow-sky">
                  <img src="/screenshots/new_app_screens/nutrient-lab-1-v2.png" alt="Nutrient Lab Dosing Calculations" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="section-divider"></div>

      <section id="opex" className="feature-section">
        <div className="container">
          <div className="section-header reveal">
            <span className="section-label emerald">
              <i className="fa-solid fa-chart-line"></i> OPEX Lab
            </span>
            <h2>Master Your Operational Costs</h2>
            <p>
              Knowledge is power. AquaLens identifies every watt and every watt-hour used by your hardware to calculate real-world operational expenditures.
            </p>
          </div>
          <div className="feature-grid reverse">
            <div className="feature-info reveal">
              <h3>
                Precision <span style={{ color: "#10b981" }}>Utility Analysis</span>
              </h3>
              <p>
                AquaLens doesn't just guess. It models your specific electrical rates and hardware efficiency to give you a true cost-of-ownership breakdown.
              </p>
              <ul className="feature-list">
                <li>
                  <span className="icon emerald"><i className="fa-solid fa-bolt"></i></span>
                  <span><strong>Wattage Modeling</strong> — Calculate exact draw from heaters, lights, and pumps based on their real-world runtimes.</span>
                </li>
                <li>
                  <span className="icon violet"><i className="fa-solid fa-coins"></i></span>
                  <span><strong>Cost Forecasting</strong> — Predict monthly and yearly electrical costs with hyper-localized utility rate matching.</span>
                </li>
                <li>
                  <span className="icon sky"><i className="fa-solid fa-magnifying-glass-chart"></i></span>
                  <span><strong>Efficiency Suggestions</strong> — AI identifies hardware that is underperforming or consuming excessive power.</span>
                </li>
              </ul>
            </div>
            <div className="feature-visual reveal animate-delay-2">
              <div className="device-phone glow-emerald" style={{ maxWidth: "100%" }}>
                <img
                  src="/screenshots/new_app_screens/opex-lab-v2.png"
                  alt="AquaLens OPEX Laboratory"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="section-divider"></div>

      <section id="finances" className="feature-section">
        <div className="container">
          <div className="section-header reveal">
            <span className="section-label sky">
              <i className="fa-solid fa-credit-card"></i> Financial Tracker
            </span>
            <h2>Total Asset Management</h2>
            <p>
              Track every dollar spent on livestock, hardware, and maintenance. AquaLens provides a comprehensive financial ledger for your aquatic investment.
            </p>
          </div>
          <div className="feature-grid">
            <div className="feature-info reveal">
              <h3>
                Comprehensive <span style={{ color: "#0ea5e9" }}>Expense Tracking</span>
              </h3>
              <p>
                No more wondering where your budget went. The Financial Tracker keeps a detailed log of every acquisition and recurring cost.
              </p>
              <ul className="feature-list">
                <li>
                  <span className="icon sky"><i className="fa-solid fa-receipt"></i></span>
                  <span><strong>Automatic Ledgers</strong> — Log new livestock and hardware purchases directly from your scans.</span>
                </li>
                <li>
                  <span className="icon emerald"><i className="fa-solid fa-hand-holding-dollar"></i></span>
                  <span><strong>Subscription Monitoring</strong> — Track recurring costs for nutrients, water, and electricity in one unified view.</span>
                </li>
                <li>
                  <span className="icon amber"><i className="fa-solid fa-chart-pie"></i></span>
                  <span><strong>ROI Analysis</strong> — Understand the total cost of ownership for your species and systems.</span>
                </li>
              </ul>
            </div>
            <div className="feature-visual reveal animate-delay-2">
              <div className="multi-phone-display">
                <div className="device-phone phone-back"><img src="/screenshots/new_app_screens/opex-summary-v2.png" /></div>
                <div className="device-phone phone-front glow-sky">
                  <img src="/screenshots/new_app_screens/financial-tracker-v2.png" alt="Financial Tracker UI" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="section-divider"></div>

      <section id="gallery">
        <div className="container">
          <div className="section-header reveal">
            <span className="section-label sky">
              <i className="fa-solid fa-images"></i> Gallery
            </span>
            <h2>Explore Every Feature</h2>
            <p>
              Swipe through the gallery below. Click any image to expand and view the stunning, easy-to-use interface waiting for you.
            </p>
          </div>
        </div>
        <div
          className="screenshot-scroll reveal cursor-grab"
          ref={scrollRef}
          onMouseDown={onMouseDown}
          onMouseLeave={onMouseLeave}
          onMouseUp={onMouseUp}
          onMouseMove={onMouseMove}
          onTouchStart={onTouchStart}
          onTouchEnd={onTouchEnd}
          onTouchMove={onTouchMove}
        >
          {galleryImages.map((shot, i) => (
            <div key={i} className="screenshot-item" onClick={() => { if (!isDragging) setModalImage(shot.src); }}>
              <img src={shot.src} alt={shot.alt} draggable={false} />
            </div>
          ))}
        </div>
      </section>

      <div className="section-divider"></div>

      <section id="download" className="cta-section">
        <div className="container">
          <div className="cta-card reveal">
            <h2>
              Ready to Dive <span className="text-gradient">Deeper?</span>
            </h2>
            <p>
              We are currently in private beta testing on Google Play. Preparing for a massive public launch on both the App Store and Google Play in <strong>early April 2026</strong>.
            </p>
            <a
              href="mailto:aqualensapp@gmail.com?subject=AquaLens%20Beta%20Tester%20Request&body=Hi%2C%20I%27d%20love%20to%20be%20an%20early%20tester%20for%20AquaLens!%0A%0ADevice%3A%20%0APlatform%20(iOS%2FAndroid)%3A%20"
              className="cta-email-btn"
            >
              <i className="fa-solid fa-envelope"></i>
              Become a Beta Tester
            </a>
            <p className="cta-subtitle">
              or email us directly at{" "}
              <a
                href="mailto:aqualensapp@gmail.com"
                style={{ color: "#34d399", fontWeight: 600 }}
              >
                aqualensapp@gmail.com
              </a>
            </p>

            <div style={{ display: "flex", gap: "1rem", justifyContent: "center", margin: "2.5rem auto 0", flexWrap: "wrap", maxWidth: "600px" }}>
              <div className="store-badge" style={{ opacity: 1, cursor: "default", background: "rgba(255,255,255,0.05)" }}>
                <span className="store-icon">🍎</span>
                <span className="store-text">
                  <small>Launching Early April 2026</small>
                  <strong>App Store</strong>
                </span>
              </div>
              <div className="store-badge" style={{ opacity: 1, cursor: "default", background: "rgba(255,255,255,0.05)" }}>
                <span className="store-icon">▶️</span>
                <span className="store-text">
                  <small>Currently in Beta | Launch April</small>
                  <strong>Google Play</strong>
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="container footer-inner">
          <div className="footer-brand">
            <AquaLensLogo size={28} />
            <span>AquaLens</span>
          </div>
          <ul className="footer-links">
            <li>
              <a href="mailto:aqualensapp@gmail.com">Contact</a>
            </li>
            <li>
              <a href="#identification">Features</a>
            </li>
            <li>
              <a href="#gallery">Gallery</a>
            </li>
          </ul>
          <span className="footer-copy">
            © {new Date().getFullYear()} AquaLens. All rights reserved.
          </span>
        </div>
      </footer>
    </>
  );
}
