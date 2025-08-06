import { Home, Search, Map, AlertTriangle, User } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

interface BottomNavProps {
  currentTab?: string;
}

const navItems = [
  { id: 'home', label: 'Home', icon: Home, path: '/' },
  { id: 'search', label: 'Search', icon: Search, path: '/search' },
  { id: 'map', label: 'Map', icon: Map, path: '/map' },
  { id: 'alerts', label: 'Alerts', icon: AlertTriangle, path: '/alerts' },
  { id: 'profile', label: 'Profile', icon: User, path: '/profile' },
];

export const BottomNav = ({ currentTab }: BottomNavProps) => {
  const location = useLocation();
  
  const isActive = (path: string) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  return (
    <nav className="fixed bottom-0 left-1/2 transform -translate-x-1/2 w-full max-w-sm bg-white border-t border-border px-4 py-2">
      <div className="flex items-center justify-around">
        {navItems.map((item) => {
          const Icon = item.icon;
          const active = isActive(item.path);
          
          return (
            <Link
              key={item.id}
              to={item.path}
              className={`flex flex-col items-center gap-1 p-2 rounded-lg transition-colors ${
                active 
                  ? 'text-primary bg-primary/10' 
                  : 'text-body hover:text-title hover:bg-accent'
              }`}
            >
              <Icon className="w-5 h-5" strokeWidth={1.5} />
              <span className="text-xs font-medium">{item.label}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
};