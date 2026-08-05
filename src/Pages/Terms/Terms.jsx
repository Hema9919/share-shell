import React from "react";
import { useLanguage } from "../../context/LanguageContext";

export default function Terms() {
  const { t } = useLanguage();

  return (
    <main className="main-content">
      {/* Desktop Breadcrumb */}
      <div className="desktop-subheader">
        <div className="breadcrumb-path">
          <span className="breadcrumb-link non-link">{t.breadcrumbRoot}</span>
          <span className="breadcrumb-sep">›</span>
          <span className="breadcrumb-active non-link">{t.breadcrumbTerms}</span>
        </div>
      </div>

      <section className="legal-page-section">
        <div className="legal-heading-wrapper">
          <h1 className="legal-page-title">{t.termsConditions}</h1>
          <div className="title-underline title-underline--legal"></div>
        </div>

        <div className="legal-content">
          <div className="legal-block">
            <h2 className="legal-subtitle">{t.termsIntroTitle}</h2>
            <p className="legal-text">{t.termsIntroText}</p>
          </div>

          <div className="legal-block">
            <h2 className="legal-subtitle">{t.termsUseTitle}</h2>
            <p className="legal-text">{t.termsUseText}</p>
          </div>

          <div className="legal-block">
            <h2 className="legal-subtitle">{t.termsIPTitle}</h2>
            <p className="legal-text">{t.termsIPText}</p>
          </div>

          <div className="legal-block">
            <h2 className="legal-subtitle">{t.termsLiabilityTitle}</h2>
            <p className="legal-text">{t.termsLiabilityText}</p>
          </div>

          <div className="legal-block">
            <h2 className="legal-subtitle">{t.termsPrivacyTitle}</h2>
            <p className="legal-text">{t.termsPrivacyText}</p>
          </div>

          <div className="legal-block">
            <h2 className="legal-subtitle">{t.termsGoverningTitle}</h2>
            <p className="legal-text">{t.termsGoverningText}</p>
          </div>

          <div className="legal-block">
            <h2 className="legal-subtitle">{t.termsChangesTitle}</h2>
            <p className="legal-text">{t.termsChangesText}</p>
          </div>

          <div className="legal-updated">
            {t.lastUpdated}: August 2024
          </div>
        </div>
      </section>
    </main>
  );
}
