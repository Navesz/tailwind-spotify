import { Home as HomeIcon, Search, Library, ChevronLeft, ChevronRight, Play, SkipForward, SkipBack, Shuffle, Repeat, Mic2, LayoutList, Laptop2, Volume, Maximize2, Volume1 } from 'lucide-react'
import Image from 'next/image'
import { Sidebar } from '@/components/Sidebar'
import { Footer } from '@/components/Footer'

export default function Home() {
  return (
    <div className="h-screen flex flex-col">
      <div className="flex flex-1">

        <Sidebar />
        <main className="flex-1 p-6">
          <div className="flex items-center gap-4">
            <button className='rounded-full bg-black/40 p-1'>
              <ChevronLeft />
            </button>
            <button className='rounded-full bg-black/40 p-1'>
              <ChevronRight />
            </button>
          </div>

          <h1 className='font-semibold text-3xl mt-10'>Good Afternoon</h1>

          <div className='grid grid-cols-3 gap-4 mt-4'>
            <a href="#" className='bg-white/5 rounded group flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors'>
              <Image src="/album1.jpg" width={104} height={104} alt="album" />
              <strong>Iron Maiden</strong>

              <button className='w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-10 invisible group-hover:visible'>
                <Play />
              </button>
            </a>
            <a href="#" className='bg-white/5 rounded group flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors'>
              <Image src="/album2.jpg" width={104} height={104} alt="album" />
              <strong>Pink Floid</strong>

              <button className='w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-10 invisible group-hover:visible'>
                <Play />
              </button>
            </a>
            <a href="#" className='bg-white/5 rounded group flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors'>
              <Image src="/album3.jpg" width={104} height={104} alt="album" />
              <strong>Nirvana</strong>

              <button className='w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-10 invisible group-hover:visible'>
                <Play />
              </button>
            </a>
            <a href="#" className='bg-white/5 rounded group flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors'>
              <Image src="/album4.jpg" width={104} height={104} alt="album" />
              <strong>The Beatles</strong>

              <button className='w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-10 invisible group-hover:visible'>
                <Play />
              </button>
            </a>
            <a href="#" className='bg-white/5 rounded group flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors'>
              <Image src="/album5.jpg" width={104} height={104} alt="album" />
              <strong>Pink Floid</strong>

              <button className='w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-10 invisible group-hover:visible'>
                <Play />
              </button>
            </a>
            <a href="#" className='bg-white/5 rounded group flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors'>
              <Image src="/album6.jpg" width={104} height={104} alt="album" />
              <strong>N.W.A</strong>

              <button className='w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-10 invisible group-hover:visible'>
                <Play />
              </button>
            </a>
          </div>

          <h1 className='font-semibold text-2xl mt-10'>Made for Leonardo Naves</h1>

          <div className='grid grid-cols-8 gap-4 mt-4'>
            <a href='' className='bg-white/5 p-3 flex flex-col gap-2 rounded-md hover:bg-white/10 transition-colors'>
              <Image src="/album6.jpg" className='w-full rounded-md' width={300} height={400} alt="album" />
              <strong className='font-semibold'>Daily Mix 1</strong>
              <span className='text-sm text-zinc-500'>Wallows, Coin, Girl in red and more</span>
            </a>
            <a href='' className='bg-white/5 p-3 flex flex-col gap-2 rounded-md hover:bg-white/10 transition-colors'>
              <Image src="/album7.jpg" className='w-full rounded-md' width={300} height={400} alt="album" />
              <strong className='font-semibold'>Daily Mix 1</strong>
              <span className='text-sm text-zinc-500'>Wallows, Coin, Girl in red and more</span>
            </a>
            <a href='' className='bg-white/5 p-3 flex flex-col gap-2 rounded-md hover:bg-white/10 transition-colors'>
              <Image src="/album8.jpg" className='w-full rounded-md' width={300} height={400} alt="album" />
              <strong className='font-semibold'>Daily Mix 1</strong>
              <span className='text-sm text-zinc-500'>Wallows, Coin, Girl in red and more</span>
            </a>
            <a href='' className='bg-white/5 p-3 flex flex-col gap-2 rounded-md hover:bg-white/10 transition-colors'>
              <Image src="/album1.jpg" className='w-full rounded-md' width={300} height={400} alt="album" />
              <strong className='font-semibold'>Daily Mix 1</strong>
              <span className='text-sm text-zinc-500'>Wallows, Coin, Girl in red and more</span>
            </a>
            <a href='' className='bg-white/5 p-3 flex flex-col gap-2 rounded-md hover:bg-white/10 transition-colors'>
              <Image src="/album2.jpg" className='w-full rounded-md' width={300} height={400} alt="album" />
              <strong className='font-semibold'>Daily Mix 1</strong>
              <span className='text-sm text-zinc-500'>Wallows, Coin, Girl in red and more</span>
            </a>
          </div>

        </main>
      </div>
      
      <Footer />
    </div>
  )
}
