import { BackgroundBeams } from '../components/ui/background-beams';
import Headerbox from '../components/Headerbox';
import { HeroName } from '../components/HeroName';
import HeroPic from '../components/HeroPic';

export default function Home() {
  return (
    <main className='flex flex-col w-full h-screen'>
      <div className="h-screen w-full bg-neutral-950 relative flex flex-col antialiased">

        <BackgroundBeams />
        <div className='w-full'>
          <Headerbox />
        </div>

        <HeroName />
        <HeroPic />

      </div>
    </main>
  );
}
