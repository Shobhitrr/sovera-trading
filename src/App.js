import { useState, useEffect } from "react";

const PRODUCTS = [
  // Dubai
  { id: 1, name: "Saffron (Premium Grade)", category: "Spices", market: "Dubai", demand: 97, supply: 32, unit: "per kg", minQty: "50g", trend: "up", tag: "🔥 Hot" },
  { id: 2, name: "Oud Wood / Agarwood", category: "Fragrance", market: "Dubai", demand: 96, supply: 28, unit: "per kg", minQty: "10g", trend: "up", tag: "🔥 Hot" },
  { id: 3, name: "Dates (Ajwa, Medjool)", category: "Food", market: "Dubai", demand: 91, supply: 55, unit: "per kg", minQty: "1kg", trend: "stable", tag: "📦 In Demand" },
  { id: 4, name: "Camel Milk Powder", category: "Dairy", market: "Dubai", demand: 88, supply: 40, unit: "per kg", minQty: "500g", trend: "up", tag: "🆕 Rising" },
  { id: 5, name: "Gold Jewelry (22K)", category: "Luxury", market: "Dubai", demand: 95, supply: 60, unit: "per gram", minQty: "5g", trend: "stable", tag: "⭐ Premium" },
  { id: 6, name: "Electronics (Refurbished Phones)", category: "Electronics", market: "Dubai", demand: 89, supply: 44, unit: "per unit", minQty: "1 unit", trend: "up", tag: "🔥 Hot" },
  { id: 7, name: "Frankincense Resin", category: "Fragrance", market: "Dubai", demand: 84, supply: 38, unit: "per kg", minQty: "100g", trend: "stable", tag: "📦 In Demand" },
  { id: 8, name: "Dry Fruits Mix (Pistachios, Almonds)", category: "Food", market: "Dubai", demand: 86, supply: 50, unit: "per kg", minQty: "250g", trend: "stable", tag: "📦 In Demand" },
  { id: 9, name: "Rose Water (Taif)", category: "Beauty", market: "Dubai", demand: 80, supply: 35, unit: "per liter", minQty: "250ml", trend: "up", tag: "🆕 Rising" },
  { id: 10, name: "Organic Turmeric (Raw)", category: "Spices", market: "Dubai", demand: 78, supply: 42, unit: "per kg", minQty: "500g", trend: "stable", tag: "📦 In Demand" },

  // India
  { id: 11, name: "Basmati Rice (1121 Grade)", category: "Grains", market: "India", demand: 95, supply: 58, unit: "per kg", minQty: "5kg", trend: "up", tag: "🔥 Hot" },
  { id: 12, name: "Organic Jaggery", category: "Food", market: "India", demand: 88, supply: 40, unit: "per kg", minQty: "1kg", trend: "up", tag: "🆕 Rising" },
  { id: 13, name: "Handloom Silk Fabric", category: "Textiles", market: "India", demand: 85, supply: 33, unit: "per meter", minQty: "1m", trend: "stable", tag: "⭐ Premium" },
  { id: 14, name: "Ayurvedic Herbal Supplements", category: "Health", market: "India", demand: 92, supply: 45, unit: "per pack", minQty: "1 pack", trend: "up", tag: "🔥 Hot" },
  { id: 15, name: "Cashews (W320 Grade)", category: "Nuts", market: "India", demand: 90, supply: 48, unit: "per kg", minQty: "500g", trend: "stable", tag: "📦 In Demand" },
  { id: 16, name: "Moringa Powder (Organic)", category: "Superfoods", market: "India", demand: 87, supply: 36, unit: "per kg", minQty: "100g", trend: "up", tag: "🆕 Rising" },
  { id: 17, name: "Cotton Yarn (Combed)", category: "Textiles", market: "India", demand: 82, supply: 55, unit: "per kg", minQty: "1kg", trend: "stable", tag: "📦 In Demand" },
  { id: 18, name: "Black Pepper (Malabar)", category: "Spices", market: "India", demand: 89, supply: 43, unit: "per kg", minQty: "250g", trend: "up", tag: "🔥 Hot" },
  { id: 19, name: "Marble & Granite Tiles", category: "Construction", market: "India", demand: 84, supply: 60, unit: "per sqft", minQty: "10 sqft", trend: "stable", tag: "📦 In Demand" },
  { id: 20, name: "Leather Goods (Handmade)", category: "Fashion", market: "India", demand: 80, supply: 38, unit: "per unit", minQty: "1 unit", trend: "up", tag: "🆕 Rising" },

  // Canada
  { id: 21, name: "Maple Syrup (Grade A)", category: "Food", market: "Canada", demand: 94, supply: 52, unit: "per liter", minQty: "250ml", trend: "stable", tag: "⭐ Premium" },
  { id: 22, name: "Wild Blueberries (Frozen)", category: "Fruit", market: "Canada", demand: 88, supply: 44, unit: "per kg", minQty: "500g", trend: "up", tag: "🆕 Rising" },
  { id: 23, name: "Canola Oil (Cold Pressed)", category: "Oils", market: "Canada", demand: 85, supply: 60, unit: "per liter", minQty: "1L", trend: "stable", tag: "📦 In Demand" },
  { id: 24, name: "Softwood Lumber (SPF)", category: "Construction", market: "Canada", demand: 91, supply: 38, unit: "per board ft", minQty: "50 bd ft", trend: "up", tag: "🔥 Hot" },
  { id: 25, name: "Lobster (Live)", category: "Seafood", market: "Canada", demand: 93, supply: 30, unit: "per kg", minQty: "1kg", trend: "up", tag: "🔥 Hot" },
  { id: 26, name: "Icewine", category: "Beverages", market: "Canada", demand: 82, supply: 25, unit: "per bottle", minQty: "1 bottle", trend: "up", tag: "🆕 Rising" },
  { id: 27, name: "Lentils (Red & Green)", category: "Pulses", market: "Canada", demand: 87, supply: 55, unit: "per kg", minQty: "1kg", trend: "stable", tag: "📦 In Demand" },
  { id: 28, name: "Oat Fiber / Oat Bran", category: "Health", market: "Canada", demand: 84, supply: 47, unit: "per kg", minQty: "500g", trend: "up", tag: "🆕 Rising" },
  { id: 29, name: "Potash Fertilizer", category: "Agriculture", market: "Canada", demand: 90, supply: 42, unit: "per kg", minQty: "25kg", trend: "stable", tag: "📦 In Demand" },
  { id: 30, name: "Wild Salmon (Smoked)", category: "Seafood", market: "Canada", demand: 86, supply: 35, unit: "per kg", minQty: "200g", trend: "up", tag: "🆕 Rising" },

  // US
  { id: 31, name: "Organic Almonds (Whole)", category: "Nuts", market: "US", demand: 93, supply: 50, unit: "per kg", minQty: "250g", trend: "stable", tag: "📦 In Demand" },
  { id: 32, name: "AI Hardware Chips (Used)", category: "Electronics", market: "US", demand: 98, supply: 18, unit: "per unit", minQty: "1 unit", trend: "up", tag: "🔥 Hot" },
  { id: 33, name: "Bourbon Whiskey (Small Batch)", category: "Beverages", market: "US", demand: 88, supply: 40, unit: "per bottle", minQty: "1 bottle", trend: "stable", tag: "⭐ Premium" },
  { id: 34, name: "Soybeans (Non-GMO)", category: "Grains", market: "US", demand: 91, supply: 55, unit: "per ton", minQty: "10kg", trend: "stable", tag: "📦 In Demand" },
  { id: 35, name: "Collagen Peptides (Supplement)", category: "Health", market: "US", demand: 92, supply: 44, unit: "per kg", minQty: "250g", trend: "up", tag: "🔥 Hot" },
  { id: 36, name: "Baby Formula (Specialty)", category: "Baby Products", market: "US", demand: 95, supply: 30, unit: "per can", minQty: "1 can", trend: "up", tag: "🔥 Hot" },
  { id: 37, name: "Craft Paper Packaging", category: "Packaging", market: "US", demand: 86, supply: 52, unit: "per roll", minQty: "1 roll", trend: "up", tag: "🆕 Rising" },
  { id: 38, name: "EV Battery Components (Cells)", category: "Electronics", market: "US", demand: 97, supply: 22, unit: "per unit", minQty: "10 units", trend: "up", tag: "🔥 Hot" },
  { id: 39, name: "Blueberry Concentrate", category: "Food", market: "US", demand: 84, supply: 40, unit: "per liter", minQty: "500ml", trend: "stable", tag: "📦 In Demand" },
  { id: 40, name: "Vitamin D3 Supplements", category: "Health", market: "US", demand: 90, supply: 48, unit: "per bottle", minQty: "1 bottle", trend: "up", tag: "🆕 Rising" },

  // UK
  { id: 41, name: "Scottish Whisky (Single Malt)", category: "Beverages", market: "UK", demand: 93, supply: 35, unit: "per bottle", minQty: "1 bottle", trend: "stable", tag: "⭐ Premium" },
  { id: 42, name: "Clotted Cream (Fresh)", category: "Dairy", market: "UK", demand: 82, supply: 40, unit: "per kg", minQty: "200g", trend: "stable", tag: "📦 In Demand" },
  { id: 43, name: "Manuka Honey (UMF 20+)", category: "Food", market: "UK", demand: 90, supply: 25, unit: "per kg", minQty: "100g", trend: "up", tag: "🔥 Hot" },
  { id: 44, name: "Electric Bike Parts (Motors)", category: "Electronics", market: "UK", demand: 94, supply: 32, unit: "per unit", minQty: "1 unit", trend: "up", tag: "🔥 Hot" },
  { id: 45, name: "Woolen Fabric (Harris Tweed)", category: "Textiles", market: "UK", demand: 85, supply: 28, unit: "per meter", minQty: "0.5m", trend: "stable", tag: "⭐ Premium" },
  { id: 46, name: "Organic Oat Milk", category: "Dairy Alt", market: "UK", demand: 91, supply: 50, unit: "per liter", minQty: "1L", trend: "up", tag: "🆕 Rising" },
  { id: 47, name: "Plant-Based Meat Products", category: "Food", market: "UK", demand: 89, supply: 42, unit: "per kg", minQty: "200g", trend: "up", tag: "🆕 Rising" },
  { id: 48, name: "Fine Bone China (Sets)", category: "Homeware", market: "UK", demand: 80, supply: 30, unit: "per set", minQty: "1 set", trend: "stable", tag: "⭐ Premium" },
  { id: 49, name: "Solar Panel Kits (Portable)", category: "Energy", market: "UK", demand: 92, supply: 36, unit: "per unit", minQty: "1 unit", trend: "up", tag: "🔥 Hot" },
  { id: 50, name: "CBD Oil (Full Spectrum)", category: "Health", market: "UK", demand: 87, supply: 40, unit: "per bottle", minQty: "1 bottle", trend: "up", tag: "🆕 Rising" },
];

const MARKETS = ["All", "Dubai", "India", "Canada", "US", "UK"];
const CATEGORIES = ["All", ...new Set(PRODUCTS.map(p => p.category))];

const MARKET_FLAGS = { Dubai: "🇦🇪", India: "🇮🇳", Canada: "🇨🇦", US: "🇺🇸", UK: "🇬🇧" };

function getRating(demand, supply) {
  const score = (demand - supply * 0.4) / 10;
  return Math.min(5, Math.max(1, score)).toFixed(1);
}

function getGapColor(demand, supply) {
  const gap = demand - supply;
  if (gap > 50) return "#ef4444";
  if (gap > 30) return "#f97316";
  if (gap > 15) return "#eab308";
  return "#22c55e";
}

function StarRating({ rating }) {
  const full = Math.floor(rating);
  const half = rating % 1 >= 0.5;
  return (
    <span style={{ color: "#f59e0b", fontSize: "14px", letterSpacing: "1px" }}>
      {"★".repeat(full)}{half ? "½" : ""}{"☆".repeat(5 - full - (half ? 1 : 0))}
      <span style={{ color: "#94a3b8", fontSize: "12px", marginLeft: "4px" }}>{rating}</span>
    </span>
  );
}

function ProductCard({ product, index }) {
  const rating = getRating(product.demand, product.supply);
  const gap = product.demand - product.supply;
  const gapColor = getGapColor(product.demand, product.supply);

  return (
    <div style={{
      background: "rgba(255,255,255,0.04)",
      border: "1px solid rgba(255,255,255,0.08)",
      borderRadius: "16px",
      padding: "20px",
      display: "flex",
      flexDirection: "column",
      gap: "12px",
      transition: "transform 0.2s, box-shadow 0.2s",
      cursor: "default",
      position: "relative",
      overflow: "hidden",
    }}
      onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-3px)"; e.currentTarget.style.boxShadow = "0 12px 40px rgba(0,0,0,0.4)"; }}
      onMouseLeave={e => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "none"; }}
    >
      <div style={{ position: "absolute", top: "12px", right: "14px", fontSize: "11px", background: gapColor + "22", color: gapColor, border: `1px solid ${gapColor}44`, borderRadius: "20px", padding: "2px 10px", fontWeight: 700 }}>
        {product.tag}
      </div>
      <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
        <span style={{ fontSize: "22px", background: "rgba(255,255,255,0.06)", borderRadius: "10px", width: "40px", height: "40px", display: "flex", alignItems: "center", justifyContent: "center" }}>
          {MARKET_FLAGS[product.market]}
        </span>
        <div>
          <div style={{ fontSize: "12px", color: "#64748b", fontWeight: 600, textTransform: "uppercase", letterSpacing: "1px" }}>#{index + 1} · {product.market}</div>
          <div style={{ fontSize: "16px", fontWeight: 700, color: "#f1f5f9", lineHeight: 1.2 }}>{product.name}</div>
        </div>
      </div>

      <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
        <span style={{ background: "rgba(99,102,241,0.15)", color: "#a5b4fc", borderRadius: "8px", padding: "2px 10px", fontSize: "11px", fontWeight: 600 }}>{product.category}</span>
        <span style={{ background: "rgba(255,255,255,0.06)", color: "#94a3b8", borderRadius: "8px", padding: "2px 10px", fontSize: "11px" }}>Min: {product.minQty}</span>
        <span style={{ background: "rgba(255,255,255,0.06)", color: "#94a3b8", borderRadius: "8px", padding: "2px 10px", fontSize: "11px" }}>{product.unit}</span>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
        <div style={{ display: "flex", justifyContent: "space-between", fontSize: "12px" }}>
          <span style={{ color: "#22c55e" }}>Demand {product.demand}%</span>
          <span style={{ color: "#f97316" }}>Supply {product.supply}%</span>
        </div>
        <div style={{ background: "rgba(255,255,255,0.07)", borderRadius: "6px", height: "6px", position: "relative", overflow: "hidden" }}>
          <div style={{ position: "absolute", left: 0, top: 0, height: "100%", width: `${product.demand}%`, background: "linear-gradient(90deg,#22c55e,#4ade80)", borderRadius: "6px", opacity: 0.7 }} />
          <div style={{ position: "absolute", left: 0, top: 0, height: "100%", width: `${product.supply}%`, background: "linear-gradient(90deg,#ef4444,#f97316)", borderRadius: "6px", opacity: 0.5 }} />
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <StarRating rating={parseFloat(rating)} />
          <span style={{ fontSize: "11px", color: gapColor, fontWeight: 700 }}>Gap: +{gap}%</span>
        </div>
      </div>

      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", borderTop: "1px solid rgba(255,255,255,0.06)", paddingTop: "10px" }}>
        <span style={{ fontSize: "11px", color: product.trend === "up" ? "#4ade80" : product.trend === "down" ? "#f87171" : "#94a3b8", fontWeight: 700 }}>
          {product.trend === "up" ? "↑ Trending Up" : product.trend === "down" ? "↓ Declining" : "→ Stable"}
        </span>
        <button style={{ background: "linear-gradient(135deg,#6366f1,#8b5cf6)", color: "#fff", border: "none", borderRadius: "8px", padding: "5px 14px", fontSize: "12px", fontWeight: 700, cursor: "pointer" }}
          onClick={() => alert(`Enquiry sent for: ${product.name} (${product.market})\n\nOur team will contact you within 24 hours.`)}>
          Enquire
        </button>
      </div>
    </div>
  );
}

export default function App() {
  const [market, setMarket] = useState("All");
  const [category, setCategory] = useState("All");
  const [search, setSearch] = useState("");
  const [sortBy, setSortBy] = useState("demand");
  const [today, setToday] = useState("");

  useEffect(() => {
    setToday(new Date().toLocaleDateString("en-GB", { weekday: "long", year: "numeric", month: "long", day: "numeric" }));
  }, []);

  const filtered = PRODUCTS
    .filter(p => (market === "All" || p.market === market) && (category === "All" || p.category === category) && (p.name.toLowerCase().includes(search.toLowerCase()) || p.category.toLowerCase().includes(search.toLowerCase())))
    .sort((a, b) => sortBy === "demand" ? b.demand - a.demand : sortBy === "gap" ? (b.demand - b.supply) - (a.demand - a.supply) : parseFloat(getRating(b.demand, b.supply)) - parseFloat(getRating(a.demand, a.supply)));

  return (
    <div style={{ minHeight: "100vh", background: "#0a0f1e", color: "#f1f5f9", fontFamily: "'Segoe UI', system-ui, sans-serif" }}>
      {/* Header */}
      <div style={{ background: "linear-gradient(135deg,#0f172a,#1e1b4b)", borderBottom: "1px solid rgba(99,102,241,0.2)", padding: "24px 20px 20px", textAlign: "center", position: "sticky", top: 0, zIndex: 100, backdropFilter: "blur(10px)" }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "12px", marginBottom: "4px" }}>
          <span style={{ fontSize: "32px" }}>🌐</span>
          <h1 style={{ margin: 0, fontSize: "clamp(20px,4vw,30px)", fontWeight: 900, background: "linear-gradient(135deg,#a5b4fc,#818cf8,#c084fc)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
            Sovera Everyday Trading
          </h1>
        </div>
        <div style={{ fontSize: "12px", color: "#64748b", marginBottom: "16px" }}>
          📅 {today} &nbsp;·&nbsp; Top 50 High-Demand Products · Updated Daily
        </div>
        <div style={{ display: "flex", gap: "8px", justifyContent: "center", flexWrap: "wrap" }}>
          {MARKETS.map(m => (
            <button key={m} onClick={() => setMarket(m)} style={{ background: market === m ? "linear-gradient(135deg,#6366f1,#8b5cf6)" : "rgba(255,255,255,0.06)", color: market === m ? "#fff" : "#94a3b8", border: "1px solid " + (market === m ? "transparent" : "rgba(255,255,255,0.1)"), borderRadius: "20px", padding: "6px 14px", fontSize: "13px", cursor: "pointer", fontWeight: 600, transition: "all 0.2s" }}>
              {m === "All" ? "🌍 All Markets" : MARKET_FLAGS[m] + " " + m}
            </button>
          ))}
        </div>
      </div>

      {/* Controls */}
      <div style={{ padding: "16px 20px", display: "flex", gap: "10px", flexWrap: "wrap", maxWidth: "1200px", margin: "0 auto" }}>
        <input value={search} onChange={e => setSearch(e.target.value)} placeholder="🔍 Search products..." style={{ flex: "1", minWidth: "180px", background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "10px", padding: "10px 14px", color: "#f1f5f9", fontSize: "14px", outline: "none" }} />
        <select value={category} onChange={e => setCategory(e.target.value)} style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "10px", padding: "10px 14px", color: "#f1f5f9", fontSize: "13px", cursor: "pointer" }}>
          {CATEGORIES.map(c => <option key={c} value={c} style={{ background: "#1e293b" }}>{c}</option>)}
        </select>
        <select value={sortBy} onChange={e => setSortBy(e.target.value)} style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "10px", padding: "10px 14px", color: "#f1f5f9", fontSize: "13px", cursor: "pointer" }}>
          <option value="demand" style={{ background: "#1e293b" }}>Sort: Demand</option>
          <option value="gap" style={{ background: "#1e293b" }}>Sort: Supply Gap</option>
          <option value="rating" style={{ background: "#1e293b" }}>Sort: Rating</option>
        </select>
      </div>

      {/* Stats Bar */}
      <div style={{ display: "flex", gap: "12px", padding: "0 20px 16px", maxWidth: "1200px", margin: "0 auto", flexWrap: "wrap" }}>
        {[["📦", "Total Products", filtered.length], ["🔥", "High Demand (90%+)", filtered.filter(p => p.demand >= 90).length], ["⚡", "Supply Shortage", filtered.filter(p => (p.demand - p.supply) > 40).length]].map(([icon, label, val]) => (
          <div key={label} style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.07)", borderRadius: "12px", padding: "10px 16px", display: "flex", alignItems: "center", gap: "8px" }}>
            <span style={{ fontSize: "18px" }}>{icon}</span>
            <div>
              <div style={{ fontSize: "18px", fontWeight: 800, color: "#a5b4fc" }}>{val}</div>
              <div style={{ fontSize: "10px", color: "#64748b", textTransform: "uppercase", letterSpacing: "0.5px" }}>{label}</div>
            </div>
          </div>
        ))}
      </div>

      {/* Grid */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(300px,1fr))", gap: "16px", padding: "0 20px 40px", maxWidth: "1200px", margin: "0 auto" }}>
        {filtered.map((p, i) => <ProductCard key={p.id} product={p} index={i} />)}
        {filtered.length === 0 && <div style={{ gridColumn: "1/-1", textAlign: "center", color: "#64748b", padding: "60px 0", fontSize: "16px" }}>No products match your filters.</div>}
      </div>

      {/* Footer */}
      <div style={{ borderTop: "1px solid rgba(255,255,255,0.07)", padding: "20px", textAlign: "center", color: "#475569", fontSize: "12px" }}>
        © 2025 Sovera Everyday Trading · Data updated daily · Markets: 🇦🇪 Dubai · 🇮🇳 India · 🇨🇦 Canada · 🇺🇸 US · 🇬🇧 UK
      </div>
    </div>
  );
}
