import { Orbitron } from 'next/font/google';
import Image from 'next/image';
import {Card} from '@/components/ui/card';

const orbitron = Orbitron({
  subsets: ['latin'],
  weight: ['400', '700'],
});

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-stone-200 to-stone-400 text-white flex flex-col items-center justify-center p-4">
      <div className="text-center">
        <Card className="p-32 rounded-xl border-stone-400 border-2 shadow-lg bg-stone-300">
        <div className="flex items-center justify-center gap-4 mb-32">
          <div className="w-full h-96 relative">
            <Image
              src="/silicium-logo.svg"
              alt="Silicium Logo"
              fill  
            />
          </div>
        </div>
        
        <div className="relative w-16 h-16 mx-auto mb-8">
          <div className="absolute inset-0 border-4 border-t-black border-r-transparent border-b-transparent border-l-transparent rounded-full animate-spin"></div>
          <div className="absolute inset-2 border-4 border-r-black border-t-transparent border-b-transparent border-l-transparent rounded-full animate-spin-slow"></div>
        </div>

        <h2 className="text-6xl font-bold mb-4 tracking-tighter text-black">This website is under construction!</h2>
        <p className="text-gray-700 text-3xl tracking-tighter">
          We're crafting something extraordinary. Stay tuned.
        </p>
        </Card>
      </div>
    </main>
  );
}
