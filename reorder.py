import re

with open('src/app/page.tsx', 'r') as f:
    content = f.read()

# Split the content into sections based on the comments
pattern = r"(?=\s*\{/\* ========== [A-Z /]+ ========== \*/\})"
sections = re.split(pattern, content)

# Sections:
# 0: headers + hero
# 1: features (Everything Your Aquarium Needs)
# 2: AI ID
# 3: Health Diagnostics
# 4: Tank Management
# 5: Labs & Pro
# 6: Gallery
# 7: CTA
# 8: Footer

header_hero = ""
features = ""
ai_id = ""
health = ""
tank = ""
labs = ""
gallery = ""
cta_footer = ""

for s in sections:
    if "========== NAVIGATION ==========" in s:
        header_hero = s
    elif "========== FEATURES OVERVIEW ==========" in s:
        features = s
    elif "========== AI IDENTIFICATION ==========" in s:
        ai_id = s
    elif "========== HEALTH DIAGNOSTICS ==========" in s:
        health = s
    elif "========== TANK MANAGEMENT ==========" in s:
        tank = s
    elif "========== LABS & PRO ==========" in s:
        labs = s
    elif "========== SCREENSHOT GALLERY ==========" in s:
        gallery = s
    elif "========== CTA / DOWNLOAD ==========" in s:
        cta_footer += s
    elif "========== FOOTER ==========" in s:
        cta_footer += s
    else:
        if "export default function Home" in s:
            header_hero += s

hardware = """
      {/* ========== HARDWARE / FILTRATION ========== */}
      <section id="hardware" className="feature-section">
        <div className="container">
          <div className="section-header reveal">
            <span className="section-label emerald">
              <i className="fa-solid fa-filter"></i> Hardware
            </span>
            <h2>Optimize Your Equipment</h2>
            <p>
              AquaLens doesn't just track your livestock — it helps you manage your 
              hardware. Model filtration flow rates, evaluate turnover, and know 
              exactly if your equipment is sufficient for your bioload.
            </p>
          </div>
          <div className="feature-grid reverse">
            <div className="feature-info reveal">
              <h3>
                Precision {" "}
                <span className="text-gradient" style={{ color: "#34d399" }}>Hardware Modeling</span>
              </h3>
              <p>
                Ensure your equipment is dialed in for maximum performance. 
                Keep track of maintenance schedules and view precise cumulative 
                flow calculations.
              </p>
              <ul className="feature-list">
                <li>
                  <span className="icon sky">
                    <i className="fa-solid fa-water"></i>
                  </span>
                  <span>
                    <strong>Flow Rate Analysis</strong> — calculate actual turnover times and assess filter capacity against your tank volume
                  </span>
                </li>
                <li>
                  <span className="icon amber">
                    <i className="fa-solid fa-bolt"></i>
                  </span>
                  <span>
                    <strong>Efficiency Metrics</strong> — visualize exactly how your current hardware stacks up against the required baselines
                  </span>
                </li>
              </ul>
            </div>
            <div className="feature-visual reveal animate-delay-2">
              <div className="feature-tablet">
                <img
                  src="/screenshots/real/filtration-lab.png"
                  alt="AquaLens Filtration Lab showing filter flow rates and turnover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="section-divider"></div>
"""

new_content = header_hero + ai_id + health + tank + labs + hardware + features + gallery + cta_footer

with open('src/app/page.tsx', 'w') as f:
    f.write(new_content)

print("Reordered successfully!")
