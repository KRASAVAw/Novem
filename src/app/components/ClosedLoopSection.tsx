import { useState } from "react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import conceptImg from "../../imports/step-01-concept.png";
import sourcingImg from "../../imports/step-02-sourcing.png";
import rdImg from "../../imports/step-03-rd.png";
import freezeDryingImg from "../../imports/step-04-freeze-drying.png";
import packagingImg from "../../imports/step-05-packaging.png";
import storageImg from "../../imports/step-06-storage.png";
import distributionImg from "../../imports/step-07-distribution.png";
import distributionMobileImg from "../../imports/step-07-distribution-mobile.png";

import { ScrollReveal } from "./ScrollReveal";
import { useWindowWidth } from "../hooks/useWindowWidth";

const steps = [
  {
    num: "01",
    name: "CONCEPT",
    desc: "Product ideation and formulation strategy tailored to nutrition goals.",
    image: conceptImg
  },
  {
    num: "02",
    name: "SOURCING",
    desc: "Traceable, high-quality ingredients from verified agricultural partners.",
    image: sourcingImg
  },
  {
    num: "03",
    name: "R&D",
    desc: "In-house research and iterative testing before scale production.",
    image: rdImg
  },
  {
    num: "04",
    name: "FREEZE DRYING",
    desc: "Industrial lyophilisation locking in structure, nutrients, and flavour.",
    image: freezeDryingImg
  },
  {
    num: "05",
    name: "PACKAGING",
    desc: "Protective formats engineered for shelf life and compliance.",
    image: packagingImg
  },
  {
    num: "06",
    name: "STORAGE",
    desc: "Climate-controlled warehousing with real-time monitoring.",
    image: storageImg
  },
  {
    num: "07",
    name: "DISTRIBUTION",
    desc: "Coordinated logistics across domestic and international chains.",
    image: distributionImg
  },
];

export function ClosedLoopSection() {
  const [btnHovered, setBtnHovered] = useState(false);
  const width = useWindowWidth();
  const isMobile = width < 768;
  const isTablet = width < 1024;

  const gridCols = isMobile ? "1fr" : isTablet ? "repeat(2, 1fr)" : "repeat(3, 1fr)";

  return (
    <section
      style={{
        backgroundColor: "#FAF4EF",
        width: "100%",
        overflow: "hidden",
      }}
    >
      {/* ── Header ── */}
      <ScrollReveal delay={0.1}>
        <div
          style={{
            maxWidth: "1300px",
            margin: "0 auto",
            padding: isMobile ? "48px 24px 40px" : isTablet ? "60px 40px 48px" : "76px 60px 60px",
            display: "flex",
            flexDirection: isMobile ? "column" : "row",
            justifyContent: "space-between",
            alignItems: isMobile ? "flex-start" : "flex-end",
            gap: isMobile ? "28px" : "40px",
            boxSizing: "border-box",
          }}
        >
          {/* Left: eyebrow + heading */}
          <div>
            <p
              style={{
                fontFamily: "'Satoshi', sans-serif",
                fontSize: "11px",
                letterSpacing: "0.18em",
                fontWeight: 400,
                color: "rgba(10,10,10,0.55)",
                margin: "0 0 22px",
              }}
            >
              CLOSED-LOOP SYSTEM
            </p>
            <h2
              style={{
                fontFamily: "'Playfair Display', serif",
                fontWeight: 400,
                fontSize: isMobile ? "42px" : isTablet ? "52px" : "68px",
                color: "#0a0a0a",
                margin: 0,
                lineHeight: 1.05,
                letterSpacing: "-0.015em",
              }}
            >
              Closed-Loop
              <br />
              <em style={{ fontStyle: "italic" }}>System.</em>
            </h2>
          </div>

          {/* Right: description + CTA */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: isMobile ? "flex-start" : "flex-end",
              gap: "28px",
              paddingBottom: "6px",
              flex: isMobile ? "none" : "0 0 310px",
            }}
          >
            <p
              style={{
                fontFamily: "'Satoshi', sans-serif",
                fontSize: "14px",
                fontWeight: 400,
                color: "rgba(10,10,10,0.6)",
                lineHeight: 1.72,
                margin: 0,
                textAlign: isMobile ? "left" : "right",
              }}
            >
              Every stage is owned and operated in-house — giving you complete traceability from source to shelf.
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
                padding: "13px 28px",
                fontSize: "13px",
                fontWeight: 400,
                letterSpacing: "0.02em",
                cursor: "pointer",
                display: "inline-flex",
                alignItems: "center",
                gap: "10px",
                fontFamily: "'Satoshi', sans-serif",
                transition: "color 0.45s ease",
                whiteSpace: "nowrap",
              }}
            >
              <span
                style={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  width: "320px",
                  height: "320px",
                  borderRadius: "50%",
                  background: "#1C3020",
                  transform: `translate(-50%, -50%) scale(${btnHovered ? 1 : 0})`,
                  transition: "transform 0.55s cubic-bezier(0.4, 0, 0.2, 1)",
                  zIndex: 0,
                }}
              />
              <span style={{ position: "relative", zIndex: 1 }}>
                View Capabilities
              </span>
              <span style={{ fontSize: "15px", position: "relative", zIndex: 1 }}>
                ↗
              </span>
            </button>
          </div>
        </div>
      </ScrollReveal>

      {/* ── Top rule ── */}
      <ScrollReveal delay={0.2}>
        <div
          style={{
            maxWidth: "1300px",
            margin: "0 auto",
            padding: isMobile ? "0 24px" : isTablet ? "0 40px" : "0 60px",
            boxSizing: "border-box",
          }}
        >
          <div
            style={{ height: "1px", backgroundColor: "rgba(10,10,10,0.1)" }}
          />
        </div>
      </ScrollReveal>

      {/* ── Card Grid ── */}
      <div
        style={{
          maxWidth: "1300px",
          margin: "0 auto",
          padding: isMobile ? "32px 24px 48px" : isTablet ? "40px 40px 60px" : "60px 60px 80px",
          boxSizing: "border-box",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: gridCols,
            gap: "20px",
          }}
        >
          {steps.map((step, i) => {
            // On desktop: 7th card spans full row; on tablet: spans 2 cols; on mobile: normal
            const isLast = i === 6;
            const spanStyle: React.CSSProperties = !isMobile && isLast
              ? { gridColumn: "1 / -1" }
              : {};

            return (
              <ScrollReveal
                key={step.num}
                delay={0.1 + (i % (isMobile ? 1 : isTablet ? 2 : 3)) * 0.1}
                style={spanStyle}
              >
                <div
                  style={{
                    maxWidth: !isMobile && isLast ? (isTablet ? "100%" : "calc(50% - 10px)") : undefined,
                    margin: !isMobile && isLast && !isTablet ? "0 auto" : undefined,
                    width: !isMobile && isLast ? "100%" : undefined,
                    position: "relative",
                    overflow: "hidden",
                    borderRadius: "16px",
                    minHeight: isMobile ? (isLast ? "90px" : "128px") : (isLast ? "150px" : "200px"),
                    display: "flex",
                    alignItems: "center",
                    padding: isMobile ? "20px 20px 20px 16px" : "28px 36px 28px 28px",
                    boxSizing: "border-box",
                    border: "1px solid rgba(10,10,10,0.08)",
                    backgroundColor: i === 1 ? "#F4EAE3" : i === 2 ? "#F5EAE1" : i === 3 ? "#F4EAE2" : i === 4 ? "#F5EAE1" : i === 5 ? "#F7EDE3" : i === 6 ? "#F3E9E0" : "#F4EBE3",
                    height: "100%",
                  }}
                >
                  {/* Background Image */}
                  <div
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      width: "100%",
                      height: "100%",
                      zIndex: 0,
                      ...(isMobile && i === 2 && {
                        transform: "scale(0.72)",
                        transformOrigin: "left center",
                      }),
                    }}
                  >
                    <ImageWithFallback
                      src={isMobile && isLast ? distributionMobileImg : step.image}
                      alt={step.name}
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: isLast ? "cover" : "contain",
                        objectPosition: isLast ? (isMobile ? "right center" : "center") : "left center",
                      }}
                    />
                  </div>

                  {/* Large Decorative Number */}
                  <span
                    style={{
                      position: "absolute",
                      bottom: "-0.3em",
                      left: isMobile ? "10px" : "20px",
                      fontFamily: "'Playfair Display', serif",
                      fontSize: isMobile ? "80px" : "144px",
                      fontWeight: 400,
                      color: "rgba(10,10,10,0.15)",
                      lineHeight: 1,
                      letterSpacing: "-0.02em",
                      zIndex: 2,
                      userSelect: "none",
                      pointerEvents: "none",
                    }}
                  >
                    {step.num}
                  </span>

                  {/* Text Content */}
                  <div
                    style={{
                      position: "relative",
                      zIndex: 3,
                      display: "flex",
                      flexDirection: "column",
                      marginLeft: isLast ? "0" : isMobile ? "80px" : "148px",
                      alignItems: isLast ? "center" : "flex-start",
                      textAlign: isLast ? "center" : "left",
                      width: isLast ? "100%" : undefined,
                    }}
                  >
                    <h3
                      style={{
                        fontFamily: "'Satoshi', sans-serif",
                        fontSize: "12px",
                        letterSpacing: "0.14em",
                        fontWeight: 600,
                        color: "rgb(10,10,10)",
                        margin: "0 0 8px",
                        textTransform: "uppercase",
                      }}
                    >
                      {step.name}
                    </h3>
                    <div
                      style={{
                        width: "20px",
                        height: "1px",
                        backgroundColor: "rgba(10,10,10,0.3)",
                        marginBottom: "10px",
                      }}
                    />
                    <p
                      style={{
                        fontFamily: "'Satoshi', sans-serif",
                        fontSize: "13px",
                        fontWeight: 400,
                        color: "rgba(10,10,10,0.7)",
                        lineHeight: 1.5,
                        margin: 0,
                        maxWidth: "220px",
                      }}
                    >
                      {step.desc}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>

    </section>
  );
}
