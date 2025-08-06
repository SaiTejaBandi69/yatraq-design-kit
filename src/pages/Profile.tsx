import { MobileLayout } from '@/components/layout/MobileLayout';
import { User, Settings, Bell, HelpCircle, LogOut, Edit, MapPin, Star } from 'lucide-react';
import { useState } from 'react';

const Profile = () => {
  const [notifications, setNotifications] = useState(true);

  const profileItems = [
    {
      icon: Edit,
      title: 'Edit Profile',
      description: 'Update your personal information',
      onClick: () => {}
    },
    {
      icon: MapPin,
      title: 'Saved Locations',
      description: 'Manage your favorite places',
      onClick: () => {}
    },
    {
      icon: Star,
      title: 'Favorite Routes',
      description: 'Your most used bus routes',
      onClick: () => {}
    }
  ];

  const settingsItems = [
    {
      icon: Bell,
      title: 'Notifications',
      description: 'Push notifications and alerts',
      hasToggle: true,
      toggleValue: notifications,
      onToggle: () => setNotifications(!notifications)
    },
    {
      icon: Settings,
      title: 'App Settings',
      description: 'Preferences and configuration',
      onClick: () => {}
    },
    {
      icon: HelpCircle,
      title: 'Help & Support',
      description: 'FAQ and customer support',
      onClick: () => {}
    }
  ];

  return (
    <MobileLayout title="Profile" currentTab="profile">
      <div className="space-y-6 animate-fade-in">
        {/* Profile Header */}
        <div className="card-flat p-6 text-center">
          <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
            <User className="w-10 h-10 text-primary-foreground" strokeWidth={1.5} />
          </div>
          <h2 className="text-title font-bold text-lg mb-1">John Doe</h2>
          <p className="text-body text-sm mb-3">john.doe@example.com</p>
          <div className="flex items-center justify-center gap-4 text-sm">
            <div className="text-center">
              <div className="text-title font-semibold">24</div>
              <div className="text-body">Trips</div>
            </div>
            <div className="w-px h-8 bg-border"></div>
            <div className="text-center">
              <div className="text-title font-semibold">5</div>
              <div className="text-body">Favorites</div>
            </div>
            <div className="w-px h-8 bg-border"></div>
            <div className="text-center">
              <div className="text-title font-semibold">12h</div>
              <div className="text-body">Saved</div>
            </div>
          </div>
        </div>

        {/* Profile Actions */}
        <div className="space-y-3">
          <h3 className="text-title font-semibold text-base">Profile</h3>
          <div className="space-y-2">
            {profileItems.map((item, index) => {
              const Icon = item.icon;
              return (
                <button
                  key={index}
                  onClick={item.onClick}
                  className="w-full card-flat card-hover p-4 text-left"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center">
                      <Icon className="w-5 h-5 text-primary" strokeWidth={1.5} />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-medium text-title text-sm">{item.title}</h4>
                      <p className="text-body text-xs">{item.description}</p>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Settings */}
        <div className="space-y-3">
          <h3 className="text-title font-semibold text-base">Settings</h3>
          <div className="space-y-2">
            {settingsItems.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className="card-flat p-4"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center">
                      <Icon className="w-5 h-5 text-primary" strokeWidth={1.5} />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-medium text-title text-sm">{item.title}</h4>
                      <p className="text-body text-xs">{item.description}</p>
                    </div>
                    {item.hasToggle ? (
                      <button
                        onClick={item.onToggle}
                        className={`
                          w-12 h-6 rounded-full transition-colors
                          ${item.toggleValue ? 'bg-primary' : 'bg-accent'}
                        `}
                      >
                        <div className={`
                          w-5 h-5 rounded-full bg-white transition-transform
                          ${item.toggleValue ? 'translate-x-6' : 'translate-x-0.5'}
                        `} />
                      </button>
                    ) : (
                      <button onClick={item.onClick} className="p-1">
                        <svg className="w-5 h-5 text-body" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
                        </svg>
                      </button>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Logout */}
        <button className="w-full card-flat p-4 text-left hover:bg-destructive/5 transition-colors">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-destructive/10 rounded-lg flex items-center justify-center">
              <LogOut className="w-5 h-5 text-destructive" strokeWidth={1.5} />
            </div>
            <div>
              <h4 className="font-medium text-destructive text-sm">Sign Out</h4>
              <p className="text-body text-xs">Sign out of your account</p>
            </div>
          </div>
        </button>
      </div>
    </MobileLayout>
  );
};

export default Profile;