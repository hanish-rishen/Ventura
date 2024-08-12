import Gallery from "../components/Gallery";
import { InfiniteMovingCards } from "../components/InfiniteMovingCards";
import { TracingBeam } from "../components/TracingBeam";
import { BentoGridDemo } from "../components/BentoGrid";

const creators = [
  { name: "Creator 1" },
  { name: "Creator 2" },
  { name: "Creator 3" },
  // Add more creators as needed
];

export default function Home() {
  return (
    <>
      <Gallery />
      <TracingBeam className="relative">
        <main className="flex w-full flex-col items-center justify-start">
          <div
            id='testimonials'
            className='h-[24rem] md:h-[32rem] w-full rounded-md flex flex-col antialiased bg-grid-primary/[0.05] items-center justify-center relative overflow-hidden'
          >
            <InfiniteMovingCards items={creators} direction='right' speed='slow' />
          </div>
          <BentoGridDemo />
          <p>End of main content</p>
        </main>
      </TracingBeam>
    </>
  );
}