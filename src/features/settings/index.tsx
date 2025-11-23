import React from 'react';
import { PiUserCircleDuotone, PiBellDuotone, PiLockKeyDuotone, PiCloudDuotone } from 'react-icons/pi';

export const SettingsView: React.FC = () => {
    return (
        <div>
            <h1 className="text-3xl font-bold mb-2 text-white">Settings</h1>
            <p className="text-[#a6a6a6] mb-8">Manage your account and system preferences.</p>

            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                {/* Settings Sidebar */}
                <div className="glass-card p-4 h-fit">
                    <nav className="space-y-2">
                        <SettingsNavItem icon={PiUserCircleDuotone} label="Profile" active />
                        <SettingsNavItem icon={PiBellDuotone} label="Notifications" />
                        <SettingsNavItem icon={PiLockKeyDuotone} label="Security" />
                        <SettingsNavItem icon={PiCloudDuotone} label="Integrations" />
                    </nav>
                </div>

                {/* Settings Content */}
                <div className="lg:col-span-3 space-y-6">
                    {/* Profile Section */}
                    <div className="glass-card p-8">
                        <h2 className="text-xl font-bold text-white mb-6">Profile Information</h2>
                        <div className="flex items-center gap-6 mb-8">
                            <div className="w-20 h-20 rounded-full bg-gradient-to-tr from-[#00d6cb] to-[#00a89e] flex items-center justify-center text-2xl font-bold text-black">
                                JD
                            </div>
                            <div>
                                <button className="px-4 py-2 bg-[rgba(255,255,255,0.1)] hover:bg-[rgba(255,255,255,0.15)] rounded-lg text-sm font-medium text-white transition-colors border border-[rgba(255,255,255,0.1)]">
                                    Change Avatar
                                </button>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <InputGroup label="First Name" defaultValue="John" />
                            <InputGroup label="Last Name" defaultValue="Doe" />
                            <InputGroup label="Email" defaultValue="john.doe@company.com" type="email" />
                            <InputGroup label="Role" defaultValue="Data Engineer" disabled />
                        </div>

                        <div className="mt-8 flex justify-end">
                            <button className="neon-button px-6 py-2 font-medium">
                                Save Changes
                            </button>
                        </div>
                    </div>

                    {/* Notifications Section */}
                    <div className="glass-card p-8">
                        <h2 className="text-xl font-bold text-white mb-6">Notifications</h2>
                        <div className="space-y-4">
                            <ToggleGroup label="Email Notifications" description="Receive daily summaries and critical alerts." defaultChecked />
                            <ToggleGroup label="Slack Integration" description="Push validation errors to #data-ops channel." defaultChecked />
                            <ToggleGroup label="Browser Push" description="Get notified when validation jobs complete." />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

const SettingsNavItem: React.FC<{ icon: React.ElementType; label: string; active?: boolean }> = ({ icon: Icon, label, active }) => (
    <button className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${active
            ? 'bg-[rgba(0,214,203,0.1)] text-[#00d6cb] border border-[rgba(0,214,203,0.2)]'
            : 'text-[#a6a6a6] hover:bg-[rgba(255,255,255,0.05)] hover:text-white'
        }`}>
        <Icon size={20} />
        <span className="font-medium text-sm">{label}</span>
    </button>
);

const InputGroup: React.FC<{ label: string; defaultValue?: string; type?: string; disabled?: boolean }> = ({ label, defaultValue, type = "text", disabled }) => (
    <div className="flex flex-col gap-2">
        <label className="text-xs font-mono text-[#a6a6a6] uppercase">{label}</label>
        <input
            type={type}
            defaultValue={defaultValue}
            disabled={disabled}
            className={`bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.1)] rounded-lg px-4 py-2 text-white focus:outline-none focus:border-[#00d6cb] transition-colors ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`}
        />
    </div>
);

const ToggleGroup: React.FC<{ label: string; description: string; defaultChecked?: boolean }> = ({ label, description, defaultChecked }) => (
    <div className="flex items-center justify-between p-4 rounded-lg bg-[rgba(255,255,255,0.02)] border border-[rgba(255,255,255,0.05)]">
        <div>
            <h3 className="font-medium text-white">{label}</h3>
            <p className="text-sm text-[#a6a6a6]">{description}</p>
        </div>
        <div className={`w-12 h-6 rounded-full p-1 transition-colors ${defaultChecked ? 'bg-[#00d6cb]' : 'bg-[rgba(255,255,255,0.1)]'}`}>
            <div className={`w-4 h-4 rounded-full bg-white shadow-sm transition-transform ${defaultChecked ? 'translate-x-6' : 'translate-x-0'}`}></div>
        </div>
    </div>
);
