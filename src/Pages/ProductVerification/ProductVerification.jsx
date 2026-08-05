import React, { useState } from "react";
import { useLanguage } from "../../context/LanguageContext";
import { Link } from "react-router-dom";

export default function ProductVerification() {
  const { t } = useLanguage();
  const [code, setCode] = useState("");
  const [showHelp, setShowHelp] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);

  const handleClear = () => {
    setCode("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Just for show - no actual verification
  };

  return (
    <main className="main-content">
      {/* Desktop Breadcrumb */}
      <div className="desktop-subheader">
        <div className="breadcrumb-path">
          <span className="breadcrumb-link non-link">{t.breadcrumbRoot}</span>
          <span className="breadcrumb-sep">›</span>
          <span className="breadcrumb-active non-link">
            {t.breadcrumbCurrent}
          </span>
        </div>
      </div>

      <section className="pv-section">
        {/* Title */}
        <div className="verification-heading-wrapper">
          <h1 className="verification-title">{t.productVerification}</h1>
          <div className="title-underline"></div>
        </div>

        {/* Required field notice */}
        <div className="pv-required-notice">
          <span className="pv-asterisk">*</span> {t.requiredField}
        </div>

        {/* Form area - two columns on desktop */}
        <div className="pv-form-container">
          {/* Left Column - Help section */}
          <div className="pv-help-column">
            <h2 className="pv-help-title">{t.needHelpFinding}</h2>
            <button
              className="pv-help-btn clickable-action"
              onClick={() => setShowHelp(!showHelp)}
            >
              {t.clickHereToFindOut}
            </button>

            {/* Help Popup */}
            {showHelp && (
              <div className="pv-help-popup">
                <div className="pv-help-popup-content">
                  <button
                    className="pv-help-popup-close clickable-action"
                    onClick={() => setShowHelp(false)}
                  >
                    ✕
                  </button>
                  <p>{t.helpPopupText}</p>
                </div>
              </div>
            )}
          </div>

          {/* Right Column - Code input */}
          <div className="pv-input-column">
            <form onSubmit={handleSubmit}>
              <div className="pv-label-row">
                <label className="pv-input-label" htmlFor="product-code">
                  {t.productCodeLabel}
                  <span className="pv-asterisk">*</span>
                </label>
                <div className="pv-tooltip-wrapper">
                  <button
                    type="button"
                    className="pv-tooltip-btn clickable-action"
                    onClick={() => setShowTooltip(!showTooltip)}
                    aria-label="Help"
                  >
                    ?
                  </button>
                  {showTooltip && (
                    <div className="pv-tooltip-popup">{t.tooltipText}</div>
                  )}
                </div>
              </div>

              <input
                type="text"
                id="product-code"
                className="pv-code-input"
                value={code}
                onChange={(e) => setCode(e.target.value)}
                maxLength={20}
                autoComplete="off"
              />

              <button
                type="button"
                className="pv-clear-btn clickable-action"
                onClick={handleClear}
              >
                {t.clearButton}
              </button>
              <Link to={"/"}>
                <button
                  type="submit"
                  className="pv-submit-btn clickable-action"
                >
                  {t.submitButton}
                </button>
              </Link>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}
