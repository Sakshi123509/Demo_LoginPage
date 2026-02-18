import React, { useState } from 'react';
import '../styles/Dashboard.css';
const Dashboard = ({ user, onLogout }) => {
    const [activeTab, setActiveTab] = useState('profile');
    return (
        <div className="dashboard-container">
            <nav className="dashboard-navbar">
                <div className="navbar-brand">
                    <h2>Welcome, {user.name}!</h2>
                </div>
                <button onClick={onLogout} className="logout-btn"> Logout </button>
            </nav>
            <div className="dashboard-content">
                <div className="sidebar">
                    <ul className="nav-menu">
                        <li>
                            <button className={activeTab === 'profile' ? 'active' : ''} onClick={() => setActiveTab('profile')}>
                                Profile
                            </button>
                        </li>
                        <li>
                            <button className={activeTab === 'settings' ? 'active' : ''} onClick={() => setActiveTab('settings')}>
                                Settings
                            </button>
                        </li>
                        <li>
                            <button className={activeTab === 'activity' ? 'active' : ''} onClick={() => setActiveTab('activity')}>
                                Activity
                            </button>
                        </li>
                    </ul>
                </div>
                <div className="main-content">
                    {activeTab === 'profile' && (
                        <div className="tab-content">
                            <h3>User Profile</h3>
                            <div className="profile-card">
                                <p><strong>Name:</strong> {user.name}</p>
                                <p><strong>Email:</strong> {user.email}</p>
                                <p><strong>Member Since:</strong> 2026</p>
                            </div>
                        </div>
                    )}
                    {activeTab === 'settings' && (
                        <div className="tab-content">
                            <h3>Settings</h3>
                            <div className="settings-card">
                                <label>
                                    <input type="checkbox" defaultChecked /> Email Notifications
                                </label>
                                <label>
                                    <input type="checkbox" defaultChecked /> Two-Factor Authentication
                                </label>
                                <label>
                                    <input type="checkbox" /> Marketing Emails
                                </label>
                                <button className="save-btn">Save Settings</button>
                            </div>
                        </div>
                    )}
                    {activeTab === 'activity' && (
                        <div className="tab-content">
                            <h3>Recent Activity</h3>
                            <div className="activity-card">
                                <p>✓ Logged in successfully</p>
                                <p>✓ Profile viewed</p>
                                <p>✓ Settings updated</p>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};
export default Dashboard;