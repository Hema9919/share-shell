import React from "react";
import { useLanguage } from "../../context/LanguageContext";

export default function Home() {
  const { t } = useLanguage();

  return (
    <main className="main-content">
      {/* Desktop Breadcrumb path (Non-navigating names as requested) */}
      <div className="desktop-subheader">
        <div className="breadcrumb-path">
          <span className="non-link">{t.breadcrumbRoot}</span>
          <span className="breadcrumb-sep">›</span>
          <span className="non-link font-semibold">{t.breadcrumbCurrent}</span>
        </div>
      </div>

      <section className="home-section">
        {/* Title */}
        <div className="verification-heading-wrapper">
          <h1 className="verification-title">{t.productVerification}</h1>
          <div className="title-underline"></div>
        </div>

        {/* Verification Status (Green Checkmark Icon & Text requested by user) */}
        <div className="status-container">
          <div className="green-circle-icon">
            <svg
              className="checkmark-svg"
              viewBox="0 0 52 52"
              aria-label="Success checkmark"
            >
              <path
                d="M14 27L22 35L38 17"
                stroke="white"
                strokeWidth="5"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
              />
            </svg>
          </div>

          <p className="status-message">{t.statusMessage}</p>
        </div>
      </section>
    </main>
  );
}
