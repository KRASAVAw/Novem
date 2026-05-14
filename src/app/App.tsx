import bgImage from "../imports/hero-bg.png";
import heroMobileImg from "../imports/hero-mobile-bg.png";
import logoImg from "../imports/logo.png";
import agriFoodMobileImg from "../imports/agri-food-mobile-bg.png";
import petFoodMobileImg from "../imports/pet-food-mobile-bg.png";
import { useState } from "react";
import { ClosedLoopSection } from "./components/ClosedLoopSection";
import { CapabilitiesSection } from "./components/CapabilitiesSection";
import { WhyNovemSection } from "./components/WhyNovemSection";
import { FinalCTASection } from "./components/FinalCTASection";
import { FooterSection } from "./components/FooterSection";
import { ScrollReveal } from "./components/ScrollReveal";
import { useWindowWidth } from "./hooks/useWindowWidth";
import { Menu, X } from "lucide-react";

export default function App() {
  const [btnHovered, setBtnHovered] = useState(false);
  const [navBtnHovered, setNavBtnHovered] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const width = useWindowWidth();
  const isMobile = width < 768;
  const isTablet = width < 1024;

  return (
    <>
      {/* Navbar */}
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 50,
          backgroundColor: "#F8F1EC",
          borderBottom: "1px solid rgba(10,10,10,0.1)",
          width: "100%",
          fontFamily: "'Satoshi', sans-serif",
        }}
      >
        <nav
          style={{
            maxWidth: "1300px",
            margin: "0 auto",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: isMobile ? "16px 24px" : isTablet ? "18px 40px" : "20px 60px",
            boxSizing: "border-box",
          }}
        >
          {/* Logo */}
          <div style={{ display: "flex", alignItems: "center" }}>
            <img src={logoImg} alt="NOVEM Logo" style={{ width: isMobile ? "64px" : "80px", height: "auto" }} />
          </div>

          {/* Nav Links — hidden on mobile */}
          {!isMobile && (
            <div
              style={{
                display: "flex",
                gap: isTablet ? "20px" : "32px",
                alignItems: "center",
              }}
            >
              {["ABOUT", "APPLICATIONS", "CAPABILITIES", "QUALITY", "WHY NOVEM", "CONTACT"].map(
                (item) => (
                  <a
                    key={item}
                    href="#"
                    style={{
                      color: "#0a0a0a",
                      textDecoration: "none",
                      fontSize: "11px",
                      letterSpacing: "0.1em",
                      fontWeight: 500,
                      opacity: 0.75,
                      fontFamily: "'Satoshi', sans-serif",
                    }}
                  >
                    {item}
                  </a>
                )
              )}
            </div>
          )}

          {/* Right side: CTA button (desktop/tablet) or hamburger (mobile) */}
          {isMobile ? (
            <button
              onClick={() => setMobileMenuOpen((v) => !v)}
              style={{
                background: "transparent",
                border: "none",
                cursor: "pointer",
                padding: "4px",
                display: "flex",
                alignItems: "center",
                color: "#0a0a0a",
              }}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          ) : (
            <button
              onMouseEnter={() => setNavBtnHovered(true)}
              onMouseLeave={() => setNavBtnHovered(false)}
              style={{
                position: "relative",
                overflow: "hidden",
                border: "1px solid rgba(10,10,10,0.4)",
                borderRadius: "100px",
                background: "transparent",
                color: navBtnHovered ? "#F8F1EC" : "#0a0a0a",
                padding: isTablet ? "9px 18px" : "10px 22px",
                fontSize: "13px",
                fontWeight: 500,
                letterSpacing: "0.02em",
                cursor: "pointer",
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                fontFamily: "'Satoshi', sans-serif",
                transition: "color 0.45s ease",
              }}
            >
              <span
                style={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  width: "200px",
                  height: "200px",
                  borderRadius: "50%",
                  background: "#1C3020",
                  transform: `translate(-50%, -50%) scale(${navBtnHovered ? 1 : 0})`,
                  transition: "transform 0.55s cubic-bezier(0.4, 0, 0.2, 1)",
                  zIndex: 0,
                }}
              />
              <span style={{ position: "relative", zIndex: 1 }}>Let's Build Together</span>
            </button>
          )}
        </nav>

        {/* Mobile Dropdown Menu */}
        {isMobile && mobileMenuOpen && (
          <div
            style={{
              backgroundColor: "#F8F1EC",
              borderTop: "1px solid rgba(10,10,10,0.08)",
              padding: "24px",
              display: "flex",
              flexDirection: "column",
              gap: "0",
            }}
          >
            {["ABOUT", "APPLICATIONS", "CAPABILITIES", "QUALITY", "WHY NOVEM", "CONTACT"].map(
              (item) => (
                <a
                  key={item}
                  href="#"
                  onClick={() => setMobileMenuOpen(false)}
                  style={{
                    color: "#0a0a0a",
                    textDecoration: "none",
                    fontSize: "13px",
                    letterSpacing: "0.1em",
                    fontWeight: 500,
                    padding: "14px 0",
                    borderBottom: "1px solid rgba(10,10,10,0.07)",
                    display: "block",
                    fontFamily: "'Satoshi', sans-serif",
                    opacity: 0.75,
                  }}
                >
                  {item}
                </a>
              )
            )}
            <button
              style={{
                marginTop: "20px",
                border: "1px solid rgba(10,10,10,0.4)",
                borderRadius: "100px",
                background: "#1C3020",
                color: "#F8F1EC",
                padding: "13px 28px",
                fontSize: "13px",
                fontWeight: 500,
                cursor: "pointer",
                fontFamily: "'Satoshi', sans-serif",
                width: "100%",
              }}
            >
              Let's Build Together
            </button>
          </div>
        )}
      </div>

      <div
        style={{
          backgroundColor: "#F8F1EC",
          color: "#0a0a0a",
          minHeight: "150vh",
          fontFamily: "'Satoshi', sans-serif",
          backgroundImage: isMobile ? "none" : `url(${bgImage})`,
          backgroundSize: "100% auto",
          backgroundPosition: "left 50% bottom 200px",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Placeholder to prevent layout shift from fixed navbar */}
        <div style={{ height: isMobile ? "58px" : "74px" }} />

        {/* Hero Section */}
        <section
          style={{
            textAlign: "center",
            padding: isMobile ? "48px 24px 40px" : "80px 40px 60px",
            maxWidth: "760px",
            margin: "0 auto",
            ...(isMobile && {
              backgroundImage: `url(${heroMobileImg})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              maxWidth: "100%",
              minHeight: "calc(100vh - 58px)",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }),
          }}
        >

          {/* Main Heading */}
          <ScrollReveal delay={0.2}>
            <h1
              style={{
                fontFamily: "'Playfair Display', serif",
                fontWeight: 400,
                fontSize: isMobile ? "clamp(44px, 12vw, 64px)" : "88px",
                lineHeight: 1.05,
                color: "#0a0a0a",
                margin: isMobile ? "0 0 32px" : "44px 0 32px",
                letterSpacing: "-0.01em",
              }}
            >
              Nutrition,
              <br />
              Frozen in Time
            </h1>
          </ScrollReveal>

          {/* Subtext */}
          <ScrollReveal delay={0.3}>
            <p
              style={{
                fontSize: isMobile ? "14px" : "15px",
                fontWeight: 400,
                color: "rgba(10,10,10,0.6)",
                lineHeight: 1.65,
                marginBottom: "40px",
                fontFamily: "'Satoshi', sans-serif",
              }}
            >
              A fully integrated, closed-loop system from
              {isMobile ? " " : <br />}
              ingredient sourcing through to production, packaging, and distribution.
            </p>
          </ScrollReveal>

          {/* CTA Button */}
          <ScrollReveal delay={0.4}>
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
                padding: "14px 36px",
                fontSize: "14px",
                fontWeight: 400,
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
                  width: "340px",
                  height: "340px",
                  borderRadius: "50%",
                  background: "#1C3020",
                  transform: `translate(-50%, -50%) scale(${btnHovered ? 1 : 0})`,
                  transition: "transform 0.55s cubic-bezier(0.4, 0, 0.2, 1)",
                  zIndex: 0,
                }}
              />
              <span style={{ position: "relative", zIndex: 1 }}>Start a Project</span>
              <span style={{ fontSize: "16px", position: "relative", zIndex: 1 }}>↗</span>
            </button>
          </ScrollReveal>
        </section>

        {/* Cards Section */}
        <section
          style={{
            display: "grid",
            gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
            maxWidth: "900px",
            margin: isMobile ? "0 auto" : "175px auto 0",
            padding: isMobile ? "0 24px" : "0 40px",
            gap: "0",
          }}
        >
          {/* Pet Food */}
          <div
            style={{
              paddingRight: isMobile ? "24px" : "60px",
              paddingLeft: isMobile ? "24px" : "0",
              paddingTop: isMobile ? "40px" : "0",
              paddingBottom: isMobile ? "40px" : "0",
              marginLeft: isMobile ? "-24px" : "0",
              marginRight: isMobile ? "-24px" : "0",
              ...(isMobile && {
                backgroundImage: `url(${petFoodMobileImg})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                textAlign: "right",
              }),
            }}
          >
            <ScrollReveal delay={0.2}>
              <h2
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontWeight: 400,
                  fontSize: isMobile ? "32px" : "38px",
                  color: "#0a0a0a",
                  margin: "0 0 16px",
                  lineHeight: 1.1,
                }}
              >
                Pet Food
              </h2>
              <p
                style={{
                  fontSize: "14px",
                  color: "rgba(10,10,10,0.6)",
                  lineHeight: 1.7,
                  marginBottom: "20px",
                  fontFamily: "'Satoshi', sans-serif",
                  fontWeight: 400,
                }}
              >
                Freeze-dried meals, toppers, and treats designed for quality, consistency, and performance.
              </p>
              <a
                href="#"
                style={{
                  color: "#0a0a0a",
                  textDecoration: "none",
                  fontSize: "13px",
                  fontWeight: 500,
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: isMobile ? "flex-end" : "flex-start",
                  gap: "8px",
                  fontFamily: "'Satoshi', sans-serif",
                  letterSpacing: "0.01em",
                }}
              >
                {isMobile && <span style={{ fontSize: "14px" }}>←</span>}
                Explore Pet Food
                {!isMobile && <span style={{ fontSize: "14px" }}>→</span>}
              </a>
            </ScrollReveal>
          </div>

          {/* Agri-Food */}
          <div
            style={{
              marginLeft: isMobile ? "-24px" : "-1px",
              marginRight: isMobile ? "-24px" : "0",
              paddingLeft: isMobile ? "24px" : "61px",
              paddingRight: isMobile ? "24px" : "0",
              paddingTop: isMobile ? "40px" : "0",
              paddingBottom: isMobile ? "40px" : "0",
              boxShadow: isMobile ? "none" : "-1px 0 0 0 rgba(10,10,10,0.12)",
              ...(isMobile && {
                backgroundImage: `url(${agriFoodMobileImg})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }),
            }}
          >
            <ScrollReveal delay={0.4}>
              <h2
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontWeight: 400,
                  fontSize: isMobile ? "32px" : "38px",
                  color: "#1C3020",
                  margin: "0 0 16px",
                  lineHeight: 1.1,
                }}
              >
                Agri-Food
              </h2>
              <p
                style={{
                  fontSize: "14px",
                  color: "#4A6350",
                  lineHeight: 1.7,
                  marginBottom: "20px",
                  fontFamily: "'Satoshi', sans-serif",
                  fontWeight: 400,
                }}
              >
                Ingredient processing and preservation solutions for food and agricultural applications.
              </p>
              <a
                href="#"
                style={{
                  color: "#1C3020",
                  textDecoration: "none",
                  fontSize: "13px",
                  fontWeight: 700,
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  fontFamily: "'Satoshi', sans-serif",
                  letterSpacing: "0.01em",
                }}
              >
                Explore Agri-Food <span style={{ fontSize: "14px" }}>→</span>
              </a>
            </ScrollReveal>
          </div>
        </section>

        {/* Bottom Note */}
        <ScrollReveal delay={0.2}>
          <div
            style={{
              maxWidth: "900px",
              margin: isMobile ? "32px auto 0" : "180px auto 0",
              padding: isMobile ? "24px 24px" : "24px 40px",
              borderTop: isMobile ? "none" : "1px solid rgba(10,10,10,0.1)",
              textAlign: "center",
            }}
          >
            <p
              style={{
                fontSize: "13px",
                color: "rgba(10,10,10,0.55)",
                lineHeight: 1.7,
                fontFamily: "'Satoshi', sans-serif",
                fontWeight: 400,
              }}
            >
              Pet food and agri-food production are handled in{" "}
              <strong style={{ color: "#0a0a0a", fontWeight: 600 }}>
                separate, controlled environments
              </strong>{" "}
              to ensure product integrity and category-specific standards.
            </p>
          </div>
        </ScrollReveal>
      </div>

      {/* Closed-Loop System — lives outside the hero bg div */}
      <ClosedLoopSection />

      {/* Capabilities Section */}
      <CapabilitiesSection />

      {/* Why Novem Section */}
      <WhyNovemSection />

      {/* Final CTA Section */}
      <FinalCTASection />

      {/* Footer Section */}
      <FooterSection />
    </>
  );
}
