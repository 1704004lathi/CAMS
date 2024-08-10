import React, { useState, useEffect } from 'react';
import './SettingsPage.css'; // Add your CSS styles here
import AdminSidebar from './AdminSidebar';
import translations from './translation'; // Import translations

const SettingsPage = () => {
    const [settings, setSettings] = useState({
        general: { theme: 'light', language: 'English' },
        userPreferences: { notifications: true, autoLogin: false },
        systemConfig: { maintenanceMode: false, backupFrequency: 'daily' },
    });

    useEffect(() => {
        // Simulate fetching settings from an API
        // Here you would normally fetch settings from your backend
        // For now, we use mock data
        // setSettings(fetchSettingsFromBackend());
    }, []);

    const handleChange = (section, key, value) => {
        setSettings(prevSettings => ({
            ...prevSettings,
            [section]: {
                ...prevSettings[section],
                [key]: value,
            },
        }));
    };

    const currentLanguage = settings.general.language;
    const t = translations[currentLanguage] || translations.English;

    // Apply theme class based on the selected theme
    const themeClass = settings.general.theme === 'dark' ? 'dark-theme' : 'light-theme';

    return (
        <div className={`settings-page ${themeClass}`}>
            <AdminSidebar className="admin-sidebar" />
            <div className="settings-content">
                <h1>{t.settingsTitle}</h1>

                <div className="settings-section">
                    <h2>{t.generalSettings}</h2>
                    <div className="settings-group">
                        <label htmlFor="theme">{t.theme}</label>
                        <select
                            id="theme"
                            value={settings.general.theme}
                            onChange={(e) => handleChange('general', 'theme', e.target.value)}
                        >
                            <option value="light">Light</option>
                            <option value="dark">Dark</option>
                        </select>
                    </div>
                    <div className="settings-group">
                        <label htmlFor="language">{t.language}</label>
                        <select
                            id="language"
                            value={settings.general.language}
                            onChange={(e) => handleChange('general', 'language', e.target.value)}
                        >
                            <option value="English">English</option>
                            <option value="Spanish">Spanish</option>
                            <option value="French">French</option>
                        </select>
                    </div>
                </div>

                <div className="settings-section">
                    <h2>{t.userPreferences}</h2>
                    <div className="settings-group">
                        <label htmlFor="notifications">{t.enableNotifications}</label>
                        <input
                            type="checkbox"
                            id="notifications"
                            checked={settings.userPreferences.notifications}
                            onChange={(e) => handleChange('userPreferences', 'notifications', e.target.checked)}
                        />
                    </div>
                    <div className="settings-group">
                        <label htmlFor="autoLogin">{t.enableAutoLogin}</label>
                        <input
                            type="checkbox"
                            id="autoLogin"
                            checked={settings.userPreferences.autoLogin}
                            onChange={(e) => handleChange('userPreferences', 'autoLogin', e.target.checked)}
                        />
                    </div>
                </div>

                <div className="settings-section">
                    <h2>{t.systemConfiguration}</h2>
                    <div className="settings-group">
                        <label htmlFor="maintenanceMode">{t.maintenanceMode}</label>
                        <input
                            type="checkbox"
                            id="maintenanceMode"
                            checked={settings.systemConfig.maintenanceMode}
                            onChange={(e) => handleChange('systemConfig', 'maintenanceMode', e.target.checked)}
                        />
                    </div>
                    <div className="settings-group">
                        <label htmlFor="backupFrequency">{t.backupFrequency}</label>
                        <select
                            id="backupFrequency"
                            value={settings.systemConfig.backupFrequency}
                            onChange={(e) => handleChange('systemConfig', 'backupFrequency', e.target.value)}
                        >
                            <option value="daily">Daily</option>
                            <option value="weekly">Weekly</option>
                            <option value="monthly">Monthly</option>
                        </select>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SettingsPage;
