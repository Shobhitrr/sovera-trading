import { useState, useEffect } from "react";

export default function Navbar({ onNavigate }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("Markets");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = ["Markets", "Products", "Analytics", "Contact"];

  return (
    <nav style={{
      position: "fixed",
      top: 0, left: 0, right: 0,
      zIndex: 1000,
      padding: scrolled ? "10px 32px" : "18px 32px",
      background: scrolled
        ? "rgba(2,6,23,0.92)"
        : "transparent",
      backdropFilter: scrolled ? "blur(24px)" : "none",
      WebkitBackdropFilter: scrolled ? "blur(24px)" : "none",
      borderBottom: scrolled ? "1px solid rgba(99,102,241,0.15)" : "1px solid transparent",
      transition: "all 0.4s cubic-bezier(0.23,1,0.32,1)",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
    }}>

      {/* Logo */}
      <div style={{ display: "flex", alignItems: "center", gap: "12px", cursor: "pointer" }}
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
        {/* 3D spinning logo mark */}
        <div style={{
          width: 38, height: 38,
          background: "linear-gradient(135deg, #6366f1, #8b5cf6, #06b6d4)",
          borderRadius: "10px",
          display: "flex", alignItems: "center", justifyContent: "center",
          fontSize: "18px",
          boxShadow: "0 0 20px rgba(99,102,241,0.5)",
          animation: "pulse-glow 3s ease-in-out infinite",
          position: "relative",
          overflow: "hidden",
        }}>
          <span style={{ position: "relative", zIndex: 1 }}>◈</span>
          <div style={{
            position: "absolute", inset: 0,
            background: "linear-gradient(135deg, transparent 30%, rgba(255,255,255,0.15) 50%, transparent 70%)",
            animation: "shimmer 2.5s linear infinite",
          }} />
        </div>

        <div>
          <div style={{
            fontSize: "15px",
            fontWeight: 800,
            letterSpacing: "0.5px",
            background: "linear-gradient(135deg, #a5b4fc, #818cf8, #c084fc)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            lineHeight: 1.1,
          }}>
            SOVERA
          </div>
          <div style={{
            fontSize: "9px",
            color: "#64748b",
            letterSpacing: "3px",
            textTransform: "uppercase",
            fontWeight: 600,
            fontFamily: "'JetBrains Mono', monospace",
          }}>
            TRADING
          </div>
        </div>
      </div>

      {/* Desktop Nav Links */}
      <div style={{
        display: "flex",
        alignItems: "center",
        gap: "4px",
        background: "rgba(255,255,255,0.04)",
        border: "1px solid rgba(255,255,255,0.08)",
        borderRadius: "40px",
        padding: "5px",
      }} className="desktop-nav">
        {links.map(link => (
          <button
            key={link}
            onClick={() => setActiveLink(link)}
            style={{
              background: activeLink === link
                ? "linear-gradient(135deg, #6366f1, #8b5cf6)"
                : "transparent",
              color: activeLink === link ? "#fff" : "#94a3b8",
              border: "none",
              borderRadius: "30px",
              padding: "7px 18px",
              fontSize: "13px",
              fontWeight: 600,
              cursor: "pointer",
              transition: "all 0.3s",
              fontFamily: "'Space Grotesk', sans-serif",
              letterSpacing: "0.3px",
              boxShadow: activeLink === link ? "0 4px 15px rgba(99,102,241,0.4)" : "none",
            }}
          >
            {link}
          </button>
        ))}
      </div>

      {/* Right CTAs */}
      <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
        {/* Live indicator */}
        <div style={{
          display: "flex", alignItems: "center", gap: "6px",
          background: "rgba(16,185,129,0.1)",
          border: "1px solid rgba(16,185,129,0.25)",
          borderRadius: "20px",
          padding: "5px 12px",
        }}>
          <div style={{
            width: 7, height: 7, borderRadius: "50%",
            background: "#10b981",
            boxShadow: "0 0 8px #10b981",
            animation: "blink 1.5s ease infinite",
          }} />
          <span style={{ fontSize: "11px", color: "#10b981", fontWeight: 700, letterSpacing: "1px", fontFamily: "'JetBrains Mono', monospace" }}>
            LIVE
          </span>
        </div>

        {/* CTA Button */}
        <button
          className="btn-premium"
          style={{
            background: "linear-gradient(135deg, #6366f1, #8b5cf6)",
            color: "#fff",
            border: "none",
            borderRadius: "10px",
            padding: "9px 20px",
            fontSize: "13px",
            fontWeight: 700,
            cursor: "pointer",
            letterSpacing: "0.3px",
            boxShadow: "0 0 20px rgba(99,102,241,0.35)",
          }}
        >
          Get Started
        </button>
      </div>
    </nav>
  );
}
