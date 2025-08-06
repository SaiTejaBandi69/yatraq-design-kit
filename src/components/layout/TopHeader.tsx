import { MapPin, User } from 'lucide-react';

interface TopHeaderProps {
  title?: string;
  showProfile?: boolean;
}

export const TopHeader = ({ title = "YatraQ", showProfile = false }: TopHeaderProps) => {
  return (
    <header className="bg-white border-b border-border px-4 py-4 flex items-center justify-between sticky top-0 z-50">
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
          <span className="text-primary-foreground font-bold text-sm">Y</span>
        </div>
        <h1 className="text-title font-bold text-lg">{title}</h1>
      </div>
      
      {showProfile && (
        <div className="flex items-center gap-3">
          <button className="p-2 hover:bg-accent rounded-lg transition-colors">
            <MapPin className="w-5 h-5 text-body" />
          </button>
          <button className="p-2 hover:bg-accent rounded-lg transition-colors">
            <User className="w-5 h-5 text-body" />
          </button>
        </div>
      )}
    </header>
  );
};