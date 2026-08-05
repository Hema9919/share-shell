import React, { useState } from "react";
import { useLanguage } from "../context/LanguageContext";

export default function NotificationBell() {
  const { t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Floating Bell Button */}
      <button
        className="notification-bell-btn clickable-action"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Notifications"
        title={t.notificationsTitle}
      >
        <svg
          viewBox="0 0 24 24"
          width="24"
          height="24"
          fill="none"
          stroke="#fbce07"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="bell-icon"
        >
          <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
          <path d="M13.73 21a2 2 0 0 1-3.46 0" />
        </svg>
        {/* Notification dot */}
        <span className="notification-dot"></span>
      </button>

      {/* Notification Dropdown */}
      {isOpen && (
        <>
          <div
            className="notification-overlay"
            onClick={() => setIsOpen(false)}
          ></div>
          <div className="notification-dropdown">
            <div className="notification-dropdown-header">
              <h4 className="notification-dropdown-title">{t.notificationsTitle}</h4>
              <button
                className="notification-close-btn clickable-action"
                onClick={() => setIsOpen(false)}
              >
                ✕
              </button>
            </div>
            <div className="notification-dropdown-body">
              <div className="notification-empty">
                <svg viewBox="0 0 24 24" width="48" height="48" fill="none" stroke="#ccc" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
                  <path d="M13.73 21a2 2 0 0 1-3.46 0" />
                  <line x1="1" y1="1" x2="23" y2="23" />
                </svg>
                <p className="notification-empty-text">{t.noNotifications}</p>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}
