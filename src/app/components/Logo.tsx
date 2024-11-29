import Image from 'next/image';
import Link from 'next/link';

export const Logo = () => (
  <Link href="/">
    <div className="relative w-[150px] h-[50px] lg:w-[180px] lg:ml-[100px] md:w-[80px]">
      <Image
        src="/images/img/main/logo.png"
        alt="Logo"
        fill
        className="object-contain"
      />
    </div>
  </Link>
);