import { ReactNode } from 'react';
import { LucideIcon } from 'lucide-react';

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  subtitle?: string;
  onClick?: () => void;
  className?: string;
  variant?: 'default' | 'primary' | 'secondary';
}

export const FeatureCard = ({ 
  icon: Icon, 
  title, 
  subtitle, 
  onClick, 
  className = '',
  variant = 'default'
}: FeatureCardProps) => {
  const getVariantStyles = () => {
    switch (variant) {
      case 'primary':
        return 'bg-primary text-primary-foreground hover:bg-primary-hover';
      case 'secondary':
        return 'bg-secondary text-secondary-foreground hover:bg-secondary-hover';
      default:
        return 'bg-white text-card-foreground hover:bg-accent';
    }
  };

  return (
    <button
      onClick={onClick}
      className={`
        card-flat card-hover p-6 text-center transition-all duration-200 
        ${getVariantStyles()}
        ${className}
      `}
    >
      <div className="flex flex-col items-center gap-3">
        <div className={`
          w-12 h-12 rounded-xl flex items-center justify-center
          ${variant === 'default' ? 'bg-accent' : 'bg-white/20'}
        `}>
          <Icon 
            className={`w-6 h-6 ${variant === 'default' ? 'text-primary' : 'text-current'}`} 
            strokeWidth={1.5} 
          />
        </div>
        <div>
          <h3 className="font-semibold text-sm mb-1">{title}</h3>
          {subtitle && (
            <p className={`text-xs ${variant === 'default' ? 'text-body' : 'text-current opacity-80'}`}>
              {subtitle}
            </p>
          )}
        </div>
      </div>
    </button>
  );
};