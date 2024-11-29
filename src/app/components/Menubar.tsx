'use client';

import { usePathname } from 'next/navigation';
import { MenuItem } from './MenuItems';
import { NavigationButtons } from './NavigationButtons';
import { Logo } from './Logo';
import { useMenu } from '@/features/hooks/useMenu';
import { useAuth } from '@/features/hooks/useAuth';
import { scrollToPosition } from '@/shared/lib/utils/scroll';

interface MenubarProps {
  children: React.ReactNode;
}

export default function Menubar({ children }: MenubarProps) {
  const pathname = usePathname();
  const { isShowOptions, menuVisible, setMenuVisible, dropMenuRef } = useMenu();
  const { isLogin, handleLogout }:any = useAuth();
  
  if (
    pathname === '/PassSuccess/callback' ||
    pathname === '/aa/KAKAO/callback'
  ) {
    return (
      <div className={`flex flex-col mt-[7vh] ${menuVisible ? 'mt-0 transition-[margin-top] duration-300' : ''}`}>
        {children}
      </div>
    );
  }

  return (
    <div className="flex flex-col relative">
      <NavigationButtons
        menuVisible={menuVisible}
        onMenuClick={() => setMenuVisible(false)}
        onScrollClick={scrollToPosition}
      />

      <div className={`w-full h-[7%] flex items-center justify-center bg-[#0e0e0e] border-b border-[#b09464] 
                      fixed z-[10000] ${menuVisible ? 'transform -translate-y-full transition-transform duration-300' : ''}`}
      >
        <div className="flex gap-[22px] ml-[40px] absolute left-0">
          <MenuItem href="/About" label="ABOUT" />
          <MenuItem href="/Gallery" label="GALLERY" />
          <MenuItem href="/Star" label="STAR" />
          <MenuItem href="/Collabor" label="COLLAB" />
        </div>

        <Logo />

        <div ref={dropMenuRef} className="flex items-center justify-center gap-[22px] mr-[20px] absolute right-0">
          <MenuItem href="/Search" label="SEARCH" />
          <div className="relative">
            {isLogin ? (
              <button 
                onClick={handleLogout}
                className="text-[#b09464] hover:font-bold"
              >
                로그아웃
              </button>
            ) : (
              <MenuItem href="/login" label="로그인" />
            )}
          </div>
          <MenuItem href="https://aiblades.imweb.me/" label="SHOP" />
        </div>
      </div>

      <div className={`flex flex-col mt-[7vh] ${menuVisible ? 'mt-0 transition-[margin-top] duration-300' : ''}`}>
        {children}
      </div>
    </div>
  );
}