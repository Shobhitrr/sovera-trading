import { useState, useEffect, useRef } from "react";
import Globe3D from "./Globe3D";

const STATS = [
  { value: 50, suffix: "+", label: "Global Products", icon: "📦", color: "#6366f1" },
  { value: 5,  suffix: "",  label: "Markets Covered", icon: "🌍", color: "#06b6d4" },
  { value: 97, suffix: "%", label: "Peak Demand",     icon: "🔥", color: "#f59e0b" },
  { value: 24, suffix: "h", label: "Data Refresh",    icon: "⚡", color: "#10b981" },
];

function CountUp({ target, suffix, duration = 1800 }) {
  const [count, setCount] = useState(0);
  const startRef = useRef(null);
  const rafRef = useRef(null);

  useEffect(() => {
    const start = performance.now();
    function tick(now) {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      // easeOutExpo
      const eased = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      setCount(Math.floor(eased * target));
      if (progress < 1) rafRef.current = requestAnimationFrame(tick);
    }
    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current);
  }, [target, duration]);

  return <span>{count}{suffix}</span>;
}

function FloatingBadge({ children, style }) {
  return (
    <div className="glass animate-float" style={{
      borderRadius: "14px",
      padding: "10px 16px",
      display: "flex",
      alignItems: "center",
      gap: "8px",
      fontSize: "12px",
      fontWeight: 600,
      color: "#f1f5f9",
      boxShadow: "0 8px 32px rgba(0,0,0,0.4)",
      border: "1px solid rgba(255,255,255,0.1)",
      position: "absolute",
      ...style,
    }}>
      {children}
    </div>
  );
}

export default function HeroSection() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(t);
  }, []);

  return (
    <section style={{
      minHeight: "100vh",
      display: "flex",
      alignItems: "center",
      padding: "100px 32px 60px",
      maxWidth: "1300px",
      margin: "0 auto",
      gap: "60px",
      flexWrap: "wrap",
      position: "relative",
      zIndex: 2,
    }}>

      {/* Left — Text Content */}
      <div style={{
        flex: "1 1 480px",
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(40px)",
        transition: "all 0.9s cubic-bezier(0.23,1,0.32,1)",
      }}>

        {/* Badge */}
        <div style={{
          display: "inline-flex",
          alignItems: "center",
          gap: "8px",
          background: "rgba(99,102,241,0.12)",
          border: "1px solid rgba(99,102,241,0.3)",
          borderRadius: "30px",
          padding: "6px 16px",
          marginBottom: "28px",
          fontSize: "12px",
          color: "#a5b4fc",
          fontWeight: 700,
          letterSpacing: "1.5px",
          textTransform: "uppercase",
          fontFamily: "'JetBrains Mono', monospace",
          animation: "borderFlow 4s ease infinite",
        }}>
          <span style={{ width: 7, height: 7, borderRadius: "50%", background: "#6366f1", display: "inline-block", boxShadow: "0 0 8px #6366f1", animation: "blink 1.5s ease infinite" }} />
          Premium Trade Intelligence
        </div>

        {/* Headline */}
        <h1 style={{
          fontSize: "clamp(36px, 5.5vw, 68px)",
          fontWeight: 900,
          lineHeight: 1.05,
          marginBottom: "24px",
          letterSpacing: "-1.5px",
        }}>
          <span className="gradient-text">Global Markets.</span>
          <br />
          <span style={{ color: "#f1f5f9" }}>Real-Time</span>
          <br />
          <span style={{
            position: "relative",
            display: "inline-block",
          }}>
            <span className="gold-text">Intelligence.</span>
            <svg
              style={{ position: "absolute", bottom: -4, left: 0, width: "100%", overflow: "visible" }}
              height="8" viewBox="0 0 200 8"
            >
              <path d="M0 6 Q50 0 100 5 Q150 10 200 4" stroke="#f59e0b" strokeWidth="2.5" fill="none" opacity="0.6"
                strokeDasharray="220" strokeDashoffset="220"
                style={{ animation: "drawLine 1.5s 0.8s ease forwards" }}
              />
            </svg>
          </span>
        </h1>

        <style>{`
          @keyframes drawLine {
            to { stroke-dashoffset: 0; }
          }
        `}</style>

        {/* Subheadline */}
        <p style={{
          fontSize: "17px",
          color: "#94a3b8",
          lineHeight: 1.7,
          maxWidth: "500px",
          marginBottom: "36px",
          fontWeight: 400,
        }}>
          Discover the world's top <strong style={{ color: "#a5b4fc" }}>50 high-demand products</strong> across
          5 global markets — Dubai, India, Canada, US &amp; UK.
          Supply gaps, demand scores, and trade opportunities updated daily.
        </p>

        {/* CTA Buttons */}
        <div style={{ display: "flex", gap: "14px", flexWrap: "wrap", marginBottom: "52px" }}>
          <button
            className="btn-premium"
            onClick={() => document.getElementById("products-section")?.scrollIntoView({ behavior: "smooth" })}
            style={{
              background: "linear-gradient(135deg, #6366f1, #8b5cf6)",
              color: "#fff",
              border: "none",
              borderRadius: "14px",
              padding: "14px 30px",
              fontSize: "15px",
              fontWeight: 700,
              cursor: "pointer",
              boxShadow: "0 0 30px rgba(99,102,241,0.45), 0 4px 20px rgba(0,0,0,0.3)",
              letterSpacing: "0.3px",
            }}
          >
            Explore Products →
          </button>
          <button
            className="btn-premium"
            style={{
              background: "transparent",
              color: "#a5b4fc",
              border: "1px solid rgba(99,102,241,0.4)",
              borderRadius: "14px",
              padding: "14px 28px",
              fontSize: "15px",
              fontWeight: 600,
              cursor: "pointer",
              letterSpacing: "0.3px",
            }}
          >
            View Analytics
          </button>
        </div>

        {/* Stat counters */}
        <div style={{ display: "flex", gap: "24px", flexWrap: "wrap" }}>
          {STATS.map((s, i) => (
            <div key={s.label} style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "translateY(0)" : "translateY(20px)",
              transition: `all 0.6s cubic-bezier(0.23,1,0.32,1) ${0.2 + i * 0.1}s`,
            }}>
              <div style={{ display: "flex", alignItems: "center", gap: "6px", marginBottom: "2px" }}>
                <span style={{ fontSize: "13px" }}>{s.icon}</span>
                <span style={{
                  fontSize: "28px",
                  fontWeight: 800,
                  color: s.color,
                  fontFamily: "'JetBrains Mono', monospace",
                  textShadow: `0 0 20px ${s.color}66`,
                }}>
                  {visible && <CountUp target={s.value} suffix={s.suffix} />}
                </span>
              </div>
              <div style={{ fontSize: "11px", color: "#64748b", textTransform: "uppercase", letterSpacing: "1px", fontWeight: 600 }}>
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Right — 3D Globe */}
      <div style={{
        flex: "0 0 auto",
        position: "relative",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        opacity: visible ? 1 : 0,
        transform: visible ? "scale(1)" : "scale(0.8)",
        transition: "all 1s cubic-bezier(0.23,1,0.32,1) 0.2s",
      }}>
        {/* Floating info badges around globe */}
        <FloatingBadge style={{ top: "5%", left: "-10%", animationDelay: "0s" }}>
          <span style={{ fontSize: "16px" }}>🔥</span>
          <div>
            <div style={{ fontSize: "13px", fontWeight: 800, color: "#f59e0b" }}>98%</div>
            <div style={{ fontSize: "10px", color: "#94a3b8" }}>AI Chips Demand</div>
          </div>
        </FloatingBadge>

        <FloatingBadge style={{ bottom: "10%", left: "-8%", animationDelay: "1.5s" }}>
          <span style={{ fontSize: "16px" }}>📈</span>
          <div>
            <div style={{ fontSize: "13px", fontWeight: 800, color: "#10b981" }}>+67%</div>
            <div style={{ fontSize: "10px", color: "#94a3b8" }}>Supply Gap (Avg)</div>
          </div>
        </FloatingBadge>

        <FloatingBadge style={{ top: "15%", right: "-8%", animationDelay: "0.8s" }}>
          <span style={{ fontSize: "16px" }}>⭐</span>
          <div>
            <div style={{ fontSize: "13px", fontWeight: 800, color: "#a5b4fc" }}>4.8/5</div>
            <div style={{ fontSize: "10px", color: "#94a3b8" }}>Avg Rating</div>
          </div>
        </FloatingBadge>

        <FloatingBadge style={{ bottom: "15%", right: "-12%", animationDelay: "2.2s" }}>
          <span style={{ fontSize: "16px" }}>🌍</span>
          <div>
            <div style={{ fontSize: "13px", fontWeight: 800, color: "#06b6d4" }}>5 Markets</div>
            <div style={{ fontSize: "10px", color: "#94a3b8" }}>Live Coverage</div>
          </div>
        </FloatingBadge>

        <Globe3D />
      </div>

      {/* Scroll indicator */}
      <div style={{
        position: "absolute",
        bottom: "30px",
        left: "50%",
        transform: "translateX(-50%)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "6px",
        opacity: 0.5,
        animation: "floatY 2s ease-in-out infinite",
      }}>
        <span style={{ fontSize: "11px", color: "#475569", letterSpacing: "2px", textTransform: "uppercase", fontFamily: "'JetBrains Mono', monospace" }}>
          SCROLL
        </span>
        <div style={{
          width: 24, height: 38,
          border: "1.5px solid rgba(99,102,241,0.4)",
          borderRadius: "12px",
          display: "flex",
          justifyContent: "center",
          padding: "4px",
        }}>
          <div style={{
            width: 4, height: 8,
            background: "#6366f1",
            borderRadius: "2px",
            animation: "floatY 1.5s ease-in-out infinite",
          }} />
        </div>
      </div>
    </section>
  );
}
