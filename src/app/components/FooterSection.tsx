import { useState } from "react";
import bgImage from "../../imports/footer-bg.png";
import logoImg from "../../imports/logo.png";

import { ScrollReveal } from "./ScrollReveal";
import { useWindowWidth } from "../hooks/useWindowWidth";

export function FooterSection() {
  const [primaryHovered, setPrimaryHovered] = useState(false);
  const [secondaryHovered, setSecondaryHovered] = useState(false);
  const width = useWindowWidth();
  const isMobile = width < 768;
  const isTablet = width < 1024;

  return (
    <footer
      style={{
        position: "relative",
        backgroundColor: "#F8F1EC",
        color: "#0a0a0a",
        padding: isMobile ? "64px 24px 32px" : isTablet ? "80px 40px 36px" : "100px 60px 40px",
        fontFamily: "'Satoshi', sans-serif",
        overflow: "hidden",
      }}
    >
      {/* Background Image */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: `url(${bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center 70%",
          opacity: 1,
          zIndex: 0,
        }}
      />

      <div
        style={{
          position: "relative",
          zIndex: 1,
          maxWidth: "1300px",
          margin: "0 auto",
          display: "flex",
          flexDirection: "column",
          gap: isMobile ? "48px" : "80px",
        }}
      >
        {/* Top Section */}
        <ScrollReveal delay={0.1}>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "space-between",
              gap: isMobile ? "40px" : "60px",
            }}
          >
            {/* Logo and Tagline */}
            <div style={{ flex: "1 1 200px", maxWidth: "400px" }}>
              <div style={{ display: "flex", flexDirection: "column", marginBottom: "20px" }}>
                <img src={logoImg} alt="NOVEM Logo" style={{ width: isMobile ? "80px" : "100px", height: "auto" }} />
              </div>
              <p
                style={{
                  fontSize: "14px",
                  fontWeight: 400,
                  color: "rgba(10, 10, 10, 0.7)",
                  lineHeight: 1.6,
                  letterSpacing: "0.02em",
                }}
              >
                Industrial Freeze-Drying &<br />
                Food Manufacturing
              </p>
            </div>

            {/* Navigation Columns */}
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: isMobile ? "40px" : "60px",
                flex: "1 1 auto",
                justifyContent: isMobile ? "flex-start" : "flex-end",
              }}
            >
              {/* Column 1 */}
              <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                {["Home", "About", "Applications", "Capabilities", "Quality", "Why Novem", "Contact"].map((item) => (
                  <a
                    key={item}
                    href="#"
                    style={{
                      color: "rgba(10, 10, 10, 0.8)",
                      textDecoration: "none",
                      fontSize: "13px",
                      letterSpacing: "0.05em",
                      fontWeight: 500,
                      transition: "color 0.3s ease",
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "#1C3020")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(10, 10, 10, 0.8)")}
                  >
                    {item}
                  </a>
                ))}
              </div>

              {/* Column 2 */}
              <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                {["Pet Food", "Agri-Food", "Private Label", "Freeze Drying", "R&D"].map((item) => (
                  <a
                    key={item}
                    href="#"
                    style={{
                      color: "rgba(10, 10, 10, 0.8)",
                      textDecoration: "none",
                      fontSize: "13px",
                      letterSpacing: "0.05em",
                      fontWeight: 500,
                      transition: "color 0.3s ease",
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "#1C3020")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(10, 10, 10, 0.8)")}
                  >
                    {item}
                  </a>
                ))}
              </div>

              {/* Column 3: CTA */}
              <div style={{ display: "flex", flexDirection: "column", gap: "16px", minWidth: isMobile ? "100%" : "160px" }}>
                {/* Primary CTA Button */}
                <button
                  onMouseEnter={() => setPrimaryHovered(true)}
                  onMouseLeave={() => setPrimaryHovered(false)}
                  style={{
                    position: "relative",
                    overflow: "hidden",
                    border: "1px solid #1C3020",
                    borderRadius: "100px",
                    background: "#1C3020",
                    color: primaryHovered ? "#1C3020" : "#F8F1EC",
                    padding: "16px 36px",
                    fontSize: "15px",
                    fontWeight: 500,
                    letterSpacing: "0.02em",
                    cursor: "pointer",
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontFamily: "'Satoshi', sans-serif",
                    transition: "color 0.45s ease",
                    width: "100%",
                  }}
                >
                  <span
                    style={{
                      position: "absolute",
                      top: "50%",
                      left: "50%",
                      width: "600px",
                      height: "600px",
                      borderRadius: "50%",
                      background: "#F8F1EC",
                      transform: `translate(-50%, -50%) scale(${primaryHovered ? 1 : 0})`,
                      transition: "transform 0.55s cubic-bezier(0.4, 0, 0.2, 1)",
                      zIndex: 0,
                    }}
                  />
                  <span style={{ position: "relative", zIndex: 1 }}>Start a Project</span>
                </button>

                {/* Secondary CTA Button */}
                <button
                  onMouseEnter={() => setSecondaryHovered(true)}
                  onMouseLeave={() => setSecondaryHovered(false)}
                  style={{
                    position: "relative",
                    overflow: "hidden",
                    border: "1px solid rgba(10,10,10,0.4)",
                    borderRadius: "100px",
                    background: "transparent",
                    color: secondaryHovered ? "#F8F1EC" : "#0a0a0a",
                    padding: "16px 36px",
                    fontSize: "15px",
                    fontWeight: 500,
                    letterSpacing: "0.02em",
                    cursor: "pointer",
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontFamily: "'Satoshi', sans-serif",
                    transition: "color 0.45s ease",
                    width: "100%",
                  }}
                >
                  <span
                    style={{
                      position: "absolute",
                      top: "50%",
                      left: "50%",
                      width: "600px",
                      height: "600px",
                      borderRadius: "50%",
                      background: "#1C3020",
                      transform: `translate(-50%, -50%) scale(${secondaryHovered ? 1 : 0})`,
                      transition: "transform 0.55s cubic-bezier(0.4, 0, 0.2, 1)",
                      zIndex: 0,
                    }}
                  />
                  <span style={{ position: "relative", zIndex: 1 }}>Contact Us</span>
                </button>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Bottom Section */}
        <ScrollReveal delay={0.2}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              paddingTop: "32px",
              borderTop: "1px solid rgba(10, 10, 10, 0.1)",
              flexWrap: "wrap",
              gap: "16px",
            }}
          >
            <span
              style={{
                fontSize: "12px",
                color: "rgba(10, 10, 10, 0.5)",
                fontWeight: 400,
              }}
            >
              © {new Date().getFullYear()} Novem. All rights reserved.
            </span>

            <div style={{ display: "flex", gap: isMobile ? "16px" : "24px", flexWrap: "wrap" }}>
              {["Privacy Policy", "Terms of Service", "Legal"].map((item) => (
                <a
                  key={item}
                  href="#"
                  style={{
                    color: "rgba(10, 10, 10, 0.5)",
                    textDecoration: "none",
                    fontSize: "12px",
                    transition: "color 0.3s ease",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "rgba(10, 10, 10, 0.8)")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(10, 10, 10, 0.5)")}
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </footer>
  );
}
