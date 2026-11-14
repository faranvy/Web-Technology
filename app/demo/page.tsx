import ProductCard from '@/components/ProductCard';
import { ThemeToggle } from '@/components/ThemeToggle';

export default function DemoPage() {
  return (
    <main className="min-h-screen p-8 flex flex-col items-center justify-center gap-6">
      <div className="w-full max-w-2xl flex justify-between items-center">
        <h1 className="text-xl font-bold">Uji Coba Tailwind & Dark Mode</h1>
        <ThemeToggle />
      </div>
      <ProductCard />
    </main>
  );
}