import React from "react";
import { useLanguage } from "../../context/LanguageContext";

export default function CookiePolicy() {
  const { t } = useLanguage();

  return (
    <main className="main-content">
      {/* Desktop Breadcrumb */}
      <div className="desktop-subheader">
        <div className="breadcrumb-path">
          <span className="breadcrumb-link non-link">{t.breadcrumbRoot}</span>
          <span className="breadcrumb-sep">›</span>
          <span className="breadcrumb-active non-link">{t.breadcrumbCookie}</span>
        </div>
      </div>

      <section className="legal-page-section">
        <div className="legal-heading-wrapper">
          <h1 className="legal-page-title">{t.cookiePolicy}</h1>
          <div className="title-underline title-underline--legal"></div>
        </div>

        <div className="legal-content">
          <div className="legal-block">
            <h2 className="legal-subtitle">{t.cookieWhatTitle}</h2>
            <p className="legal-text">{t.cookieWhatText}</p>
          </div>

          <div className="legal-block">
            <h2 className="legal-subtitle">{t.cookieHowTitle}</h2>
            <p className="legal-text">{t.cookieHowText}</p>
          </div>

          <div className="legal-block">
            <h2 className="legal-subtitle">{t.cookieTypesTitle}</h2>
            <div className="cookie-types-grid">
              <div className="cookie-type-card">
                <div className="cookie-type-header">
                  <span className="cookie-type-name">{t.cookieNecessary}</span>
                  <span className="cookie-badge cookie-badge--active">{t.alwaysActive}</span>
                </div>
                <p className="legal-text">{t.cookieNecessaryDesc}</p>
              </div>

              <div className="cookie-type-card">
                <div className="cookie-type-header">
                  <span className="cookie-type-name">{t.cookieAnalytics}</span>
                </div>
                <p className="legal-text">{t.cookieAnalyticsDesc}</p>
              </div>

              <div className="cookie-type-card">
                <div className="cookie-type-header">
                  <span className="cookie-type-name">{t.cookieMarketing}</span>
                </div>
                <p className="legal-text">{t.cookieMarketingDesc}</p>
              </div>
            </div>
          </div>

          <div className="legal-block">
            <h2 className="legal-subtitle">{t.cookieManageTitle}</h2>
            <p className="legal-text">{t.cookieManageText}</p>
          </div>

          <div className="legal-updated">
            {t.lastUpdated}: August 2024
          </div>
        </div>
      </section>
    </main>
  );
}
