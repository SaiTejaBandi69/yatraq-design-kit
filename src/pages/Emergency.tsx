import { MobileLayout } from '@/components/layout/MobileLayout';
import { Phone, MessageSquare, MapPin, Users, AlertTriangle, Shield } from 'lucide-react';

const Emergency = () => {
  const emergencyContacts = [
    {
      title: 'Emergency Hotline',
      number: '911',
      description: 'Police, Fire, Medical',
      icon: Phone,
      variant: 'destructive' as const
    },
    {
      title: 'Bus Security',
      number: '1-800-BUS-HELP',
      description: 'Report incidents',
      icon: Shield,
      variant: 'primary' as const
    },
    {
      title: 'Customer Support',
      number: '1-800-YATRAQ',
      description: 'General assistance',
      icon: MessageSquare,
      variant: 'secondary' as const
    }
  ];

  const quickActions = [
    {
      title: 'Share Location',
      description: 'Send your current location',
      icon: MapPin,
      action: () => {}
    },
    {
      title: 'Emergency Contacts',
      description: 'Contact trusted people',
      icon: Users,
      action: () => {}
    },
    {
      title: 'Report Issue',
      description: 'Report bus or safety issue',
      icon: AlertTriangle,
      action: () => {}
    }
  ];

  const handleCall = (number: string) => {
    window.location.href = `tel:${number}`;
  };

  return (
    <MobileLayout title="Emergency" currentTab="alerts">
      <div className="space-y-6 animate-fade-in">
        {/* SOS Section */}
        <div className="text-center space-y-4">
          <div className="w-24 h-24 bg-destructive rounded-full flex items-center justify-center mx-auto animate-pulse">
            <AlertTriangle className="w-12 h-12 text-destructive-foreground" strokeWidth={1.5} />
          </div>
          <div>
            <h2 className="text-title font-bold text-xl mb-2">Emergency SOS</h2>
            <p className="text-body text-sm">Get immediate help when you need it</p>
          </div>
        </div>

        {/* Emergency Contacts */}
        <div className="space-y-3">
          <h3 className="text-title font-semibold text-base">Emergency Contacts</h3>
          <div className="space-y-3">
            {emergencyContacts.map((contact, index) => {
              const Icon = contact.icon;
              return (
                <button
                  key={index}
                  onClick={() => handleCall(contact.number)}
                  className={`
                    w-full card-flat card-hover p-4 text-left transition-colors
                    ${contact.variant === 'destructive' ? 'border-destructive/20 hover:bg-destructive/5' : ''}
                    ${contact.variant === 'primary' ? 'border-primary/20 hover:bg-primary/5' : ''}
                    ${contact.variant === 'secondary' ? 'border-secondary/20 hover:bg-secondary/5' : ''}
                  `}
                >
                  <div className="flex items-center gap-4">
                    <div className={`
                      w-12 h-12 rounded-xl flex items-center justify-center
                      ${contact.variant === 'destructive' ? 'bg-destructive text-destructive-foreground' : ''}
                      ${contact.variant === 'primary' ? 'bg-primary text-primary-foreground' : ''}
                      ${contact.variant === 'secondary' ? 'bg-secondary text-secondary-foreground' : ''}
                    `}>
                      <Icon className="w-6 h-6" strokeWidth={1.5} />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-title">{contact.title}</h4>
                      <p className="text-body text-sm mb-1">{contact.description}</p>
                      <p className={`
                        text-sm font-medium
                        ${contact.variant === 'destructive' ? 'text-destructive' : ''}
                        ${contact.variant === 'primary' ? 'text-primary' : ''}
                        ${contact.variant === 'secondary' ? 'text-secondary' : ''}
                      `}>
                        {contact.number}
                      </p>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Quick Actions */}
        <div className="space-y-3">
          <h3 className="text-title font-semibold text-base">Quick Actions</h3>
          <div className="grid grid-cols-1 gap-3">
            {quickActions.map((action, index) => {
              const Icon = action.icon;
              return (
                <button
                  key={index}
                  onClick={action.action}
                  className="card-flat card-hover p-4 text-left"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center">
                      <Icon className="w-5 h-5 text-primary" strokeWidth={1.5} />
                    </div>
                    <div>
                      <h4 className="font-medium text-title text-sm">{action.title}</h4>
                      <p className="text-body text-xs">{action.description}</p>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Safety Tips */}
        <div className="card-flat p-4 space-y-3">
          <h3 className="text-title font-semibold text-base">Safety Tips</h3>
          <div className="space-y-2 text-sm">
            <p className="text-body">• Stay calm and assess the situation</p>
            <p className="text-body">• Move to a safe location if possible</p>
            <p className="text-body">• Share your location with trusted contacts</p>
            <p className="text-body">• Follow driver or authority instructions</p>
          </div>
        </div>
      </div>
    </MobileLayout>
  );
};

export default Emergency;