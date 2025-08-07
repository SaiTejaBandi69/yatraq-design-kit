import { Search, X } from 'lucide-react';
import { useState } from 'react';

interface SearchInputProps {
  placeholder?: string;
  value?: string;
  onChange?: (value: string) => void;
  onClear?: () => void;
}

export const SearchInput = ({ 
  placeholder = "Search buses...", 
  value = '', 
  onChange,
  onClear 
}: SearchInputProps) => {
  const [focused, setFocused] = useState(false);

  const handleClear = () => {
    onChange?.('');
    onClear?.();
  };

  return (
    <div className={`
      relative bg-accent rounded-xl transition-all duration-200
      ${focused ? 'ring-2 ring-primary ring-opacity-20' : ''}
    `}>
      <div className="relative flex items-center">
        <Search className="absolute left-4 w-5 h-5 text-muted-foreground" strokeWidth={1.5} />
        <input
          type="text"
          value={value}
          onChange={(e) => onChange?.(e.target.value)}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          placeholder={placeholder}
          className="w-full bg-transparent pl-12 pr-12 py-4 text-body placeholder:text-muted focus:outline-none"
        />
        {value && (
          <button
            onClick={handleClear}
            className="absolute right-4 p-1 hover:bg-hover rounded-full transition-colors"
          >
            <X className="w-4 h-4 text-body" strokeWidth={1.5} />
          </button>
        )}
      </div>
    </div>
  );
};