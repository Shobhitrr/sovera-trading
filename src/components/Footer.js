export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    {
      title: "Markets",
      links: ["Dubai", "India", "Canada", "United States", "United Kingdom"],
    },
    {
      title: "Products",
      links: ["Electronics", "Food & Spices", "Health & Beauty", "Textiles", "Luxury Goods"],
    },
    {
      title: "Company",
      links: ["About Us", "Careers", "Press", "Partners", "Contact"],
    },
    {
      title: "Resources",
      links: ["Documentation", "API Access", "Market Reports", "Blog", "Support"],
    },
  ];

  return (
    <footer style={{
      position: "relative",
      zIndex: 10,
      marginTop: "80px",
      borderTop: "1px solid rgba(99,102,241,0.15)",
      background: "linear-gradient(180deg, rgba(2,6,23,0) 0%, rgba(10,15,30,1) 30%)",
    }}>
      {/* Top divider with glow */}
      <div style={{
        height: 1,
        background: "linear-gradient(90deg, transparent, rgba(99,102,241,0.5), rgba(139,92,246,0.5), transparent)",
        boxShadow: "0 0 30px rgba(99,102,241,0.3)",
        marginBottom: "60px",
      }} />

      <div style={{
        maxWidth: "1300px",
        margin: "0 auto",
        padding: "0 32px 50px",
      }}>
        {/* Main grid */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
          gap: "40px",
          marginBottom: "60px",
        }}>
          {/* Brand column */}
          <div style={{ gridColumn: "span 1" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "16px" }}>
              <div style={{
                width: 36, height: 36,
                background: "linear-gradient(135deg, #6366f1, #8b5cf6)",
                borderRadius: "10px",
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: "16px",
                boxShadow: "0 0 20px rgba(99,102,241,0.4)",
              }}>
                ◈
              </div>
              <div>
                <div style={{ fontSize: "14px", fontWeight: 800, color: "#f1f5f9" }}>
                  SOVERA
                </div>
                <div style={{ fontSize: "8px", color: "#475569", letterSpacing: "3px" }}>
                  TRADING
                </div>
              </div>
            </div>
            <p style={{ fontSize: "13px", color: "#64748b", lineHeight: 1.7, maxWidth: "250px" }}>
              Premium trade intelligence platform. Connecting global markets with
              real-time demand and supply analytics.
            </p>

            {/* Social links */}
            <div style={{ display: "flex", gap: "8px", marginTop: "20px" }}>
              {["𝕏", "in", "◉", "▶"].map((icon, i) => (
                <div key={i} style={{
                  width: 32, height: 32,
                  borderRadius: "8px",
                  background: "rgba(255,255,255,0.05)",
                  border: "1px solid rgba(255,255,255,0.1)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: "12px",
                  color: "#64748b",
                  cursor: "pointer",
                  transition: "all 0.3s",
                }}>
                  {icon}
                </div>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {footerLinks.map(col => (
            <div key={col.title}>
              <h4 style={{
                fontSize: "12px",
                fontWeight: 700,
                color: "#a5b4fc",
                textTransform: "uppercase",
                letterSpacing: "1.5px",
                marginBottom: "16px",
                fontFamily: "'JetBrains Mono', monospace",
              }}>
                {col.title}
              </h4>
              <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                {col.links.map(link => (
                  <li key={link} style={{ marginBottom: "10px" }}>
                    <a href="#" style={{
                      color: "#64748b",
                      textDecoration: "none",
                      fontSize: "13px",
                      transition: "color 0.3s",
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "4px",
                    }}
                      onMouseEnter={e => e.target.style.color = "#a5b4fc"}
                      onMouseLeave={e => e.target.style.color = "#64748b"}
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter signup */}
        <div style={{
          background: "rgba(99,102,241,0.06)",
          border: "1px solid rgba(99,102,241,0.2)",
          borderRadius: "16px",
          padding: "28px 32px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: "20px",
          marginBottom: "40px",
        }}>
          <div>
            <div style={{ fontSize: "16px", fontWeight: 700, color: "#f1f5f9", marginBottom: "4px" }}>
              Stay ahead of market trends
            </div>
            <div style={{ fontSize: "13px", color: "#64748b" }}>
              Get weekly trade intelligence reports delivered to your inbox.
            </div>
          </div>
          <div style={{ display: "flex", gap: "8px" }}>
            <input
              type="email"
              placeholder="Enter your email"
              style={{
                background: "rgba(255,255,255,0.06)",
                border: "1px solid rgba(255,255,255,0.12)",
                borderRadius: "10px",
                padding: "10px 16px",
                color: "#f1f5f9",
                fontSize: "13px",
                minWidth: "200px",
                fontFamily: "'Space Grotesk', sans-serif",
              }}
            />
            <button
              className="btn-premium"
              style={{
                background: "linear-gradient(135deg, #6366f1, #8b5cf6)",
                color: "#fff",
                border: "none",
                borderRadius: "10px",
                padding: "10px 20px",
                fontSize: "13px",
                fontWeight: 700,
                cursor: "pointer",
                boxShadow: "0 4px 15px rgba(99,102,241,0.4)",
              }}
            >
              Subscribe
            </button>
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "12px",
          paddingTop: "20px",
          borderTop: "1px solid rgba(255,255,255,0.06)",
        }}>
          <div style={{ fontSize: "12px", color: "#475569" }}>
            &copy; {currentYear} Sovera Everyday Trading. All rights reserved.
          </div>
          <div style={{ display: "flex", gap: "16px" }}>
            {["Privacy", "Terms", "Cookies"].map(l => (
              <a key={l} href="#" style={{ fontSize: "12px", color: "#475569", textDecoration: "none" }}
                onMouseEnter={e => e.target.style.color = "#a5b4fc"}
                onMouseLeave={e => e.target.style.color = "#475569"}
              >
                {l}
              </a>
            ))}
          </div>
          <div style={{ fontSize: "11px", color: "#334155", fontFamily: "'JetBrains Mono', monospace" }}>
            🇦🇪 Dubai &middot; 🇮🇳 India &middot; 🇨🇦 Canada &middot; 🇺🇸 US &middot; 🇬🇧 UK
          </div>
        </div>
      </div>
    </footer>
  );
}
