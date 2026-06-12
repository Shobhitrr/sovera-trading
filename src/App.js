import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import Ticker from "./components/Ticker";
import MarketFilter from "./components/MarketFilter";
import ProductCard from "./components/ProductCard";
import Footer from "./components/Footer";

// ─────────────────────────────────────── DATA ───────────────────────────────────────
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

const CATEGORIES = ["All", ...new Set(PRODUCTS.map(p => p.category))];

function getRating(demand, supply) {
  const score = (demand - supply * 0.4) / 10;
  return Math.min(5, Math.max(1, score)).toFixed(1);
}

// ─────────────────────────────────────── APP ───────────────────────────────────────
export default function App() {
  const [market, setMarket] = useState("All");
  const [category, setCategory] = useState("All");
  const [search, setSearch] = useState("");
  const [sortBy, setSortBy] = useState("demand");

  const filtered = PRODUCTS
    .filter(p =>
      (market === "All" || p.market === market) &&
      (category === "All" || p.category === category) &&
      (p.name.toLowerCase().includes(search.toLowerCase()) ||
       p.category.toLowerCase().includes(search.toLowerCase()))
    )
    .sort((a, b) => {
      if (sortBy === "demand") return b.demand - a.demand;
      if (sortBy === "gap") return (b.demand - b.supply) - (a.demand - a.supply);
      return parseFloat(getRating(b.demand, b.supply)) - parseFloat(getRating(a.demand, a.supply));
    });

  const hotCount = filtered.filter(p => p.demand >= 90).length;
  const shortageCount = filtered.filter(p => (p.demand - p.supply) > 40).length;

  return (
    <div className="grid-bg" style={{ minHeight: "100vh", position: "relative", zIndex: 2 }}>
      {/* ── Navigation ── */}
      <Navbar />

      {/* ── Hero Section with 3D Globe ── */}
      <HeroSection />

      {/* ── Live Ticker ── */}
      <Ticker />

      {/* ── Market Filter + Search Controls ── */}
      <MarketFilter
        market={market}
        setMarket={setMarket}
        category={category}
        setCategory={setCategory}
        categories={CATEGORIES}
        search={search}
        setSearch={setSearch}
        sortBy={sortBy}
        setSortBy={setSortBy}
        filteredCount={filtered.length}
        hotCount={hotCount}
        shortageCount={shortageCount}
      />

      {/* ── Product Grid ── */}
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
        gap: "20px",
        padding: "0 32px 60px",
        maxWidth: "1300px",
        margin: "0 auto",
        position: "relative",
        zIndex: 10,
      }}>
        {filtered.map((p, i) => (
          <ProductCard key={p.id} product={p} index={i} />
        ))}
        {filtered.length === 0 && (
          <div style={{
            gridColumn: "1 / -1",
            textAlign: "center",
            padding: "80px 0",
            color: "#64748b",
          }}>
            <div style={{ fontSize: "48px", marginBottom: "16px", opacity: 0.5 }}>🔍</div>
            <div style={{ fontSize: "18px", fontWeight: 600, color: "#94a3b8", marginBottom: "8px" }}>
              No products found
            </div>
            <div style={{ fontSize: "14px" }}>
              Try adjusting your filters or search query
            </div>
          </div>
        )}
      </div>

      {/* ── Footer ── */}
      <Footer />
    </div>
  );
}
