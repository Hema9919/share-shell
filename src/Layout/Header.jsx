import React, { useState } from "react";
import ShellLogo from "../assets/ShellLogo";
import { useLanguage } from "../context/LanguageContext";
import { Link } from "react-router-dom";

export default function Header() {
  const { lang, toggleLanguage, t } = useLanguage();
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <header className="shell-header-wrapper">
      <div className="top-accent-bar"></div>
      <div className="shell-header">
        <div className="header-left">
          <div className="header-logo-wrapper">
            <Link to={"product-verification"}>
            <ShellLogo width={46} height={46} />
            </Link>
          </div>
          <span className="header-title-mobile non-link">
            {t.headerTitleMobile}
          </span>
          <span className="header-title-desktop non-link">
            {t.headerTitleDesktop}
          </span>
        </div>

        <div className="header-right">
          <button
            onClick={toggleLanguage}
            className="lang-btn clickable-action"
            title="Switch Language"
          >
            {t.languageButtonText}
          </button>

          <button
            className="mobile-menu-btn clickable-action"
            onClick={() => setDrawerOpen(true)}
            aria-label="Open Menu"
          >
            <span></span>
            <span></span>
          </button>
        </div>
      </div>

      {/* Mobile Side Drawer Modal (no links, non-navigating) */}
      {drawerOpen && (
        <div
          className="mobile-drawer-overlay"
          onClick={() => setDrawerOpen(false)}
        >
          <div className="mobile-drawer" onClick={(e) => e.stopPropagation()}>
            <div className="drawer-header">
              <ShellLogo width={36} height={36} />
              <button
                className="close-btn clickable-action"
                onClick={() => setDrawerOpen(false)}
              >
                ✕
              </button>
            </div>
            <div className="drawer-item non-link">
              <Link to={"product-verification"}>{t.headerTitleDesktop}</Link>
            </div>
            <div className="drawer-item non-link">{t.siteInformation}</div>
            <div className="drawer-item non-link">{t.connectWithUs}</div>
          </div>
        </div>
      )}
    </header>
  );
}
