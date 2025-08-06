import { MobileLayout } from '@/components/layout/MobileLayout';
import { Navigation, MapPin, Bus, Clock } from 'lucide-react';
import { useState } from 'react';

const RouteMap = () => {
  const [selectedBus, setSelectedBus] = useState<any>(null);

  const activeBuses = [
    {
      id: '42A',
      route: 'Downtown - Central Station',
      position: { lat: 40.7128, lng: -74.0060 },
      eta: '5 min',
      passengers: 23,
      status: 'on-time'
    },
    {
      id: '18B',
      route: 'Airport - City Center',
      position: { lat: 40.7580, lng: -73.9855 },
      eta: '12 min',
      passengers: 18,
      status: 'delayed'
    }
  ];

  return (
    <MobileLayout title="Live Map" currentTab="map">
      <div className="space-y-4 animate-fade-in">
        {/* Map Container */}
        <div className="relative h-80 bg-accent rounded-xl overflow-hidden">
          {/* Placeholder map with gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20">
            <div className="absolute inset-4 bg-white/10 rounded-lg backdrop-blur-sm flex items-center justify-center">
              <div className="text-center">
                <MapPin className="w-12 h-12 text-primary mx-auto mb-2" strokeWidth={1.5} />
                <p className="text-title font-medium">Interactive Map</p>
                <p className="text-body text-sm">Live bus tracking</p>
              </div>
            </div>
          </div>
          
          {/* Mock bus pins */}
          <div className="absolute top-20 left-16">
            <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center animate-pulse">
              <Bus className="w-3 h-3 text-white" strokeWidth={2} />
            </div>
          </div>
          <div className="absolute bottom-20 right-20">
            <div className="w-6 h-6 bg-secondary rounded-full flex items-center justify-center animate-pulse">
              <Bus className="w-3 h-3 text-white" strokeWidth={2} />
            </div>
          </div>
        </div>

        {/* Map Controls */}
        <div className="flex justify-between">
          <button className="flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-xl">
            <Navigation className="w-4 h-4" strokeWidth={1.5} />
            <span className="text-sm font-medium">My Location</span>
          </button>
          <button className="px-4 py-2 bg-accent text-body rounded-xl hover:bg-hover transition-colors">
            <span className="text-sm font-medium">Layers</span>
          </button>
        </div>

        {/* Active Buses */}
        <div className="space-y-3">
          <h3 className="text-title font-semibold text-base">Active Buses</h3>
          <div className="space-y-3">
            {activeBuses.map((bus) => (
              <div
                key={bus.id}
                className="card-flat card-hover p-4 cursor-pointer"
                onClick={() => setSelectedBus(bus)}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center">
                      <Bus className="w-6 h-6 text-primary-foreground" strokeWidth={1.5} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-title">{bus.id}</h4>
                      <p className="text-body text-sm">{bus.route}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="flex items-center gap-1 mb-1">
                      <Clock className="w-4 h-4 text-body" strokeWidth={1.5} />
                      <span className="text-title font-semibold text-sm">{bus.eta}</span>
                    </div>
                    <span className="text-body text-xs">{bus.passengers} passengers</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Route Information */}
        <div className="card-flat p-4 space-y-3">
          <h3 className="text-title font-semibold text-base">Route Information</h3>
          <div className="space-y-2">
            <div className="flex justify-between">
              <span className="text-body text-sm">Total Routes</span>
              <span className="text-title font-medium text-sm">24</span>
            </div>
            <div className="flex justify-between">
              <span className="text-body text-sm">Active Buses</span>
              <span className="text-title font-medium text-sm">18</span>
            </div>
            <div className="flex justify-between">
              <span className="text-body text-sm">Average Delay</span>
              <span className="text-secondary font-medium text-sm">3 min</span>
            </div>
          </div>
        </div>
      </div>
    </MobileLayout>
  );
};

export default RouteMap;