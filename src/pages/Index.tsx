import { MobileLayout } from '@/components/layout/MobileLayout';
import { FeatureCard } from '@/components/ui/FeatureCard';
import { SearchInput } from '@/components/ui/SearchInput';
import { Search, Map, AlertTriangle, Phone, Clock, Star } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const Index = () => {
  const navigate = useNavigate();
  const [searchValue, setSearchValue] = useState('');

  const features = [
    {
      icon: Search,
      title: 'Search Bus',
      subtitle: 'Find routes & times',
      onClick: () => navigate('/search'),
      variant: 'primary' as const
    },
    {
      icon: Map,
      title: 'Route Map',
      subtitle: 'Live tracking',
      onClick: () => navigate('/map'),
      variant: 'default' as const
    },
    {
      icon: AlertTriangle,
      title: 'Emergency',
      subtitle: 'Quick SOS help',
      onClick: () => navigate('/alerts'),
      variant: 'secondary' as const
    },
    {
      icon: Phone,
      title: 'Support',
      subtitle: 'Get help 24/7',
      onClick: () => {},
      variant: 'default' as const
    },
    {
      icon: Clock,
      title: 'Schedule',
      subtitle: 'View timetables',
      onClick: () => {},
      variant: 'default' as const
    },
    {
      icon: Star,
      title: 'Favorites',
      subtitle: 'Saved routes',
      onClick: () => {},
      variant: 'default' as const
    }
  ];

  const handleSearch = (value: string) => {
    setSearchValue(value);
    if (value.trim()) {
      navigate(`/search?q=${encodeURIComponent(value)}`);
    }
  };

  return (
    <MobileLayout title="YatraQ" showProfile currentTab="home">
      <div className="space-y-6 animate-fade-in">
        {/* Welcome Section */}
        <div className="text-center py-4">
          <h2 className="text-title font-bold text-xl mb-2">Welcome to YatraQ</h2>
          <p className="text-body text-sm">Track buses in real-time</p>
        </div>

        {/* Quick Search */}
        <div className="space-y-3">
          <h3 className="text-title font-semibold text-base">Quick Search</h3>
          <SearchInput
            value={searchValue}
            onChange={setSearchValue}
            placeholder="Search bus number or route..."
          />
        </div>

        {/* Feature Grid */}
        <div className="space-y-3">
          <h3 className="text-title font-semibold text-base">Features</h3>
          <div className="grid grid-cols-2 gap-4">
            {features.map((feature, index) => (
              <FeatureCard
                key={index}
                icon={feature.icon}
                title={feature.title}
                subtitle={feature.subtitle}
                onClick={feature.onClick}
                variant={feature.variant}
                className="animate-slide-up"
              />
            ))}
          </div>
        </div>

        {/* Recent Activity */}
        <div className="card-flat p-4 space-y-3">
          <h3 className="text-title font-semibold text-base">Recent Activity</h3>
          <div className="space-y-2">
            <div className="flex items-center justify-between py-2">
              <span className="text-body text-sm">Bus #42A - Downtown</span>
              <span className="text-primary text-xs font-medium">5 min ago</span>
            </div>
            <div className="flex items-center justify-between py-2">
              <span className="text-body text-sm">Bus #18B - Airport</span>
              <span className="text-muted text-xs">2 hours ago</span>
            </div>
          </div>
        </div>
      </div>
    </MobileLayout>
  );
};

export default Index;