import { Bus, Clock, MapPin } from 'lucide-react';

interface BusCardProps {
  busNumber: string;
  route: string;
  eta: string;
  status: 'on-time' | 'delayed' | 'arriving';
  onClick?: () => void;
}

export const BusCard = ({ busNumber, route, eta, status, onClick }: BusCardProps) => {
  const getStatusColor = () => {
    switch (status) {
      case 'on-time':
        return 'text-primary';
      case 'delayed':
        return 'text-secondary';
      case 'arriving':
        return 'text-destructive';
      default:
        return 'text-body';
    }
  };

  const getStatusText = () => {
    switch (status) {
      case 'on-time':
        return 'On Time';
      case 'delayed':
        return 'Delayed';
      case 'arriving':
        return 'Arriving';
      default:
        return '';
    }
  };

  return (
    <button
      onClick={onClick}
      className="w-full card-flat card-hover p-4 text-left"
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 bg-accent rounded-xl flex items-center justify-center">
            <Bus className="w-6 h-6 text-primary" strokeWidth={1.5} />
          </div>
          <div>
            <h3 className="font-semibold text-title text-base">{busNumber}</h3>
            <div className="flex items-center gap-1 mt-1">
              <MapPin className="w-4 h-4 text-body" strokeWidth={1.5} />
              <span className="text-body text-sm">{route}</span>
            </div>
          </div>
        </div>
        
        <div className="text-right">
          <div className="flex items-center gap-1 mb-1">
            <Clock className="w-4 h-4 text-body" strokeWidth={1.5} />
            <span className="font-semibold text-title text-sm">{eta}</span>
          </div>
          <span className={`text-xs font-medium ${getStatusColor()}`}>
            {getStatusText()}
          </span>
        </div>
      </div>
    </button>
  );
};