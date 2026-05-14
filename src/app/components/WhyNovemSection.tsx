import { useState } from "react";
import { ScrollReveal } from "./ScrollReveal";
import { useWindowWidth } from "../hooks/useWindowWidth";

const features = [
  {
    num: "01",
    title: "Closed-loop manufacturing",
    desc: "End-to-end operational control ensuring consistency and security."
  },
  {
    num: "02",
    title: "Integrated quality assurance",
    desc: "Rigorous testing embedded directly into every phase of production."
  },
  {
    num: "03",
    title: "Full traceability",
    desc: "Detailed tracking from raw ingredient origins to final packaged goods."
  },
  {
    num: "04",
    title: "Scalable production",
    desc: "Flexible infrastructure designed to grow with your brand's volume."
  }
];

export function WhyNovemSection() {
  const [btnHovered, setBtnHovered] = useState(false);
  const width = useWindowWidth();
  const isMobile = width < 768;
  const isTablet = width < 1024;

  return (
    <section style={{ backgroundColor: "#FAF4EF", width: "100%", padding: isMobile ? "48px 0 80px" : "120px 0 140px" }}>
      <div style={{ maxWidth: "1300px", margin: "0 auto", padding: isMobile ? "0 24px" : isTablet ? "0 40px" : "0 60px", boxSizing: "border-box" }}>

        {/* Top Row: Heading and Description */}
        <ScrollReveal delay={0.1}>
          <div style={{
            display: "flex",
            flexDirection: isMobile ? "column" : "row",
            justifyContent: "space-between",
            alignItems: isMobile ? "flex-start" : "flex-start",
            marginBottom: isMobile ? "48px" : "80px",
            gap: isMobile ? "28px" : "60px"
          }}>
            {/* Left: Heading */}
            <div style={{ flex: "1 1 55%" }}>
              <h2 style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: isMobile ? "42px" : isTablet ? "52px" : "64px",
                fontWeight: 400,
                color: "#0a0a0a",
                margin: 0,
                lineHeight: 1.05,
                letterSpacing: "-0.015em"
              }}>
                Why Novem
              </h2>
            </div>

            {/* Right: Subtext + Button */}
            <div style={{
              flex: isMobile ? "none" : "0 0 40%",
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              gap: "28px",
              paddingTop: isMobile ? "0" : "12px"
            }}>
              <p style={{
                fontFamily: "'Satoshi', sans-serif",
                fontSize: "15px",
                color: "rgba(10,10,10,0.7)",
                lineHeight: 1.6,
                margin: 0,
                fontWeight: 400
              }}>
                We provide a completely transparent, start-to-finish framework. By keeping every phase of manufacturing in-house, we eliminate supply chain blind spots and guarantee uncompromising quality.
              </p>

              {/* Pill CTA */}
              <button
                onMouseEnter={() => setBtnHovered(true)}
                onMouseLeave={() => setBtnHovered(false)}
                style={{
                  position: "relative",
                  overflow: "hidden",
                  border: "1px solid rgba(10,10,10,0.4)",
                  borderRadius: "100px",
                  background: "transparent",
                  color: btnHovered ? "#FAF4EF" : "#0a0a0a",
                  padding: "13px 32px",
                  fontSize: "14px",
                  fontWeight: 500,
                  letterSpacing: "0.02em",
                  cursor: "pointer",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "10px",
                  fontFamily: "'Satoshi', sans-serif",
                  transition: "color 0.45s ease",
                }}
              >
                <span
                  style={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    width: "300px",
                    height: "300px",
                    borderRadius: "50%",
                    background: "#1C3020",
                    transform: `translate(-50%, -50%) scale(${btnHovered ? 1 : 0})`,
                    transition: "transform 0.55s cubic-bezier(0.4, 0, 0.2, 1)",
                    zIndex: 0,
                  }}
                />
                <span style={{ position: "relative", zIndex: 1 }}>Explore Capabilities</span>
              </button>
            </div>
          </div>
        </ScrollReveal>

        {/* Bottom: Feature Cards */}
        <ScrollReveal delay={0.3}>
          {isMobile ? (
            /* Mobile: stacked cards */
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              {features.map((feature) => (
                <div
                  key={feature.num}
                  style={{
                    position: "relative",
                    backgroundColor: "#FFFFFF",
                    borderRadius: "20px",
                    boxShadow: "0 12px 48px rgba(10,10,10,0.03)",
                    border: "1px solid rgba(10,10,10,0.04)",
                    overflow: "hidden",
                    padding: "40px 28px 36px",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    gap: "12px",
                  }}
                >
                  <span style={{
                    position: "absolute",
                    bottom: "-0.28em",
                    right: "16px",
                    fontFamily: "'Playfair Display', serif",
                    fontSize: "100px",
                    fontWeight: 400,
                    color: "rgba(10,10,10,0.06)",
                    lineHeight: 1,
                    letterSpacing: "-0.02em",
                    zIndex: 0,
                    userSelect: "none",
                    pointerEvents: "none"
                  }}>
                    {feature.num}
                  </span>
                  <div style={{ position: "relative", zIndex: 1 }}>
                    <h3 style={{
                      fontFamily: "'Satoshi', sans-serif",
                      fontSize: "15px",
                      fontWeight: 700,
                      color: "#0a0a0a",
                      margin: "0 0 10px",
                      lineHeight: 1.4
                    }}>
                      {feature.title}
                    </h3>
                    <p style={{
                      fontFamily: "'Satoshi', sans-serif",
                      fontSize: "13px",
                      fontWeight: 400,
                      color: "rgba(10,10,10,0.6)",
                      lineHeight: 1.6,
                      margin: 0,
                    }}>
                      {feature.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          ) : isTablet ? (
            /* Tablet: 2×2 grid */
            <div style={{
              display: "grid",
              gridTemplateColumns: "repeat(2, 1fr)",
              backgroundColor: "#FFFFFF",
              borderRadius: "32px",
              boxShadow: "0 12px 48px rgba(10,10,10,0.03)",
              border: "1px solid rgba(10,10,10,0.04)",
              overflow: "hidden"
            }}>
              {features.map((feature, i) => (
                <div key={feature.num} style={{
                  position: "relative",
                  padding: "56px 32px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  textAlign: "center",
                  overflow: "hidden",
                  justifyContent: "center",
                  borderRight: i % 2 === 0 ? "1px solid rgba(10,10,10,0.08)" : "none",
                  borderBottom: i < 2 ? "1px solid rgba(10,10,10,0.08)" : "none",
                }}>
                  <span style={{
                    position: "absolute",
                    bottom: "-0.28em",
                    left: "50%",
                    transform: "translateX(-50%)",
                    fontFamily: "'Playfair Display', serif",
                    fontSize: "120px",
                    fontWeight: 400,
                    color: "rgba(10,10,10,0.06)",
                    lineHeight: 1,
                    letterSpacing: "-0.02em",
                    zIndex: 0,
                    userSelect: "none",
                    pointerEvents: "none"
                  }}>
                    {feature.num}
                  </span>
                  <div style={{ position: "relative", zIndex: 1, display: "flex", flexDirection: "column", alignItems: "center", gap: "16px" }}>
                    <h3 style={{
                      fontFamily: "'Satoshi', sans-serif",
                      fontSize: "15px",
                      fontWeight: 700,
                      color: "#0a0a0a",
                      margin: 0,
                      lineHeight: 1.4
                    }}>
                      {feature.title}
                    </h3>
                    <p style={{
                      fontFamily: "'Satoshi', sans-serif",
                      fontSize: "13px",
                      fontWeight: 400,
                      color: "rgba(10,10,10,0.6)",
                      lineHeight: 1.6,
                      margin: 0,
                      maxWidth: "220px"
                    }}>
                      {feature.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            /* Desktop: horizontal pill card */
            <div style={{
              display: "flex",
              backgroundColor: "#FFFFFF",
              borderRadius: "32px",
              boxShadow: "0 12px 48px rgba(10,10,10,0.03)",
              border: "1px solid rgba(10,10,10,0.04)",
              overflow: "hidden"
            }}>
              {features.map((feature, i) => (
                <div key={feature.num} style={{ display: "flex", flex: 1 }}>
                  <div style={{
                    position: "relative",
                    flex: 1,
                    padding: "64px 32px",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    textAlign: "center",
                    overflow: "hidden",
                    justifyContent: "center"
                  }}>
                    <span style={{
                      position: "absolute",
                      bottom: "-0.28em",
                      left: "50%",
                      transform: "translateX(-50%)",
                      fontFamily: "'Playfair Display', serif",
                      fontSize: "144px",
                      fontWeight: 400,
                      color: "rgba(10,10,10,0.06)",
                      lineHeight: 1,
                      letterSpacing: "-0.02em",
                      zIndex: 0,
                      userSelect: "none",
                      pointerEvents: "none"
                    }}>
                      {feature.num}
                    </span>
                    <div style={{ position: "relative", zIndex: 1, display: "flex", flexDirection: "column", alignItems: "center", gap: "16px" }}>
                      <h3 style={{
                        fontFamily: "'Satoshi', sans-serif",
                        fontSize: "15px",
                        fontWeight: 700,
                        color: "#0a0a0a",
                        margin: 0,
                        lineHeight: 1.4
                      }}>
                        {feature.title}
                      </h3>
                      <p style={{
                        fontFamily: "'Satoshi', sans-serif",
                        fontSize: "13px",
                        fontWeight: 400,
                        color: "rgba(10,10,10,0.6)",
                        lineHeight: 1.6,
                        margin: 0,
                        maxWidth: "220px"
                      }}>
                        {feature.desc}
                      </p>
                    </div>
                  </div>
                  {i < features.length - 1 && (
                    <div style={{
                      width: "1px",
                      backgroundColor: "rgba(10,10,10,0.08)",
                      margin: "48px 0"
                    }} />
                  )}
                </div>
              ))}
            </div>
          )}
        </ScrollReveal>

      </div>
    </section>
  );
}
