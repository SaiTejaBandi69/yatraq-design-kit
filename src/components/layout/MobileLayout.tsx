import { ReactNode } from 'react';
import { TopHeader } from './TopHeader';
import { BottomNav } from './BottomNav';

interface MobileLayoutProps {
  children: ReactNode;
  title?: string;
  showProfile?: boolean;
  currentTab?: string;
}

export const MobileLayout = ({ children, title, showProfile = false, currentTab = 'home' }: MobileLayoutProps) => {
  return (
    <div className="min-h-screen bg-background flex flex-col max-w-sm mx-auto relative">
      <TopHeader title={title} showProfile={showProfile} />
      
      <main className="flex-1 px-4 py-6 pb-20 overflow-y-auto">
        {children}
      </main>
      
      <BottomNav currentTab={currentTab} />
    </div>
  );
};