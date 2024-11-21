import { FC } from 'react';
import Image from 'next/image';
import { ButtonProps } from '@/features/types/menu';

interface NavigationButtonsProps {
  menuVisible: boolean;
  onMenuClick: () => void;
  onScrollClick: (location: 'top' | 'low') => void;
}

export const NavigationButtons: FC<NavigationButtonsProps> = ({
  menuVisible,
  onMenuClick,
  onScrollClick,
}) => (
  <>
    <button
      onClick={onMenuClick}
      className={`fixed z-[10000] w-[30px] h-[30px] top-[83%] right-0 bg-transparent cursor-pointer
                 transition-transform duration-1000 ${
                   menuVisible ? 'right-[0.5%] translate-x-0' : 'translate-x-full'
                 }`}
    >
      <Image src="/icons/menu.png" alt="menu" fill />
    </button>
    
    <button
      onClick={() => onScrollClick('top')}
      className="fixed z-[10000] w-[30px] h-[30px] top-[89%] right-[0.5%] bg-transparent cursor-pointer"
    >
      <Image src="/icons/top.png" alt="scroll to top" fill />
    </button>
    
    <button
      onClick={() => onScrollClick('low')}
      className="fixed z-[10000] w-[30px] h-[30px] top-[95%] right-[0.5%] bg-transparent cursor-pointer"
    >
      <Image src="/icons/low.png" alt="scroll to bottom" fill />
    </button>
  </>
);