import { useState } from "react";
import bgImage from "../../imports/cta-bg.png";
import { ScrollReveal } from "./ScrollReveal";
import { useWindowWidth } from "../hooks/useWindowWidth";

export function FinalCTASection() {
  const [primaryHovered, setPrimaryHovered] = useState(false);
  const [secondaryHovered, setSecondaryHovered] = useState(false);
  const width = useWindowWidth();
  const isMobile = width < 768;
  const isTablet = width < 1024;

  return (
    <section style={{
      position: "relative",
      backgroundColor: "#F3ECE7",
      width: "100%",
      minHeight: isMobile ? "480px" : "720px",
      display: "flex",
      alignItems: "center",
      overflow: "hidden"
    }}>
      {/* Background Image */}
      <div style={{
        position: "absolute",
        top: isMobile ? "-150px" : "40px",
        right: isMobile ? "20px" : "40px",
        bottom: isMobile ? "20px" : "40px",
        left: isMobile ? "20px" : "40px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 0,
        pointerEvents: "none"
      }}>
        <img
          src={bgImage}
          alt="CTA Background"
          style={{
            maxWidth: "100%",
            maxHeight: "100%",
            objectFit: "contain",
            borderRadius: isMobile ? "20px" : "32px",
            mixBlendMode: isMobile ? "normal" : "multiply",
            maskImage: isMobile
              ? "none"
              : "linear-gradient(to right, black 85%, transparent 100%)",
            WebkitMaskImage: isMobile
              ? "none"
              : "linear-gradient(to right, black 85%, transparent 100%)",
            opacity: 1,
          }}
        />
      </div>

      {/* Main Content */}
      <div style={{
        position: "relative",
        zIndex: 2,
        maxWidth: "1300px",
        margin: "0 auto",
        padding: isMobile ? "60px 24px" : isTablet ? "60px 40px" : "0 60px",
        width: "100%",
        boxSizing: "border-box"
      }}>
        <div style={{ maxWidth: isMobile ? "100%" : "560px", position: "relative" }}>

          <ScrollReveal delay={0.1}>
            <h2 style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: isMobile ? "38px" : isTablet ? "50px" : "64px",
              fontWeight: 400,
              color: "#0a0a0a",
              margin: "0 0 24px 0",
              lineHeight: 1.05,
              letterSpacing: "-0.015em"
            }}>
              Let's Build Something Together
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <p style={{
              fontFamily: "'Satoshi', sans-serif",
              fontSize: isMobile ? "15px" : "18px",
              color: "rgba(10,10,10,0.7)",
              lineHeight: 1.6,
              margin: "0 0 48px 0",
              fontWeight: 400
            }}>
              Tell us about your product, application, or manufacturing needs
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.3}>
            <div style={{ display: "flex", gap: "16px", flexWrap: "wrap", alignItems: "center" }}>

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
                  color: primaryHovered ? "#1C3020" : "#F3ECE7",
                  padding: isMobile ? "14px 28px" : "16px 36px",
                  fontSize: "15px",
                  fontWeight: 500,
                  letterSpacing: "0.02em",
                  cursor: "pointer",
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontFamily: "'Satoshi', sans-serif",
                  transition: "color 0.45s ease",
                  flex: isMobile ? "1 1 auto" : "none",
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
                    background: "#F3ECE7",
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
                  color: secondaryHovered ? "#F3ECE7" : "#0a0a0a",
                  padding: isMobile ? "14px 28px" : "16px 36px",
                  fontSize: "15px",
                  fontWeight: 500,
                  letterSpacing: "0.02em",
                  cursor: "pointer",
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontFamily: "'Satoshi', sans-serif",
                  transition: "color 0.45s ease",
                  flex: isMobile ? "1 1 auto" : "none",
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
                    transform: `translate(-50%, -50%) scale(${secondaryHovered ? 1 : 0})`,
                    transition: "transform 0.55s cubic-bezier(0.4, 0, 0.2, 1)",
                    zIndex: 0,
                  }}
                />
                <span style={{ position: "relative", zIndex: 1 }}>Get in Touch</span>
              </button>

            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
