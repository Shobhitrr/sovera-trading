const TICKER_ITEMS = [
  { label: "AI Hardware Chips (US)", change: "+4.2%", up: true },
  { label: "Saffron (Dubai)", change: "+2.8%", up: true },
  { label: "EV Battery Cells (US)", change: "+6.1%", up: true },
  { label: "Basmati Rice (India)", change: "+1.5%", up: true },
  { label: "Maple Syrup (Canada)", change: "-0.3%", up: false },
  { label: "Scottish Whisky (UK)", change: "+0.9%", up: true },
  { label: "Oud Wood (Dubai)", change: "+3.7%", up: true },
  { label: "Lobster (Canada)", change: "+5.2%", up: true },
  { label: "Ayurvedic Supplements (India)", change: "+2.1%", up: true },
  { label: "Solar Panel Kits (UK)", change: "+4.8%", up: true },
  { label: "Collagen Peptides (US)", change: "+1.9%", up: true },
  { label: "Organic Oat Milk (UK)", change: "+3.3%", up: true },
  { label: "Softwood Lumber (Canada)", change: "-1.2%", up: false },
  { label: "Gold Jewelry 22K (Dubai)", change: "+0.7%", up: true },
  { label: "Manuka Honey (UK)", change: "+2.6%", up: true },
];

export default function Ticker() {
  // Double items for seamless loop
  const items = [...TICKER_ITEMS, ...TICKER_ITEMS];

  return (
    <div style={{
      position: "relative",
      zIndex: 10,
      background: "rgba(2,6,23,0.85)",
      borderTop: "1px solid rgba(99,102,241,0.15)",
      borderBottom: "1px solid rgba(99,102,241,0.15)",
      backdropFilter: "blur(10px)",
      padding: "10px 0",
      overflow: "hidden",
    }}>
      {/* Left fade */}
      <div style={{
        position: "absolute", left: 0, top: 0, bottom: 0, width: "80px",
        background: "linear-gradient(to right, rgba(2,6,23,1), transparent)",
        zIndex: 2, pointerEvents: "none",
      }} />
      {/* Right fade */}
      <div style={{
        position: "absolute", right: 0, top: 0, bottom: 0, width: "80px",
        background: "linear-gradient(to left, rgba(2,6,23,1), transparent)",
        zIndex: 2, pointerEvents: "none",
      }} />

      <div className="ticker-track" style={{
        display: "flex",
        gap: "0",
        width: "max-content",
      }}>
        {items.map((item, i) => (
          <div key={i} style={{
            display: "flex",
            alignItems: "center",
            gap: "8px",
            padding: "0 24px",
            borderRight: "1px solid rgba(255,255,255,0.07)",
            whiteSpace: "nowrap",
          }}>
            <span style={{
              fontSize: "11px",
              color: "#64748b",
              fontFamily: "'JetBrains Mono', monospace",
              letterSpacing: "0.5px",
            }}>
              {item.label}
            </span>
            <span style={{
              fontSize: "12px",
              fontWeight: 700,
              color: item.up ? "#10b981" : "#ef4444",
              fontFamily: "'JetBrains Mono', monospace",
              background: item.up ? "rgba(16,185,129,0.1)" : "rgba(239,68,68,0.1)",
              padding: "1px 6px",
              borderRadius: "4px",
            }}>
              {item.up ? "▲" : "▼"} {item.change}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
