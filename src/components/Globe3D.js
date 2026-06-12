import { useEffect, useRef } from "react";

// Pure CSS/Canvas 3D animated globe with orbiting market nodes
export default function Globe3D() {
  const canvasRef = useRef(null);
  const frameRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let W = 340, H = 340;
    canvas.width = W;
    canvas.height = H;

    const cx = W / 2, cy = H / 2;
    const R = 120; // globe radius
    let angle = 0;

    // Lat/lng dots on globe surface
    const dots = [];
    for (let lat = -80; lat <= 80; lat += 15) {
      const latR = (lat * Math.PI) / 180;
      const nLng = Math.max(1, Math.round(Math.cos(latR) * 16));
      for (let i = 0; i < nLng; i++) {
        const lng = (i / nLng) * 360 - 180;
        dots.push({ lat: latR, lng: (lng * Math.PI) / 180 });
      }
    }

    // Market nodes (lat, lng, label, color)
    const markets = [
      { lat: 25.2, lng: 55.3,  label: "🇦🇪 Dubai",  color: "#f59e0b" },
      { lat: 20.5, lng: 78.9,  label: "🇮🇳 India",  color: "#10b981" },
      { lat: 56.1, lng: -106,  label: "🇨🇦 Canada", color: "#ef4444" },
      { lat: 37.1, lng: -95.7, label: "🇺🇸 US",     color: "#3b82f6" },
      { lat: 55.4, lng: -3.4,  label: "🇬🇧 UK",     color: "#8b5cf6" },
    ].map(m => ({ ...m, lat: (m.lat * Math.PI) / 180, lng: (m.lng * Math.PI) / 180 }));

    function project(lat, lng, rotY) {
      const x3 = Math.cos(lat) * Math.sin(lng + rotY);
      const y3 = Math.sin(lat);
      const z3 = Math.cos(lat) * Math.cos(lng + rotY);
      return { x: cx + R * x3, y: cy - R * y3, z: z3, visible: z3 > -0.1 };
    }

    function drawGlobe(rot) {
      ctx.clearRect(0, 0, W, H);

      // Outer glow
      const glow = ctx.createRadialGradient(cx, cy, R * 0.6, cx, cy, R * 1.4);
      glow.addColorStop(0, "rgba(99,102,241,0)");
      glow.addColorStop(0.7, "rgba(99,102,241,0.08)");
      glow.addColorStop(1, "rgba(99,102,241,0.18)");
      ctx.beginPath();
      ctx.arc(cx, cy, R * 1.4, 0, Math.PI * 2);
      ctx.fillStyle = glow;
      ctx.fill();

      // Globe base sphere gradient
      const sphereGrad = ctx.createRadialGradient(cx - 30, cy - 30, 10, cx, cy, R);
      sphereGrad.addColorStop(0, "rgba(30,41,82,0.9)");
      sphereGrad.addColorStop(0.6, "rgba(10,15,40,0.85)");
      sphereGrad.addColorStop(1, "rgba(5,8,25,0.9)");
      ctx.beginPath();
      ctx.arc(cx, cy, R, 0, Math.PI * 2);
      ctx.fillStyle = sphereGrad;
      ctx.fill();

      // Latitude rings (3D)
      for (let latDeg = -60; latDeg <= 60; latDeg += 30) {
        const latR = (latDeg * Math.PI) / 180;
        const ringR = R * Math.cos(latR);
        const ringY = cy - R * Math.sin(latR);
        const rx = ringR;
        const ry = ringR * 0.25; // foreshortened
        ctx.beginPath();
        ctx.ellipse(cx, ringY, rx, ry, 0, 0, Math.PI * 2);
        ctx.strokeStyle = "rgba(99,102,241,0.15)";
        ctx.lineWidth = 0.8;
        ctx.stroke();
      }

      // Longitude meridians
      for (let lngDeg = 0; lngDeg < 180; lngDeg += 30) {
        const lngR = ((lngDeg + rot * (180 / Math.PI)) * Math.PI) / 180;
        const x1 = cx + R * Math.sin(lngR);
        const x2 = cx - R * Math.sin(lngR);
        // simplified: draw as ellipse
        const tilt = Math.sin(lngR);
        ctx.beginPath();
        ctx.ellipse(cx, cy, Math.abs(R * Math.cos(lngR - Math.PI/2)), R, 0, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(99,102,241,${0.08 + Math.abs(tilt) * 0.06})`;
        ctx.lineWidth = 0.6;
        ctx.stroke();
      }

      // Surface dots
      dots.forEach(d => {
        const p = project(d.lat, d.lng, rot);
        if (!p.visible) return;
        const brightness = (p.z + 1) / 2;
        const size = 0.8 + brightness * 1.2;
        ctx.beginPath();
        ctx.arc(p.x, p.y, size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(99,102,241,${0.2 + brightness * 0.5})`;
        ctx.fill();
      });

      // Sphere rim highlight
      const rimGrad = ctx.createRadialGradient(cx - 40, cy - 40, R * 0.7, cx, cy, R);
      rimGrad.addColorStop(0, "rgba(255,255,255,0.0)");
      rimGrad.addColorStop(0.85, "rgba(255,255,255,0.0)");
      rimGrad.addColorStop(1, "rgba(165,180,252,0.25)");
      ctx.beginPath();
      ctx.arc(cx, cy, R, 0, Math.PI * 2);
      ctx.fillStyle = rimGrad;
      ctx.fill();

      // Specular highlight
      const spec = ctx.createRadialGradient(cx - 35, cy - 40, 0, cx - 35, cy - 40, 60);
      spec.addColorStop(0, "rgba(255,255,255,0.18)");
      spec.addColorStop(1, "transparent");
      ctx.beginPath();
      ctx.arc(cx, cy, R, 0, Math.PI * 2);
      ctx.fillStyle = spec;
      ctx.fill();

      // Market nodes + labels
      markets.forEach(m => {
        const p = project(m.lat, m.lng, rot);
        if (!p.visible) return;
        const brightness = (p.z + 1) / 2;
        if (brightness < 0.3) return;
        const alpha = Math.min(1, brightness * 1.5);

        // Ping ring
        const pingSize = (Date.now() % 2000) / 2000;
        ctx.beginPath();
        ctx.arc(p.x, p.y, 4 + pingSize * 14, 0, Math.PI * 2);
        ctx.strokeStyle = m.color + Math.floor((1 - pingSize) * alpha * 120).toString(16).padStart(2,'0');
        ctx.lineWidth = 1.5;
        ctx.stroke();

        // Node dot
        ctx.beginPath();
        ctx.arc(p.x, p.y, 5, 0, Math.PI * 2);
        const dotGrad = ctx.createRadialGradient(p.x - 1, p.y - 1, 0, p.x, p.y, 5);
        dotGrad.addColorStop(0, "#ffffff");
        dotGrad.addColorStop(0.4, m.color);
        dotGrad.addColorStop(1, m.color + "88");
        ctx.fillStyle = dotGrad;
        ctx.globalAlpha = alpha;
        ctx.fill();
        ctx.globalAlpha = 1;

        // Label (only for front-facing)
        if (brightness > 0.55) {
          ctx.font = "bold 10px 'Space Grotesk', sans-serif";
          ctx.fillStyle = m.color;
          ctx.globalAlpha = Math.min(1, (brightness - 0.55) * 4);
          const labelX = p.x + (p.x > cx ? 8 : -(ctx.measureText(m.label).width + 8));
          ctx.fillText(m.label, labelX, p.y + 4);
          ctx.globalAlpha = 1;
        }
      });

      // Equator highlight line
      ctx.beginPath();
      ctx.ellipse(cx, cy, R, R * 0.22, 0, 0, Math.PI * 2);
      ctx.strokeStyle = "rgba(6,182,212,0.2)";
      ctx.lineWidth = 1;
      ctx.stroke();
    }

    function animate() {
      angle += 0.004;
      drawGlobe(angle);
      frameRef.current = requestAnimationFrame(animate);
    }

    animate();
    return () => cancelAnimationFrame(frameRef.current);
  }, []);

  return (
    <div style={{
      position: "relative",
      width: 340,
      height: 340,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    }}>
      {/* Outer pulsing rings */}
      {[1, 1.25, 1.55].map((scale, i) => (
        <div key={i} style={{
          position: "absolute",
          width: 340 * scale,
          height: 340 * scale,
          borderRadius: "50%",
          border: `1px solid rgba(99,102,241,${0.15 - i * 0.04})`,
          animation: `ringPulse ${2.5 + i * 0.8}s ease-out ${i * 0.6}s infinite`,
          pointerEvents: "none",
        }} />
      ))}
      <canvas
        ref={canvasRef}
        style={{
          position: "relative",
          zIndex: 2,
          filter: "drop-shadow(0 0 30px rgba(99,102,241,0.4))",
        }}
      />
    </div>
  );
}
