import { Shuffle, SkipBack, Play, SkipForward, Repeat, Mic2, LayoutList, Laptop2, Maximize2, Volume1 } from "lucide-react";
import Image from 'next/image'

export function Footer() {
  return (
    <footer className="bg-zinc-800 border-t border-zinc-700 p-4 flex items-center justify-between">
        <div className='flex items-center gap-2'>
          <Image className='rounded' src="/album2.jpg"  width={74} height={74} alt="album" />
          <div className="flex flex-col gap-2">
            <strong className='font-normal'>Rope</strong>
            <span className='text-xs text-zinc-400'>Foo Fighters</span>
          </div>
        </div>
        <div className='flex flex-col items-center gap-2'>
          <div className='flex items-center gap-6'>
            <Shuffle size={20} className='text-zinc-200'/>
            <SkipBack size={20} className='text-zinc-200'/>
            <button className='w-10 h-10 flex items-center justify-center pl-1 rounded-full bg-white text-black'>
              <Play /> 
            </button>
            <SkipForward size={20} className='text-zinc-200'/>
            <Repeat size={20} className='text-zinc-200'/>
          </div>
          <div className="flex items-center gap-2">
            <span className='text-xs text-zinc-400'>0:43</span>
            <div className='h-1 rounded-full w-96 bg-zinc-600'>
              <div className="bg-zinc-200 w-32 rounded-full h-1"></div>
            </div>
            <span className='text-xs text-zinc-400'>2:26</span>
          </div>
        </div>
        <div className='flex items-center gap-4'>
          <Mic2 size={20}/>
          <LayoutList size={20}/>
          <Laptop2 size={20}/>
          <div className='flex items-center gap-2'>
            <Volume1 size={20}/>
            <div className='h-1 rounded-full w-24 bg-zinc-600'>
              <div className="bg-zinc-200 w-12 rounded-full h-1"></div>
            </div>
          </div>
          <Maximize2 size={20}/>
        </div>
      </footer>
  )
}