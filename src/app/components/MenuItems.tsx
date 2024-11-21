import { FC } from 'react';
import Link from 'next/link';

interface MenuItemProps {
  href: string;
  label: string;
}

export const MenuItem: FC<MenuItemProps> = ({ href, label }) => (
  <Link
    href={href}
    className="p-[0.2vw] text-[0.8em] font-medium text-[#b09464] hover:font-bold cursor-pointer
               lg:text-[15px] md:text-[7px]"
  >
    {label}
  </Link>
);