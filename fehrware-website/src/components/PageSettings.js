import React from 'react';
import '../styles/PageSettings.css';

// PageSettings component to toggle tab title behavior
function PageSettings({ setShowTimeTab }) {
  return (
    <section className="page-settings">
      <h2>Page Settings</h2>
      {/* Checkbox to toggle time display in tab */}
      <label>
        <input
          type="checkbox"
          onChange={(e) => setShowTimeTab(e.target.checked)}
          defaultChecked={true}
        />
        Show current time in tab title
      </label>
    </section>
  );
}

export default PageSettings;