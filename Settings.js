import React from 'react';

function Settings() {
  const handleSave = (e) => {
    e.preventDefault();
    // Add settings save logic here
  };

  return (
    <div className="settings">
      <h2>Settings</h2>
      <form onSubmit={handleSave}>
        <label>
          Notification Preferences:
          <input type="checkbox" /> Enable notifications
        </label>
        <button type="submit">Save Settings</button>
      </form>
    </div>
  );
}

export default Settings;