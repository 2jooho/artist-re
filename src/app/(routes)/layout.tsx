import Menubar from '@/app/components/Menubar';

export default function RoutesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Menubar>
      {children}
    </Menubar>
  );
}