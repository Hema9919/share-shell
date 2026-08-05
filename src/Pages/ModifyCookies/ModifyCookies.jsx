import React, { useState } from "react";
import { useLanguage } from "../../context/LanguageContext";

export default function ModifyCookies() {
  const { t } = useLanguage();
  const [analytics, setAnalytics] = useState(true);
  const [marketing, setMarketing] = useState(false);
  const [saved, setSaved] = useState(false);

  const handleSave = () => {
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };

  return (
    <main className="main-content">
      {/* Desktop Breadcrumb */}
      <div className="desktop-subheader">
        <div className="breadcrumb-path">
          <span className="breadcrumb-link non-link">{t.breadcrumbRoot}</span>
          <span className="breadcrumb-sep">›</span>
          <span className="breadcrumb-active non-link">{t.modifyCookiePreferences}</span>
        </div>
      </div>

      <section className="legal-page-section">
        <div className="legal-heading-wrapper">
          <h1 className="legal-page-title">{t.cookieModalTitle}</h1>
          <div className="title-underline title-underline--legal"></div>
        </div>

        <div className="modify-cookies-container">
          <p className="modify-cookies-desc">{t.cookieModalDesc}</p>

          {/* Cookie Category: Essential */}
          <div className="cookie-toggle-card">
            <div className="cookie-toggle-info">
              <h3 className="cookie-toggle-title">{t.cookieNecessary}</h3>
              <p className="cookie-toggle-desc">{t.cookieNecessaryDesc}</p>
            </div>
            <div className="cookie-toggle-control">
              <span className="cookie-always-active">{t.alwaysActive}</span>
              <div className="toggle-switch toggle-switch--disabled">
                <div className="toggle-track toggle-track--on">
                  <div className="toggle-thumb toggle-thumb--on"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Cookie Category: Analytics */}
          <div className="cookie-toggle-card">
            <div className="cookie-toggle-info">
              <h3 className="cookie-toggle-title">{t.cookieAnalytics}</h3>
              <p className="cookie-toggle-desc">{t.cookieAnalyticsDesc}</p>
            </div>
            <div className="cookie-toggle-control">
              <div
                className="toggle-switch clickable-action"
                onClick={() => setAnalytics(!analytics)}
                role="switch"
                aria-checked={analytics}
              >
                <div className={`toggle-track ${analytics ? "toggle-track--on" : ""}`}>
                  <div className={`toggle-thumb ${analytics ? "toggle-thumb--on" : ""}`}></div>
                </div>
              </div>
            </div>
          </div>

          {/* Cookie Category: Marketing */}
          <div className="cookie-toggle-card">
            <div className="cookie-toggle-info">
              <h3 className="cookie-toggle-title">{t.cookieMarketing}</h3>
              <p className="cookie-toggle-desc">{t.cookieMarketingDesc}</p>
            </div>
            <div className="cookie-toggle-control">
              <div
                className="toggle-switch clickable-action"
                onClick={() => setMarketing(!marketing)}
                role="switch"
                aria-checked={marketing}
              >
                <div className={`toggle-track ${marketing ? "toggle-track--on" : ""}`}>
                  <div className={`toggle-thumb ${marketing ? "toggle-thumb--on" : ""}`}></div>
                </div>
              </div>
            </div>
          </div>

          {/* Save Button */}
          <div className="cookie-save-wrapper">
            <button
              className="cookie-save-btn clickable-action"
              onClick={handleSave}
            >
              {t.savePreferences}
            </button>
            {saved && (
              <div className="cookie-saved-toast">
                <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="#008a3e" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 6L9 17l-5-5"/>
                </svg>
                <span>{t.preferencesSaved}</span>
              </div>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}
