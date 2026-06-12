const MARKETS = ["All", "Dubai", "India", "Canada", "US", "UK"];
const MARKET_FLAGS = { All: "🌍", Dubai: "🇦🇪", India: "🇮🇳", Canada: "🇨🇦", US: "🇺🇸", UK: "🇬🇧" };

const MARKET_GRADIENTS = {
  All:    "linear-gradient(135deg, #6366f1, #8b5cf6)",
  Dubai:  "linear-gradient(135deg, #f59e0b, #d97706)",
  India:  "linear-gradient(135deg, #10b981, #059669)",
  Canada: "linear-gradient(135deg, #ef4444, #dc2626)",
  US:     "linear-gradient(135deg, #3b82f6, #2563eb)",
  UK:     "linear-gradient(135deg, #8b5cf6, #7c3aed)",
};

export default function MarketFilter({
  market, setMarket,
  category, setCategory, categories,
  search, setSearch,
  sortBy, setSortBy,
  filteredCount, hotCount, shortageCount,
}) {
  return (
    <div id="products-section" style={{
      position: "relative",
      zIndex: 10,
      padding: "50px 32px 0",
      maxWidth: "1300px",
      margin: "0 auto",
    }}>
      {/* Section header */}
      <div style={{ marginBottom: "32px" }}>
        <div style={{
          display: "inline-flex",
          alignItems: "center",
          gap: "6px",
          fontSize: "11px",
          color: "#6366f1",
          fontWeight: 700,
          letterSpacing: "2px",
          textTransform: "uppercase",
          fontFamily: "'JetBrains Mono', monospace",
          marginBottom: "10px",
        }}>
          <span style={{
            width: 20, height: 2,
            background: "linear-gradient(90deg, #6366f1, #8b5cf6)",
            borderRadius: "2px",
            display: "inline-block",
          }} />
          PRODUCT INTELLIGENCE
        </div>
        <h2 style={{
          fontSize: "clamp(28px, 4vw, 42px)",
          fontWeight: 800,
          letterSpacing: "-1px",
          marginBottom: "10px",
        }}>
          <span className="gradient-text">High-Demand</span>{" "}
          <span style={{ color: "#f1f5f9" }}>Products</span>
        </h2>
        <p style={{ fontSize: "15px", color: "#64748b", maxWidth: "600px" }}>
          Real-time demand vs supply analysis across 5 global markets.
          Find the best trade opportunities updated daily.
        </p>
      </div>

      {/* Market pills */}
      <div style={{
        display: "flex",
        gap: "8px",
        flexWrap: "wrap",
        marginBottom: "20px",
      }}>
        {MARKETS.map(m => (
          <button
            key={m}
            onClick={() => setMarket(m)}
            style={{
              position: "relative",
              background: market === m ? MARKET_GRADIENTS[m] : "rgba(255,255,255,0.04)",
              color: market === m ? "#fff" : "#94a3b8",
              border: `1px solid ${market === m ? "transparent" : "rgba(255,255,255,0.1)"}`,
              borderRadius: "12px",
              padding: "9px 18px",
              fontSize: "13px",
              fontWeight: 700,
              cursor: "pointer",
              transition: "all 0.3s cubic-bezier(0.23,1,0.32,1)",
              boxShadow: market === m ? "0 4px 20px rgba(99,102,241,0.35)" : "none",
              transform: market === m ? "scale(1.03)" : "scale(1)",
              overflow: "hidden",
            }}
          >
            {/* Animated background glow on active */}
            {market === m && (
              <div style={{
                position: "absolute", inset: 0,
                background: "linear-gradient(135deg, transparent 30%, rgba(255,255,255,0.15) 50%, transparent 70%)",
                backgroundSize: "200% 200%",
                animation: "shimmer 2s linear infinite",
                borderRadius: "12px",
              }} />
            )}
            <span style={{ position: "relative", zIndex: 1 }}>
              {MARKET_FLAGS[m]} {m === "All" ? "All Markets" : m}
            </span>
          </button>
        ))}
      </div>

      {/* Search + Controls Row */}
      <div style={{
        display: "flex",
        gap: "12px",
        flexWrap: "wrap",
        alignItems: "center",
        marginBottom: "20px",
      }}>
        {/* Search input */}
        <div style={{
          flex: "1 1 240px",
          position: "relative",
        }}>
          <span style={{
            position: "absolute",
            left: 14, top: "50%", transform: "translateY(-50%)",
            fontSize: "14px", color: "#475569",
          }}>
            🔍
          </span>
          <input
            value={search}
            onChange={e => setSearch(e.target.value)}
            placeholder="Search products, categories..."
            style={{
              width: "100%",
              background: "rgba(255,255,255,0.04)",
              border: "1px solid rgba(255,255,255,0.1)",
              borderRadius: "12px",
              padding: "12px 14px 12px 40px",
              color: "#f1f5f9",
              fontSize: "14px",
              fontFamily: "'Space Grotesk', sans-serif",
              transition: "border-color 0.3s, box-shadow 0.3s",
            }}
          />
        </div>

        {/* Category select */}
        <select
          value={category}
          onChange={e => setCategory(e.target.value)}
          style={{
            background: "rgba(255,255,255,0.04)",
            border: "1px solid rgba(255,255,255,0.1)",
            borderRadius: "12px",
            padding: "12px 16px",
            color: "#f1f5f9",
            fontSize: "13px",
            fontFamily: "'Space Grotesk', sans-serif",
            cursor: "pointer",
            appearance: "none",
            minWidth: "160px",
          }}
        >
          {categories.map(c => <option key={c} value={c} style={{ background: "#0d1424" }}>{c === "All" ? "All Categories" : c}</option>)}
        </select>

        {/* Sort select */}
        <select
          value={sortBy}
          onChange={e => setSortBy(e.target.value)}
          style={{
            background: "rgba(255,255,255,0.04)",
            border: "1px solid rgba(255,255,255,0.1)",
            borderRadius: "12px",
            padding: "12px 16px",
            color: "#f1f5f9",
            fontSize: "13px",
            fontFamily: "'Space Grotesk', sans-serif",
            cursor: "pointer",
            appearance: "none",
            minWidth: "150px",
          }}
        >
          <option value="demand" style={{ background: "#0d1424" }}>Sort: Demand ↓</option>
          <option value="gap" style={{ background: "#0d1424" }}>Sort: Supply Gap</option>
          <option value="rating" style={{ background: "#0d1424" }}>Sort: Rating</option>
        </select>
      </div>

      {/* Stats chips */}
      <div style={{ display: "flex", gap: "12px", flexWrap: "wrap", marginBottom: "30px" }}>
        {[
          { icon: "📦", label: "Showing", value: filteredCount, color: "#a5b4fc" },
          { icon: "🔥", label: "High Demand", value: hotCount, color: "#ef4444" },
          { icon: "⚡", label: "Supply Shortage", value: shortageCount, color: "#f59e0b" },
        ].map(s => (
          <div key={s.label} style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
            background: "rgba(255,255,255,0.03)",
            border: "1px solid rgba(255,255,255,0.07)",
            borderRadius: "12px",
            padding: "10px 16px",
          }}>
            <span style={{ fontSize: "16px" }}>{s.icon}</span>
            <div>
              <span style={{
                fontSize: "18px",
                fontWeight: 800,
                color: s.color,
                fontFamily: "'JetBrains Mono', monospace",
              }}>
                {s.value}
              </span>
              <span style={{
                fontSize: "10px",
                color: "#64748b",
                marginLeft: "6px",
                textTransform: "uppercase",
                letterSpacing: "0.5px",
              }}>
                {s.label}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
