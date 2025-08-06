import { MobileLayout } from '@/components/layout/MobileLayout';
import { SearchInput } from '@/components/ui/SearchInput';
import { BusCard } from '@/components/ui/BusCard';
import { Filter, MapPin } from 'lucide-react';
import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

const SearchBus = () => {
  const [searchParams] = useSearchParams();
  const [searchValue, setSearchValue] = useState(searchParams.get('q') || '');
  const [filteredBuses, setFilteredBuses] = useState<any[]>([]);

  const buses = [
    {
      id: '1',
      busNumber: '42A',
      route: 'Downtown - Central Station',
      eta: '5 min',
      status: 'on-time' as const
    },
    {
      id: '2',
      busNumber: '18B',
      route: 'Airport - City Center',
      eta: '12 min',
      status: 'delayed' as const
    },
    {
      id: '3',
      busNumber: '27C',
      route: 'Mall - University',
      eta: '2 min',
      status: 'arriving' as const
    },
    {
      id: '4',
      busNumber: '35D',
      route: 'Hospital - Beach Road',
      eta: '8 min',
      status: 'on-time' as const
    },
    {
      id: '5',
      busNumber: '19E',
      route: 'Station - Industrial Area',
      eta: '15 min',
      status: 'on-time' as const
    }
  ];

  useEffect(() => {
    if (searchValue.trim()) {
      const filtered = buses.filter(bus =>
        bus.busNumber.toLowerCase().includes(searchValue.toLowerCase()) ||
        bus.route.toLowerCase().includes(searchValue.toLowerCase())
      );
      setFilteredBuses(filtered);
    } else {
      setFilteredBuses(buses);
    }
  }, [searchValue]);

  return (
    <MobileLayout title="Search Buses" currentTab="search">
      <div className="space-y-6 animate-fade-in">
        {/* Search Header */}
        <div className="space-y-4">
          <SearchInput
            value={searchValue}
            onChange={setSearchValue}
            placeholder="Search bus number or route..."
          />
          
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-body" strokeWidth={1.5} />
              <span className="text-body text-sm">Near Downtown</span>
            </div>
            <button className="flex items-center gap-2 px-3 py-2 bg-accent rounded-lg hover:bg-hover transition-colors">
              <Filter className="w-4 h-4 text-body" strokeWidth={1.5} />
              <span className="text-body text-sm">Filter</span>
            </button>
          </div>
        </div>

        {/* Results */}
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <h3 className="text-title font-semibold text-base">
              {searchValue ? `Results for "${searchValue}"` : 'Nearby Buses'}
            </h3>
            <span className="text-body text-sm">{filteredBuses.length} found</span>
          </div>

          <div className="space-y-3">
            {filteredBuses.length > 0 ? (
              filteredBuses.map((bus, index) => (
                <BusCard
                  key={bus.id}
                  busNumber={bus.busNumber}
                  route={bus.route}
                  eta={bus.eta}
                  status={bus.status}
                  onClick={() => {}}
                />
              ))
            ) : (
              <div className="card-flat p-8 text-center">
                <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-8 h-8 text-body" strokeWidth={1.5} />
                </div>
                <h3 className="text-title font-semibold text-base mb-2">No buses found</h3>
                <p className="text-body text-sm">Try searching for a different route or bus number</p>
              </div>
            )}
          </div>
        </div>

        {/* Quick Filters */}
        <div className="space-y-3">
          <h3 className="text-title font-semibold text-base">Quick Filters</h3>
          <div className="flex gap-2 overflow-x-auto pb-2">
            {['All', 'On Time', 'Delayed', 'Arriving Soon'].map((filter, index) => (
              <button
                key={index}
                className={`px-4 py-2 rounded-xl text-sm font-medium whitespace-nowrap transition-colors ${
                  index === 0
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-accent text-body hover:bg-hover'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>
      </div>
    </MobileLayout>
  );
};

export default SearchBus;