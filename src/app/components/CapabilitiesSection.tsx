import { useState } from "react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import packagingImg from "../../imports/capabilities-packaging.png";
import freezeDryingImg from "../../imports/capabilities-freeze-drying.png";

import { ScrollReveal } from "./ScrollReveal";
import { useWindowWidth } from "../hooks/useWindowWidth";

export function CapabilitiesSection() {
  const [btnHovered, setBtnHovered] = useState(false);
  const width = useWindowWidth();
  const isMobile = width < 768;
  const isTablet = width < 1024;

  return (
    <section
      style={{
        backgroundColor: "#FAF4EF",
        padding: isMobile ? "72px 24px 40px" : isTablet ? "100px 40px" : "140px 40px",
        display: "flex",
        justifyContent: "center",
        borderTop: "1px solid rgba(10,10,10,0.1)",
      }}
    >
      <div
        style={{
          maxWidth: "1100px",
          width: "100%",
          display: "grid",
          gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
          gap: isMobile ? "56px" : "80px",
          alignItems: "center",
        }}
      >
        {/* Left Side: Images & Dotted Grid */}
        <ScrollReveal delay={0.2}>
          <div
            style={{
              position: "relative",
              width: "100%",
              aspectRatio: "1/1",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              maxHeight: isMobile ? "320px" : undefined,
            }}
          >
            {/* Dotted Grid Background */}
            <div
              style={{
                position: "absolute",
                inset: 0,
                backgroundImage:
                  "radial-gradient(rgba(10, 10, 10, 0.15) 1.5px, transparent 1.5px)",
                backgroundSize: "32px 32px",
                zIndex: 0,
                maskImage: "linear-gradient(to bottom, black 80%, transparent)",
                WebkitMaskImage: "linear-gradient(to bottom, black 80%, transparent)",
              }}
            />

            {/* Top Right Image */}
            <div
              style={{
                position: "absolute",
                top: "0px",
                right: "0px",
                width: "calc(50% + 6px)",
                aspectRatio: "1/1",
                zIndex: 2,
                filter: "drop-shadow(0 20px 40px rgba(0,0,0,0.12))",
              }}
            >
              <div
                style={{
                  width: "100%",
                  height: "100%",
                  borderRadius: "20.5px",
                  overflow: "hidden",
                }}
              >
                <ImageWithFallback
                  src={packagingImg}
                  alt="Packaging line"
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              </div>
            </div>

            {/* Bottom Left Image */}
            <div
              style={{
                position: "absolute",
                bottom: isMobile ? "-8px" : 0,
                left: 0,
                width: "calc(50% + 6px)",
                aspectRatio: "1/1",
                zIndex: 1,
                filter: "drop-shadow(0 20px 40px rgba(0,0,0,0.12))",
              }}
            >
              <div
                style={{
                  width: "100%",
                  height: "100%",
                  borderRadius: "20.5px",
                  borderTopRightRadius: 0,
                  overflow: "hidden",
                  maskImage: "radial-gradient(circle 16px at top right, transparent 16px, black 17px)",
                  WebkitMaskImage: "radial-gradient(circle 16px at top right, transparent 16px, black 17px)",
                }}
              >
                <ImageWithFallback
                  src={freezeDryingImg}
                  alt="Freeze drying equipment"
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Right Side: Text & Content */}
        <div style={{ display: "flex", flexDirection: "column" }}>
          {/* Eyebrow */}
          <ScrollReveal delay={0.1}>
            <p
              style={{
                fontFamily: "'Satoshi', sans-serif",
                fontSize: "11px",
                letterSpacing: "0.18em",
                fontWeight: 500,
                color: "rgba(10,10,10,0.55)",
                marginBottom: "16px",
                textTransform: "uppercase",
              }}
            >
              Capabilities
            </p>
          </ScrollReveal>

          {/* Heading */}
          <ScrollReveal delay={0.2}>
            <h2
              style={{
                fontFamily: "'Playfair Display', serif",
                fontWeight: 400,
                fontSize: isMobile ? "34px" : isTablet ? "38px" : "44px",
                lineHeight: 1.15,
                color: "#0a0a0a",
                margin: "0 0 40px",
                letterSpacing: "-0.01em",
              }}
            >
              Built to Support Development, Production, and Scale
            </h2>
          </ScrollReveal>

          {/* List Items */}
          <div style={{ display: "flex", flexDirection: "column" }}>
            {[
              {
                title: "Private Label",
                description:
                  "Custom product development from concept to commercialization.",
              },
              {
                title: "Freeze Drying",
                description:
                  "Industrial freeze-drying for food, ingredients, and agricultural products.",
              },
              {
                title: "R&D Test Kitchen",
                description: "Pilot runs, formulation, and product optimization.",
              },
            ].map((item, index, arr) => (
              <ScrollReveal key={item.title} delay={0.3 + index * 0.1}>
                <div
                  style={{
                    padding: "24px 0",
                    borderTop: "1px solid rgba(10,10,10,0.1)",
                    borderBottom:
                      index === arr.length - 1
                        ? "1px solid rgba(10,10,10,0.1)"
                        : "none",
                    marginBottom: index === arr.length - 1 ? "40px" : "0",
                  }}
                >
                  <div style={{ display: "flex", alignItems: "baseline", gap: "12px" }}>
                    <span
                      style={{
                        color: "#0a0a0a",
                        fontSize: "20px",
                        lineHeight: 1,
                        opacity: 0.8,
                      }}
                    >
                      •
                    </span>
                    <div>
                      <h3
                        style={{
                          fontFamily: "'Satoshi', sans-serif",
                          fontSize: "19px",
                          fontWeight: 500,
                          color: "#0a0a0a",
                          margin: "0 0 8px",
                        }}
                      >
                        {item.title}
                      </h3>
                      <p
                        style={{
                          fontFamily: "'Satoshi', sans-serif",
                          fontSize: "14.5px",
                          color: "rgba(10,10,10,0.6)",
                          lineHeight: 1.6,
                          margin: 0,
                          fontWeight: 400,
                        }}
                      >
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          {/* Button */}
          <ScrollReveal delay={0.6}>
            <div>
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
                    transform: `translate(-50%, -50%) scale(${
                      btnHovered ? 1 : 0
                    })`,
                    transition: "transform 0.55s cubic-bezier(0.4, 0, 0.2, 1)",
                    zIndex: 0,
                  }}
                />
                <span style={{ position: "relative", zIndex: 1 }}>Explore Services</span>
                <span style={{ fontSize: "16px", position: "relative", zIndex: 1 }}>
                  →
                </span>
              </button>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
