import Header from '@/app/components/Header';

export default function PromotionsLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="w-full bg-gradient-to-b from-[#013993] to-[#0253C5]">
        <Header />
      </header>
      <main>{children}</main>
    </div>
  );
}
