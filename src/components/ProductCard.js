import { useState } from "react";

const MARKET_FLAGS = { Dubai: "🇦🇪", India: "🇮🇳", Canada: "🇨🇦", US: "🇺🇸", UK: "🇬🇧" };

const MARKET_COLORS = {
  Dubai:  { bg: "rgba(245,158,11,0.08)",  border: "rgba(245,158,11,0.2)",  accent: "#f59e0b" },
  India:  { bg: "rgba(16,185,129,0.08)",  border: "rgba(16,185,129,0.2)",  accent: "#10b981" },
  Canada: { bg: "rgba(239,68,68,0.08)",   border: "rgba(239,68,68,0.2)",   accent: "#ef4444" },
  US:     { bg: "rgba(59,130,246,0.08)",  border: "rgba(59,130,246,0.2)",  accent: "#3b82f6" },
  UK:     { bg: "rgba(139,92,246,0.08)",  border: "rgba(139,92,246,0.2)",  accent: "#8b5cf6" },
};

const TAG_STYLES = {
  "🔥 Hot":         { bg: "rgba(239,68,68,0.12)",   color: "#f87171",  border: "rgba(239,68,68,0.3)"   },
  "🆕 Rising":      { bg: "rgba(16,185,129,0.12)",  color: "#34d399",  border: "rgba(16,185,129,0.3)"  },
  "📦 In Demand":   { bg: "rgba(59,130,246,0.12)",  color: "#60a5fa",  border: "rgba(59,130,246,0.3)"  },
  "⭐ Premium":     { bg: "rgba(245,158,11,0.12)",  color: "#fbbf24",  border: "rgba(245,158,11,0.3)"  },
};

function getRating(demand, supply) {
  const score = (demand - supply * 0.4) / 10;
  return Math.min(5, Math.max(1, score)).toFixed(1);
}

function getGapColor(gap) {
  if (gap > 50) return "#ef4444";
  if (gap > 35) return "#f97316";
  if (gap > 20) return "#eab308";
  return "#22c55e";
}

function StarRating({ value }) {
  const full = Math.floor(value);
  const half = value % 1 >= 0.5;
  return (
    <div style={{ display: "flex", alignItems: "center", gap: "3px" }}>
      {Array.from({ length: 5 }, (_, i) => (
        <span key={i} style={{
          fontSize: "12px",
          color: i < full ? "#f59e0b" : (i === full && half) ? "#f59e0b" : "#334155",
          opacity: i < full || (i === full && half) ? 1 : 0.5,
        }}>
          {i < full ? "★" : (i === full && half) ? "⯨" : "★"}
        </span>
      ))}
      <span style={{
        fontSize: "11px",
        color: "#94a3b8",
        marginLeft: "3px",
        fontFamily: "'JetBrains Mono', monospace",
        fontWeight: 600,
      }}>
        {value}
      </span>
    </div>
  );
}

function GlowBar({ demand, supply, accentColor }) {
  return (
    <div>
      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "6px" }}>
        <span style={{ fontSize: "11px", color: "#10b981", fontWeight: 600 }}>
          Demand {demand}%
        </span>
        <span style={{ fontSize: "11px", color: "#f97316", fontWeight: 600 }}>
          Supply {supply}%
        </span>
      </div>
      {/* Demand bar */}
      <div style={{
        height: "5px",
        background: "rgba(255,255,255,0.06)",
        borderRadius: "3px",
        overflow: "hidden",
        marginBottom: "4px",
        position: "relative",
      }}>
        <div style={{
          position: "absolute", left: 0, top: 0, bottom: 0,
          width: `${demand}%`,
          background: "linear-gradient(90deg, #10b981, #34d399)",
          borderRadius: "3px",
          boxShadow: "0 0 8px rgba(16,185,129,0.6)",
          transition: "width 1s cubic-bezier(0.23,1,0.32,1)",
        }} />
      </div>
      {/* Supply bar */}
      <div style={{
        height: "5px",
        background: "rgba(255,255,255,0.06)",
        borderRadius: "3px",
        overflow: "hidden",
      }}>
        <div style={{
          position: "absolute", left: 0, top: 0, bottom: 0,
          width: `${supply}%`,
          background: "linear-gradient(90deg, #ef4444, #f97316)",
          borderRadius: "3px",
          boxShadow: "0 0 8px rgba(239,68,68,0.5)",
        }} />
        <div style={{
          height: "100%",
          width: `${supply}%`,
          background: "linear-gradient(90deg, #ef4444, #f97316)",
          borderRadius: "3px",
          transition: "width 1s cubic-bezier(0.23,1,0.32,1) 0.2s",
        }} />
      </div>
    </div>
  );
}

export default function ProductCard({ product, index }) {
  const [hovered, setHovered] = useState(false);
  const [enquirySent, setEnquirySent] = useState(false);

  const rating = parseFloat(getRating(product.demand, product.supply));
  const gap = product.demand - product.supply;
  const gapColor = getGapColor(gap);
  const mc = MARKET_COLORS[product.market] || MARKET_COLORS.Dubai;
  const tagStyle = TAG_STYLES[product.tag] || TAG_STYLES["📦 In Demand"];

  function handleEnquire() {
    setEnquirySent(true);
    setTimeout(() => setEnquirySent(false), 3000);
  }

  return (
    <div
      className="card-3d"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        position: "relative",
        borderRadius: "20px",
        padding: "22px",
        background: hovered
          ? `linear-gradient(145deg, ${mc.bg}, rgba(13,20,36,0.95))`
          : "rgba(13,20,36,0.8)",
        border: `1px solid ${hovered ? mc.border : "rgba(255,255,255,0.07)"}`,
        display: "flex",
        flexDirection: "column",
        gap: "14px",
        cursor: "default",
        overflow: "hidden",
        backdropFilter: "blur(10px)",
        boxShadow: hovered
          ? `0 20px 60px rgba(0,0,0,0.5), 0 0 30px ${mc.bg}`
          : "0 4px 20px rgba(0,0,0,0.3)",
        transition: "all 0.4s cubic-bezier(0.23,1,0.32,1)",
        animationDelay: `${index * 0.05}s`,
        animation: "fadeInUp 0.5s ease both",
      }}
    >
      {/* Animated shimmer on hover */}
      {hovered && (
        <div style={{
          position: "absolute",
          inset: 0,
          background: "linear-gradient(135deg, transparent 30%, rgba(255,255,255,0.04) 50%, transparent 70%)",
          backgroundSize: "200% 200%",
          animation: "shimmer 1.5s linear infinite",
          borderRadius: "20px",
          pointerEvents: "none",
        }} />
      )}

      {/* Rank badge + Tag */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
        <div style={{
          width: 32, height: 32,
          borderRadius: "10px",
          background: `linear-gradient(135deg, ${mc.accent}22, ${mc.accent}44)`,
          border: `1px solid ${mc.border}`,
          display: "flex", alignItems: "center", justifyContent: "center",
          fontSize: "11px",
          fontWeight: 800,
          color: mc.accent,
          fontFamily: "'JetBrains Mono', monospace",
        }}>
          #{index + 1}
        </div>

        <div style={{
          fontSize: "11px",
          fontWeight: 700,
          background: tagStyle.bg,
          color: tagStyle.color,
          border: `1px solid ${tagStyle.border}`,
          borderRadius: "20px",
          padding: "3px 10px",
        }}>
          {product.tag}
        </div>
      </div>

      {/* Product title + market */}
      <div style={{ display: "flex", alignItems: "flex-start", gap: "12px" }}>
        <div style={{
          width: 44, height: 44,
          borderRadius: "12px",
          background: `linear-gradient(135deg, ${mc.bg}, rgba(255,255,255,0.03))`,
          border: `1px solid ${mc.border}`,
          display: "flex", alignItems: "center", justifyContent: "center",
          fontSize: "22px",
          flexShrink: 0,
          boxShadow: `0 4px 15px ${mc.bg}`,
          transition: "transform 0.3s",
          transform: hovered ? "scale(1.1) rotate(5deg)" : "scale(1)",
        }}>
          {MARKET_FLAGS[product.market]}
        </div>
        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={{
            fontSize: "11px",
            color: mc.accent,
            fontWeight: 700,
            textTransform: "uppercase",
            letterSpacing: "1px",
            marginBottom: "3px",
            fontFamily: "'JetBrains Mono', monospace",
          }}>
            {product.market}
          </div>
          <div style={{
            fontSize: "15px",
            fontWeight: 700,
            color: "#f1f5f9",
            lineHeight: 1.25,
            letterSpacing: "-0.3px",
          }}>
            {product.name}
          </div>
        </div>
      </div>

      {/* Category chips */}
      <div style={{ display: "flex", gap: "6px", flexWrap: "wrap" }}>
        <span style={{
          background: "rgba(99,102,241,0.12)",
          color: "#a5b4fc",
          borderRadius: "6px",
          padding: "2px 10px",
          fontSize: "11px",
          fontWeight: 600,
          border: "1px solid rgba(99,102,241,0.2)",
        }}>
          {product.category}
        </span>
        <span style={{
          background: "rgba(255,255,255,0.05)",
          color: "#64748b",
          borderRadius: "6px",
          padding: "2px 10px",
          fontSize: "11px",
          border: "1px solid rgba(255,255,255,0.08)",
        }}>
          Min: {product.minQty}
        </span>
        <span style={{
          background: "rgba(255,255,255,0.05)",
          color: "#64748b",
          borderRadius: "6px",
          padding: "2px 10px",
          fontSize: "11px",
          border: "1px solid rgba(255,255,255,0.08)",
        }}>
          {product.unit}
        </span>
      </div>

      {/* Bars */}
      <GlowBar demand={product.demand} supply={product.supply} accentColor={mc.accent} />

      {/* Rating + Gap */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <StarRating value={rating} />
        <div style={{
          display: "flex",
          alignItems: "center",
          gap: "5px",
          background: `${gapColor}15`,
          border: `1px solid ${gapColor}40`,
          borderRadius: "8px",
          padding: "3px 10px",
        }}>
          <span style={{ fontSize: "10px", color: "#64748b" }}>GAP</span>
          <span style={{ fontSize: "13px", fontWeight: 800, color: gapColor, fontFamily: "'JetBrains Mono', monospace" }}>
            +{gap}%
          </span>
        </div>
      </div>

      {/* Trend + Enquire */}
      <div style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        paddingTop: "10px",
        borderTop: "1px solid rgba(255,255,255,0.06)",
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: "5px" }}>
          <span style={{
            fontSize: "14px",
            filter: product.trend === "up" ? "drop-shadow(0 0 4px #4ade80)" : "none",
          }}>
            {product.trend === "up" ? "↑" : product.trend === "down" ? "↓" : "→"}
          </span>
          <span style={{
            fontSize: "11px",
            fontWeight: 700,
            color: product.trend === "up" ? "#4ade80" : product.trend === "down" ? "#f87171" : "#94a3b8",
            fontFamily: "'JetBrains Mono', monospace",
          }}>
            {product.trend === "up" ? "TRENDING" : product.trend === "down" ? "DECLINING" : "STABLE"}
          </span>
        </div>

        <button
          className="btn-premium"
          onClick={handleEnquire}
          style={{
            background: enquirySent
              ? "linear-gradient(135deg, #10b981, #34d399)"
              : `linear-gradient(135deg, ${mc.accent}, ${mc.accent}cc)`,
            color: "#fff",
            border: "none",
            borderRadius: "10px",
            padding: "7px 16px",
            fontSize: "12px",
            fontWeight: 700,
            cursor: "pointer",
            letterSpacing: "0.3px",
            boxShadow: enquirySent
              ? "0 4px 15px rgba(16,185,129,0.4)"
              : `0 4px 15px ${mc.accent}44`,
            transition: "all 0.3s",
          }}
        >
          {enquirySent ? "✓ Sent!" : "Enquire"}
        </button>
      </div>
    </div>
  );
}
